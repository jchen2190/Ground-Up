gsap.registerPlugin(ScrollTrigger);
let featureImg = document.querySelectorAll('.features img');
let featureText = document.querySelectorAll('.features .text');

ScrollTrigger.matchMedia( {
    '(min-width:750px)': function() {
        for (let i=0; i < featureImg.length; i++) {
    
    // if [i] is an even number (0,2)
        let movement = 100;
        if (i % 2 == 0) {
            movement = -100;  // even rows
        }	

        // animate current image each time thru the loop
        gsap.from(featureImg[i], {scrollTrigger: 
            {trigger: featureImg[i], start: 'top 85%', end: 'bottom 80%', scrub: 1, },
            x: -movement,  // odd rows
            opacity: 0 } );
        
        // animate current text each time thru the loop
        gsap.from(featureText[i], {scrollTrigger: 
        {trigger: featureText[i], start: 'top 85%', end: 'bottom 80%', scrub: 1,  }, // markers: true
        x: movement,  // odd rows
        opacity: 0 } );
        }; 
    }
} );