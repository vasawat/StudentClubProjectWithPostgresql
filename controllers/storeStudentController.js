const clubproject  = require('../connection');




module.exports = async function (req, res, next) {

    let studentName = req.body.studentName;
    let studentId = req.body.studentId;
    let studentNumber = req.body.studentNumber;
    let clubType = req.body.clubType;

    let Query = `insert into students(std_id, std_name, std_number, clubtype) 
    values(${studentId}, '${studentName}', ${studentNumber}, '${clubType}')`

    

    await    clubproject.query(Query, (err, result)=>{
            if (err) {
                console.error(err);
            }
            if(!err){
                console.log('Postgresql insert student complete !!');
            }
        });
        res.redirect('back');
}
