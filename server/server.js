require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

//'mongodb://localhost/ecommerceDB'
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;



db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to database1...'));


const usersRouter = require('./routes/user.routes');
const productsRoutes = require('./routes/product.routes');
app.use('/users', usersRouter);
app.use('/products', productsRoutes);


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
})