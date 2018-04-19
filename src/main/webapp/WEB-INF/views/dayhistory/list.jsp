<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"  %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<%@ include file="../header.jsp" %>
<!--header-web-->
<div id="main">
    <%--
    <div id="soutab">
        <form method="get" class="search" action="http://www.yzipi.com/">
            <input class="text" type="text" name="s" placeholder=" 请输入关键词" value="">
            <input class="butto" value="" type="submit">
        </form>
    </div>
    --%>
    <div id="container">
        <c:forEach var="dayHistory" items="${dayHistorys}">
            <div class="clear"></div>
            <section class="list">
                <div class="mecc">
                    <h2 class="mecctitle">${dayHistory.title}</h2>
                </div>
       <span class="titleimg">
           <img width="270" height="165" src="${dayHistory.image}"
                class="attachment-thumbnail wp-post-image" alt="erfre"/></a>
      </span>
                <br/>
                <br/>
                ${dayHistory.date}<br/>
                <p>${dayHistory.des}</p>
                <div class="clear"></div>
            </section>
        </c:forEach>
        <%--
        <!--list-->
        <div class="pagenavi">
            <span class="page-numbers">1 / 37 </span> <span class='page-numbers current'>1</span> <a
                class='page-numbers' href='http://www.yzipi.com/page/2' title='第 2 页'>2</a> <a class='page-numbers'
                                                                                               href='http://www.yzipi.com/page/3'
                                                                                               title='第 3 页'>3</a> <span
                class="page-numbers">...</span><a class='page-numbers' href='http://www.yzipi.com/page/37' title='最末页'>37</a>
            <a class='page-numbers' href='http://www.yzipi.com/page/2' title='下一页'>下一页</a></div>
        <!--Page End-->
        <nav class="navigation">
            <div class="nav-previous"><a href="http://www.yzipi.com/page/2">下一页</a></div>

        </nav><!-- .navigation -->
        <!--phonepage-->
    </div>
    <!--Container-->
    <aside id="sitebar">
        <!--erweima-->
        <div class="sitebar_list">
            <div class="wptag">
                <span class="tagtitle">热门标签 ...</span>

                <div class="tagg">
                    <ul id="menu-tag" class="menu">
                        <li id="menu-item-2882"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2882"><a
                                href="http://www.yzipi.com/tag/%e6%89%a7%e8%a1%8c%e5%8a%9b">执行力</a></li>
                        <li id="menu-item-2711"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2711"><a
                                href="http://www.yzipi.com/tag/o2o">O2O</a></li>
                        <li id="menu-item-2709"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2709"><a
                                href="http://www.yzipi.com/tag/%e7%b2%89%e4%b8%9d%e7%bb%8f%e6%b5%8e">粉丝经济</a></li>
                        <li id="menu-item-2707"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2707"><a
                                href="http://www.yzipi.com/tag/%e4%ba%92%e8%81%94%e7%bd%91%e6%80%9d%e7%bb%b4">互联网思维</a>
                        </li>
                        <li id="menu-item-1323"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1323"><a
                                href="http://www.yzipi.com/category/marketing/psychology">营销心理学</a></li>
                        <li id="menu-item-2881"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2881"><a
                                href="http://www.yzipi.com/tag/%e5%86%b7%e5%90%af%e5%8a%a8">冷启动</a></li>
                        <li id="menu-item-2712"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2712"><a
                                href="http://www.yzipi.com/tag/%e9%a9%ac%e4%ba%91">马云</a></li>
                        <li id="menu-item-2883"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2883"><a
                                href="http://www.yzipi.com/tag/%e4%ba%ba%e6%80%a7%e5%bc%b1%e7%82%b9">人性弱点</a></li>
                        <li id="menu-item-2842"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2842"><a
                                href="http://www.yzipi.com/?s=%E5%BE%AE%E4%BF%A1">微信</a></li>
                        <li id="menu-item-2841"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2841"><a
                                href="http://www.yzipi.com/?s=%E4%BA%92%E8%81%94%E7%BD%91%2B">互联网 +</a></li>
                        <li id="menu-item-2708"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2708"><a
                                href="http://www.yzipi.com/tag/%e5%91%a8%e9%b8%bf%e7%a5%8e">周鸿祎</a></li>
                        <li id="menu-item-2715"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2715"><a
                                href="http://www.yzipi.com/tag/%e5%a4%a7%e6%95%b0%e6%8d%ae">大数据</a></li>
                        <li id="menu-item-3224"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3224"><a
                                href="http://www.yzipi.com/tag/%e5%b7%ae%e5%bc%82%e5%8c%96">差异化</a></li>
                        <li id="menu-item-3225"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3225"><a
                                href="http://www.yzipi.com/tag/%e5%ae%9a%e4%bd%8d">定位</a></li>
                        <li id="menu-item-3227"
                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3227"><a
                                href="http://www.yzipi.com/category/experience/duanzi">柚段子</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="sitebar_list">
            <h4 class="sitebar_title">热评文章</h4>
            <ul class="sitebar_list_ul">
                <li><a href="http://www.yzipi.com/1505.htm" title="从泡妞段子看你的资金运作水平" target="_blank">
                    从泡妞段子看你的资金运作水平</a></li>
                <li><a href="http://www.yzipi.com/3268.htm" title="如何圈着网站用户，zdpwin成立一年精度总结" target="_blank">
                    如何圈着网站用户，zdpwin成立一年精度总结</a></li>
                <li><a href="http://www.yzipi.com/326.htm" title="识别好公司还是烂公司的三张图" target="_blank">
                    识别好公司还是烂公司的三张图</a></li>
                <li><a href="http://www.yzipi.com/2420.htm" title="【小编推荐】企业优秀人才的标准 - 简单" target="_blank">
                    【小编推荐】企业优秀人才的标准 - 简单</a></li>
                <li><a href="http://www.yzipi.com/1613.htm" title="牛逼的标题如何起?不能说的秘密(10条)" target="_blank">
                    牛逼的标题如何起?不能说的秘密(10条)</a></li>
                <li><a href="http://www.yzipi.com/2344.htm" title="你现在的位置决定了你未来的位置？" target="_blank">
                    你现在的位置决定了你未来的位置？</a></li>
            </ul>
        </div>
        <a href="http://www.yzipi.com/yunyin" class="yund" target="_blank"><img
                src="http://www.yzipi.com/wp-content/themes/yzipi/images/yund.png"></a>
    </aside>
    <div class="clear"></div>
