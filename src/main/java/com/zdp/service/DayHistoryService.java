package com.zdp.service;

import com.zdp.entity.vo.DayHistoryVO;

import java.util.List;

/**
 * Created by dapeng.zhou on 2016/8/4.
 */
public interface DayHistoryService {
    List<DayHistoryVO> query();
}
