package com.zdp.component.search;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by dapeng.zhou on 2016/8/29.
 */
public class Entity {
    private List<Attribute> attributes = new ArrayList<Attribute>();

    public List<Attribute> getAttributes() {
        return attributes;
    }

    public void setAttributes(List<Attribute> attributes) {
        this.attributes = attributes;
    }

    public void addAttribute(Attribute attribute) {
        attributes.add(attribute);
    }

    @Override
    public String toString() {
        return "Entity{" +
                "attributes=" + attributes +
                '}';
    }
}
