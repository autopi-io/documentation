(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[8523],{3905:function(e,t,A){"use strict";A.d(t,{Zo:function(){return s},kt:function(){return p}});var n=A(7294);function r(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function a(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function i(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?a(Object(A),!0).forEach((function(t){r(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):a(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function o(e,t){if(null==e)return{};var A,n,r=function(e,t){if(null==e)return{};var A,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||(r[A]=e[A]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(r[A]=e[A])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),A=t;return e&&(A="function"==typeof e?e(t):i(i({},t),e)),A},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var A=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=l(A),p=r,f=d["".concat(u,".").concat(p)]||d[p]||c[p]||a;return A?n.createElement(f,i(i({ref:t},s),{},{components:A})):n.createElement(f,i({ref:t},s))}));function p(e,t){var A=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=A.length,i=new Array(a);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<a;l++)i[l]=A[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,A)}d.displayName="MDXCreateElement"},1415:function(e,t,A){"use strict";A.r(t),A.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=A(2122),r=A(9756),a=(A(7294),A(3905)),i=["components"],o={id:"reflashing-your-device",title:"Reflashing your device"},u=void 0,l={unversionedId:"guides/reflashing-your-device",id:"guides/reflashing-your-device",isDocsHomePage:!1,title:"Reflashing your device",description:"Your device contains an SD card with the AutoPi Core preinstalled. The SD card is located inside",source:"@site/docs/guides/reflashing_your_device.md",sourceDirName:"guides",slug:"/guides/reflashing-your-device",permalink:"/guides/reflashing-your-device",version:"current",frontMatter:{id:"reflashing-your-device",title:"Reflashing your device"},sidebar:"guidesSidebar",previous:{title:"Power Cycle for Electric Vehicles",permalink:"/guides/power-cycle-for-electric-vehicles"},next:{title:"Remotely waking up your device",permalink:"/guides/remotely-waking-up-your-device"}},s=[{value:"Discussion",id:"discussion",children:[]}],c={toc:s};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Your device contains an SD card with the AutoPi Core preinstalled. The SD card is located inside\nthe device. "),(0,a.kt)("p",null,"If you find yourself in need of reflashing your device, then you can always get the latest AutoPi\nCore image from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/autopi-io/autopi-core/releases"},"here"),"."),(0,a.kt)("p",null,"Make sure that you select the right image for your device. Generation 2 devices should use the\nautopi","_","core","_","gen2","_","*",".img.gz image while generation 3 (TMU) devices should use the\nautopi","_","core","_","tmu","_","*",".img.gz image. We recommend using ",(0,a.kt)("a",{parentName:"p",href:"https://etcher.io"},"Etcher")," for flashing -\nit will take the GZ image directly and flash it."),(0,a.kt)("p",null,"Once you have flashed your device, you will need to have it re-accepted in the AutoPi Cloud. To do\nso, you need to first have the device boot up and connect to the internet. After that, log in to\n",(0,a.kt)("a",{parentName:"p",href:"https://my.autopi.io"},"my.autopi.io"),". You should immediately see a notification letting you know\nthat the device's key isn't accepted."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you are a business customer and have a dedicated environment, there is an extra step that you need\nto take. Take a look at ",(0,a.kt)("a",{parentName:"p",href:"/guides/business/move-to-dedicated-environment"},"this")," guide for more information."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Not accepted notification",src:A(2410).Z})),(0,a.kt)("p",null,'Another way of accepting the key is to go to the Settings page and navigating to your device\'s\ngeneral settings. There you should be able to see that the "Key state" field says unaccepted and a\ngreen "Accept" button should be showing. Clicking on the button, accepts the key.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Accept device button",src:A(5558).Z})),(0,a.kt)("p",null,"When your device comes online the first time, the WiFi hotspot will have the following setup:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SSID"),": AutoPi-Initial",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Password"),": autopi2018"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Remember to update your device from the Cloud after you reflash it, as that will ensure that all\nthe configuration values are properly configured (like the WiFi, SSID and password), and that the\ndevice has the correct authentication token for uploading data to the cloud."))),(0,a.kt)("h2",{id:"discussion"},"Discussion"),(0,a.kt)("p",null,"If you'd like to discuss this topic with us or other fellow community members, you can do so on\nour community page dedicated for this guide:\n",(0,a.kt)("a",{parentName:"p",href:"https://community.autopi.io/t/guide-reflashing-your-device/668"},"Guide: Reflashing your device")))}d.isMDXComponent=!0},5558:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8YAAACZCAIAAABiw7QpAAAaSElEQVR42u3dh1dUZ97A8f0z3t1Uu8aYYkURRAFBREViQMWGBXsvscSoKGJBxR4UFesGa0wUG2KLoBTBAlgAEQSlSJc66PvTZ/fu3QEHNOoa+H7OPZ47z3PnTvWc751zmfnbcwAAAAB/wt94CgAAAACSGgAAACCpAQAAAJIaAAAAIKkBAAAA/ImkLi8vz8vLewIAAACgCkllCeYakjo3N9dgMHCcAQAAAFQlqSxVXUNSS3rzTAEAAACvUm0wk9QAAAAASQ0AAACQ1AAAAABJDQAAAJDUJDUAAABAUgMAAAAkNQAAAEBSAwAAACQ1AAAAAJIaAAAAIKkBAACAupfUWdnZ5eXlar20rCwzK8tgqOQpBgAAAEld26TuaGUTERX9oqdLS4ePHj/f0+vZs2dv9+6GXrkasHuf6W3SHz1e6LWMlxYAAAB/1aSurKycOWf++CkzKioqtClZT0l9qBW2NPeTJzm6m8gpLSurusOip0/lWtpF2cY/YNeocZPy8vK1XcnNJT9IkR2qiwZDZUTktfYW3WQb7SNzkZGZVVBYyOsNAACAv0BS+/iuGzTcQ2pYGz96LMjW0cl1kLt9n+/i79yVkYTEJKnerOzsF7GbkSnraenpRnvbF3igu2Nfd49xvfsNuJuQKCPHT5yy7tHbvJudjBQWFsnI6eAQB6fvv3cb2tnaLjjkvIw8SEmVW5EdyjZhV8NlRLYcPnq8k8tAu17Oi71XvPUPzgEAAEBSv82knvbDPMnZqOgYbfBxRob0blJysqzvP3RkwNARatzNfdTBI0dlJfDgkRFjJ1bdm1R42NUIWZEyvhx2VQ3u/WX/2EnTtG0OH/393sva/uXAIel4NSjVLvdB22bpilXzPb2ev/zMW8I65PxFXnUAAAB8uEnt5OI2c878gcNGaidyBJ8739W+l/fK1bLMXeDZwdK6uLhExfHEaTNlZdyU6aqtjSxf5WvXy3mZz5or4ZHaoFFS5xcUBJ06vXrdxknTZ/Xs61JtUrsOdpebUHegr6vb+k1+vOoAAAD4cJP6j9CwoqIiCWvpVzV47sKlHk79wiOjtKWs7MUpzlnZ2Z2t7dLS0y1seuTl5Ve7Q4njrTt2Ojq7+G7YXDWpKysrvxswWJr7wqXLAbv3vSqppe/Xb96i3br6vBwAAAD4QJNafePHrbj4jla2p4NDZD0zK8vC2l6dCiJFu3bjz9r2E6fNnDB15rQf5lXdVWlpqbSy+tvEbQG7tYw+eiyor6ub+gj8YVq6pPODlFRp64Vey7SkVuMpqanqoo/vuknTZ1VUVEjKS5rH3LjJqw4AAIAPPanFrr3/7GrnmPowTdbPnr/g6Oxi6+gk1audFS2CTp2W9j1z9ly1e/MP2GXdo7dz/0HfDRh881asGszJzR06amxnazv19R1S0ubd7GTny1f5akktfly4pEt3h4t/hMp6SUnJ1FlzbRz6yMjcBZ7ad4MAAAAAH1xSm5ZfUGA0cvRYkF0v52q/Pk8xGCqrXkuNa+tSzAaDwfQ2z19+7K1OOAEAAAD+qkltZLH3Cgtr+6BTp3kNAAAAQFK/iZTU1Pz8fF4AAAAAkNQAAAAASU1SAwAAACQ1AAAAQFIDAAAAJDUAAABAUpPUAAAAwAeR1M9e4ikGAAAASf16SZ2Tm+sfsMt1sLuFtb0ssiIXZZDnGgAAACR1zdLSH/XuN6C9RTejRQZl6n/1IDOzsh5nZLzZLAAAAPD+kvpVPW26qj0mTNmxe69+JPlBimyfm5cn61t37OzWo5dR8roOcv/t+An9yNnzF+QqEZHXjHZ+6NffXAe7W/fo3d2xr4PT90ePBdVytur9f/T4sYyPnTStg6V1Rysbsy42fb4fsHyV79PiYhn3Wu5T9SqdunavcW/qouxw8IjRPr7rEpPu86YEAACop0ldUVHh5OKmAnHWvJ+mz56n1mVFLqp12UA2e92kltwcN3ma/rTsqkk9Y86PkqSLli7XDwbs3ic5Hn39RmVlpVy8GRvn6Oyy/9CR2szKHYiOuV71YUoE+wfskhW5Vlz8bblj46fM0G8QePCw3BOja9W4N4PBcC8hcev2nV3tHC+HXeV9CQAAUB+T+lTwWdXNHuMnGwyVks6SubLIilyUQTUrm71uUkuzjp4wZV/gAX1S6z9RzsvLt+reMyk5uat9r9LSUjUoyWtp6xAccl6/50uXQzf8vLXG2dpEsBJ2Ndysi03R06d/Mqk1fv47nPsP4n0JAABQH5Pac+lyFc2SqlHRMTJS/pKsyEUZVLOe//1Bcm2SeuK0makP02wc+mgnRRgl9YHDv86cM19WpLxPnvlXsqekpspOsrOrv/OmZ2sfwaeDQ8y72ZWVlb+tpI6/c1c2Lioq4q0JAABQ75J63ORp2onCFjY9bt+5q8ZlRS5qU7LZGyS1rOwLPOjmPko1ulFSDx89Xn34ffDI0ckzZqvBcxcudbXv9ap7a3pWRXBnazs5ElBL/yHDq0ZwXPztYR7jJk2fpb/iq5K6xr0pUucdLK2jr9/grQkAAFDvknrmnPlaN8u6ds60rBhNvVlSV1ZWjhg7UZ2YoU/qlNRU8252cpWMzCzJ945Wtk+e5Mh4dMx1sy42KsGrMj2rIvjQr7/djI1Ty52797QI7tLdwb73dzYOfWQbqWej7wd8VVK/am9GSZ2VnS0bP0hJ5a0JAABQ75J6k5+/iuaRYyeqno6IipZFVbUMqlnZzOiKk2fM3ui3VT8SF3+7g6V1cXGJPqlValvaOkRfv6FPaj//HUZfprEv8KCMFxQWynpCYlK199b07HOTp2osWro8PDJKlmq/wORPnvgReuWqVfee/EQOAABAfUzqlNSHqmilCG/cvHUt5ro6yUFW5KIMqlnZzOiKW7YFeIyfrB+RJh4wdIRa1ye12LX3n04uAx2dXbSkdnJxO3nmrMFQqZYDh3/Viva7AYOX+azR7zlg976ps+bWZrb2EfwWk7q0tHSYx7gpM2fzvgQAAKiPSa3iWHVzZ2s78252al1W5KJalw2qXuteQqKU9/pNfk+e5EhTnr94SS7u3hdYbVJLNA8dNVZ2pZI65sZNC2t79c3Q/763OWZdbJLuJ6vZTl27S4XLYElJye9BJy1semh/v2h6Vm5C1lNSU7XFYDD8maR+1d5Wrd0gFxMSk47+ftxjwhQ5QniSk8P7EgAAoJ4m9fPqTsPQFpl61bWiomP6urqpXzyx7tF76/ad2pRRUovEpPuSwiqpvVeunjn3J6O9jZk4VfsuvOMnT7sOdu9gaS2dbePQ5/iJU/otTcya+HGWN0tq0z/1IndgyIjRktepD9N4UwIAANTrpH7+8tyMrnaO+nyUizJY813JyXmQkvouTiPOzMpKS09/s1kAAADgfSe1eFpcHHzu/M49+2SRFf2JGQAAAABJDQAAAICkBgAAAEhqAAAAgKQGAAAASGoAAACApCapAQAAAJIaAAAAIKkBAAAAkhoAAAAgqUlqAAAAgKQGAAAASGoAAACApAYAAABIapIaAAAAIKkBAAAAkhoAAAAgqQEAAACSGgAAAABJDQAAAJDUb0NKSsqSpd5JSfff6a2s37Bp+44A3mfvTWhomLysZWVlPBUAAKDuJ3VqamqDRk0HuA02Gi8uKWlnZm5mblFSUvpOH3nYlav/99Gn585feHc3UVFR0bBJ86++bfueX9SioqLQsCvZf8Fjodu378Rcv/Enj2HkZX369Cn/twEAQN1Paq1+jged0A+uWLlKBkPOnX/Xj/w9JLWIj7+dkJj4nl/UGzdvVn1i/xKGDBve1aY7SQ0AAEjq2iovL7e0sm7bvmNxcbEauX8/+bOGTUaNHvseHvn7Ser/CZKapAYAAPUlqUVo2BUJIO/lK9RFtyHDGjVtkZ7+SF3Mzc1bumx5D8feLVp+NdR9ROCBg9oVk5MfdOlmE3w2RL+33k7Oq33XqnX3EaOWr/AJDj7bp+93nzZoLNubTurikhK5Sj+XAU9yctTImeBgjzHjWrb6xr5nr2XLV6ruLykp7W7fU/as39WlP/6QOxMeEVH1AY4eO37mD7O1i2dDzjl/79rsi1YOvfqsWuP7+HFGtU/L2nUbBrgNzszMHDNuQqtv2nzTpt0Ps+cWFRVpGzx79sx/2/b+AwfJrpyc+8mjLi3913kycnMdOnWWh9amnZncq0OHj1R7E5cvh8o+25mZy87lub2XkKCflSdWbvrLr1ubW1hNnjo9KyurlrPqjrn0Hyh3TO7ert17tam8vDy5P6dOnwk5d97ewbFxsy8GDhqi3b1bsbEyK6++HFPJSq8+zjXuUJF3hYzL3uR1kZebpAYAAPUuqcXEyVMkeROTkk6eOi0x9POWrWq8rKzMuZ9Lg8bNpN58Vq2RxpLZgF271eydO3fl4uEjv+p3JeUtmajWJcuk21SLL1jomZ2dbSKp5bYkYWXjuLh4NSvZ949PPpccl0SbNmOW+uxc8k6mho/0+OrbtmpdkQ2at2xV7Z/EyX2Q4FPrp88E//3jz4YMG75n777FXt5yc5ZW1gaDoeq15sybLzchD1mafqXPanksclclXrUN5EhDRlwHuEmXy5HAx581lHZXd0kiVZ4EmZURmY2Ojqm6f0lPuSd2PXr6rF4ze+6Pclty5PDo0WM1K8/JR582sOxqLYc64yZMklqV8s7IyKjNrBx7yE3LS7Zx0+bBQ91lXfvrTDlWkYsTJk2RBz55yjR5COpx/X7suMzKcZTc286WXaXUZWXj5p9r3KGQN4CMWFnbyp2RPUt2y+tIUgMAgHqX1FlZWVJC37n0lzLrZmunJaakpLSRdLa25UiPMZK56tTk2iS1VGNoaNirbldL6oqKCqnkJs1bXr/xrz+MKyoqkouSqpWVlWrk16O/ycbyr6wfOx4k69pn0nKHpUdnzJpd7a3ok3rEqNHmFlba1PkLFyVJHzx4UG1Sy01IRGojPXs5yWMvLy9//vIDZpmV4wRtVipTRvb98xd1scYTP+TIZNbsOVp3qh3+ErhfPXapZFs7B+1j78ioKHkmJXNrnFVPqd8Wf+2G5Fakv9PS07WklotXroarWdmJta19o6YttA/gjU78ML3D3Nw8OeKSAwPtYObCxUtyZ0hqAABQ75JaFZ5kkCwRkZHaoER2D8fe+s0Sk5Jkm8D9B2qZ1BJbJm5U5drZkHPStQ2bNJc01Kak+WTqavh/TuR49uxZ85at5i9YqEKwaYsvFy5arKak2mXj0LArNSb1jz8t+Kxhk2o/Nq42qfVf2eGzeo2M3L+fLOvSrxKO2gnoytet206eMq2WSW1EHt3njZqoRldPS3DwWf0Gd+/dUzdtena179oGjZrqP62PjY2T7U+cPKUltRy96K8bdOKk/vjEKKlN7/DSH39UvTN8Sg0AAOppUldWVrZs9U0/lwH6wWZftJo6fabRZpKk8+YvqGVSDxs+ssaktrK2lX+XLluun9rqv10Gv3cdOHDQEG1p0rylcz8XtYHcsXZm5loot2lnpj8P5FVJfefu3bbtO8qepfW9vJdVPb1bn9Ryc/qRI78elSvKo5Z1eVwdOnU2uopL/4FajNYmqXNz834J3D92/ETXAW72PXtJo6sDBr8t/nJd9TFwVaZn3UeMatS0hf5Jk53L9j6r1mhJrdaNDpO083mMktr0DtWdeZiWpt+h55KlJDUAAKiPSS1at+0weKi7vp4bNGo6e+6PRps1bvbFtBmz3mJSt/zq2569nKTUJUO1qbXrNsjU7Dnzflq4SL+s37BJbaDOlLh565asS08v9vJ+1a3ok/r5yy852bN3n4w0aNzso08b6P9y0Sipm7b48lVJLVe37GptdBV59szMLWqZ1Jv9tnz8WUN57GPGTViw0HO179pPPm+kknrDxhd/3peZmVntFU3PSu/KoZHRkyaLOltaJbXsQX8VCWL9CfRGSW16h75r17/4LP+/z5JX5wuR1AAAgKR+waFXH+fvXfUjaenpUks7du56/u9PN7ds3abNFpeU/OOTz183qaU7s7KyvmnTrp2ZeW5unpo6G3JOpvSnghiR4v+2bftly1dGx1yXLbU/aqwxqTUFBQWzZs+R6+pTvpZJvWSptwRxRUWFfoMOnTprXz5oOqkl6z9t0Ni5n4t2pnhJSansUCX1hYuX5LoXL12q9rqmZ+XQQg4VjO7Yf95IL5N6/MTJ+sGQc+f1OzRKatM7PH0m+MUpN/99uvyIUaNJagAAQFL/y9wff5LyuxUbq42or7lQ5yJLZsnsUPcR2qwUpMy+blKrb/wIj4iQpnQbMkydv5GZmfn3jz/Tf4QsibbSZ7U0nDbiudjL0sray3uZlbWtiVvRJ/XGTZuDTpzUpuShyR3Yf+DQ6ya1+vtI7WQJLUy1P2eMj79tdLyhJ0cOMis3oY389vsxGVFJnZOb+9GnDQYNcddOZXmYlvbVt20XeS6pcVbtR+6qtud7CQnyqt2+fUdL6ibNW+rPeJFXUA6EtC8ulCBu0fIrrfVN71AdYum/xTwhMbFhk+b6pM7IyJCjF/6fAwCAeprU2U+emJlbtG3fcbPfljPBwfPmL5BUks7WNnDpP/CTzxtNnjr9xMlTa9dtkI3f4MQP7Xup1fnT6psrxKaf/eTirNlzZINDh484OfeTyNZ/Gq2CWMJXOxukxqQePXb8Zw2b+G/bLsl78dKlXn2cGzRqqtVk7ZNainP4SA85opC4DD4bsmbtui++/LqHY+/ikhK1cWFhoRwhdOrc5ZfA/SkpKVX3b9ejp6SnNHdoaJg8dW3amclFldRi5649KlXlKGVHwE5rW3u5rdjYuBpn5Y4NGTb880ZN1q3fePly6I6du2TP8sqq35ZXSS0vk7mF1bbtO+Tq8oTIiP4JXOzlrXJf/Xym6R2K5St81Cffcqwir6Ds3NbOQUtquUW5rryFtEYHAACoX0n9/OXZHW5DhjVu9oVEUvuOnX9auEjfRtnZ2Y69+/7jk89ltp2ZuSRyx86Wb5zUwmPMOOlmbUTyWuJPfRVJV5vu2le/adTXKhv9eZyJpJbSlQMAyWj1XXISwerT1tdN6ucvz3KZOn3mN23ayaAcSIz0GGP0ayzbdwQ0+6KVzErBV91/6sOHcuvqoVlaWUdHx0iqakmtjijUo5Ont5ut3bVr0fqrm5gtKiqaOHnKl1+3llk54JGXT3t+VFL7bfH38l4mFS7r8qIbnYaekZHR28lZXoXmLVvVuEPV3HK3v27dVmYbNG4m5b17z14tqeVfeVzar8YAAADU8aQ2wWAwaL8kUpUkl/YbJe9CZmam0dfVKc+ePZPONjrbuzakAqVote91/pPksb/qy0bUk2NitqCg4FU/36gdtFT72GszK+FrdA60Smp1OkpZWZmJQxG5ovaJu4kd1ma22l/SAQAAqHdJ/QGSTt2xc5cEojo/AbV6q+mSGgAAgKSu1+Li4lu0/Er9tjbPBkkNAABAUr9JGu7eszfsylWeitdiMBju3L2bk5vLUwEAAEhqAAAAACQ1AAAAQFIDAAAAJDUAAABAUgMAAAAkNUkNAAAAkNQAAAAASQ0AAACQ1AAAAABJTVIDAAAAJDUAAABAUgMAAAAkdQ0G3PRrG+7ZOnwRy1tf5In1uL2T9zcAAEBdTur+t/y+lfiLIH/fzRKxSJ7ekXEBvMUBAADqbFK3pqfffVW3DffkLQ4AAFCnk5rl3S+8xQEAAEhqFpIaAACApCapSWoAAACSmqQmqQEAAEBSk9QAAAAgqVlIagAAAJL6g0rqDhFL2kcsJqkBAABAUr/hElFw/8STm+9iz+Nu7yapAQAASOo6ntS9r6+7VvjgYWlul6jlb3fP7SMWZ5UXktQAAAAkdR1Pav+0i97Jx3c9Cl2WHKQNTrqzL6Lg/q2iNK/7x+SiZdSywIzw2KK0K/mJqrznJx6JKUw5nn1jUOxWuTgibodvyplt6ZduFKZuenhObRNVkFz+zBBZkDz69i6SGgAAgKSum0ndJnxRamlO12srXG9ujn/6SA0OjfVPLskeHLu1Q8SSPtfXy8jlvHtS3p0jvXtfX9cxwkv+vV6YanPNR1YSijNlg+n3Aosqy8bf2SOzOx9d3pH+hwxaRHpnlRfKSNtwT5IaAACApK6bSS0RfDU/qXv0Klkko/vf+lkGD2RE+Kac0baRdC40lOr/fnHjw5Cg7BvLkoNkuV+S7XrzZ0nqsPxENSu7Up3NiR8AAAAkdd1P6tNPYm8VpYUX3JflbnHGLxlXZfBwZtSchEPaNvbRq6Wb9deS5g7MCJ+bcEgtdtGrJal/y4pRsw4xvuoDb5IaAACApK7jSd312gpJXu3jZ5trPk8qijpELBkdv/Ni7l01Lhfl32sFD4bGbZOVtuGesoy/s0daXAtudeJHdnlRxwgvWfdNOeOXdl6dVZJT8bQNSQ0AAEBS19WkXvng5KHMSP3I+dzbsxMOSgQfz76RWV4Qnp+0ITXkxV8fxu/IKC+IKkiOe5ouIS61vfdxWPzTR1fyE49nX1dJLRvHFqXdKkq78/Sx6mxZDmVGxRSmjOHPEwEAAEjqevjriZ0il3aK9NKPdLu2Qn/RTPcDMZLUUs/qk2+j/VhEevMpNQAAAEnND5LXsGhJza8nAgAAkNQk9Zssbre2LEr6jaQGAAAgqUnqurnwFgcAACCpWUhqAAAAkpqkJqkBAABI6reuDb37rpeIF9+lzVscAACgzib1yLiA1uELJfto33fU0/L0ypPMWxwAAKDOJrWq6rbhnuTvu1jkiaWnAQAA6n5SAwAAACQ1AAAAQFKT1AAAAABJDQAAAJDUAAAAAEkNAAAAkNQkNQAAAEBSAwAAACQ1AAAAQFIDAAAAJDVJDQAAAJDUAAAAAEkNAAAAkNQAAAAASQ0AAACApAYAAABIagAAAICkBgAAAEhqAAAAALVK6ry8PIPBwDMFAAAAVCWpLMFcQ1KXl5fLRk8AAAAAVJGfny/BXENSAwAAAHhdJDUAAABAUgMAAAD/O/8P3R5pjErrx68AAAAASUVORK5CYII="},2410:function(e,t,A){"use strict";t.Z=A.p+"assets/images/not_accepted_notification-7fce57359cb98acb623679442f8f6163.png"}}]);