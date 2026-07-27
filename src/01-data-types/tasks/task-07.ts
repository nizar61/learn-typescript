/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

// Define Registration Type
type Registration = {
  studentId: string;
  fullName: string;
  gradeLevel: number;
  courseId: string;
  courseTitle: string;
  instructorName: string;
  totalLearningHours: number;
  registrationDate: string;
  paymentCompleted: boolean;
};

// Registration Data
const registration1: Registration = {
  studentId: "ST2026001",
  fullName: "Nadia Putri",
  gradeLevel: 11,
  courseId: "FS101",
  courseTitle: "Full Stack Web Development",
  instructorName: "Mr. Andi",
  totalLearningHours: 40,
  registrationDate: "2026-07-27",
  paymentCompleted: true,
};

const registration2: Registration = {
  studentId: "ST2026002",
  fullName: "Ahmad Rizki",
  gradeLevel: 10,
  courseId: "JS201",
  courseTitle: "JavaScript Programming",
  instructorName: "Mrs. Sinta",
  totalLearningHours: 30,
  registrationDate: "2026-07-28",
  paymentCompleted: false,
};

const registration3: Registration = {
  studentId: "ST2026003",
  fullName: "Siti Aisyah",
  gradeLevel: 12,
  courseId: "DB301",
  courseTitle: "Database Fundamentals",
  instructorName: "Mr. Budi",
  totalLearningHours: 35,
  registrationDate: "2026-07-29",
  paymentCompleted: true,
};

// Display Registration Data
console.log("Registration 1:", registration1);
console.log("Registration 2:", registration2);
console.log("Registration 3:", registration3);