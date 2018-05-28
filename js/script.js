//making radio buttons uncheckable

(function( $ ){

    $.fn.uncheckableRadio = function() {

        return this.each(function() {
            $(this).mousedown(function() {
                $(this).data('wasChecked', this.checked);
            });

            $(this).click(function() {
                if ($(this).data('wasChecked'))
                    this.checked = false;
            });
        });

    };

})( jQuery );


$( function() {


    $('.js-search-go').on('click',function(){
        var value = $('.js-select').val();

        if(value == 'dark'){
            document.location.href = './filmsDescription/the_dark_side.html';
        }else if(value == 'skin'){
            document.location.href = './filmsDescription/skin_lies.html';
        }else if(value == 'sweet'){
            document.location.href = './filmsDescription/sweet_16.html';
        }else if(value == 'strangers'){
            document.location.href = './filmsDescription/strangers.html';
        }else if(value == 'simpsons'){
            document.location.href = './filmsDescription/simpsons.html';
        }else if(value == 'spangebob'){
            document.location.href = './filmsDescription/spangeBob.html';
        }else if(value == 'tom'){
            document.location.href = './filmsDescription/tom-and-jerry.html';
        }else if(value == 'scooby'){
            document.location.href = './filmsDescription/scooby.html';
        }else if(value == 'usa'){
            document.location.href = './filmsDescription/usa.html';
        }else if(value == 'citizen'){
            document.location.href = './filmsDescription/citizen.html';
        }else if(value == 'corporation'){
            document.location.href = './filmsDescription/corporation.html';
        }else if(value == 'henry'){
            document.location.href = './filmsDescription/henry.html';
        }else if(value == 'candy'){
            document.location.href = './filmsDescription/candyJar.html';
        }else if(value == 'sergant'){
            document.location.href = './filmsDescription/carry_sergant.html';
        }else if(value == 'dying'){
            document.location.href = './filmsDescription/i_am_dying.html';
        }else if(value == 'school'){
            document.location.href = './filmsDescription/school.html';
        }
    });




    var i;

    console.log("local storage");
    for (i = 0; i < localStorage.length; i++)   {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }

    console.log("session storage");
    for (i = 0; i < sessionStorage.length; i++) {
        console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
    }

    if(localStorage.getItem("index") == null){
        localStorage.setItem("index", 1);
    }else{
        console.log('We have index : ' + localStorage.getItem("index"));
    }

    var index = localStorage.getItem("index");


    $('.js-register').on('click',function(){
        var name = $('.js-name').val();
        var email = $('.js-email').val();
        var username = $('.js-username').val();
        var password = $('.js-password').val();
        if(name.length > 0 && email.length > 0 && username.length > 0 && password.length > 0){
            localStorage.setItem("username" + index, username);
            localStorage.setItem("password" + index, password);
            index++;
            localStorage.setItem("index", index);
            location.reload();
        }else{
            console.log("U have to fill all fields");
            $('.js-errors').text('U have to fill all fields');
        }
    });



    $(".js-log-in").on('click',function(){
        var log_name = $('.js-log-name').val();
        var log_pass = $('.js-log-pass').val();
        var length = localStorage.getItem("index");
        var trigger = false;
        for(var x = 0; x < length; x++){
            var tmp_name = localStorage.getItem("username"+x);
            var tmp_pass = localStorage.getItem("password"+x);
            if(log_name == tmp_name && log_pass == tmp_pass){
                trigger = true;
                document.location.href = './start_page.html';
            }
        }
        if(trigger == false){
            $('.js-errors').text("We didn't find this account in our database");
        }
    });

    $('.js-loginNav').on('click',function(){
        $('.login-block').removeClass('hide');
        $('.register').addClass('hide');
    });

    $('.js-registerNav').on('click',function(){
        $('.login-block').addClass('hide');
        $('.register').removeClass('hide');
    });



    $('input[type=radio]').uncheckableRadio();

    $('.rapRadio').on('click' ,function(){
        $('.rap').toggleClass('hide');
    });

    $('.rockRadio').on('click' ,function(){
        $('.rock').toggleClass('hide');
    });

    $('.rbRadio').on('click' ,function(){
        $('.rb').toggleClass('hide');
    });

    $('.jazzRadio').on('click' ,function(){
        $('.jazz').toggleClass('hide');
    });

    $('.comedyFilms').on('click' ,function(){
        $('.comedy').toggleClass('hide');
    });

    $('.horrorFilms').on('click' ,function(){
        $('.horrors').toggleClass('hide');
    });

    $('.cartoonFilms').on('click' ,function(){
        $('.cartoons').toggleClass('hide');
    });

    $('.documentaryFilms').on('click' ,function(){
        $('.documentary').toggleClass('hide');
    });

});