package com.zdp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by dapeng.zhou on 2016/7/7.
 */
@Controller
@RequestMapping("/saylove")
public class SayLoveController {

    @RequestMapping("/index")
    public String saylove() {
        return "saylove/index";
    }
}
