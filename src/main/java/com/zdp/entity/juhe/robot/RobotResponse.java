package com.zdp.entity.juhe.robot;

/**
 * Created by dapeng.zhou on 2016/9/23.
 */
public class RobotResponse {
    private String reason;
    private int error_code;
    private Result result;

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public int getError_code() {
        return error_code;
    }

    public void setError_code(int error_code) {
        this.error_code = error_code;
    }

    public Result getResult() {
        return result;
    }

    public void setResult(Result result) {
        this.result = result;
    }
}


