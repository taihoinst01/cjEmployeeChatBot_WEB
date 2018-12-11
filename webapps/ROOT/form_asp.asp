<%
	response.write("name1" + request.form("name1") + "<br>")
    response.write("name2" + request.form("name2"))
%>

<script>
	location.href = "index.html?"+<%=request.form("name1")%>+"&"+<%=request.form("name2")%>;
</script>