package com.zdp.component.search.engine.impl;

import com.zdp.component.search.Attribute;
import com.zdp.component.search.Dimension;
import com.zdp.component.search.Entity;
import com.zdp.component.search.engine.SearchEngine;
import com.zdp.component.search.indexbuilder.IndexBuilder;
import com.zdp.component.search.indexbuilder.impl.FileIndexBuilder;
import com.zdp.component.search.searcher.Searcher;
import com.zdp.component.search.searcher.impl.FileSearcher;
import org.springframework.stereotype.Component;

import java.util.Set;

/**
 * Created by dapeng.zhou on 2016/8/5.
 */
@Component("searchEngine")
public class FileSearchEngine implements SearchEngine {
    private IndexBuilder indexBuilder = new FileIndexBuilder();
    private Searcher searcher = new FileSearcher();

    public static void main(String[] args) throws Exception {
        Entity entity1 = new Entity();
        Entity entity2 = new Entity();
        entity1.addAttribute(new Attribute(Dimension.content,"我们都来自湖北"));
        entity1.addAttribute(new Attribute(Dimension.url,"http://www.zdpwin.com"));
        entity1.addAttribute(new Attribute(Dimension.title,"我们的故事"));
        entity2.addAttribute(new Attribute(Dimension.content,"我家都来自湖南"));
        entity2.addAttribute(new Attribute(Dimension.url,"http://www.zdpwin.com"));
        entity2.addAttribute(new Attribute(Dimension.title,"我的故事"));
        SearchEngine engine = new FileSearchEngine();
        engine.build(entity1);
        engine.build(entity2);
        System.out.println(engine.search(Dimension.content,"我家"));
        System.out.println(engine.search(Dimension.title,"我们"));
    }


    public void build(Entity entity) {
        indexBuilder.build(entity);
    }

    public Set<Entity> search(Dimension dimension, String value) {
        return searcher.search(dimension,value);
    }
}
