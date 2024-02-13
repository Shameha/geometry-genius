function parallelogramAreaCalculation(){
  /*  const perallalogramBase = document.getElementById('parallelogram-base');
    const perallalogramText= perallalogramBase.value;
    const base = parseFloat(perallalogramText);
    console.log( base);
    // triangle height
    
    const perallalogramHeight = document.getElementById('parallelogram-height');
    const perallalogramHeightText = perallalogramHeight.value;
    const height = parseFloat(perallalogramHeightText);
    console.log(height);
    
    const area = base*height;
    console.log('perallaogram area:',area);
    const perallalogramArea = document.getElementById('triangle-area');
    perallalogramArea.innerText = area;
}*/
 const base = getElementById('parallelogram-base');
// console.log('base value',base);
 const height = getElementById('parallelogram-height');
// console.log('height value',height);
const area = base * height;
console.log('area of the perallelogram',area);

setInnerText('perallaogram',area)

}
function getElementById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
   const inputValueText = inputField.value;
   const inputValue = parseFloat(inputValueText);
   //console.log(inputValue);
   return inputValue;
}
function setInnerText(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}