<!DOCTYPE html>
<html>
<meta content="text/html" charset="utf-8">
<title></title>

<body>
    <form name="frm" action="<%=request("url") %>" method="post">
        <input type="hidden" name="cjworld_id" id="cjworld_id" value="<%=request("cjworld_id") %>">
        <input type="hidden" name="gopage" value="10">
        <input type="hidden" name="language" value="ko">
    </form>
</body>
<script>
    var inputId = document.getElementById("cjworld_id");
    alert(inputId.value);
    document.frm.submit();
</script>
</html>