/*------------------------------ SCROLL REVEAL ------------------------------*/
const SR = ScrollReveal({
    origin: 'top',
    distance: '64px',
    duration: 1600,
    delay: 800,
})

/*----------------------- HOME -----------------------*/
SR.reveal(`#header`)
SR.reveal(`#parallaxBar`, {delay: 1200})
SR.reveal(`.impact-phrase .word1`, {origin: 'left', delay: 2000})
SR.reveal(`.impact-phrase .word2`, {origin: 'left', delay: 2800})
SR.reveal(`.impact-phrase .word3`, {origin: 'left', delay: 3600})
SR.reveal(`.impact-phrase2`, {origin: 'right', delay: 4400})

/*----------------------- SERVICES -----------------------*/
SR.reveal(`.services-header`)
// SR.reveal(`.services-content`, {distance: '0px'})

// /*----------------------- ABOUT -----------------------*/
// SR.reveal(`.about-title`, {distance: '0px'})
// SR.reveal(`.about-media`, {origin: 'left', delay: 1800})
// SR.reveal(`.about-data`, {origin: 'right', delay: 1800})

// /*----------------------- SLIDE -----------------------*/
// SR.reveal(`#slides`, {distance: '0px'})

// /*----------------------- CUSTOMERS -----------------------*/
// SR.reveal(`.customers-header`)
// SR.reveal(`.customers-content`, {distance: '0px', delay: 1600})

// /*----------------------- CONTACT -----------------------*/
// SR.reveal(`.contact-content p`, {distance: '0px'})
// SR.reveal(`.contact-buttons`, {origin: 'bottom', delay: 2000})

// /*----------------------- FOOTER -----------------------*/
// SR.reveal(`#footer`, {origin: 'bottom', delay: 1600})



