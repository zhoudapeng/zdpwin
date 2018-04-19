package com.zdp.component.cache;

/**
 * Created by dapeng.zhou on 2016/8/4.
 */
public interface LocalCache<T>  {

    T get(String key);

    int expireSeconds();

    T onMiss(String key);

    int tryTimes();

    Namespace namespace();

}
