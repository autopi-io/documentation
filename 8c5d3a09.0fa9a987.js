(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{100:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return i})),n.d(r,"rightToc",(function(){return l})),n.d(r,"default",(function(){return s}));var t=n(2),c=n(6),a=(n(0),n(135)),o={id:"core-services-cloud-manager",title:"Cloud Manager"},i={unversionedId:"core/services/core-services-cloud-manager",id:"core/services/core-services-cloud-manager",isDocsHomePage:!1,title:"Cloud Manager",description:"Handlers",source:"@site/docs/core/services/cloud_manager.md",slug:"/core/services/core-services-cloud-manager",permalink:"/core/services/core-services-cloud-manager",version:"current",sidebar:"coreSidebar",previous:{title:"Ble Manager",permalink:"/core/services/core-services-ble-manager"},next:{title:"Ec2X Manager",permalink:"/core/services/core-services-ec2x-manager"}},l=[{value:"Handlers",id:"handlers",children:[{value:"<code>cache</code>",id:"cache",children:[]},{value:"<code>status</code>",id:"status",children:[]},{value:"<code>upload</code>",id:"upload",children:[]}]}],u={rightToc:l};function s(e){var r=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"handlers"},"Handlers"),Object(a.b)("h3",{id:"cache"},Object(a.b)("inlineCode",{parentName:"h3"},"cache")),Object(a.b)("p",null,"Queries/calls a given cache function."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"status"},Object(a.b)("inlineCode",{parentName:"h3"},"status")),Object(a.b)("p",null,"Gets current status."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"upload"},Object(a.b)("inlineCode",{parentName:"h3"},"upload")),Object(a.b)("p",null,"Uploads cached data to cloud."))}s.isMDXComponent=!0},135:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return f}));var t=n(0),c=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,c=function(e,r){if(null==e)return{};var n,t,c={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(c[n]=e[n]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),s=function(e){var r=c.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=s(e.components);return c.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},b=c.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=t,f=d["".concat(o,".").concat(b)]||d[b]||p[b]||a;return n?c.a.createElement(f,i(i({ref:r},u),{},{components:n})):c.a.createElement(f,i({ref:r},u))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,o=new Array(a);o[0]=b;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);