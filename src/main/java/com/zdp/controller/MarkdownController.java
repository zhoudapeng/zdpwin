package com.zdp.controller;

import com.zdp.annotation.JsonResponse;
import com.zdp.util.MarkdownUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by dapeng.zhou on 2016/7/6.
 */
@Controller
@RequestMapping("/markdown")
public class MarkdownController {

    @RequestMapping("/index")
    public String markdown() {
        return "markdown/index";
    }

    @JsonResponse
    @ResponseBody
    @RequestMapping("/transfer")
    public Object transfer(@RequestParam("content")String content) {
        return MarkdownUtil.tranfer(content);
    }
}
