package com.zdp.component.search.indexbuilder.impl;

import com.zdp.component.search.Dimension;
import com.zdp.component.search.Attribute;
import com.zdp.component.search.Entity;
import com.zdp.component.search.indexbuilder.IndexBuilder;
import com.zdp.util.LogUtil;
import org.apache.commons.collections.CollectionUtils;
import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.index.IndexWriter;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by dapeng.zhou on 2016/8/5.
 */
public class FileIndexBuilder implements IndexBuilder {

    public static void main(String[] args) throws Exception {
        String str = new File("..").getCanonicalPath() + File.separator + "index";
        System.out.println(str);
//        System.out.println(indexDir);
        Map<String, String> params = new HashMap<String, String>();
        params.put("name", "dapeng");
        params.put("age", "26");
//        new FileIndexBuilder().build(params);
        if (true) {
            return;
        }
        File fileDir = new File("D:\\qunar\\mycode\\src\\main\\java\\com\\zdp\\lucene");
        File indexDir = new File("D:\\index");
        Analyzer analyzer = new StandardAnalyzer();
        IndexWriter indexWriter = new IndexWriter(indexDir, analyzer, false);
        File[] textFiles = fileDir.listFiles();
        for (File textFile : textFiles) {
            if (!textFile.getName().endsWith(".txt")) {
                continue;
            }
            System.out.println("为" + textFile.getName() + "建索引");
            Field pathField = new Field("path", textFile.getAbsolutePath(), Field.Store.YES, Field.Index.TOKENIZED);
            Field contentField = new Field("content", readFile(textFile), Field.Store.YES, Field.Index.TOKENIZED);
            Field nameField = new Field("name", textFile.getName(), Field.Store.YES, Field.Index.TOKENIZED);
            Document document = new Document();
            document.add(pathField);
            document.add(contentField);
            document.add(nameField);
            indexWriter.addDocument(document);
            indexWriter.optimize();
            indexWriter.close();
        }
    }

    private static String readFile(File file) throws Exception {
        InputStream inputStream = new FileInputStream(file);
        byte[] buffer = new byte[1024];
        int n = -1;
        StringBuilder sb = new StringBuilder();
        while ((n = inputStream.read(buffer)) != -1) {
            sb.append(new String(buffer, 0, n));
        }
//        System.out.println(file.getName()+"的值为" + sb);
        return sb.toString();
    }

    public void build(Entity entity) {
        List<Attribute> attributes = entity.getAttributes();
        if (CollectionUtils.isEmpty(attributes)) {
            return;
        }
        IndexWriter indexWriter = null;
        Document document = new Document();
        Analyzer analyzer = new StandardAnalyzer();
        try {
            indexWriter = new IndexWriter(new File("index"), analyzer, false);
            for (Attribute attribute : attributes) {
                Field.Store store = Field.Store.YES;
                if (attribute.getDimension() == Dimension.content) {
                    store = Field.Store.NO;
                }
                Field field = new Field(attribute.getDimension().name(), attribute.getValue(), store, Field.Index.TOKENIZED);
                document.add(field);
            }
            indexWriter.addDocument(document);
            indexWriter.optimize();
            indexWriter.close();
        } catch (Exception e) {
            LogUtil.BIZ.warn("建索引异常", e);
        }
    }
}
