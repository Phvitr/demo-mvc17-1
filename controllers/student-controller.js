const fs = require('fs');
const qs = require('qs')
const studentModel = require('../models/student-model');
class StudentController{
    showAll(req, res){
        fs.readFile('./views/student/list.html', 'utf-8', async (err, data) => {
            if (err) {
                console.log(err)
            }
            let html = '';
            let students = JSON.parse(studentModel.getAllStudent());
            students.forEach((item, index) => {
                html += `
                    <tr>
                      <th scope="row">${index + 1}</th>
                      <td>${item.name}</td>
                      <td>${item.age}</td>
                      <td>${item.gender}</td>
                      <td>${item.gpa}</td>
                    </tr>
                `;
            })
            data = data.replace('{student-list}', html);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    }

    showFormCreate(req, res) {
        fs.readFile('./views/student/add.html', 'utf-8', async (err, data) => {
            if (err) {
                console.log(err)
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    }

    createStudent(req, res) {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        })
        req.on('end', () => {
            let student = qs.parse(data);
            let students = JSON.parse(studentModel.getAllStudent());
            students.push(student);
            studentModel.saveStudents(students);
            res.writeHead(301, {location: '/home'});
            res.end();
        })
    }
}
module.exports = new StudentController();