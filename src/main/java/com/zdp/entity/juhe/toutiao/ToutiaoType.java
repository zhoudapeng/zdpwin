package com.zdp.entity.juhe.toutiao;

/**
 * Created by dapeng.zhou on 2016/8/3.
 */
public enum ToutiaoType {
    TOP("top","头条，默认"),SOCIETY("shehui","社会"),ENTERTAINMENT("yule","娱乐"),SPORTS("tiyu","体育"),SCIENCE("keji","科技"),FINANCE("caijing","财经");
    private String name;
    private String desc;

    ToutiaoType(String name, String desc) {
        this.name = name;
        this.desc = desc;
    }

    public static ToutiaoType get(String typeName) {
        for (ToutiaoType toutiaoType:ToutiaoType.values()) {
            if (toutiaoType.toString().toLowerCase().equals(typeName)) {
                return toutiaoType;
            }
        }
        return null;
    }

    public String getName() {
        return name;
    }

    public String getDesc() {
        return desc;
    }
}
