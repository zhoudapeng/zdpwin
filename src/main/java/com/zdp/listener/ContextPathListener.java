package com.zdp.listener;

import com.zdp.util.LogUtil;
import com.zdp.util.PathUtil;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * Created by dapeng.zhou on 2016/7/21.
 */
public class ContextPathListener implements ServletContextListener {
    public void contextInitialized(ServletContextEvent sce) {
        String contextPath = sce.getServletContext().getRealPath("");
        LogUtil.START.info("contextPath:" + contextPath);
        PathUtil.setContextPath(contextPath);
    }

    public void contextDestroyed(ServletContextEvent sce) {

    }
}
