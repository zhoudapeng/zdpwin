package com.zdp.entity.juhe.toutiao;

import com.zdp.entity.juhe.BaseResponse;

/**
 * Created by dapeng.zhou on 2016/8/3.
 */
public class QueryToutiaoResponse extends BaseResponse {
    private QueryToutiaoResult result;

    public QueryToutiaoResult getResult() {
        return result;
    }

    public void setResult(QueryToutiaoResult result) {
        this.result = result;
    }
}
