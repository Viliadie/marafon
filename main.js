function calc(operator,a,b) {
    let result; 
   
  if (typeof (a) !== 'number'||typeof (b) !== 'number'||operator===undefined) {
        result = 'Error';
      return result;
    }
   if (b===0&&(operator==='dev'||operator==='remain')){
       result = 'Error';
      return result;
   }
  
  switch (operator) {
  case 'sum':
  result = a + b;
  break;
  
  case 'minus':
  result = a-b;
  break;
  
  case 'multi':
  result = a*b;
  break;
  
  case 'dev':
  result = a/b;
  break;
  
  case 'remain':
  result = a%b;
  break;
  
  case 'deg':
  result = a**b;
  break;
  
  default:
  result = 'Unknown operation';
  }
  
  return result;
  }
  
  console.log(calc('sum',20, 10));
  console.log(calc('minus', 20, 0));
  console.log(calc('multi', 20, 10));
  console.log(calc('dev', 20, 10));
  console.log(calc('remain', 20, 10));
  console.log(calc('deg', 20, 10));
  console.log(calc('deg', 10,));
  console.log(calc('deb', 'hg', 10));
  console.log(calc('dev', 20, 0));