(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[3762],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return c},kt:function(){return p}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(i),p=n,h=m["".concat(u,".").concat(p)]||m[p]||d[p]||o;return i?r.createElement(h,a(a({ref:t},c),{},{components:i})):r.createElement(h,a({ref:t},c))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=i[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},2943:function(e,t,i){"use strict";i.d(t,{$:function(){return n}});var r=i(7294),n=function(e){var t=e.title,i=e.url;return r.createElement(r.Fragment,null,r.createElement("h2",null,"Discussion"),r.createElement("p",null,"If you'd like to discuss this topic with us or other fellow community members, you can do so on our community page dedicated for this guide: ",r.createElement("a",{href:i},t),"."),r.createElement("p",null,"You can also write us an email on ",r.createElement("a",{href:"mailto:support@autopi.io"},"support@autopi.io"),". We usually respond back in 24 hours on working days."))}},7262:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=i(2122),n=i(9756),o=(i(7294),i(3905)),a=i(2943),s=["components"],u={id:"how-to-import-custom-dbc-files",title:"How to Import Custom DBC Files"},l=void 0,c={unversionedId:"guides/obd-ii/how-to-import-custom-dbc-files",id:"guides/obd-ii/how-to-import-custom-dbc-files",isDocsHomePage:!1,title:"How to Import Custom DBC Files",description:"DBC files describe the CAN network traffic of a vehicle. It specifies what modules are within it,",source:"@site/docs/guides/obd-ii/how_to_import_custom_dbc_files.mdx",sourceDirName:"guides/obd-ii",slug:"/guides/obd-ii/how-to-import-custom-dbc-files",permalink:"/guides/obd-ii/how-to-import-custom-dbc-files",tags:[],version:"current",frontMatter:{id:"how-to-import-custom-dbc-files",title:"How to Import Custom DBC Files"},sidebar:"guidesSidebar",previous:{title:"Debug Raw PID Queries",permalink:"/guides/obd-ii/debug-raw-pid-queries"},next:{title:'How To Use The "Car Explorer" Feature',permalink:"/guides/obd-ii/how-to-use-the-car-explorer-feature"}},d=[{value:"Steps to Import a New DBC File in Your Library",id:"steps-to-import-a-new-dbc-file-in-your-library",children:[]},{value:"Adding Descriptions for Better Readability",id:"adding-descriptions-for-better-readability",children:[]},{value:"Sharing CAN Messages With the Rest of the Community",id:"sharing-can-messages-with-the-rest-of-the-community",children:[]}],m={toc:d};function p(e){var t=e.components,u=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"DBC files describe the CAN network traffic of a vehicle. It specifies what modules are within it,\nwhat messages they can send, the messages' signals and details about them. In this guide we're\ngoing to review how you can import these files in ",(0,o.kt)("a",{parentName:"p",href:"https://my.autopi.io"},"my.autopi.io"),", how to\nimprove their readability and how you can share them with the rest of the community."),(0,o.kt)("h2",{id:"steps-to-import-a-new-dbc-file-in-your-library"},"Steps to Import a New DBC File in Your Library"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Car Explorer")," > ",(0,o.kt)("strong",{parentName:"li"},"Library")," and click on the Import button:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Import button",src:i(2676).Z})," "),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Select DBC from the dropdown menu that shows up and select the file from your filesystem."),(0,o.kt)("li",{parentName:"ol"},"A list of the imported CAN signals will show up in your library.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Library view",src:i(4452).Z})," "),(0,o.kt)("h2",{id:"adding-descriptions-for-better-readability"},"Adding Descriptions for Better Readability"),(0,o.kt)("p",null,"Some signal names can be very self explanatory. However some messages might be harder to\nunderstand. You can add descriptions to those messages to make it easier to recognize them in the\nfuture or for other fellow users, if you decide to share those signals with the community."),(0,o.kt)("p",null,"To add a description for a signal, click on the signal you want to describe. A CAN message editing\nwindow will pop out. In this window you'll be able to see the CAN message at the top with all\nsignals associated with it in a list below. The signal that you clicked on will be already expanded\nand highlighted in yellow."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Editing a CAN message",src:i(3711).Z})),(0,o.kt)("p",null,"Edit the description field of the signal and click Save. You can also associate that CAN message\nwith a vehicle CAN bus. You should see the CAN signal update with the new description:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ABS Malfunction example",src:i(7774).Z})," "),(0,o.kt)("h2",{id:"sharing-can-messages-with-the-rest-of-the-community"},"Sharing CAN Messages With the Rest of the Community"),(0,o.kt)("p",null,'To make it easy for other community members, you can share CAN messages you\'ve identified for your\nvehicle. To do that, you must first associate a CAN message with a vehicle CAN bus, which you can\ndo at the bottom of the "Editing CAN Message" pop-out window. After you\'ve saved the changes,\nyou\'ll be able to click on the "Share with the community" checkbox.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sharing a can message",src:i(9185).Z})," "),(0,o.kt)("p",null,"Saving the changes shares the CAN message and all signals with the community."),(0,o.kt)(a.$,{title:"How to Import Custom DBC Files",url:"https://community.autopi.io/t/how-to-import-custom-dbc-files/2091",mdxType:"Discussion"}))}p.isMDXComponent=!0},7774:function(e,t){"use strict";t.Z="data:image/png;base64,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"},3711:function(e,t,i){"use strict";t.Z=i.p+"assets/images/editing_a_can_message-5d5f4bce434e28a62c8a432e49793e53.png"},2676:function(e,t,i){"use strict";t.Z=i.p+"assets/images/import_button-f7a757b0a1211dd55d62aa66ab2474da.png"},4452:function(e,t,i){"use strict";t.Z=i.p+"assets/images/library_view-9b2e7dc09a159c0d9e0e46b62122d048.png"},9185:function(e,t,i){"use strict";t.Z=i.p+"assets/images/sharing_a_can_message-0e303c9648c4f62e224940d351105a42.png"}}]);