</div>
<!--main-->
<footer id="dibu">
    <div class="about">
        <div class="right">
            <ul id="menu-bottom-nav" class="menu">
                <li id="menu-item-69" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-69"><a
                        href="http://www.yzipi.com/about">关于我们</a></li>
                <li id="menu-item-3013" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3013">
                    <a href="http://www.yzipi.com/contaxt">联系我们</a></li>
                <li id="menu-item-1953" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1953">
                    <a href="http://www.yzipi.com/link">友情连接</a></li>
                <li id="menu-item-1758" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1758">
                    <a href="http://www.yzipi.com/juanz">打赏柚皮</a></li>
            </ul>
            <p class="banquan">
                zdpwin ，
                互联网的运营笔记！ </p>
        </div>
        <div class="left">
            <div class="bottomlist">
                <div class="xinlan"><a href="http://weibo.com/234836886  " target="_blank"><img
                        src="http://www.yzipi.com/wp-content/themes/yzipi/images/xinlan.png" alt="zdpwin新浪微博"
                        title="zdpwin新浪微博"></a></div>
                <div class="weixin2">
                    <div class="weixin"><img src="http://www.yzipi.com/wp-content/themes/yzipi/images/weixin.png"
                                             alt="zdpwin微信公众号" title="zdpwin微信公众号"> <img
                            src="http://www.yzipi.com/wp-content/themes/yzipi/images/yzipi6.png"/ class="xixii"
                        alt="zdpwin微信公众号" >
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--about-->
    <div class="bottom">
        <a href="http://www.yzipi.com">zdpwin</a> / <a href="http://www.yzipi.com/yzipi4" target="_blank">Yzipi5.64</a>
        / <a href="http://www.yzipi.com/tagcloud" target="_blank">标签</a> / <a href="http://www.yzipi.com/guidan"
                                                                              target="_blank">归档</a>
        / <a href="http://www.miitbeian.gov.cn/" rel="external nofollow" target="_blank"> 粤ICP备13063893号-6 </a>

        <div class="tongji">
            <script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
            document.write(unescape("%3Cspan id='cnzz_stat_icon_1253468941'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s6.cnzz.com/stat.php%3Fid%3D1253468941' type='text/javascript'%3E%3C/script%3E"));</script>
        </div>
    </div>
    --%>
    <!--bottom-->
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
</footer>
<!--dibu-->
</body>
</html>