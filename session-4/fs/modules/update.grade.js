import readGrades from "./read.grades.js";
import saveGrades from "./save.grades.js";

export default function updateGrade(id, newGrade) {
    const grades = readGrades();
    const index = grades.findIndex((record) => record.id === id);

    if (index !== -1) {
        grades[index].grade = newGrade;
        saveGrades(grades);
        console.log(`Successfully updated grade for record ID: ${id}`);
        return grades[index];
    } else {
        console.log(`Update failed: Record with ID ${id} not found`);
        return null;
    }
}
