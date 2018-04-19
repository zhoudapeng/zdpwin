package com.zdp.controller;

import com.zdp.service.DayHistoryService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;

/**
 * Created by dapeng.zhou on 2016/8/4.
 */
@Controller
@RequestMapping("/dayhistory")
public class DayHistoryController {
    @Resource
    private DayHistoryService dayHistoryService;
    @RequestMapping("/list")
    public ModelAndView list() {
        ModelAndView mav = new ModelAndView("dayhistory/list");
        mav.addObject("dayHistorys",dayHistoryService.query());
        return mav;
    }
}
