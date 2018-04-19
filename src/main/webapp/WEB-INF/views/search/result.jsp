<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ include file="../header.jsp" %>
<c:forEach var="entity" items="${entitys}">
<a href="${entity.url}">${entity.title}</a>

</c:forEach>

<%@ include file="../footer.jsp" %>