function first()
  {
    if(a > 10)
        itog += 'a is bigger than 10 ';
    else
        itog += 'a is less than or equal to 10 ';
    if(a=== 5)
        itog += 'an example of a special case ';
    if(a === 15)
        itog+= 'but a is not 15 ';
    if(a > 5)
        itog+= 'and a is greater than 5 ';
    else
        itog+='and a is less than or equal to 5 ';
    if(a % 2)
        itog+= 'and a is odd.';
    else
        itog+= 'and a is even.';
    return itog;
  }

  function second(){
    switch(true)
    {
        case(a > 10):
            itog += 'a is bigger than 10 ';
            break;
        default:
            itog += 'a is less than or equal to 10 ';
            break;
    }
    switch(true)
    {
        case(a === 5):
            itog += 'an example of a special case ';
            break;
        case (a === 15):
            itog += 'but a is not 15 ';
            break;
    }
    switch(true)
    {
        case(a > 5):
            itog+= 'and a is greater than 5 ';
            break;
        default:
            itog+='and a is less than or equal to 5 ';
            break;
    }
    switch(true)
    {
        case(a % 2):
            itog+= 'and a is odd.';
            break;
        default:
            itog+= 'and a is even.';
            break;
    }
    return itog;
  }
  let itog = '';
  let a = 10;
  console.log(first());
  itog = '';
  console.log(second());