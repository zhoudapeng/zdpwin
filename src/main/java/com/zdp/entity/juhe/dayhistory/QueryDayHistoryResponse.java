package com.zdp.entity.juhe.dayhistory;

import com.zdp.entity.juhe.BaseResponse;

import java.util.List;

/**
 * Created by dapeng.zhou on 2016/8/4.
 */
public class QueryDayHistoryResponse extends BaseResponse {
    private List<JuheDayHistory> result;

    public List<JuheDayHistory> getResult() {
        return result;
    }

    public void setResult(List<JuheDayHistory> result) {
        this.result = result;
    }
}
