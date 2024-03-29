const APIcontrol = {
  'total': 
{
  'current_system': {
    Messi: 613,
    Lewandowski: 580,
    Jorginho: 460,
    Benzema: 239,
    Kante: 187,
    Ronaldo: 178,
    Salah: 121,
    De_Bruyne: 73,
    Mbappe: 58,
    Donnarumma: 36,
    Haaland: 33,
    Lukaku: 26,
    Chiellini: 26,
    Bonucci: 18,
    Sterling: 10,
    Neymar: 9,
    Suarez: 8,
    Kjaer: 8,
    Mahrez: 7,
    Mount: 7,
    B_Fernandes: 6,
    L_Martinez: 6,
    Pedri: 3,
    Kane: 3,
    Foden: 2,
    Barella: 1,
    Moreno: 1,
    Dias: 1
  },
  'popularity': {
    Messi: 59,
    Lewandowski: 45,
    Jorginho: 31,
    Benzema: 11,
    Ronaldo: 8,
    Salah: 7,
    Kante: 5,
    De_Bruyne: 2,
    Mbappe: 2
  },
  'approval': {
    Messi: 148,
    Lewandowski: 143,
    Jorginho: 125,
    Benzema: 80,
    Ronaldo: 75,
    Kante: 75,
    Salah: 44,
    De_Bruyne: 29,
    Mbappe: 25,
    Haaland: 17,
    Lukaku: 14,
    Donnarumma: 14,
    Chiellini: 10,
    Bonucci: 9,
    Neymar: 7,
    Kjaer: 7,
    Suarez: 5,
    Sterling: 4,
    Pedri: 3,
    Mahrez: 3,
    B_Fernandes: 3,
    L_Martinez: 3,
    Mount: 2,
    Foden: 1,
    Barella: 1,
    Moreno: 1,
    Dias: 1,
    Kane: 1
  },
  'runoff': { 
    Messi: 86,
    Lewandowski: 78,
    Jorginho: 'No.3 round',
    Benzema: 'No.2 round',
    Ronaldo: 'No.1 round',  
  },
  'borda_count': {
    Messi: 406,
    Lewandowski: 392,
    Jorginho: 304,
    Benzema: 148,
    Kante: 107,
    Ronaldo: 95,
    Salah: 70,
    De_Bruyne: 42,
    Mbappe: 31,
    Donnarumma: 22,
    Haaland: 16,
    Chiellini: 16,
    Lukaku: 12,
    Bonucci: 9,
    Sterling: 6,
    Mount: 5,
    Mahrez: 4,
    B_Fernandes: 3,
    Suarez: 3,
    L_Martinez: 3,
    Neymar: 2,
    Kane: 2,
    Foden: 1,
    Kjaer: 1,
    Pedri: 0,
    Barella: 0,
    Moreno: 0,
    Dias: 0
  },
  tideman: {
    'Messi': 0 +' defeat', 
    'Lewandowski': 1 + ' defeats',
    'Jorginho': 2 +' defeats', 
    'Benzema': 3 +' defeats', 
    'Kante': 4 +' defeats', 
  }
}
, 'top_10':
{
  'current_system': {
    Messi: 30,
    Lewandowski: 29,
    Jorginho: 28,
    Benzema: 17,
    Ronaldo: 13,
    Kante: 12,
    Mbappe: 10,
    De_Bruyne: 9,
    Lukaku: 3,
    Donnarumma: 2,
    Salah: 2,
    Suarez: 2,
    Kjaer: 1,
    Pedri: 1,
    Neymar: 1
  },
  popularity: {
    Lewandowski: 2,
    Jorginho: 2,
    Messi: 2,
    Benzema: 1,
    Ronaldo: 1,
    Kante: 1,
    De_Bruyne: 1
  },
  approval: {
    Lewandowski: 8,
    Jorginho: 8,
    Messi: 7,
    Mbappe: 4,
    Ronaldo: 4,
    Benzema: 4,
    Kante: 3,
    De_Bruyne: 3,
    Salah: 2,
    Lukaku: 2,
    Donnarumma: 1,
    Kjaer: 1,
    Suarez: 1,
    Pedri: 1,
    Neymar: 1
  },
  runoff: {
    Jorginho: 5,
  Lewandowski: 4,
  Messi: 'No.3 round',
  Benzema: 'No.2 round',
  Ronaldo: 'No.1 round'
  },
  'borda_count': {
    Messi: 21,
    Lewandowski: 19,
    Jorginho: 18,
    Benzema: 12,
    Ronaldo: 8,
    Kante: 8,
    Mbappe: 6,
    De_Bruyne: 5,
    Donnarumma: 1,
    Lukaku: 1,
    Suarez: 1,
    Salah: 0,
    Kjaer: 0,
    Pedri: 0,
    Neymar: 0
  },
  tideman: { 
    'Jorginho': 1 +' defeat',
    'Lewandowski': 1 + ' defeats', 
    'Messi': 1 +' defeats',
    'Benzema': 3 +' defeats', 
    'Kante': 4 +' defeats', 
  }
},
"top_5": {},
"europe": {},
"asia/pacific": {},
'latin': {}
}

export default function handler(req, res) {
  res.status(200).json(APIcontrol);
}
