package com.zdp.entity.juhe.toutiao;

import com.zdp.entity.juhe.BaseResponse;

import java.util.List;

/**
 * Created by dapeng.zhou on 2016/8/3.
 */
public class QueryToutiaoResult{
    private String stat;
    List<JuheToutiao> data;

    public String getStat() {
        return stat;
    }

    public void setStat(String stat) {
        this.stat = stat;
    }

    public List<JuheToutiao> getData() {
        return data;
    }

    public void setData(List<JuheToutiao> data) {
        this.data = data;
    }
}
