const APIport = {
    total: {
        'current_system': {
            'Lewandowski': 1679,
            'Messi': 1007,
            'Salah': 631,
            'Benzema': 494,
            'Jorginho': 462,
            'N’Golo Kanté': 347,
            'Cristiano Ronaldo': 286,
            'Kevin De Bruyne': 177,
            'Kylian Mbappé': 167,
            'Erling Haaland': 50,
            'Neymar': 37
          },
        popularity: {
            'Lewandowski': 242,
            'Messi': 125,
            'Salah': 63,
            'Benzema': 42,
            'Jorginho': 41,
            'Cristiano Ronaldo': 26,
            "Kanté": 23,
            'Kylian Mbappé': 16,
            'Kevin De Bruyne': 11,
            'Neymar': 3,
            'Erling Haaland': 1
          },
          approval: {
            'Lewandowski': 441,
            'Messi': 305,
            'Salah': 225,
            'Jorginho': 186,
            'Benzema': 182,
            "Kanté": 147,
            'Ronaldo': 110,
            'Kevin De Bruyne': 73,
            'Kylian Mbappé': 67,
            'Erling Haaland': 28,
            'Neymar': 15
          },
          'borda_count': {
            'Lewandowski': 619,
            'Messi': 351,
            'Salah': 203,
            'Benzema': 156,
            'Jorginho': 138,
            "N'Golo Kanté": 100,
            'Cristiano Ronaldo': 88,
            'Kevin De Bruyne': 52,
            'Kylian Mbappé': 50,
            'Erling Haaland': 11,
            'Neymar': 11
          },
          tideman: {
            'Lewandowski': 0 +' defeat', 
            'Messi': 1 + ' defeats',
            'Salah': 2 +' defeats', 
            'Benzema': 3 +' defeats', 
            'Jorginho': 4 +' defeats', 
          },
          runoff: {
            'Lewandowski': 347, 
            'Messi': 180,
            'Salah': 'No.3 round',
            'Benzema': 'No.2 round',
            'Jorginho': 'No.1 round',            
          }
    },
    top_10: {
            'current_system': {
              'Lewandowski': 80,
              'Messi': 47,
              'Jorginho': 38,
              'Benzema': 23,
              'Kante': 23,
              'Kevin De Bruyne': 15,
              'Mohamed Salah': 15,
              'Kylian Mbappé': 14,
              'Neymar': 11,
              'Cristiano Ronaldo': 3,
              'Erling Haaland': 1
            },
            popularity: {
              'Lewandowski': 10,
              'Messi': 7,
              'Jorginho': 4,
              'Benzema': 3,
              'Neymar': 2,
              'N’Golo Kanté': 2,
              'Mohamed Salah': 1,
              'Kevin De Bruyne': 1
            },
            approval: {
              'Lewandowski': 22,
              'Jorginho': 14,
              'Messi': 13,
              'Kante': 11,
              'Karim Benzema': 9,
              'Kylian Mbappé': 6,
              'Kevin De Bruyne': 5,
              'Mohamed Salah': 5,
              'Neymar': 3,
              'Erling Haaland': 1,
              'Cristiano Ronaldo': 1
            },
            runoff: {
                'Lewandowski': 18,
                'Jorginho': 7,
                'Messi': 'No.3 round',
                'Benzema': 'No.2 round',
                'Neymar': 'No.1 round'
            },
            'borda_count': {
              'Robert Lewandowski': 29,
              'Lionel Messi': 17,
              'Jorginho': 12,
              'Karim Benzema': 7,
              'N’Golo Kanté': 6,
              'Kevin De Bruyne': 5,
              'Mohamed Salah': 5,
              'Neymar': 4,
              'Kylian Mbappé': 4,
              'Cristiano Ronaldo': 1,
              'Erling Haaland': 0
            },
            tideman: {
                'Lewandowski': '0 defeat',
                'Jorginho': '1 defeat',
                'Messi': "2 defeats",
                'Benzema': '3 defeats',
                'Neymar': '4 defeats'
            }
    },
    top_5: {
        tideman: {
            'Lewandowski': '0 defeat',
            Jorginho: '1 defeat',
            'Messi': '2 defeats',
            'Benzema': '3 defeats',
            'Neymar': '4 defeats'
        },
        'current_system': {
            'Lewandowski': 45,
            Jorginho: 28,
            'Messi': 26,
            'Benzema': 11,
            'Mbappe': 8,
            'N’Golo Kanté': 6,
            'Mohamed Salah': 6,
            'Kevin De Bruyne': 4,
            'Erling Haaland': 1
          },
          popularity: {
            'Lewandowski': 6,
            Jorginho: 4,
            'Messi': 3,
            'Benzema': 2
          },
          approval: {
            'Lewandowski': 11,
            'Messi': 8,
            Jorginho: 8,
            'Kante': 6,
            'Mbappe': 4,
            'Karim Benzema': 3,
            'Mohamed Salah': 2,
            'Kevin De Bruyne': 2,
            'Erling Haaland': 1
          },
          runoff: {
            'Lewandowski': 11,
            Jorginho: 'No.4 round',
            'Messi': 'No.3 round',
            'Benzema': 'No.2 round',
            'Mbappe': 'No.1 round'
          },
          'borda_count': {
            'Lewandowski': 17,
            Jorginho: 10,
            'Messi': 9,
            'Benzema': 4,
            'Mbappe': 2,
            'Mohamed Salah': 2,
            'Kevin De Bruyne': 1,
            'N’Golo Kanté': 0,
            'Erling Haaland': 0
          }
    },
    europe: {},
    'asia/pacific': {},
    latin: {}

    
  }
  export default function handler(req, res) {
    res.status(200).json(APIport);
  }