$(function () {
    console.log('connectscript');

    console.log("get :: " + $('#cjworld_id_get'));
    console.log("post :: " + $('#cjworld_id_post'));
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
    //2. 로딩시 표출
    var cjworld_id_get = $('#cjworld_id_get').val();
    if (cjworld_id_get == '' || cjworld_id_get == null) {
        location.href = "error.html";
    } else {
        location.href = "default_m.asp?cjworld_id=" + cjworld_id_get;
    }
} else {    // 웹 환경
    var cjworld_id_post = $('#cjworld_id_post').val();
    if (cjworld_id_post == '' || cjworld_id_post == null) {
        location.href = "error.html";
    } else {
        // 1. 처음 로딩시 표출
        $('.wc-chatview-panel').css('bottom', 0).show();
        $('.bot-wrap').show();
    }
}