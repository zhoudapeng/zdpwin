package com.zdp.test;

import org.apache.commons.lang.StringUtils;

/**
 * Created by dapeng.zhou on 2016/9/12.
 */
public class Test {
    public static void main(String[] args) {
        String str = "朗、宏、胜、祥、毅、栋、启、伦、旭、群、达、坚、明、义、功、松、善、超、建、致、德";
        String[] words = str.replace("\n","").replace(" ","").split("、");
        for (int i=0;i<words.length;i++) {
            for (int j=0;j<words.length;j++) {
                if (i != j) {
                    System.out.println("周" + words[i] + words[j]);
                }
            }
        }
    }
}
