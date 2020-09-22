var modal = document.getElementById("modal")
var modalBtn = document.getElementById("modalBtn")
var crossBtn = document.getElementById("cross")

modalBtn.addEventListener('click', openModal)
crossBtn.addEventListener('click', closeModal)

function openModal(){
    modal.style.display = 'block';
  }

function closeModal(){
    modal.style.display = 'none';
}