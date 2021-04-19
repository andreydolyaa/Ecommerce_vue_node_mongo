require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(express.json());


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000', 'http://localhost:8081'],
        credentials: true
    };
    app.use(cors(corsOptions));

    
}

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