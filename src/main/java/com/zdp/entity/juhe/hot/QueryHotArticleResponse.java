package com.zdp.entity.juhe.hot;

import com.zdp.entity.juhe.BaseResponse;

/**
 * Created by dapeng.zhou on 2016/8/3.
 */
public class QueryHotArticleResponse extends BaseResponse {
    private QueryHotArticleResult result;

    public QueryHotArticleResult getResult() {
        return result;
    }

    public void setResult(QueryHotArticleResult result) {
        this.result = result;
    }

}
