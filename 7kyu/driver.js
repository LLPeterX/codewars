/* 
7kyu - Driving Licence
https://www.codewars.com/kata/586a1af1c66d18ad81000134/train/javascript

Task
The UK driving number is made up from the personal details of the driver.
The individual letters and digits can be code using the below information:

* 1–5: The first five characters of the surname (padded with 9s if less than 5 characters)
* 6: The decade digit from the year of birth (e.g. for 1987 it would be 8)
* 7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)
* 9–10: The date within the month of birth
* 11: The year digit from the year of birth (e.g. for 1987 it would be 7)
* 12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name
* 14: '9'
* 15–16: Two computer check digits. We will always use "AA"

Input
0 = Forename
1 = Middle Name (if any)
2 = Surname
3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
4 = M-Male or F-Female
*/
/* 
function driver([foreName, middleName, surname, dateOfBirth, sex]) {
  let db = new Date(dateOfBirth);
  let result = surname.toUpperCase().padEnd(5, '9').slice(0, 5); // 1-5
  result += ("" + db.getFullYear())[2]; //6
  let month = [...("" + (db.getMonth() + 1)).padStart(2, '0')];
  result += (`${+month[0] + (sex === 'F' ? 5 : 0)}${month[1]}`).padStart(2, '0'); // 7-8
  result += db.getDate().toString().padStart(2, '0'); // 9-10
  result += dateOfBirth.slice(-1); // 11
  result += ((foreName ? foreName[0] : "") + (middleName ? middleName[0] : "")).padEnd(2, '9'); // 12-13
  result += '9AA'; // 14-16
  return result;
}

 */

function driver([foreName, middleName, surname, dateOfBirth, sex]) {
  let db = new Date(dateOfBirth), month = [...("" + (db.getMonth() + 1)).padStart(2, '0')];
  return surname.toUpperCase().padEnd(5, '9').slice(0, 5) + // 1-5
    ("" + db.getFullYear())[2] + // 6
    (`${+month[0] + (sex === 'F' ? 5 : 0)}${month[1]}`).padStart(2, '0') + // 7-8
    db.getDate().toString().padStart(2, '0') + // 9-10
    dateOfBirth.slice(-1) + // 11
    ((foreName ? foreName[0] : "") + (middleName ? middleName[0] : "")).padEnd(2, '9') + // 12-13
    '9AA'; // 14-16
}

let data = ["John", "James", "Smith", "01-Jan-2000", "M"]
console.log(driver(data), "SMITH001010JJ9AA", "Should return 'SMITH001010JJ9AA'")

data = ["Johanna", "", "Gibbs", "13-Dec-1981", "F"]
console.log(driver(data), "GIBBS862131J99AA", "Should return 'GIBBS862131J99AA'")

data = ["Andrew", "Robert", "Lee", "02-September-1981", "M"]
console.log(driver(data), "LEE99809021AR9AA", "Should return 'LEE99809021AR9AA'")