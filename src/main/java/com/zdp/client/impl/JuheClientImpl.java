package com.zdp.client.impl;

import com.zdp.client.JuheClient;
import com.zdp.entity.juhe.dayhistory.JuheDayHistory;
import com.zdp.entity.juhe.dayhistory.QueryDayHistoryResponse;
import com.zdp.entity.juhe.hot.HotArticle;
import com.zdp.entity.juhe.hot.QueryHotArticleResponse;
import com.zdp.entity.juhe.toutiao.JuheToutiao;
import com.zdp.entity.juhe.toutiao.QueryToutiaoResponse;
import com.zdp.entity.juhe.toutiao.ToutiaoType;
import com.zdp.util.HttpClientUtil;
import com.zdp.util.JsonUtil;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by dapeng.zhou on 2016/8/3.
 */
@Component("juheClient")
public class JuheClientImpl implements JuheClient {
    public List<HotArticle> query(int page) {
        String url ="http://v.juhe.cn/weixin/query";
        Map<String,String> params = new HashMap<String,String>();
        params.put("key","7ed496b99e027fd6280172e681cb86b7");
        params.put("pno",page + "");//当前页数，默认1
        params.put("ps","40");//每页返回条数，最大100，默认20
        QueryHotArticleResponse response = HttpClientUtil.post(url,params, QueryHotArticleResponse.class);
        return response.getResult().getList();
    }

    public List<JuheToutiao> queryToutiao(ToutiaoType type) {
        String url ="http://v.juhe.cn/toutiao/index";
        Map<String,String> params = new HashMap<String,String>();
        params.put("key","9a5300f929b6dab4d706076097a32e38");
        params.put("type",type.getName());
        QueryToutiaoResponse response = HttpClientUtil.post(url,params, QueryToutiaoResponse.class);
        return response.getResult().getData();
    }

    public List<JuheDayHistory> queryDayHistory(Date date) {
        String url ="http://api.juheapi.com/japi/toh";
        Map<String,String> params = new HashMap<String,String>();
        params.put("key","0139fb3f223f44c46058705a153da849");
        params.put("v","1.0");
        params.put("month",String.valueOf(date.getMonth() + 1));
        params.put("day",String.valueOf(date.getDate()));
        QueryDayHistoryResponse response = HttpClientUtil.post(url,params, QueryDayHistoryResponse.class);
        return response.getResult();
    }

    public static void main(String[] args) {
//        System.out.println(JsonUtil.toJson(new JuheClientImpl().queryToutiao(ToutiaoType.TOP)));
//        System.out.println(JsonUtil.toJson(new JuheClientImpl().queryToutiao(ToutiaoType.ENTERTAINMENT)));
        System.out.println(JsonUtil.toJson(new JuheClientImpl().queryDayHistory(new Date())));
        System.out.println(new Date().getMonth() + 1);
        System.out.println(new Date().getDate());
    }
}
