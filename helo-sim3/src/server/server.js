// require('dotenv').config();
// const express = require('express');
// const session = require('express-session');
// const massive = require('massive');
// const bodyParser = require('body-parser');
// const axios = require('axios');

// const app = express();

// app.use(express.static(`${__dirname}../../public`))

// app.use(bodyParser.json());

// // app.use(session({
// //     secret: process.env.SESSION_SECRET,
// //     saveUninitialized: false,
// //     resave: false,
// // }))

// // massive(process.env.CONNECTION_STRING).then( db => {
// //     app.set('db', db)
// // }).catch(error => {
// //     console.log('error', error);
// // })


// // app.get('/api/auth/login', (req, res) => {
// //     const { userId } = req.body;
// //     const auth0Url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${userId}`;
// // })

// // app.post('/api/auth/logout', (req, res) => {
// //     req.session.destroy();
// //     res.send();
// // })


// // app.get('//api/auth/authenticated', (req, res) => {
// //     res.status(201).json(req.session.user)
// // })

// const PORT = 3035

// app.listen(PORT, () => console.log(`We got our ears on ${PORT}`));