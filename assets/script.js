alert("Welcome to my site! My name is Norhan and i will calculate your grade!");

let grade = prompt("enter your grade");
alert(grade);
console.log("%c" + grade, "color: purple");

if (grade >= 90 && grade <= 100) {
  console.log("لقد حصلت على امتياز 🥳");
} else if (grade >= 80 || grade <= 89) {
  console.log("لقد حصلت على جيد جداً🤩");
} else if (grade >= 70 && grade <= 79) {
  console.log("لقد حصلت على جيد🙂");
} else if (grade >= 60 && grade <= 69) {
  console.log("لقد حصلت على مقبول😕");
} else if (grade >= 50 && grade <= 59) {
  console.log("لقد حصلت على ضعيف☹️");
} else if (grade < 50) {
  console.log("راسب💔");
}

// javascript is not the same as java!!
// there are some commonalities between java and javascript, like how we write a comment for instance
