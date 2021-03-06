
const body = document.querySelector('body');

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader'); 
    preloader.classList.add('preloader-finish');

});


const sliders = document.querySelectorAll('.slide-in'); 
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver( 
    function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, appearOptions);

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
})

