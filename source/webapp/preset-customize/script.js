window.addEventListener('DOMContentLoaded', init);

function init(){
    let leftButtonEl = document.querySelectorAll("button")[0];
    leftButtonEl.addEventListener('click', () => {
        window.location = "../preset-list/preset-recipies.html";
    })
    let rightButtonEl = document.querySelectorAll("button")[1];
    rightButtonEl.addEventListener('click', () => {
        const index = localStorage.getItem('index');
        if (index){
            localStorage.removeItem('index');
        }
        window.location = "../CustomizeRecipe/customize.html";
    })
}
