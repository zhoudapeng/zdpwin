package com.zdp.controller;

import com.google.common.collect.Maps;
import com.zdp.annotation.JsonResponse;
import com.zdp.entity.juhe.robot.RobotResponse;
import com.zdp.util.HttpClientUtil;
import com.zdp.util.JsonUtil;
import com.zdp.util.LogUtil;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;
import java.util.UUID;

/**
 * Created by dapeng.zhou on 2016/9/23.
 */
@Controller
@RequestMapping("/robot")
public class RobotController {
    private static final String URL = "http://op.juhe.cn/robot/index";
    private static final String KEY = "13fa3ce390405f32f764c1322e30d9f7";
    @RequestMapping("/ask")
    @ResponseBody
    @JsonResponse
    public String ask(@RequestParam("question") String question,HttpServletRequest request,HttpServletResponse response) {
        Map<String,String> map = Maps.newHashMap();
        map.put("info",question);
        map.put("key",KEY);
        map.put("dtype","json");
        RobotResponse res = HttpClientUtil.post(URL,map, RobotResponse.class);
        handleCookie(request,response);
        return res.getResult().getText();
    }

    public static void main(String[] args) {
        Map<String,String> map = Maps.newHashMap();
        map.put("info","hello");
        map.put("key","13fa3ce390405f32f764c1322e30d9f7");
        map.put("dtype","json");
        RobotResponse res = HttpClientUtil.post(URL,map, RobotResponse.class);
    }

    private void handleCookie(HttpServletRequest request, HttpServletResponse response) {
        Cookie[] cookies = request.getCookies();
        boolean containsUid = false;
        if (cookies != null && cookies.length > 0) {
            for (Cookie cookie:cookies) {
                if ("uid".equals(cookie.getName())) {
                    String value = cookie.getValue();
                    LogUtil.BIZ.info("receive uid cookie:" + value);
                    containsUid = StringUtils.isNotBlank(value);
                    break;
                }
            }
        }
        if (!containsUid) {
            Cookie cookie = new Cookie("uid", UUID.randomUUID().toString());
            cookie.setPath("/");
            cookie.setMaxAge(3000);
            response.addCookie(cookie);
            LogUtil.BIZ.info("create uid cookie:" + cookie.getValue());
        }
    }

}
