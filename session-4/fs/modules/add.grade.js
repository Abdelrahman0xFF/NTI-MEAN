import readGrades from "./read.grades.js";
import saveGrades from "./save.grades.js";

export default function addGrade(name, subject, grade) {
    const grades = readGrades();

    const newRecord = {
        id: Date.now().toString(),
        name,
        subject,
        grade,
    };

    grades.push(newRecord);
    saveGrades(grades);

    console.log(`Added new grade record for ${name}`);
    return newRecord;
}
