$(document).ready(() => {
    // global function
    let converter = $('input#kg').val();

    // I need user's number input to be read by event listener.
    $('form').on('submit', (e) => {
        e.preventDefault();
        converter = $('input#kg').val();
        console.log(converter);
        $('input#kg').val('');
        // Use what I get from user and convert to lbs.
        let convertkg = converter * 2.20462;
        console.log(convertkg);
        // paste answer in DOM
        $('.answer').append(
            `<div class="results">You enter: ${converter} kg
            = <span class="select">${convertkg} lb</span></div>`
        );
        // let selected = function(){
        //     $('.results').on('click', function(){
        //         console.log('.results', $(this));
        //         $(this).find('span').toggleClass('select');
        //     })
        // }

    });
    // I want to create a reset button
    $('.reset').click(function () {
        $('.answer').empty();
    });
    

});





