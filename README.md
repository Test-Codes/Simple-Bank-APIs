# SimpleBankAPIs

a [Sails](http://sailsjs.org) application

Design and implement a very simple API server bank program.
The server should support 2 functions as API endpoints: deposits and withdrawals.
After each API call, the server should return the current balance in JSON format.

You shouldn’t spend more than about an 1 hour on this assignment;
so please do not implement authentication or security features or worry about scalability,
but be aware of these issues and be prepared to talk about them.
You can use whatever server language/platform that you know best.
Please upload your code to github when done.


deposit => GET: /accounts/:id
withdrawals => PUT: /accounts/:id/withdraw
...Got it!

PUT: /accounts/:id/deposit (+ will be deposit, - will be withdrawals)

## API

Localhost: http://localhost:1337/  
Heroku Server: http://simplebankapis.herokuapp.com/


### Accounts

#### CRUD
CRUD API is available as a default feature of Sails.js
```
POST: /accounts
GET: /accounts
GET: /accounts/:id
PUT: /accounts/:id
DELETE: /accounts/:id
```


#### Deposit API
`POST: /accounts/:id/deposit`  
Required Params: `amount`  
Amount has to be an integer value. If the amount is positive number, it will deposit the money. If it is negative number, it will withdraw the money.

#### Examples
`http://localhost:1337/accounts/1/deposit?amount=-1`
`http://simplebankapis.herokuapp.com/accounts/1/deposit?amount=-1`
