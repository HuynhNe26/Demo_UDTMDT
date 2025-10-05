const express = require('express');
const router = express.Router();

router.get('/routerGet', (req, res) => {
    res.send('<h1>Ví dụ lấy dữ liệu</h1>');
});

router.post('/routerPost', (req, res) => {
    const data = req.body; 
    res.json({
        message: 'Đã nhận dữ liệu thành công!',
        receivedData: data
    });
});
module.exports = router;
