const fakeStore = {
  listId: 3323,
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
    start: '14:00',
    end:'16:00'
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
  notes:'Bring me all in a box please. Thank you',
}

export default fakeStore