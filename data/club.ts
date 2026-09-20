export const club = {
  name: 'Tranquiltone Sports Club', city: 'Kanpur', instagramHandle: '@tranquiltone7', instagramUrl: 'https://www.instagram.com/tranquiltone7/', whatsapp: '916387759153', phones: ['6387759153','9026222338'], tagline: 'Aiming to tone body & mind', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Tranquiltone+Sports+Club+Kanpur',
  notes: ['Players must carry their own cricket kit.','Prior slot booking is recommended.'],
  sports: ['Cricket nets','Football','Pickleball','Badminton'] as const,
  cricketModes: ['With bowling machine','Without bowling machine'] as const,
  cricketPackages: { withMachine: { daily: [{label:'5 overs',price:150},{label:'10 overs',price:200},{label:'15 overs',price:250},{label:'20 overs',price:300},{label:'25 overs',price:350}], monthly: [{label:'5 overs',price:2500},{label:'10 overs',price:3000},{label:'15 overs',price:3500},{label:'20 overs',price:4000},{label:'25 overs',price:4500}] }, withoutMachine: { daily: [{label:'1 hour (2 players)',price:300},{label:'2 hours (2 players)',price:600}], monthly: [{label:'1 hour daily',price:5000},{label:'2 hours daily',price:10000}] } },
  facilities: ['Professional cricket nets','Bowling machine practice','Season ball & tennis ball sessions','Side arm practice','Personal coaching (optional)','Indoor practice environment']
} as const;
export type Sport = (typeof club.sports)[number];
