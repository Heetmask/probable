const openModal = document.querySelector('.open_modal') 
console.log(openModal) 
const closeModal = document.getElementById('close_modal') 
const modal = document.getElementById('modal') 
openModal.addEventListener('click', function(e){ 
 e.preventDefault() 
 modal.classList.add('active') 
}) 
closeModal.addEventListener('click', () =>{ 
 modal.classList.remove('active') 
})

const white = document.querySelector('.white');
const subscribe = document.querySelector('.subscribe');
white.addEventListener('click', () =>{ 
    subscribe.classList.toggle('none');
   })