package com.zdp.annotation;

import java.lang.annotation.*;

/**
 * Created by dapeng.zhou on 2016/7/6.
 */
@Target({ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface JsonResponse {
}
