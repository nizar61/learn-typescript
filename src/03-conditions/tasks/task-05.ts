/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */

const Name: string = "Fajar Hidayat";
const GPA: number = 3.6;
const Income: number = 4200000;
const Competition: number = 4;
const Disciplinary: boolean = false;
const Documents: boolean = true;

console.log("Name:", Name);

console.log("== First Screening ==");

switch (GPA >= 3.75 && Income < 5000000) {
    case true:
        console.log("You've passed the first round of selection");
        break;
    default:
        console.log("Failed First Screening");
}

if (GPA >= 3.75 && Income < 5000000) {
    console.log("== Second Screening ==");

    switch (Competition >= 3 && !Disciplinary && Documents) {
        case true:
            console.log("Scholarship Approved");
            break;
        default:
            console.log("Passed First Screening, but Failed Second Screening");
    }
}