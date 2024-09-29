const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink= document.querySelector('.register-link');
const btnpop = document.querySelector('.opener');
const closer = document.querySelector('.close');

registerlink.addEventListener('click', ()=>{
wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
    });

btnpop.addEventListener('click', ()=>{
        wrapper.classList.add('active-popup');
        });

        closer.addEventListener('click', ()=>{
            wrapper.classList.remove('active-popup');
            });
