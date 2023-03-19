"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[9061],{49613:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return h}});var n=o(59496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(o),h=r,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},13796:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=o(665),r=o(40151),a=(o(59496),o(49613)),i=["components"],l={},u="About Logto Cloud (Preview)",s={permalink:"/zh-cn/about/cloud-preview",source:"@site/about/cloud-preview.mdx",title:"About Logto Cloud (Preview)",description:"Thank you for joining us in Logto Cloud (Preview), giving you a sneak peek into our current progress. Logto Cloud is built on top of Logto OSS, providing a seamless upgrade path without incurring heavy overhead.",date:"2023-03-19T05:33:48.000Z",formattedDate:"2023\u5e743\u670819\u65e5",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{}},c={authorsImageUrls:[]},d=[{value:"Terms",id:"terms",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Disclaimer",id:"disclaimer",level:2},{value:"Is my data secure on the cloud?",id:"is-my-data-secure-on-the-cloud",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"<strong>What is the pricing model?</strong>",id:"what-is-the-pricing-model",level:3},{value:"<strong>Will you keep data when the preview ends?</strong>",id:"will-you-keep-data-when-the-preview-ends",level:3},{value:"<strong>Will you stop open-source?</strong>",id:"will-you-stop-open-source",level:3}],p={toc:d};function h(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Thank you for joining us in Logto Cloud (Preview), giving you a sneak peek into our current progress. Logto Cloud is built on top of Logto OSS, providing a seamless upgrade path without incurring heavy overhead."),(0,a.kt)("p",null,"Please note that this version is not intended for production use, and as we continue developing the production version, some of the features and details showcased here may be subject to change."),(0,a.kt)("h2",{id:"terms"},"Terms"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Logto OSS")," is the open-source distribution of Logto, the source code can be found on GitHub."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Logto Cloud")," is the official managed service from Logto team. It uses Logto OSS as the foundation, with some built-in connector and resource operations, which enable an operation-free experience when using Logto."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Logto Cloud (Preview)")," indicates a free preview version of Logto Cloud with certain resource limitations."),(0,a.kt)("p",null,"Functionally, there are not much differences between Logto Cloud (Preview) and OSS."),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"Logto Cloud is free during the preview stage, but it comes with certain limitations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Each account should have only one tenant, and there is no team collaboration."),(0,a.kt)("li",{parentName:"ul"},"Audit logs will be cleaned up every three days."),(0,a.kt)("li",{parentName:"ul"},"The built-in Logto email and SMS connector both have a maximum of 100 sending quotas.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you want more or you want to unlock this feature once Logto Cloud goes into production, please send an email to ",(0,a.kt)("a",{parentName:"li",href:"mailto:contact@logto.io"},"contact@logto.io"),".")))),(0,a.kt)("p",null,"These limitations may not apply to the production version of Logto Cloud. Please stay tuned by joining our Discord server or subscribing to our newsletter."),(0,a.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,a.kt)("p",null,"We are sharing this cloud preview with you to give you an idea of what the product will be able to do. It is also a significant signal and milestone that we are continuing to develop features in a mature manner and meet enterprise needs. Please keep in mind that this is not the final product. The preview is just a demonstration of our progress and should not be used instead of professional advice."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Please be aware that we cannot guarantee the reliability of the feature shown in the preview."),(0,a.kt)("li",{parentName:"ul"},"We have taken all necessary precautions to ensure its safety, but we cannot be held liable for any issues that may arise while using it."),(0,a.kt)("li",{parentName:"ul"},"We may interrupt our service for maintenance, or when we recognize our service is under attack."),(0,a.kt)("li",{parentName:"ul"},"We will try our best to persist your data, but we may clean up for security or resource usage issues.")),(0,a.kt)("h2",{id:"is-my-data-secure-on-the-cloud"},"Is my data secure on the cloud?"),(0,a.kt)("p",null,"We value security and are committed to protecting the privacy and security of our users' data. Here are some details:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The communication between any public party to Logto Cloud is enforced by TLS."),(0,a.kt)("li",{parentName:"ul"},"The Logto Cloud database stays in a private network in the Azure West Europe region, with no direct access to the public internet."),(0,a.kt)("li",{parentName:"ul"},"Every tenant has a dedicated database role and every business table has enforced Row-Level Security to ensure you data is isolated in the database."),(0,a.kt)("li",{parentName:"ul"},"Logto will not store password in plain text. All password are encrypted by the Argon2 algorithm.")),(0,a.kt)("p",null,"However, we cannot guarantee that unauthorized third parties will never be able to breach our security measures. By using our cloud products, you acknowledge that you understand and accept the inherent security risks. You are responsible for keeping your account information and password confidential and for restricting access to your computer."),(0,a.kt)("p",null,"For more details, please refer to our ",(0,a.kt)("a",{parentName:"p",href:"/terms/of-use/cloud/"},"Terms of Use")," and ",(0,a.kt)("a",{parentName:"p",href:"/terms/privacy-policy/"},"Privacy Policy"),"."),(0,a.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,a.kt)("h3",{id:"what-is-the-pricing-model"},(0,a.kt)("strong",{parentName:"h3"},"What is the pricing model?")),(0,a.kt)("p",null,"We are still finalizing our pricing model, but rest assured that we are working hard to make our product much more affordable than similar offerings currently on the market. We believe it should be more usage-based, rather than charging per seat for a customer-facing scenario."),(0,a.kt)("p",null,"Logto Cloud will remain free while in preview. We would love to explore the appropriate and sustainable pricing model with you. Feel free to send us an email or schedule a meeting with us."),(0,a.kt)("h3",{id:"will-you-keep-data-when-the-preview-ends"},(0,a.kt)("strong",{parentName:"h3"},"Will you keep data when the preview ends?")),(0,a.kt)("p",null,"Yes. Your tenant will seamlessly transition to Logto Cloud once the preview period ends. You can also request to have your data physically removed at any time if needed. See our Terms of Use for more details."),(0,a.kt)("h3",{id:"will-you-stop-open-source"},(0,a.kt)("strong",{parentName:"h3"},"Will you stop open-source?")),(0,a.kt)("p",null,"No! Open-source is the core of our product and we believe it always will be. We will try our best to align between OSS and Cloud, and make sure you have full confidence that Logto OSS is backing you up."))}h.isMDXComponent=!0}}]);