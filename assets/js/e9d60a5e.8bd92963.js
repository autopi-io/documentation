(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[9341],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13919:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return r}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var i=n(52263),r=n(13919);function a(){var e=(0,i.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,s=void 0!==o&&o,c=a.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+d:d}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},51775:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var i=n(22122),r=n(19756),a=(n(67294),n(3905)),o=n(44996),s=["components"],c={id:"doip-install",title:"DOIP HAT Install"},l=void 0,d={unversionedId:"hardware/accessories/doip-install",id:"hardware/accessories/doip-install",isDocsHomePage:!1,title:"DOIP HAT Install",description:"The DOIP solution described here only works with the AutoPi TMU CM4 and newer editions",source:"@site/docs/hardware/accessories/doip-install.md",sourceDirName:"hardware/accessories",slug:"/hardware/accessories/doip-install",permalink:"/hardware/accessories/doip-install",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/hardware/accessories/doip-install.md",tags:[],version:"current",frontMatter:{id:"doip-install",title:"DOIP HAT Install"},sidebar:"sidebar",previous:{title:"Accessories Overview",permalink:"/hardware/accessories/accessories-intro"},next:{title:"Introduction",permalink:"/hardware/accessories/keyfob-hat/keyfob-intro"}},p=[{value:"DOIP Introduction",id:"doip-introduction",children:[]},{value:"Step-by-Step Guide",id:"step-by-step-guide",children:[{value:"Step 1",id:"step-1",children:[]},{value:"Step 2",id:"step-2",children:[]},{value:"Step 3",id:"step-3",children:[]},{value:"Step 4",id:"step-4",children:[]}]},{value:"Disscussion",id:"disscussion",children:[]}],u={toc:p};function h(e){var t=e.components,c=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Before proceeding with the install")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The DOIP solution described here only works with the AutoPi TMU CM4 and newer editions"))),(0,a.kt)("h2",{id:"doip-introduction"},"DOIP Introduction"),(0,a.kt)("p",null,"This guide provides a general technical overview of the AutoPi DOIP solution. "),(0,a.kt)("p",null,'DOIP stands for "Diagnostic over Internet Protocol." It is a communication protocol used in the automotive industry for diagnostic and programming tasks. DOIP enables the exchange of diagnostic information between a vehicle\'s electronic control units (ECUs) and diagnostic tools over an IP-based network, such as Ethernet.'),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Prerequesites")," for this guide:"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"1x DOIP HAT PCB"),(0,a.kt)("li",{parentName:"ul"},"3x Plastic screw"),(0,a.kt)("li",{parentName:"ul"},"2x 6.5 mm plastic spacer")))),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/hardware/accessories/doip/doip2.jpg",alt:"Keyfob flow",width:"40%"})),(0,a.kt)("h2",{id:"step-by-step-guide"},"Step-by-Step Guide"),(0,a.kt)("h3",{id:"step-1"},"Step 1"),(0,a.kt)("p",null,"Open up the AutoPi device by unscrewing the four screws at the bottom. "),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{alt:"Step 2",width:"460px",src:(0,o.Z)("/img/hardware/autopi_tmu_cm4/installing_external_antennas/ext_ant2.jpg")})),(0,a.kt)("h3",{id:"step-2"},"Step 2"),(0,a.kt)("p",null,"Start preparing the DOIP hat by screwing one 6.5 mm spacer in each hole of the DOIP hat PCB as seen in the pictures."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Keyfob flow",src:n(64167).Z})),(0,a.kt)("h3",{id:"step-3"},"Step 3"),(0,a.kt)("p",null,"Connect the BLE hat with the AutoPi board through the 40 pin headers. Verify that the connectors are properly connected."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Keyfob flow",src:n(12609).Z})),(0,a.kt)("h3",{id:"step-4"},"Step 4"),(0,a.kt)("p",null,"Reasemble the device using the new AutoPi BLE side shield, giving access to two new Keyfob control ports on the side."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Keyfob flow",src:n(50970).Z})),(0,a.kt)("h2",{id:"disscussion"},"Disscussion"),(0,a.kt)("p",null,"You have now successfully installed the DOIP solution to the device."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In case you have any questions, don't hesitate to contact us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@autopi.io"},"support@autopi.io"),"."))))}h.isMDXComponent=!0},64167:function(e,t,n){"use strict";t.Z=n.p+"assets/images/doip3-5772626f72a71482342230810fe5c6bf.jpg"},12609:function(e,t,n){"use strict";t.Z=n.p+"assets/images/doip8-d0d9d966e8aa33ea6a354f71d1a28158.jpg"},50970:function(e,t,n){"use strict";t.Z=n.p+"assets/images/side-c363f2bc23e20cdb0ba95f2bed2f113d.jpg"}}]);