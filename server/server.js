const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const dbconfig = require('./config/dbconfig');
const port = process.env.PORT || 5000;

const usersRoute = require('./routes/usersRoute');
const productsRoute = require('./routes/productsRoute');
const bidsRoute = require('./routes/bidsRoute');
const notificationsRoute = require('./routes/notificationsRoute');
const { api } = require('./config/cloudinaryConfig');

app.use('/api/users', usersRoute);
app.use('/api/products', productsRoute);
app.use('/api/bids',bidsRoute);
app.use('/api/notifications',notificationsRoute)

app.listen(port, () => console.log(`Node/Express server started on port ${port}`));