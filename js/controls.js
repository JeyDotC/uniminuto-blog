(function(){
    const pageControlPrevious = document.querySelector('.page-control-left');
    const pageControlNext = document.querySelector('.page-control-right');
    let activeView = document.querySelector('.view.view-active');

    /**
     * 
     * @param {HTMLElement|null} sibling 
     */
    function AttemptMoveTo(sibling) {
        if(sibling !== null && sibling.classList.contains('view')){
            activeView.classList.remove('view-active');
            activeView = sibling;
            activeView.classList.add('view-active');        
        }
    }

    function HandleNextPage() {
        AttemptMoveTo(activeView.nextElementSibling);
    }

    function HandlePreviousPage() {
        AttemptMoveTo(activeView.previousElementSibling);
    }

    pageControlNext.addEventListener('click', HandleNextPage);
    pageControlPrevious.addEventListener('click', HandlePreviousPage);
})();