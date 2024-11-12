//barra de menu visto apenas por mobile 
    const menu = document.querySelector('.menu');
    const navMenu = document.querySelector('.nav-menu');

    menu.addEventListener('click', () => {
        menu.classList.toggle('ativo');
        navMenu.classList.toggle('ativo');
    });

//função carrossel de imagens na home page
const imgs = document.getElementById("img");
const img =  document.querySelectorAll(".home-img img");

let id_eixoX = 0;
function carrosel_imgs(){
    id_eixoX ++;
    if (id_eixoX >= img.length){

        id_eixoX = 0;

    }
    imgs.style.transform = `translateX(${-id_eixoX * 500}px)`;
}

setInterval(carrosel_imgs, 2000);