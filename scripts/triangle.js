function calculationTriangleArea(){
    //triangle base
const triangleBase = document.getElementById('triangle-base');
const triangleText= triangleBase.value;
const base = parseFloat(triangleText);
console.log( base);
// triangle height

const triangleHeight = document.getElementById('triangle-height');
const triangleHeightText = triangleHeight.value;
const height = parseFloat(triangleHeightText);
console.log(height);

const area = 0.5*base*height;
console.log('triangle area:',area);
const triangleArea = document.getElementById('triangle-area');
triangleArea.innerText = area;
}