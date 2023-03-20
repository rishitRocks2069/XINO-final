//nav code
toggleBtn = document.querySelector('.toggle');
list = document.querySelector('.nav');

toggleBtn.addEventListener('click',function(){
    list.classList.toggle('hidden');
})

//form code
Next1 = document.querySelector('#next1')
Next2 = document.querySelector('#next2')
Next3 = document.querySelector('#next3')
Prev2 = document.querySelector('#prev2')
Prev3 = document.querySelector('#prev3') 
Prev4 = document.querySelector('#prev4')

Step1 = document.querySelector('#step1')
Step2 = document.querySelector('#step2')
Step3 = document.querySelector('#step3')
Step4 = document.querySelector('#step4')

Next1.addEventListener('click',() =>{
    Step1.classList.add('inactive')
    Step2.classList.remove('inactive')
})
Next2.addEventListener('click',() =>{
    Step2.classList.add('inactive')
    Step3.classList.remove('inactive')
})
Next3.addEventListener('click',() =>{
    Step3.classList.add('inactive')
    Step4.classList.remove('inactive')
})
Prev2.addEventListener('click',() =>{
    Step2.classList.add('inactive')
    Step1.classList.remove('inactive')
})
Prev3.addEventListener('click',() =>{
    Step3.classList.add('inactive')
    Step2.classList.remove('inactive')
})
Prev4.addEventListener('click',() =>{
    Step4.classList.add('inactive')
    Step3.classList.remove('inactive')
})