const DOTS_ELEMENT = document.querySelector('.dots') // MAIN DOTS ELEMENT

const sliderItems = [
    {
        id: 1,
        sliderClass: 'slider-item',
        images: [
            "img/1.png", "img/2.png", "img/3.png", "img/4.png","img/5.png","img/6.png"
        ]
    }
    ,
    {
        id: 2,
        sliderClass: 'slider-item',
        images: [
            "img/1.png", "img/2.png", "img/3.png", "img/4.png","img/5.png","img/6.png"
        ]
    },
    {
        id: 3,
        sliderClass: 'slider-item',
        images: [
            "img/1.png", "img/2.png", "img/3.png", "img/4.png","img/5.png","img/6.png"
        ]
    },
    {
        id: 4,
        sliderClass: 'slider-item',
        images: [
            "img/1.png", "img/2.png", "img/3.png", "img/4.png","img/5.png","img/6.png"
        ]
    },
    {
        id: 5,
        sliderClass: 'slider-item',
        images: [
            "img/1.png", "img/2.png", "img/3.png", "img/4.png","img/5.png","img/6.png"
        ]
    },
    {
        id: 6,
        sliderClass: 'slider-item',
        images: [
            "img/1.png", "img/2.png", "img/3.png", "img/4.png","img/5.png","img/6.png"
        ]
    }
];


function render (array) { // RENDER AN SLIDER ELEMENT
    const slider = document.querySelector('.slider')
    array.forEach(sliderEl => {
        _renderDots(sliderEl) // RENDER AN DOTS ELEMENT
        
        const element = document.createElement('div')
        element.classList.add(`${sliderEl.sliderClass || 'the-class-is-not-added'}`)
        element.id = sliderEl.id
        sliderEl.images.forEach(img => {
            const image = document.createElement('img')
            image.classList.add('slider__element')
            image.src = img
            element.insertAdjacentElement('afterbegin', image)
        })
        slider.insertAdjacentElement('afterbegin', element)
    });
}

function _renderDots (arr) { // RENDER AN DOTS ELEMENT
    console.log(arr)
    const dot = document.createElement('div')
    dot.classList.add('dot')
    DOTS_ELEMENT.insertAdjacentElement('afterbegin',dot)
}


render(sliderItems)


