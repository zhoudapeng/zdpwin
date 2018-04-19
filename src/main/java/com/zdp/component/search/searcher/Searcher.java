package com.zdp.component.search.searcher;

import com.zdp.component.search.Dimension;
import com.zdp.component.search.Attribute;
import com.zdp.component.search.Entity;

import java.util.Set;

/**
 * Created by dapeng.zhou on 2016/8/29.
 */
public interface Searcher {
    /**
     * 搜索
     * @param value
     * @return
     */
    Set<Entity> search(Dimension dimension, String value);
}
