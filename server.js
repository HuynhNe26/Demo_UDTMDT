const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routerGet = require('./routes/router');
const productRoutes = require('./routes/products');
app.use(express.json());

app.use('/', routerGet);
app.use('/products', productRoutes);


const PORT = 3000;
mongoose.connect('mongodb://localhost:27017/test_route', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Kết nối thành công tới Mongoose!'))
    .catch(err => console.error('Lỗi kết nối tới Mongoose: ', err));
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
  