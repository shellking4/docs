"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6536],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),g=r,m=s["".concat(u,".").concat(g)]||s[g]||d[g]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},28482:function(e,t,n){n.d(t,{Z:function(){return i}});n(59496);var o=n(45924),r="tabItem_G5LH",a=n(4637);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n,children:t})}},38142:function(e,t,n){n.d(t,{Z:function(){return g}});var o=n(59496),r=n(45924),a=n(46971),i=n(21),l=n(73962),u=n(15469),p="tabList_A7qg",c="tabItem_Keco",d=n(4637);function s(e){var t,n,a=e.lazy,s=e.block,g=e.defaultValue,m=e.values,A=e.groupId,v=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(f,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===g?g:null!=(t=null!=g?g:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,l.U)(),C=h.tabGroupChoices,N=h.setTabGroupChoices,O=(0,o.useState)(b),E=O[0],S=O[1],B=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=A){var T=C[A];null!=T&&T!==E&&f.some((function(e){return e.value===T}))&&S(T)}var Z=function(e){var t=e.currentTarget,n=B.indexOf(t),o=f[n].value;o!==E&&(P(t),S(o),null!=A&&N(A,String(o)))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o,r=B.indexOf(e.currentTarget)+1;n=null!=(o=B[r])?o:B[0];break;case"ArrowLeft":var a,i=B.indexOf(e.currentTarget)-1;n=null!=(a=B[i])?a:B[B.length-1]}null==(t=n)||t.focus()};return(0,d.jsxs)("div",{className:(0,r.Z)("tabs-container",p),children:[(0,d.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},v),children:f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,d.jsx)("li",Object.assign({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,ref:function(e){return B.push(e)},onKeyDown:x,onFocus:Z,onClick:Z},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":E===t}),children:null!=n?n:t}),t)}))}),a?(0,o.cloneElement)(k.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):(0,d.jsx)("div",{className:"margin-top--md",children:k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))})]})}function g(e){var t=(0,a.Z)();return(0,d.jsx)(s,Object.assign({},e),String(t))}},27805:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return v},default:function(){return h},frontMatter:function(){return A},metadata:function(){return k},toc:function(){return y}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=n(28482),l=n(38142),u=n(62871),p=n(497),c=n(87460),d=n(32595),s=n(95557),g=n(82328),m=["components"],A={sidebar_label:"Android"},v="Android\uff1a\u96c6\u6210 Logto Android SDK",k={unversionedId:"docs/recipes/integrate-logto/android",id:"docs/recipes/integrate-logto/android",title:"Android\uff1a\u96c6\u6210 Logto Android SDK",description:"\u5c06 Logto SDK \u6dfb\u52a0\u81f3\u4f9d\u8d56",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/integrate-logto/android.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/android",permalink:"/zh-cn/docs/recipes/integrate-logto/android",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/integrate-logto/android.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Android"},sidebar:"docsSidebar",previous:{title:"\ud83d\udd17 \u5728\u4f60\u7684\u5e94\u7528\u4e2d\u96c6\u6210 Logto",permalink:"/zh-cn/docs/recipes/integrate-logto/"},next:{title:"iOS",permalink:"/zh-cn/docs/recipes/integrate-logto/ios"}},f={},y=[{value:"\u5c06 Logto SDK \u6dfb\u52a0\u81f3\u4f9d\u8d56",id:"\u5c06-logto-sdk-\u6dfb\u52a0\u81f3\u4f9d\u8d56",level:2},{value:"\u521d\u59cb\u5316 LogtoClient",id:"\u521d\u59cb\u5316-logtoclient",level:2},{value:"\u767b\u5f55",id:"\u767b\u5f55",level:2},{value:"\u914d\u7f6e Redirect URI",id:"\u914d\u7f6e-redirect-uri",level:3},{value:"\u767b\u5f55",id:"\u767b\u5f55-1",level:3},{value:"\u9000\u51fa\u767b\u5f55",id:"\u9000\u51fa\u767b\u5f55",level:2},{value:"\u5ef6\u5c55\u9605\u8bfb",id:"\u5ef6\u5c55\u9605\u8bfb",level:2}],b={toc:y};function h(e){var t=e.components,n=(0,r.Z)(e,m);return(0,a.kt)("wrapper",(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"android\u96c6\u6210-logto-android-sdk"},"Android\uff1a\u96c6\u6210 Logto Android SDK"),(0,a.kt)(c.ZP,{type:"\u539f\u751f\u5e94\u7528",mdxType:"AppNote"}),(0,a.kt)("h2",{id:"\u5c06-logto-sdk-\u6dfb\u52a0\u81f3\u4f9d\u8d56"},"\u5c06 Logto SDK \u6dfb\u52a0\u81f3\u4f9d\u8d56"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Logto Andorid SDK \u652f\u6301\u7684\u6700\u5c0f Android API \u7ea7\u522b\u4e3a 24\u3002")),(0,a.kt)("p",null,"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"mavenCentral()")," \u6dfb\u52a0\u5230\u6784\u5efa\u811a\u672c\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"repositories {\n    mavenCentral()\n}\n")),(0,a.kt)("p",null,"\u6dfb\u52a0 Logto Android SDK \u4f9d\u8d56\uff1a"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation("io.logto.sdk:android:1.0.0-alpha.0")\n}\n'))),(0,a.kt)(i.Z,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'io.logto.sdk:android:1.0.0-alpha.0'\n}\n")))),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316-logtoclient"},"\u521d\u59cb\u5316 LogtoClient"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u521b\u5efa LogtoClient \u524d\uff0c\u9700\u8981\u786e\u4fdd Application \u5df2\u7ecf\u521d\u59cb\u5316\u3002")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)(p.ZP,{mdxType:"KotlinSetupCode"})),(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(u.ZP,{mdxType:"JavaSetupCode"}))),(0,a.kt)("h2",{id:"\u767b\u5f55"},"\u767b\u5f55"),(0,a.kt)("h3",{id:"\u914d\u7f6e-redirect-uri"},"\u914d\u7f6e Redirect URI"),(0,a.kt)(d.ZP,{figureSrc:"data:image/png;base64,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",redirectUri:"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback",mdxType:"ConfigureRedirectUri"}),(0,a.kt)("p",null,"\u6ce8\u610f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LOGTO_REDIRECT_SCHEME")," \u5e94\u4e3a\u81ea\u5b9a\u4e49\u7684\u53cd\u5411\u57df\u540d\u683c\u5f0f\u7684\u4e00\u4e32\u5b57\u7b26\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u4e0a\u8ff0\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"$(LOGTO_REDIRECT_SCHEME)")," \u66ff\u6362\u6210\u4f60\u5b9a\u4e49\u7684\u503c\u3002")),(0,a.kt)("p",null,"\u4f8b\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback")),(0,a.kt)("h3",{id:"\u767b\u5f55-1"},"\u767b\u5f55"),(0,a.kt)(g.ZP,{calling:".signIn(context, redirectUri, completion)",mdxType:"SignInNote"}),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'logtoClient.signIn(this, "<your-redirect-uri>") { logtoException: LogtoException? ->\n    // \u5f53 `logtoException` \u4e3a null \u65f6\uff0c\u5219\u767b\u5f55\u6210\u529f\u3002\n}\n'))),(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'logtoClient.signIn(this, "<your-redirect-uri>", logtoException -> {\n    // \u5f53 `logtoException` \u4e3a null \u65f6\uff0c\u5219\u767b\u5f55\u6210\u529f\u3002\n});\n')))),(0,a.kt)("p",null,"\u5f53\u6210\u529f\u767b\u5f55\u540e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"logtoClient.isAuthenticated")," \u7684\u503c\u5c06\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,a.kt)("h2",{id:"\u9000\u51fa\u767b\u5f55"},"\u9000\u51fa\u767b\u5f55"),(0,a.kt)("p",null,"\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".signOut(completion)")," \u64cd\u4f5c\u4f1a\u6e05\u9664\u672c\u5730\u5b58\u50a8\u7684\u7528\u6237\u76f8\u5173\u51ed\u636e\uff0c\u5373\u4f7f\u5728\u9000\u51fa\u767b\u5f55\u8fc7\u7a0b\u4e2d\u53d1\u751f\u4e86\u5f02\u5e38\u3002"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"logtoClient.signOut { logtoException: LogtoException? ->\n    // \u65e0\u8bba\u662f\u5426\u5b58\u5728 `logtoException`\uff0c\u672c\u5730\u5b58\u50a8\u7684\u7528\u6237\u76f8\u5173\u51ed\u636e\u90fd\u5df2\u6e05\u9664\u3002\n}\n"))),(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"logtoClient.signOut(logtoException -> {\n    // \u65e0\u8bba\u662f\u5426\u5b58\u5728 `logtoException`\uff0c\u672c\u5730\u5b58\u50a8\u7684\u7528\u6237\u76f8\u5173\u51ed\u636e\u90fd\u5df2\u6e05\u9664\u3002\n});\n")))),(0,a.kt)("h2",{id:"\u5ef6\u5c55\u9605\u8bfb"},"\u5ef6\u5c55\u9605\u8bfb"),(0,a.kt)(s.ZP,{mdxType:"FurtherReadings"}))}h.isMDXComponent=!0},62871:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\nimport io.logto.sdk.core.constant.PromptValue;\n\npublic class MainActivity extends AppCompatActivity {\n\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        // ...\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",  // \u4f8b\u5982\uff1a http://localhost:3001\n            "<your-app-id>",\n            null,\n            null,\n            true,\n            PromptValue.CONSENT\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n')))}u.isMDXComponent=!0},497:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\nimport io.logto.sdk.core.constant.PromptValue\n\n\nclass MainActivity : AppCompatActivity() {\n\n    private lateinit var logtoClient: LogtoClient\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        // ...\n        val logtoConfig = LogtoConfig(\n            endpoint = "<your-logto-endpoint>",  // \u4f8b\u5982\uff1a http://localhost:3001\n            appId = "<your-app-id>",\n            scopes = null,\n            resources = null,\n            usingPersistStorage = true,\n            prompt = PromptValue.CONSENT,\n        )\n\n        logtoClient = LogtoClient(logtoConfig, application)\n    }\n}\n')))}u.isMDXComponent=!0},87460:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,"\u672c\u7bc7\u6559\u7a0b\u9ed8\u8ba4\u4f60\u5df2\u7ecf\u5728\u7ba1\u7406\u754c\u9762\u4e2d\u6210\u529f\u521b\u5efa\u4e86\u4e00\u4e2a\u300c",n.type,"\u300d\u7c7b\u578b\u7684\u5e94\u7528\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b8c\u6210\u8fd9\u4e00\u6b65\u64cd\u4f5c\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{href:"../../tutorials/get-started/create-and-integrate-the-first-app"},"\u8fd9\u7bc7\u6559\u7a0b"),"\uff0c\u521b\u5efa\u5e94\u7528\u4e4b\u540e\u518d\u7ee7\u7eed\u3002")))}u.isMDXComponent=!0},32595:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u5728\u8fd9\u91cc\u5207\u6362\u5230\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u7684\u5e94\u7528\u8be6\u60c5\u9875\u3002\u6dfb\u52a0\u4e00\u4e2a\u503c\u4e3a ",(0,a.kt)("code",null,n.redirectUri)," \u7684 Redirect URI \u5e76\u70b9\u6309\u300c\u4fdd\u5b58\u53d8\u66f4\u300d\u3002"),(0,a.kt)("img",{alt:"\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u4e2d\u7684 Redirect URI",src:n.figureSrc,width:"600px"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," \u662f\u4e00\u4e2a OAuth 2.0 \u7684\u6982\u5ff5\uff0c\u7528\u4e8e\u8868\u660e\u5728 authentication \u540e\u91cd\u5b9a\u5411\u81f3\u7684\u4f4d\u7f6e\u3002"))}u.isMDXComponent=!0},95557:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/recipes/customize-sie/"},"\u81ea\u5b9a\u4e49\u767b\u5f55\u4f53\u9a8c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/tutorials/get-started/enable-passcode-sign-in"},"\u542f\u7528\u77ed\u4fe1\u6216\u90ae\u4ef6\u9a8c\u8bc1\u7801\u767b\u5f55")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/tutorials/get-started/enable-social-sign-in"},"\u542f\u7528\u793e\u4ea4\u767b\u5f55")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/recipes/protect-your-api/"},"\u4fdd\u62a4\u4f60\u7684 API"))))}u.isMDXComponent=!0},82328:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,"\u5728\u8c03\u7528 ",(0,a.kt)("code",null,n.calling)," \u4e4b\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u5df2\u7ecf\u5728\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u4e2d\u6b63\u786e\u914d\u7f6e\u4e86 Redirect URI\u3002")))}u.isMDXComponent=!0}}]);