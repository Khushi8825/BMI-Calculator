document.addEventListener("DOMContentLoaded",function(){
    const weight = document.querySelector("#weight");
    const height = document.querySelector("#height");
    const button = document.querySelector("#calculate");
    const reset = document.querySelector("#reset")
    function validateinput(entered){
        if(entered.trim() === ""){
            alert("Enter the details fully");
            return false;
        }

        return true;
    }
    function solve(W,H){
        return W / (H * H);
    }
    button.addEventListener("click", function(){
        let weightVal = weight.value;
        let heightVal = height.value;
        if(!validateinput(weightVal) || !validateinput(heightVal)){
            return;
        }
        else{
            const W = parseFloat(weightVal)
            const H = parseFloat(heightVal)*0.01;
            if (isNaN(W) || isNaN(H) || H <= 0) {
                document.querySelector(".output").textContent = "Please check the input.";
                return;
            }
            const BMI = solve(W,H).toFixed(2)
            let category
            if(BMI == Infinity){
                document.querySelector(".output").textContent = "please check the input";
                return;
            }
            if(0< BMI && BMI < 18.5){
                category = "Underweight"
            }
            else if(18.5 <= BMI && BMI <= 24.9){
                category = "Normal weight"
            }
            else if(25 <= BMI && BMI <= 29.9){
                category = "Overweight"
            }
            else if(30 <= BMI ){
                category = "Obese"
            }
            document.querySelector(".output").textContent = BMI + " You are " + category;
        }
    });
    reset.addEventListener("click",function(){
        document.querySelector(".output").textContent = "";
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
    });
});