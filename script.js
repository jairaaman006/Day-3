// 1.For the given JSON iterate over all for loops (for, for in, for of, forEach)
 var obj= [{
person:"Jairaaman",
age:22,
company:"TCS"
 },
 {
   person:"Vinoth",
   age:25,
   company:"Amazon",
 },
 {
   person:"Jagadeesh",
   age:22,
   company:"DLF Techpark"
 }];
//  for loop
for(var i=0;obj[i].length;i++){
  user=data[i];
console.log( `
Person:${user.person}
Age:${user.age}
Company:${user.company}
`)};

// for in loop
for(var index in obj){
user=obj[index];
console.log(
  `Person:${user.person}
  Age:${user.age}
  Company:${user.company}
  `)};
  // for of loop
  for (var key of obj){
    console.log(
      `Person:${key.person}
      Age:${key.age}
      Company:${key.company}
      `
    )
  };
  // for each loop
obj.forEach((user)=>{
console.log(`Person:${user.person}
Age:${user.age}
Company:${user.company}
`
)
});

// 2.Create your own resume data in JSON format

let resume=[{
  Name:"Jairaaman",
  Bio:"To work with a leading organization & to use my analytical thinking to the best of my ability combined with perseverance.",
  Academicqualification:{
    Course1:"DME",
    yearofpassing:2018,
    percentage:"82%",
    Course2:"BE Mechanical",
    yearofpassing:2021,
    percentage:"78.3%"
  },
  Project:"Implementation of 'lean six sigma' framework with environmental condition",
  Extracirriculaam:{
    Cerificate:"Won 'FUTSAL'in a national level talent fest, organised by'Beyond dreams-Conact 2020', March ",

  },
  Hobbies:"Listening music,playing football,watching movies",
  Personeldetails:{
    phone:7982714771,
    Email:"jairaaman.06@gmail.com"
  },
}];
console.log(resume);



























 