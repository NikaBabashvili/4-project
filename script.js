const inputfield = document.getElementById('input2');
const eror = document.getElementById('eror');
const text3 = document.getElementById('text3');
const text6 = document.getElementById('text6');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const inputfield2 = document.getElementById('num6');
const Calculate = document.getElementById('Calculate');
const input3 = document.getElementById("input");
const resetbtn = document.getElementById("reset");
Calculate.style.visibility = 'visible';



inputfield.addEventListener('input', function() {
    const inputi = inputfield.value.toLowerCase();

    if (inputi < 0) {
        eror.innerHTML = 'cant be less than zero!'
        eror.style.color = 'red'
        eror.style.textAlign = 'end'
    }
    else if (inputi === "0") {
        eror.innerHTML = 'cant be zero!'
        eror.style.color = 'red'
        eror.style.textAlign = 'end'
    }
    else if (inputi > 0) {
        eror.innerHTML = 'Valid number'
        eror.style.color = 'hsl(120, 87%, 45%)'
        eror.style.textAlign = 'end'
    }
    else {
        eror.innerHTML = '';
        eror.style.color = '';
    }
});

const per1 = 0.05
const per2 = 0.10
const per3 = 0.15
const per4 = 0.25
const per5 = 0.50


num1.addEventListener('click',function(){
    const inputi = parseFloat(inputfield.value); 
    const inputi3 = parseFloat(input3.value);   
    Calculate.style.visibility = 'hidden';
    
    
    if (!isNaN(inputi) && !isNaN(inputi3)) {
        const total = inputi3 / inputi * per1;
        text3.innerHTML = "$" + total;
        const total2 =  inputi3 / inputi + total;
        text6.innerHTML = "$" + total2
    }
    else {
       
    }
if(input3.value === '')
{text3.innerHTML = 'fill bill input'
text3.style.fontSize = '28px'
text3.style.color = 'red'}
else if(inputfield.value === ''){
text3.innerHTML = 'fill number of poeple input'
text3.style.fontSize = '20px'
text3.style.color = 'red'
}else{
    text3.style.color = ''
    text3.style.fontSize = '40px'
}
})


num2.addEventListener('click',function(){
    const inputi = parseFloat(inputfield.value); 
    const inputi3 = parseFloat(input3.value);   
    Calculate.style.visibility = 'hidden';
    
    
    if (!isNaN(inputi) && !isNaN(inputi3)) {
        const total = inputi3 / inputi * per2;
        text3.innerHTML = "$" + total;
        const total2 =  inputi3 / inputi + total;
        text6.innerHTML = "$" + total2
        
    }
    else {
       
    }
if(input3.value === '')
{text3.innerHTML = 'fill bill input'
text3.style.fontSize = '28px'
text3.style.color = 'red'}
else if(inputfield.value === ''){
text3.innerHTML = 'fill number of poeple input'
text3.style.fontSize = '20px'
text3.style.color = 'red'
}else{
    text3.style.color = ''
    text3.style.fontSize = '40px'
}
})

num3.addEventListener('click',function(){
    const inputi = parseFloat(inputfield.value); 
    const inputi3 = parseFloat(input3.value);   
    Calculate.style.visibility = 'hidden';
    
    
    if (!isNaN(inputi) && !isNaN(inputi3)) {
        const total = inputi3 / inputi * per3;
        text3.innerHTML = "$" + total;
        const total2 =  inputi3 / inputi + total;
        text6.innerHTML = "$" + total2
    }
    else {
       
    }
if(input3.value === '')
{text3.innerHTML = 'fill bill input'
text3.style.fontSize = '28px'
text3.style.color = 'red'}
else if(inputfield.value === ''){
text3.innerHTML = 'fill number of poeple input'
text3.style.fontSize = '20px'
text3.style.color = 'red'
}else{
    text3.style.color = ''
    text3.style.fontSize = '40px'
}
})
num4.addEventListener('click',function(){
    const inputi = parseFloat(inputfield.value); 
    const inputi3 = parseFloat(input3.value);   
    Calculate.style.visibility = 'hidden';
    
    
    if (!isNaN(inputi) && !isNaN(inputi3)) {
        const total = inputi3 / inputi * per4;
        text3.innerHTML = "$" + total;
        const total2 =  inputi3 / inputi + total;
        text6.innerHTML = "$" + total2
    }
    else {
       
    }
if(input3.value === '')
{text3.innerHTML = 'fill bill input'
text3.style.fontSize = '28px'
text3.style.color = 'red'}
else if(inputfield.value === ''){
text3.innerHTML = 'fill number of poeple input'
text3.style.fontSize = '20px'
text3.style.color = 'red'
}else{
    text3.style.color = ''
    text3.style.fontSize = '40px'
}
})
num5.addEventListener('click',function(){
    const inputi = parseFloat(inputfield.value); 
    const inputi3 = parseFloat(input3.value);   
    Calculate.style.visibility = 'hidden';
    
    
    if (!isNaN(inputi) && !isNaN(inputi3)) {
        const total = inputi3 / inputi * per5;
        text3.innerHTML = "$" + total;
        const total2 =  inputi3 / inputi + total;
        text6.innerHTML = "$" + total2
    }
    else {
       
    }
if(input3.value === '')
{text3.innerHTML = 'fill bill input'
text3.style.fontSize = '28px'
text3.style.color = 'red'}
else if(inputfield.value === ''){
text3.innerHTML = 'fill number of poeple input'
text3.style.fontSize = '20px'
text3.style.color = 'red'
}else{
    text3.style.color = ''
    text3.style.fontSize = '40px'
}
})

Calculate.addEventListener('click', function(){
    calculateExample();
    
})

function calculateExample() {
    const inputi = parseFloat(inputfield.value);
    const inputi3 = parseFloat(input3.value);
    const typed = parseFloat(inputfield2.value);
    const per6 = typed / 100;
  
    if (!isNaN(inputi) && !isNaN(inputi3)) {
        const total = inputi3 / inputi * per6;
        text3.innerHTML = "$" + total;
        const total2 =  inputi3 / inputi + total;
        text6.innerHTML = "$" + total2
    } else {
      text3.innerHTML = 'Invalid input';
    }
  
    if (input3.value === '') {
      text3.innerHTML = 'Fill bill input';
      text3.style.fontSize = '28px';
      text3.style.color = 'red';
    } else if (inputfield.value === '') {
      text3.innerHTML = 'Fill number of people input';
      text3.style.fontSize = '20px';
      text3.style.color = 'red';
    } else if(inputfield2.value === '')
    { text3.innerHTML = 'Fill select tip input';
    text3.style.fontSize = '20px';
    text3.style.color = 'red';}
    
    else {
      text3.style.color = '';
      text3.style.fontSize = '40px';
    }
  }
  

  resetbtn.addEventListener('click',function(){
    inputfield2.value = ''
    inputfield.value = ''
    input3.value = ''
    text3.innerHTML = '0'
    text6.innerHTML = '0'
    text3.style.color = "hsl(172, 67%, 45%)"
    text3.style.fontSize = '40px'
    Calculate.style.visibility = 'visible'
})
