const fs = require('fs');
class StudentModel{
     getAllStudent() {
        return fs.readFileSync('./data/student.json', 'utf-8');
    }
    saveStudents(data) {
         fs.writeFileSync('./data/student.json', JSON.stringify(data));
    }
}
module.exports = new StudentModel();