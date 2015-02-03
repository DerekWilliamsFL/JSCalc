
$(document).ready(function() {
    $('.keys button').on('click', function() {
        var value = $(this).val();
        $('#entry').append(value);
      });
    
    $('button[name="="]').on('click', function () {
        var answer = $('.entry').text();
        var output = eval(answer);
        $('#answer').text(output);
        $('#entry').text(output);
    });
    
    $('button[name="CE"]').on('click', function() {
        $('#entry').text('');
        $('#answer').text('');
    });
});