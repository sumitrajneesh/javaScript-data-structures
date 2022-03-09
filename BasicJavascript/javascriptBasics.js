/**
 * JavaScript a lightweight , cross-platform , object-oriented computer programming langague
 * Javascript is one og the core technologies of web development.
 * Javascript : client side and 
 * 
 */
/**
 * Variable and constant
 * Data type:
 * primitive data types
 * Number, string, boolean, undefined, Null
 * javascript has dynamic typing : data types are automatically assigned to variables
 * 
 */

// var firstName = 'sumit';
// console.log(firstName);
// var lastName="choudhary";
// console.log(lastName);

// var fullAge = 21;
// console.log(fullAge);

// var job;
// console.log(job);
// job='Teacher';
// console.log(job);

/**
 * variable mutation and type coercion
 * 
 */

//  var firstName = 'sumit';
//  var age = 21;
//  console.log(typeof(firstName + ' ' + age )); //age become a string


// var job , isMarried;
// job = 'teacher';
// isMarried=false;
// console.log(typeof(firstName + 'is a ' + age + ' year old ' + job + '.Is he married ?' + isMarried));


/**
 * Variable mutation
 */


//  age = 'twenty one';
//  job='driver';
//  alert(firstName + 'is a ' + age + ' year old ' + job + '.Is he married ?' + isMarried);
//  var lastName = promt('What is his last Name ?');
//  console.log(firstName + ' ' + lastName);

/**
 * Basics operators
 */

//  var year , yearJohn, yearMark;

//  now = 2020;
//  ageSumit = 21;
//  ageAmit = 31;

//  //Math operators
//  yearSumit = now - ageSumit
//  yearAmit = now - ageAmit;

//  console.log(yearSumit)
//  console.log(now*2)
//  console.log(now /2)
//  console.log(now + 2)

//  //logical operators

//  var amitolder = ageSumit < ageAmit
// console.log(amitolder);

// //typeOf operator

// console.log(typeof amitolder)
// console.log(typeof ageSumit)
// console.log(typeof 'amit is older than sumit')
// var x;
// console.log(typeof x);

/**
 * Operator precedence
 */

//  var now = 2020;
//  var yearSumit = 21;
//  var fullAge = 18;

//  var isFullAge = now - yearSumit >= fullAge;
//  console.log(isFullAge);

//  var agesumit = now -yearSumit;
//  var ageAmit = 35;
//  var average  = (agesumit + ageAmit) / 2;
//  console.log(average);
 
// //multiple assignment
// var x,y;
// x = y = (3 + 5)* 4 - 6;
// console.log(x,y)

// x *= 2;
// console.log(x);
// x +=10
// console.log(x);


/**
 * If/else statements
 */

//  var firstName = 'sumit';
//  var civilStatus;
//  if(civilStatus === 'undefined'){
//   console.log(firstName + 'is married !');
//  }else {
//      console.log(firstName + 'will hopefully marry soon :)');
//  }

//  var isMarried = true;
//  if(isMarried){
//      console.log(firstName+ 'is married');
//  }else {
//      console.log(firstName + 'will hopefully marry soon :)');
//  }

/**
 * Boolean logic
 */

//  var firstName = 'sumit';
//  var age = 21;
//  if(age < 14){
//      console.log(firstName + 'is a boy');
//  }else if(age >= 13 && age < 20){
//      console.log(firstName +' is a teenager');
//  }else if(age >=20 && age < 30){
//      console.log( firstName + 'is a young man');
//  }else {
//      console.log(firstName + 'is a man')
//  }

/**
 * The Ternary operator and switch Statemnts
 */

//  var firstName = 'sumit';
//  var age = 14;
//  age >= 18 ? console.log(firstName + 'drinks beer'): console.log(firstName + ' drinks juice ');


// //switch statement
// var job = 'teacher';
// switch(job){
//     case 'teacher':
//         case 'instructor':
//         console.log(firstName)
//         break;
//         case 'driver':
//             console.log(firstName + 'drives and uber in Lisbon');
//         break;
        
//       case 'designer':
//           console.log(firstName + 'designs beautiful websites');
//           break;
//       default:
//           console.log(firstName + 'does something else.')      
// }

/**
 * Truthy and falsy value
 */

 //falsy values :undefined, null, 0, '', NaN
 //truthy values :NOT falsy values

//  var height;

