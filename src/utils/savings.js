export const MIN_BILL = 2500
export const MAX_BILL = 30000
export const SOLAR_BILL = 300

export const formatINR = (n) => '₹' + Math.round(n).toLocaleString('en-IN')

const centralSubsidy = (kw) => (kw >= 3 ? 78000 : kw >= 2 ? 60000 + (kw - 2) * 18000 : kw * 30000)
const stateSubsidy = (kw) => (kw >= 3 ? 22000 : kw >= 2 ? 10000 : 5000)

// Estimate system size, savings and payback from a bimonthly electricity bill
export function estimateSavings(bill) {
  const kw = Math.round((bill / 1820) * 10) / 10
  const annualSavings = bill * 6
  const netCost = kw * 66000 - centralSubsidy(kw) - stateSubsidy(kw)
  const payback = netCost / annualSavings

  return {
    kw,
    annualSavings,
    lifetimeSavings: annualSavings * 25,
    payback: Math.round(payback * 10) / 10,
    roi: Math.round(100 / payback),
  }
}
