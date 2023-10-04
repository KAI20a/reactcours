function addInText(text)
{
    let block = document.getElementById('inputBlock');
    block.value += text;
}
function Calc()
{
    let block = document.getElementById('inputBlock');
    let a = block.value;
    let b;
    let newblock = document.getElementById('history')
    try {
        b = eval(a);
        block.value = b;
        let p = document.createElement('p');
        p.textContent = a + "=" + b;
        newblock.appendChild(p)
    } catch (error) {
        alert('Ошибка в данных. Вычисление невозможно.')
    }
}
function Clear()
{
    let block = document.getElementById('inputBlock');
    block.value = '';
    let newblock = document.getElementById('history')
    newblock.innerHTML = '';
}