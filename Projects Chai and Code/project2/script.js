const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
e.preventDefault();
const height =  parseInt(document.querySelector("#height").value);
const weight = parseInt(document.querySelector("#weight").value);
const results = document.querySelector("#results");
const weightguide = document.querySelector("#weightguide");

if(height === " " || height <0 || isNaN(height)){
    results.innerHTML = "Please enter a valid height";
    //  results.style.color = "white";
    // results.style.fontSize = "50px";
}
else if(weight === " " || weight <0 || isNaN(weight)){
    results.innerHTML = "Please enter a valid weight";
    //  results.style.color = "white";
    // results.style.fontSize = "50px";
    
} 
else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML =  `<span>Your BMI is ${bmi}</span>`;
    // results.style.color = "white";
    // results.style.fontSize = "50px";
    }
const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if(bmi<=18.6){
        weightguide.innerHTML  = `<span style="color:blue">You are underweight</span>`;
    }

    else if(bmi>=18.6 && bmi<=24.9){
        weightguide.innerHTML  = `<span style="color:pink">You are normal weight</span>`;
    }

    else{
        weightguide.innerHTML  = `<span style="color:purple">You are overweight</span>`;
    }


})