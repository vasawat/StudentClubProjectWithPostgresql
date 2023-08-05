const clubproject  = require('../connection');



module.exports = async function (req, res, next) {

    let studentName = req.body.studentName;
    let studentId = req.body.studentId;
    let studentNumber = req.body.studentNumber;
    let clubType = req.body.clubType;
    let sendidtoedit = req.body.sendidtoedit;

    let Query = `UPDATE students SET 
    std_id = '${studentId}', 
    std_name = '${studentName}', 
    std_number = ${studentNumber}, 
    clubtype = '${clubType}' 
    WHERE std_id = ${sendidtoedit}`

    await   clubproject.query(Query, (err, result)=>{
            if (err) {
                console.error(err);
            }
            if(!err){
                console.log('Postgresql Edit student complete !!');
            }
        });
        res.redirect('back');
}
