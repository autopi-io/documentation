(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{159:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return d}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var r=o.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=b(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),f=t,d=p["".concat(a,".").concat(f)]||p[f]||u[f]||c;return n?o.a.createElement(d,i(i({ref:r},s),{},{components:n})):o.a.createElement(d,i({ref:r},s))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return i})),n.d(r,"rightToc",(function(){return l})),n.d(r,"default",(function(){return b}));var t=n(2),o=n(6),c=(n(0),n(159)),a={id:"core-services-key-fob-manager",title:"Key Fob Manager"},i={unversionedId:"core/services/core-services-key-fob-manager",id:"core/services/core-services-key-fob-manager",isDocsHomePage:!1,title:"Key Fob Manager",description:"Handlers",source:"@site/docs/core/services/key_fob_manager.md",slug:"/core/services/core-services-key-fob-manager",permalink:"/core/services/core-services-key-fob-manager",version:"current",sidebar:"coreSidebar",previous:{title:"Event Reactor",permalink:"/core/services/core-services-event-reactor"},next:{title:"Obd Manager",permalink:"/core/services/core-services-obd-manager"}},l=[{value:"Handlers",id:"handlers",children:[{value:"<code>action</code>",id:"action",children:[]},{value:"<code>power</code>",id:"power",children:[]}]}],s={rightToc:l};function b(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"handlers"},"Handlers"),Object(c.b)("h3",{id:"action"},Object(c.b)("inlineCode",{parentName:"h3"},"action")),Object(c.b)("p",null,"Performs a key fob button action."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"ARGUMENTS")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"*name"))," (str): Name(s) of the action(s) to perform.")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"power"},Object(c.b)("inlineCode",{parentName:"h3"},"power")),Object(c.b)("p",null,"Powers on/off key fob."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"value"))," (bool): Power on or off. ")))}b.isMDXComponent=!0}}]);