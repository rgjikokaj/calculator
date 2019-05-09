function input(button){
  document.calc.display.value += button.value;
  //  if (
  // action === '+' ||
  // action === '-' ||
  // action === '*' ||
  // action === '/')

  // console.log('operator key!')

}
function clearDisplay(){
  document.calc.display.value = "";
}

function enter(){
  document.calc.display.value= eval(document.calc.display.value);
}

function Average(){
  let sum=0;

  listofNums = document.calc.display.value.split(',');

  for(let i=0; i < listofNums.length; i++){
    sum += parseInt(listofNums[i]);
  }
  let average = sum/ listofNums.length;
  
  document.calc.display.value = average;
}