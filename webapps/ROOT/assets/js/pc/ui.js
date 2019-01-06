// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 68
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

$(function () {
    //mobile margin 초기화
    $('.wc-message-group-content').css({ 'margin-top': 0 });

    $('#wrapper').css({ 'height': ($(document).height()) + 'px' });
    $('.wc-chatview-panel').css({ 'height': ($(document).height()) + 'px' });
    $(window).resize(function () {
        //$('#wrapper').css({ 'height': ($(document).height()) + 'px' });
    });

    $(document).on('click', '#botChatBtn', function () {
		$('.wc-chatview-panel').css('bottom', 0).show();
      $('.bot-wrap').show();
	});

    $('.wc-shellinput').blur();

    //용어검색(SAP) tooltip
    $('.wc-send > div').attr('data-toggle', 'tooltip').attr('data-placement','top').attr('title','용어 검색').tooltip('show');

    //360 팝업창 생성(cardDivision : reel)
    $("#bot > div").add(
        "<div class='reel-wrapper popupArea'>" +
            "<div class='popHeader'>" +
                "<span id='reelTitle' class='popupTitle'></span>" +
                "<button class='btnTopClose'></button>" +
            "</div>" +
            "<div id='reelArea' class='popBody'>" +
                "<div class='imgBox' id='phantom black'>" +
                    "<img src='assets/image/car/00001.jpg' alt='' class='reel' id='image' data-images='assets/image/car/000##.jpg' data-frames='60' data-cw='true' />" +
                "</div>" +
                "<div class='popTxt'>" +
                    "<span>좌우로 드래그하여 돌려보세요.</span>" +
                "</div>" +
            "</div>" +
        "</div>").appendTo("#bot");
    //동영상 팝업창 생성(cardDivision : play)
    $("#bot > div").add(
        "<div class='mov-wrapper popupArea'>" +
            "<div class='popHeader'>" +
                "<span id='movTitle' class='popupTitle'></span>" +
                "<button class='btnTopClose'></button>" +
            "</div>" +
            "<div class='popBody'>" +
                "<iframe id='video' src='' frameborder='0' allowfullscreen='true' style='overflow-x:hidden;overflow:auto;width:100%;height:487px;'></iframe>" +
            "</div>" +
        "</div>").appendTo("#bot");
    //이미지 팝업창 생성(cardDivision : img)
    $("#bot > div").add(
        "<div class='img-wrapper popupArea'>" +
            "<div class='popHeader'>" +
                "<span id='imgTitle' class='popupTitle'></span>" +
                "<button class='btnTopClose'></button>" +
            "</div>" +
            "<div id='imgCarousel' class='popBody' align='center'>" +
                "<img id='imgTag' src='' width='568' height='318'>" +
            "</div> " +
        "</div>").appendTo("#bot");
    //지도 팝업창 생성(cardDivision : map)
    $("#bot > div").add(
        "<div class='map-wrapper popupArea'>" +
            "<div class='popHeader'>" +
                "<span id='mapTitle' class='popupTitle'></span>" +
                "<button class='btnTopClose'></button>" +
            "</div>" +
            "<div id='mapArea' class='popBody'>" +
            //"<div id='map' style='border:1px solid #000;'></div>"+  //V3
            "</div>" +
        "</div>").appendTo("#bot");

    //제스처 케릭터 영역 생성
    //$("#bot > div").add(
    //    "<div class='gesture-wrapper gestureArea'>" +
    //        "<div class='gestureHeader'>" +
    //            "<span id='gestureTitle' class='gestureTitle'></span>" +
    //        "</div>" +
    //        "<div id='animationDiv' style='width:250px;height:488px;background:#000'>" +
    //        "</div>" +
    //    "</div>").appendTo("#bot");

    //챗봇창 상단 생성
    $(".wc-header > span").add(
        "<span class='chatTitle'></span>"
        //"<span class='chatTitleText'><strong>업무도우미 ChatBot</strong></span>" +
        //"<span class='topIcon btnClose'><button class='topIcon03'></button></span>" +
        //"<span class='topIcon btnLayer btnLayerFull'><button class='topIcon02'></button></span>" +
        //"<span class='topIcon btnMin'><button class='topIcon01'></button></span>" +
        //"<span class='topGestureArea'>" +
        //"<div class='topGestureOff'>OFF</div><div class='topGestureOn'>ON</div> <div class='topGestureIcon'></div>  " +
        //"</span>"
    ).appendTo(".wc-header");

    //챗봇 SAP Btn 생성
    $(".wc-chatview-panel > div").add(
        "<div class='sapBtn off'>" +
            //"<p class='menuReStartBtn'><span> Menu </span></p>" +
            //"<ul>" +
            //"<li class='menuSelectBtn'><span><a href='#' onclick='viewMenu('Accident analysis')'> Accident analysis </span></a></li>" +
            //"<li class='menuSelectBtn'><span><a href='#' onclick='viewMenu('Accident trends')'> Accident trends </span></a></li>" +
            //"<li class='menuSelectBtn'><span><a href='#' onclick='viewMenu()'> return home </span></a></li>" +
            //"</ul>" +
        "</div > ").appendTo(".wc-chatview-panel");

    //챗봇 MENU BTN
    $(".wc-console > div").add(
        "<div class='menuBox off'>" +
            //"<p class='menuReStartBtn'><span> Menu </span></p>" +
            "<ul type='none'>" +
            "<li class='menuSelectBtn'> 총무 </li>" +
            "<li class='menuSelectBtn'> 인사 </li>" +
            "<li class='menuSelectBtn'> 재무 </li>" +
            "<li class='menuSelectBtn'> IT </li>" +
            "<li class='menuSelectBtn'> 법무 </li>" +
            "<li class='menuSelectBtn'> CSV </li>" +
            "<li class='menuSelectBtn'> 블로썸파크 </li>" +
            "<li class='menuSelectBtn'> 하고싶은말 </li>" +
            //"<li class='menuSelectBtn'><span><a href='#' onclick='viewMenu()'> return home </span></a></li>" +
            "</ul>" +
        "</div > ").appendTo(".wc-console");


    //챗봇 마이크 생성
    //$(".wc-console > div").add(
    //    "<div class='ttsMic ttsMicBlack' onclick='startButton(event)'>&nbsp</div > ").appendTo(".wc-console");

    //챗봇창 버튼 동작
    $('.btnClose').click(function () {
        $('.wc-chatview-panel').css('bottom', 0).hide();
        $('.bot-wrap').hide().removeClass("chatOn").addClass("chatOff");
    });
    $('.btnMin').click(function () {
        $('.btnTopClose').click();
        $('.wc-chatview-panel').css({ "overflow": "hidden" });
        $('.wc-chatview-panel').animate({ "height": "38px" }, "fast");
        $('.gestureArea').animate({ "height": "38px" }, "fast");
        $('.wc-console, wc-message-pane').hide();
        $('#animationDiv').hide();
        $('.btnMin').css({ 'display': 'none' });
        $('.btnLayer').removeClass('btnLayerFull').addClass('btnLayerMid');
        $('.btnLayer > button').removeClass('topIcon02').addClass('topIcon02-1');
    });
    $(document).on('click', '.wc-header [class*=btnLayer]', function () {
        if ($(this).hasClass('btnLayerMid')) {
            $('.wc-chatview-panel').animate({ "height": "528px" }, "fast");
            $('.popupArea').animate({ 'bottom': '174px' }, "fast");
            $('.gestureArea').animate({ "height": "528px" }, "fast");
            $('.wc-console, wc-message-pane').show();
            $('#animationDiv').show();
            $('.btnLayer').removeClass('btnLayerMid').addClass('btnLayerFull');
            $('.btnLayer > button').css({ 'display': 'inline-block' }).removeClass('topIcon02-1').addClass('topIcon02');
            $('.btnMin').css({ 'right': '58px', 'display': 'inline-block' });
        } else {
            $('.wc-chatview-panel').animate({ "height": ($(document).height()) + 'px' }, "fast");
            $('.popupArea').animate({ 'bottom': ($(window).height() - 352) + 'px' }, "fast");
            $('.btnLayer').removeClass('btnLayerFull').addClass('btnLayerMid');
            $('.btnLayer > button').css({ 'display': 'inline-block' }).removeClass('topIcon02').addClass('topIcon02-1');
        }
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //챗봇 menu 선택
    $('.menuSelectBtn').click(function () {
        var v = $(this).html() + " 선택";
        $('div.wc-console').addClass('has-text');
        $('input[type="text"].wc-shellinput').attr('value', v).val(v);
        $('label.wc-send').trigger('click');
        $('input[type="text"].wc-shellinput').attr('value', '').val('').focus();
        $('.wc-console').removeClass('has-text').animate({ 'bottom': 10 + 'px' }, 'fast');
        $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
        $('.menuIcon_active').removeClass('menuIcon_active').addClass('menuIcon');
        $('.wc-message-groups').css({ 'bottom': 60 + 'px' }).scrollTop($('.wc-message-group-content')[0].scrollHeight);
    });
    //menu 이외의 다른 영역 선택시 닫힘
    $('.wc-message-groups, .wc-textbox').click(function () {
        if ($('.menuBox').hasClass('on')) {
            $('.wc-console').animate({ 'bottom': 10 + 'px' }, 'fast');
            $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
            $('.menuIcon_active').removeClass('menuIcon_active').addClass('menuIcon');
            $('.wc-message-groups').css({ 'bottom': 60 + 'px' }).scrollTop($('.wc-message-group-content')[0].scrollHeight);
        }

        if ($('.sapBtn').hasClass('off')) {
            $('.wc-shellinput').css({ 'color': '#555' });
        } else {
            $('.wc-shellinput').css({ 'color': '#326E9B' });
        }
    });

    //SAP 버튼 동작
    $('.sapIcon').click(function () {
        $('.wc-console').animate({ 'bottom': 10 + 'px' }, 'fast');
        $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
        $('.menuIcon').removeClass('menuIcon').addClass('sapIcon-close');
        $('.menuIcon_active').removeClass('menuIcon_active').addClass('sapIcon-close');
        $('.wc-shellinput').attr('placeholder', '용어검색').focus();
        $('.sapIcon').removeClass('sapIcon').addClass('sapIcon-search');
        $('.wc-sap').removeClass('off').addClass('on').css({ 'display': 'block' });
        $('.sapBtn').removeClass('off').addClass('on');
        $('.wc-textbox').animate({ 'left': 50 + 'px' },'fast');
        $('.wc-message-groups').css({ 'bottom': 60 + 'px' }).scrollTop($('.wc-message-group-content')[0].scrollHeight);
    });
    //챗봇 MENU + SAP 버튼 동작
    $('.wc-menu > div').click(function () {
        $('.wc-shellinput').attr('value', '').attr('placeholder', '궁금한 것을 물어보세요!').val('').focus();

        if ($(this).hasClass('menuIcon')) {     //MENU 열기
            $('.wc-shellinput').blur();
            $('.menuIcon').removeClass('menuIcon').addClass('menuIcon_active');
            $('.sendIcon').removeClass('sendIcon').addClass('sapIcon');
            $('.wc-console').animate({ 'bottom': 115 + 'px' }, 'fast');
            $('.menuBox').removeClass('off').addClass('on').css({ 'display': 'block' });
            $('.wc-message-groups').css({ 'bottom': 165 + 'px' });
        } else if ($(this).hasClass('menuIcon_active')) {   //MENU 닫기
            $('.menuIcon_active').removeClass('menuIcon_active').addClass('menuIcon');
            $('.sendIcon').removeClass('sendIcon').addClass('sapIcon');
            $('.wc-console').animate({ 'bottom': 10 + 'px' }, 'fast');
            $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
            $('.wc-message-groups').css({ 'bottom': 60 + 'px' });
        } else if ($(this).hasClass('sapIcon-close')) {    //SAP 닫기
            $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
            $('.sapIcon-close').removeClass('sapIcon-close').addClass('menuIcon');
            $('.wc-sap').removeClass('on').addClass('off').css({ 'display': 'none' });
            $('.sapIcon-search').removeClass('sapIcon-search').addClass('sapIcon');
            $('.sapBtn').removeClass('on').addClass('off');
            $('.wc-textbox').animate({ 'left': 30 + 'px' }, 'fast');
        }
        $('.wc-message-groups').scrollTop($('.wc-message-group-content')[0].scrollHeight);
    });

    //SAP 아니고 문자 입력시 SEND버튼
    $('.wc-shellinput').keyup(function () {
        $('.wc-send > div').tooltip('destroy'); //key입력시 tooptip삭제
        $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
        $('.menuIcon_active').removeClass('menuIcon_active').addClass('menuIcon');
        $('.wc-console').animate({ 'bottom': 10 + 'px' }, 'fast');
        $('.wc-message-groups').css({ 'bottom': 60 + 'px' }).scrollTop($('.wc-message-group-content')[0].scrollHeight);
        if ($('.sapBtn').hasClass("off") && $(this).val() != '') {
            $('.sapIcon').removeClass('sapIcon').addClass('sendIcon');
            $('.wc-shellinput').css({ 'color': '#555' });
        } else {
            $('.sendIcon').removeClass('sendIcon').addClass('sapIcon');
            $('.wc-shellinput').css({ 'color': '#326E9B' });
        }
    });
    $('.wc-shellinput').click(function () {
        $('.wc-shellinput').css({'ime-mode':'active'}); //IE만 지원
        $('.wc-message-groups').scrollTop($('.wc-message-group-content')[0].scrollHeight);
    });
    $('.wc-send > div').click(function () {
        var v = $('input[type="text"].wc-shellinput').val();
        if ($(this).hasClass('sendIcon')) {
            $('.wc-shellinput').attr('placeholder', '궁금한 것을 물어보세요!');
            $('.menuBox').removeClass('on').addClass('off').css({ 'display': 'none' });
            $('.wc-console').animate({ 'bottom': 10 + 'px' }, 'fast');
            $('.sapIcon-close').removeClass('sapIcon-close').addClass('menuIcon');
            $('.wc-sap').removeClass('on').addClass('off').css({ 'display': 'none' });
            $('.sendIcon').removeClass('sendIcon').addClass('sapIcon');
            $('.sapBtn').removeClass('on').addClass('off');
            $('.wc-textbox').animate({ 'left': 30 + 'px' }, 'fast');
        } else if ($(this).hasClass('sapIcon-search') && v != '') { //SAP단어 설정해서 보내기
            $('input[type="text"].wc-shellinput').attr('value', v).val('SAP#' + v);
        }
        $('.wc-message-groups').scrollTop($('.wc-message-group-content')[0].scrollHeight);
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    //챗봇 제스처 동작
    var startGesture = 0;
    $('.topGestureArea').click(function () {
        if ($('.topGestureIcon').css('float') == 'left') {
            //Gesture off
            $('.topGestureIcon').css({ 'float': 'right' });
            $('.gesture-wrapper').hide().animate({ "right": "-380px", "opacity": "0" }, "slow").fadeOut("slow");
        } else {
            //Gesture on
            $('.topGestureIcon').css({ 'float': 'left' });
            if (startGesture == 0) {
                playAnimation('ChatBot_AniAll01');
                startGesture = 1;
            }
            $('.gesture-wrapper').show().animate({ "right": "380px", "opacity": "1" }, "slow").fadeIn("slow");
        }
    });
    //닫기 버튼
    $('.btnTopClose').click(function () {
        $("#video").attr('src', '');
        $('.mov-wrapper, .img-wrapper, .map-wrapper, .reel-wrapper').hide().animate({ "right": "-380px", "opacity": "0", "display": "none" }, "slow").fadeOut("slow");
    });

    //현재위치사용승인
    //$(document).on('click', '.wc-card > .wc-card-buttons > li > button:contains("현재 위치 사용 승인")', function () {
    $(document).on('click', '.wc-list button:contains("현재 위치 사용 승인")', function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = { lat: position.coords.latitude, lng: position.coords.longitude };
            //alert("현재 위치: 위도(" + pos.lat + "), 경도(" + pos.lng + ")");
            //alert($('#conversationId').val());
            //var directLineUrl = "https://northamerica.directline.botframework.com";
            var directLineUrl = "https://directline.botframework.com";
            var secretKey = "FhoZRDuRE_8.cwA.VUA.XDqPTho3xJJJTwF14KTPZeyo0QZ5plfns2nMUS0h99I";	//USWEST

            var info = JSON.stringify({
                type: 'message',
                text: 'current location:' + pos.lat + ':' + pos.lng,
                from: { id: 'userid' },
            });
            $.ajax({
                type: "POST",
                url: directLineUrl + "/v3/directline/conversations/" + $('#conversationId').val() + "/activities",
                data: info,
                //dataType : "json",
                headers: {
                    "Authorization": "Bearer " + secretKey,
                    'Content-Type': 'application/json'
                },
                success: function (data) {
                    //window.location.assign('https://openapi.naver.com/v1/map/staticmap.bin?clientId=dXUekyWEBhyYa2zD2s33&url=file:///C:/Users/user/Desktop&crs=EPSG:4326&center=127.1141382,37.3599968&level=10&w=320&h=320&baselayer=default&markers=127.1141382,37.3599968');
                },
                error: function (e) {
                    alert("error1");
                }
            });
        }, function (error) {
            //alert("에러: " + error.message);
            //var directLineUrl = "https://northamerica.directline.botframework.com";
            var directLineUrl = "https://directline.botframework.com";
            var secretKey = "FhoZRDuRE_8.cwA.VUA.XDqPTho3xJJJTwF14KTPZeyo0QZ5plfns2nMUS0h99I";	//USWEST
            var info = JSON.stringify({
                type: 'message',
                text: '직접 검색',
                from: { id: 'userid' },
            })
            $.ajax({
                type: "POST",
                url: directLineUrl + "/v3/directline/conversations/" + $('#conversationId').val() + "/activities",
                data: info,
                //dataType : "json",
                headers: {
                    "Authorization": "Bearer " + secretKey,
                    'Content-Type': 'application/json'
                },
                success: function (data) {
                },
                error: function (e) {
                    alert("error2");
                }
            });
        });
    });

    //팝업 영역 호출
    $(document).on('click', '.ac-image', function () {
        var popType = $(this).parent().parent().parent().children().eq(0).children().eq(0).attr('alt');

        $("#video").attr('src', '');

        if (popType == "img") { // IMG
            $('.mov-wrapper, .map-wrapper, .reel-wrapper').fadeOut();
            $('#imgDiv > div').remove();
            var manyImg = false;
            var imgPopTitle = $(this).parent().parent().parent().children().eq(0).children().eq(1).attr('alt');
            var imgUrl = $(this).parent().parent().parent().children().eq(0).children().eq(2).attr('alt');
            var imgCnt = $(this).parent().parent().parent().children().eq(0).children().eq(3).attr('alt');
            $('#imgTag').attr('src', imgUrl);
            $('#imgTitle').text(imgPopTitle);
            $('.img-wrapper').show().animate({ "right": "380px", "opacity": "1" }, "fast");
        } else if (popType == "play") { // PLAY
            $('.img-wrapper, .map-wrapper, .reel-wrapper').fadeOut();
            var movPopTitle = $(this).parent().parent().parent().children().eq(0).children().eq(1).attr('alt');
            var movPopUrl = $(this).parent().parent().parent().children().eq(0).children().eq(2).attr('alt');
            $('#movTitle').text(movPopTitle);
            $('#video').attr('src', movPopUrl);
            $('.mov-wrapper').show().animate({ "right": "380px", "opacity": "1" }, "fast");
        } else if (popType == "map") {  // MAP
            $('.mov-wrapper, .img-wrapper, .reel-wrapper').fadeOut();
            $('#mapArea > div').remove();
            $('#mapArea').add("<div id='map' style='border:1px solid #000;'></div>").appendTo('#mapArea');
            var mapTitle = $(this).parent().parent().parent().children().eq(0).children().eq(1).attr('alt');
            $('#mapTitle').text(mapTitle);
            var coordinate = $(this).parent().parent().parent().children().eq(0).children().eq(2).attr('alt');
            var _temp = coordinate.split(',');
            var longitude = _temp[0];
            var latitude = _temp[1];
            /* V3로 변경*/
            var position = new naver.maps.LatLng(longitude, latitude);
            var map = new naver.maps.Map('map', {
                center: position,
                zoom: 12,
                size: new naver.maps.Size(568, 318)
            });
            var marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(longitude, latitude),
                map: map
            });
            $('.map-wrapper').show().animate({ "right": "380px", "opacity": "1" }, "fast");
        } else if (popType == "reel") { // REEL
            $('.img-wrapper, .map-wrapper, .mov-wrapper').fadeOut();

            var reelPopTitle = $(this).parent().parent().parent().children().eq(0).children().eq(1).attr('alt');
            $('#reelTitle').text(reelPopTitle);
            if ($('.reel-wrapper').css('display', 'block')) {
                $('#image').reel({
                    images: "assets/image/car/000##.jpg",
                    frames: 60,
                    cw: true,
                    brake: 10,
                    throwable: 10
                });
            }

            $('.reel-wrapper').show().animate({ "right": "380px", "opacity": "1" }, "fast");
        }
    });

    //마이크 ON/OFF
    $('.ttsMic').click(function () {
        if ($(this).hasClass('ttsMicBlack')) {
            $('.ttsMic').removeClass('ttsMicBlack');
            $('.ttsMic').addClass('ttsMicRed');
        } else {
            $('.ttsMic').removeClass('ttsMicRed');
            $('.ttsMic').addClass('ttsMicBlack');
        }
    });
});

