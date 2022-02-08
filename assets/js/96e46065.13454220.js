"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3096],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,g=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76047:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Hive Example",sidebar_position:2},c=void 0,s={unversionedId:"quick_start/hive_example",id:"quick_start/hive_example",title:"Hive Example",description:"Here we use a simple example to help you experience InLong by Docker.",source:"@site/docs/quick_start/hive_example.md",sourceDirName:"quick_start",slug:"/quick_start/hive_example",permalink:"/docs/next/quick_start/hive_example",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/quick_start/hive_example.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Hive Example",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to Build",permalink:"/docs/next/quick_start/how_to_build"},next:{title:"Pulsar Example",permalink:"/docs/next/quick_start/pulsar_example"}},p=[{value:"Install Hive",id:"install-hive",children:[],level:2},{value:"Install InLong",id:"install-inlong",children:[],level:2},{value:"Create a data access",id:"create-a-data-access",children:[],level:2},{value:"Approve the data access",id:"approve-the-data-access",children:[],level:2},{value:"Configure the agent",id:"configure-the-agent",children:[],level:2}],u={toc:p};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here we use a simple example to help you experience InLong by Docker."),(0,o.kt)("h2",{id:"install-hive"},"Install Hive"),(0,o.kt)("p",null,"Hive is the necessary component. If you don't have Hive in your machine, we recommand using Docker to install it. Details can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/big-data-europe/docker-hive"},"here"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that if you use Docker, you need to add a port mapping ",(0,o.kt)("inlineCode",{parentName:"p"},"8020:8020"),", because it's the port of HDFS DefaultFS, and we need to use it later.")),(0,o.kt)("h2",{id:"install-inlong"},"Install InLong"),(0,o.kt)("p",null,"Before we begin, we need to install InLong. Here we provide two ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install InLong with Docker by according to the ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/deployment/docker"},"instructions here"),".(Recommanded)"),(0,o.kt)("li",{parentName:"ol"},"Install InLong binary according to the ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/deployment/bare_metal"},"instructions here"),".")),(0,o.kt)("h2",{id:"create-a-data-access"},"Create a data access"),(0,o.kt)("p",null,'After deployment, we first enter the "Data Access" interface, click "Create an Access" in the upper right corner to create a new date access, and fill in the data streams group information as shown in the figure below.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Group",src:n(94664).Z,width:"828",height:"758"})),(0,o.kt)("p",null,"Then we click the next button, and fill in the stream information as shown in the figure below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Stream",src:n(33597).Z,width:"960",height:"582"})),(0,o.kt)("p",null,'Note that the message source is "File", and we don\'t need to create a message source manually.'),(0,o.kt)("p",null,'Then we fill in the following information in the "data information" column below.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data Information",src:n(60095).Z,width:"1501",height:"469"})),(0,o.kt)("p",null,'Then we select Hive in the data flow and click "Add" to add Hive configuration'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hive Config",src:n(79741).Z,width:"1194",height:"824"})),(0,o.kt)("p",null,"Note that the target table does not need to be created in advance, as InLong Manager will automatically create the table for us after the access is approved. Also, please use connection test to ensure that InLong Manager can connect to your Hive."),(0,o.kt)("p",null,'Then we click the "Submit for Approval" button, the connection will be created successfully and enter the approval state.'),(0,o.kt)("h2",{id:"approve-the-data-access"},"Approve the data access"),(0,o.kt)("p",null,'Then we enter the "Approval Management" interface and click "My Approval" to approve the data access that we just applied for.'),(0,o.kt)("p",null,"At this point, the data access has been created successfully. We can see that the corresponding table has been created in Hive, and we can see that the corresponding topic has been created successfully in the management GUI of TubeMQ."),(0,o.kt)("h2",{id:"configure-the-agent"},"Configure the agent"),(0,o.kt)("p",null,"Create a collect job by using ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," to make a request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://localhost:8008/config/job\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n"job": {\n"dir": {\n"path": "",\n"pattern": "/data/collect-data/test.log"\n},\n"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n"id": 1,\n"thread": {\n"running": {\n"core": "4"\n}\n},\n"name": "fileAgentTest",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n},\n"proxy": {\n"inlongGroupId": "b_test_group",\n"inlongStreamId": "test_stream"\n},\n"op": "add"\n}\'\n')),(0,o.kt)("p",null,"At this point, the agent is configured successfully.\nThen we need to create a new file ",(0,o.kt)("inlineCode",{parentName:"p"},"./collect-data/test.log")," and add content to it to trigger the agent to send data to the dataproxy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'mkdir collect-data\nEND=100000\nfor ((i=1;i<=END;i++)); do\n    sleep 3\n    echo "name_$i | $i" >> ./collect-data/test.log\ndone\n')),(0,o.kt)("p",null,"Then we can observe the logs of agent and dataproxy, and we can see that the relevant data has been sent successfully."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker logs agent\n$ docker logs dataproxy\n")))}d.isMDXComponent=!0},94664:function(e,t,n){t.Z=n.p+"assets/images/create-group-3e0d534bf7696918f427703865a53d69.png"},33597:function(e,t,n){t.Z=n.p+"assets/images/create-stream-217302a472d9c730b422f1de7a1d554a.png"},60095:function(e,t,n){t.Z=n.p+"assets/images/data-information-840b6e3b3554bcaed25ba134776577b7.png"},79741:function(e,t,n){t.Z=n.p+"assets/images/hive-config-74dec6dfd1d35c6bd9ba81d262abec95.png"}}]);