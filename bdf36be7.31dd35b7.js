(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),a=(n(0),n(166)),o={id:"gen-3-intro",title:"Introduction"},c={unversionedId:"hardware/generation-3/gen-3-intro",id:"hardware/generation-3/gen-3-intro",isDocsHomePage:!1,title:"Introduction",description:"This section has a few guides written out that are specifically for third generation (TMU) devices.",source:"@site/docs/hardware/generation-3/_index.md",slug:"/hardware/generation-3/gen-3-intro",permalink:"/hardware/generation-3/gen-3-intro",version:"current",sidebar:"hardwareSidebar",previous:{title:"Using the RPi3 adapter",permalink:"/hardware/generation-2/using-the-rpi3-adapter"},next:{title:"Developer Kit",permalink:"/hardware/generation-3/developer-kit"}},u=[{value:"Pinout",id:"pinout",children:[]},{value:"Jumper",id:"jumper",children:[]}],s={rightToc:u};function p(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This section has a few guides written out that are specifically for third generation (TMU) devices.\nSome of the knowledge may be transferrable to second generation devices."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Third generation AutoPi device",src:n(296).default})),Object(a.b)("h2",{id:"pinout"},"Pinout"),Object(a.b)("p",null,"This image is an overview of the GPIO pinout of the 3",Object(a.b)("sup",null,"rd")," generation (TMU) AutoPi."),Object(a.b)("p",null,'Pins marked with "in use" cannot be used for anything else. This will interrupt the functionality\nof the AutoPi. This I2C bus is used by the AutoPi, but can be shared with other devices. '),Object(a.b)("p",null,"All other pins are free and their functionality follows that of the Raspberry Pi."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Third generation AutoPi GPIO Pinout",src:n(297).default})),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If you'd like to discuss this topic with us or other fellow community memebers, you can do so on\nour community page dedicated for this guide:\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://community.autopi.io/t/autopi-gpio-pinout/271"}),"AutoPi GPIO Pinout")))),Object(a.b)("h2",{id:"jumper"},"Jumper"),Object(a.b)("p",null,"This is a picture of the location of the 5V FORCE pins. You can put a jumper on these pins to\nprevent the AutoPi from going to hibernation. More info ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/jumpers"}),"here"),"."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Third generation AutoPi Jumper location",src:n(298).default})))}p.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,f=l["".concat(o,".").concat(b)]||l[b]||d[b]||a;return n?i.a.createElement(f,c(c({ref:t},s),{},{components:n})):i.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},296:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/autopi_gen_3_device-c5a987c0bfabb98d80564199bfb0b971.png"},297:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/autopi_gen_3_gpio_pinout-d7983a3a4099c470d87bb1556bd9b5f6.jpeg"},298:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/autopi_gen_3_jumper-f2f009b42c6d88e5879f022dcc40546d.jpg"}}]);