const container = document.querySelector('.container')
const imgUtama = document.querySelector('.imgUtama')
const choices = document.querySelectorAll('.choice')
container.addEventListener('click',function(e){
    if(e.target.className == 'choice'){
        imgUtama.src = e.target.src;
        imgUtama.classList.add('fade');        
        setTimeout(function(){
            imgUtama.classList.remove('fade')
        },500);
        choices.forEach(function(choice){
           if(choice.classList.contains('active')){
                choice.classList.remove('active')
           } 
        })
        e.target.classList.add('active');
    }
})