let count=0
let cards=document.querySelectorAll(".content")
const socialLogos = document.querySelectorAll('.social-logo');
const links = document.querySelectorAll(".text-link");
const toggleicons = document.querySelectorAll(".toggler-icon");
const projectList = document.querySelectorAll('.project-list');
const acaElements = document.querySelectorAll('.aca-body');

document.addEventListener('DOMContentLoaded', () => {
    const sections2 = document.querySelectorAll('.content-body');
    const sections3 = document.querySelectorAll('.content-header-card');
    const sections4 = document.querySelectorAll('.content-footer');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target);
            }
        });
    };

    const observerCallbackTopDown = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('slide-down');
                observer.unobserve(entry.target);
            }
        });
    };

    const observerCallbackBottomUp = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('slide-top');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer2 = new IntersectionObserver(observerCallback, observerOptions);
    const observer3 = new IntersectionObserver(observerCallbackTopDown, observerOptions);
    const observer4 = new IntersectionObserver(observerCallbackBottomUp, observerOptions);

    sections2.forEach(section => {
        section.classList.add('hidden');
        observer2.observe(section);
    });

    sections3.forEach(section => {
        section.classList.add('hidden');
        observer3.observe(section);
    });

    sections4.forEach(section => {
        section.classList.add('hidden');
        observer4.observe(section);
    });
});



function toggleTheme(){
    count++;
    if(count % 2 != 0){
        document.querySelector("body").classList.remove("bg-black","text-white");
        document.querySelector("body").classList.add("bg-light","text-black");
        document.querySelector('#toggleIcon').classList.remove("bi-moon","btn-light");
        document.querySelector('#toggleIcon').classList.add("bi-sun","btn-black");
        document.querySelector('#header-text').classList.remove("text-white");
        document.querySelector('#header-text').classList.add("text-black");
        document.querySelector('#header-text2').classList.remove("text-white");
        document.querySelector('#header-text2').classList.add("text-black");
        document.querySelector('#navbar').classList.remove('bg-dark')
        document.querySelector('#navbar').classList.add('bg-light')
        document.querySelector('#skills').classList.remove('text-white')
        document.querySelector('#skills').classList.add('text-black')
        document.querySelector('#projects').classList.remove('text-white')
        document.querySelector('#projects').classList.add('text-black')
        document.querySelector('#contact').classList.remove('text-white')
        document.querySelector('#contact').classList.add('text-black')
        for(let i=0;i<cards.length;i++){
            let card = cards[i]
            card.classList.remove("bg-dark","text-white");
            card.classList.add("bg-white","text-black");
        }
        for(let i=0;i<socialLogos.length;i++){
            let logos=socialLogos[i]
            logos.classList.remove('text-white');
            logos.classList.add('text-dark');
        }
        for(let i=0;i<links.length;i++){
            let link=links[i]
            link.classList.remove('text-white');
            link.classList.add('text-dark');
        }
        for(let i=0;i<toggleicons.length;i++){
            let ti=toggleicons[i]
            ti.classList.remove('bg-white');
            ti.classList.add('bg-dark');
        }
        for(let i=0;i<projectList.length;i++){
            let pE=projectList[i];
            pE.style.boxShadow = '1px 1px 1px 1px black';
        }
        for(let i=0;i<acaElements.length;i++){
            let aE=acaElements[i];
            aE.style.border='2px solid white'
            aE.style.boxShadow = '2px 2px 10px black';
        }

        document.querySelector('#acaTable').classList.remove("border-white","table-dark");
    }else{
        document.querySelector("body").classList.remove("bg-light","text-black");
        document.querySelector("body").classList.add("bg-black","text-white");
        document.querySelector('#toggleIcon').classList.remove("bi-sun","btn-black");
        document.querySelector('#toggleIcon').classList.add("bi-moon","btn-light");
        document.querySelector('#header-text').classList.remove("text-black");
        document.querySelector('#header-text').classList.add("text-white");
        document.querySelector('#header-text2').classList.remove("text-black");
        document.querySelector('#header-text2').classList.add("text-white");
        document.querySelector('#navbar').classList.remove('bg-light')
        document.querySelector('#navbar').classList.add('bg-dark')
        document.querySelector('#skills').classList.remove('text-black')
        document.querySelector('#skills').classList.add('text-white')
        document.querySelector('#projects').classList.remove('text-black')
        document.querySelector('#projects').classList.add('text-white')
        document.querySelector('#contact').classList.remove('text-black')
        document.querySelector('#contact').classList.add('text-white')
        for(let i=0;i<cards.length;i++){
            let card = cards[i]
            card.classList.remove("bg-light","text-black");
            card.classList.add("bg-dark","text-white");
        }
        for(let i=0;i<socialLogos.length;i++){
            let logos=socialLogos[i]
            logos.classList.remove('text-dark');
            logos.classList.add('text-white');
        }
        for(let i=0;i<links.length;i++){
            let link=links[i]
            link.classList.remove('text-dark');
            link.classList.add('text-white');
        }
        for(let i=0;i<toggleicons.length;i++){
            let ti=toggleicons[i]
            ti.classList.remove('bg-dark');
            ti.classList.add('bg-white');
        }
        for(let i=0;i<projectList.length;i++){
            let pE=projectList[i];
            pE.style.boxShadow = '1px 1px 1px 1px white';
        }
        for(let i=0;i<acaElements.length;i++){
            let aE=acaElements[i];
            aE.style.border='2px solid white'
            aE.style.boxShadow = '2px 2px 10px white';
        }
    }

}
