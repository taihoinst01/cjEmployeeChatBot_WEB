$(function () {

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
    console.log('value = '+ $('#cjworld_id_get').val());
    var cjworld_id = $('#cjworld_id_get').val();
    if ($('#cjworld_id_get').val() != '') {
        location.href = "default_m.asp?cjworld_id=" + cjworld_id;
    } else {
        location.href = "default_m.asp";
    }
}