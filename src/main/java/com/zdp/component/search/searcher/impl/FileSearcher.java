package com.zdp.component.search.searcher.impl;

import com.google.common.collect.Sets;
import com.zdp.component.search.Dimension;
import com.zdp.component.search.Attribute;
import com.zdp.component.search.Entity;
import com.zdp.component.search.searcher.Searcher;
import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Field;
import org.apache.lucene.queryParser.QueryParser;
import org.apache.lucene.search.Hits;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;

import java.io.File;
import java.util.Set;

/**
 * Created by dapeng.zhou on 2016/8/29.
 */
public class FileSearcher implements Searcher {

    public Set<Entity> search(Dimension dimension, String value) {
        try {
            String indexPath = new File("index").getCanonicalPath();
//            System.out.println(indexPath);
            IndexSearcher searcher = new IndexSearcher(indexPath);
            Analyzer analyzer = new StandardAnalyzer();
            QueryParser parser = new QueryParser(dimension.name(), analyzer);
            Query query = parser.parse(value);
            Hits hits = searcher.search(query);
            System.out.println("hits:" + hits.length());
            Set<Entity> result = Sets.newHashSet();
            int length = hits.length();
            for (int i = 0; i < length; i++) {
                Entity entity = new Entity();
                for (Dimension dim:Dimension.values()) {
                    Field field = hits.doc(i).getField(dim.name());
                    if (field == null) {
                        continue;
                    }
                    String filedValue = field.stringValue();
                    if (filedValue != null) {
                        entity.addAttribute(new Attribute(dim,filedValue));
                    }
                }
                result.add(entity);
//                System.out.println(hits.doc(i).getField("path").stringValue());
            }
            return result;
        }catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static void main(String[] args) {
        Searcher searcher = new FileSearcher();
        System.out.println(searcher.search(Dimension.content,"负载"));
    }
}
