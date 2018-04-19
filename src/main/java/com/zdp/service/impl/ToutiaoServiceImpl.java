package com.zdp.service.impl;

import com.google.common.collect.Lists;
import com.zdp.component.cache.LocalCache;
import com.zdp.entity.vo.ToutiaoVO;
import com.zdp.service.ToutiaoService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by dapeng.zhou on 2016/8/4.
 */
@Service
public class ToutiaoServiceImpl implements ToutiaoService {
    @Resource
    private LocalCache<List<ToutiaoVO>> toutiaoLocalCache;
    public List<ToutiaoVO> query(String typeName) {
        List<ToutiaoVO> toutiaoVOs = toutiaoLocalCache.get(typeName);
        if (toutiaoVOs == null) {
            toutiaoVOs = Lists.newArrayList();
        }
        return toutiaoVOs;
    }
}
