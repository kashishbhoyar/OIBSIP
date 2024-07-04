
    document.addEventListener("DOMContentLoaded", () => {
        // Get references to the input fields and button
        const inputField = document.querySelector('input[type="number"]');
        const radioButtons = document.querySelectorAll('input[name="temperature"]');
        const convertButton = document.querySelector('button');
        
        // Add click event listener to the button
        convertButton.addEventListener("click", () => {
            // Get the input value and convert it to a number
            const inputValue = parseFloat(inputField.value);
            
            // Check if the input is a valid number
            if (isNaN(inputValue)) {
                alert("Please enter a valid number for the temperature.");
                return;
            }
            
            // Determine which radio button is checked
            let conversionType;
            radioButtons.forEach(radio => {
                if (radio.checked) {
                    conversionType = radio.value;
                }
            });
            
            // Perform the conversion based on the selected type
            let convertedValue;
            if (conversionType === "Celcius") {
                // Convert from Fahrenheit to Celsius
                convertedValue = (inputValue - 32) * (5/9);
                alert(`${inputValue} Fahrenheit is equal to ${convertedValue.toFixed(2)} Celsius.`);
            } else if (conversionType === "fahrenheit") {
                // Convert from Celsius to Fahrenheit
                convertedValue = (inputValue * (9/5)) + 32;
                alert(`${inputValue} Celsius is equal to ${convertedValue.toFixed(2)} Fahrenheit.`);
            } else {
                alert("Please select a unit to convert to.");
            }
        });
    });

