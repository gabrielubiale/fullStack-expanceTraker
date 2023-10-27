const express = require('express');
const cors = require('cors');
const { db } = require('./db/db.js')
const {readdirSync} = require('fs')

const app = express()

require('dotenv').config()

const PORT =  process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1/', require('./routes/' + route)))

const server = async () => {
    try {
        await db();
        app.listen(PORT, () => {
            console.log('listening to port:', PORT);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};

server()