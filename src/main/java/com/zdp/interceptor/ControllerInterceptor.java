package com.zdp.interceptor;

import com.zdp.CommonResponse;
import com.zdp.annotation.JsonResponse;
import com.zdp.exception.BusinessException;
import com.zdp.exception.ResultStatus;
import com.zdp.util.JsonUtil;
import com.zdp.util.LogUtil;
import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.apache.commons.logging.Log;
import org.apache.log4j.Logger;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * Created by dapeng.zhou on 2016/7/6.
 */
public class ControllerInterceptor implements MethodInterceptor {
    private Logger logger = LogUtil.ACCESS;

    public Object invoke(MethodInvocation invocation) throws Throwable {
        ResultStatus bstatus = ResultStatus.SUCCESS;
        Object data = null;
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        Map<String, String[]> params = request.getParameterMap();
        String requestParams = JsonUtil.toJson(params);
        try {
            logger.info("LogRequest["+request.getRequestURI()+"]:params=" + requestParams);
            data = invocation.proceed();
        } catch (BusinessException be) {
            bstatus = be.getStatus();
        } catch (Exception e) {
            LogUtil.BIZ.warn("异常",e);
            bstatus = ResultStatus.SYSTEM_ERR;
        } finally {
            JsonResponse jsonResponse = invocation.getMethod().getAnnotation(JsonResponse.class);
            if (jsonResponse == null) {
                logger.info("LogRequestResponse["+request.getRequestURI()+"]:params=" + requestParams + ",result=" + JsonUtil.toJson(data));
                return data;
            }
            CommonResponse response = new CommonResponse();
            response.setBstatus(bstatus);
            response.setData(data);
            String result = response.toString();
            logger.info("LogRequestResponse["+request.getRequestURI()+"]:params=" + requestParams + ",result=" + result);
            return result;
        }
    }
}
