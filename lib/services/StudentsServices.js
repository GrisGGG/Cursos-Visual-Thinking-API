class StudentsServices {
    static listOfStudents(students){
        return students;
    }
    static filterByCertification(students){
        const haveCertificationFilter = students.filter((student) => student.haveCertification === true)
        return haveCertificationFilter.map((student) => student.haveCertification)
    }
}

module.exports = StudentsServices;