package com.zdp.component.cache;

/**
 * Created by dapeng.zhou on 2016/8/4.
 */
public enum Namespace {
    WECHAT_HOT("微信精选"),TOUTIAO("头条"),DAY_HISTORY("历史上的今天");
    private String desc;

    Namespace(String desc) {
        this.desc = desc;
    }

    public String getDesc() {
        return desc;
    }
}
