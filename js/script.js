

//$('.toptext').hide();
//$('.toptext').fadeIn(7000);

//$('.bottomtext').hide();
//$('.bottomtext').fadeIn(10000);

// Constants


// Variables


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
                console.log(display.quoteText);
            }
        });

        }
        
        getNewQuote();
})