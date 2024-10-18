document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('#display-box');
    let fullexp = ''; 
  
    const updateDisplay = (value) => {
      display.textContent = value || '0'; 
    };
  
    document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('click', (event) => {
        const value = event.target.value;
  
        if ((value >= '0' && value <= '9') || value === '.') {
          fullexp += value;
          updateDisplay(fullexp);
        } else if (value === "AC") {
          fullexp = '';
          updateDisplay('0');
        } else if (value === 'C') {
          fullexp = fullexp.slice(0, -1);
          updateDisplay(fullexp || '0');
        } else if (value === '=') {
          try {
            fullexp = eval(fullexp).toString();
            updateDisplay(fullexp);
          } catch (error) {
            updateDisplay('Error');
            fullexp = '';
          }
        } else {
          const lastChar = fullexp[fullexp.length - 1];
          if ('+-*/%'.includes(lastChar)) {
            fullexp = fullexp.slice(0, -1);
          }
          fullexp += ` ${value} `; 
          updateDisplay(fullexp);
        }
      });
    });
  });
  