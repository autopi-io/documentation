(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[9586],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(52263),o=n(13919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,u=void 0!==a&&a,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(u)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+c:c}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},77389:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=n(44996),u=["components"],l={id:"cloud-intro",title:"Introduction"},s=void 0,c={unversionedId:"cloud/cloud-intro",id:"cloud/cloud-intro",isDocsHomePage:!1,title:"Introduction",description:"This section is all about the Cloud system. It goes over details, such as the different configuration",source:"@site/docs/cloud/index.mdx",sourceDirName:"cloud",slug:"/cloud/cloud-intro",permalink:"/cloud/cloud-intro",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/cloud/index.mdx",tags:[],version:"current",frontMatter:{id:"cloud-intro",title:"Introduction"},sidebar:"sidebar",previous:{title:"Using the AutoPi With an External Power Supply",permalink:"/developer_guides/using-the-autopi-with-an-external-power-supply"},next:{title:"Introduction",permalink:"/cloud/fleet_management/fleet-intro"}},d=[{value:"What is the AutoPi Cloud?",id:"what-is-the-autopi-cloud",children:[{value:"Device Management",id:"device-management",children:[]},{value:"Fleet Management",id:"fleet-management",children:[]},{value:"Cloud API",id:"cloud-api",children:[]}]},{value:"Links",id:"links",children:[]}],p={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section is all about the Cloud system. It goes over details, such as the different configuration\noptions that can be set, the events that can be seen from the device. More complex functionalities\nare also explored in this section."),(0,i.kt)("h2",{id:"what-is-the-autopi-cloud"},"What is the AutoPi Cloud?"),(0,i.kt)("p",null,"The AutoPi Cloud is a system created to more easily manage your AutoPi device. The Cloud is divided into several sections:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Device management "),(0,i.kt)("li",{parentName:"ul"},"Fleet management "),(0,i.kt)("li",{parentName:"ul"},"API")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,a.Z)("/img/cloud/intro/cloud_device_setups_scaled.png"),alt:"AutoPi Cloud",width:"400"})),(0,i.kt)("h3",{id:"device-management"},"Device Management"),(0,i.kt)("p",null,"This is an area that shows the current state of your devices and allows you to easily change that\nstate to whatever is needed. For example, there is a section of advanced settings that are\navailable that change various functionalities of the device like WiFi, hotspot, accelerometer\nand power settings. It is also possible to setup the device to send data back to your own servers.\nThis way data can be kept private if needed. It possible to manage and maintain multiple devices at the same type, by applying templates to groups of devices."),(0,i.kt)("h3",{id:"fleet-management"},"Fleet Management"),(0,i.kt)("p",null,"The Cloud also allows you to view data that has been recorded from your vehicle. There is a dashboard that\nshows past OBD-II data like RPM, speed and fuel level. The device also sends back information about\n",(0,i.kt)("a",{parentName:"p",href:"/cloud/fleet_management/vehicles/trips/introduction"},"trips"),", which are also viewable. The Cloud also keeps track of the\n",(0,i.kt)("a",{parentName:"p",href:"/cloud/device_management/events/cloud-events-intro"},"events")," that were triggered on your device. In the events page, you are\nable to view all events and filter them by date or tag."),(0,i.kt)("h3",{id:"cloud-api"},"Cloud API"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/getting_started/api/api-intro"},"API")," gives you acccess to all the same functionalities you see in the cloud. Through the API it is possible to extend the features to your own systems or APP solution and thereby build on top of the platform. "),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Read more about our ",(0,i.kt)("a",{parentName:"li",href:"https://autopi.io"},"product")),(0,i.kt)("li",{parentName:"ul"},"Buy the device in our ",(0,i.kt)("a",{parentName:"li",href:"https://shop.autopi.io"},"shop"))))}h.isMDXComponent=!0}}]);