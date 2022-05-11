const StudentsServices = require('./../../lib/services/StudentsServices');
const Reader = require('./../../lib/utils/Reader')
const students = Reader.readJsonFile("visualpartners.json")

class StudentsControllers {
    static getAllStudents(){
        return StudentsServices.listOfStudents(students)
    }
}
module.exports = StudentsControllers