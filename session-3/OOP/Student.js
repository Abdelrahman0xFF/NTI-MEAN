import Person from "./Person.js";

class Student extends Person {
    #enrolledSubjects = [];

    constructor(name, email, id) {
        super(name, email, id);
    }

    enroll(subject) {
        if (this.#enrolledSubjects.includes(subject)) {
            console.log(`${this.name} is already enrolled in ${subject}`);
            return;
        }
        this.#enrolledSubjects.push(subject);
        console.log(`${this.name} has enrolled in ${subject}`);
    }

    viewSubjects() {
        if (this.#enrolledSubjects.length === 0) {
            console.log(`${this.name} is not enrolled in any subjects`);
            return;
        }
        console.log(
            `${this.name} is enrolled in: ${this.#enrolledSubjects.join(", ")}`,
        );
    }

    describeRole() {
        return `${this.name} is a Student enrolled in ${this.#enrolledSubjects.length} subjects`;
    }
}

export default Student;
