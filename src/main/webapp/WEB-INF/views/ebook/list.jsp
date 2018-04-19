<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ include file="../header.jsp" %>
<table>
    <tr><th>名称</th><th>操作</th></tr>
<c:forEach var="fileName" items="${fileNames}">
    <tr><td>${fileName}</td><td><a href="/ebooks/${fileName}" target="_blank">在线阅读</a>&nbsp;&nbsp;<a href="/ebook/download/${fileName}">下载</a></td></tr>
</c:forEach>
</table>
<%@ include file="../footer.jsp" %>