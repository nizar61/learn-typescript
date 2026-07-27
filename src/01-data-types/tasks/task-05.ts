/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

// Define Attendance Type
type Attendance = {
  employeeId: string;
  employeeName: string;
  date: string;
  checkIn: string;
  checkOut: string;
  totalWorkingHours: number;
  isPresent: boolean;
};

// Attendance Data
const attendance1: Attendance = {
  employeeId: "EMP001",
  employeeName: "Andi Pratama",
  date: "2026-07-27",
  checkIn: "08:00",
  checkOut: "17:00",
  totalWorkingHours: 9,
  isPresent: true,
};

const attendance2: Attendance = {
  employeeId: "EMP002",
  employeeName: "Siti Rahma",
  date: "2026-07-27",
  checkIn: "08:15",
  checkOut: "17:15",
  totalWorkingHours: 9,
  isPresent: true,
};

const attendance3: Attendance = {
  employeeId: "EMP003",
  employeeName: "Budi Santoso",
  date: "2026-07-27",
  checkIn: "-",
  checkOut: "-",
  totalWorkingHours: 0,
  isPresent: false,
};

// Display Attendance Data
console.log("Attendance 1:", attendance1);
console.log("Attendance 2:", attendance2);
console.log("Attendance 3:", attendance3);