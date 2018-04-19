package com.zdp.component.search;

import org.apache.commons.lang.StringUtils;

/**
 * Created by dapeng.zhou on 2016/8/29.
 */
public class Attribute {
    private Dimension dimension;
    private String value;

    public Attribute(Dimension dimension, String value) {
        this.dimension = dimension;
        this.value = value;
    }

    public Dimension getDimension() {
        return dimension;
    }

    public void setDimension(Dimension dimension) {
        this.dimension = dimension;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (!(obj instanceof Attribute)) {
            return false;
        }
        if (this == obj) {
            return true;
        }
        Attribute entity = (Attribute) obj;
        return getDimension() == entity.getDimension() && StringUtils.equals(getValue(),entity.getValue());
    }

    @Override
    public String toString() {
        return "Attribute{" +
                "dimension=" + dimension +
                ", value='" + value + '\'' +
                '}';
    }
}
