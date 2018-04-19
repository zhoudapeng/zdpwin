package com.zdp.component.cache.impl;

import com.zdp.client.JuheClient;
import com.zdp.component.cache.AbstractLocalCache;
import com.zdp.component.cache.Namespace;
import com.zdp.entity.juhe.toutiao.JuheToutiao;
import com.zdp.entity.juhe.toutiao.ToutiaoType;
import com.zdp.entity.vo.ToutiaoVO;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by dapeng.zhou on 2016/8/4.
 */
@Component("toutiaoLocalCache")
public class ToutiaoLocalCacheImpl extends AbstractLocalCache<List<ToutiaoVO>>{
    @Resource
    private JuheClient juheClient;

    public List<ToutiaoVO> onMiss(String key) {
        ToutiaoType type = ToutiaoType.get(key);
        if (type == null) {
            return new ArrayList<ToutiaoVO>();
        }
        List<JuheToutiao> juheToutiaos = juheClient.queryToutiao(type);
        List<ToutiaoVO> toutiaoVOs = new ArrayList<ToutiaoVO>();
        for (JuheToutiao juheToutiao:juheToutiaos) {
            ToutiaoVO toutiaoVO = new ToutiaoVO();
            toutiaoVO.setDate(juheToutiao.getDate());
            toutiaoVO.setImage(buildImage(juheToutiao));
            toutiaoVO.setRealType(juheToutiao.getRealtype());
            toutiaoVO.setSource(juheToutiao.getAuthor_name());
            toutiaoVO.setTitle(juheToutiao.getTitle());
            toutiaoVO.setUrl(juheToutiao.getUrl());
            toutiaoVOs.add(toutiaoVO);
        }
        return toutiaoVOs;
    }

    private String buildImage(JuheToutiao juheToutiao) {
        String image = juheToutiao.getThumbnail_pic_s();
        if (StringUtils.isNotEmpty(image)) {
            return image;
        }
        image = juheToutiao.getThumbnail_pic_s02();
        if (StringUtils.isNotEmpty(image)) {
            return image;
        }
        image = juheToutiao.getThumbnail_pic_s03();
        if (StringUtils.isNotEmpty(image)) {
            return image;
        }
        return "/images/default.png";
    }

    public Namespace namespace() {
        return Namespace.TOUTIAO;
    }
}
