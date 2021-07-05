function playVideo1(d) {
    $('#video1_' + d).removeClass("hidden")
    $('#video2_' + d).addClass("hidden")
    if (d == '3')
        $('#link_' + d).addClass("hidden")
}

function playVideo2(d) {
    $('#video2_' + d).removeClass("hidden")
    $('#video1_' + d).addClass("hidden")
    if (d == '3')
        $('#link_' + d).addClass("hidden")
}

function playLink(d) {
    $('#link_' + d).removeClass("hidden")
    $('#video1_' + d).addClass("hidden")
    $('#video2_' + d).addClass("hidden")
}

function playGif(d) {
    $('#gif').attr('src', './gif/' + d + '.gif');
    let producer = ""
    switch (d) {
        case '1':
        case '5':
        case '6':
            producer = "製作人：黃子洋"
            break;
        case '2':
        case '4':
        case '7':
        case '8':
            producer = "製作人：彭敘豪"
            break;
        case '3':
        case '9':
            producer = "製作人：方佑瑋"
            break;
        default:
            break;
    }
    $('#producer').text(producer)

    for (let i = 1; i <= 9; i++) {
        $('#b' + i).css('color', 'blanchedalmond');
        $('#b' + i).css('background-color', 'slategray');
    }

    $('#b' + d).css('color', 'slategray');
    $('#b' + d).css('background-color', 'blanchedalmond');
}


function randomColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }
    return color;
}

for (var i = 1; i <= 6; i++) {
    $('#lab0' + i).css('background-color', randomColor());
}


function scrolltoID(id, speed = 500) {
    $('html, body').animate({
        scrollTop: $('#' + id).offset().top - $("#nav").height()
    }, speed);
}


function readMore() {
    $('#readmore').remove()
    $("#more").css('display', 'inline')
}