<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<jsp:include page="../header.jsp"/>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel='stylesheet' type='text/css' href='/css/other.css'>
    <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="/css/magnific-popup.css">   <!-- Magnific Popup core CSS file -->
    <link rel="stylesheet" type="text/css" href="/css/style.css">
<!--
Accord Template
http://www.templatemo.com/tm-478-accord
-->
    <title>Accord - Gallery</title>
</head>

<body class="gallery-page">

    <div class="main-body">
        <div class="container">
            <div class="row">
               
                <div class="main-page">
                    <jsp:include page="../aside.jsp"/>

                    <!-- content-main -->
                    <div class="content-main gallery_main">

                        <div class="gallery-main-inner">
                            
                            <div class="col-md-12 gallery_title_main">
                                <div class="gallery_title">
                                    <h3>GALLERY</h3>
                                    <h4>RESPONSIVE DESIGN</h4>
                                </div><br style="clear:both;"/>
                            </div>

                            <div id="content" class="gallery-images-container">
                                <div class="box-gutter"></div>
                                <div class="box-sizer"></div>
                                <div class="box">
                                    <a href="images/gallery-item-1-big.jpg"><img alt="Agra picture" src="images/gallery-item-1.jpg"></a>
                                </div>
                                <div class="box">
                                    <a href="images/gallery-item-4-big.jpg"><img alt="Agra picture" src="images/gallery-item-4.jpg"></a>
                                </div>
                                <div class="box">
                                    <a href="images/gallery-item-6-big.jpg"><img alt="Agra picture" src="images/gallery-item-6.jpg"></a>
                                </div>
                                <div class="box">
                                    <a href="images/gallery-item-2-big.jpg"><img alt="Agra picture" src="images/gallery-item-2.jpg"></a>
                                </div>
                                <div class="box">
                                    <a href="images/gallery-item-5-big.jpg"><img alt="Agra picture" src="images/gallery-item-5.jpg"></a>
                                </div>
                                <div class="box">
                                    <a href="images/gallery-item-7-big.jpg"><img alt="Agra picture" src="images/gallery-item-7.jpg"></a>
                                </div>
                                <div class="box">
                                    <a href="images/gallery-item-8-big.jpg"><img alt="Agra picture" src="images/gallery-item-8.jpg"></a>
                                </div>
                                <div class="box">
                                    <a href="images/gallery-item-3-big.jpg"><img alt="Agra picture" src="images/gallery-item-3.jpg"></a>
                                </div>
                            </div>                

                            <div class="row text-center view_more_main">
                               <a href="#" class="btn view_more">view more</a>
                            </div>

                        </div>

                    </div>
                </div> <!-- .main-page -->
            </div> <!-- .row -->
            <footer class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 footer">
                    <p class="copyright">Copyright © 2016 Company Name
                    
                    | More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></p>
                </div>    
            </footer>  <!-- .row -->   

        </div> <!-- .container -->
    </div>  <!-- .main-body -->




    <script>
        function init_masonry(){
          var $container = $('#content');

          $container.imagesLoaded( function(){
              $container.masonry({
                itemSelector: '.box',
                isAnimated: true
            });
          });
        }

        $(document).ready(function(){
            
            //Init jQuery Masonry layout
            init_masonry();

            // Magnific Popup
            $('.gallery-images-container').magnificPopup({
                delegate: 'a', // child items selector, by clicking on it popup will open
                type: 'image',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                },
            });

            //Select menu onchange
            $("#collapsed-navbar").change(function () {
                window.location = $(this).val();
            });
        
        });
    </script>

</body>
</html>
