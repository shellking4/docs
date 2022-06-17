"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[2434],{9613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var o=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=o.createContext({}),s=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(t),g=i,m=p["".concat(u,".").concat(g)]||p[g]||d[g]||l;return t?o.createElement(m,r(r({ref:n},c),{},{components:t})):o.createElement(m,r({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=p;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,r[1]=a;for(var s=2;s<l;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8661:function(e,n,t){t.d(n,{Z:function(){return r}});var o=t(9496),i=t(1626),l="tabItem_ZZXe";function r(e){var n=e.children,t=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:t},n)}},2418:function(e,n,t){t.d(n,{Z:function(){return g}});var o=t(5443),i=t(9496),l=t(1626),r=t(5874),a=t(2103),u=t(3299),s=t(2821),c="tabList_kQjL",d="tabItem_wrqk";function p(e){var n,t,r=e.lazy,p=e.block,g=e.defaultValue,m=e.values,f=e.groupId,k=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,a.l)(b,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===g?g:null!=(n=null!=g?g:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:v[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,u.U)(),T=C.tabGroupChoices,N=C.setTabGroupChoices,I=(0,i.useState)(y),E=I[0],x=I[1],w=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var A=T[f];null!=A&&A!==E&&b.some((function(e){return e.value===A}))&&x(A)}var L=function(e){var n=e.currentTarget,t=w.indexOf(n),o=b[t].value;o!==E&&(O(n),x(o),null!=f&&N(f,String(o)))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var o,i=w.indexOf(e.currentTarget)+1;t=null!=(o=w[i])?o:w[0];break;case"ArrowLeft":var l,r=w.indexOf(e.currentTarget)-1;t=null!=(l=w[r])?l:w[w.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},k)},b.map((function(e){var n=e.value,t=e.label,r=e.attributes;return i.createElement("li",(0,o.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return w.push(e)},onKeyDown:S,onFocus:L,onClick:L},r,{className:(0,l.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),r?(0,i.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function g(e){var n=(0,r.Z)();return i.createElement(p,(0,o.Z)({key:String(n)},e))}},7462:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return g}});var o=t(5443),i=t(3010),l=(t(9496),t(9613)),r=t(2418),a=t(8661),u=["components"],s={sidebar_label:"Android (Kotlin)"},c="Integrate `io.logto.sdk:android`",d={unversionedId:"docs/recipes/integrate-logto/android",id:"docs/recipes/integrate-logto/android",title:"Integrate `io.logto.sdk:android`",description:"Install Logto Android SDK with Gradle",source:"@site/docs/docs/recipes/integrate-logto/android.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/android",permalink:"/docs/recipes/integrate-logto/android",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docs/recipes/integrate-logto/android.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Android (Kotlin)"},sidebar:"docsSidebar",previous:{title:"\ud83d\udd17 Integrate Logto in your application",permalink:"/docs/recipes/integrate-logto/"},next:{title:"iOS (Swift)",permalink:"/docs/recipes/integrate-logto/ios"}},p={},g=[{value:"Install Logto Android SDK with Gradle",id:"install-logto-android-sdk-with-gradle",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Configure",id:"configure",level:2},{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},{value:"Configure Redirect URI in Admin Console",id:"configure-redirect-uri-in-admin-console",level:3},{value:"Configure Logto Android SDK",id:"configure-logto-android-sdk",level:3},{value:"Sign in",id:"sign-in",level:2},{value:"Perform a signing-in action",id:"perform-a-signing-in-action",level:3},{value:"Implement your business logic after signing-in.",id:"implement-your-business-logic-after-signing-in",level:3},{value:"Sign out",id:"sign-out",level:2},{value:"Perform a signing-out action",id:"perform-a-signing-out-action",level:3},{value:"Further readings",id:"further-readings",level:2}],m={toc:g};function f(e){var n=e.components,t=(0,i.Z)(e,u);return(0,l.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"integrate-iologtosdkandroid"},"Integrate ",(0,l.kt)("inlineCode",{parentName:"h1"},"io.logto.sdk:android")),(0,l.kt)("h2",{id:"install-logto-android-sdk-with-gradle"},"Install Logto Android SDK with Gradle"),(0,l.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Minimal Android SDK: Level 24")),(0,l.kt)("p",null,"Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"mavenCentral()")," repository to your Gradle project build file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"repositories {\n    mavenCentral()\n}\n")),(0,l.kt)("p",null,"Add the Logto Android SDK to your dependencies:"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation("io.logto.sdk:android:1.0.0")\n}\n'))),(0,l.kt)(a.Z,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'io.logto.sdk:android:1.0.0'\n}\n")))),(0,l.kt)("h2",{id:"configure"},"Configure"),(0,l.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Redirect URI")," indicates the endpoint that the application used to receive authorization results, which is implemented by the Logto Android SDK internally."),(0,l.kt)("h3",{id:"configure-redirect-uri-in-admin-console"},"Configure Redirect URI in Admin Console"),(0,l.kt)("p",null,"Add the following value to Redirect URIs on the application settings page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback\n")),(0,l.kt)("p",null,"Notes: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LOGTO_REDIRECT_SCHEME")," should be a custom scheme in the reverse domain format."),(0,l.kt)("li",{parentName:"ul"},"Replace ",(0,l.kt)("inlineCode",{parentName:"li"},"$(LOGTO_REDIRECT_SCHEME)")," with your own settings.")),(0,l.kt)("p",null,"e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback")),(0,l.kt)("h3",{id:"configure-logto-android-sdk"},"Configure Logto Android SDK"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\n\nclass MainActivity : AppCompatActivity() {\n    val logtoConfig = LogtoConfig(\n        endpoint = "<your-logto-endpoint>",\n        appId = "<your-app-id>",\n        scopes = null,\n        resources = null,\n        usingPersistStorage = true,\n    )\n\n    val logtoClient = LogtoClient(logtoConfig, application)\n}\n'))),(0,l.kt)(a.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\n\npublic class MainActivity extends AppCompatActivity {\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",\n            "<your-app-id>",\n            null,\n            null,\n            true\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n')))),(0,l.kt)("p",null,"Notes: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<your-logto-endpoint>")," is the logto service running in your machine. If you start logto service in ",(0,l.kt)("inlineCode",{parentName:"li"},"http://localhost:300")," then ",(0,l.kt)("inlineCode",{parentName:"li"},"<your-logto-endpoint")," will be ",(0,l.kt)("inlineCode",{parentName:"li"},"http://localhost:300")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<your-app-id>")," is the Application ID of your application, which is created in the Admin Console.")),(0,l.kt)("h2",{id:"sign-in"},"Sign in"),(0,l.kt)("h3",{id:"perform-a-signing-in-action"},"Perform a signing-in action"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'logtoClient.signInWithBrowser(\n    this,\n    "io.logto.android://io.logto.sample/callback",\n) { logtoException: LogtoException? ->\n    // custom logic\n}\n'))),(0,l.kt)(a.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'logtoClient.signInWithBrowser(\n    this,\n    "io.logto.android://io.logto.sample/callback",\n    logtoException -> {\n        // custom logic\n    }\n);\n')))),(0,l.kt)("h3",{id:"implement-your-business-logic-after-signing-in"},"Implement your business logic after signing-in."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"logtoClient.getAccessToken { logtoException: LogtoException?, result: AccessToken? ->\n    // custom logic\n}\n\nlogtoClient.getIdTokenClaims { logtoException: LogtoException?, result: IdTokenClaims? ->\n    // custom logic\n}\n\nlogtoClient.fetchUserInfo { logtoException: LogtoException?, userInfoResponse: UserInfoResponse? ->\n    // custom logic\n}\n"))),(0,l.kt)(a.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"logtoClient.getAccessToken((logtoException, accessToken) -> {\n    // custom logic\n});\n\nlogtoClient.getIdTokenClaims((logtoException, idTokenClaims) -> {\n    // custom logic\n});\n\nlogtoClient.fetchUserInfo((logtoException, userInfoResponse) -> {\n    // custom logic\n});\n")))),(0,l.kt)("h2",{id:"sign-out"},"Sign out"),(0,l.kt)("h3",{id:"perform-a-signing-out-action"},"Perform a signing-out action"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"logtoClient.signOut { logtoException: LogtoException? ->\n    // custom logic\n}\n"))),(0,l.kt)(a.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"logtoClient.signOut(logtoException -> {\n    // custom logic\n});\n")))),(0,l.kt)("p",null,"Notes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"signOut")," will always clear local credentials even if errors occurred.")),(0,l.kt)("h2",{id:"further-readings"},"Further readings"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fetch User Info"),(0,l.kt)("li",{parentName:"ul"},"Configure Social Sign-In"),(0,l.kt)("li",{parentName:"ul"},"Access Protected API Resources")))}f.isMDXComponent=!0}}]);