let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}

searchBtn.addEventListener('click',() =>{
    searchBtn.classList.toogle('fa-times');
    searchBar.classList.toogle('active');
});