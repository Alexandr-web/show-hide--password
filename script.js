let btn_show = document.querySelector('.btn'),
    text = document.querySelector('.text');

let show = false;

btn_show.addEventListener('click', function() {
    show = !show;

    if (show) {
        text.type = 'text';
        this.textContent = 'Hide';
    } else {
        text.type = 'password';
        this.textContent = 'Show';
    }
});