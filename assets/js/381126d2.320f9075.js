(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[8223],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7129:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),o=["components"],l={id:"create-valid-can-dump",title:"Create a Valid Can Dump"},u=void 0,c={unversionedId:"cloud/obd-ii/create-valid-can-dump",id:"cloud/obd-ii/create-valid-can-dump",isDocsHomePage:!1,title:"Create a Valid Can Dump",description:"The following is a guide to obtain a Valid CAN dump.",source:"@site/docs/cloud/obd-ii/can_dump.md",sourceDirName:"cloud/obd-ii",slug:"/cloud/obd-ii/create-valid-can-dump",permalink:"/cloud/obd-ii/create-valid-can-dump",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/cloud/obd-ii/can_dump.md",tags:[],version:"current",frontMatter:{id:"create-valid-can-dump",title:"Create a Valid Can Dump"},sidebar:"sidebar",previous:{title:"Automatic OBD Logger Pausing",permalink:"/cloud/obd-ii/automatic-obd-logger-pausing"},next:{title:"My Library",permalink:"/cloud/obd_library/car-explorer-library-manual"}},p=[{value:"Set Up a Virtual CAN Interface on the Device:",id:"set-up-a-virtual-can-interface-on-the-device",children:[]},{value:"Load CAN Dump Data Into Virtual CAN:",id:"load-can-dump-data-into-virtual-can",children:[]}],d={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following is a guide to obtain a Valid CAN dump."),(0,r.kt)("p",null,"The first step involves capturing a valid CAN (Controller Area Network) dump from\nthe vehicle you are working with. This dump contains all the data traffic\nexchanged between various ECUs (Electronic Control Units) within the vehicle.\nIt is essential to ensure that the captured data accurately reflects the\noperational state and configuration of the vehicle\u2019s CAN bus."),(0,r.kt)("p",null,"Tools such as candump or other diagnostic software compatible with the vehicle's\nCAN system are typically used to retrieve this data."),(0,r.kt)("h2",{id:"set-up-a-virtual-can-interface-on-the-device"},"Set Up a Virtual CAN Interface on the Device:"),(0,r.kt)("p",null,"Next, you need to configure a virtual CAN (vcan) interface on the device where\nthe CAN loop will be tested. A virtual CAN allows for emulation of a physical\nCAN interface, enabling testing and simulation without needing actual CAN\nhardware. This step is especially useful during development or in situations\nwhere physical hardware is not available."),(0,r.kt)("p",null,"The setup can be done using Linux utilities like ip link to create a virtual CAN\ninterface, followed by configuring its bitrate and bringing the interface up."),(0,r.kt)("p",null,"To set up the interface use the command ip link set vcan0 type vcan bitrate \u201cnum\u201d\n\u2013 Replace num with the desired bitrate value, matching the data in the CAN bus dump."),(0,r.kt)("h2",{id:"load-can-dump-data-into-virtual-can"},"Load CAN Dump Data Into Virtual CAN:"),(0,r.kt)("p",null,"After configuring the virtual CAN interface, the CAN dump previously captured\nneeds to be loaded into the system. Use canplayer to replay the CAN traffic from\nthe dump file over the virtual interface, simulating the behavior of the vehicle's\nCAN bus on your device."),(0,r.kt)("p",null,"Canplayer is a command line tool where canplayer invokes the application\nthe following are the valid input parameter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-I")," followed by the path of your CAN dump"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-l (num)")," num being number of times you want the file repeated ",(0,r.kt)("inlineCode",{parentName:"li"},"-i")," for infinite"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-t")," ignore timestamps"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-g<ms>")," gap in milliseconds, default 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-s<s>")," skips gaps in timestamp (s = seconds)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-x")," disable local loopback of sent CAN frames"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-v")," verbose \u2013 print sent CAN frames")))}s.isMDXComponent=!0}}]);