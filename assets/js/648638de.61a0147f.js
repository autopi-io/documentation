(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[1251],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68666:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=a(22122),i=a(19756),r=(a(67294),a(3905)),o=["components"],c={id:"device-install-procedure",title:"Device Install Procedure"},s=void 0,l={unversionedId:"cloud/fleet/device-install-procedure",id:"cloud/fleet/device-install-procedure",isDocsHomePage:!1,title:"Device Install Procedure",description:"This is a detailed description of how to infleet new devices to any fleet, how to pair devices to vehicles and how to assigne devices to templates.",source:"@site/docs/cloud/fleet/Device_Install_Procedure.md",sourceDirName:"cloud/fleet",slug:"/cloud/fleet/device-install-procedure",permalink:"/cloud/fleet/device-install-procedure",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/cloud/fleet/Device_Install_Procedure.md",tags:[],version:"current",frontMatter:{id:"device-install-procedure",title:"Device Install Procedure"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/cloud/fleet/fleet-intro"},next:{title:"Overview",permalink:"/cloud/fleet/fleet-overview"}},p=[{value:"Procedure for Pairing a Device and Vehicle.",id:"procedure-for-pairing-a-device-and-vehicle",children:[]},{value:"Procedure for Assigning Devices to Templates.",id:"procedure-for-assigning-devices-to-templates",children:[{value:"What are Templates?",id:"what-are-templates",children:[]}]},{value:"Update Devices and Clear Pending Syncs From Fleet Management.",id:"update-devices-and-clear-pending-syncs-from-fleet-management",children:[{value:"What Pending Syncs",id:"what-pending-syncs",children:[]}]},{value:"Check List for Setting Up a New Car.",id:"check-list-for-setting-up-a-new-car",children:[]},{value:"Procedure for Changing Vehicle Assigned to a Device.",id:"procedure-for-changing-vehicle-assigned-to-a-device",children:[]}],d={toc:p};function u(e){var t=e.components,c=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a detailed description of how to infleet new devices to any fleet, how to pair devices to vehicles and how to assigne devices to templates. "),(0,r.kt)("h2",{id:"procedure-for-pairing-a-device-and-vehicle"},"Procedure for Pairing a Device and Vehicle."),(0,r.kt)("p",null,"In this section we will go over the process of a device with either an existing vehicle or creating a new vehicle. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to your fleet managment cloud service such as cloud.autopi.io")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the main screen go to Devices.\n",(0,r.kt)("img",{alt:"main_screen_devices",src:a(68730).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the device you want to pair a new vehicle with from the list of available devices or search for a specific device.\n",(0,r.kt)("img",{alt:"device_scrren",src:a(25331).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once you have selected the device you want to pair a vehicle with go to settings.\n",(0,r.kt)("img",{alt:"selected_device_settings",src:a(2043).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to pair the devices with an existing vehicle follow the steps if not go to 6.   "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"I. At the top of the device settings there's a dropdown menu of all the registered vehicles.\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"device_settings_select_vehicle",src:a(89188).Z})),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"II. Scrolling down in the drop down menue are all of the unassigned vehicles.\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"select_vehicle_from_list_of_unassigned",src:a(38904).Z})," "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"III. Once you have selected the vehicle you wish to pair the device with you can click save    \n     at the bottom of the pop-up window.\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are looking to create a new vehicle to pair the device to follow the steps outlined.       "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"I. Go to Vehicles Editor at the top of the pop-up window.\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"device_settings_new_vehicle",src:a(61548).Z})),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"II. From the Vehicle Editor click the new vehicle button and fill in the relevant details for the vehicle,   \n    such as make and model.   \n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"create_new_vehicle_screen_button",src:a(52787).Z})),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"III. Once you have filled in the details for the vehicle and optionally added any CAN busses you can return   \n     to Device.   \n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"return_to_device_settings",src:a(47051).Z})),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"IV. Verify that the device is connected to the newly created vehicle and click save. \n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"device_settings_select_vehicle",src:a(89188).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The device is now paired to a vehicle."))),(0,r.kt)("h2",{id:"procedure-for-assigning-devices-to-templates"},"Procedure for Assigning Devices to Templates."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to your fleet management cloud service such as cloud.autopi.io")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the main screen go to Templates.\n",(0,r.kt)("img",{alt:"main_screen_templates",src:a(97408).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the template you want to assigned devices to from and click on it.\n",(0,r.kt)("img",{alt:"template_screen",src:a(30650).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To add a device to the template click the add button.\n",(0,r.kt)("img",{alt:"template_device_add",src:a(57310).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the popup window, either select the device you want to assign to the template or search for it in the drop down menu.\n",(0,r.kt)("img",{alt:"select_devices_for_template",src:a(24278).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"once you have assigned one or all the devices you want to have on the template you can."),(0,r.kt)("p",{parentName:"li"},"A. Click apply template and click apply all async.\n",(0,r.kt)("img",{alt:"Apply_templates_all_async",src:a(41168).Z})," "),(0,r.kt)("p",{parentName:"li"},"B. Or if you don't want to apply the template to all devices you want to apply the template to from the list below Select Apply Template async from the dropdown menu and click run.\n",(0,r.kt)("img",{alt:"apply_to_selected",src:a(11235).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You've now assigned one or more devices to a template and applied that template to the device."))),(0,r.kt)("h3",{id:"what-are-templates"},"What are Templates?"),(0,r.kt)("p",null,"Templates are a feature the allows for the setup and configuration of several devices quickly and easily.\nOnce a template has been defined it is as simple as assigning a device to template and the configurations, custom code,\nservices, and much more can be applied to all the devices by the click of a button.   "),(0,r.kt)("p",null,"Templates are customizable to make as many or as few changes to the devices as needed if you are interested in learning more about how to create templates you can read more about here: ",(0,r.kt)("a",{parentName:"p",href:"/cloud/fleet/fleet-templates"},"Templates")),(0,r.kt)("h2",{id:"update-devices-and-clear-pending-syncs-from-fleet-management"},"Update Devices and Clear Pending Syncs From Fleet Management."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to your fleet management cloud service such as cloud.autopi.io")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the main screen go to Devices.\n",(0,r.kt)("img",{alt:"main_screen_devices",src:a(68730).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the device you would like to verify is updated and has no pending syncs from the list of registered devices.\n",(0,r.kt)("img",{alt:"device_scrren",src:a(25331).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the overview scrren you can see the installed verion of the device, the text below the version number indicates whether an update are avaliable.\n",(0,r.kt)("img",{alt:"device_software_version",src:a(83107).Z})," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If and update is aviiable click the more button and then software updates.\n",(0,r.kt)("img",{alt:"Device_more_software_updates",src:a(51185).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From set the device to update the next time it goes to sleep or on startup depending on the button you click.\n",(0,r.kt)("img",{alt:"software_update_buttons",src:a(98295).Z})," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To clear the any pending syncs click the circle with an arrow pointing down in it, on the bottom right of the screen.\n",(0,r.kt)("img",{alt:"Pending_button_highlighted",src:a(93311).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the pop-up window, you'll see any changes that are pending sync clicking the sync button will",(0,r.kt)("br",{parentName:"p"}),"\n","still the syncing process if the devices is connected to the cloud.\n",(0,r.kt)("img",{alt:"sync_button_highlighted",src:a(66496).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You have now made sure the device is up to date and any changes have been synced ot the device. "))),(0,r.kt)("h3",{id:"what-pending-syncs"},"What Pending Syncs"),(0,r.kt)("p",null,"Pending Syncs are changes made to a device from a cloud service such as the cloud.autopi.io or my.autopi.io that\nneeds to be applied to the devices before they take effect.",(0,r.kt)("br",{parentName:"p"}),"\n","The Pending sync will automatically be applied the next time it starts or when manually asked to sync\nif the device is online while changes are being made. "),(0,r.kt)("h2",{id:"check-list-for-setting-up-a-new-car"},"Check List for Setting Up a New Car."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ensure that the device is assigned to the correct template and that the template has been applied to the device. "),(0,r.kt)("li",{parentName:"ol"},"Make sure the device is paired with the correct vehicle."),(0,r.kt)("li",{parentName:"ol"},"Update the device to the latest version. "),(0,r.kt)("li",{parentName:"ol"},"Clear any pending syncs. ")),(0,r.kt)("h2",{id:"procedure-for-changing-vehicle-assigned-to-a-device"},"Procedure for Changing Vehicle Assigned to a Device."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure that the template that is assigned is appropriate for the new vehicle, if not then assign the device",(0,r.kt)("br",{parentName:"li"}),"to a template that is appropriate for the new vehicle."),(0,r.kt)("li",{parentName:"ol"},"create a new vehicle to connect the device to if it hasn\u2019t already been created."),(0,r.kt)("li",{parentName:"ol"},"Pair the device with the newly created vehicle or from the list of unassigned vehicles.  "),(0,r.kt)("li",{parentName:"ol"},"Make sure the device is updated."),(0,r.kt)("li",{parentName:"ol"},"Make sure the has no changes waiting to be synced.")))}u.isMDXComponent=!0},41168:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Apply_templates_all_async-8052751d1757e4d3aeb41a217b3e977f.png"},51185:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Device_more_software_updates-91e58020c86728df58f3b140f4dd705a.png"},93311:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Pending_button_highlighted-2fcc76738b119f03f02d794e88322ba0.png"},11235:function(e,t,a){"use strict";t.Z=a.p+"assets/images/apply_to_selected-d311ad63e374feaf14d8bf4f54fa53dd.png"},52787:function(e,t,a){"use strict";t.Z=a.p+"assets/images/create_new_vehicle_screen_button-0d9d53dcb88ce75fe1c67500e5a4ca7a.png"},25331:function(e,t,a){"use strict";t.Z=a.p+"assets/images/device_screen-8a08f98df54b9a95bb765d9c754b36f0.jpg"},61548:function(e,t,a){"use strict";t.Z=a.p+"assets/images/device_settings_new_vehicle-9e706586331baeeb12f83eedcbcedbb9.png"},89188:function(e,t,a){"use strict";t.Z=a.p+"assets/images/device_settings_select_vehicle-4d0f9c4532696f766b05fe811376ae09.png"},83107:function(e,t,a){"use strict";t.Z=a.p+"assets/images/device_software_version-5284300d54163f0138b3297331561ecd.png"},68730:function(e,t,a){"use strict";t.Z=a.p+"assets/images/main_screen_devices-f7989ce8eda5947316fd8a4cbbf48b13.jpg"},97408:function(e,t,a){"use strict";t.Z=a.p+"assets/images/main_screen_templates-a7fd77b1c62bc17e651d7461b29d5bbf.png"},47051:function(e,t,a){"use strict";t.Z=a.p+"assets/images/return_to_device_settings-c54530a44e5503030b25006006756f0f.png"},24278:function(e,t,a){"use strict";t.Z=a.p+"assets/images/select_devices_for_template-ff4d0341be14b6cc70c3e4b6de47a7a1.png"},38904:function(e,t,a){"use strict";t.Z=a.p+"assets/images/select_vehicle_from_list_of_unassigned-8042738c1fb19f7b87424e1b4cd47e10.png"},2043:function(e,t,a){"use strict";t.Z=a.p+"assets/images/selected_device_settings-0e10f2d6fb2682713170347a4707725f.jpg"},98295:function(e,t,a){"use strict";t.Z=a.p+"assets/images/software_update_buttons-d7d72a2022f9ba509b4f3cedbe01cc99.png"},66496:function(e,t,a){"use strict";t.Z=a.p+"assets/images/sync_button_highlighted-97e192813875b785aa457635d8fcb7c5.png"},57310:function(e,t,a){"use strict";t.Z=a.p+"assets/images/template_device_add-b1facaa62f24c7cb3e5f9f6edaad82b1.png"},30650:function(e,t,a){"use strict";t.Z=a.p+"assets/images/template_screen-a6d83f630df36aecdf483a947291605a.png"}}]);