package com.zdp.util;

/**
 * Created by dapeng.zhou on 2016/7/21.
 */
public class PathUtil {
    private static boolean inited = false;
    private static String contextPath ;

    public static String getContextPath() {
        return contextPath;
    }

    public static void setContextPath(String contextPath) {
        if (inited) {
            return;
        }
        PathUtil.inited = true;
        PathUtil.contextPath = contextPath;
    }
}
