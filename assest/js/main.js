function handleScroll() {
    var scrollDistance = Math.max(
        document.documentElement.scrollTop,
        document.body.scrollTop
    );
    var headerElement = document.querySelector('.header__content-list')
    if (scrollDistance >= 62) {
        headerElement.classList.add('header__content-fixed')
    }
    else {
        headerElement.classList.remove('header__content-fixed')

    }


}
window.addEventListener("scroll", handleScroll);