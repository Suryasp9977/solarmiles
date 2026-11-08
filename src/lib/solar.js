// Single source of truth for every solar number in the app.
// Used by the UI (src/App.jsx) and by the serverless API (api/solar-plan.js),
// so the screen and the API can never disagree.
//
// All figures are INDICATIVE. Tariff, subsidy, generation and cost must be
// verified against DISCOM tariff, sanctioned load and a site survey before a
// final quotation.

export const MIN_BILL = 500
export const MAX_BILL = 100000

export const TARIFF_PER_UNIT = 8.5 // ₹ per kWh, blended indicative rate
export const GEN_PER_KW_MONTH = 150 // kWh per kW per month, flat roof (Chennai indicative)
export const GEN_PER_KW_MONTH_SLOPED = 135 // sloped / tile roof
export const GEN_RANGE_FACTOR = 1.083 // upper end of the generation range
export const COST_PER_KW = 80000 // ₹ system price per kW before subsidy
export const SUBSIDY_CAP = 78000 // ₹ central subsidy cap for residential systems
export const SQFT_PER_KW = 100 // roof area needed per kW
export const PANEL_WATTS = 400
export const CO2_KG_PER_KWH = 0.62 // assumption, verify with current grid factor
export const LIFETIME_YEARS = 25

export const ROOF_OPTIONS = ['RCC (Flat)', 'Metal sheet', 'Tile / sloped', 'Not sure']
export const PROPERTY_OPTIONS = ['Independent house', 'Apartment / villa', 'Commercial']
export const AREA_OPTIONS = [200, 300, 400, 500, 600, 800, 1000]
export const DEFAULT_BILL = 5000
export const DEFAULT_DETAILS = { roof: 'RCC (Flat)', area: 400, property: 'Independent house' }

const MOUNT_LABEL = {
  'RCC (Flat)': 'RCC roof',
  'Metal sheet': 'metal sheet roof',
  'Tile / sloped': 'sloped roof',
  'Not sure': 'roof (confirmed on survey)',
}
export const mountLabel = (roof) => MOUNT_LABEL[roof] ?? 'roof'

export const formatINR = (n) => '₹' + Math.round(n).toLocaleString('en-IN')
export const formatNumber = (n) => Math.round(n).toLocaleString('en-IN')
export const isValidBill = (b) => Number.isFinite(b) && b >= MIN_BILL && b <= MAX_BILL
export const lakhs = (n) => Math.round(n / 100000)

const roundTo = (n, step) => Math.round(n / step) * step
const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n))

// PM Surya Ghar style residential subsidy: ₹30k/kW for first 2 kW, ₹18k for the 3rd kW, capped.
export function subsidyFor(kw) {
  const first = 30000 * Math.min(kw, 2)
  const third = 18000 * Math.max(0, Math.min(kw, 3) - 2)
  return Math.min(SUBSIDY_CAP, Math.round(first + third))
}

// Present value of a 25-year annuity of 1 per year growing at `rate`.
const annuity = (rate) => (Math.pow(1 + rate, LIFETIME_YEARS) - 1) / rate

export function calculatePlan({ bill, roof = DEFAULT_DETAILS.roof, area = DEFAULT_DETAILS.area }) {
  if (!isValidBill(bill)) return null

  const genPerKw = roof === 'Tile / sloped' ? GEN_PER_KW_MONTH_SLOPED : GEN_PER_KW_MONTH
  const rawKw = bill / TARIFF_PER_UNIT / genPerKw
  const recommendedKw = clamp(Math.ceil(rawKw * 2) / 2, 1, 20)
  const areaCapKw = Math.max(1, area / SQFT_PER_KW)
  const kw = Math.min(recommendedKw, areaCapKw)
  const cappedByArea = kw < recommendedKw

  // Share of consumption the system covers (1 = fully covered).
  const coverage = Math.min(1, kw / rawKw)
  // Residual bill after solar: 10–16% of today's bill when fully covered.
  const billAfterLow = bill * (1 - 0.9 * coverage)
  const billAfterHigh = bill * (1 - 0.84 * coverage)

  const annualLow = (bill - billAfterHigh) * 12
  const annualHigh = (bill - billAfterLow) * 12
  const annualMid = (annualLow + annualHigh) / 2

  const systemCost = kw * COST_PER_KW
  const subsidy = subsidyFor(kw)
  const netInvestment = systemCost - subsidy

  const genLowMonth = kw * genPerKw
  const genHighMonth = genLowMonth * GEN_RANGE_FACTOR
  const annualUnits = genLowMonth * 12

  // Cumulative savings year by year at a 4.5% tariff escalation, used for the chart.
  const cumulative = Array.from({ length: LIFETIME_YEARS }, (_, i) =>
    annualMid * ((Math.pow(1.045, i + 1) - 1) / 0.045),
  )

  return {
    bill,
    roof,
    area,
    kw,
    kwLabel: Number.isInteger(kw) ? String(kw) : kw.toFixed(1),
    recommendedKw,
    cappedByArea,
    panels: Math.ceil((kw * 1000) / PANEL_WATTS),
    billAfterLow: roundTo(billAfterLow, 10),
    billAfterHigh: roundTo(billAfterHigh, 10),
    pctLow: Math.round(84 * coverage),
    pctHigh: Math.round(90 * coverage),
    annualSavingsLow: roundTo(annualLow, 1000),
    annualSavingsHigh: roundTo(annualHigh, 1000),
    systemCost,
    subsidy,
    netInvestment,
    paybackLow: Math.max(0, Math.round((netInvestment / annualHigh) * 10) / 10),
    paybackHigh: Math.max(0, Math.round((netInvestment / annualLow) * 10) / 10),
    genLow: roundTo(genLowMonth, 5),
    genHigh: roundTo(genHighMonth, 5),
    unitsPerDayLow: Math.round(genLowMonth / 30),
    unitsPerDayHigh: Math.round(genHighMonth / 30),
    annualUnits: Math.round(annualUnits),
    co2Tonnes: Math.round((annualUnits * CO2_KG_PER_KWH) / 100) / 10,
    lifetimeLow: annualLow * annuity(0.04),
    lifetimeHigh: annualHigh * annuity(0.05),
    cumulative,
  }
}
