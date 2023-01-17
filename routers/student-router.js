const studentController = require('../controllers/student-controller');
class StudentRouter{
    home(req, res){
        studentController.showAll(req, res)
    }
    showCreate(req, res){
        studentController.showFormCreate(req, res);
    }

    saveStudent(req, res){
        studentController.createStudent(req, res);
    }
}
module.exports = new StudentRouter();
