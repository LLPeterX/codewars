/* 
6kyu - Weekend Birthdays
https://www.codewars.com/kata/6375e9030ac764004a036840/train/javascript

Given a list of friends, their dates of birth and the date of their conversation, 
work out who has had the most birthdays fall on a Saturday or Sunday 
up to and including the date of the conversation. 

If more than one friend shares that number of weekend birthdays, return the youngest. 

If the youngest shares their birthday with other friends, then any of the youngest will be accepted.

When counting weekend days, don't include the day on which they were born - after all, 
they wouldn't have been familiar with the concept of a weekend right then! 
Friends born on 29th February celebrate their birthdays on 28th February in non-leap years.

Example
The friends are provided as a sequence of pairs containing their name 
and their date of birth in the format YYYY-MM-DD. 
The date of their conversation is provided in the similar format.

most_weekend_birthdays([("Alice", "2010-11-10"), ("Bob", "2010-11-23")], "2022-12-31") ==> "Alice"
Alice has four birthdays falling on a weekend (Saturday in 2012 and 2018, Sunday in 2013 and 2019) compared to three for Bob (Saturday in 2013 and 2019, Sunday in 2014).
*/

const isLeapYear = year => (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0))

function getBirthdaysCount(strDateFrom, strDateTo) {
  let dateFrom = new Date(strDateFrom),
    dateTo = new Date(strDateTo),
    month = dateFrom.getMonth(),
    day = dateFrom.getDate(),
    count = 0;
  for (let year = dateFrom.getFullYear() + 1; year <= dateTo.getFullYear(); year++) {
    let bdate = new Date(year, month, (month === 1 && day === 29 && !isLeapYear(year)) ? 28 : day);
    if ((bdate.getDay() === 0 || bdate.getDay() === 6) && bdate <= dateTo) count++;
  }
  return count;
}

function mostWeekendBirthdays(friends, conversationDate) {
  return friends.sort((a, b) => (getBirthdaysCount(b[1], conversationDate) - getBirthdaysCount(a[1], conversationDate)) || (new Date(b[1]) - new Date(a[1])))[0][0];
}


console.log(mostWeekendBirthdays([["Alice", "2010-11-10"], ["Bob", "2010-11-23"]], "2022-12-31"), "Alice");
console.log(mostWeekendBirthdays([["Steve", "2010-11-18"], ["Dave", "2010-11-22"]], "2022-12-31"), "Dave");
console.log(mostWeekendBirthdays([['Ian', '2004-02-28'], ['Jane', '2004-02-29']], "2022-12-31"), "Jane");
console.log(mostWeekendBirthdays([
  ['Ellie', '2004-03-01'],
  ['David', '2004-02-29'],
  ['Carrie', '2004-02-28'],
  ['Bruce', '2004-02-27'],
  ['Amber', '2004-02-26'],
  ['Grace', '2004-03-03'],
  ['Frank', '2004-03-02']
], "2011-01-01"), "Ellie");

//console.log(new Date().getDate());
