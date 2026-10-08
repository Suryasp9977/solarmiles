export const MIN_BILL = 1500
export const MAX_BILL = 50000

const ASSUMED_TARIFF = 8
const GENERATION_PER_KW_MONTH = 120
const OFFSET = 0.85

export const formatINR = (n) =>
  '₹' + Math.round(n).toLocaleString('en-IN')

export function estimateSavings(monthlyBill) {
  const monthlyUnits = monthlyBill / ASSUMED_TARIFF
  const rawKw = monthlyUnits / GENERATION_PER_KW_MONTH

  const kw = Math.max(
    1,
    Math.min(20, Math.ceil(rawKw * 2) / 2)
  )

  const annualSavings = monthlyBill * 12 * OFFSET

  const indicativeNetBill = Math.max(
    0,
    monthlyBill * (1 - OFFSET)
  )

  const systemCost = kw * 65000
  const payback = systemCost / annualSavings

  return {
    kw,
    annualSavings,
    indicativeNetBill,
    lifetimeSavings: annualSavings * 25,
    payback: Math.round(payback * 10) / 10,
    roi: Math.round((1 / payback) * 100),
    assumptions: {
      tariff: ASSUMED_TARIFF,
      generation: GENERATION_PER_KW_MONTH,
      offset: OFFSET
    },
  }
}