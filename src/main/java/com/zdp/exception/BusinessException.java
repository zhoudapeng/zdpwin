package com.zdp.exception;

/**
 * Created by dapeng.zhou on 2016/7/6.
 */
public class BusinessException extends RuntimeException {
    private ResultStatus status;

    public BusinessException(ResultStatus status) {
        this.status = status;
    }

    public ResultStatus getStatus() {
        return status;
    }

    public void setStatus(ResultStatus status) {
        this.status = status;
    }
}
