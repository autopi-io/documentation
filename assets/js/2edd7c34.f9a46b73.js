(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[1634],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return u},kt:function(){return f}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?t.createElement(m,i(i({ref:r},u),{},{components:n})):t.createElement(m,i({ref:r},u))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8094:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var t=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],c={id:"core-services-ble-manager",title:"Ble Manager"},l=void 0,s={unversionedId:"core/services/core-services-ble-manager",id:"core/services/core-services-ble-manager",isDocsHomePage:!1,title:"Ble Manager",description:"Handlers",source:"@site/docs/core/services/ble_manager.md",sourceDirName:"core/services",slug:"/core/services/core-services-ble-manager",permalink:"/core/services/core-services-ble-manager",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/core/services/ble_manager.md",tags:[],version:"current",frontMatter:{id:"core-services-ble-manager",title:"Ble Manager"},sidebar:"sidebar",previous:{title:"Audio Manager",permalink:"/core/services/core-services-audio-manager"},next:{title:"Can Manager",permalink:"/core/services/core-services-can-manager"}},u=[{value:"Handlers",id:"handlers",children:[{value:"<code>flash_firmware</code>",id:"flash_firmware",children:[]},{value:"<code>interface</code>",id:"interface",children:[]},{value:"<code>mode</code>",id:"mode",children:[]},{value:"<code>query</code>",id:"query",children:[]}]}],d={toc:u};function p(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"handlers"},"Handlers"),(0,o.kt)("h3",{id:"flash_firmware"},(0,o.kt)("inlineCode",{parentName:"h3"},"flash_firmware")),(0,o.kt)("p",null,"Flashes new firmware to the BlueNRG device."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"interface"},(0,o.kt)("inlineCode",{parentName:"h3"},"interface")),(0,o.kt)("p",null,"Manages the interface to the BlueNRG device."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"mode"},(0,o.kt)("inlineCode",{parentName:"h3"},"mode")),(0,o.kt)("p",null,"Manages the low-level modes of the BlueNRG device."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"query"},(0,o.kt)("inlineCode",{parentName:"h3"},"query")),(0,o.kt)("p",null,"Queries a given BlueNRG ACI command."))}p.isMDXComponent=!0}}]);