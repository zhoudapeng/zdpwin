package com.zdp.filter;

import com.zdp.util.LogUtil;
import com.zdp.util.TraceIdHolder;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import javax.servlet.*;
import java.io.IOException;
import java.util.UUID;

/**
 * Created by dapeng.zhou on 2016/7/6.
 */
public class ReqInfoFilter implements Filter {

    public void init(FilterConfig filterConfig) throws ServletException {

    }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        TraceIdHolder.remove();
        String traceId = request.getParameter("traceId");
        if (StringUtils.isEmpty(traceId)) {
            traceId = UUID.randomUUID().toString();
            TraceIdHolder.set(traceId);
        }
        chain.doFilter(request,response);
    }

    public void destroy() {

    }
}
