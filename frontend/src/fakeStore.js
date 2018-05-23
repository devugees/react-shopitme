const fakeStore = {
  listId: 3323,
  shopper:{
    firstname: 'Alice',
    lastname: 'Doe',
    username: 'AliDoe',
    email: 'alice.doe@mail.com',
    accountPage: 'user323223',
    rating: 4,
    coords:{
      lat: 52.524055,
      lng: 13.478765,
    },
    deliverAdress:{
      street: 'Munsterstrasse',
      number: '56',
      postcode: '12345',
      city: 'Bernau',
      mobile: '644099344'
    },
  },
  orderers:[
    {
      orderId: 3324,
    firstname: 'Bob',
    lastname: 'Doe',
    username: 'Bobby',
    email: 'boobyy@gmail.com',
    accountPage: 'user324332',
    rating: 3,
    coords:{
      lat: 52.522955,
      lng: 13.477175,
    },
    deliverAdress:{
      street: 'Sonnenallee',
      number: '154',
      postcode: '12055',
      city: 'Berlin',
      mobile: '01453099344'
    },
    deliveringTime:{
      start:'14:00',
      end:'16:00',
      date:'23.03.18'
    },
    shop: 'Rewe',
    items:
    [{
      status:'box',
      todo:"5 little breads"
    },{
      status:'box',
      todo:"Bateries AAA pack of 4"
    },{ 
      status:'box',
      todo:"Ice Cream triple flavour"
    },{
      status:'box',
      todo:"2x Orange Juice low sugar"
    }
    ],
    notes:'Bring me all in a box please. Thank you', 
  },
{
   orderId:3325,
    firstname: 'Laith',
    lastname: 'Massoud',
    username: 'LEO',
    email: 'laithmassoud@gmail.com',
    accountPage: 'user324333',
    rating: 4,
    coords:{
      lat: 52.521310,
      lng: 13.487453,
    },
    deliverAdress:{
      street: 'Rostockerstr',
      number: '154',
      postcode: '12345',
      city: 'Berlin',
      mobile: '01453021344',
      Distince:"2 km"
    },
    deliveringTime:{
      start:'14:00',
      end:'16:00',
      date:'23.03.18'
    },
    shop: 'Lidl',
    items:
    [{
      status:'box',
      todo:"5 little breads"
    },{
      status:'box',
      todo:"Bateries AAA pack of 4"
    },{ 
      status:'box',
      todo:"Ice Cream triple flavour"
    },{
      status:'box',
      todo:"2x Orange Juice low sugar"
    }
    ],
    notes:'Bring me all in a box please. Thank you',
  },
{
  orderId:3326,
    firstname: 'Orwa',
    lastname: 'Houry',
    username: 'Orwa377',
    email: 'orwa@gmail.com',
    accountPage: 'user324335',
    rating: 2,
    coords:{
      lat: 52.526125,
      lng: 13.487453,
    },
    deliverAdress:{
      street: 'holandstr',
      number: '13',
      postcode: '12315',
      city: 'Berlin',
      mobile: '01453021312'
    },
    deliveringTime:{
      start:'14:00',
      end:'16:00',
      date:'23.03.18'
    },
    shop:'Aldi',
    items:
    [{
      status:'box',
      todo:"5 little breads"
    },{
      status:'box',
      todo:"Bateries AAA pack of 4"
    },{ 
      status:'box',
      todo:"Ice Cream triple flavour"
    },{
      status:'box',
      todo:"2x Orange Juice low sugar"
    }
    ],
    notes:'Bring me all in a box please. Thank you',  
  },
{
 orderId:3327,
    firstname: 'Tarek',
    lastname: 'AlKhatieb',
    username: 'TOM',
    email: 'Tarek@gmail.com',
    accountPage: 'user324334',
    rating: 2,
    coords:{
      lat:52.526127,
      lng: 13.482797,
    },
    deliverAdress:{
      street: 'holandstr',
      number: '13',
      postcode: '12315',
      city: 'Berlin',
      mobile: '01453021312'
    },
    deliveringTime:{
      start:'14:00',
      end:'16:00',
      date:'23.03.18'
    },
    shop: 'Rewe',
    items:
    [{
      status:'box',
      todo:"5 little breads"
    },{
      status:'box',
      todo:"Bateries AAA pack of 4"
    },{ 
      status:'box',
      todo:"Ice Cream triple flavour"
    },{
      status:'box',
      todo:"2x Orange Juice low sugar"
    }
    ],
    notes:'Bring me all in a box please. Thank you',
  },
  ],
  items:
  [{
    status:'box',
    todo:"2x Corn Bread"
  },{
    status:'box',
    todo:"Kellogs AllBran"
  },{ 
    status:'box',
    todo:"4x Milk 3.8% Fet"
  },{
    status:'box',
    todo:"2x Orange Juice low sugar"
  }
  ],
  orderHistory:
    [{
      orderID: 15675,
      status:'Pending',
      shop: 'Rewe',
      deliverBy: '',
      created: '23.03.2018',
      accepted:'',
      delivered:{
        date:'',
        time: ''
      },
       items:
        [{
          status:'box',
          todo:"5 little breads"
        },{
          status:'box',
          todo:"Bateries AAA pack of 4"
        },{ 
          status:'box',
          todo:"Ice Cream triple flavour"
        },{
          status:'box',
          todo:"2x Orange Juice low sugar"
        }
        ]
      },
      {
      orderID: 13466,
      status:'In Progress',
      shop: 'Rewe',
      deliverBy: 'Alice Doe',
      created: '21.03.2018',
      accepted:'21.03.2018',
      delivered:{
        date:'',
        time:''
      },
       items:
        [{
          status:'box',
          todo:"2x Corn Bread"
        },{
          status:'box',
          todo:"Kellogs AllBran"
        },{ 
          status:'box',
          todo:"4x Milk 3.8% Fet"
        },{
          status:'box',
          todo:"2x Orange Juice low sugar"
        }
        ]
    },
    {
      orderID: 11787,
      status:'Delivered',
      shop: 'Rewe',
      deliverBy: 'Alice Doe',
      created: '17.02.2018',
      accepted:'18.02.2018',
      delivered:{
        date:'18.02.2018',
        time: '18:22'
      },
      items:
        [{
          status:'box',
          todo:"Cheddar Cheese 1x"
        },{
          status:'box',
          todo:"Soy milk x3"
        },{ 
          status:'box',
          todo:"3x Butter(cheapest)"
        },{
          status:'box',
          todo:"2x Orange Juice low sugar"
        }
        ]
    },
    {
      orderID: 9907,
      status:'Delivered',
      shop: 'Rewe',
      deliverBy: 'Alice Doe',
      created: '11.02.2018',
      accepted:'11.02.2018',
      delivered:{
        date:'11.02.2018',
        time: '19:37'
      },
      items:
        [{
          status:'box',
          todo:"2x Corn Bread"
        },{
          status:'box',
          todo:"Kellogs AllBran"
        },{ 
          status:'box',
          todo:"4x Milk 3.8% Fet"
        },{
          status:'box',
          todo:"2x Orange Juice low sugar"
        }
        ],
    }],
  notes:'Bring me all in a box please. Thank you',
}

export default fakeStore