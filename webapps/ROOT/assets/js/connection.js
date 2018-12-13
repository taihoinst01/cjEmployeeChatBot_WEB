//$(function () {
//    //sso form °ª
//    console.log($("#key").val());
//    console.log($('#conversationId').val());
//    var pos = { key: $("#key").val(), cjworld_id: $("#cjworld_id").val(), lang: $("#lang").val() };

//    var directLineUrl = "https://directline.botframework.com";
//    var secretKey = "jt6NZTQ2L_I.cwA.-jQ.IXCzB8cgG5veNTf2hJMFoVSrvewUuI7RfgHujyyK1q0";	//USWEST

//    var info = JSON.stringify({
//        type: 'message',
//        text: 'sso:' + pos.key + ':' + pos.cjworld_id + ':' + pos.lang,
//        from: { id: 'userid' },
//    });
//    $.ajax({
//        //type: "POST",
//        type: "GET",
//        url: directLineUrl + "/v3/directline/conversations/" + $('#conversationId').val() + "/activities",
//        data: info,
//        //dataType : "json",
//        headers: {
//            "Authorization": "Bearer " + secretKey,
//            'Content-Type': 'application/json'
//        },
//        success: function (data) {
//            //window.location.assign('https://openapi.naver.com/v1/map/staticmap.bin?clientId=dXUekyWEBhyYa2zD2s33&url=file:///C:/Users/user/Desktop&crs=EPSG:4326&center=127.1141382,37.3599968&level=10&w=320&h=320&baselayer=default&markers=127.1141382,37.3599968');
//        },
//        error: function (e) {
//            alert("error1");
//        }
//    });
//});

$(document).on('change', $('#conversationId').val(), function () {
    console.log($("#key").val());
    console.log($('#conversationId').val());
});