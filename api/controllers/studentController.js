var con = require('../../connection.js');

const list_all_students = function(req, res) {
  con.query('SELECT * FROM student', function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Student list.' });
  });
};

const insert_student_info=function(req, res) {
  let name=req.body.name;
  con.query('insert into student set ?',{name:name}, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Student list.' });
  });
};

module.exports={
  list_all_students,
  insert_student_info
}
