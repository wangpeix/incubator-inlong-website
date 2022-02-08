"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7344],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(n),c=a,g=s["".concat(u,".").concat(c)]||s[c]||d[c]||l;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22059:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"Bare Metal",sidebar_position:4},u=void 0,p={unversionedId:"deployment/bare_metal",id:"version-0.12.0/deployment/bare_metal",title:"Bare Metal",description:"Environment Requirements",source:"@site/versioned_docs/version-0.12.0/deployment/bare_metal.md",sourceDirName:"deployment",slug:"/deployment/bare_metal",permalink:"/docs/deployment/bare_metal",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.12.0/deployment/bare_metal.md",tags:[],version:"0.12.0",sidebarPosition:4,frontMatter:{title:"Bare Metal",sidebar_position:4},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/deployment/k8s"},next:{title:"Overview",permalink:"/docs/modules/agent/overview"}},m=[{value:"Environment Requirements",id:"environment-requirements",children:[],level:2},{value:"Deploy InLong",id:"deploy-inlong",children:[],level:2},{value:"Create Data Stream",id:"create-data-stream",children:[],level:2}],d={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ZooKeeper 3.5+"),(0,l.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,l.kt)("li",{parentName:"ul"},"Flink 1.9.x"),(0,l.kt)("li",{parentName:"ul"},"Apache Pulsar 2.6+ (Optional)")),(0,l.kt)("h2",{id:"deploy-inlong"},"Deploy InLong"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"order"),(0,l.kt)("th",{parentName:"tr",align:null},"component"),(0,l.kt)("th",{parentName:"tr",align:null},"dependencies"),(0,l.kt)("th",{parentName:"tr",align:null},"deploy guide"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-tubemq-server"),(0,l.kt)("td",{parentName:"tr",align:null},"ZooKeeper"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/modules/tubemq/quick_start"},"InLong TubeMQ Server")),(0,l.kt)("td",{parentName:"tr",align:null},"If you use Apache Pulsar, you don\u2019t need to install this component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-tubemq-manager"),(0,l.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/modules/tubemq/tubemq-manager/quick_start"},"InLong TubeMQ Manager")),(0,l.kt)("td",{parentName:"tr",align:null},"If you use Apache Pulsar, you don\u2019t need to install this component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-manager"),(0,l.kt)("td",{parentName:"tr",align:null},"MySQL, ZooKeeper"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/modules/manager/quick_start"},"InLong Manager")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-website"),(0,l.kt)("td",{parentName:"tr",align:null},"Nginx or Docker"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/modules/website/quick_start"},"InLong WebSite")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-dataproxy"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/modules/dataproxy/quick_start"},"InLong DataProxy")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-sort"),(0,l.kt)("td",{parentName:"tr",align:null},"ZooKeeper, Flink"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/modules/sort/quick_start"},"InLong Sort")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-agent"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/modules/agent/quick_start"},"InLong Agent")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"create-data-stream"},"Create Data Stream"),(0,l.kt)("p",null,"After the InLong cluster deployed successfully, you can create a data stream refer to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/user_guide/user_manual"},"user manual")," to start using."))}s.isMDXComponent=!0}}]);