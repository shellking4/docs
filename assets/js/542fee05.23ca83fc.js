"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[34315],{58120:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var t=a(11527),s=a(17279);const o={sidebar_label:"Localized language",sidebar_position:5},i="Localized language",d={id:"docs/recipes/customize-sie/localized-language",title:"Localized language",description:"The Sign-in Experience i18n is a powerful tool that allows you to create and manage your own unique set of language options.",source:"@site/docs/docs/recipes/customize-sie/localized-language.md",sourceDirName:"docs/recipes/customize-sie",slug:"/docs/recipes/customize-sie/localized-language",permalink:"/docs/recipes/customize-sie/localized-language",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/customize-sie/localized-language.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Localized language",sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Set your terms",permalink:"/docs/recipes/customize-sie/set-you-terms"},next:{title:"Bring your UI",permalink:"/docs/recipes/customize-sie/bring-your-ui"}},l={},r=[{value:"Set your language mode",id:"set-your-language-mode",level:2},{value:"Customize the existing language",id:"customize-the-existing-language",level:2},{value:"Add a new language",id:"add-a-new-language",level:2},{value:"How added language appear to end customers",id:"how-added-language-appear-to-end-customers",level:2},{value:"FAQ",id:"faq",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"localized-language",children:"Localized language"}),"\n",(0,t.jsx)(n.p,{children:"The Sign-in Experience i18n is a powerful tool that allows you to create and manage your own unique set of language options."}),"\n",(0,t.jsxs)(n.p,{children:["Logto supports ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/phrases-experience/src/locales",children:"various languages"})," pre-defined. Now, 113 language tags are also included. You can make your own translation of the product's user interface and apply it in a different language."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Currently, this language setting only affects the Sign-in UI and has no bearing on the language used in the Admin Console."})}),"\n",(0,t.jsxs)(n.p,{children:["Let's back up for a second and look at the framework and terminology used to describe the Sign-in Experience.",(0,t.jsx)(n.br,{}),"\n",'A JSON file stores the text for the Logto sign-in user interface. A "key", or unique identifier, and its associated "value" define each phrase.']}),"\n",(0,t.jsx)(n.p,{children:"For example,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const translation = {\n  input: {\n    username: 'Username',\n    password: 'Password',\n    email: 'Email',\n    phone_number: 'Phone number',\n    confirm_password: 'Confirm password',\n  },\n  secondary: {\n    sign_in_with: 'Sign in with {{methods, list(type: disjunction;)}}',\n    social_bind_with:\n      'Already have an account? Sign in to link {{methods, list(type: disjunction;)}} with your social identity.',\n  },\n  // ....\n};\n\nexport default translation;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As a result, localization's emphasis is on making it simple and intuitive for you to edit those values (code in red) with no code needed.",(0,t.jsx)(n.br,{}),"\n","Your developers will then have a great deal of leeway and will be happy to embrace a customized experience based on the business's specific requirements."]}),"\n",(0,t.jsx)(n.p,{children:"Let's see how we did in the following sections."}),"\n",(0,t.jsx)(n.h2,{id:"set-your-language-mode",children:"Set your language mode"}),"\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Sign-in Experience > Others > Language"})," to configure how language is determined for your sign-in experience."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"SIE others setting language",src:a(45752).Z+"",width:"2858",height:"1712"})}),"\n",(0,t.jsx)(n.h2,{id:"customize-the-existing-language",children:"Customize the existing language"}),"\n",(0,t.jsxs)(n.p,{children:["There is also a ",(0,t.jsx)(n.strong,{children:"Manage language"})," button beneath the toggle. This is the location where you can manage your language library."]}),"\n",(0,t.jsx)(n.p,{children:"We make every effort to make language customization as simple as possible, but we may refer to a few terms throughout the documentation. Here are a few definitions you should be aware of:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Definition"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Language tag"}),(0,t.jsx)(n.td,{children:"The language tag identifies the language of the content. A language tag is made up of a language code (for example, en, fr, zh) and a country/region code (for example, US, UK, KR) separated by hyphens. A language tag looks like this: en-US."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Logto provided language"}),(0,t.jsx)(n.td,{children:"Logto provided language is Logto official language and is stored in Logto original code base."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Added language"}),(0,t.jsx)(n.td,{children:"Added language is the language added by users."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Logto source values"}),(0,t.jsx)(n.td,{children:"Logto source values are Logto-supplied values that have not been customized by users."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Custom values"}),(0,t.jsx)(n.td,{children:"Custom values are values that have already been customized by users. Logto source values will be overwritten."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["When you click the ",(0,t.jsx)(n.strong,{children:"Manage language"})," button, a modal screen will appear.",(0,t.jsx)(n.br,{}),"\n","Logto provides the languages on the left side, and you can see Logto provided next to the language tag. Although pre-defined languages cannot be deleted, they can be customized. When it loads in front of end users, your custom values will overwrite Logto source values."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"SIE custom exsiting language",src:a(71714).Z+"",width:"2756",height:"1964"})}),"\n",(0,t.jsx)(n.h2,{id:"add-a-new-language",children:"Add a new language"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"SIE add a new language",src:a(4299).Z+"",width:"2756",height:"1926"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also add your own language in addition to the ones Logto offers. Click the ",(0,t.jsx)(n.strong,{children:"Add language"})," button, select a language tag, add your own translation, and then save your changes. You can then find the added language in the dropdown menu on the left side of the screen. The new language version is now available!"]}),"\n",(0,t.jsx)(n.h2,{id:"how-added-language-appear-to-end-customers",children:"How added language appear to end customers"}),"\n",(0,t.jsx)(n.p,{children:"Let's say you have a website where English is the default language and auto-detect is turned on. A user from Japan happens upon your site and decides to create an account. If he/she uses Japanese as their app language but Logto doesn't yet support the language, the sign-in screen will appear in English."}),"\n",(0,t.jsxs)(n.p,{children:["Now SIE i18n makes customized language possible.",(0,t.jsx)(n.br,{}),"\n","Click the ",(0,t.jsx)(n.code,{children:"ja"})," language tag to add your own Japanese translation.",(0,t.jsx)(n.br,{}),"\n","In this way, the user accessing your site from Japan will be able to read content in Japanese, which you have just translated from English."]}),"\n",(0,t.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"What if the language I added becomes Logto provided language?"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Next to the language tag on the left, a Logto-provided tag will appear, and the language you added will no longer be removable. The modified values continue to function and replace the original Logto values. Erase the user-supplied values to use the values provided by Logto's default configuration."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"What if I only added a few custom values?"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["What the final users see is the result of the two columns merging.",(0,t.jsx)(n.br,{}),"\n","Suppose, that you only want to make adjustments to a subset of the original content copies that Logto supplied. The only difference between your signup screen and the one provided by Logto will be the keys you edited. The rest of the content will remain unchanged."]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},4299:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/sie-add-a-new-language-53d95df06cd2276fcb5c66148d5a126c.png"},71714:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/sie-custom-existing-language-140d199c58939bcbc25f07a8fd63a40f.png"},45752:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/sie-setting-languages-40f940c99f0b540015a085dd161efcec.png"},17279:(e,n,a)=>{a.d(n,{Z:()=>d,a:()=>i});var t=a(50959);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);