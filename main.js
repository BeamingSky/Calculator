// Get the display element by its ID
let display = document.getElementById("display");

// Function to add a value to the display
function addToDisplay(value) {
  if (value === "%") {
    try {
      // If the value is '%', evaluate the current display value as a percentage
      const currentValue = parseFloat(display.value);
      
      if (!isNaN(currentValue)) {
        display.value = (currentValue / 100).toString();
      } 
      else {
        throw "Invalid Input"; // Throw an error for invalid input
      }
    } 
    catch (error) {
      display.value = "Error: " + error; // Handle and display the error
    }
  } 
  else {
    // Concatenate the provided value to the current display value
    display.value += value;
  }
}

// Function to perform calculation
function calculate() {
  try {
    display.value = eval(display.value); // Evaluate the current display value as an expression
  } catch (error) {
    display.value = "Error: " + error; // Handle and display the error
  }
}

// Function to clear the display
function clearDisplay() {
  display.value = ""; // Set the display value to an empty string, clearing the content
}
