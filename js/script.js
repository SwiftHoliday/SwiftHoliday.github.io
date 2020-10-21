

$('.toptext').hide();
$('.toptext').fadeIn(7000);

$('.bottomtext').hide();
$('.bottomtext').fadeIn(8000);

// Constants


// Variables
let quote;
let author;

// Cached Element References


// Functions 

$(document).ready(function() {              // Load function on site load
        function getNewQuote() {
        $.ajax({
            url:'https://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp', 
            dataType: 'jsonp',              // Allowing access to API
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp', 
            },
            success: function(display) {
               quote = display.quoteText;
               author = display.quoteAuthor;

               $('#quote').text(' " ' + quote + ' " ');
               if(author) {
                   $('#author').text(' by - ' + author);
               } else {                                     // If there's no author display unknown
                   $('#author').text('- unknown');
               }
            }
        });

        }
        getNewQuote();

        $('.get-quote').on('click', function () {     // New quote with the get qoat button
            getNewQuote();
        });

        $('.share-quote').on('click', function() {
            window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '-' + author));
        });
});