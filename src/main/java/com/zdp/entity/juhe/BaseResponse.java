package com.zdp.entity.juhe;

/**
 * Created by dapeng.zhou on 2016/8/3.
 */
public class BaseResponse {
    private int error_code;
    private String reason;

    public int getError_code() {
        return error_code;
    }

    public void setError_code(int error_code) {
        this.error_code = error_code;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public boolean invokeSuccess() {
        return this.error_code == 0;
    }
}
