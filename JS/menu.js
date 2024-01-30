function menu(checkbox) {
    if (checkbox.checked) {
        document.getElementById('menu-phone').style.transform = 'translateX(0)';
    }
    else {
        document.getElementById('menu-phone').style.transform = 'translateX(100%)';
    }
}
