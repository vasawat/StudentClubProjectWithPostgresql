const clubproject  = require('../connection');




module.exports = async function (req, res, next) {

    let TName = req.body.t_name;
    let TId = req.body.t_id;
    let clubType = req.body.clubType;

    let Query = `insert into teacher(t_id, t_name, clubtype) 
    values(${TId}, '${TName}', '${clubType}')`

    

    await    clubproject.query(Query, (err, result)=>{
            if (err) {
                console.error(err);
            }
            if(!err){
                console.log(result.rows)
                console.log('Postgresql insert teacher complete !!');
            }
        });
        res.redirect('back');
}
