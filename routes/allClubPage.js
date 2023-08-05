var express = require('express');
var router = express.Router();
const clubproject  = require('../connection');

clubproject.connect();

const textstd = 'Select * from students where clubtype= ($1)'
const textt = 'Select * from teacher where clubtype= ($1)'


router.get('/football',function(req, res, next){
    const values = ['ฟุตบอล'];

    clubproject.query(textt, values, (err, resultteacher)=>{
        if (err) {
            console.error(err);
        }
        if(!err){
         clubproject.query(textstd, values, (err, resultstd)=>{
            if (err) {
                console.error(err);
            }
            if(!err){
                res.render('clubfootball',{football: resultstd.rows, footballTeacher: resultteacher.rows});
            }
    }) 
    }
    })
});

router.get('/pingpong',function(req, res, next){
    const values = ['ปิงปอง'];

    clubproject.query(textt, values, (err, resultteacher)=>{
        if (err) {
            console.error(err);
        }
        if(!err){
         clubproject.query(textstd, values, (err, resultstd)=>{
            if (err) {
                console.error(err);
            }
            if(!err){
                res.render('clubpingpong',{pingpong: resultstd.rows, pingpongTeacher: resultteacher.rows});
            }
    }) 
    }
    })
});

router.get('/basketball',function(req, res, next){
    const values = ['บาสเกตบอล'];

    clubproject.query(textt, values, (err, resultteacher)=>{
        if (err) {
            console.error(err);
        }
        if(!err){
         clubproject.query(textstd, values, (err, resultstd)=>{
            if (err) {
                console.error(err);
            }
            if(!err){
                res.render('clubbasketball',{basketball: resultstd.rows, basketballTeacher: resultteacher.rows});
            }
    }) 
    }
    })
});

router.get('/english',function(req, res, next){
    const values = ['ภาษาอังกฤษ'];

    clubproject.query(textt, values, (err, resultteacher)=>{
        if (err) {
            console.error(err);
        }
        if(!err){
         clubproject.query(textstd, values, (err, resultstd)=>{
            if (err) {
                console.error(err);
            }
            if(!err){
                res.render('clubenglish',{english: resultstd.rows, englishTeacher: resultteacher.rows});
            }
    }) 
    }
    })
});

router.get('/japan',function(req, res, next){
    const values = ['ภาษาญี่ปุ่น'];

    clubproject.query(textt, values, (err, resultteacher)=>{
        if (err) {
            console.error(err);
        }
        if(!err){
         clubproject.query(textstd, values, (err, resultstd)=>{
            if (err) {
                console.error(err);
            }
            if(!err){
                res.render('clubjapan',{japan: resultstd.rows, japanTeacher: resultteacher.rows});
            }
    }) 
    }
    })
});

router.get('/korea',function(req, res, next){
    const values = ['ภาษาเกาหลี'];

    clubproject.query(textt, values, (err, resultteacher)=>{
        if (err) {
            console.error(err);
        }
        if(!err){
         clubproject.query(textstd, values, (err, resultstd)=>{
            if (err) {
                console.error(err);
            }
            if(!err){
                res.render('clubkorea',{korea: resultstd.rows, koreaTeacher: resultteacher.rows});
            }
    }) 
    }
    })
});


module.exports = router;