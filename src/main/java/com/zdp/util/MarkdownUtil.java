package com.zdp.util;

import org.apache.commons.lang.StringUtils;
import org.markdown4j.Markdown4jProcessor;

/**
 * Created by dapeng.zhou on 2016/7/6.
 */
public class MarkdownUtil {
    private static Markdown4jProcessor processor = new Markdown4jProcessor();
    public static String tranfer(String content) {
        if (StringUtils.isEmpty(content)) {
            return "";
        }
        try {
            return processor.process(content);
        }catch (Exception e) {
            return "";
        }
    }
}
