﻿$(function () {
	$('.bot-wrap').hide();    //처음에 숨기기

	var ie = (function (){
		if (window.ActiveXObject === undefined) return null;
		if (!document.querySelector) return 7;
		//if (parseFloat(navigator.appVersion.split("MSIE")[1].split(";")[0].split(" ").join("")) == 8) return 8;
		if(!document.addEventListener) return 8;
		if (!window.atob) return 9;
		if (!document.__proto__) return 10;
		return 11;
	})();
	if(ie == 10 || ie == 9 || ie == 8 || ie == 7){
		$('.bot-wrap').remove();
		$(".banner").remove();
	}
});

function isMobile() {
	var UserAgent = navigator.userAgent;

	if (UserAgent.match(/iPhone|iPad|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
		return true;
	} else {
		return false;
	}
}

if (isMobile()) {   //모바일 환경
    //1. Click 호출
    //$(document).on('click', '#botChatBtn', function () {
	//	location.href = "index_m.html";
    //});

    //2. 로딩시 표출
    location.href = "default_m.asp";
} else {    // 웹 환경

    // 1. 처음 로딩시 표출
    //$('.wc-chatview-panel').css('bottom', 0).show();
    //$('.bot-wrap').show();

    // 2. 클릭시 챗봇 표출 (사용하려면 위에 숨기기 부분 주석 제거 해줘야함)
    //$(document).on('click', '#botChatBtn', function () {
    //    $('.wc-chatview-panel').css('bottom', 0).show();
    //    $('.bot-wrap').show();
    //});

    // 3. 클릭시 챗봇 팝업 표출
    //스크린크기
    var fullWidth = screen.availWidth;
    var fullHeight = screen.availHeight;
    //팝업크기
    var popWidth = 480;
    var popHeight = 660;
    //팝업위치
    var popLeft = (fullWidth - popWidth) / 2;
    var popTop = (fullHeight - popHeight) / 2;

    //var _key = $('#key').val();
    //var _cjworld_id_get = $('#cjworld_id_get').val();
    //var _cjworld_id_post = $('#cjworld_id_post').val();
    //var _lang = $('#lang').val();

    var popupOption = "width = " + popWidth + ", height = " + popHeight + ", top = " + popTop+", left = " + popLeft+", resizable = no, fullscreen = no, toolbar = no, menubar = no, channelmode = no, scrollbars = no, location = no";
    $(document).on('click', '#botChatBtn', function () {


        

        //window.open('chatbot.html', '', popupOption);
        //window.open('default.asp', '', popupOption);
        //var frmPop = document.frm;
        //var url = 'default.asp';
        window.open('', 'target', popupOption);

        //$('#key').val(_key); 
        //$('#cjworld_id_get').val(_cjworld_id_get);
        //$('#cjworld_id_post').val(_cjworld_id_post);
        //$('#lang').val(_lang);

        document.frm.target = 'target';
        document.frm.submit();

        //console.log($('#key').val());
        //console.log($('#cjworld_id_get').val());
        //console.log($('#cjworld_id_post').val());
        //console.log($('#lang').val());

        //frmPop.action = url;
        //frmPop.target = '_blank';
        //frmPop.key.value = _key;
        //frmPop.cjworld_id_get.value = _cjworld_id_get;
        //frmPop.cjworld_id_post.value = _cjworld_id_post;
        //frmPop.lang.value = _lang;
        //frmPop.submit();
    });
}