function calculateRectangleArea(){
    //rectangle width
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleText = rectangleWidth.value;
    const width = parseInt(rectangleText);
    console.log(width);
    // rectangle length
    const rectanglelength = document.getElementById('rectangle-length')
    const rectangleLengthText=rectanglelength.value;
    const length = parseInt(rectangleLengthText);
    console.log(length);
    //rectangle area
    const area = width*length;
    console.log('Rectangle area:',area);
const rectangleArea = document.getElementById('rectangle-area');
 rectangleArea.innerText= area;
}