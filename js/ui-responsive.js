$(document).ready(function () {
    $('#consultationButton').hover(function () {
        $('#consultation').attr('src', 'img/icons/video-chat.png');
    }, function () {
        $('#consultation').attr('src', 'img/icons/video-chat3.png');
    });
    $('#paperDiagnoseButton').hover(function () {
        $('#paperDiagnose').attr('src', 'img/icons/writing-letter.png');
    }, function () {
        $('#paperDiagnose').attr('src', 'img/icons/writing-letter3.png');
    });
    $('#travelButton').hover(function () {
        $('#travel').attr('src', 'img/icons/travel.png');
    }, function () {
        $('#travel').attr('src', 'img/icons/travel3.png');
    });
    $('#familyButton').hover(function () {
        $('#family').attr('src', 'img/icons/doctor.png');
    }, function () {
        $('#family').attr('src', 'img/icons/doctor3.png');
    });
});