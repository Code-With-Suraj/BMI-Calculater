const calculatebtn = document.getElementById('calculateBtn')
const resultDiv = document.getElementById('result')


const calculateBMI = () => {
    const height = parseFloat(document.getElementById('height').value)
    const weight = parseFloat(document.getElementById('weight').value)
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.innerHTML = `<span style="color: red; font-weight: bold;">Please fill all inputs and Positive Number for Calculate BMI</span>`
        return
    }
    const BMI = (weight / (height * height)).toFixed(2)
    let category = ""

    if (BMI < 18.5) {
        category = "Underweight"
    } else if (BMI >= 18.5 && BMI < 24.9) {
        category = "Normal weight"
    } else if (BMI >= 25 && BMI < 29.9) {
        category = "Overweight"
    } else {
        category = "Obese"
    }

    resultDiv.innerHTML = `Your BMI is <span>${BMI}</span>. You are classified as <span>${category}</span>.`
}