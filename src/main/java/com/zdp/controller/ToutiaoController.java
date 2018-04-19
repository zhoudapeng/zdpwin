package com.zdp.controller;

import com.zdp.entity.vo.ToutiaoVO;
import com.zdp.service.ToutiaoService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by dapeng.zhou on 2016/8/4.
 */
@RequestMapping("/toutiao")
@Controller
public class ToutiaoController {
    @Resource
    private ToutiaoService toutiaoService;

    @RequestMapping("/{type}")
    public ModelAndView list(@PathVariable("type")String type) {
        ModelAndView mav = new ModelAndView("toutiao/list");
        List<ToutiaoVO> toutiaoVOs = toutiaoService.query(type);
        mav.addObject("toutiaos",toutiaoVOs);
        return mav;
    }
}
