<%
	response.write("key" + request.form("key") + "<br>")
    response.write("cjworld_id" + request.form("cjworld_id")
    response.write("lang" + request.form("lang"))
%>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
    <meta name="viewport" content="width=380" />

    <link rel="stylesheet" href="assets/css/jquery-ui.css" />
    <link rel="stylesheet" href="assets/css/bootstrap/bootstrap.css" />
    <link rel="stylesheet" href="assets/css/pc/botchat.css" />
    <link rel="stylesheet" href="assets/css/pc/style.css" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script type="text/javascript" src="assets/js/jquery-ui.js"></script>
    <script type="text/javascript" src="assets/js/bootstrap.js"></script>
    <!--<script type="text/javascript" src="assets/js/reel/jquery.reel-min.js"></script>-->
    <script type="text/javascript" src="assets/js/start.js"></script>
    <script type="text/javascript" src="assets/js/pc/ui.js"></script>
    <!--<script type="text/javascript" src="assets/js/pc/autocompleteword.js"></script>-->

    <!-- gesture script -->
    <!--<script type="text/javascript" src="assets/js/gesture/jquery-1.11.0.min.js"></script>-->
    <!--<script type="text/javascript" src="assets/js/gesture/three.js"></script>
    <script type="text/javascript" src="assets/js/gesture/OrbitControls.js"></script>
    <script type="text/javascript" src="assets/js/gesture/inflate.min.js"></script>
    <script type="text/javascript" src="assets/js/gesture/FBXLoader.js"></script>
    <script type="text/javascript" src="assets/js/gesture/Detector.js"></script>
    <script type="text/javascript" src="assets/js/gesture/stats.min.js"></script>
    <script type="text/javascript" src="assets/js/gesture/gesture.js"></script>-->
    <!--<script type="text/javascript" src="assets/js/B_tLKTzaqVzw=90All.js"></script>
    <script type="text/javascript" src="assets/js/stt.js"></script>
    <script type="text/javascript" src="assets/js/tts.js"></script>-->
    <title>CJ Employee(Asp)</title>
</head>
<body>
    <input type="hidden" id="conversationId" />
    <input type="hidden" id="key"  />
    <input type="hidden" id="cjworld_id" />
    <input type="hidden" id="lang"  />
    <div class="mainBG">
        <!--<img src="assets/image/chatbotStyle/psa_background.png" />-->
        <!--<div id="wrapper">
            <div id="navi-header-wrap">
                <div class="banner" id="botChatBtn"></div>
            </div>
        </div>-->
        <!-- ���⼭ ���� -->
        <div class="bot-wrap chatOn">
            <div id="bot" />
            <script src="assets/js/botchat.js"></script>
            <script>
                BotChat.App({
                    directLine: {
                        secret: 'jt6NZTQ2L_I.cwA.-jQ.IXCzB8cgG5veNTf2hJMFoVSrvewUuI7RfgHujyyK1q0'   //cjEmployeeChatBot
                        //,domain: 'https://northamerica.directline.botframework.com/v3/directline'
                    },
                    user: { id: 'userid' },
                    bot: { id: 'botid' },
                    resize: 'detect'
                }, document.getElementById("bot"));
            </script>
        </div>
        <!-- �� -->
    </div>
</body>
</html>