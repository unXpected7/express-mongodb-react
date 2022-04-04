const Product = require('../models/productsV2');

exports.storeProducts= async (req, res)=>{
   const { name, price, stock, status} = req.body
   Product.create({name, price, stock, status})
       .then(result => res.send(result))
       .catch(error => res.send(error))
}

exports.findProducts = (req,res) => {
     Product.find()
        .then(result => res.send(result))
        .then(error => res.send(error));
}

exports.hapus = async (req, res) => {
   const { id } = req.params;
 
   try {
     const product = await Products.findOne({ _id: id });
     await Products.deleteOne({ _id: id });

     res.status(200).send(`product with id : ${product._id} deleted`);
   } catch (error) {
     res.status(500).send("internal server error");
   }
 };