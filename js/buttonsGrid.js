const valueArray = [1,2,3,6,9,8,7,4];
const btnIds = [1,2,3,6,9,8,7,4];
const btn5 = document.getElementById('btn5');
const btnContainer = document.getElementById('btns');

const handleBtn5Click = () => {
    const valueCopy = valueArray;
    const popped = valueCopy.pop();
    valueCopy.unshift(popped);
    renderButtons(valueCopy);
}

btn5.addEventListener('onclick',handleBtn5Click);

const renderButtons = (result) => {
    btnIds.map((id,index) => {
        btnContainer.childNodes[(2*id)-1].innerHTML = result[index];
    })
}