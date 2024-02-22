let noButtonClickCount = 0;

document.getElementById('yes-button').addEventListener('click', function() {
    showModal('Oh yes, Thank you');
});

document.getElementById('no-button').addEventListener('click', handleNoButtonClick);

document.querySelector('.close-btn').addEventListener('click', closeModal);

function handleNoButtonClick() {
    noButtonClickCount++;

    if (noButtonClickCount === 1) {
        document.getElementById('yes-button').style.width = '150px';
        document.getElementById('no-button').innerHTML = 'Are you sure?';
    } else if (noButtonClickCount === 2) {
        document.getElementById('yes-button').style.width = '200px';
        document.getElementById('no-button').innerHTML = 'Really?';
    } else if (noButtonClickCount === 3) {
        document.getElementById('yes-button').style.width = '250px';
        document.getElementById('no-button').innerHTML = 'Last Chance';
    } else if (noButtonClickCount >= 4) {
        showModal('Ah, shucks!');
    }

    document.getElementById('no-button').classList.add('are-you-sure');
}

function showModal(text) {
    const urlParams = new URLSearchParams(window.location.search);
    const sender = urlParams.get('q');
    const receiver = urlParams.get('q2');

    document.getElementById('modal-text').innerText = `${text}\n\nFrom: ${'Sender'}\nTo: ${'Reciever'}`;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
