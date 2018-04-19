<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ include file="../header.jsp" %>
<h1 align="center">A tool for markdown,just enjoy it!</h1>

<div align="center">
    <input type="button" value="转换" id="go">
</div>
<textarea style="margin: 0px; " id="origContent"></textarea>
<div style="margin-left: 0px; margin-right: 0px;" id="result"></div>
<div style="clear:both;"></div>
<style>
    textarea {
        width: 50%;
        height: 100%;
        float:left;
    }
</style>
<script>
    $(function () {
        $('#go').click(function () {
            $.ajax({
                type: "POST",
                url: "/markdown/transfer",
                data: {content: $("#origContent").val()},
                dataType: "json",
                success: function (data) {
                    $('#result').empty();   //清空result里面的所有内容
                    var html = data.data;
                    $('#result').html(html);
                }
            });
        });
    });
</script>
<%@ include file="../footer.jsp" %>
