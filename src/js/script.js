let our_offers = document.querySelector(".our_offers"),
    buttons_menu = document.querySelectorAll(".menu a"),
    services = document.querySelector(".services"),
    scroll_our_offers = 0,
    scrollInterval = 0

window.addEventListener('scroll', function() { // випливання блока .our_offers
    let boxOffset = our_offers.offsetTop
    if (boxOffset < window.scrollY +300) {
        our_offers.classList.add("active")
    }
})

// console.log(buttons_menu)

buttons_menu.forEach((el) => {
    el.addEventListener('click', function(el) {
        el.preventDefault()

        // console.log(el)

        let target = (document.querySelector((el.target.getAttribute("href")))),
            boxOffsetTop = Math.floor(target.offsetTop)
        
        console.log(el.target.getAttribute("href"))
        console.log(boxOffsetTop)

        let scrollY = 0

        window.scrollTo(0, boxOffsetTop)

        // window.scrollTo({
        //     top: boxOffsetTop,
        //     behavior: 'smooth',
        //     duration: 2000
        // })
        
        // scrollInterval = setInterval(() => {
        //     if (scrollY < Math.floor(boxOffsetTop)) {
        //         scrollY += 5
        //         window.scrollTo (0, scrollY)
        //     } else {
        //         console.log(scrollY)
        //         console.log(boxOffsetTop)
        //         scrollY = 0
        //         clearInterval(scrollInterval)
        //     }
        //     // (scrollY === Math.floor(boxOffsetTop)) ? clearInterval(scrollInterval) : ""
        // }, 15)
    })
})

// document.addEventListener('scroll', function () {
//     clearInterval(scrollInterval)
//     scrollY = 0
// })

// services.addEventListener("click", function() {
//     let topPos = our_offers.offsetTop
    
//     console.log(topPos)

//     window.scrollTo (0, topPos)
// })