<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<jsp:include page="../header.jsp"/>
<html lang="en">
<head>
    <title>联系我</title>
</head>

<body class="contact-page">
<div class="main-body">
    <div class="container">
        <div class="row">
            <div class="main-page">
                <jsp:include page="../aside.jsp"/>
                <div class="content-main contact-content">
                    <div class="contact-content-upper">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="gallery_title">
                                    <h3>做网站只是为了自己从0开始做点事情</h3>
                                    <h4>感谢您的访问</h4>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-12 col-md-6 contact_left">
                                <form class="form-horizontal" method="post" action="#">

                                    <div class="form-group">
                                        <input type="text" class="form-control" id="name" name="name"
                                               placeholder="NAME..." value="">
                                    </div>

                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email" name="email"
                                               placeholder="EMAIL..." value="">
                                    </div>

                                    <div class="form-group">
                                        <input type="text" class="form-control" id="subject" name="subject"
                                               placeholder="SUBJECT..." value="">
                                    </div>

                                    <div class="form-group">
                                        <textarea class="form-control" rows="4" name="message"
                                                  placeholder="MESSAGE..."></textarea>
                                    </div>

                                    <div class="form-group">
                                        <input id="submit" name="submit" type="submit" value="Send"
                                               class="btn view_more btn-submit">
                                    </div>

                                </form>
                            </div> <!-- .contact-left -->

                            <div class="col-sm-12 col-md-6 contact_right">

                                <div class="col-md-12 contact_title">
                                    CONTACT
                                </div>

                                <div class="col-md-12 contact_sub_title">
                                    LOREM IPSUM NEC SAGITTIS
                                </div>

                                <div class="col-md-12 contact_text">
                                    Accord is free Bootstrap theme by templatemo. Proin gravida nibh vel velit auctor
                                    aliquet. Aenean sollicitudi lorem quis bibendum auctor, nisi elit consequat ipsum
                                    nec sagittis semg nibh.
                                </div>

                                <div class="col-md-12 contact_info">
                                    <a href="mailto:info@company.com" class="contact-info-link">
                                        <i class="fa fa-envelope contact-fa"></i>info@company.com
                                    </a><br/>
                                    <a href="+1234567890" class="contact-info-link">
                                        <i class="fa fa-mobile contact-fa"></i>(+123) 456 7890
                                    </a><br/>
                                    <a href="+0987654321" class="contact-info-link">
                                        <i class="fa fa-phone contact-fa"></i>(+098) 765 4321
                                    </a><br/>
                                </div>

                                <div class="col-md-12">
                                    <span><i class="fa fa-rss social-icon rss_icon"></i></span>
                                    <span><i class="fa fa-twitter social-icon twitter_icon"></i></span>
                                    <span><i class="fa fa-facebook social-icon facebook_icon"></i></span>
                                </div>

                            </div> <!-- .contact_right -->

                        </div> <!-- .row -->
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div id="google-map"></div>
                        </div>
                    </div>

                </div> <!-- .contact-content -->
            </div> <!-- .main-page -->
        </div> <!-- .row -->

        <footer class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 footer">
                <p class="copyright">Copyright © 2016 Company Name

                    | More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect
                    from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></p>
            </div>
        </footer>  <!-- .row -->

    </div> <!-- .container -->
</div> <!-- .main-body -->
<script>
    /* Google map
     ------------------------------------------------*/
    var map = '';
    var center;

    function initialize() {
        var mapOptions = {
            zoom: 16,
            center: new google.maps.LatLng(13.758468, 100.567481),
            scrollwheel: false
        };

        map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

        google.maps.event.addDomListener(map, 'idle', function () {
            calculateCenter();
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            map.setCenter(center);
        });
    } // initialize

    function calculateCenter() {
        center = map.getCenter();
    }

    function loadGoogleMap() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
        document.body.appendChild(script);
    }

    // DOM is ready.
    $(document).ready(function () {
        loadGoogleMap();
    });
</script>
</body>
</html>
