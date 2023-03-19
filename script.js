toggleBtn = document.querySelector('.toggle');
list = document.querySelector('.nav');

toggleBtn.addEventListener('click',function(){
    list.classList.toggle('hidden');
})