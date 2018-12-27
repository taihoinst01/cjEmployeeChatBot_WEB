<!DOCTYPE html>
<html>
<meta content="text/html" charset="utf-8">
<title></title>

<body>
    <form name="frm" action="<%=request("url") %>" method="post">
        <input type="text" name="cjworld_id" value="<%=request("cjworld_id") %>">
    </form>
</body>
<script>
    document.frm.submit();
</script>
</html>