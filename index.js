// Write your solution in this file!

// Declare a global variable employee and assign it an initial value of {name: "Sam"}
let employee = {name: "Sam"};

// Define a function that returns an employee with the original key value pairs and the new key value pair
function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Use the Object.assign method to create a clone of the employee object and assign the new key value pair to it
  return Object.assign({}, employee, {[key]: value});
}

// Define a function that updates employee with the given key and value (it is destructive) and returns the entire updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Use the bracket notation to assign the new value to the employee object using the key
  employee[key] = value;

  // Return the updated employee object
  return employee;
}

// Define a function that deletes key from a clone of employee and returns the new employee (it is non-destructive)
function deleteFromEmployeeByKey(employee, key) {
  // Use the Object.assign method to create a clone of the employee object
  let newEmployee = Object.assign({}, employee);

  // Use the delete operator to remove the key from the new employee object
  delete newEmployee[key];

  // Return the new employee object
  return newEmployee;
}

// Define a function that returns employee without the deleted key/value pair and modifies the original employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  // Use the delete operator to remove the key from the employee object
  delete employee[key];

  // Return the updated employee object
  return employee;
}