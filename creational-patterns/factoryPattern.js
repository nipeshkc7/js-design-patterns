function Rectangle() {
  function createRectangle(){
    console.log('Creates rectangle');
    return 'rectangle';
  }
  return createRectangle();
}

function Square() {
  function createSquare(){
    console.log('Creates Square');
    return 'square';
  }
  return createSquare();
}

function ShapeFactory(shape){
  if(shape === "Square") {
    return Square();
  }

  if(shape === "Rectangle") {
    return Rectangle();
  }
}

console.log(ShapeFactory('Square')); //Square
console.log(ShapeFactory('Rectangle')); //Rectangle
