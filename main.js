const navBar = document.getElementById('navBar')
const toggleIcon = document.getElementById('toggleBtn')

toggleIcon.addEventListener('click', function(){
    navBar.classList.toggle('show')
    if(navBar.classList.contains('show')){
        toggleIcon.innerHTML = `<i class='bx bx-x-circle icon'></i>`
    }else{
        toggleIcon.innerHTML = `<i class='bx bx-menu-alt-right icon' ></i>`
    }
})