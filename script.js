const sliderItems =document.querySelectorAll('.slider-item')

let slideractive = 1;

if (sliderItems) {
    sliderItems.forEach((slider, index) => {
        if (index === 0) {
            slider.setAttribute("data-show", "show");
        } else {
            slider.setAttribute("data-show", "hidden");
        }
    })

    setInterval (() => {
        sliderItems.forEach((slider, index) => {
            if(slideractive === index) {
                slider.setAttribute("data-show", "show");
            } else {
                slider.setAttribute("data-show", "hidden");
            }
        });
    
        if(slideractive === sliderItems.length - 1) {
            slideractive = 0;
        } else {
            slideractive++;
        }
    
    },4000)
}



