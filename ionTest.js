const ions = [
    ["chromium (II) ion","Cr⁺²"],
    ["magnesium ion","Mg⁺²"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
    ["sulfate","SO₄⁻²"],
    ["nitrate","NO₃⁻¹"],
    ["silver ion","Ag⁺¹"]
]
let correct = 0;
let total = 0;
let answer = [0][0]; 
let firstTime = true;
let savedmiss = "none!";
let firstMistake =true;
let done = document.getElementById("popup");

function subOptimalScript(){
    let unmodified = document.getElementById("input").value;
    let length = unmodified.length;
    let modified;
    let modified2;
    for(i=0;i<length;i++){
        modified = unmodified.slice(0, i)
        modified2 = unmodified.slice(i+1,length)
        if(unmodified[i-1]=="⁺"||unmodified[i-1]=="⁻"){
            switch(unmodified[i]){
                case "0":
                    document.getElementById("input").value = modified +"⁰"+ modified2;
                    break;
                case "1":
                    document.getElementById("input").value = modified +"¹"+ modified2;
                    break;
                case "2":
                    document.getElementById("input").value = modified +"²"+ modified2;
                    break;
                case "3":
                    document.getElementById("input").value = modified +"³"+ modified2;
                    break;
                case "4":
                    document.getElementById("input").value = modified +"⁴"+ modified2;
                    break;
                case "5":
                    document.getElementById("input").value = modified +"⁵"+ modified2;
                    break;
                case "6":
                    document.getElementById("input").value = modified +"⁶"+ modified2;
                    break;
                case "7":
                    document.getElementById("input").value = modified +"⁷"+ modified2;
                    break;
                case "8":
                    document.getElementById("input").value = modified +"⁸"+ modified2;
                    break;
                case "9":
                    document.getElementById("input").value = modified +"⁹"+ modified2;
                    break;
            }
        }
        else if(isNaN(unmodified[i])==false){
            switch(unmodified[i]){
                case "0":
                    document.getElementById("input").value = modified +"₀"+ modified2;
                    break;
                case "1":
                    document.getElementById("input").value = modified +"₁"+ modified2;
                    break;
                case "2":
                    document.getElementById("input").value = modified +"₂"+ modified2;
                    break;
                case "3":
                    document.getElementById("input").value = modified +"₃"+ modified2;
                    break;
                case "4":
                    document.getElementById("input").value = modified +"₄"+ modified2;
                    break;
                case "5":
                    document.getElementById("input").value = modified +"₅"+ modified2;
                    break;
                case "6":
                    document.getElementById("input").value = modified +"₆"+ modified2;
                    break;
                case "7":
                    document.getElementById("input").value = modified +"₇"+ modified2;
                    break;
                case "8":
                    document.getElementById("input").value = modified +"₈"+ modified2;
                    break;
                case "9":
                    document.getElementById("input").value = modified +"₉"+ modified2;
                    break;
            }
            
            
        }
        else if(unmodified[i]== "+"){
            modified = unmodified.slice(0, i);
            modified2 = unmodified.slice(i+1,length);
            document.getElementById("input").value = modified +"⁺"+ modified2;
        }
        else if(unmodified[i]=="-"){
            modified = unmodified.slice(0, i);
            modified2 = unmodified.slice(i+1,length);
            document.getElementById("input").value = modified +"⁻"+ modified2;
        }
    }
}
function generate(){
    total++;
    display2.textContent = "Question: "+ total+ "/"+"36";
    if(total > 36){
        done.style.visibility = "visible"
        mistakes.textContent = "Mistakes: "+ savedmiss;
        display2.textContent = "Question: "+ 1+ "/"+"36";
    }
    let a = Math.floor(Math.random()*2);
    let b = Math.floor(Math.random()*2);
    let c;
    if(b == 0){
        c = 1
    }
    else{ c = 0}
    question.textContent = ions[a][b];
    answer = ions[a][c];
    console.log(answer);
}
generate();
document.getElementById("input").addEventListener("keypress",function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("submit").click();
    }
});
document.getElementById("submit").onclick=function(){
    studentSubmit = document.getElementById("input").value;
    if(studentSubmit == answer){
        if(firstTime == true){
            correct++;
            final.textContent = correct+"/"+total;
        }
        document.getElementById("input").value = "";

        generate();
        
        display1.textContent = "Correct: " + correct;
        firstTime = true;
    }
    else{
        display1.textContent = "Answer: "  + answer;
        
        if(firstMistake==true){
            savedmiss = answer;
            firstMistake = false;
        }
        else{
            savedmiss = savedmiss.concat(", ",answer);
            firstTime = false;
        }
    }
}
document.getElementById("retry").onclick=function(){
    done.style.visibility = "hidden";
    total = 0;
    correct = 0;
    savedmiss = "none!";
    firstMistake =true;
}

