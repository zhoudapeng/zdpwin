package com.zdp.util;

/**
 * Created by dapeng.zhou on 2016/7/6.
 */
public class TraceIdHolder {
    private static ThreadLocal<String> holder = new ThreadLocal<String>();

    public static void remove() {
        holder.remove();
    }

    public static void set(String traceId) {
        holder.set(traceId);
    }
}
