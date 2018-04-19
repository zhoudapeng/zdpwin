package com.zdp.util;

import com.zdp.exception.BusinessException;
import com.zdp.exception.ResultStatus;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpParams;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;
import org.apache.log4j.Logger;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class HttpClientUtil {
    private static final Logger logger = LogUtil.RPC;
    private static final int CONN_TIME_OUT = 3000;
    private static final int READ_TIME_OUT = 10000;

    public static <T> T get(String url,Map<String,String> params,Class<T> clazz) {
        DefaultHttpClient hc = new DefaultHttpClient();
        HttpParams pms = hc.getParams();
        HttpConnectionParams.setConnectionTimeout(pms, CONN_TIME_OUT);
        HttpConnectionParams.setSoTimeout(pms, READ_TIME_OUT);
        HttpGet httpget = new HttpGet(url);
        HttpEntity entity = null;
        try {
            HttpResponse httpresponse = hc.execute(httpget);
            entity = httpresponse.getEntity();
            String resBody = EntityUtils.toString(entity);
            EntityUtils.consume(entity);
            logger.info("url=" + url + ",params=" + params + ",result=" + resBody);
            return JsonUtil.fromJson(resBody,clazz);
        } catch (Exception e) {
            logger.info("远程调用失败,url=" + url + ",params=" + params,e);
        } finally {
            if (httpget != null) {
                httpget.abort();
            }
            if (hc != null) {
                hc.getConnectionManager().shutdown();
            }
        }
        throw new BusinessException(ResultStatus.SYSTEM_ERR);
    }

    public static <T> T post(String url,Map<String,String> params,Class<T> clazz) {
        DefaultHttpClient hc = new DefaultHttpClient();
        HttpParams pms = hc.getParams();
        HttpConnectionParams.setConnectionTimeout(pms, CONN_TIME_OUT);
        HttpConnectionParams.setSoTimeout(pms, READ_TIME_OUT);
        HttpPost httpPost = new HttpPost(url);
        HttpEntity entity = null;
        try {
            if (params != null && !params.isEmpty()) {
                List<BasicNameValuePair> nvps = new ArrayList<BasicNameValuePair>();
                for (Map.Entry<String,String> entry:params.entrySet()) {
                    nvps.add(new BasicNameValuePair(entry.getKey(), entry.getValue()));
                }
                httpPost.setEntity(new UrlEncodedFormEntity(nvps, HTTP.UTF_8)); // 设置参数给Post
            }
            HttpResponse httpresponse = hc.execute(httpPost);
            entity = httpresponse.getEntity();
            String resBody = EntityUtils.toString(entity,"UTF-8");
            EntityUtils.consume(entity);
            logger.info("url=" + url + ",params=" + params + ",result=" + resBody);
            return JsonUtil.fromJson(resBody,clazz);
        } catch (Exception e) {
            logger.info("远程调用失败,url=" + url + ",params=" + params,e);
        } finally {
            if (httpPost != null) {
                httpPost.abort();
            }
            if (hc != null) {
                hc.getConnectionManager().shutdown();
            }
        }
        throw new BusinessException(ResultStatus.SYSTEM_ERR);
    }
}
