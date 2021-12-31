const navBar = document.getElementById('navBar')
const toggleIcon = document.getElementById('toggleBtn')
const nav = document.querySelectorAll('.navLink')
const searchIcon = document.getElementById('searchIcon')
const searchInput = document.getElementById('searchInput')
const closeSearch = document.getElementById('closeSearch')

toggleIcon.addEventListener('click', function(){
    navBar.classList.toggle('show')
    if(navBar.classList.contains('show')){
        toggleIcon.innerHTML = `<i class='bx bx-x-circle icon'></i>`
        searchInput.style.display = 'none'
    }else{
        toggleIcon.innerHTML = `<i class='bx bx-menu-alt-right icon' ></i>`
    }
})

nav.forEach(nav =>{
    nav.addEventListener('click', function(){
        navBar.classList.remove('show')
    })
})

searchIcon.addEventListener('click', function(){
    searchInput.style.display = 'flex'
    navBar.classList.remove('show')
    toggleIcon.innerHTML = `<i class='bx bx-menu-alt-right icon' ></i>`
})
closeSearch.addEventListener('click', function(){
    searchInput.style.display = 'none'
})

let newSwiper = new Swiper(".clientBody", {
    cssMode: true,
    loop: true,
    autoplay: true,
    centeredSlide: true,
    spaceBetween: 20,
    slidePerView: 'auto',

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    mausehold: true,

    breakpoints: {
       
        920: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      },
   
  });