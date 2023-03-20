gsap.registerPlugin(ScrollTrigger);
let featureImg = document.querySelectorAll('.features img');
let featureText = document.querySelectorAll('.features .text');

ScrollTrigger.matchMedia( {
    '(min-width:750px)': function() {
        for (let i=0; i < featureImg.length; i++) {
            let movement = 100;
            if (i % 2 == 0) {
                movement = -100;
            }	
            gsap.from(featureImg[i], {scrollTrigger: 
                {trigger: featureImg[i], start: 'top 85%', end: 'bottom 80%', scrub: 1, },
                x: -movement,
                opacity: 0 } );
            gsap.from(featureText[i], {scrollTrigger: 
            {trigger: featureText[i], start: 'top 85%', end: 'bottom 80%', scrub: 1,  },
            x: movement,
            opacity: 0 } );
        }; 
    }
} );

gsap.from("#logo", { duration: .5, y: -200, } )
gsap.from("header li", { duration: .5, y: -200 } )
gsap.from ("header h1", { duration: .5, x: -3000 } )

// let tl = gsap.timeline( {repeat: -1, repeatDelay: 2} );
// tl  // can chain, semicolon not needed
// tl.fromTo('header *', {duration: .5, scale: 1, y: 15}, {duration: .8, scale: 1, y: 15, transformOrigin: 'center center', stagger: 0.02, ease: 'back.out'}, );