(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[6178],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?t.createElement(f,a(a({ref:n},u),{},{components:r})):t.createElement(f,a({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8464:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var t=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],c={id:"core-services-can-manager",title:"Can Manager"},l=void 0,s={unversionedId:"core/services/core-services-can-manager",id:"core/services/core-services-can-manager",isDocsHomePage:!1,title:"Can Manager",description:"Handlers",source:"@site/docs/core/services/can_manager.md",sourceDirName:"core/services",slug:"/core/services/core-services-can-manager",permalink:"/core/services/core-services-can-manager",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/core/services/can_manager.md",tags:[],version:"current",frontMatter:{id:"core-services-can-manager",title:"Can Manager"},sidebar:"coreSidebar",previous:{title:"Ble Manager",permalink:"/core/services/core-services-ble-manager"},next:{title:"Cloud Manager",permalink:"/core/services/core-services-cloud-manager"}},u=[{value:"Handlers",id:"handlers",children:[{value:"<code>connection</code>",id:"connection",children:[]},{value:"<code>dump</code>",id:"dump",children:[]},{value:"<code>filter</code>",id:"filter",children:[]},{value:"<code>monitor</code>",id:"monitor",children:[]},{value:"<code>obd_query</code>",id:"obd_query",children:[]},{value:"<code>play</code>",id:"play",children:[]},{value:"<code>query</code>",id:"query",children:[]},{value:"<code>send</code>",id:"send",children:[]}]}],d={toc:u};function p(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"handlers"},"Handlers"),(0,i.kt)("h3",{id:"connection"},(0,i.kt)("inlineCode",{parentName:"h3"},"connection")),(0,i.kt)("p",null,"Manages the current CAN connection."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dump"},(0,i.kt)("inlineCode",{parentName:"h3"},"dump")),(0,i.kt)("p",null,"Stores messages from the CAN bus to a file until a limit or duration is reached."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"filter"},(0,i.kt)("inlineCode",{parentName:"h3"},"filter")),(0,i.kt)("p",null,"Manages the CAN filters."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"monitor"},(0,i.kt)("inlineCode",{parentName:"h3"},"monitor")),(0,i.kt)("p",null,"Monitors messages on the CAN bus until a limit or duration is reached."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"obd_query"},(0,i.kt)("inlineCode",{parentName:"h3"},"obd_query")),(0,i.kt)("p",null,"Queries an OBD-II PID on the CAN bus."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"play"},(0,i.kt)("inlineCode",{parentName:"h3"},"play")),(0,i.kt)("p",null,"Sends all messages from one or more dump files on the CAN bus."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"query"},(0,i.kt)("inlineCode",{parentName:"h3"},"query")),(0,i.kt)("p",null,"Queries by sending one or more request messages on the CAN bus and then waits for one or more response messages."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"send"},(0,i.kt)("inlineCode",{parentName:"h3"},"send")),(0,i.kt)("p",null,"Sends one or more messages on the CAN bus."))}p.isMDXComponent=!0}}]);