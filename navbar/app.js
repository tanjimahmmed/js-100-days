const navToggle = document.querySelector('.nav_toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    // console.log(links.classList);
    // console.log(links.classList.contains('random'));
    // console.log(links.classList.contains('links'));
// two ways 
    // if(links.classList.contains('show_links')){
    //     links.classList.remove('show_links');
    // } else {
    //     links.classList.add('show_links');
    // }

    // another way toggle
    links.classList.toggle('show_links');
});