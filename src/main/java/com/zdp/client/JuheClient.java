package com.zdp.client;

import com.zdp.entity.juhe.hot.HotArticle;
import com.zdp.entity.juhe.toutiao.JuheToutiao;
import com.zdp.entity.juhe.toutiao.ToutiaoType;
import com.zdp.entity.juhe.dayhistory.JuheDayHistory;

import java.util.Date;
import java.util.List;

/**
 * Created by dapeng.zhou on 2016/8/3.
 */
public interface JuheClient {
    /**
     * 微信精选
     * @param page
     * @return
     */
    List<HotArticle> query(int page);

    List<JuheToutiao> queryToutiao(ToutiaoType type);

    List<JuheDayHistory> queryDayHistory(Date date);
}
