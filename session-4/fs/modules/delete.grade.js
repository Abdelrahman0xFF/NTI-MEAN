import readGrades from "./read.grades.js";
import saveGrades from "./save.grades.js";

export default function deleteGrade(id) {
    const grades = readGrades();
    const filteredGrades = grades.filter((record) => record.id !== id);

    if (grades.length !== filteredGrades.length) {
        saveGrades(filteredGrades);
        console.log(`Successfully deleted record ID: ${id}`);
        return true;
    } else {
        console.log(`Delete failed: Record with ID ${id} not found`);
        return false;
    }
}
