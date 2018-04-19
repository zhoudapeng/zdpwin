package com.zdp.service.impl;

import com.google.common.collect.Lists;
import com.zdp.component.cache.LocalCache;
import com.zdp.entity.vo.ArticleVO;
import com.zdp.service.ArticleService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by dapeng.zhou on 2016/8/3.
 */
@Service("articleService")
public class ArticleServiceImpl implements ArticleService {
    @Resource
    private LocalCache<List<ArticleVO>> wechatHotLocalCache;
    public List<ArticleVO> query(int page) {
        List<ArticleVO> articleVOs = wechatHotLocalCache.get("" + page);
        if (articleVOs == null) {
            articleVOs = Lists.newArrayList();
        }
        return articleVOs;
    }
}
