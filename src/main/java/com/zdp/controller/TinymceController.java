package com.zdp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by dapeng.zhou on 2016/7/7.
 */
@Controller
@RequestMapping("/tinymce")
public class TinymceController {

    @RequestMapping("/index")
    public String index() {
        return "tinymce/index";
    }
}
