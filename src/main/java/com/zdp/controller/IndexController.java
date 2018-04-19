package com.zdp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by dapeng.zhou on 2016/7/6.
 */
@Controller
@RequestMapping("/index")
public class IndexController {
    @RequestMapping("")
    public String index() {
        return "index";
    }
}
