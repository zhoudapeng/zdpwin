<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<%@ include file="../header.jsp" %>
<body >
<div id="main">
    <div id="container">
        <c:forEach var="article" items="${articles}">
            <div class="clear"></div>
            <section class="list">
                <div class="mecc">
                    <h2 class="mecctitle"><a href="${article.url}" target="_blank">${article.title}</a></h2>
                </div>
       <span class="titleimg">
       <a href="${article.url}" target="_blank"><img width="270" height="165" src="${article.image}"
                                                     class="attachment-thumbnail wp-post-image" alt="erfre"/></a>
       </span>
                <br/>
                <br/>
                <br/>

                <p>来自 ${article.source}&nbsp;<a href="${article.url}">点此查看全文</a></p>

                <div class="clear"></div>
            </section>
        </c:forEach>
    </div>
</div>
<%@ include file="../footer.jsp" %>
</body>
</html>