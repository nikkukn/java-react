
class StudentService {
    getStudents() {
        const studentRecord = localStorage.getItem("students");
        const checkStudentRecord = studentRecord ? JSON.parse(studentRecord) : [];
        return checkStudentRecord
    }
    addStudents(student) {
        const checkStudentRecord = this.getStudents()
        let leng = checkStudentRecord.length
        student.id = leng + 1
        const isExist = this.checkDuplicate(student.sName, student.phone, checkStudentRecord)
        let msg = "empty";
        if (isExist) {
            msg = "students exist"
        } else {
            const merge = [...checkStudentRecord, student]
            localStorage.setItem("students", JSON.stringify(merge))
            msg = "student added success"
        }
        return msg

    }
    updateStudent(student, id) {
        const checkStudentRecord = this.getStudents()
        checkStudentRecord[id] = student
        localStorage.setItem("students", JSON.stringify(checkStudentRecord))
        return "student update success"
    }
    getStudentById(id) {
        const checkStudentRecord = this.getStudents()
        return checkStudentRecord[id]
    }
    checkDuplicate(name, phone, records) {
        console.log(name, phone, records)
        return records.some((item) => {
            return (item.phone === phone && item.sName === name)
        })
    }
    validateDOB(dob) {
        var birthDate = new Date(dob);
        var difference = Date.now() - birthDate.getTime();
        var ageDate = new Date(difference);
        var calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
        return calculatedAge
    }

}

export default new StudentService()