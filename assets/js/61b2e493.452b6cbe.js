(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[2729],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,u=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||u;return t?n.createElement(f,c(c({ref:r},p),{},{components:t})):n.createElement(f,c({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var u=t.length,c=new Array(u);c[0]=m;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<u;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5866:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return l},default:function(){return s}});var n=t(2122),o=t(9756),u=(t(7294),t(3905)),c=["components"],a={id:"core-returners-mqtt",title:"Mqtt"},i={unversionedId:"core/returners/core-returners-mqtt",id:"core/returners/core-returners-mqtt",isDocsHomePage:!1,title:"Mqtt",description:"mqtt.returner",source:"@site/docs/core/returners/mqtt.md",sourceDirName:"core/returners",slug:"/core/returners/core-returners-mqtt",permalink:"/core/returners/core-returners-mqtt",version:"current",frontMatter:{id:"core-returners-mqtt",title:"Mqtt"},sidebar:"coreSidebar",previous:{title:"Jsonl",permalink:"/core/returners/core-returners-jsonl"},next:{title:"Introduction",permalink:"/core/services/core-services-intro"}},l=[{value:"<code>mqtt.returner</code>",id:"mqttreturner",children:[]},{value:"<code>mqtt.returner_data</code>",id:"mqttreturner_data",children:[]},{value:"<code>mqtt.returner_job</code>",id:"mqttreturner_job",children:[]}],p={toc:l};function s(e){var r=e.components,t=(0,o.Z)(e,c);return(0,u.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"mqttreturner"},(0,u.kt)("inlineCode",{parentName:"h2"},"mqtt.returner")),(0,u.kt)("p",null,"Return a result to MQTT."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"EXAMPLE")," salt ",(0,u.kt)("inlineCode",{parentName:"p"},"*")," test.ping --return mqtt --return_kwargs ",(0,u.kt)("inlineCode",{parentName:"p"},'{"host": "127.0.0.1", "port": 1883}')),(0,u.kt)("hr",null),(0,u.kt)("h2",{id:"mqttreturner_data"},(0,u.kt)("inlineCode",{parentName:"h2"},"mqtt.returner_data")),(0,u.kt)("p",null,"Return any arbitrary data structure to MQTT."),(0,u.kt)("hr",null),(0,u.kt)("h2",{id:"mqttreturner_job"},(0,u.kt)("inlineCode",{parentName:"h2"},"mqtt.returner_job")),(0,u.kt)("p",null,"Return a Salt job result to MQTT."))}s.isMDXComponent=!0}}]);