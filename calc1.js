function addInText(text)
{
    let block = document.getElementById('inputBlock');
    block.value += text;
}
function Calc()
{
    let block = document.getElementById('inputBlock');
    let a = block.value;
    let first;
    let newblock = document.getElementById('history');
    let result;
    try {
        first = parseInt(a);
        first += '.';
        let znak = a.substr(first.length - 1, 1);
        let second = a.substr(first.length, a.length - first.length);
        first = first.substr(0, first.length - 1);
        switch(true)
        {
            case (znak === '+'):
                result = parseInt(first) + parseInt(second);
                break;
            case (znak === '-'):
                result = parseInt(first) - parseInt(second);
                break;
            case (znak === '*'):
                result = parseInt(first) * parseInt(second);
                break;
            case (znak === '/'):
                result = parseInt(first) / parseInt(second);
                break;
            default:
                break;
        }
        
    } catch (error) {
        alert('Ошибка в данных. Вычисление невозможно.')
        block.value = '';
    }
    if(isFinite(result))
    {
        block.value = result;
        let p = document.createElement('p');
        p.textContent = a + "=" + result;
        newblock.appendChild(p)
    }
    else
    {
        alert('Ошибка в данных. Вычисление невозможно.')
        block.value = '';
    }
}
function Clear()
{
    let block = document.getElementById('inputBlock');
    block.value = '';
    let newblock = document.getElementById('history')
    newblock.innerHTML = '';
}