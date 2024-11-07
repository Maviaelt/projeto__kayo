//barra de menu visto apenas por mobile 
    const menu = document.querySelector('.menu');
    const navMenu = document.querySelector('.nav-menu');

    menu.addEventListener('click', () => {
        menu.classList.toggle('ativo');
        navMenu.classList.toggle('ativo');
    });