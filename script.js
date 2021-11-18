 const navigationEl = document.querySelector('.navigation'); 
 const toggleEl = document.querySelector('.toggle'); 

toggleEl.addEventListener('click', ()=> {
    toggleEl.classList.toggle('active'); 
    navigationEl.classList.toggle('active');
})