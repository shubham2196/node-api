module.exports = function(app) {
  var studentList = require('../controllers/studentController');
  // studentList Routes
  app.route('/student')
    .get(studentList.list_all_students)
    .post(studentList.insert_student_info)
};
