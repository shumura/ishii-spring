$(function(){

    /*ヘッダー処理*/
    document.addEventListener('scroll', function() {
        const navElement = document.querySelector('header');
        const scroll = window.pageYOffset;
        if (scroll > 0) {
            navElement.classList.add('change');
        } else {
            navElement.classList.remove('change');
        }
    });
    /*モーダル画面*/
    $('#openModal').on('click', function(){
        $('#modalArea').toggleClass('is-show');
    });
    $('#closeModal').on('click', function(){
        $('#modalArea').toggleClass('is-show');
    });
    $('#modalBg').on('click', function(){
        $('#modalArea').toggleClass('is-show');
    });

    /*カレンダー*/
    const config = {
        minDate: "today",
        mode: "multiple"
      }
      flatpickr('.flatpickr', config);

    /*タブ*/
    $('.tab-trigger').click(function(){

        $('.tab-trigger').removeClass('show');

        $('.topics').removeClass('show');

        $(this).addClass('show');

        let id = $(this).data("id");

        $('#' + id).addClass('show');

    }); 


});

AOS.init({
    offset: 300,
    delay: 100,
    duration: 800,
    easing: 'ease-in',
    once: true,
    disable: 'mobile',
});