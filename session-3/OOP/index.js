import Principal from "./Principal.js";
import Teacher from "./Teacher.js";
import Student from "./Student.js";

const principal = new Principal("Ahmed", "example1@gmail.com", "P001");
const teacher = new Teacher("Mohamed", "example1@gmail.com", "T001", "Math");
const student1 = new Student("Sara", "example2@gmail.com", "S001");
const student2 = new Student("Omar", "example3@gmail.com", "S002");

console.log("=== Principal adds members ===");
principal.addMember(teacher);
principal.addMember(student1);
principal.addMember(student2);

console.log("\n=== Principal lists members ===");
principal.listMembers();

console.log("\n=== Teacher grades students ===");
teacher.gradeStudent(student1.name, "A");
teacher.gradeStudent(student2.name, "B+");
teacher.listGradedStudents();

console.log("\n=== Students enroll in subjects ===");
student1.enroll("Mathematics");
student1.enroll("Physics");
student2.enroll("Mathematics");
student1.viewSubjects();
student2.viewSubjects();

console.log("\n=== Principal removes a member ===");
principal.removeMember(student2.id);
principal.listMembers();

console.log("\n=== Everyone describes their role ===");
const allMembers = [principal, teacher, student1, student2];
allMembers.forEach((member) => console.log(member.describeRole()));
