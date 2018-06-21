# "Shop it me"
## The amazing shopping lists in your area
This is the final project from **FbW4**

[![Waffle.io - Columns and their card count](https://badge.waffle.io/devugees/react-shopitme.svg?columns=all)](https://waffle.io/devugees/react-shopitme)

## Installation
#### 1. Clone and Install
1. `git clone https://github.com/devugees/react-shopitme`
1. `cd react-shopitme`
1. Install backend: `yarn install` from root folder
1. Install frondend: `cd fronend && yarn install`

#### 2. We need to setup our environment variables depending on our system:
1. copy the `.env.example` to `.env`
1. copy the `frontend/.env.example` to `frontend/.env`

`.env`  
create a mongodb on [MLAB](https://mlab.com/) or use a local one  
create a google email and use it for the mailnotifire  
```
DB_URI=MONGOURL
E_MAIL=GOOGLE_E-MAIL
PASSWORD=GOOGLE_PASSWORD
```

`frontend/.env`  
set up google maps api key  
```
REACT_APP_MY_KEY=GOOGLEMAPSAPIKEY
```
Then run `yarn dev` to run the app. It should open on `localhost:3000` and you should see something like that:

![Shop it me](/screen.jpg?raw=true "Shop it me")
