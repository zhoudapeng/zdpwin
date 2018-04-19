package com.zdp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by dapeng.zhou on 2016/7/12.
 */
@Controller
@RequestMapping("/blog")
public class BlogController {
    @RequestMapping("/index")
    public String index() {
        return "blog/index";
    }
}
