class StudentsServices {
    static listOfStudents(students){
        return students;
    }
    static filterByCertification(students){
        const haveCertificationFilter = students.filter((student) => student.haveCertification === true)
        return haveCertificationFilter.map((student) => student.haveCertification)
    }
    static filterByCredits(students){
        const filterByCredits = students.filter((student) => student.credits >= 500);
        return filterByCredits
    }
}

module.exports = StudentsServices;