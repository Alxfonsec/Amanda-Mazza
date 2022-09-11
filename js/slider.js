let slider = tns({
    container : ".my-slider2",
    "slideBy" : 1,
    "speed" : 1000,
    "nav" : false,
    "mouseDrag" : true,
    "swipeAngle": false,
    "controls" : false,
    "autoplay" : true,
    "autoplayTimeout" : 2500,
    "autoplayHoverPause" : true,
    "autoplayButtonOutput" : false,
    

    responsive: {
        1600: {
            items: 4,
            gutter: 20
        },
        1024: {
            items : 3,
            gutter: 20
        },
        768: {
            items: 2,
            gutter: 20
        },
        480: {
            items:1
        }
    }

})

    let slider2 = tns({
    container : ".my-slider",
    items: 3,
    "slideBy" : 1,
    gutter: 1000, 
    "fixedWidth" : true,
    "viewportMax" : 50,
    "speed" : 1000,
    "nav" : false,
    "mouseDrag" : true,
    "controls" : false,
    "autoplay" : true,
    "autoplayTimeout" : 2500,
    "autoplayHoverPause" : true,
    "autoplayButtonOutput" : false,
    
})