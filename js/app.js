//Coding by Islam Trabih

//Define Global Variables
const parts = document.querySelectorAll('section');
const navigation = document.getElementById('navbar__list');

//activate functions
parts.forEach(navbar_list);
click_scroll();
active();


//Main Functions

//function to create dynamic navbar
function navbar_list(part){
    let list = document.createElement('li');
    let text = part.getAttribute('id');
    list.textContent = text;
    list.classList.add('menu__link');
    navigation.appendChild(list);
};

//function to add event for navigation by click
function click_scroll(){
    navigation.addEventListener("click", scroll)
};

//function to scroll into section
function scroll(elm){
    const data = elm.target.textContent
    const pert = document.getElementById(data) 
    pert.scrollIntoView({behavior: 'smooth'})
}

//function to add class for add style to active section & navbar according to viewport
function active(){
    const observer = new IntersectionObserver(
        function (views){
            for (view of views) {
                if (view.isIntersecting){
                    view.target.classList.add('your-active-class');
                    let navs = document.querySelectorAll('li');
                    //add class 'active' to navbar
                    for(nav of navs){
                        if (view.target.id == nav.textContent){
                            nav.classList.add('active');
                            }else{nav.classList.remove('active');
                        }
                    }
                }else{view.target.classList.remove('your-active-class')};
            };
        
        }, {threshold: [0.65]});
    parts.forEach(part => {observer.observe(part)});
}



//Coding by Islam Trabih