//챗봇 메뉴 처음으로 돌아가기
//function viewMenu(v) {
//    console.log($('input[type="text"].wc-shellinput').val());
//    var returnText = "return home";     // 처음으로 돌아가는 텍스트
//    $('div.wc-console').addClass('has-text');
//    $('input[type="text"].wc-shellinput').attr('value', returnText);
//    $('input[type="text"].wc-shellinput').val(returnText);
//    $('label.wc-send').trigger('click');
//    $('input[type="text"].wc-shellinput').attr('value', '');
//    $('input[type="text"].wc-shellinput').val('');
//    $('.wc-console').removeClass('has-text');
//    $('.menuBox').removeClass('on').addClass('off');
//    $('.menuBox').css({ 'display': 'none' });
//}

//function viewMenu(v) {
//    console.log($('input[type="text"].wc-shellinput').val());
//    $('div.wc-console').addClass('has-text');
//    $('input[type="text"].wc-shellinput').attr('value', v);
//    $('input[type="text"].wc-shellinput').val(v);
//    $('label.wc-send').trigger('click');
//    $('input[type="text"].wc-shellinput').attr('value', '');
//    $('input[type="text"].wc-shellinput').val('');
//    $('.wc-console').removeClass('has-text');
//    $('.menuBox').removeClass('on').addClass('off');
//    $('.menuBox').css({ 'display': 'none' });
//}