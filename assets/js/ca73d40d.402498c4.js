(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[670],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=u(n),s=i,f=d["".concat(c,".").concat(s)]||d[s]||p[s]||o;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8880:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),l=["components"],a={id:"core-commands-fileutil",title:"Fileutil"},c=void 0,u={unversionedId:"core/commands/core-commands-fileutil",id:"core/commands/core-commands-fileutil",isDocsHomePage:!1,title:"Fileutil",description:"fileutil.line_count",source:"@site/docs/core/commands/fileutil.md",sourceDirName:"core/commands",slug:"/core/commands/core-commands-fileutil",permalink:"/core/commands/core-commands-fileutil",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/core/commands/fileutil.md",tags:[],version:"current",frontMatter:{id:"core-commands-fileutil",title:"Fileutil"},sidebar:"coreSidebar",previous:{title:"Ec2X",permalink:"/core/commands/core-commands-ec2x"},next:{title:"Hooklib",permalink:"/core/commands/core-commands-hooklib"}},m=[{value:"<code>fileutil.line_count</code>",id:"fileutilline_count",children:[]},{value:"<code>fileutil.load_yaml</code>",id:"fileutilload_yaml",children:[]},{value:"<code>fileutil.remove_all</code>",id:"fileutilremove_all",children:[]},{value:"<code>fileutil.upload</code>",id:"fileutilupload",children:[]}],p={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"fileutilline_count"},(0,o.kt)("inlineCode",{parentName:"h2"},"fileutil.line_count")),(0,o.kt)("p",null,"Returns count of new line characters in a file."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"fileutilload_yaml"},(0,o.kt)("inlineCode",{parentName:"h2"},"fileutil.load_yaml")),(0,o.kt)("p",null,"Load a file as YAML or return default."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"fileutilremove_all"},(0,o.kt)("inlineCode",{parentName:"h2"},"fileutil.remove_all")),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"file.remove")," but with many at once."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"fileutilupload"},(0,o.kt)("inlineCode",{parentName:"h2"},"fileutil.upload")),(0,o.kt)("p",null,"Uploads a file (by default gzipped) to a service."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ARGUMENTS")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"path"))," (str): Path to the file.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"gzip"))," (bool): Gzip it? Default is ",(0,o.kt)("inlineCode",{parentName:"li"},"True"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"service"))," (str): The service to be used (Possible: ",(0,o.kt)("inlineCode",{parentName:"li"},"dropbox"),"). Default is None."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"token"))," (str): The token to use when uploading (Required when using ",(0,o.kt)("inlineCode",{parentName:"li"},"dropbox")," service)")))}d.isMDXComponent=!0}}]);