(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),c=(n(0),n(166)),l={id:"cloud-config-tracking",title:"Tracking"},i={unversionedId:"cloud/configuration/cloud-config-tracking",id:"cloud/configuration/cloud-config-tracking",isDocsHomePage:!1,title:"Tracking",description:"Gnss",source:"@site/docs/cloud/configuration/tracking.md",slug:"/cloud/configuration/cloud-config-tracking",permalink:"/cloud/configuration/cloud-config-tracking",version:"current",sidebar:"cloudSidebar",previous:{title:"System",permalink:"/cloud/configuration/cloud-config-system"},next:{title:"Trip",permalink:"/cloud/configuration/cloud-config-trip"}},b=[{value:"Gnss",id:"gnss",children:[]},{value:"Logger",id:"logger",children:[]}],o={rightToc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"gnss"},"Gnss"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Unit"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"FIX FREQUENCY"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Set the fix frequency of the GNSS engine."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"int"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Hz")))),Object(c.b)("h2",{id:"logger"},"Logger"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Unit"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"INTERVAL"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"How often should the position of the vehicle be logged? The smaller the interval, the more data is potential logged. Disabled if set to zero."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"float"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"5"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"s")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"FILTER DUPLICATES"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Filter out duplicate measurements?"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"bool"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"True"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CLOUD RETURNER"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Which cloud returner should be used?"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"str"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"cloud"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))))}u.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,j=p["".concat(l,".").concat(d)]||p[d]||O[d]||c;return n?a.a.createElement(j,i(i({ref:t},o),{},{components:n})):a.a.createElement(j,i({ref:t},o))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<c;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);