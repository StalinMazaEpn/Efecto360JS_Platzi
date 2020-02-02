const range_slider = document.querySelector('#range_effect_slider')
const canvas = document.querySelector('#canvas_image')
const contexto = canvas.getContext('2d');
console.log(range_slider)
console.log(canvas)

range_slider.addEventListener('input', handleInputSlider)

const images = [];
window.addEventListener('load', pageLoaded);

function pageLoaded(){
    for(let i = 1; i <= 36; i++){
        const number = i.toString().padStart(2, '00');
        const url = `https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Yecheil/Images/adidas-Yeezy-Boost-350-V2-Yecheil/Lv2/img${number}.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1574449122`;
        console.log('number', number);
        const image = new Image();
        image.src = url;
        image.addEventListener('load', ()=> {
            images[i] = image;
            if(i == 1){
                loadImage(i);
            }
            console.log('loaed image', i)
        });
    }
}

function handleInputSlider($event){
    console.log(this.value)
    loadImage(this.value);
}

function loadImage(indice){
    contexto.drawImage(images[indice], 0, 0, canvas.width, canvas.height);
}