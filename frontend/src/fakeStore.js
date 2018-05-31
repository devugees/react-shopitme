import React from 'react';

let fakeStore = {
  listId: 3313,
  fakeDeliverAdresses:[{
    // first
      orderer:{
      listId: 43,
      firstname: 'Bob',
      lastname: 'Doe',
      username: 'Bobby',
      email: 'boobyy@gmail.com',
      accountPage: 'user324332',
      mobile: '02323277327',
      coords:{
        lat: 52.524978,
        lng: 13.480479,
      },
      deliverAdress:{
        street: 'A cute Strasse',
        number: '54',
        postcode: '13075',
        city: 'Berlin',
        mobile: '02323277327'
      },
    },
    deliveringTime:{
      start: '2018-04-31T12:00',
      end:'2018-04-31T15:00'
    },
    items:
    [{
      status:'box',
      todo:"5x Soja Milk"
    },{
      status:'box',
      todo:"4x Muesly"
    },{ 
      status:'box',
      todo:"2x Haltbar Milk"
    },{
      status:'box',
      todo:"4x Coconut oil"
    },{
      status:'box',
      todo:"1x Water 1l"
    }
    ]
    },
    // second
    {
      orderer:{
      listId: 341,
      firstname: 'Bran',
      lastname: 'Lee',
      username: 'BranLe',
      email: 'brandLee@gmail.com',
      accountPage: 'user54432',
      mobile: '05633099344',
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
    },
    deliveringTime:{
      start: '18:00',
      end:'20:30'
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
    }
    ]
    },
    //third
    {
      orderer:{
      listId: 2043,
      firstname: 'Agent',
      lastname: 'Cooper',
      username: 'Cup',
      email: 'Acoop@gmail.com',
      accountPage: 'user324332',
      mobile: '0172263232',
      coords:{
        lat: 52.524935,
        lng: 13.495985,
      },
      deliverAdress:{
        street: 'Example Alle',
        number: '65',
        postcode: '13088',
        city: 'Berlin',
        mobile: '0172263232'
      },
    },
    deliveringTime:{
      start: '09:00',
      end:'17:00'
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
    },{
      status:'box',
      todo:"2x more stuff"
    },{
      status:'box',
      todo:"2x Stuff"
    },{
      status:'box',
      todo:"2x medium stuff"
    },{
      status:'box',
      todo:"2x vegetables"
    }
    ]
    },
    // fourth
    {
      orderer:{
      listId: 92,
      firstname: 'Martha',
      lastname: 'Kent',
      username: 'Super',
      email: 'martha@kentFarm.com',
      accountPage: 'user325632',
      mobile: '0323232343',
      coords:{
        lat: 52.521310,
        lng: 13.487453,
      },
      deliverAdress:{
        street: 'SuperMan strasse',
        number: '101',
        postcode: '14035',
        city: 'Kansas',
        mobile: '0323232343'
      },
    },
    deliveringTime:{
      start: '08:00',
      end:'20:00'
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
    },{
      status:'box',
      todo:"Kriptonita"
    }    
    ]
    }
    ],
  shopper:{
    firstname: 'Alice',
    lastname: 'Doe',
    username: 'AliDoe',
    email: 'alice.doe@mail.com',
    accountPage: 'user323223',
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
  orderer:{
    firstname: 'Bob',
    lastname: 'Doe',
    username: 'Bobby',
    email: 'boobyy@gmail.com',
    accountPage: 'user324332',
    mobile: '01453099344',
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
  },
  deliveringTime:{
    start: '2018-04-31T12:00',
    end:'2018-04-31T15:00'
  },
  items:[],
  orderHistory:
    [{
      orderID: 15675,
      status:'Pending',
      shop: 'KaufLand',
      deliverBy: '',
      created: '23.03.2018',
      accepted:'',
      notes: 'Bring me all in a box please. Thank you',
      delivered:{
        date:'',
        time: ''
      },
      deliveringTime:{
        start: '2018-05-31T09:00',
        end:'2018-05-31T17:00'
      },
      deliverAdress:{
        street: 'Shop Straße',
        number: '1',
        postcode: '12321',
        city: 'Berlin',
        mobile: '01722017232'
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
          todo:"2x Coffe"
        },{
          status:'box',
          todo:"Bio Bread (dark)"
        },{ 
          status:'box',
          todo:'2x water Still'
        },{
          status:'box',
          todo:"2x Orange Juice low sugar"
        }
        ]
    }],
    deliverHistory:
    [{
      orderID: 15675,
      status:'In Progress',
      shop: 'Rewe',
      deliverTo: 'Katrina Mueller',
      created: '23.03.2018',
      accepted:'24.03.2018',
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
      deliverTo: 'Brandon Lee',
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
      deliverTo: 'Agent Cooper',
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
      deliverTo: 'Agent Smith',
      created: '11.02.2018',
      accepted:'11.02.2018',
      delivered:{
        date:'11.02.2018',
        time: '19:37'
      },
      items:
        [{
          status:'box',
          todo:"2x Coffe"
        },{
          status:'box',
          todo:"Bio Bread (dark)"
        },{ 
          status:'box',
          todo:'2x water Still'
        },{
          status:'box',
          todo:"2x Orange Juice low sugar"
        }
        ]
    }],
  notes:'Here you can write notes',
  deliverAdress:{
    street: 'New Straße',
    number: '1',
    postcode: '13075',
    city: 'Berlin'
  },

}

export default fakeStore

export const Store = React.createContext({
  store: fakeStore,
  updateUserData: data => {fakeStore.userInfo = data; console.log(fakeStore)},
});