//  height = 0;
//  if(height || height === 0){
//      console.log('Variable is defined');
//  }else {
//      console.log('variable has NOT been defined')
//  }

//  //equality operators

//  if(height == '23'){
//      console.log('The == operator does type coercion!')
//  }

 /**
  * use the === operator to avoid the type coercions problem
  */

  /**
   * functions
   */
/*
   function calculateAge(birthYear){
       return 2018 - birthYear;
   }

   var ageSumit = calculateAge(1998);
   var ageAmit = calculateAge(1990);
   var ageManish = calculateAge(2000);
   console.log(ageAmit,ageSumit,ageManish);


   function yearsUntilRetirement(year, firstName){
       var age = calculateAge(year);
       var retirement = 65 - age;
       if(retirement > 0){
           console.log(firstName + ' retires in ' + retirement + ' years ')
       }else {
           console.log(firstName)
       }
   }

   yearsUntilRetirement(1990, 'sumit')
   yearsUntilRetirement(2000, 'amit')
   yearsUntilRetirement(1995, 'ankita')
*/

/**
 * Function Statements and Expressions
 */

//  var whatDoYouDo = function(job, firstName){
//      switch(job){
//          case 'teacher': 
//           return firstName + ' teaches kids how to code ';
//          case 'driver': 
//           return firstName + ' drives a cab in Lisbon';
//          case 'designer': 
//           return firstName + ' designs beautiful websites ';

//           default:
//               return firstName + 'does something else';
//      }
//  }

//  console.log(whatDoYouDo('teacher', 'sumit'))
//  console.log(whatDoYouDo('designer', 'amit'))
//  console.log(whatDoYouDo('retired', 'mark'))

/**
 * Array
 */

//  var names = ['sumit', 'amit', 'anish'];
//  var years = new Array(1990, 1969, 1948);

//  console.log(names[2]);
//  console.log(names.length);

//  //mutate array data

//  names[1] = 'Ben';
//  names[names.length] = 'mary';
//  console.log(names);

//  //different data types

//  var john = ['jogn', 'bell', 1990, 'teacher', false];
//  john.push('blue');
//  john.unshift('Mr.');
//  console.log(john);
//  john.pop();
//  john.pop();
//  john.shift();
//  console.log(john);

//  console.log(john.indexOf(23));
//  var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John Is a designer';
//  console.log(isDesigner)

/**
 * Objects and properties,
 * order is not matter
 */
//object literal
//  var sumit ={
//      firstName: 'sumit',
//      lastName:'choudhayr',
//      birthYear: 1990,
//      family:['sumit', 'amit'],
//      job:'teacher',
//      isMarried:false
//  }

//  console.log(sumit.firstName)
//  console.log(sumit['lastName']);
//  var x = 'birthYear';
//  console.log(sumit[x]);

//  sumit.job='designer';
//  sumit['isMarried'] = true;
//  console.log(sumit);

// //new Object

// var amit = new Object();
// amit.firstName = 'amit';
// amit.birsthYear = 2000;
// amit['lastName'] = 'choudhary';
// console.log(amit);

/**
 * Object and methods
 */
/*
var sumit ={
         firstName: 'sumit',
         lastName:'choudhayr',
         birthYear: 1990,
         family:['sumit', 'amit'],
         job:'teacher',
         isMarried:false,
         calcAge: function(){
              this.age = 2018 - this.birthYear
         }
     }


     console.log(sumit.calcAge(1990))

     */

/**
 * array is also object
 */

 /**
  * LOOPS and iterations
  */
//  var john = ['jogn', 'bell', 1990, 'teacher', false];

//  for(var i = 0; i < john.length ; i++){
//      if(typeof(john[i] !== 'string')) continue;
//      console.log(john[i]);
//  }
//  for(var i = 0; i < john.length ; i++){
//      if(typeof(john[i] !== 'string')) break;
//      console.log(john[i]);
//  }

/**Scoping chain
 * 
 */

 /**
  * this keywords
  */

//  for (i = 0; i < 3; i++) {
//     const log = () => {
//       console.log(i);
//     }
//     setTimeout(log, 100);
//   }
  
  
  function foo() {
      let a = b = 0;
      a++;
      return a;
    }
    
 console.log(foo()) ; 
  console.log(typeof(a))  ; // => ??? number 
   console.log(typeof(b)) ; // => ???