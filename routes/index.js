var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/',function(req, res, next){
    res.render('home');
})

router.get('/clubPage',function(req, res, next){
    res.render('club');
})

router.get('/login',function(req, res, next){
    res.render('login');
})

module.exports = router;
