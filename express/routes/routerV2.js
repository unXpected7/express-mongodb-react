const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads'});
const productController = require('../controllers/productsV2')

router.post('/products', productController.storeProducts);
router.get('/products', productController.findProducts)
router.post('/products/:id', productController.hapus);
router.update('/products/:id', productController.update);

module.exports = router;
