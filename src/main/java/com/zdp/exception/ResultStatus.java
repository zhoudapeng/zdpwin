package com.zdp.exception;

/**
 * Created by dapeng.zhou on 2016/7/6.
 */
public enum ResultStatus {
    SUCCESS(0,"成功"),
    SYSTEM_ERR(-1,"系统错误");
    private int code ;
    private String des ;

    ResultStatus(int code, String des) {
        this.code = code;
        this.des = des;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getDes() {
        return des;
    }

    public void setDes(String des) {
        this.des = des;
    }

    @Override
    public String toString() {
        return "{" +
                "code=" + code +
                ", des='" + des + '\'' +
                '}';
    }
}
