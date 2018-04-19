package com.zdp.service;

import com.zdp.entity.vo.ArticleVO;

import java.util.List;

/**
 * Created by dapeng.zhou on 2016/8/3.
 */
public interface ArticleService {
    List<ArticleVO> query(int page);
}
