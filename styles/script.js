let section_counter = document.querySelector(".counters");
let counters = document.querySelectorAll(".count");
let CounterObserver = new IntersectionObserver(
        (entries, observer)=> {
            let [entry] = entries;
            if(!entry.isIntersecting) return;
            let interval = 200;
            counters.forEach((count,index) => {
                function updateCounting() {
                    const initial_count = +count.innerText;
                    const final_count = +count.dataset.count;
                    const duration =  (final_count /interval) ;
                    if (initial_count < final_count) {
                        count.innerText = Math.ceil(initial_count+duration);
                        setTimeout(updateCounting, 40);
                    }
                    else{
                        count.innerText = final_count;
                    }
                }
                updateCounting();
            });
            observer.unobserve(section_counter);
        },
        {
            root:null,
            threshold: window.innerWidth > 768 ? 0.4 : 0.3,
        }
);
CounterObserver.observe(section_counter);
var btn=document.getElementsByClassName("btn");
var slide=document.getElementById("slide");

    btn[0].onclick = function(){
        slide.style.transform = "translateX(0px)";
        for(i=0;i<4;i++){
            btn[i].classList.remove("active");
        }
        this.classList.add("active");
    }
    btn[1].onclick = function(){
        slide.style.transform = "translateX(-677px)";
        for(i=0;i<4;i++){
            btn[i].classList.remove("active");
        }
        this.classList.add("active");
    }
    btn[2].onclick = function(){
        slide.style.transform = "translateX(-1354px)";
        for(i=0;i<4;i++){
            btn[i].classList.remove("active");
        }
        this.classList.add("active");
    }
    btn[3].onclick = function(){
        slide.style.transform = "translateX(-2031px)";
        for(i=0;i<4;i++){
            btn[i].classList.remove("active");
        }
        this.classList.add("active");
}
const menuHamburger = document.querySelector(".menu-hamburger")
    const navLinks = document.querySelector(".menu")

    menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu')
})