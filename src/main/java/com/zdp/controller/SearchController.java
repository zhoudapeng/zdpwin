package com.zdp.controller;

import com.google.common.collect.Sets;
import com.sun.org.apache.xpath.internal.operations.Mod;
import com.zdp.component.search.Dimension;
import com.zdp.component.search.Entity;
import com.zdp.component.search.engine.SearchEngine;
import com.zdp.component.search.engine.impl.FileSearchEngine;
import com.zdp.component.search.spider.InfoqSpider;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.io.File;
import java.util.Set;

/**
 * Created by dapeng.zhou on 2016/8/29.
 */
@RequestMapping("/search")
@Controller
public class SearchController {
    @Resource
    private SearchEngine searchEngine;

    @RequestMapping("/index")
    public ModelAndView index(){
        return new ModelAndView("search/index");
    }

    @RequestMapping("/build")
    @ResponseBody
    public String build() {
        new InfoqSpider().handle();
        return "success";
    }

    @RequestMapping(value = "/go" , method = RequestMethod.POST)
    public ModelAndView search(@RequestParam("keyword")String keyword){
        Set<Entity> entitys =  searchEngine.search(Dimension.content,keyword);
        if (entitys == null) {
            entitys = Sets.newHashSet();
        }
        ModelAndView mav = new ModelAndView("search/result");
        mav.addObject("entitys",entitys);
        return mav;
    }

    public static void main(String[] args) {
        System.out.println(new FileSearchEngine().search(Dimension.content,"京东"));
    }
}
