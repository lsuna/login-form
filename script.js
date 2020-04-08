$(document).ready(function () {


    $('#email').on('input', function () {
        var name = $('#email').val();
        console.log(name);

        if (name != null) {
            $('#email').css('width', '100%');
        } else {
            $('#email').css('width', '40%');
        }
    });



    $('#pw').on('input', function () {
        var pw = $('#pw').val();
        console.log(pw)

        if (pw != null) {
            $('#pw').css('width', '100%');
        } else {
            $('#pw').css('width', '40%');
        }

        if (pw.length > 1) {
            $('#btn').css({
                'opacity': '1',
                'transition': 'opacity .5s ease-in-out',
                'cursor': 'pointer'
            });

        } else {
            $('#btn').css({
                'opacity': '.6',
                'transition': 'opacity .5s ease-in-out',
                'cursor': 'not-allowed'
            });

        }


    });

    $('#btn').on('click', function (event) {

        var name = $('#email').val();
        var pw = $('#pw').val();
        console.log('the user name is ' + name);
        console.log('the user password is ' + pw);

        if (name.length > 1 && pw.length > 1) {
            event.preventDefault();
            $('#btn').css({
                'background-color': '#00C853',
                'color': 'white',
                'transition': 'background .5s ease-in-out',
                'transition': 'color .5s ease-in-out'
            });

            $('#btn').prop('value', 'Welcome!')

            //        $('#header').fadeOut(300);
            //        $('#header').fadeIn(300);
            $('#header').html('Welcome!');
            //        $('#welcome').html('Welcome!');

        }




    });



});


