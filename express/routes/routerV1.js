const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads'});
const productController = require('../controllers/productsV1')

router.get('/products', productController.index );
router.get('/products/:id', productController.view );
router.post('/products', upload.single('image'), productController.store)
router.put('/products/:id', productController.update);
router.delete('/product/:id', productController.hapus)

module.exports = router;