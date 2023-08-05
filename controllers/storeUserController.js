const clubproject  = require('../connection');
const bcrypt = require('bcrypt');



module.exports = function (req, res) {


  const text = 'Select * from users' ;

  clubproject.query(text, (err, result)=>{
    if (err) {
        console.error(err);
    }
    if(!err){
      const id = result.rowCount+1
      const inputusername = req.body.username;
      const inputpassword = req.body.password;

      bcrypt.hash(inputpassword, 10).then((hash) => {
        hashpassword = hash
        const text2 = 'insert into users(user_id, username, password) values($1, $2, $3)' ;
        const values2 = [id, inputusername, hashpassword] ;
        clubproject.query(text2, values2, (error, result)=>{
            if (error || inputusername == '' && inputpassword == '') {
            const validationErrors = 'Plase enter your username';
            req.flash('validationErrors', validationErrors)
            req.flash('data', req.body)
            return res.redirect('/register')
            }
            if(!error){
            console.log("user registered!!")
            res.redirect('/')
            }
        })
      }).catch(error => {
        console.error(error)
      })

    }


})
}