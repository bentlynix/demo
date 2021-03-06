
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
     var streetstr=$('#street').val();
     var citystr=$('#city').val();
     var address= streetstr+','+citystr;

    // YOUR CODE GOES HERE!
     $greeting.text('So, you want to live at ' + address + '?');
    $body.append('<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=600x300&location='+address+'">');

    return false;
};

$('#form-container').submit(loadData);
