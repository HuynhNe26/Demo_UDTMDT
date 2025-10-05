const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');

const app = express();

app.use(express.json());

const port = 3000;

mongoose.connect('mongodb://localhost:27017/test_route', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Kết nối thành công tới Mongoose!'))
    .catch(err => console.error('Lỗi kết nối tới Mongoose: ', err));

app.use('/products', productRoutes);

app.listen(port, () => console.log(`Server đang chạy trên cổng ${port}`));