function manyChecks() {
    let a = 10;
    console.log(`a = ${a}`);
    
    return (
      a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');
  }
  manyChecks();

  function first()
  {
    if(a > 10)
        itog += 'a is bigger than 10';
    else
        itog += 'a is less than or equal to 10';
    if(a=== 5)
        itog += 'an example of a special case';
    if(a === 15)
        itog+= 'but a is not 15';
    if(a > 5)
        itog+= 'and a is greater than 5';
    else
        itog+='and a is less than or equal to 5 ';
    if(a % 2)
        itog+= 'and a is odd';
    else
        itog+= 'and a is even';
    return itog;
  }
  let itog = '';
  let a = 10;
  console.log(first())