import addGrade from "./modules/add.grade.js";
import readGrades from "./modules/read.grades.js";
import updateGrade from "./modules/update.grade.js";
import deleteGrade from "./modules/delete.grade.js";

// 1. Add Records
console.log("--- Adding Records ---");
const record1 = addGrade("Alice Johnson", "Mathematics", "A");
const record2 = addGrade("Bob Smith", "Physics", "B-");
const record3 = addGrade("Charlie Brown", "Literature", "C+");

// 2. Read All Records
console.log("\n--- Current Database ---");
console.log(readGrades());

// 3. Update a Record
console.log("\n--- Updating Record ---");
updateGrade(record2.id, "B+");

// 4. Delete a Record
console.log("\n--- Deleting Record ---");
deleteGrade(record3.id);

// 5. Final Read to verify changes
console.log("\n--- Final Database State ---");
console.log(readGrades());
