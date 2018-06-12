import React from 'react';

let fakeStore = {
  // START prefixed data for the user
  items:[{
    status:'box',
    todo:"Test Item, you can EDIT or DELETE it"
  }],
  notes:'Here you can write notes',
  // END prefixed data for the user
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
  updateOrderData: data => {fakeStore.orderInfo = data; console.log(fakeStore)},
  updateUserPicture: data => {fakeStore.userInfo.profileImgPath = data; console.log(fakeStore)}
});
