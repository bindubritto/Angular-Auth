const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');

const db = "mongodb+srv://dbUser:dbUser@eventsdb.pwyod.mongodb.net/eventsdb?retryWrites=true&w=majority"



mongoose.connect(db, err => {
    if (err) {
        console.error('Error!' + err);
    } else {
        console.log('Connected to mongodb');
    }
})

router.get('/', (req, res) => {
    res.send('From API route');
})

router.post('/register', (req, res) => {
    let userData = req.body; // request body theke data retrieve 
    let user = new User(userData); // Cast into User model, so mongoose can understand. 
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(registeredUser);
        }
    })
})

router.post('/login', (req, res)=> {
    let userData = req.body;
    
    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            if(!user) {
                res.status(401).send('Invalid email-Unauthorized')
            }
            else if (user.password !== userData.password) {
                res.status(401).send('Password did not match')
            }
            else {
                res.status(200).send(user);
            }
        }

    })
})


router.get('/events', (req, res) => {
    let events = [
        {
          "_id": 0,
          "name": "Bird",
          "description": "Et proident adipisicing est sint fugiat.",
          "date": "Fri Jun 02 2017 18:10:16 GMT+0600 (Bangladesh Standard Time)"
        },
        {
          "_id": 1,
          "name": "Calderon",
          "description": "Id nisi velit labore sit nostrud quis reprehenderit.",
          "date": "Sun Feb 26 2017 07:00:16 GMT+0600 (Bangladesh Standard Time)"
        },
        {
          "_id": 2,
          "name": "Cooley",
          "description": "Nulla incididunt ea officia ex eu excepteur est consectetur culpa adipisicing officia aliquip sint nisi.",
          "date": "Thu Jun 15 2017 09:53:56 GMT+0600 (Bangladesh Standard Time)"
        },
        {
          "_id": 3,
          "name": "Mayo",
          "description": "Consequat aute adipisicing esse Lorem duis proident occaecat.",
          "date": "Tue Jun 20 2017 19:37:37 GMT+0600 (Bangladesh Standard Time)"
        },
        {
          "_id": 4,
          "name": "George",
          "description": "Ipsum laborum nisi adipisicing minim dolor velit eiusmod nostrud incididunt consequat incididunt amet.",
          "date": "Sun Jul 16 2017 17:57:18 GMT+0600 (Bangladesh Standard Time)"
        }
      ]

    res.json(events);
})


router.get('/special', (req, res) => {
    let events = [
        {
          "_id": 0,
          "name": "Katie",
          "description": "Nisi est amet irure deserunt sint ipsum elit excepteur.",
          "date": "Fri Jul 07 2017 19:48:05 GMT+0600 (Bangladesh Standard Time)"
        },
        {
          "_id": 1,
          "name": "Nichole",
          "description": "Anim consequat cillum amet ad ex cupidatat exercitation occaecat amet pariatur.",
          "date": "Fri May 26 2017 08:19:40 GMT+0600 (Bangladesh Standard Time)"
        },
        {
          "_id": 2,
          "name": "Georgina",
          "description": "Incididunt cillum aliqua proident pariatur cillum amet ullamco officia ipsum eu non laboris.",
          "date": "Thu Jul 27 2017 07:43:45 GMT+0600 (Bangladesh Standard Time)"
        },
        {
          "_id": 3,
          "name": "Mitzi",
          "description": "Aliqua sint velit esse laborum veniam tempor.",
          "date": "Thu Apr 06 2017 18:48:46 GMT+0600 (Bangladesh Standard Time)"
        },
        {
          "_id": 4,
          "name": "Candy",
          "description": "Nisi pariatur est veniam magna.",
          "date": "Tue Feb 21 2017 17:58:21 GMT+0600 (Bangladesh Standard Time)"
        }
      ]

    res.json(events);
})




module.exports = router;