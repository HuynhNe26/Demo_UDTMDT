const express = require('express');
const app = express();

app.use(express.json());

const routerGet = require('./routes/router');

app.use('/', routerGet);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
