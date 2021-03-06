 export default function Modal() {
     
    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener('click', close)

    function open() {
    console.log(" Funcionou open")
    // Atribuição da classe active para a modal
    modalWrapper.classList.add("active")
    
    }

    function close() {
    // Remoção da classe active para a modal
    modalWrapper.classList.remove("active")

    console.log(" Funcionou remover active")
    }

    return {
        open, close
    }
}