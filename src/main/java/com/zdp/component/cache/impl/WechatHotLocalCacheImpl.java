package com.zdp.component.cache.impl;

import com.zdp.client.JuheClient;
import com.zdp.component.cache.AbstractLocalCache;
import com.zdp.component.cache.Namespace;
import com.zdp.entity.juhe.hot.HotArticle;
import com.zdp.entity.vo.ArticleVO;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by dapeng.zhou on 2016/8/4.
 */
@Component("wechatHotLocalCache")
public class WechatHotLocalCacheImpl extends AbstractLocalCache<List<ArticleVO>> {
    @Resource
    private JuheClient juheClient;

    public List<ArticleVO> onMiss(String key) {
        List<HotArticle> hotArticles = juheClient.query(1);
        List<ArticleVO> articles = new ArrayList<ArticleVO>();
        for (HotArticle hotArticle:hotArticles) {
            ArticleVO article = new ArticleVO();
            String image = hotArticle.getFirstImg();
            if (StringUtils.isEmpty(image)) {
                image = "/images/default.png";
            }
            article.setImage(image);
            article.setSource(hotArticle.getSource());
            article.setTitle(hotArticle.getTitle());
            article.setUrl(hotArticle.getUrl());
            articles.add(article);
        }
        return articles;
    }

    public Namespace namespace() {
        return Namespace.WECHAT_HOT;
    }
}
