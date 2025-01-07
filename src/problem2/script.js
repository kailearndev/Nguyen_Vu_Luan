function getInputValues() {
    return {
        input: document.getElementById('amount-input').value,

        output: document.getElementById('amount-output').value,
    };
}

function handleFormSubmit() {
    const { input } = getInputValues();

    if (!input) {
        showModal();
        return;
    }


    const result = Number(input) * 22800;
    document.getElementById('amount-output').value = result;
}


function showModal() {
    const toast = document.getElementById('toast');
    toast.classList.remove('hidden');
    toast.classList.add('show');
    setTimeout(() => toast.classList.add('hidden'), 2000);
}


function swapValues() {
    const { input, output } = getInputValues();
    document.getElementById('amount-input').value = output;
    document.getElementById('amount-output').value = input;

    const inputLabel = document.getElementById('amount-input-label');
    const outputLabel = document.getElementById('amount-output-label');

    const tempLabel = inputLabel.innerText;
    inputLabel.innerText = outputLabel.innerText;
    outputLabel.innerText = tempLabel;
}

document.getElementById('submitButton').addEventListener('click', handleFormSubmit);
document.getElementById('swapButton').addEventListener('click', swapValues);
