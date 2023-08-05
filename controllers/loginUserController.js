const clubproject  = require('../connection');
const bcrypt = require('bcrypt');


module.exports = function (req, res) {

    const inputuser = req.body.username;
    const inputpassword = req.body.password;
    const text = 'Select * from users where username= ($1)'
    const values = [inputuser];


    clubproject.query(text, values, (err, result)=>{
        if (err) {
            console.error(err);
        }
        if(!err){
            let info = result.rows
            let idInfo = info[0].user_id;
            console.log(info[0].user_id)
            bcrypt.compare(inputpassword, info[0].password).then((match)=> {
                    if (match) {
                        req.session.userId = idInfo
                        res.redirect('/')
                    } else {
                        res.redirect('/login')
                    }
                })
            }
    })
    
}