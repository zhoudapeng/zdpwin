package com.zdp.service;

import com.zdp.entity.vo.ToutiaoVO;

import java.util.List;

/**
 * Created by dapeng.zhou on 2016/8/4.
 */
public interface ToutiaoService {
    List<ToutiaoVO> query(String typeName);
}
