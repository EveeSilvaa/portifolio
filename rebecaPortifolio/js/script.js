const listCarrossel = document.getElementById('carrossel');
const carrosselChildren = listCarrossel.children;
const carrosselSize = carrosselChildren.length;

function carrossel(index){
    listCarrossel.style.height = `${carrosselChildren[index].offsetHeight}px`

    carrosselChildren[index].style.transition = 'left linear .5s';
    carrosselChildren[index].style.left = 0;

    if(index > 0) {
        carrosselChildren[index-1].style.left = '-100%';
    }

    if(index == 0) {
        carrosselChildren[carrosselSize-1].style.left = '-100%';
    }

    setTimeout(function(){

        if(index > 0) {
            carrosselChildren[index-1].style.transition = 'none';
            carrosselChildren[index-1].style.left = '100%';
        }
    
        if(index == 0) {
            carrosselChildren[carrosselSize-1].style.transition = 'none';
            carrosselChildren[carrosselSize-1].style.left = '100%';
        }

        if(carrosselSize==index+1){
            return carrossel(0);
        }
        carrossel(index+1)
        
    }, 6000);
}

carrossel(0);