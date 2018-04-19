<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<aside class="main-navigation">
    <div class="main-menu">

        <div class="menu-container">
            <div class="block-keep-ratio block-keep-ratio-2-1 block-width-full home">
                <a href="/index" class="block-keep-ratio__content  main-menu-link">
                                        <span class="main-menu-link-text">
                                            首页
                                        </span>
                </a>
            </div>
        </div>

        <div class="menu-container">
            <div class="block-keep-ratio  block-keep-ratio-1-1  block-width-half  pull-left  about-main">
                <a href="/blog/index" class="main-menu-link about block-keep-ratio__content flexbox-center">
                    <i class="fa fa-user fa-4x main-menu-link-icon"></i>
                    博客
                </a>
            </div>

            <div class="block-keep-ratio  block-keep-ratio-1-1  block-width-half  pull-right  contact-main">
                <a href="/contact/index" class="main-menu-link contact block-keep-ratio__content flexbox-center">
                    <i class="fa fa-envelope-o fa-4x main-menu-link-icon"></i>
                    联系我
                </a>
            </div>
        </div>

        <div class="menu-container">
            <div class="block-keep-ratio  block-keep-ratio-1-1  block-width-half  pull-left  about-main">
                <a href="/markdown/index" class="main-menu-link markdown block-keep-ratio__content flexbox-center">
                    <i class="fa fa-user fa-4x main-menu-link-icon"></i>
                    Markdown工具
                </a>
            </div>

            <div class="block-keep-ratio  block-keep-ratio-1-1  block-width-half  pull-right  contact-main">
                <a href="/tinymce/index" class="main-menu-link tinymce block-keep-ratio__content flexbox-center">
                    <i class="fa fa-envelope-o fa-4x main-menu-link-icon"></i>
                    Tinymce工具
                </a>
            </div>
        </div>

        <div class="menu-container">
            <div class="block-keep-ratio block-keep-ratio-2-1 block-width-full saylove">
                <a href="/saylove/index" class="block-keep-ratio__content  main-menu-link">
                                        <span class="main-menu-link-text">
                                            Say love
                                        </span>
                </a>
            </div>
        </div>

        <div class="menu-container">
            <div class="block-keep-ratio block-keep-ratio-1-1 block-keep-ratio-md-2-1 block-width-full gallery">
                <a href="/ebook/index" class="main-menu-link  block-keep-ratio__content">
                                        <span class="main-menu-link-text">
                                            学习资料下载
                                        </span>
                </a>
            </div>
        </div>

        <!-- sidebar carousel -->
        <div class="menu-container">
            <div class="mauris">
                <div id="carousel-menu" class="carousel slide" data-ride="carousel">
                    <!-- Wrapper for slides -->
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <img src="/images/slider-img-1.png" alt="slider">

                            <div class="carousel-caption menu-caption">
                                mauris vita
                            </div>
                        </div>
                        <div class="item">
                            <img src="/images/menu-bg-home.png" alt="slider">

                            <div class="carousel-caption menu-caption">
                                lorem ipsum
                            </div>
                        </div>
                    </div>

                    <!-- Controls -->
                    <a class="left carousel-control" href="#carousel-menu" role="button" data-slide="prev">
                        <span class="fa fa-caret-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#carousel-menu" role="button" data-slide="next">
                        <span class="fa fa-caret-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div> <!-- .mauris -->
        </div>
    </div> <!-- main-menu -->
</aside>
<!-- main-navigation -->