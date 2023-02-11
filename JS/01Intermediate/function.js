const marksNumber = function (currentMarks = 0, totalMarks = 0) {
  let myPercent = (currentMarks / totalMarks) * 100;

  let myGrade = "";

  if (myPercent >= 90) {
    // console.log("Grade A");
    myGrade = "A";
  } else if (myPercent >= 75) {
    // console.log( "Grade B");
    myGrade = "B";
  } else if (myPercent >= 60) {
    // console.log("Grade C");
    myGrade = "C";
  }
  // {console.log("Fail");}
  else myGrade = "D";

  return `Your grade is ${myGrade} and Percentage is ${myPercent}`;
};

let yourResult = marksNumber(80, 100);
console.log(yourResult);
