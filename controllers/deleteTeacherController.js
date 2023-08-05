const clubproject  = require('../connection');



module.exports = async function (req, res, next) {

    let infoId = req.body.sendid
    let Query = `delete from teacher where t_id=${infoId}`

    await    clubproject.query(Query, (err, result)=>{
            if (err) {
                console.error(err);
            }
            if(!err){
                console.log('Postgresql Delete student complete !!');
            }
        });
        res.redirect('back');
}
