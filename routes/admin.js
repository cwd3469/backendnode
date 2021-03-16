const express = require('express');
const router = express.Router();

function middleware(req,res,next){
    console.log('첫번째 미들웨어입니다.');
    next();
}
function middleware2(req,res,next){
    console.log('두번째 미들웨어입니다.');
    next();
}
router.get('/',middleware,middleware2,(req,res) => {
    res.send('admin 이후 url');
})
router.get('/products',(req,res) => {
    // res.send('admin products');
    res.render( 'admin/products.html',{
        message: '<h1>HELLO WORLD</h1>'
    } )
})


module.exports = router;