(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[8431],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},616:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],c={id:"core-services-spm-manager",title:"Spm Manager"},l=void 0,s={unversionedId:"core/services/core-services-spm-manager",id:"core/services/core-services-spm-manager",isDocsHomePage:!1,title:"Spm Manager",description:"Handlers",source:"@site/docs/core/services/spm_manager.md",sourceDirName:"core/services",slug:"/core/services/core-services-spm-manager",permalink:"/core/services/core-services-spm-manager",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/core/services/spm_manager.md",tags:[],version:"current",frontMatter:{id:"core-services-spm-manager",title:"Spm Manager"},sidebar:"coreSidebar",previous:{title:"Rfid Manager",permalink:"/core/services/core-services-rfid-manager"},next:{title:"Tracking Manager",permalink:"/core/services/core-services-tracking-manager"}},u=[{value:"Handlers",id:"handlers",children:[{value:"<code>flash_firmware</code>",id:"flash_firmware",children:[]},{value:"<code>fuse</code>",id:"fuse",children:[]},{value:"<code>heartbeat</code>",id:"heartbeat",children:[]},{value:"<code>led_pwm</code>",id:"led_pwm",children:[]},{value:"<code>query</code>",id:"query",children:[]},{value:"<code>reset</code>",id:"reset",children:[]}]}],p={toc:u};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"handlers"},"Handlers"),(0,o.kt)("h3",{id:"flash_firmware"},(0,o.kt)("inlineCode",{parentName:"h3"},"flash_firmware")),(0,o.kt)("p",null,"Flashes new SPM firmware to the ATtiny."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"fuse"},(0,o.kt)("inlineCode",{parentName:"h3"},"fuse")),(0,o.kt)("p",null,"Manage fuse of the ATtiny."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"heartbeat"},(0,o.kt)("inlineCode",{parentName:"h3"},"heartbeat")),(0,o.kt)("p",null,"Triggers SPM heartbeat and fires power on event when booting."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"led_pwm"},(0,o.kt)("inlineCode",{parentName:"h3"},"led_pwm")),(0,o.kt)("p",null,"Change PWM frequency and/or duty cycle for LED."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"frequency"))," (float): Change to frequency in Hz."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"duty_cycle"))," (float): Change to duty cycle in percent.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"query"},(0,o.kt)("inlineCode",{parentName:"h3"},"query")),(0,o.kt)("p",null,"Queries a given SPM command."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ARGUMENTS")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"cmd"))," (str): The SPM command to query.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"reset"},(0,o.kt)("inlineCode",{parentName:"h3"},"reset")),(0,o.kt)("p",null,"Reset/restart ATtiny."))}d.isMDXComponent=!0}}]);