
const input = document.getElementById("input");
const calc = document.getElementById("answer");
const output = document.getElementById("output");
const button = document.querySelectorAll('button');
let numbers = " ";
let numbers1 =0 ;
let numbers2 = 0;
let operand = 0;
let operator = " ";
let arr = Array.from(button);
arr.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        console.log(e.target.innerText);
        if(e.target.innerText=='÷')
        numbers+='/';
            else if(e.target.innerText=='×')
        numbers+='*';
    else if(e.target.innerText!='=' && e.target.innerText!='C' && e.target.innerText!='AC')
    numbers+=e.target.innerText;
input.value = numbers;
 if(e.target.innerText==='C')
      {
        numbers = numbers.substring(0, numbers.length-1);
        input.value= numbers;
      }
else if(e.target.innerText==='AC')
      {
        console.log("clear");
        input.value= " ";
        numbers = " "
        output.value= " ";
      }
    }
    )
});
    calc.addEventListener("click",()=>{
        console.log((`${numbers}`));
        try{
            string = eval(numbers);
            answer(string)
        }
        catch{
        output.value = "ERROR";
        output.style.color = "red"
        }
    })
function answer(ans){
output.value = ans;
}