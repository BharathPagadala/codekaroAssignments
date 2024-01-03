/*  DAY-1, Assignment-3 - Array of Objects Operations
    Description - Practice adding, removing, and updating values in an objects */


let cars = [];

//adding objects to the array
cars.push({make: "Toyota", model: "Camry", year: 2018},
          {make: "Suzuki", model: "Swift", year: 2010},
          {make: "TATA", model: "NEXA", year: 2019});

//removing first object from the array using pre-defined function called "shift()" in arrays
cars.shift();

//adding element to end of the array
cars.push({make: "Honda", model: "Civic", year: 2020});

cars[1].model = "Accord";

console.log(cars);
