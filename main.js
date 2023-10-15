// Get the display element by its ID
      let display = document.getElementById("display");

      // Function to add a value to the display
      function addToDisplay(value) {
        if (value === "%") {
          try {
            // Check if the current display value has exactly two numbers separated by '*'
            const match = display.value.match(/(\d+)\s*\*\s*(\d+)/);

            if (match) {
              const num1 = parseFloat(match[1]);
              const num2 = parseFloat(match[2]);

              if (!isNaN(num1) && !isNaN(num2)) {
                const result = (num1 * num2) / 100;
                display.value = result.toString();
              } else {
                throw "Invalid";
              }
            } else {
              throw "Invalid";
            }
          } catch (error) {
            display.value = "Invalid Input";
          }
        } else {
          // Concatenate the provided value to the current display value
          display.value += value;
        }
      }

      function calculate() {
        try {
          display.value = eval(display.value); // Evaluate the current display value as an expression
        } catch (error) {
          display.value = "Invalid Input"; // Handle and display the error
        }
      }

      // Function to delete the last character from the display
      function del() {
        let str = "";
        for (let i = 0; i < display.value.length - 1; i++) {
          str += display.value[i];
        }
        console.log(str);
        display.value = str;
      }

      function clearDisplay() {
        display.value = "";
      }
