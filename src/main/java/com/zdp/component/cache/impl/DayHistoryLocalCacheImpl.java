package com.zdp.component.cache.impl;

import com.google.common.collect.Lists;
import com.zdp.client.JuheClient;
import com.zdp.component.cache.AbstractLocalCache;
import com.zdp.component.cache.Namespace;
import com.zdp.entity.juhe.dayhistory.JuheDayHistory;
import com.zdp.entity.vo.DayHistoryVO;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * Created by dapeng.zhou on 2016/8/4.
 */
@Component("dayHistoryLocalCache")
public class DayHistoryLocalCacheImpl extends AbstractLocalCache<List<DayHistoryVO>> {
    @Resource
    private JuheClient juheClient;

    public List<DayHistoryVO> onMiss(String key) {
        List<JuheDayHistory> juheDayHistories = juheClient.queryDayHistory(new Date());
        List<DayHistoryVO> dayHistoryVOs = Lists.newArrayList();
        if (CollectionUtils.isEmpty(juheDayHistories)) {
            return dayHistoryVOs;
        }
        for (JuheDayHistory juheDayHistory:juheDayHistories) {
            DayHistoryVO dayHistoryVO = new DayHistoryVO();
            dayHistoryVO.setTitle(juheDayHistory.getTitle());
            String image = juheDayHistory.getPic();
            if (StringUtils.isEmpty(image)) {
                image = "/images/default.png";
            }
            dayHistoryVO.setImage(image);
            dayHistoryVO.setDes(juheDayHistory.getDes());
            dayHistoryVO.setDate(juheDayHistory.getYear() + "-" + juheDayHistory.getMonth() + "-" + juheDayHistory.getDay());
            dayHistoryVOs.add(dayHistoryVO);
        }
        return dayHistoryVOs;
    }

    public int expireSeconds() {
        return (int)TimeUnit.HOURS.toSeconds(8);
    }

    public Namespace namespace() {
        return Namespace.DAY_HISTORY;
    }
}
