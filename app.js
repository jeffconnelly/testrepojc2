'use strict';


// function whoAmI(name) {
//   console.log('Hi, my  name is Jeff and I\'m 26 years old'); 
// }

// function yearOfBirth(age){
//   try {
//     if (age < 0) throw 'is a negative number';
//   }
//   catch (e){
//     console.log('Enter a positive number for your age');
//   }
//   // if (age < 0){
//   //   throw new Error('Must provide a positive number for your age');
//   // }
//   let yearOfBirthCalc = 2017 - age;  
//   console.log('I was born in ' + yearOfBirthCalc);   
// }

// whoAmI();
// yearOfBirth(-3);

function jediName(firstName, lastName){
  console.log(`${lastName.slice(0, 3)}${firstName.slice(0, 2)}`);
}

jediName('Jeff', 'Connelly');

function beyond(num) {
  if (num === Infinity){
    console.log('And beyond');
  }
  else if (num < Infinity && num > 0) {
    console.log('To infinity');
  }
  else if (num < Infinity && num < 0){
    console.log('To negative infinity');
  }
  else {
    console.log('Staying home');
  }
}

beyond(-4);

