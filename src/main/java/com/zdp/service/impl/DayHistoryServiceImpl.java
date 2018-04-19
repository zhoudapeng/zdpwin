package com.zdp.service.impl;

import com.google.common.collect.Lists;
import com.zdp.component.cache.LocalCache;
import com.zdp.entity.vo.DayHistoryVO;
import com.zdp.service.DayHistoryService;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by dapeng.zhou on 2016/8/4.
 */
@Component("dayHistoryService")
public class DayHistoryServiceImpl implements DayHistoryService {
    @Resource
    private LocalCache<List<DayHistoryVO>> dayHistoryLocalCache;
    public List<DayHistoryVO> query() {
        List<DayHistoryVO> dayHistoryVOs = dayHistoryLocalCache.get("");
        if (dayHistoryVOs == null) {
            dayHistoryVOs = Lists.newArrayList();
        }
        return dayHistoryVOs;
    }
}
