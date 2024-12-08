function convertToFahrenheit() {
    const tempValue = document.getElementById("tempValue").value;
    if (tempValue !== "") {
        const fahrenheit = (tempValue * 9/5) + 32;
        document.getElementById("result").textContent = Result: ${fahrenheit} °F;
    } else {
        alert("Please enter a valid temperature!");
    }
}

function convertToCelsius() {
    const tempValue = document.getElementById("tempValue").value;
    if (tempValue !== "") {
        const celsius = (tempValue - 32) * 5/9;
        document.getElementById("result").textContent = Result: ${celsius.toFixed(2)} °C;
    } else {
        alert("Please enter a valid temperature!");
    }
}
