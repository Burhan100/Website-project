// ═══════════ SHARED DATA ═══════════
// Used by: browse.html, admin.html, profile.html, booking.html, hall.html

const VENUES = [
    { id:1, name:"Villa Balbianello",   loc:"Lake Como",          region:"Lombardy",     guests:200, price:45000, badge:"",          desc:"Spectacular lakeside villa with loggia overlooking the water. Featured in Star Wars and James Bond.",       img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
    { id:2, name:"Castello di Ama",     loc:"Chianti, Tuscany",   region:"Tuscany",      guests:120, price:28000, badge:"Popular",    desc:"A stunning 12th-century castle amid Chianti vineyards, producing award-winning wines.",                    img:"https://images.unsplash.com/photo-1504093376055-b9c3a3e7fef4?w=600&q=80" },
    { id:3, name:"Villa d'Este",         loc:"Lake Como",          region:"Lombardy",     guests:300, price:75000, badge:"Luxury",     desc:"A legendary 16th-century palace with magnificent gardens stretching down to the lake.",                     img:"https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?w=600&q=80" },
    { id:4, name:"Tenuta di Papiano",   loc:"Umbria",             region:"Umbria",       guests:80,  price:14000, badge:"Boutique",   desc:"An intimate stone farmhouse set on rolling Umbrian hills, surrounded by olive groves.",                     img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
    { id:5, name:"Villa Rufolo",        loc:"Ravello, Amalfi",    region:"Amalfi Coast", guests:150, price:35000, badge:"",          desc:"Perched 350m above the sea, with terraced gardens that inspired Wagner's Parsifal.",                        img:"https://images.unsplash.com/photo-1556040220-4096d522378d?w=600&q=80" },
    { id:6, name:"Palazzo Cavalli",     loc:"Venice",             region:"Veneto",       guests:100, price:22000, badge:"",          desc:"A magnificent Gothic palace on the Grand Canal with breathtaking Venetian views.",                          img:"https://images.unsplash.com/photo-1574442626822-6e4b8d0a6174?w=600&q=80" },
    { id:7, name:"Borgo San Felice",    loc:"Siena, Tuscany",     region:"Tuscany",      guests:180, price:42000, badge:"Featured",   desc:"A medieval hamlet transformed into a luxury retreat amid Tuscan vineyards and cypress trees.",              img:"https://images.unsplash.com/photo-1482275548304-a58859dc31b7?w=600&q=80" },
    { id:8, name:"Villa Cimbrone",      loc:"Ravello, Amalfi",    region:"Amalfi Coast", guests:60,  price:18000, badge:"",          desc:"Breathtaking hilltop gardens with the famous Terrace of Infinity overlooking the Amalfi coast.",             img:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80" },
    { id:9, name:"Relais Il Canalicchio",loc:"Perugia, Umbria",   region:"Umbria",       guests:90,  price:16000, badge:"",          desc:"A restored medieval village perched on a hilltop with panoramic views of the Tiber valley.",                 img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
    { id:10,name:"Villa San Michele",   loc:"Florence, Tuscany",  region:"Tuscany",      guests:110, price:55000, badge:"Luxury",    desc:"A former 15th-century monastery designed by Michelangelo, set in stunning Fiesole hillside.",                img:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80" },
    { id:11,name:"Masseria Il Frantoio",loc:"Puglia",             region:"Tuscany",      guests:70,  price:12000, badge:"Hidden Gem", desc:"A working olive oil farm with whitewashed trulli and ancient olive groves.",                              img:"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=80" },
    { id:12,name:"Villa Tasca",         loc:"Palermo, Sicily",    region:"Veneto",       guests:250, price:38000, badge:"",          desc:"A magnificent 18th-century Sicilian villa surrounded by one of the most beautiful gardens in Sicily.",       img:"https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=600&q=80" },
];

const TESTIMONIALS = [
    { name:"Sarah & Marco",  venue:"Villa Balbianello",  date:"June 2024",  stars:5, text:"Working with Rosalind was the best decision we made. They found us the most breathtaking villa and every detail was perfect.",                                              img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { name:"Emma & Luca",    venue:"Castello di Ama",    date:"Sept 2024",  stars:5, text:"From the first email to the last dance, Rosalind was there every step. Our Chianti wedding exceeded every dream.",                                                          img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
    { name:"Dianne & Adrian",venue:"Villa d'Este",        date:"May 2024",   stars:5, text:"The venue overlooked the most gorgeous lake valley. Our guests are still talking about it. Absolutely magical.",                                                            img:"https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&q=80" },
    { name:"Zoe & Adrian",   venue:"Villa Cimbrone",     date:"Oct 2024",   stars:5, text:"I was nervous planning an Italian wedding from abroad but Rosalind made it seamless. The Amalfi backdrop was everything.",                                                  img:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80" },
    { name:"Claire & Roberto",venue:"Borgo San Felice",  date:"July 2024",  stars:5, text:"The team anticipated every need before we even asked. The flowers, food, music — it all flowed beautifully.",                                                               img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" },
    { name:"Alice & James",  venue:"Palazzo Cavalli",    date:"Aug 2024",   stars:5, text:"A Venice wedding had always been our fantasy. Rosalind made it flawless. Arriving by gondola is a memory we'll never forget.",                                             img:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80" },
];

const HALLS = [
    { id:1, name:"Grand Ballroom",  cap:"Up to 300 guests", price:"€8,500", desc:"Our largest and most opulent space with crystal chandeliers and a private terrace.", img:"https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&q=80" },
    { id:2, name:"Garden Pavilion", cap:"Up to 120 guests", price:"€4,200", desc:"A stunning glass and iron pavilion overlooking the formal Italian gardens.",         img:"https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&q=80" },
    { id:3, name:"Cellar Room",     cap:"Up to 60 guests",  price:"€2,800", desc:"An intimate stone-vaulted cellar perfect for smaller celebrations and dinners.",     img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80" },
];

const BOOKINGS = [
    { id:"BK-001", client:"Sarah & Marco",    venue:"Villa Balbianello", region:"Lombardy",     date:"2025-06-14", guests:85,  status:"Confirmed",  amount:"€45,000" },
    { id:"BK-002", client:"Emma & Luca",      venue:"Castello di Ama",   region:"Tuscany",      date:"2025-09-20", guests:120, status:"Confirmed",  amount:"€28,000" },
    { id:"BK-003", client:"Dianne & Adrian",  venue:"Villa d'Este",       region:"Lombardy",     date:"2025-05-08", guests:200, status:"Confirmed",  amount:"€75,000" },
    { id:"BK-004", client:"Zoe & Adrian",     venue:"Villa Cimbrone",    region:"Amalfi Coast", date:"2025-10-15", guests:60,  status:"Pending",    amount:"€18,000" },
    { id:"BK-005", client:"Claire & Roberto", venue:"Borgo San Felice",  region:"Tuscany",      date:"2025-07-22", guests:180, status:"Confirmed",  amount:"€42,000" },
    { id:"BK-006", client:"Alice & James",    venue:"Palazzo Cavalli",   region:"Veneto",       date:"2025-08-09", guests:100, status:"Pending",    amount:"€22,000" },
    { id:"BK-007", client:"Fiona & Davide",   venue:"Villa Rufolo",      region:"Amalfi Coast", date:"2025-04-30", guests:150, status:"Cancelled",  amount:"€35,000" },
    { id:"BK-008", client:"Grace & Luca",     venue:"Villa San Michele", region:"Tuscany",      date:"2025-11-05", guests:80,  status:"Pending",    amount:"€55,000" },
];
