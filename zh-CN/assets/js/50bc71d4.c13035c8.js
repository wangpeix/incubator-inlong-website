"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6406],{32885:function(n){n.exports=JSON.parse('{"blogPosts":[{"id":"/apache-inlong-0.11.0","metadata":{"permalink":"/zh-CN/blog/apache-inlong-0.11.0","editUrl":"https://github.com/apache/incubator-inlong-website/edit/master/blog/blog/apache-inlong-0.11.0.md","source":"@site/i18n/zh-CN/docusaurus-plugin-content-blog/apache-inlong-0.11.0.md","title":"0.11.0 \u7248\u672c\u53d1\u5e03","description":"Apache InLong(incubating) \u4ece 0.9.0 \u7248\u672c\u5f00\u59cb\u7531\u539f Apache TubeMQ\uff08incubating\uff09\u6539\u540d\u800c\u6765\uff0c\u4f34\u968f\u7740\u540d\u79f0\u7684\u6539\u53d8\uff0cInLong \u4e5f\u7531\u5355\u4e00\u7684\u6d88\u606f\u961f\u5217\u5347\u7ea7\u4e3a\u4e00\u7ad9\u5f0f\u7684\u6570\u636e\u96c6\u6210\u89e3\u51b3\u65b9\u6848\uff0c\u652f\u6301\u4e86\u5927\u6570\u636e\u9886\u57df\u7684\u91c7\u96c6\u3001\u6c47\u805a\u3001\u7f13\u5b58\u548c\u5206\u62e3\u529f\u80fd\uff0c\u7528\u6237\u53ea\u9700\u8981\u7b80\u5355\u7684\u914d\u7f6e\u5c31\u53ef\u4ee5\u628a\u6570\u636e\u4ece\u6570\u636e\u6e90\u5bfc\u5165\u5230\u5b9e\u65f6\u8ba1\u7b97\u5f15\u64ce\u6216\u8005\u843d\u5730\u5230\u79bb\u7ebf\u5b58\u50a8\u3002","date":"2022-02-08T02:19:32.939Z","formattedDate":"2022\u5e742\u67088\u65e5","tags":[],"readingTime":8.265,"truncated":false,"authors":[],"frontMatter":{"title":"0.11.0 \u7248\u672c\u53d1\u5e03","sidebar_position":2},"nextItem":{"title":"0.12.0 \u7248\u672c\u53d1\u5e03","permalink":"/zh-CN/blog/apache-inlong-0.12.0"}},"content":"Apache InLong(incubating) \u4ece 0.9.0 \u7248\u672c\u5f00\u59cb\u7531\u539f Apache TubeMQ\uff08incubating\uff09\u6539\u540d\u800c\u6765\uff0c\u4f34\u968f\u7740\u540d\u79f0\u7684\u6539\u53d8\uff0cInLong \u4e5f\u7531\u5355\u4e00\u7684\u6d88\u606f\u961f\u5217\u5347\u7ea7\u4e3a\u4e00\u7ad9\u5f0f\u7684\u6570\u636e\u96c6\u6210\u89e3\u51b3\u65b9\u6848\uff0c\u652f\u6301\u4e86\u5927\u6570\u636e\u9886\u57df\u7684\u91c7\u96c6\u3001\u6c47\u805a\u3001\u7f13\u5b58\u548c\u5206\u62e3\u529f\u80fd\uff0c\u7528\u6237\u53ea\u9700\u8981\u7b80\u5355\u7684\u914d\u7f6e\u5c31\u53ef\u4ee5\u628a\u6570\u636e\u4ece\u6570\u636e\u6e90\u5bfc\u5165\u5230\u5b9e\u65f6\u8ba1\u7b97\u5f15\u64ce\u6216\u8005\u843d\u5730\u5230\u79bb\u7ebf\u5b58\u50a8\u3002\\n\u521a\u521a\u53d1\u5e03\u7684 0.11.0-incubating \u7248\u672c\u662f\u6539\u540d\u4e4b\u540e\u7684\u7b2c\u4e09\u4e2a\u7248\u672c\uff0c\u8fd9\u4e2a\u7248\u672c\uff1a\\n- \u8fdb\u4e00\u6b65\u964d\u4f4e\u7528\u6237\u7684\u4f7f\u7528\u95e8\u69db\uff0c\u652f\u6301 InLong \u6240\u6709\u6a21\u5757 on Kubernets\uff0c\u5e76\u4e14\u5bf9\u5b98\u7f51\u8fdb\u884c\u4e86\u91cd\u6784\uff0c\u7528\u6237\u53ef\u4ee5\u66f4\u52a0\u65b9\u4fbf\u7684\u67e5\u9605\u76f8\u5173\u6587\u6863\\n- \u652f\u6301\u66f4\u591a\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u589e\u52a0 Dataproxy -> Pulsar \u7684\u6570\u636e\u6d41\u5411\uff0c\u8986\u76d6\u5bf9\u6570\u636e\u5b8c\u6574\u6027\u3001\u4e00\u81f4\u6027\u8981\u6c42\u66f4\u9ad8\u7684\u573a\u666f\\n- \u652f\u6301\u66f4\u591a\u8bed\u8a00\u7684 SDK\uff0c\u8fd9\u4e2a\u7248\u672c\u5f00\u653e\u4e86\u751f\u4ea7\u7ea7\u522b\u7684 TubeMQ Go SDK\uff0c\u65b9\u4fbf\u4f7f\u7528 Go \u8bed\u8a00\u7684\u7528\u6237\u63a5\u5165\\n\\n\u8be5\u7248\u672c\u5173\u95ed\u8d85\u8fc7 80 \u4e2a issue, \u5305\u542b\u4e86\u56db\u4e2a\u91cd\u5927 feature \u548c 35 \u4e2a improvements \u3002\\n\\n### Apache InLong(incubating) \u7b80\u4ecb\\n[Apache InLong\uff08\u5e94\u9f99\uff09](https://inlong.apache.org/zh-cn/)\u662f\u817e\u8baf\u6350\u732e\u7ed9 Apache \u793e\u533a\u7684\u4e00\u7ad9\u5f0f\u6570\u636e\u63a5\u5165\u5e73\u53f0\uff0c\u63d0\u4f9b\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u65b9\u4fbf\u4e1a\u52a1\u6784\u5efa\u57fa\u4e8e\u6d41\u5f0f\u7684\u6570\u636e\u5206\u6790\u3001\u5efa\u6a21\u548c\u5e94\u7528\u3002InLong \u9879\u76ee\u539f\u672c\u53ebTubeMQ \uff0c\u4e13\u6ce8\u9ad8\u6027\u80fd\u3001\u4f4e\u6210\u672c\u7684\u6d88\u606f\u961f\u5217\u670d\u52a1\u3002\u4e3a\u4e86\u8fdb\u4e00\u6b65\u91ca\u653e TubeMQ \u5468\u8fb9\u751f\u6001\u80fd\u529b\uff0c\u6211\u4eec\u5c06\u9879\u76ee\u5347\u7ea7\u4e3a InLong \uff0c\u4e13\u6ce8\u6253\u9020\u4e00\u7ad9\u5f0f\u7684\u6570\u636e\u96c6\u6210\u89e3\u51b3\u65b9\u6848\u3002\\n\\nApache InLong \u4ee5\u817e\u8baf\u5185\u90e8\u4f7f\u7528\u7684 TDBank \u4e3a\u539f\u578b\uff0c\u4f9d\u6258\u4e07\u4ebf\u7ea7\u522b\u7684\u6570\u636e\u63a5\u5165\u548c\u5904\u7406\u80fd\u529b\uff0c\u6574\u5408\u4e86\u6570\u636e\u91c7\u96c6\u3001\u6c47\u805a\u3001\u5b58\u50a8\u3001\u5206\u62e3\u6570\u636e\u5904\u7406\u5168\u6d41\u7a0b\uff0c\u62e5\u6709\u7b80\u5355\u6613\u7528\u3001\u7075\u6d3b\u6269\u5c55\u3001\u7a33\u5b9a\u53ef\u9760\u7b49\u7279\u6027\u3002\\n<img src=\\"/img/inlong_architecture.png\\" align=\\"center\\" alt=\\"Apache InLong\\"/>\\n\\n Apache InLong \u670d\u52a1\u4e8e\u6570\u636e\u91c7\u96c6\u5230\u843d\u5730\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\uff0c\u6309\u6570\u636e\u7684\u4e0d\u540c\u9636\u6bb5\u63d0\u4f9b\u4e0d\u540c\u7684\u5904\u7406\u6a21\u5757\uff0c\u4e3b\u8981\u5305\u62ec\uff1a\\n - **inlong-agent** \uff0c\u6570\u636e\u91c7\u96c6 Agent \uff0c\u652f\u6301\u4ece\u6307\u5b9a\u76ee\u5f55\u6216\u6587\u4ef6\u8bfb\u53d6\u5e38\u89c4\u65e5\u5fd7\uff0c\u8fdb\u884c\u9010\u6761\u7684\u6570\u636e\u4e0a\u62a5\u3002\u540e\u7eed\u4e5f\u5c06\u6269\u5c55 DB \u91c7\u96c6\uff0c\u6269\u5c55HTTP\u4e0a\u62a5\u7b49\u80fd\u529b\u3002\\n - **inlong-dataproxy** \uff0c\u4e00\u4e2a\u57fa\u4e8e Flume-ng \u7684 Proxy \u7ec4\u4ef6\uff0c\u652f\u6301\u6570\u636e\u53d1\u9001\u963b\u585e\u3001\u843d\u76d8\u91cd\u53d1\uff0c\u62e5\u6709\u5c06\u63a5\u6536\u6570\u636e\u540e\u8f6c\u53d1\u5230\u4e0d\u540cMQ\uff08\u6d88\u606f\u961f\u5217\uff09\u7684\u80fd\u529b\u3002\\n - **inlong-tubemq** \uff0c\u817e\u8baf\u81ea\u7814\u7684\u6d88\u606f\u961f\u5217\u670d\u52a1\uff0c\u4e13\u6ce8\u670d\u52a1\u5927\u6570\u636e\u573a\u666f\u4e0b\u6d77\u91cf\u6570\u636e\u7684\u9ad8\u6027\u80fd\u5b58\u50a8\u548c\u4f20\u8f93\uff0c\u5728\u6d77\u91cf\u5b9e\u8df5\u548c\u4f4e\u6210\u672c\u65b9\u9762\u6709\u7740\u6bd4\u8f83\u597d\u7684\u6838\u5fc3\u4f18\u52bf\u3002 \u6ce8\uff1aInLong 0.11.0 \u540e\u53f0\u4e2d\u589e\u52a0\u4e86\u5bf9\u4e8eApache Pulsar\u7684\u652f\u6301\uff0c\u5168\u6d41\u7a0b\u6570\u636e\u6d41\u548c\u7ba1\u63a7\u5de5\u4f5c\u4f1a\u5728\u4e0b\u4e2a\u7248\u672c\u5b8c\u6210\u3002\\n - **inlong-sort** \uff0c\u4ece\u4e0d\u540c\u7684 MQ \u6d88\u8d39\u6570\u636e\u540e\u8fdb\u884c ETL \u5904\u7406\uff0c\u7136\u540e\u5c06\u6570\u636e\u6c47\u805a\u5e76\u5199\u5165 Hive\u3001ClickHouse\u3001Hbase\u3001IceBerg \u7b49\u3002\\n - **inlong-manager** \uff0c\u63d0\u4f9b\u5b8c\u6574\u7684\u6570\u636e\u670d\u52a1\u7ba1\u63a7\u80fd\u529b\uff0c\u5305\u62ec\u5143\u6570\u636e\u3001OpenAPI\u3001\u4efb\u52a1\u6d41\u3001\u6743\u9650\u7b49\u3002\\n - **inlong-website** \uff0c\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406\u6570\u636e\u63a5\u5165\u7684\u524d\u7aef\u9875\u9762\uff0c\u7b80\u5316\u6574\u4e2a InLong \u7ba1\u63a7\u5e73\u53f0\u7684\u4f7f\u7528\u3002\\n\\n### Apache InLong(incubating) 0.11.0 \u4e3b\u8981\u7279\u6027\\n#### InLong on Kubernetes \\nInLong \u5305\u62ec\u4e86\u6570\u636e\u91c7\u96c6\uff0c\u6570\u636e\u6c47\u805a\uff0c\u6570\u636e\u7f13\u5b58\u3001\u6570\u636e\u5206\u62e3\u4ee5\u53ca\u96c6\u7fa4\u7ba1\u63a7\u7b49\u591a\u4e2a\u7ec4\u4ef6\uff0c\u4e3a\u4e86\u65b9\u4fbf\u7528\u6237\u4f7f\u7528\u548c\u652f\u6301\u4e91\u539f\u751f\u7279\u6027\uff0c\u76ee\u524d\u6240\u6709\u7684\u7ec4\u4ef6\u90fd\u5df2\u7ecf\u652f\u6301\u5728 Kubernetes \u90e8\u7f72\u3002\\n\u611f\u8c22 @shink \u8d21\u732e\u7684\u8fd9\u4e2a\u7279\u6027\uff0c\u5177\u4f53\u8be6\u60c5\u53ef\u4ee5\u53c2\u8003:\\n[INLONG-1308](https://github.com/apache/incubator-inlong/issues/1308)\\n\\n#### dataproxy->pulsar \u6570\u636e\u6d41\u6253\u901a\\n\u5728 0.11.0 \u7248\u672c\u4e4b\u524d\u7684\u7248\u672c\uff0cInLong \u7684\u6570\u636e\u7f13\u5b58\u5c42\u53ea\u80fd\u652f\u6301 TubeMQ\uff0cTubeMQ \u5f88\u9002\u5408\u4e8e\u8d85\u5927\u89c4\u6a21\u6570\u636e\u91cf\u7684\u573a\u666f\uff0c\u4f46\u5728\u6781\u7aef\u573a\u666f\u4e0b\u53ef\u80fd\u4f1a\u6709\u5c11\u91cf\u6570\u636e\u4e22\u5931\u7684\u98ce\u5411\uff1b\u4e3a\u4e86\u63d0\u4f9b\u6570\u636e\u53ef\u9760\u6027\uff0cInlong \u5728 0.11.0 \u7248\u672c\u4e2d\u589e\u52a0\u4e86\u5bf9\u4e8e Apache Pulsar \u7684\u652f\u6301\uff0c\u73b0\u5728InLong \u540e\u53f0\u53ef\u4ee5\u652f\u6301\u6570\u636e\u6d41\u53ef\u4ee5\u4ece agent -> dataProxy -> tubeMQ/pulsar -> sort.  Pulsar \u7684\u5f15\u5165\uff0c\u4f7f\u5f97 InLong \u8986\u76d6\u7684\u5e94\u7528\u573a\u666f\u66f4\u52a0\u4e30\u5bcc\uff0c\u53ef\u4ee5\u6ee1\u8db3\u66f4\u591a\u7528\u6237\u7684\u9700\u6c42\u3002\\n\u611f\u8c22 @baomingyu \u5bf9\u4e8e\u8fd9\u4e2a\u7279\u6027\u7684\u8d21\u732e\uff0c\u66f4\u591a\u8be6\u60c5\u53ef\u4ee5\u53c2\u8003:\\n[INLONG-1330](https://github.com/apache/incubator-inlong/issues/1330)\\n\\n#### Go \u8bed\u8a00 SDK\\n\u5728 0.11.0 \u7248\u672c\u4e4b\u524d\u7684 TubeMQ \u652f\u6301 Java \u3001C++\u3001 Python \u4e09\u79cd\u8bed\u8a00\u7684 SDK\uff0c\u968f\u7740 Go \u8bed\u8a00\u7684\u5e94\u7528\u8d8a\u6765\u8d8a\u591a\uff0c\u793e\u533a\u4e2d\u5bf9\u4e8e Go \u8bed\u8a00 SDK \u7684\u9700\u6c42\u4e5f\u65e5\u76ca\u589e\u52a0\uff0c0.11.0 \u7248\u672c\u6b63\u5f0f\u5f15\u5165\u4e86 TubeMQ \u7684 Go \u8bed\u8a00 SDK\u3002\u4e30\u5bcc\u4e86\u591a\u8bed\u8a00 SDK\uff0c\u4e5f\u964d\u4f4e\u4e86 Go \u8bed\u8a00\u7528\u6237\u7684\u63a5\u5165\u548c\u4f7f\u7528\u96be\u5ea6\u3002\\n\u611f\u8c22 @TszKitLo40 \u8d21\u732e\u7684\u8fd9\u4e2a\u7279\u6027\uff0c\u66f4\u591a\u8be6\u60c5\u53ef\u4ee5\u53c2\u8003\uff1a\\n[INLONG-624](https://github.com/apache/incubator-inlong/issues/624)\\n[INLONG-1578](https://github.com/apache/incubator-inlong/issues/1570)\\n[INLONG-1584](https://github.com/apache/incubator-inlong/issues/1584)\\n[INLONG-1666](https://github.com/apache/incubator-inlong/issues/1666)\\n[INLONG-1682](https://github.com/apache/incubator-inlong/issues/1682)\\n\\n#### \u5b98\u7f51\u91cd\u6784\\n\u5728 0.11.0 \u7248\u672c\u4e2d\uff0cInLong \u91c7\u7528 Docusaurus \u91cd\u6784\u4e86[\u5b98\u7f51](https://inlong.apache.org/)\uff0c\u63d0\u4f9b\u4e86\u66f4\u52a0\u7b80\u6d01\u3001\u76f4\u89c2\u7684\u6587\u6863\u7ba1\u7406\u548c\u5c55\u793a\u3002\\n\u611f\u8c22 @leezng \u5bf9\u4e8e\u8fd9\u4e2a\u7279\u6027\u7684\u8d21\u732e\u3002\u66f4\u591a\u8be6\u60c5\u53ef\u4ee5\u53c2\u8003\uff1a\\n[INLONG-1631](https://github.com/apache/incubator-inlong/issues/1631)\\n[INLONG-1632](https://github.com/apache/incubator-inlong/issues/1632)\\n[INLONG-1633](https://github.com/apache/incubator-inlong/issues/1633)\\n[INLONG-1634](https://github.com/apache/incubator-inlong/issues/1634)\\n[INLONG-1635](https://github.com/apache/incubator-inlong/issues/1635)\\n[INLONG-1636](https://github.com/apache/incubator-inlong/issues/1636)\\n[INLONG-1637](https://github.com/apache/incubator-inlong/issues/1637)\\n[INLONG-1638](https://github.com/apache/incubator-inlong/issues/1638)\\n\\n\u9664\u4e86\u4e0a\u8ff0\u91cd\u5927 feature \u4e4b\u5916\uff0cInLong 0.11.0 \u7248\u672c\u8fd8\u6709\u5176\u4ed6\u7684\u5173\u952e\u6539\u8fdb\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a\\n- \u5728\u4e3b Repo \u4e2d\u589e\u52a0\u4e86\u8d21\u732e\u6307\u5f15\uff0c[INLONG-1623](https://github.com/apache/incubator-inlong/issues/1623)\\n- \u589e\u52a0 Inlong-Manager \u5bf9 DataProxy \u7684\u914d\u7f6e\u7ba1\u7406\uff0c[INLONG-1595](https://github.com/apache/incubator-inlong/issues/1595)\\n- \u4f18\u5316\u4e86 github issue \u6a21\u677f\uff0c[INLONG-1585](https://github.com/apache/incubator-inlong/issues/1585)\\n- \u4ee3\u7801 Checkstyle \u4f18\u5316\uff0c[INLONG-1571](https://github.com/apache/incubator-inlong/issues/1571), [INLONG-1593](https://github.com/apache/incubator-inlong/issues/1593), [INLONG-1593](https://github.com/apache/incubator-inlong/issues/1593), [INLONG-1662](https://github.com/apache/incubator-inlong/issues/1662)\\n- Agent \u5f15\u5165\u6d88\u606f\u8fc7\u6ee4\u5668\uff0c[INLONG-1641](https://github.com/apache/incubator-inlong/issues/1641)\\n\\n0.11.0 \u7248\u672c\u8fd8\u4fee\u590d\u4e86~45\u4e2abug\uff0c\u5728\u6b64\uff0c\u611f\u8c22\u6240\u6709\u4e3a Inlong \u793e\u533a\u505a\u51fa\u8d21\u732e\u7684\u5404\u4f4d\u540c\u5b66\uff08\u6392\u540d\u4e0d\u5206\u5148\u540e\uff09\\nshink, baomingyu, TszKitLo40, leezng, ruanwenjun, leo65535, luchunliang, pierre94, EMsnap, dockerzhang, gosonzhang, healchow, guangxuCheng, yuanboliu\\n\\n\\n### Apache InLong(incubating) \u540e\u7eed\u89c4\u5212\\n\u5728 InLong \u540e\u7eed\u7248\u672c\u89c4\u5212\u4e2d\uff0c\u6211\u4eec\u4f1a\u8fdb\u4e00\u6b65\u91ca\u653e InLong \u7684\u80fd\u529b\uff0c\u8986\u76d6\u66f4\u591a\u7684\u4f7f\u7528\u573a\u666f\uff0c\u4e3b\u8981\u5305\u62ec\\n\\n- \u652f\u6301 Apache Pulsar \u5168\u94fe\u8def\u6570\u636e\u63a5\u5165\u80fd\u529b\uff0c\u5305\u62ec\u540e\u7aef\u5904\u7406\u548c\u524d\u7aef\u7ba1\u7406\u80fd\u529b\u3002\\n- \u652f\u6301 ClickHouse\u3001Apache Iceberg\u3001Apache HBase \u7b49\u6570\u636e\u6d41\u5411\\n\\n### Apache InLong(incubating) \u8d21\u732e\u8005\u62db\u52df\\nApache InLong(incubating) \u5f53\u524d\u7684 contributor \u5171\u8ba162\u540d\uff0c\u8fd8\u5904\u5728\u9879\u76ee\u5b75\u5316\u7684\u521d\u671f\uff0c\u6709\u5f88\u591a\u5de5\u4f5c\u9700\u8981\u505a\uff0c\u5305\u62ec\u793e\u533a\u8fd0\u8425\u3001\u6587\u6863\u7ffb\u8bd1\u3001Feature \u5f00\u53d1\u7b49\uff0c\u671f\u5f85\u66f4\u591a\u7684\u5f00\u6e90\u7231\u597d\u8005\u4e00\u8d77\u5171\u5efa\uff0c\u52aa\u529b\u5c06 InLong \u6253\u9020\u6210 Apache \u9876\u7ea7\u9879\u76ee\uff0c\u4ee5\u4e0b\u4e3a InLong \u91cd\u8981\u53d1\u5c55\u65f6\u95f4\u70b9\uff1a\\n- 2021\u5e7411\u67085\u65e5\uff0c\u53d1\u5e030.11.0\u7248\u672c\\n- 2021\u5e749\u67083\u65e5\uff0c\u53d1\u5e030.10.0\u7248\u672c\\n- 2021\u5e747\u670812\u65e5\uff0c\u53d1\u8d77\u66f4\u540d\u540e\u7b2c\u4e00\u4e2a\u7248\u672c 0.9.0 \u6295\u7968\\n- 2021\u5e744\u670811\u65e5\uff0c\u5b8c\u6210\u793e\u533a\u6539\u540d\uff0c\u8c03\u6574\u4e3a Apache InLong\\n- 2021\u5e742\u670811\u65e5\uff0c\u53d1\u8d77\u793e\u533a\u6539\u540d\u53d8\u66f4\u7533\u8bf7\\n- 2020\u5e7412\u670820\u65e5\uff0c\u8fdb\u884c\u9879\u76ee\u6539\u540d\u8ba8\u8bba\u548c\u6295\u7968\\n- 2020\u5e745\u670830\u65e5\uff0c\u6309\u7167 Apache \u793e\u533a\u89c4\u8303\u53d1\u5e03\u7b2c\u4e00\u4e2a\u793e\u533a\u7248\u672c\\n- 2019\u5e7411\u67083\u65e5\uff0c\u8fdb\u5165 Apache \u793e\u533a\u5b75\u5316\\n- 2019\u5e749\u670812\u65e5\uff0cTubeMQ \u5bf9\u5916\u5f00\u6e90\u5e76\u6350\u732e\u7ed9 Apache \u793e\u533a"},{"id":"/apache-inlong-0.12.0","metadata":{"permalink":"/zh-CN/blog/apache-inlong-0.12.0","editUrl":"https://github.com/apache/incubator-inlong-website/edit/master/blog/blog/apache-inlong-0.12.0.md","source":"@site/i18n/zh-CN/docusaurus-plugin-content-blog/apache-inlong-0.12.0.md","title":"0.12.0 \u7248\u672c\u53d1\u5e03","description":"InLong(\u5e94\u9f99) : \u4e2d\u56fd\u795e\u8bdd\u6545\u4e8b\u91cc\u7684\u795e\u517d\uff0c\u5f15\u6d41\u5165\u6d77\uff0c\u501f\u55bb InLong \u7cfb\u7edf\u63d0\u4f9b\u6570\u636e\u63a5\u5165\u80fd\u529b\u3002","date":"2022-02-08T02:19:32.939Z","formattedDate":"2022\u5e742\u67088\u65e5","tags":[],"readingTime":8.65,"truncated":false,"authors":[],"frontMatter":{"title":"0.12.0 \u7248\u672c\u53d1\u5e03","sidebar_position":1},"prevItem":{"title":"0.11.0 \u7248\u672c\u53d1\u5e03","permalink":"/zh-CN/blog/apache-inlong-0.11.0"}},"content":"InLong(\u5e94\u9f99) : \u4e2d\u56fd\u795e\u8bdd\u6545\u4e8b\u91cc\u7684\u795e\u517d\uff0c\u5f15\u6d41\u5165\u6d77\uff0c\u501f\u55bb InLong \u7cfb\u7edf\u63d0\u4f9b\u6570\u636e\u63a5\u5165\u80fd\u529b\u3002\\n\\nApache InLong\uff08\u5e94\u9f99\uff09\u662f\u4e00\u4e2a\u4e00\u7ad9\u5f0f\u7684\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0c\u63d0\u4f9b\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u540c\u65f6\u652f\u6301\u6279\u548c\u6d41\uff0c\u65b9\u4fbf\u4e1a\u52a1\u6784\u5efa\u57fa\u4e8e\u6d41\u5f0f\u7684\u6570\u636e\u5206\u6790\u3001\u5efa\u6a21\u548c\u5e94\u7528\u3002InLong\u652f\u6301\u5927\u6570\u636e\u9886\u57df\u7684\u91c7\u96c6\u3001\u6c47\u805a\u3001\u7f13\u5b58\u548c\u5206\u62e3\u529f\u80fd\uff0c\u7528\u6237\u53ea\u9700\u8981\u7b80\u5355\u7684\u914d\u7f6e\u5c31\u53ef\u4ee5\u628a\u6570\u636e\u4ece\u6570\u636e\u6e90\u5bfc\u5165\u5230\u5b9e\u65f6\u8ba1\u7b97\u5f15\u64ce\u6216\u8005\u843d\u5730\u5230\u79bb\u7ebf\u5b58\u50a8\u3002\\n\\n\u521a\u521a\u53d1\u5e03\u7684 0.12.0-incubating \u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u5185\u5bb9\uff1a\\n- \u63d0\u4f9b\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u540c\u65f6\u652f\u6301\u6279\u548c\u6d41\\n- \u5bf9\u5b98\u7f51\u6587\u6863\u7ed3\u6784\u8fdb\u884c\u91cd\u6784\uff0c\u65b9\u4fbf\u7528\u6237\u6839\u636e\u4e3b\u7ebf\u67e5\u9605\u76f8\u5173\u6587\u6863\\n- \u5168\u6d41\u7a0b\u652f\u6301Pulsar\u6570\u636e\u6d41\u5411\uff0c\u5b8c\u6210\u9ad8\u6027\u80fd\u3001\u9ad8\u53ef\u9760\u573a\u666f\u7684\u5168\u6d41\u7a0b\u8986\u76d6\\n- \u5168\u6d41\u7a0b\u652f\u6301\u6307\u6807\uff0c\u5305\u62ec JMX \u548c Prometheus \u8f93\u51fa\\n- \u6570\u636e\u5ba1\u8ba1\u5bf9\u8d26\u4e00\u671f\uff0c\u5c06\u5ba1\u8ba1\u6570\u636e\u5199\u5165 MySQL\\n\\n\u8be5\u7248\u672c\u5173\u95ed\u4e86\u7ea6 120+ \u4e2a issue\uff0c\u5305\u542b\u56db\u4e2a\u91cd\u5927 feature \u548c 35 \u4e2a improvements\u3002\\n\\n### Apache InLong(incubating) \u7b80\u4ecb\\n[Apache InLong\uff08\u5e94\u9f99\uff09](https://inlong.apache.org/zh-cn/) \u662f\u817e\u8baf\u6350\u732e\u7ed9 Apache \u793e\u533a\u7684\u4e00\u7ad9\u5f0f\u7684\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0c\u63d0\u4f9b\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u65b9\u4fbf\u4e1a\u52a1\u6784\u5efa\u57fa\u4e8e\u6d41\u5f0f\u7684\u6570\u636e\u5206\u6790\u3001\u5efa\u6a21\u548c\u5e94\u7528\u3002 InLong \u9879\u76ee\u539f\u540d TubeMQ \uff0c\u4e13\u6ce8\u4e8e\u9ad8\u6027\u80fd\u3001\u4f4e\u6210\u672c\u7684\u6d88\u606f\u961f\u5217\u670d\u52a1\u3002\u4e3a\u4e86\u8fdb\u4e00\u6b65\u91ca\u653e TubeMQ \u5468\u8fb9\u7684\u751f\u6001\u80fd\u529b\uff0c\u6211\u4eec\u5c06\u9879\u76ee\u5347\u7ea7\u4e3a InLong\uff0c\u4e13\u6ce8\u6253\u9020\u4e00\u7ad9\u5f0f\u6570\u636e\u6d41\u63a5\u5165\u670d\u52a1\u5e73\u53f0\u3002\\n\\nApache InLong \u4ee5\u817e\u8baf\u5185\u90e8\u4f7f\u7528\u7684 TDBank \u4e3a\u539f\u578b\uff0c\u5177\u6709\u4e07\u4ebf\u7ea7\u6570\u636e\u7684\u63a5\u5165\u548c\u5904\u7406\u80fd\u529b\uff0c\u6574\u5408\u4e86\u6570\u636e\u91c7\u96c6\u3001\u6c47\u805a\u3001\u5b58\u50a8\u3001\u5206\u62e3\u6570\u636e\u5904\u7406\u5168\u6d41\u7a0b\uff0c\u62e5\u6709\u7b80\u5355\u6613\u7528\u3001\u7075\u6d3b\u6269\u5c55\u3001\u7a33\u5b9a\u53ef\u9760\u7b49\u7279\u6027\u3002\\n<img src=\\"/img/inlong_architecture.png\\" align=\\"center\\" alt=\\"Apache InLong\\"/>\\n\\n Apache InLong \u670d\u52a1\u4e8e\u6570\u636e\u91c7\u96c6\u5230\u843d\u5730\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\uff0c\u6309\u6570\u636e\u7684\u4e0d\u540c\u9636\u6bb5\u63d0\u4f9b\u4e0d\u540c\u7684\u5904\u7406\u6a21\u5757\uff0c\u4e3b\u8981\u5305\u62ec\uff1a\\n - **inlong-agent** \uff0c\u6570\u636e\u91c7\u96c6 Agent \uff0c\u652f\u6301\u4ece\u6307\u5b9a\u76ee\u5f55\u6216\u6587\u4ef6\u8bfb\u53d6\u5e38\u89c4\u65e5\u5fd7\uff0c\u8fdb\u884c\u9010\u6761\u7684\u6570\u636e\u4e0a\u62a5\u3002\u540e\u7eed\u4e5f\u5c06\u6269\u5c55 DB \u91c7\u96c6\uff0c\u6269\u5c55HTTP\u4e0a\u62a5\u7b49\u80fd\u529b\u3002\\n - **inlong-dataproxy** \uff0c\u4e00\u4e2a\u57fa\u4e8e Flume-ng \u7684 Proxy \u7ec4\u4ef6\uff0c\u652f\u6301\u6570\u636e\u53d1\u9001\u963b\u585e\u3001\u843d\u76d8\u91cd\u53d1\uff0c\u62e5\u6709\u5c06\u63a5\u6536\u6570\u636e\u540e\u8f6c\u53d1\u5230\u4e0d\u540cMQ\uff08\u6d88\u606f\u961f\u5217\uff09\u7684\u80fd\u529b\u3002\\n - **inlong-tubemq** \uff0c\u817e\u8baf\u81ea\u7814\u7684\u6d88\u606f\u961f\u5217\u670d\u52a1\uff0c\u4e13\u6ce8\u670d\u52a1\u5927\u6570\u636e\u573a\u666f\u4e0b\u6d77\u91cf\u6570\u636e\u7684\u9ad8\u6027\u80fd\u5b58\u50a8\u548c\u4f20\u8f93\uff0c\u5728\u6d77\u91cf\u5b9e\u8df5\u548c\u4f4e\u6210\u672c\u65b9\u9762\u6709\u7740\u6bd4\u8f83\u597d\u7684\u6838\u5fc3\u4f18\u52bf\u3002\\n - **inlong-sort** \uff0c\u4ece\u4e0d\u540c\u7684 MQ \u6d88\u8d39\u6570\u636e\u540e\u8fdb\u884c ETL \u5904\u7406\uff0c\u7136\u540e\u5c06\u6570\u636e\u6c47\u805a\u5e76\u5199\u5165 Hive\u3001ClickHouse\u3001Hbase\u3001IceBerg \u7b49\u3002\\n - **inlong-manager** \uff0c\u63d0\u4f9b\u5b8c\u6574\u7684\u6570\u636e\u670d\u52a1\u7ba1\u63a7\u80fd\u529b\uff0c\u5305\u62ec\u5143\u6570\u636e\u3001OpenAPI\u3001\u4efb\u52a1\u6d41\u3001\u6743\u9650\u7b49\u3002\\n - **inlong-website** \uff0c\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406\u6570\u636e\u63a5\u5165\u7684\u524d\u7aef\u9875\u9762\uff0c\u7b80\u5316\u6574\u4e2a InLong \u7ba1\u63a7\u5e73\u53f0\u7684\u4f7f\u7528\u3002\\n\\n### Apache InLong(incubating) 0.12.0 \u4e3b\u8981\u7279\u6027\\n#### 1. \u6253\u901a Apache Pulsar \u5168\u94fe\u8def\\n\u5728 0.12.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u8865\u9f50\u4e86 FileAgent \u2192 DataProxy \u2192 Pulsar \u2192 Sort \u7684\u6570\u636e\u4e0a\u62a5\u80fd\u529b\uff0c\u81f3\u6b64\uff0cInLong \u652f\u6301\u9ad8\u6027\u80fd\u548c\u9ad8\u53ef\u9760\u6570\u636e\u63a5\u5165\u573a\u666f\uff1a\u76f8\u6bd4\u9ad8\u541e\u5410\u7684 TubeMQ\uff0cApache Pulsar\u80fd\u63d0\u4f9b\u66f4\u597d\u7684\u6570\u636e\u4e00\u81f4\u6027\uff0c\u66f4\u9002\u7528\u4e8e\u91d1\u878d\u3001\u8ba1\u8d39\u7b49\u5bf9\u6570\u636e\u53ef\u9760\u6027\u8981\u6c42\u6781\u9ad8\u7684\u573a\u666f\u3002\\n<img src=\\"/img/pulsar-arch-zh.png\\" align=\\"center\\" alt=\\"Report via Pulsar\\"/>\\n\\n\u611f\u8c22 @healzhou\u3001 @baomingyu\u3001@leezng\u3001@bruceneenhl\u3001@ifndef-SleePy \u7b49\u540c\u5b66\u5bf9\u8fd9\u4e2a\u7279\u6027\u7684\u8d21\u732e\uff0c\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003\uff0c\u76f8\u5173 PR \u89c1 [INLONG-1310](https://github.com/apache/incubator-inlong/issues/1310) \uff0c\u4f7f\u7528\u6307\u5f15\u89c1 [Pulsar\u4f7f\u7528\u793a\u4f8b](https://inlong.apache.org/zh-CN/docs/next/quick_start/pulsar_example/) \u3002\\n\\n#### 2. \u652f\u6301 JMX \u548c Prometheus \u6307\u6807\\n\u5728\u5df2\u6709\u7684\u4ee5\u6587\u4ef6\u8f93\u51fa\u6307\u6807\u4e4b\u5916\uff0cInLong \u7684\u5404\u4e2a\u7ec4\u4ef6\u5f00\u59cb\u9010\u6b65\u652f\u6301 JMX \u548c Prometheus \u6307\u6807\u7684\u8f93\u51fa\uff0c\u4ee5\u63d0\u5347\u6574\u4e2a\u7cfb\u7edf\u7684\u53ef\u89c1\u6027\u3002\u76ee\u524d\u5305\u62ec Agent\uff0cDataProxy\uff0cTubeMQ\uff0cSort-Standalone \u7b49\u6a21\u5757\u5df2\u7ecf\u652f\u6301\u4e0a\u8ff0\u6307\u6807\uff0c\u5404\u4e2a\u6a21\u5757\u8f93\u51fa\u7684\u6307\u6807\u7684\u6587\u6863\u6b63\u5728\u6574\u7406\u4e2d\u3002\\n\\n\u611f\u8c22 @shink\uff0c@luchunliang\uff0c@EMsnap\uff0c@gosonzhang \u7b49\u540c\u5b66\u7684\u8d21\u732e\uff0c\u76f8\u5173 PR \u89c1[INLONG-1712](https://github.com/apache/incubator-inlong/issues/1712) \uff0c[INLONG-1786](https://github.com/apache/incubator-inlong/issues/1786) \uff0c[INLONG-1796](https://github.com/apache/incubator-inlong/issues/1796) \uff0c[INLONG-1827](https://github.com/apache/incubator-inlong/issues/1827) \uff0c[INLONG-1851](https://github.com/apache/incubator-inlong/issues/1851) \uff0c[INLONG-1926](https://github.com/apache/incubator-inlong/issues/1926) \u3002\\n\\n#### 3. \u6a21\u5757\u80fd\u529b\u6269\u5145\\nSort \u6a21\u5757\u589e\u52a0\u4e86\u5bf9 Apache Doris \u5b58\u50a8\u7684\u652f\u6301\uff0c\u5b9e\u73b0\u4e86 Sort \u5206\u62e3\u6570\u636e\u843d\u5730\u5230 Apache Doris \u7684\u80fd\u529b\uff0c\u4f7f InLong \u7684\u5165\u5e93\u9009\u62e9\u53c8\u591a\u4e86\u4e00\u9879\u3002\u6b64\u5916\uff0c\u4e3a\u4e86\u4e30\u5bcc\u6570\u636e\u63a5\u5165\u5168\u6d41\u7a0b\u7684\u529f\u80fd\uff0c\u589e\u52a0\u4e86 Audit\u3001Sort-Standalone \u6a21\u5757\uff1a\\n- Audit \u6a21\u5757\u63d0\u4f9b\u6570\u636e\u6d41\u5168\u6d41\u7a0b\u7684\u5bf9\u8d26\u80fd\u529b\uff0c\u901a\u8fc7\u6570\u636e\u6d41\u6307\u6807\u6765\u76d1\u63a7\u7cfb\u7edf\u7684\u670d\u52a1\u8d28\u91cf\uff1b\\n- Sort-Standalone \u6a21\u5757\u662f\u4e00\u4e2a\u4e0d\u57fa\u4e8e Flink \u7684\u6570\u636e\u5206\u62e3\u6a21\u5757\uff0c\u7ed9\u7cfb\u7edf\u589e\u52a0\u4e86\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u6570\u636e\u5206\u62e3\u80fd\u529b\uff0c\u4fbf\u4e8e\u4e1a\u52a1\u5feb\u901f\u642d\u5efa\u53ca\u4f7f\u7528\u3002\\n\\nAudit\u3001Sort-Standalone \u6a21\u5757\u4ecd\u5728\u5f00\u53d1\u4e2d\uff0c\u7248\u672c\u7a33\u5b9a\u540e\u5c06\u5bf9\u5916\u53d1\u5e03\u4f7f\u7528\u3002\\n\\n\u611f\u8c22 @huzk8\uff0c@doleyzi\uff0c@luchunliang \u7b49\u540c\u5b66\u7684\u8d21\u732e\uff0c\u76f8\u5173 PR \u89c1 [INLONG-1821](https://github.com/apache/incubator-inlong/issues/1821) \uff0c[INLONG-1738](https://github.com/apache/incubator-inlong/issues/1738) \uff0c[INLONG-1889](https://github.com/apache/incubator-inlong/issues/1889) \u3002\\n\\n#### 4. \u5b98\u7f51\u6587\u6863\u76ee\u5f55\u91cd\u6784\\n0.12.0 \u7248\u672c\u5bf9\u529f\u80fd\u6a21\u5757\u7684\u6539\u8fdb\u4e4b\u5916\uff0c\u5b98\u7f51\u7ed3\u6784\u4ee5\u53ca\u4f7f\u7528\u6587\u6863\u65b9\u9762\u4e5f\u505a\u4e86\u6df1\u5ea6\u8c03\u6574\uff0c\u5305\u62ec\u91cd\u6784\u6587\u6863\u7684\u76ee\u5f55\u7ed3\u6784\uff0c\u8865\u5145\u5b8c\u5584\u5404\u4e2a\u6a21\u5757\u7684\u529f\u80fd\u4ecb\u7ecd\uff0c\u589e\u52a0\u6587\u6863\u7ffb\u8bd1\uff0c\u8fdb\u4e00\u6b65\u63d0\u9ad8 InLong \u5b98\u7f51\u7684\u6587\u6863\u53ef\u9605\u8bfb\u6027\uff0c\u5b9e\u73b0\u5feb\u901f\u67e5\u627e\u3001\u65b9\u4fbf\u9605\u8bfb\u3002\u8fd9\u5757\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b\u5b98\u7f51\u8fdb\u884c\u4e86\u89e3\uff0c\u76ee\u524d\u6587\u6863\u8fd8\u5728\u6301\u7eed\u5efa\u8bbe\u4e2d\uff0c\u6b22\u8fce\u5927\u5bb6\u63d0\u51fa\u5b9d\u8d35\u7684\u610f\u89c1\u6216\u5efa\u8bae\u3002\\n\\n\u611f\u8c22 @bluewang\uff0c@dockerzhang\uff0c@healchow \u7b49\u540c\u5b66\u7684\u8d21\u732e\uff0c\u76f8\u5173 PR \u89c1 [INLONG-1711](https://github.com/apache/incubator-inlong/issues/1711) \uff0c[INLONG-1740](https://github.com/apache/incubator-inlong/issues/1740) \uff0c[INLONG-1802](https://github.com/apache/incubator-inlong/issues/1802) \uff0c[INLONG-1809](https://github.com/apache/incubator-inlong/issues/1809) \uff0c[INLONG-1810](https://github.com/apache/incubator-inlong/issues/1810) \uff0c[INLONG-1815](https://github.com/apache/incubator-inlong/issues/1815) \uff0c[INLONG-1822](https://github.com/apache/incubator-inlong/issues/1822) \uff0c[INLONG-1840](https://github.com/apache/incubator-inlong/issues/1840) \uff0c[INLONG-1856](https://github.com/apache/incubator-inlong/issues/1856) \uff0c[INLONG-1861](https://github.com/apache/incubator-inlong/issues/1861) \uff0c[INLONG-1867](https://github.com/apache/incubator-inlong/issues/1867) \uff0c[INLONG-1878](https://github.com/apache/incubator-inlong/issues/1878) \uff0c[INLONG-1901](https://github.com/apache/incubator-inlong/issues/1901) \uff0c[INLONG-1939](https://github.com/apache/incubator-inlong/issues/1939) \u3002\\n\\n#### 5. \u5176\u4ed6\u7279\u6027\u53ca\u95ee\u9898\u4fee\u590d\\n\u76f8\u5173\u5185\u5bb9\u8bf7\u53c2\u8003[\u7248\u672c\u53d1\u7248\u8bf4\u660e](https://github.com/apache/incubator-inlong/blob/0.12.0-incubating-RC0/CHANGES.md) \uff0c\u91cc\u9762\u5217\u51fa\u4e86\u672c\u6b21\u7248\u672c\u8be6\u7ec6\u7684\u7279\u6027\u3001\u6539\u8fdb\uff0cBug \u4fee\u590d\uff0c\u4ee5\u53ca\u5177\u4f53\u7684\u8d21\u732e\u8005\u3002\\n\\n### Apache InLong(incubating) \u540e\u7eed\u89c4\u5212\\n\u540e\u7eed\u7248\u672c\uff0c\u6211\u4eec\u4f1a\u8fdb\u4e00\u6b65\u91ca\u653e InLong \u7684\u80fd\u529b\uff0c\u8986\u76d6\u66f4\u591a\u7684\u4f7f\u7528\u573a\u666f\uff0c\u4e3b\u8981\u5305\u62ec\uff1a\\n- \u652f\u6301\u6570\u636e\u63a5\u5165 ClickHouse \u7684\u94fe\u8def\\n- \u652f\u6301 DB \u6570\u636e\u7684\u91c7\u96c6\\n- \u5168\u94fe\u8def\u7684\u6307\u6807\u5ba1\u8ba1\u4e8c\u671f\u529f\u80fd\\n\\n\\n### Apache InLong(incubating) \u8d21\u732e\u8005\u62db\u52df\\nApache InLong(incubating) \u5f53\u524d\u5171\u6709 71 \u540d contributor\uff0c\u4ecd\u5904\u5728\u9879\u76ee\u5b75\u5316\u7684\u521d\u671f\uff0c\u8fd8\u6709\u5f88\u591a\u5f85\u529e\u4e8b\u9879\uff0c\u5305\u62ec\uff1aFeature \u5f00\u53d1\u3001\u793e\u533a\u8fd0\u8425\uff0c\u6587\u6863\u7ffb\u8bd1\u7b49\uff0c\u671f\u5f85\u66f4\u591a\u5f00\u6e90\u7231\u597d\u8005\u52a0\u5165 InLong\uff0c\u4e00\u8d77\u5c06 InLong \u6253\u9020\u6210 Apache \u9876\u7ea7\u9879\u76ee\u3002\u4ee5\u4e0b\u4e3a InLong \u9879\u76ee\u7684\u65f6\u95f4\u7ebf\uff1a\\n\\n- 2021\u5e7412\u670822\u65e5\uff0c\u53d1\u5e03 0.12.0 \u7248\u672c\\n- 2021\u5e7411\u67085\u65e5\uff0c\u53d1\u5e030.11.0\u7248\u672c\\n- 2021\u5e749\u67083\u65e5\uff0c\u53d1\u5e030.10.0\u7248\u672c\\n- 2021\u5e747\u670812\u65e5\uff0c\u53d1\u8d77\u66f4\u540d\u540e\u7b2c\u4e00\u4e2a\u7248\u672c 0.9.0 \u6295\u7968\\n- 2021\u5e744\u670811\u65e5\uff0c\u5b8c\u6210\u793e\u533a\u6539\u540d\uff0c\u8c03\u6574\u4e3a Apache InLong\\n- 2021\u5e742\u670811\u65e5\uff0c\u53d1\u8d77\u793e\u533a\u6539\u540d\u53d8\u66f4\u7533\u8bf7\\n- 2020\u5e7412\u670820\u65e5\uff0c\u8fdb\u884c\u9879\u76ee\u6539\u540d\u8ba8\u8bba\u548c\u6295\u7968\\n- 2020\u5e745\u670830\u65e5\uff0c\u6309\u7167 Apache \u793e\u533a\u89c4\u8303\u53d1\u5e03\u7b2c\u4e00\u4e2a\u793e\u533a\u7248\u672c\\n- 2019\u5e7411\u67083\u65e5\uff0c\u8fdb\u5165 Apache \u793e\u533a\u5b75\u5316\\n- 2019\u5e749\u670812\u65e5\uff0cTubeMQ \u5bf9\u5916\u5f00\u6e90\u5e76\u6350\u732e\u7ed9 Apache \u793e\u533a"}]}')}}]);