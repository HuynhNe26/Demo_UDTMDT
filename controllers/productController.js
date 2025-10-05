const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        console.log('Danh sách sản phẩm:', products); 
        res.status(200).json({
            success: true,
            data: products
        });
    } catch (error) {
        console.log('Lỗi khi lấy danh sách sản phẩm:', error); 
        res.status(500).json({
            success: false,
            message: 'Lỗi khi lấy danh sách sản phẩm',
            error: error.message
        });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        console.log('Sản phẩm mới được tạo:', product);
        res.status(201).json({
            success: true,
            data: product
        });
    } catch (error) {
        console.log('Lỗi khi tạo sản phẩm:', error); 
        res.status(400).json({
            success: false,
            message: 'Lỗi khi tạo sản phẩm',
            error: error.message
        });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            console.log('Sản phẩm không tồn tại với ID:', req.params.id);
            return res.status(404).json({
                success: false,
                message: 'Sản phẩm không tồn tại'
            });
        }
        console.log('Sản phẩm tìm thấy:', product); 
        res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        console.log('Lỗi khi lấy sản phẩm:', error); 
        res.status(500).json({
            success: false,
            message: 'Lỗi khi lấy sản phẩm',
            error: error.message
        });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!product) {
            console.log('Sản phẩm không tồn tại với ID:', req.params.id);
            return res.status(404).json({
                success: false,
                message: 'Sản phẩm không tồn tại'
            });
        }
        console.log('Sản phẩm sau khi cập nhật:', product);
        res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        console.log('Lỗi khi cập nhật sản phẩm:', error); 
        res.status(400).json({
            success: false,
            message: 'Lỗi khi cập nhật sản phẩm',
            error: error.message
        });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            console.log('Sản phẩm không tồn tại với ID:', req.params.id); 
            return res.status(404).json({
                success: false,
                message: 'Sản phẩm không tồn tại'
            });
        }
        console.log('Sản phẩm đã xóa:', product); 
        res.status(200).json({
            success: true,
            message: 'Xóa sản phẩm thành công'
        });
    } catch (error) {
        console.log('Lỗi khi xóa sản phẩm:', error);
        res.status(500).json({
            success: false,
            message: 'Lỗi khi xóa sản phẩm',
            error: error.message
        });
    }
};