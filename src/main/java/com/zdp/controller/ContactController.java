package com.zdp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by dapeng.zhou on 2016/7/12.
 */
@Controller
@RequestMapping("/contact")
public class ContactController {
    @RequestMapping("/index")
    public String contact() {
        return "contact/index";
    }
}
