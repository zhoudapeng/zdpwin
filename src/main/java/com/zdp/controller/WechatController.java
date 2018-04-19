package com.zdp.controller;

import com.zdp.entity.vo.ArticleVO;
import com.zdp.service.ArticleService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by dapeng.zhou on 2016/8/3.
 */
@Controller
@RequestMapping("/wechat")
public class WechatController {
    @Resource
    private ArticleService articleService;
    @RequestMapping("/hot")
    public ModelAndView hot() {
        ModelAndView mav = new ModelAndView("wechat/list");
        List<ArticleVO> articles = articleService.query(1);
        mav.addObject("articles",articles);
        return mav;
    }
}
