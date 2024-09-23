// console.log("This is an external js");
// let name = prompt("What is you name?");
// console.log(name);

// var number = 3;
// console.log(number);
// number = "lexter";
// console.log(number);

// const PI=3.1415;
// console.log(PI);

// add +
// sub -
// mul *
// div /
// mod %

// let num1 = prompt("Emter Number 1");
// let num2 = prompt("Emter Number 2");

// let sum = parseInt(num1)+parseInt(num2);
// console.log("The sum is:"+sum);

// let difference = parseInt(num1)-parseInt(num2);
// console.log("The difference is:"+difference);

// let product = parseInt(num1)*parseInt(num2);
// console.log("The product is:"+product);

// let quotient = parseInt(num1)/parseInt(num2);
// console.log("The quotient is:"+quotient);

// let desimal = parseInt(num1)%parseInt(num2);
// console.log("The desimal is:"+desimal);

// let name = "lexter"
// let age=20;
// console.log("Your name is "+name+". Your age is");
// console.log("Your name is ${name}, Your age is ${age}");

// let a=5;
// let b = '5';

// console.log(a===b);

// let a=5;
// let b=5;

//  if(a==b){
//     console.log("Equals");
//  }
//  else if (a!=b){
//     console.log("Not Equals");
//  }
//  if(a>b){
//     console.log("Greater Than");
//  }else if(a<b){
//     console.log("Less Than");
//  }

// console.log("START");
//  const numbers = [1,3,5,2,7,8,4,3,10];

//september 23

const students=[
{
   "name":"Jerwin",
   "course":"BSIT",
   "address":"Tanauan",
   "grade":80,
   "subjects":["CCIT102","FAITH101","PE"]
},
{
   "name":"lexter",
   "course":"BSIT",
   "address":"Sto Tomas",
   "grade":80,
   "subjects":["CCIT102","FAITH101","PE"]
}
]
 
 var container = document.getElementById('student');
 console.log(container);
 var output=" ";

 students.map((student,index)=>{
   output+=student.name;
   output+=" ";
   output+=student.course;
   output+="<br>";
 });

 console.log(output);
 container.innerHTML=output;








// console.log(student[1]);

// console.log(students[0]);
// console.log(students[1].name);
// console.log(students[1].course);
// console.log(students[1].address);
// console.log(students[1].grade);
// console.log(students[1].subjects[2]);



// console.log(students[0]);

// console.log(students[0].name);
// console.log(students[0].course);
// console.log(students[0].address);
// console.log(students[0].grade);
// console.log(students[0].subjects[2]);












//  console.log("START");
//  const numbers = [1,3,5,2,7,8,4];


//  console.log(numbers);
 
//  console.log("END");

//  numbers.splice(2,0,'C');

//  console.log(numbers);

 



// console.log("START");
// const numbers = [1,3,5,2,7,8,4];

// console.log(numbers);

// console.log("END");

// numbers.sort().reverse();

// console.log(numbers);

// console.log(numbers);
// console.log("END");
// const number2 = numbers.slice(2,5);
// console.log(number2);

// console.log(number2)

// console.log("PUSH");
// numbers.push(9);
// numbers.push(1);

// console.log(numbers);
// console.log("POP");
// numbers.pop();

// console.log(numbers);

// console.log("UNSHIFT / ENQUEUE");
// numbers.unshift(3);
// numbers.unshift(4);
// numbers.unshift(7);
// console.log(numbers);
// numbers.shift();
// numbers.shift();
// console.log("SHIFT / DEQUEUE");
// console.log(numbers);

