function first()
{
    if(a > 10)
        a = a;
    else
        a * 2;
    if(a > 5)
        a = (2 * a) + 1;
    else{
        if(a < 3)
            a = 1;
        else
            a = 2 * (a-2);
    }
    if(a > 4)
        a = 5;
    else{
        if(a % 2 == 0)
            a = 6;
        else
            a = 7;
    }
    return a;
}
function second()
{
    switch (true){
        case a > 10:
            a = a;
            break;
        default:
            a = a * 2;
            break;
    }
    switch(true)
    {
        case a > 5:
            a = (2 * a) + 1;
            break;
        case a < 3:
            a = 1;
            break;
        case (a < 5) && (a > 3):
            a = 2 * (a-2);
            break;
        default:
            break;
    }
    switch(true)
    {
        case a > 4:
            a = 5;
            break;
        case (a % 2) === 0:
            a = 6;
            break;
        case (a % 2) !== 0:
            a = 7;
            break;
        default:
            break;
    }
    return a;
}

let a = 1;
console.log("a: " + first());
a = 1;
console.log("a: " + second());

    