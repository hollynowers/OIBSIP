// Get the display element
    const display = document.getElementById('display');

    // Get all the buttons
    const buttons = document.querySelectorAll('button');

    // Add event listeners to the buttons
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;

        if (buttonText === 'C') {
          // Clear the display
          display.value = '';
        } else if (buttonText === '=') {
          // Evaluate the expression and display the result
          try {
            display.value = eval(display.value);
          } catch (error) {
            display.value = 'Error';
          }
        } else {
          // Append the clicked button's text to the display
          display.value += buttonText;
        }
      });
    });