(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[2506],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=d(n),p=o,m=c["".concat(l,".").concat(p)]||c[p]||u[p]||i;return n?a.createElement(m,r(r({ref:t},h),{},{components:n})):a.createElement(m,r({ref:t},h))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},95207:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return h},default:function(){return c}});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),r=["components"],s={id:"create-pid-loggers",title:"Create PID Loggers"},l=void 0,d={unversionedId:"cloud/obd-ii/create-pid-loggers",id:"cloud/obd-ii/create-pid-loggers",isDocsHomePage:!1,title:"Create PID Loggers",description:"As explained in the introduction, PIDs are used to request and receive",source:"@site/docs/cloud/obd-ii/create_pid_loggers.md",sourceDirName:"cloud/obd-ii",slug:"/cloud/obd-ii/create-pid-loggers",permalink:"/cloud/obd-ii/create-pid-loggers",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/cloud/obd-ii/create_pid_loggers.md",tags:[],version:"current",frontMatter:{id:"create-pid-loggers",title:"Create PID Loggers"},sidebar:"sidebar",previous:{title:"CAN Bus Configuration",permalink:"/cloud/obd-ii/can-bus-configuration"},next:{title:"Create CAN Signal Loggers",permalink:"/cloud/obd-ii/create-can-signal-loggers"}},h=[{value:"Dissecting a PID",id:"dissecting-a-pid",children:[{value:"Requesting PIDs",id:"requesting-pids",children:[]}]},{value:"Creating a PID Logger",id:"creating-a-pid-logger",children:[{value:"Creating the PID",id:"creating-the-pid",children:[]},{value:"Enhanced PID",id:"enhanced-pid",children:[]},{value:"Creating the Logger",id:"creating-the-logger",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],u={toc:h};function c(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As explained in the ",(0,i.kt)("a",{parentName:"p",href:"/cloud/obd-ii/obd-ii-intro"},"introduction"),", PIDs are used to request and receive\ndata from the vehicle. It can be real-time data, such as RPM, Speed, Fuel Level and so on, but it\ncan also be in the form of Diagnostic Trouble Codes (DTCs) and other troubleshooting data useful to\nvehicle technicians."),(0,i.kt)("p",null,"In this guide, we will take a deeper look at how PIDs are structured and will also create a custom\nPID Logger for our AutoPi device."),(0,i.kt)("h2",{id:"dissecting-a-pid"},"Dissecting a PID"),(0,i.kt)("h4",{id:"request"},"Request"),(0,i.kt)("p",null,"Let's take a deeper look at the PID request that was presented in the introduction."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# PID request\n7DF # 02 01 0C 00 00 00 00 00\n")),(0,i.kt)("p",null,"Let's start with the general structure of the message. Firstly, we have the header (",(0,i.kt)("inlineCode",{parentName:"p"},"7DF"),"). The\nheader is a CAN identifier which defines who is sending the message and if it is a request or a\nresponse. In this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"7DF")," is the header used by external test equipment to make requests towards\nECUs in the vehicle. The hashtag symbol (#) simply separates the header from the body of the\nrequest."),(0,i.kt)("p",null,"Now, let's shift our focus on the body of the PID. The first byte of the body shows the length\n(in bytes) of the rest of the body. In this case, we only have two relevant bytes, so the length is\n",(0,i.kt)("inlineCode",{parentName:"p"},"02"),". The next byte defines which diagnostic service should be queried, while the third byte defines\nexactly which value is being queried. Mode ",(0,i.kt)("inlineCode",{parentName:"p"},"01")," is the current data diagnostic service, while ",(0,i.kt)("inlineCode",{parentName:"p"},"0C"),"\nqueries for the RPM value stored in that diagnostic service - i.e. the current value."),(0,i.kt)("p",null,"The rest of the body isn't going to be read by the ECU, so it is left empty."),(0,i.kt)("h4",{id:"response"},"Response"),(0,i.kt)("p",null,"The response from the ECU will look very similar with a few differences:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# response from ECU\n7E8 # 04 41 0C 0F A0 00 00 00\n")),(0,i.kt)("p",null,"In this case the header is ",(0,i.kt)("inlineCode",{parentName:"p"},"7E8")," which is the header used when ECUs send responses towards external\ntest equipments (i.e. requests made with the ",(0,i.kt)("inlineCode",{parentName:"p"},"7DF")," header). Again, the header is separated from the\nbody with a hash sign and the first byte of the body defines the length of the data."),(0,i.kt)("p",null,"However, the second byte changes a bit - it is the same as the query's second byte, except that\n0x40 is added to the value. The value after that is identical to the code sent with the request\n(",(0,i.kt)("inlineCode",{parentName:"p"},"0C")," for RPM), while the rest of the body is the actual value returned. Usually, all you need to\ndo is to transform the hexadecimal value to a decimal value, but that's not always the case.\nSometimes there's extra calculations that need to be done in order to get the value, for example\nin this case - the total value needs to be divided by 4, making the result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0F A0 in hex is 4000 in decimal\n4000 / 4 = 1000 RPM\n")),(0,i.kt)("h3",{id:"requesting-pids"},"Requesting PIDs"),(0,i.kt)("p",null,"You can send a PID request on the CAN bus manually using one of two commands:\n",(0,i.kt)("a",{parentName:"p",href:"/core/commands/core-commands-obd#obdsend"},(0,i.kt)("inlineCode",{parentName:"a"},"obd.send"))," or ",(0,i.kt)("a",{parentName:"p",href:"/core/commands/core-commands-obd#obdquery"},(0,i.kt)("inlineCode",{parentName:"a"},"obd.query")),". Here\nare examples of how to use both of them to send the aforementioned PID."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ obd.query MY_RPM header=7DF mode=01 pid=0C\n\n$ obd.send '7DF#010C' auto_format=True expect_response=True\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"obd.query")," command is relatively simple - you need to provide some arbitrary name for the PID\n(",(0,i.kt)("em",{parentName:"p"},"MY_RPM"),"). The ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," argument is the header of the PID. ",(0,i.kt)("inlineCode",{parentName:"p"},"mode")," is the diagnostic service that's\nbeing queried and the ",(0,i.kt)("inlineCode",{parentName:"p"},"pid")," argument is the exact value you want to query. If you compare the\ncommand to what was presented above, you will find many of the bytes are overlapping."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"obd.send")," command does exactly the same, but in a different format. You must specify the full\nPID to be sent in a string. Note that the length of the body is omitted. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"auto_format"),"\nargument is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"True")," it will automatically calculate the length byte and prepend it to the\nbody. You can also skip this argument and add the length byte and empty bytes yourself. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"expect_response")," argument will make sure that you receive a response back from the vehicle, if one\nwas provided. If you skip adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"expect_response")," argument, you will only send the PID on the\nCAN bus."),(0,i.kt)("h2",{id:"creating-a-pid-logger"},"Creating a PID Logger"),(0,i.kt)("p",null,"Let's now create a PID Logger for your vehicle. Firstly, we will create the PID itself, so that it\nis present in your Library. Next, we will use the PID from the Library to create a PID for your\nAutoPi device."),(0,i.kt)("h3",{id:"creating-the-pid"},"Creating the PID"),(0,i.kt)("p",null,"Let's create the RPM PID that we've examined in the previous section. Firstly, we will need to open\nthe OBD Library > My Library page. On that page, you will see a '+ Create' button. One\nof the options should be PID - select that one. The following pop-out window should show up:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create a PID window",src:n(87333).Z})),(0,i.kt)("p",null,"Let's go through the different fields that are available in this view:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Name"),": This is an arbitrary name you can give to your PID. This name will be used to create\ndata points for this PID logger, hence will be the name you use to create widgets on your Dashboard."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),": Some description for your own readability."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mode and Code"),": The mode (diagnostic service) and code together form the PID."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Header"),": This defines the header of the PID."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Bytes"),": This defines the expected length of the PID response."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Enhanced PID"),": This menu allows you to set some more specific details about how the PID should\nbe sent on the CAN bus and how the response should be found. See ",(0,i.kt)("a",{parentName:"p",href:"#enhanced-pid"},"Enhanced PID")," below."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Formula"),": This is where any parsing formulas can be inputted. Any valid python code can be\nwritten in this field and will be evaluated during the execution of a PID Logger."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Unit"),": You can specify the measurement units in this field."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Min and Max"),": These two fields define what are the minimum and maximum values that this PID can\nproduce."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Vehicle bus(es)"),": In this dropdown menu, you are able to select the CAN busses on which this PID\nis valid."),(0,i.kt)("p",null,'What means for a PID to be valid in this case? It means that if this PID was sent on the CAN bus of\na vehicle, the vehicle would recognize it and return a valid response. So now the question is, how\ncan we test the PID? On the right hand side of the window, there is a "Run in Terminal" button which\nallows you to run the PID if your device is online and plugged into your vehicle. Remember to have\nyour engine running while you execute the command.'),(0,i.kt)("p",null,"Once you've confirmed that the PID returns valid data that you can use, you can click the Save\nbutton and move on to the next section."),(0,i.kt)("h3",{id:"enhanced-pid"},"Enhanced PID"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Enhanced PID drowdown",src:n(61597).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Frames"),": how many frames the message is expected to consist of"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Strict"),": enforce frame and byte count"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CAN Extended Address"),": CAN Extended Address byte. Note that this does not refer to 29-bit headers,\nbut to an ELM327 specification. "),(0,i.kt)("p",null,"Before working with the CAN Flow Control Enhanced PID settings, it is highly recommended that you understand how the\n",(0,i.kt)("inlineCode",{parentName:"p"},"can_flow_control_")," prefixed parameters work on the obd.query command. This is explained in\n",(0,i.kt)("a",{parentName:"p",href:"/cloud/obd-ii/using-the-can-bus-commands#non-obd2-queries"},"non-OBD2 queries"),". The Enhanced PID\nsection essentially allows you to enrich your loggers with the same functionality. The filter and\nmask correspond to the ",(0,i.kt)("inlineCode",{parentName:"p"},"can_flow_control_filter")," parameter's 2 comma seperated values in that order. The\nsame applies to the Transmitter ID and Receiver ID."),(0,i.kt)("h3",{id:"creating-the-logger"},"Creating the Logger"),(0,i.kt)("p",null,"Now that we have a PID registered in our library, we can finally add a logger to our device which\nwill report data. Remember that in order to be able to register a PID as a logger on the device,\nthe device's vehicle bus needs to be added to the PID (look at vehicle busses in the last section)."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you're using your AutoPi with an internal combustion engine vehicle, you should see some default\nloggers setup for you already."))),(0,i.kt)("p",null,"Open up the Device > Loggers page. You will see a page with a '+ Create' button on the\nright-hand side. Click on that button and select the PID option. A new window should show up that\nlooks like the following screenshot:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create PID Logger Window",src:n(51372).Z})),(0,i.kt)("p",null,"Let's look through the fields available:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PID"),": This is the PID that you would like to use. Select it from the dropdown menu. If the PID\nyou want to assign doesn't appear in the list, remember that you need to add your vehicle's bus\nto the supported vehicle busses when editing the PID itself."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Interval"),": How often should the PID be queried (in seconds)?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Advanced"),": If you are familiar with ",(0,i.kt)("a",{parentName:"p",href:"/cloud/obd-ii/obd-ii-intro"},"AutoPi services"),", you might\nrecognize these options - the advanced options are going to be set on the pid_logger worker\nresponsible for querying the CAN bus."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Converter"),": The converter that should be used to convert the response from the PID Logger."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Filter"),": The filter that should be used to identify if the response should be filtered out.\nDefault is ",(0,i.kt)("inlineCode",{parentName:"li"},"alternating_readout")," which filters out consecutive repeating values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Trigger"),": The trigger function to be used if any events should be triggered based on this\nPID Logger. Default for RPM is ",(0,i.kt)("inlineCode",{parentName:"li"},"rpm_engine_event"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Returner"),": Which returner should be used to store the data.")),(0,i.kt)("p",null,"Once you save the PID Logger, you will see it appear in the Loggers page. Once the settings have\nbeen synchronized to your device, your device will start sending PID requests on the CAN bus using\nthe provided parameters and you should start receiving data."),(0,i.kt)("p",null,"If for some reason, you aren't getting any data back from the logger, you can take a look at the\nlog files for some clues about what's going wrong. Take a look ",(0,i.kt)("a",{parentName:"p",href:"/developer_guides/autopi-logs"},"here")," for\nmore information on how to view those logs."),(0,i.kt)("p",null,"You can also take a look at the obd_manager workers(Device > Services > obd_manager > Workers).\nThere, you can notice that a new worker was created: pid_logger_10sec. If you view that worker\nyou'll see that the parameters setup for the PID are also available there. We discourage you to\nmake changes directly on the worker, as the worker is auto-generated based on what parameters are\nprovided to the PID and the PID Logger. Instead, make the necessary changes on the PID and PID\nLogger."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this guide we talked more in-depth about PIDs and PID Loggers. We setup a custom PID that was\nthen used to create a PID Logger and got a very small insight into the automated processes that\nexist in the AutoPi ecosystem."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In case you have any questions, don't hesitate to contact us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@autopi.io"},"support@autopi.io"),"."))))}c.isMDXComponent=!0},51372:function(e,t,n){"use strict";t.Z=n.p+"assets/images/create_pid_logger_window-13a013f7a2f079ac139a699a72775539.jpg"},87333:function(e,t,n){"use strict";t.Z=n.p+"assets/images/create_pid_window-9f033f368578fe89f207dd508d09cbb8.jpg"},61597:function(e,t,n){"use strict";t.Z=n.p+"assets/images/enhanced_pid_dropdown-3f57d24cce6659153b6cd3cd4c90cbed.png"}}]);