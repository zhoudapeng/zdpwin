<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ include file="../header.jsp" %>
<form action="/search/go" method="post">
    <input type="input" value="请输入关键字" name="keyword"/>
    <input type="submit" value="Search" >
</form>


<%@ include file="../footer.jsp" %>