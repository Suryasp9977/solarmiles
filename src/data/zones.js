export const zones = {
  Central: ['T. Nagar', 'Nungambakkam', 'Alwarpet', 'Mylapore', 'Mandaveli', 'Royapettah', 'Egmore', 'Kilpauk', 'Chetpet', 'Vepery', 'Purasawalkam', 'Triplicane', 'Gopalapuram', 'Teynampet', 'Pudupet', 'Kodambakkam', 'Saidapet', 'Guindy', 'Ashok Nagar', 'K.K. Nagar', 'Vadapalani', 'Virugambakkam', 'Choolaimedu', 'Aminjikarai', 'Anna Salai', 'Thousand Lights', 'Chintadripet'],
  South: ['Adyar', 'Besant Nagar', 'Thiruvanmiyur', 'Velachery', 'Medavakkam', 'Pallikaranai', 'Perungudi', 'Sholinganallur', 'Thoraipakkam', 'Karapakkam', 'Navalur', 'Padur', 'Siruseri', 'Kelambakkam', 'Kotturpuram', 'Uthandi', 'Injambakkam', 'Neelankarai', 'Palavakkam', 'Madipakkam', 'Nanganallur', 'Keelkattalai', 'Kovilambakkam', 'Adambakkam', 'Alandur', 'St. Thomas Mount', 'Selaiyur', 'Sembakkam', 'Camp Road', 'Pammal', 'Pallavaram', 'Chromepet', 'Tambaram East', 'Tambaram West', 'Chitlapakkam', 'Santhoshpuram', 'Potheri', 'Guduvanchery', 'Perumbakkam', 'Semmancheri', 'Kottivakkam'],
  West: ['Anna Nagar', 'Mogappair', 'Ambattur', 'Nolambur', 'Ayanambakkam', 'Porur', 'Iyyappanthangal', 'Gerugambakkam', 'Kattupakkam', 'Mangadu', 'Valasaravakkam', 'Ramapuram', 'Maduravoyal', 'Poonamallee', 'Avadi', 'Thiruverkadu', 'Koyambedu', 'Thirumangalam', 'Villivakkam', 'Padi', 'Korattur', 'Puzhal', 'Vanagaram', 'Thirumullaivoyal', 'Pattabiram', 'Alapakkam', 'SIDCO Industrial Estate'],
  North: ['Perambur', 'Kolathur', 'Ayanavaram', 'Vyasarpadi', 'Washermanpet', 'Tondiarpet', 'Madhavaram', 'Korukkupet', 'Ennore', 'Royapuram', 'Manali', 'Sembium', 'Red Hills', 'Erukanchery', 'Kodungaiyur', 'Sowcarpet', 'Basin Bridge', 'Otteri', 'Moolakadai', 'Mathur', 'Tiruvottiyur', 'Retteri', 'Vallalar Nagar', 'Sharma Nagar'],
}

// Schematic map shapes for each zone (viewBox 0 0 400 440)
export const zoneShapes = [
  { zone: 'North', points: '120,20 290,30 310,140 150,130', label: { x: 200, y: 85 } },
  { zone: 'West', points: '20,130 150,130 170,270 30,300', label: { x: 85, y: 235 } },
  { zone: 'Central', points: '150,130 310,140 300,260 170,270', label: { x: 235, y: 205 } },
  { zone: 'South', points: '30,300 170,270 300,260 330,420 60,420', label: { x: 185, y: 355 } },
]
