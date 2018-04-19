package com.zdp.component.search.spider;

import com.zdp.component.search.spider.pipeline.BuildIndexPipeLine;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.model.ConsolePageModelPipeline;
import us.codecraft.webmagic.model.OOSpider;
import us.codecraft.webmagic.model.annotation.ExtractBy;
import us.codecraft.webmagic.model.annotation.ExtractByUrl;
import us.codecraft.webmagic.model.annotation.TargetUrl;

/**
 * Created by dapeng.zhou on 2016/8/10.
 */
@TargetUrl("http://www.infoq.com/cn/news/\\d+/\\d+/[0-9a-zA-Z-]+")
public class InfoqSpider implements Spider {
    @ExtractBy("//h1[@class='general']/text()")
    private String title;
    @ExtractBy("//div[@class='text_info']")
    private String content;
    @ExtractByUrl
    private String url;

    public static void main(String[] args) {
        OOSpider.create(Site.me(),new BuildIndexPipeLine(),InfoqSpider.class).addUrl("http://www.infoq.com/cn").thread(2).run();
    }

    public void handle() {
        OOSpider.create(Site.me(),new BuildIndexPipeLine(),InfoqSpider.class).addUrl("http://www.infoq.com/cn/news/2016/08/big-data-jingdong-618").thread(2).run();
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
