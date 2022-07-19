window.onload = function () {
    setTimeout(() => {
        const spinner = document.getElementById('loading-wrapper');
        spinner.classList.add('loaded');        
    }, 1400);
    setTimeout(() => {
        const body = document.getElementById('body');
        body.classList.add('good');
    }, 2200)
}