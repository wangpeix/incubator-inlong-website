"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6999],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},16835:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"Deployment",sidebar_position:2},u=void 0,c={unversionedId:"modules/agent/quick_start",id:"modules/agent/quick_start",title:"Deployment",description:"Configuration",source:"@site/docs/modules/agent/quick_start.md",sourceDirName:"modules/agent",slug:"/modules/agent/quick_start",permalink:"/docs/next/modules/agent/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/agent/quick_start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deployment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/modules/agent/overview"},next:{title:"File",permalink:"/docs/next/modules/agent/file"}},s=[{value:"Configuration",id:"configuration",children:[],level:3},{value:"Start",id:"start",children:[],level:2},{value:"Add job configuration in real time",id:"add-job-configuration-in-real-time",children:[],level:2}],p={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd inlong-agent\n")),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Online operation needs to pull the configuration from inlong-manager, the configuration conf/agent.properties is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"agent.local.ip=Write local ip\nagent.manager.vip.http.host=manager host\nagent.manager.vip.http.port=manager port\n# audit proxy address\naudit.proxys=127.0.0.1:10081\n")),(0,a.kt)("h2",{id:"start"},"Start"),(0,a.kt)("p",null,"After decompression, run the following command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sh agent.sh start\n")),(0,a.kt)("h2",{id:"add-job-configuration-in-real-time"},"Add job configuration in real time"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'    curl --location --request POST \'http://localhost:8008/config/job\' \\\n    --header \'Content-Type: application/json\' \\\n    --data \'{\n    "job": {\n    "dir": {\n    "path": "",\n    "pattern": "/data/inlong-agent/test.log"\n    },\n    "trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n    "id": 1,\n    "thread": {\n    "running": {\n    "core": "4"\n    },\n    "onejob": true\n    },\n    "name": "fileAgentTest",\n    "source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n    "sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n    "channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n    },\n    "proxy": {\n  "inlongGroupId": "groupId10",\n  "inlongStreamId": "groupId10"\n    },\n    "op": "add"\n    }\'\n')),(0,a.kt)("p",null,"The meaning of each parameter is \uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"job.dir.pattern: Configure the read file path, which can include regular expressions"),(0,a.kt)("li",{parentName:"ul"},"job.trigger: Trigger name, the default is DirectoryTrigger, the function is to monitor the files under the folder to generate events"),(0,a.kt)("li",{parentName:"ul"},"job.source: The type of data source used, the default is TextFileSource, which reads text files"),(0,a.kt)("li",{parentName:"ul"},"job.sink\uff1aThe type of writer used, the default is ProxySink, which sends messages to the proxy"),(0,a.kt)("li",{parentName:"ul"},"proxy.groupId: The groupId type used when writing proxy, groupId is group id showed on data access in inlong-manager, not the topic name."),(0,a.kt)("li",{parentName:"ul"},"proxy.streamId: The streamId type used when writing proxy, streamId is the data flow id showed on data flow window in inlong-manager")))}d.isMDXComponent=!0}}]);