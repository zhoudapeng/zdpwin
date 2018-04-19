package com.zdp.component.search.spider.pipeline;

import com.zdp.component.search.Attribute;
import com.zdp.component.search.Dimension;
import com.zdp.component.search.Entity;
import com.zdp.component.search.engine.SearchEngine;
import com.zdp.component.search.engine.impl.FileSearchEngine;
import com.zdp.component.search.spider.InfoqSpider;
import us.codecraft.webmagic.Task;
import us.codecraft.webmagic.pipeline.PageModelPipeline;

/**
 * Created by dapeng.zhou on 2016/8/29.
 */
public class BuildIndexPipeLine implements PageModelPipeline<InfoqSpider> {
    private SearchEngine searchEngine = new FileSearchEngine();

    public void process(InfoqSpider infoqSpider, Task task) {
        Entity entity = new Entity();
        entity.addAttribute(new Attribute(Dimension.title,infoqSpider.getTitle()));
        entity.addAttribute(new Attribute(Dimension.content,infoqSpider.getContent()));
        entity.addAttribute(new Attribute(Dimension.url,infoqSpider.getUrl()));
        searchEngine.build(entity);
    }
}
