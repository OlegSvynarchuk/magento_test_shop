const axios = require('axios')
const express = require('express')
const { getToken } = require('../src/utills.js')
const router = express.Router()

const utils = require('../src/utills.js')


const getProducts = utils.getProducts

function flat (array) {
    var result = [];
    array.forEach(function (a) {
        result.push(a);
        if (Array.isArray(a.children_data)) {
            result = result.concat(flat(a.children_data));
        }
    });
    return result;
}

router.post('/api/getproducts', async(req, res) => {
    
    if(req.body.data.token) {
        try{
           getProducts(req.body.data.token).then(products => res.send({products: products}))
        } catch(error) {
            res.send(error)
        }
    }  

     else {
        try {
           getToken().then(token => getProducts(token).then(products => res.send({products: products, token: token})))
        } catch(error) {
         res.send(error)
        }
    }
    
  } 
)

module.exports = router

