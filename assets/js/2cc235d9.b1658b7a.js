(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[6675],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9582:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],u={id:"4g-internet-setup-troubleshooting",title:"4G internet setup troubleshooting"},s=void 0,l={unversionedId:"guides/4g-internet-setup-troubleshooting",id:"guides/4g-internet-setup-troubleshooting",isDocsHomePage:!1,title:"4G internet setup troubleshooting",description:"You are experiencing issues connecting to the internet, when connected to the WiFi hotspot on the AutoPi Dongle.",source:"@site/docs/guides/4g_internet_setup_troubleshooting.md",sourceDirName:"guides",slug:"/guides/4g-internet-setup-troubleshooting",permalink:"/guides/4g-internet-setup-troubleshooting",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/guides/4g_internet_setup_troubleshooting.md",tags:[],version:"current",frontMatter:{id:"4g-internet-setup-troubleshooting",title:"4G internet setup troubleshooting"},sidebar:"guidesSidebar",previous:{title:"Create Custom Workers",permalink:"/guides/services/create-custom-workers"},next:{title:"A guide to Triggers",permalink:"/guides/a-guide-to-triggers"}},c=[{value:"Prerequisites:",id:"prerequisites",children:[]},{value:"Check SIM card",id:"check-sim-card",children:[]},{value:"Check Modem on Hardware",id:"check-modem-on-hardware",children:[]},{value:"Checking qmi-manager status",id:"checking-qmi-manager-status",children:[]},{value:"Further checking of network",id:"further-checking-of-network",children:[]},{value:"Tweaks",id:"tweaks",children:[]},{value:"Discussion",id:"discussion",children:[]}],p={toc:c};function d(e){var t=e.components,u=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You are experiencing issues connecting to the internet, when connected to the WiFi hotspot on the AutoPi Dongle. "),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites:"),(0,i.kt)("p",null,"Before following this guide, you must have completed the initial setup guide found here:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.autopi.io/getting-started"},"https://www.autopi.io/getting-started")),(0,i.kt)("h3",{id:"check-sim-card"},"Check SIM card"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Your SIM card must be setup for data. To check this, insert the SIM into another device, like a smartphone or similar. When inserted in the other device you must be able to browse the web.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you ordered a branded version of the AutoPi (Verizon/AT&T), please verify that the network carrier of the SIM card is the same as the brand of the AutoPi.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify that the SIM card is not pin locked and if it is that you have entered the pin code in the settings. "))),(0,i.kt)("h3",{id:"check-modem-on-hardware"},"Check Modem on Hardware"),(0,i.kt)("p",null,"In the terminal on the WiFi, check that the modem has been found. This can be done by writing the following command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'cmd.run "lsusb" ')),(0,i.kt)("p",null,"The output of the command should be similar to this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"lsusb",src:n(5410).Z})),(0,i.kt)("p",null,"The important part to look for is the Modem. The ID will be different depending on which modem your device is equipped with:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Modem Manufacturer")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"ID")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Quectel"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"2c7c:0121"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Telit"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1bc7:1031"))))),(0,i.kt)("p",null,"If you ordered a 4G edition and you don't find the modem in your list, then please contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@autopi.io"},"support@autopi.io")),(0,i.kt)("h3",{id:"checking-qmi-manager-status"},"Checking qmi-manager status"),(0,i.kt)("p",null,"The device contains a software manager, which ensure stable connection to the internet. This is called qmi-manager. To check status, please write the following command in the terminal:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'cmd.run "qmi-manager status"')),(0,i.kt)("p",null,"The output should be similar what you can see in the image below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"qmistatus",src:n(2826).Z})),(0,i.kt)("h3",{id:"further-checking-of-network"},"Further checking of network"),(0,i.kt)("p",null,"If your device still isn't online, you can try running the following two commands. They will tell you a bit more about why the network manager fails:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'cmd.run "qmi-manager down"'),"\n",(0,i.kt)("inlineCode",{parentName:"p"},'cmd.run "qmi-manager up"')),(0,i.kt)("p",null,"If the last command reports issue with detecting the SIM card, then double check the orientation of the SIM card and try again."),(0,i.kt)("h3",{id:"tweaks"},"Tweaks"),(0,i.kt)("p",null,"If you experience connection issues where the connection drops sometimes and/or if it is online, but not shown as online on my.autopi.io, then you can try to tweak the MTU from the default value: 1500, to a lower value, in increments (ex. 1500 -> 1450 -> etc).\nThis can be done on the local configuration tool, by connecting to the device hotspot and opening local.autopi.io in your browser."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),": For US Verizon customers, please try this MTU: 1428."),(0,i.kt)("p",null,"If the connection is still not online, then please contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@autopi.io"},"support@autopi.io")," for additional help."),(0,i.kt)("h3",{id:"discussion"},"Discussion"),(0,i.kt)("p",null,"If you'd like to discuss this topic with us or other fellow community members, you can do so on our community page dedicated for this guide:\n",(0,i.kt)("a",{parentName:"p",href:"https://community.autopi.io/t/4g-internet-setup-troubleshooting/235"},"4G internet setup troubleshooting")))}d.isMDXComponent=!0},5410:function(e,t,n){"use strict";t.Z=n.p+"assets/images/lsusb-5f720494e7c939aced31596788e0738a.jpg"},2826:function(e,t,n){"use strict";t.Z=n.p+"assets/images/qmistatus-6ad71a946e4c0f10d004161b3bdb9339.jpg"}}]);