package com.zdp.component.cache;


import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;
import com.zdp.component.cache.LocalCache;
import com.zdp.util.LogUtil;

import javax.annotation.PostConstruct;
import java.util.concurrent.TimeUnit;

/**
 * Created by dapeng.zhou on 2016/8/4.
 */
public abstract class AbstractLocalCache<T> implements LocalCache<T> {
    private LoadingCache<String,T> cache;

    public final T get(String key) {
        try {
            return cache.get(key);
        }catch (Exception e) {
            return null;
        }
    }

    public int tryTimes() {
        return 3;
    }

    public int expireSeconds() {
        return 5 * 60;
    }

    @PostConstruct
    public final void init() {
        CacheBuilder builder = CacheBuilder.newBuilder();
        builder.recordStats();
        builder.initialCapacity(500);
        builder.maximumSize(5000);
        builder.expireAfterWrite(expireSeconds(), TimeUnit.SECONDS);
        cache = builder.build(new CacheLoader<String, T>() {
            @Override
            public T load(String key) throws Exception {
                return loading(key);
            }
        });
    }

    private T loading(String key) {
        for (int i = 0;i < tryTimes();i++) {
            try {
                LogUtil.BIZ.info("本地缓存未命中，自动load，namespace=" + namespace() + ",key=" + key);
                return onMiss(key);
            }catch (Exception e) {
                LogUtil.BIZ.warn("本地缓存loading失败,namespace=" + namespace() + ",key=" + key + ",重试第" + i + "次",e);
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e1) {
                    e1.printStackTrace();
                }
            }
        }
        return null;
    }

}
