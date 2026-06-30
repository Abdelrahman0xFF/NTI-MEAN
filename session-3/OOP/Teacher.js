import Person from "./Person.js";

class Teacher extends Person {
    #gradedStudents = [];

    constructor(name, email, id, subject) {
        super(name, email, id);
        this.subject = subject;
    }

    gradeStudent(studentName, grade) {
        this.#gradedStudents.push({ studentName, grade });
        console.log(
            `${this.name} graded ${studentName} with a grade of ${grade} in ${this.subject}`,
        );
    }

    listGradedStudents() {
        if (this.#gradedStudents.length === 0) {
            console.log(`${this.name} hasn't graded any students yet`);
            return;
        }
        console.log(`Students graded by ${this.name} (${this.subject}):`);
        console.table(
            this.#gradedStudents.map(({ studentName, grade }) => ({
                Student: studentName,
                Grade: grade,
            })),
        );
    }

    describeRole() {
        return `${this.name} is a Teacher who teaches ${this.subject} and has graded ${this.#gradedStudents.length} students`;
    }
}

export default Teacher;
