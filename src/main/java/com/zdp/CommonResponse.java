package com.zdp;

import com.zdp.exception.ResultStatus;
import com.zdp.util.JsonUtil;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by dapeng.zhou on 2016/7/6.
 */
public class CommonResponse {
    private ResultStatus bstatus;
    private Object data;

    public CommonResponse() {
    }

    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        for (int i=0;i<1500;i++) {
            sb.append(i).append(",");
        }
        System.out.println(sb.substring(0,sb.length()-1));
    }

    public CommonResponse(ResultStatus bstatus, Object data) {
        this.bstatus = bstatus;
        this.data = data;
    }

    public ResultStatus getBstatus() {
        return bstatus;
    }

    public void setBstatus(ResultStatus bstatus) {
        this.bstatus = bstatus;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    @Override
    public String toString() {
        Map<String,Object> map = new HashMap<String,Object>();
        map.put("bstatus",bstatus.toString());
        map.put("data",data);
        return JsonUtil.toJson(map);
    }
}
