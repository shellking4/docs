"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6536],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var o=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=o.createContext({}),d=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),g=l,m=p["".concat(u,".").concat(g)]||p[g]||s[g]||a;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8661:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(9496),l=n(1626),a="tabItem_ZZXe";function r(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,r),hidden:n},t)}},2418:function(e,t,n){n.d(t,{Z:function(){return g}});var o=n(5443),l=n(9496),a=n(1626),r=n(5874),i=n(2103),u=n(3299),d=n(2821),c="tabList_kQjL",s="tabItem_wrqk";function p(e){var t,n,r=e.lazy,p=e.block,g=e.defaultValue,m=e.values,k=e.groupId,v=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===g?g:null!=(t=null!=g?g:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,u.U)(),T=C.tabGroupChoices,N=C.setTabGroupChoices,E=(0,l.useState)(h),x=E[0],I=E[1],O=[],w=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var L=T[k];null!=L&&L!==x&&b.some((function(e){return e.value===L}))&&I(L)}var A=function(e){var t=e.currentTarget,n=O.indexOf(t),o=b[n].value;o!==x&&(w(t),I(o),null!=k&&N(k,String(o)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o,l=O.indexOf(e.currentTarget)+1;n=null!=(o=O[l])?o:O[0];break;case"ArrowLeft":var a,r=O.indexOf(e.currentTarget)-1;n=null!=(a=O[r])?a:O[O.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,a.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},v)},b.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,o.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:Z,onFocus:A,onClick:A},r,{className:(0,a.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),r?(0,l.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function g(e){var t=(0,r.Z)();return l.createElement(p,(0,o.Z)({key:String(t)},e))}},3472:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return g}});var o=n(5443),l=n(3010),a=(n(9496),n(9613)),r=n(2418),i=n(8661),u=["components"],d={sidebar_label:"Android"},c="\u96c6\u6210 `io.logto.sdk:android`",s={unversionedId:"docs/recipes/integrate-logto/android",id:"docs/recipes/integrate-logto/android",title:"\u96c6\u6210 `io.logto.sdk:android`",description:"\u6b65\u9aa4 1\uff1a \u4ece Gradle \u5b89\u88c5 Logto Android SDK",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/integrate-logto/android.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/android",permalink:"/zh-cn/docs/recipes/integrate-logto/android",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docs/recipes/integrate-logto/android.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Android"},sidebar:"docsSidebar",previous:{title:"\ud83d\udd17 \u5728\u4f60\u7684\u5e94\u7528\u4e2d\u96c6\u6210 Logto",permalink:"/zh-cn/docs/recipes/integrate-logto/"},next:{title:"iOS (Swift)",permalink:"/zh-cn/docs/recipes/integrate-logto/ios"}},p={},g=[{value:"\u6b65\u9aa4 1\uff1a \u4ece Gradle \u5b89\u88c5 Logto Android SDK",id:"\u6b65\u9aa4-1-\u4ece-gradle-\u5b89\u88c5-logto-android-sdk",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"\u6b65\u9aa4 2\uff1a \u914d\u7f6e",id:"\u6b65\u9aa4-2-\u914d\u7f6e",level:2},{value:"\u914d\u7f6e Redirect URI",id:"\u914d\u7f6e-redirect-uri",level:3},{value:"\u5728\u7ba1\u7406\u5458\u63a7\u5236\u53f0\u4e2d\u914d\u7f6e Redirect URI",id:"\u5728\u7ba1\u7406\u5458\u63a7\u5236\u53f0\u4e2d\u914d\u7f6e-redirect-uri",level:3},{value:"\u914d\u7f6e Logto Android SDK",id:"\u914d\u7f6e-logto-android-sdk",level:3},{value:"\u6b65\u9aa4 3\uff1a \u767b\u5f55",id:"\u6b65\u9aa4-3-\u767b\u5f55",level:2},{value:"\u6267\u884c\u767b\u5f55",id:"\u6267\u884c\u767b\u5f55",level:3},{value:"\u767b\u5f55\u6210\u529f\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 SDK \u63d0\u4f9b\u7684\u4e00\u4e9b API \u6765\u5b9e\u73b0\u81ea\u5df1\u7684\u4e1a\u52a1\u903b\u8f91",id:"\u767b\u5f55\u6210\u529f\u540e\u4f60\u53ef\u4ee5\u4f7f\u7528-sdk-\u63d0\u4f9b\u7684\u4e00\u4e9b-api-\u6765\u5b9e\u73b0\u81ea\u5df1\u7684\u4e1a\u52a1\u903b\u8f91",level:3},{value:"\u6b65\u9aa4 4\uff1a \u767b\u51fa",id:"\u6b65\u9aa4-4-\u767b\u51fa",level:2},{value:"\u6267\u884c\u767b\u51fa",id:"\u6267\u884c\u767b\u51fa",level:3},{value:"\u6b65\u9aa4 5\uff1a \u5ef6\u4f38\u9605\u8bfb",id:"\u6b65\u9aa4-5-\u5ef6\u4f38\u9605\u8bfb",level:2}],m={toc:g};function k(e){var t=e.components,n=(0,l.Z)(e,u);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u96c6\u6210-iologtosdkandroid"},"\u96c6\u6210 ",(0,a.kt)("inlineCode",{parentName:"h1"},"io.logto.sdk:android")),(0,a.kt)("h2",{id:"\u6b65\u9aa4-1-\u4ece-gradle-\u5b89\u88c5-logto-android-sdk"},"\u6b65\u9aa4 1\uff1a \u4ece Gradle \u5b89\u88c5 Logto Android SDK"),(0,a.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6700\u5c0f Android SDK \u7248\u672c: Level 24")),(0,a.kt)("p",null,"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"mavenCentral()")," \u6dfb\u52a0\u5230\u6784\u5efa\u811a\u672c\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"repositories {\n    mavenCentral()\n}\n")),(0,a.kt)("p",null,"\u6dfb\u52a0 Logto Android SDK \u4f9d\u8d56\uff1a"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation("io.logto.sdk:android:1.0.0")\n}\n'))),(0,a.kt)(i.Z,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'io.logto.sdk:android:1.0.0'\n}\n")))),(0,a.kt)("h2",{id:"\u6b65\u9aa4-2-\u914d\u7f6e"},"\u6b65\u9aa4 2\uff1a \u914d\u7f6e"),(0,a.kt)("h3",{id:"\u914d\u7f6e-redirect-uri"},"\u914d\u7f6e Redirect URI"),(0,a.kt)("p",null,"Redirect URI \u6307\u5b9a\u4e86\u5e94\u7528\u7528\u6765\u63a5\u53d7\u6388\u6743\u7ed3\u679c\u7684\u7aef\u53e3\uff0cLogto Android SDK \u5185\u90e8\u5b9e\u73b0\u4e86\u8be5\u91cd\u5b9a\u5411\u7684\u529f\u80fd"),(0,a.kt)("h3",{id:"\u5728\u7ba1\u7406\u5458\u63a7\u5236\u53f0\u4e2d\u914d\u7f6e-redirect-uri"},"\u5728\u7ba1\u7406\u5458\u63a7\u5236\u53f0\u4e2d\u914d\u7f6e Redirect URI"),(0,a.kt)("p",null,"\u5c06\u4ee5\u4e0b\u503c\u6dfb\u52a0\u5230\u5e94\u7528\u8bbe\u7f6e\u754c\u9762\u4e2d\u7684 Redirect URI \u914d\u7f6e\u9879\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback\n")),(0,a.kt)("p",null,"\u6ce8\u610f: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LOGTO_REDIRECT_SCHEME")," \u5e94\u4e3a\u81ea\u5b9a\u4e49\u7684\u53cd\u5411\u57df\u540d\u683c\u5f0f\u7684\u4e00\u4e32\u5b57\u7b26\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u4e0a\u8ff0\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"$(LOGTO_REDIRECT_SCHEME)")," \u66ff\u6362\u6210\u4f60\u5b9a\u4e49\u7684\u503c\u3002")),(0,a.kt)("p",null,"\u4f8b\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback")),(0,a.kt)("h3",{id:"\u914d\u7f6e-logto-android-sdk"},"\u914d\u7f6e Logto Android SDK"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\n\nclass MainActivity : AppCompatActivity() {\n    val logtoConfig = LogtoConfig(\n        endpoint = "<your-logto-endpoint>",\n        appId = "<your-app-id>",\n        scopes = null,\n        resources = null,\n        usingPersistStorage = true,\n    )\n\n    val logtoClient = LogtoClient(logtoConfig, application)\n}\n'))),(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\n\npublic class MainActivity extends AppCompatActivity {\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",\n            "<your-app-id>",\n            null,\n            null,\n            true\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n')))),(0,a.kt)("p",null,"Notes: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<your-logto-endpoint>")," \u662f\u4f60\u8fd0\u884c Logto \u670d\u52a1\u6240\u5728\u7684\u5730\u5740. \u82e5\u4f60\u7684 Logto \u670d\u52a1\u8fd0\u884c\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:300"),"\uff0c\u5219 ",(0,a.kt)("inlineCode",{parentName:"li"},"<your-logto-endpoint")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:300")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<your-app-id>")," \u662f\u4f60\u4e3a\u81ea\u5df1\u7684\u5e94\u7528\u5728\u7ba1\u7406\u5458\u63a7\u5236\u53f0\u4e2d\u6240\u521b\u5efa\u7684\u5ba2\u6237\u7aefID.")),(0,a.kt)("h2",{id:"\u6b65\u9aa4-3-\u767b\u5f55"},"\u6b65\u9aa4 3\uff1a \u767b\u5f55"),(0,a.kt)("h3",{id:"\u6267\u884c\u767b\u5f55"},"\u6267\u884c\u767b\u5f55"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'logtoClient.signInWithBrowser(\n    this,\n    "io.logto.android://io.logto.sample/callback",\n) { logtoException: LogtoException? ->\n    // \u540e\u7eed\u5904\u7406\u903b\u8f91\n}\n'))),(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'logtoClient.signInWithBrowser(\n    this,\n    "io.logto.android://io.logto.sample/callback",\n    logtoException -> {\n        // \u540e\u7eed\u5904\u7406\u903b\u8f91\n    }\n);\n')))),(0,a.kt)("h3",{id:"\u767b\u5f55\u6210\u529f\u540e\u4f60\u53ef\u4ee5\u4f7f\u7528-sdk-\u63d0\u4f9b\u7684\u4e00\u4e9b-api-\u6765\u5b9e\u73b0\u81ea\u5df1\u7684\u4e1a\u52a1\u903b\u8f91"},"\u767b\u5f55\u6210\u529f\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 SDK \u63d0\u4f9b\u7684\u4e00\u4e9b API \u6765\u5b9e\u73b0\u81ea\u5df1\u7684\u4e1a\u52a1\u903b\u8f91"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"logtoClient.getAccessToken { logtoException: LogtoException?, result: AccessToken? ->\n    // \u540e\u7eed\u5904\u7406\u903b\u8f91\n}\n\nlogtoClient.getIdTokenClaims { logtoException: LogtoException?, result: IdTokenClaims? ->\n    // \u540e\u7eed\u5904\u7406\u903b\u8f91\n}\n\nlogtoClient.fetchUserInfo { logtoException: LogtoException?, userInfoResponse: UserInfoResponse? ->\n    // \u540e\u7eed\u5904\u7406\u903b\u8f91\n}\n"))),(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"logtoClient.getAccessToken((logtoException, accessToken) -> {\n    // \u540e\u7eed\u5904\u7406\u903b\u8f91\n});\n\nlogtoClient.getIdTokenClaims((logtoException, idTokenClaims) -> {\n    // \u540e\u7eed\u5904\u7406\u903b\u8f91\n});\n\nlogtoClient.fetchUserInfo((logtoException, userInfoResponse) -> {\n    // \u540e\u7eed\u5904\u7406\u903b\u8f91\n});\n")))),(0,a.kt)("h2",{id:"\u6b65\u9aa4-4-\u767b\u51fa"},"\u6b65\u9aa4 4\uff1a \u767b\u51fa"),(0,a.kt)("h3",{id:"\u6267\u884c\u767b\u51fa"},"\u6267\u884c\u767b\u51fa"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"logtoClient.signOut { logtoException: LogtoException? ->\n    // \u540e\u7eed\u5904\u7406\u903b\u8f91\n}\n"))),(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"logtoClient.signOut(logtoException -> {\n    // \u540e\u7eed\u5904\u7406\u903b\u8f91\n});\n")))),(0,a.kt)("p",null,"\u6ce8\u610f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u767b\u51fa\u64cd\u4f5c\u4f1a\u6e05\u9664\u672c\u5730\u5b58\u50a8\u7684\u7528\u6237\u76f8\u5173\u51ed\u636e\uff0c\u5373\u4f7f\u5728\u767b\u51fa\u8fc7\u7a0b\u4e2d\u53d1\u751f\u4e86\u5f02\u5e38\u3002")),(0,a.kt)("h2",{id:"\u6b65\u9aa4-5-\u5ef6\u4f38\u9605\u8bfb"},"\u6b65\u9aa4 5\uff1a \u5ef6\u4f38\u9605\u8bfb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u7528\u6237\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u793e\u4f1a\u5316\u767b\u5f55"),(0,a.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u53d7\u4fdd\u62a4\u7684 API \u8d44\u6e90")))}k.isMDXComponent=!0}}]);