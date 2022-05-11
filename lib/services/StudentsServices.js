class StudentsServices {
    // Este método obtiene todos los datos students
    static listOfStudents(students){
        return students;
    }
    // Exte metodo obtiene los certificados que tienen el valor true
    static filterByCertification(students){
        const haveCertificationFilter = students.filter((student) => student.haveCertification === true)
        return haveCertificationFilter.map((student) => student.haveCertification)
    }
    // Este método obtiene los alumnos que tienen creditos mayores o iguales a 500
    static filterByCredits(students){
        const filterByCredits = students.filter((student) => student.credits >= 500);
        return filterByCredits
    }
}

module.exports = StudentsServices;