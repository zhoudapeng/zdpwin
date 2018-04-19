<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ include file="../header.jsp" %>
<!DOCTYPE html>
<html>

<head>

    <meta charset="UTF-8">

    <title>所见即所得的网页编辑工具</title>

    <link rel="stylesheet" href="css/reset.css">

    <link rel="stylesheet" href="css/style.css" media="screen" type="text/css"/>

</head>

<body>

<body class="main">
<div class="wrapper">
    <div style="text-align:center;clear:both">
        <!--
        <script src="/gg_bd_ad_720x90.js" type="text/javascript"></script>
        <script src="/follow.js" type="text/javascript"></script>
        -->
    </div>
    <label for="title">标题</label>
    <input type="text" class="title" id="title"/>
    <label for="content">内容</label>
    <textarea name="" id="" cols="30" rows="10" id="content" class="content"></textarea>
    <pre><code class="json"></code></pre>
</div>
</body>

<script src='js/jquery.js'></script>
<script src='js/mce.js'></script>
<script src="js/index.js"></script>
</body>

</html>

<%@ include file="../footer.jsp" %>