// Monthly electricity bill ranges. Used by every lead form so the saved data is consistent.
// `value` is a representative amount stored in the "bill" column for reporting.
export const BILL_RANGES = [
  { id: 'lt1500', label: 'Less than ₹1,500', value: 1000 },
  { id: '1500-2500', label: '₹1,500 – ₹2,500', value: 2000 },
  { id: '2500-4000', label: '₹2,500 – ₹4,000', value: 3250 },
  { id: '4000-8000', label: '₹4,000 – ₹8,000', value: 6000 },
  { id: 'gt8000', label: 'More than ₹8,000', value: 9000 },
]

// Band id for a bill amount (used to pre-select the popup's bill chip). '' when there is no amount.
export function bandIdForBill(bill) {
  if (bill === null || bill === undefined || !Number.isFinite(bill)) return ''
  if (bill < 1500) return 'lt1500'
  if (bill <= 2500) return '1500-2500'
  if (bill <= 4000) return '2500-4000'
  if (bill <= 8000) return '4000-8000'
  return 'gt8000'
}