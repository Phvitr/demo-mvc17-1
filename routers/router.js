const studentRouter = require('./student-router')
let router = {
    '/home' : studentRouter.home,
    '/student/create' : studentRouter.showCreate,
    '/student/save' : studentRouter.saveStudent
}
module.exports = router;