(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[8198],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return h}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=i.createContext({}),c=function(e){var t=i.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return i.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,f=d["".concat(a,".").concat(h)]||d[h]||p[h]||o;return r?i.createElement(f,s(s({ref:t},l),{},{components:r})):i.createElement(f,s({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:n,s[1]=u;for(var c=2;c<o;c++)s[c]=r[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1593:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var i=r(2122),n=r(9756),o=(r(7294),r(3905)),s=["components"],u={id:"setting-up-our-device-with-verizon-wireless",title:"Setting up our device with Verizon Wireless"},a=void 0,c={unversionedId:"guides/setting-up-our-device-with-verizon-wireless",id:"guides/setting-up-our-device-with-verizon-wireless",isDocsHomePage:!1,title:"Setting up our device with Verizon Wireless",description:"We have had serveral different users report issues with setting up the 4G Dongle on Verizon Wireless.",source:"@site/docs/guides/setting_up_our_device_with_verizon_wireless.md",sourceDirName:"guides",slug:"/guides/setting-up-our-device-with-verizon-wireless",permalink:"/guides/setting-up-our-device-with-verizon-wireless",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/guides/setting_up_our_device_with_verizon_wireless.md",tags:[],version:"current",frontMatter:{id:"setting-up-our-device-with-verizon-wireless",title:"Setting up our device with Verizon Wireless"},sidebar:"guidesSidebar",previous:{title:"RFID Reader Integration",permalink:"/guides/rfid-integartion"},next:{title:"Upgrade/Replace Your Raspberry Pi Computer",permalink:"/guides/upgrading-your-raspberry-pi"}},l=[{value:"Discussion",id:"discussion",children:[]}],p={toc:l};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We have had serveral different users report issues with setting up the 4G Dongle on Verizon Wireless."),(0,o.kt)("p",null,"The issue is that Verizon requires an IMEI number to register the SIM. And while the AutoPi does have an IMEI, this is just not recognized by Verizon\u2019s system and the setup fails."),(0,o.kt)("p",null,"This is a verified method of setting it up:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If you have a brand-new SIM you must use another device (Tablet or smartphone) to register the SIM with Verizon. Use the IMEI from that device."),(0,o.kt)("li",{parentName:"ol"},"If you have a SIM that is already registered on Verizon\u2019s network, you can go ahead and use the SIM."),(0,o.kt)("li",{parentName:"ol"},"Follow this guide for inserting the SIM in the device: ",(0,o.kt)("a",{parentName:"li",href:"https://www.autopi.io/getting-started"},"https://www.autopi.io/getting-started")),(0,o.kt)("li",{parentName:"ol"},"Instead of the preselected APN settings, use this string: vzwinternet")),(0,o.kt)("p",null,"This should be all."),(0,o.kt)("h3",{id:"discussion"},"Discussion"),(0,o.kt)("p",null,"If you'd like to discuss this topic with us or other fellow community members, you can do so on our community\npage dedicated for this guide: ",(0,o.kt)("a",{parentName:"p",href:"https://community.autopi.io/t/setting-up-our-device-with-verizon-wireless/420"},"Setting up our device with Verizon Wireless"),"."))}d.isMDXComponent=!0}}]);