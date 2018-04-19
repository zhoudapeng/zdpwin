package com.zdp.component.search.indexbuilder;

import com.zdp.component.search.Attribute;
import com.zdp.component.search.Entity;

import java.util.List;

/**
 * Created by dapeng.zhou on 2016/8/29.
 */
public interface IndexBuilder {
    void build(Entity entity);
}
