(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[2768],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return c},kt:function(){return m}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},22943:function(e,t,o){"use strict";o.d(t,{$:function(){return r}});var n=o(67294),r=function(e){var t=e.title,o=e.url;return n.createElement(n.Fragment,null,n.createElement("h2",null,"Discussion"),n.createElement("p",null,"If you'd like to discuss this topic with us or other fellow community members, you can do so on our community page dedicated for this guide: ",n.createElement("a",{href:o},t),"."))}},94691:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=o(22122),r=o(19756),a=(o(67294),o(3905)),i=o(22943),l=["components"],s={id:"local-development-workflow",title:"Local Development Workflow"},u=void 0,c={unversionedId:"getting_started/developer_guides/local-development-workflow",id:"getting_started/developer_guides/local-development-workflow",isDocsHomePage:!1,title:"Local Development Workflow",description:"When doing development with the AutoPi, it is possible to do it all through the Cloud.",source:"@site/docs/getting_started/developer_guides/local_development_workflow.mdx",sourceDirName:"getting_started/developer_guides",slug:"/getting_started/developer_guides/local-development-workflow",permalink:"/getting_started/developer_guides/local-development-workflow",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/getting_started/developer_guides/local_development_workflow.mdx",tags:[],version:"current",frontMatter:{id:"local-development-workflow",title:"Local Development Workflow"},sidebar:"sidebar",previous:{title:"How to SSH to Your Device",permalink:"/getting_started/developer_guides/how-to-ssh-to-your-device"},next:{title:"Reflashing Your Device",permalink:"/getting_started/developer_guides/reflashing-your-device"}},p=[{value:"Development on RPI With Screen and Keyboard or SSH",id:"development-on-rpi-with-screen-and-keyboard-or-ssh",children:[]},{value:"Remote Development on Dev Machine",id:"remote-development-on-dev-machine",children:[]}],d={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When doing development with the AutoPi, it is possible to do it all through the Cloud."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make changes"),(0,a.kt)("li",{parentName:"ol"},"Push changes to device"),(0,a.kt)("li",{parentName:"ol"},"Restart services"),(0,a.kt)("li",{parentName:"ol"},"Execute module"),(0,a.kt)("li",{parentName:"ol"},"Go to step 1")),(0,a.kt)("p",null,"But while this process can be used, it is much too slow for actual development. So the Cloud should\nbe used for management and to push out code when the development has finished, and not in the\nactual development workflow."),(0,a.kt)("p",null,"Fortunately, there are other much faster alternatives, here are a few ways to do it."),(0,a.kt)("h2",{id:"development-on-rpi-with-screen-and-keyboard-or-ssh"},"Development on RPI With Screen and Keyboard or SSH"),(0,a.kt)("p",null,"You could instead SSH into the device and edit the files directly. When syncing from the cloud,\nthe modules will be put in the following directories, based on the type:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/opt/autopi/salt/modules"),(0,a.kt)("li",{parentName:"ul"},"/opt/autopi/salt/returners"),(0,a.kt)("li",{parentName:"ul"},"/opt/autopi/salt/utils"),(0,a.kt)("li",{parentName:"ul"},"/opt/autopi/salt/engines"),(0,a.kt)("li",{parentName:"ul"},"/opt/autopi/salt/states")),(0,a.kt)("p",null,"So you can simply edit/create the files directly, but make sure to avoid clashes with the cloud\nsynced modules, to prevent losing work if you sync the module from the cloud, as that will, without\nasking, overwrite the file on the device, even if you have made local changes to it."),(0,a.kt)("p",null,"When you make changes to the files, to make sure that the minion process picks up on the change,\nyou can either restart the ",(0,a.kt)("inlineCode",{parentName:"p"},"salt-minion")," service, or run this command ",(0,a.kt)("inlineCode",{parentName:"p"},"saltutil.refresh_modules"),"\nwhich reloads the external modules, i.e. your code."),(0,a.kt)("h2",{id:"remote-development-on-dev-machine"},"Remote Development on Dev Machine"),(0,a.kt)("p",null,"Alternatively, another workflow can be to have a script on your development machine that copies\nthe files to the device via ",(0,a.kt)("a",{parentName:"p",href:"https://www.computerhope.com/unix/scp.htm"},(0,a.kt)("inlineCode",{parentName:"a"},"scp")),", that way you can\nmake the changes in your favorite editor. Remember to have the script also either restart the\nminion service or run the ",(0,a.kt)("inlineCode",{parentName:"p"},"refresh_modules")," command as noted above. Doing development on the local\nmachine is preferable for many, and is also the way we do development in office as it has the\nbenefit of the above solution, but also allows the user to be as productive as possible by in their\npreferred development environment."),(0,a.kt)("p",null,"We hope this helps you get started developing with our device and platform."),(0,a.kt)("p",null,"Remember that we also offer additional more in-depth paid support to get you started with your\nproject: ",(0,a.kt)("a",{parentName:"p",href:"https://shop.autopi.io/products/development-voucher"},"https://shop.autopi.io/products/development-voucher")),(0,a.kt)(i.$,{title:"Local Development Workflow",url:"https://community.autopi.io/t/guide-local-development-workflow/1800",mdxType:"Discussion"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In case you have any questions, don't hesitate to contact us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@autopi.io"},"support@autopi.io"),"."))))}m.isMDXComponent=!0}}]);