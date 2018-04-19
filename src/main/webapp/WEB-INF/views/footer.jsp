<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<div class="scroll" id="scroll" style="display:none;"> ︿</div>
<script type="text/javascript">
    $(function () {
        showScroll();
        function showScroll() {
            $(window).scroll(function () {
                var scrollValue = $(window).scrollTop();
                scrollValue > 500 ? $('div[class=scroll]').fadeIn() : $('div[class=scroll]').fadeOut();
            });
            $('#scroll').click(function () {
                $("html,body").animate({scrollTop: 0}, 200);
            });
        }
    })
</script>