
const button = document.querySelector('button');

button.addEventListener('click', modalShow)
let modal;
let backdrop;


function modalShow() {

    if (modal) {
        return;
    }

    modal = document.createElement('div')
    modal.className = 'modal'
    const btModalCancel = document.createElement('button')
    btModalCancel.textContent = "Cancel"
    btModalCancel.addEventListener("click", closeModalHandler);
    btModalCancel.className = 'btn btn--alt';
    const btModalAccept = document.createElement('button')
    btModalAccept.textContent = "Accept"
    btModalAccept.className = 'btn';
    const modalText = document.createElement('p');
    modalText.textContent = 'Are you sure?';

    modal.append(modalText);
    modal.append(btModalAccept);
    modal.append(btModalCancel);

    document.body.append(modal);

    backdrop = document.createElement('div');
    backdrop.className = 'backdrop';

    backdrop.addEventListener('click', closeModalHandler);

    document.body.append(backdrop);
}

function closeModalHandler() {
    modal.remove();
    modal = null;

    backdrop.remove();
    backdrop = null;
}


