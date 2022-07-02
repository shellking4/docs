"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[1397],{9613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||c;return n?o.createElement(f,a(a({ref:t},l),{},{components:n})):o.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3777:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var o=n(5443),r=n(3010),c=(n(9496),n(9613)),a=["components"],i={sidebar_label:"Connector setup tips",sidebar_position:1},s="Connector setup tips",p={unversionedId:"docs/recipes/configure-connectors/connector-setup-tips",id:"docs/recipes/configure-connectors/connector-setup-tips",title:"Connector setup tips",description:"A connector can be classified into two categories by its use cases: SMS or Email connector and Social connector.",source:"@site/docs/docs/recipes/configure-connectors/connector-setup-tips.md",sourceDirName:"docs/recipes/configure-connectors",slug:"/docs/recipes/configure-connectors/connector-setup-tips",permalink:"/docs/recipes/configure-connectors/connector-setup-tips",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/configure-connectors/connector-setup-tips.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Connector setup tips",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83e\ude9b Configure connectors",permalink:"/docs/recipes/configure-connectors/"},next:{title:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users",permalink:"/docs/recipes/manage-users/"}},l={},u=[{value:"SMS or Email Connector",id:"sms-or-email-connector",level:2},{value:"Social Connector",id:"social-connector",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,c.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"connector-setup-tips"},"Connector setup tips"),(0,c.kt)("p",null,"A connector can be classified into two categories by its use cases: ",(0,c.kt)("a",{parentName:"p",href:"/docs/recipes/configure-connectors/connector-setup-tips/#sms-or-email-connector"},(0,c.kt)("em",{parentName:"a"},"SMS or Email connector"))," and ",(0,c.kt)("a",{parentName:"p",href:"/docs/recipes/configure-connectors/connector-setup-tips/#social-connector"},(0,c.kt)("em",{parentName:"a"},"Social connector")),"."),(0,c.kt)("p",null,"Let's go over some worthy of notice tips for previously mentioned cases."),(0,c.kt)("h2",{id:"sms-or-email-connector"},"SMS or Email Connector"),(0,c.kt)("p",null,'Suppose you are now on the "Connectors" page in Admin Console. Click the "Set up" button and select an SMS or Email connector to enter the configuration process.'),(0,c.kt)("p",null,"Follow the README on the left and compose the connector config JSON in the text input box on your right. You can check whether the config can work before saving changes."),(0,c.kt)("p",null,"You can change the current SMS or Email connector in the top-right corner on the connector details page, where a review of the connector README is also available."),(0,c.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"You can bring ONLY ONE ",(0,c.kt)("em",{parentName:"p"},"SMS Connector")," (or ",(0,c.kt)("em",{parentName:"p"},"Email Connector"),") alive."),(0,c.kt)("p",{parentName:"div"},"If you change the living SMS or Email connector and save changes, the previous SMS or Email connector will be disabled automatically. Also, the ",(0,c.kt)("em",{parentName:"p"},"config")," of past connectors will lose track.",(0,c.kt)("br",null),"\nYou may keep the old connectors' ",(0,c.kt)("em",{parentName:"p"},"config")," properly if you want to switch back to those connectors in the future."))),(0,c.kt)("p",null,"You can check out ",(0,c.kt)("a",{parentName:"p",href:"../../tutorials/get-started/enable-passcode-sign-in"},"how to enable SMS or email passcode sign-in")," as soon as you finish the setup."),(0,c.kt)("h2",{id:"social-connector"},"Social Connector"),(0,c.kt)("p",null,'Suppose you are now on the "Connectors" page in Admin Console. Go to the "Social connectors" tab and add a new connector to enter the configuration process.'),(0,c.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"You may find that some connectors do not have a secondary choice of platform, such as Google, Facebook, and GitHub. These connectors' ",(0,c.kt)("em",{parentName:"p"},"platform")," are ",(0,c.kt)("em",{parentName:"p"},"Universal"),". Explore ",(0,c.kt)("a",{parentName:"p",href:"../../references/connectors/#platform"},(0,c.kt)("em",{parentName:"a"},"platform")," description")," to know more."),(0,c.kt)("p",{parentName:"div"},"Choose a proper ",(0,c.kt)("em",{parentName:"p"},"platform")," from either ",(0,c.kt)("em",{parentName:"p"},"Web")," or ",(0,c.kt)("em",{parentName:"p"},"Native")," for connectors to fit your use case.",(0,c.kt)("br",null),"\nYou can set up a single ",(0,c.kt)("em",{parentName:"p"},"Native")," connector w/o adding a ",(0,c.kt)("em",{parentName:"p"},"Web")," connector if you only provide native mobile apps and vice versa."))),(0,c.kt)("p",null,"Follow the README to compose the connector config JSON with little effort."),(0,c.kt)("p",null,"See ",(0,c.kt)("a",{parentName:"p",href:"../../tutorials/get-started/enable-social-sign-in"},"how to enable social sign-in")," to bring your social connector into use."))}d.isMDXComponent=!0}}]);