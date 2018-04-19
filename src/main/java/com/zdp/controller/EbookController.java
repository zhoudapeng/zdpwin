package com.zdp.controller;

import com.zdp.util.LogUtil;
import com.zdp.util.PathUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by dapeng.zhou on 2016/7/12.
 */
@Controller
@RequestMapping("/ebook")
public class EbookController {

    @RequestMapping("/index")
    public String index() {
        return "ebook/index";
    }

    @RequestMapping("/list")
    public ModelAndView list() {
        ModelAndView mav = new ModelAndView("ebook/list");
        String path = PathUtil.getContextPath() + File.separator + "ebooks";
        File location = new File(path);
        File[] files = location.listFiles();
        List<String> fileNames = new ArrayList<String>();
        for (File file:files) {
            fileNames.add(file.getName());
        }
        mav.addObject("fileNames",fileNames);
        return mav;
    }

    @RequestMapping("/preview/{fileName}")
    public ModelAndView preview(@PathVariable("fileName")String fileName) {
        ModelAndView mav = new ModelAndView("ebook/preview");
        String filePath = PathUtil.getContextPath() + "ebooks" + File.separator + fileName;
        mav.addObject("path",filePath);
        return mav;
    }

    @RequestMapping("/preview/test")
    public String test() {
        return "ebook/test";
    }

    @RequestMapping("/download/{fileName:.*}")
    public String download(@PathVariable("fileName")String fileName, HttpServletResponse response) {
        try {
            response.setCharacterEncoding("utf-8");
            response.setContentType("multipart/form-data");
            response.setHeader("Content-Disposition", "attachment;fileName="
                    + new String(fileName.getBytes(),"ISO_8859_1"));
            String path = PathUtil.getContextPath() + File.separator + "ebooks" + File.separator + fileName;
            File file = new File(path);
            if (!file.exists()) {
                return null;
            }
            response.setContentLength((int)file.length());
            InputStream inputStream = new FileInputStream(file);
            OutputStream os = response.getOutputStream();
            byte[] b = new byte[2048];
            int length;
            while ((length = inputStream.read(b)) > 0) {
                os.write(b, 0, length);
            }
            os.close();
            inputStream.close();
        } catch (Exception e) {
            LogUtil.BIZ.info("下载文件异常",e);
        }
        return null;
    }
}
