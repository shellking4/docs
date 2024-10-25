"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[27306],{96417:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=i(86070),t=i(15658),o=i(42059);const l={slug:"/integrations/mailgun",sidebar_label:"Mailgun",sidebar_custom_props:{description:"Mailgun is an email delivery service for sending, receiving, and tracking emails."}},r="Mailgun email connector",c={id:"integrations/email/mailgun/README",title:"README",description:"The official Logto connector for Mailgun email service.",source:"@site/docs/integrations/email/mailgun/README.mdx",sourceDirName:"integrations/email/mailgun",slug:"/integrations/mailgun",permalink:"/integrations/mailgun",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/integrations/email/mailgun/README.mdx",tags:[],version:"current",frontMatter:{slug:"/integrations/mailgun",sidebar_label:"Mailgun",sidebar_custom_props:{description:"Mailgun is an email delivery service for sending, receiving, and tracking emails."}},sidebar:"integrationsSidebar",previous:{title:"AWS Direct Mail",permalink:"/integrations/aws-ses"},next:{title:"SendGrid Email",permalink:"/integrations/sendgrid-email"}},a={},d=[...o.RM,{value:"Prerequisites",id:"prerequisites",level:2},{value:"Basic configuration",id:"basic-configuration",level:2},{value:"Deliveries",id:"deliveries",level:2},{value:"Config object",id:"config-object",level:3},{value:"Usage types",id:"usage-types",level:3},{value:"Content config",id:"content-config",level:3},{value:"Example",id:"example",level:3},{value:"Test Mailgun email connector",id:"test-mailgun-email-connector",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"mailgun-email-connector",children:"Mailgun email connector"})}),"\n",(0,s.jsx)(n.p,{children:"The official Logto connector for Mailgun email service."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Table of contents"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#mailgun-email-connector",children:"Mailgun email connector"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#prerequisites",children:"Prerequisites"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#basic-configuration",children:"Basic configuration"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#deliveries",children:"Deliveries"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#config-object",children:"Config object"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#usage-types",children:"Usage types"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#content-config",children:"Content config"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#example",children:"Example"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#test-mailgun-email-connector",children:"Test Mailgun email connector"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.a,{href:"https://www.mailgun.com/",children:"Mailgun"})," account"]}),"\n",(0,s.jsxs)(n.li,{children:["An API key from your Mailgun account, requires the permission to send messages (emails). See ",(0,s.jsx)(n.a,{href:"https://help.mailgun.com/hc/en-us/articles/203380100-Where-Can-I-Find-My-API-Key-and-SMTP-Credentials-",children:"Where Can I Find My API Key and SMTP Credentials?"})," for more information."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"basic-configuration",children:"Basic configuration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Fill out the ",(0,s.jsx)(n.code,{children:"endpoint"})," field when you are using a different Mailgun API endpoint, for example, EU region should be ",(0,s.jsx)(n.code,{children:"https://api.eu.mailgun.net"}),". The default value is ",(0,s.jsx)(n.code,{children:"https://api.mailgun.net"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Fill out the ",(0,s.jsx)(n.code,{children:"domain"})," field with the domain you have registered in your Mailgun account. This value can be found in the ",(0,s.jsx)(n.strong,{children:"Domains"})," section of the Mailgun dashboard. The domain should be in the format ",(0,s.jsx)(n.code,{children:"example.com"}),", without the ",(0,s.jsx)(n.code,{children:"https://"})," or ",(0,s.jsx)(n.code,{children:"http://"})," prefix."]}),"\n",(0,s.jsxs)(n.li,{children:["Fill out the ",(0,s.jsx)(n.code,{children:"apiKey"})," field with the API key you have generated in your Mailgun account."]}),"\n",(0,s.jsxs)(n.li,{children:["Fill out the ",(0,s.jsx)(n.code,{children:"from"})," field with the email address you want to send emails from. This email address must be registered in your Mailgun account. The email address should be in the format ",(0,s.jsx)(n.code,{children:"Sender Name \\<sender@example.com>"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deliveries",children:"Deliveries"}),"\n",(0,s.jsx)(n.h3,{id:"config-object",children:"Config object"}),"\n",(0,s.jsx)(n.p,{children:'The "Deliveries" section allows you to configure the content of the emails to be sent in different scenarios. It is a JSON key-value map where the key is the usage type and the value is an object containing the content config for the email to be sent.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "<usage-type>": {\n    // ...\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"usage-types",children:"Usage types"}),"\n",(0,s.jsx)(n.p,{children:"The following usage types are supported:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Register"}),": The email to be sent when a user is registering."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SignIn"}),": The email to be sent when a user is signing in."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ForgotPassword"}),": The email to be sent when a user is resetting their password."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Generic"}),": The email to be sent when a user is performing a generic action, for example, testing the email connector."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),"\nIf the usage type is not specified in the deliveries config, the generic email will be sent. If the generic email is not specified, the connector will return an error."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"content-config",children:"Content config"}),"\n",(0,s.jsx)(n.p,{children:"The connector supports both direct HTML content and Mailgun template. You can use one of them for each usage type."}),"\n",(0,s.jsxs)(n.p,{children:["In both subject and content, you can use the ",(0,s.jsx)(n.code,{children:"{{code}}"})," placeholder to insert the verification code."]}),"\n",(0,s.jsx)(n.p,{children:"To use direct HTML content, fill out the following fields:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"subject"}),": The subject of the email to be sent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"replyTo"}),": The email address to be used as the reply-to address."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"html"}),": (Required) The HTML content of the email to be sent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"text"}),": The plain text version of the email to be sent."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To use Mailgun template, fill out the following fields:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"subject"}),": The subject of the email to be sent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"replyTo"}),": The email address to be used as the reply-to address."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"template"}),": (Required) The name of the Mailgun template to be used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"variables"}),": The variables to be passed to the Mailgun template. Should be a JSON key-value map since it will be stringified before sending to Mailgun. Note there's no need to include the ",(0,s.jsx)(n.code,{children:"code"})," variable since it will be automatically added by the connector."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"The following is an example of the deliveries config:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "Register": {\n    "subject": "{{code}} is your verification code",\n    "replyTo": "Foo <foo@bar.com>",\n    "html": "<h1>Welcome to Logto</h1><p>Your verification code is {{code}}.</p>",\n    "text": "Welcome to Logto. Your verification code is {{code}}."\n  },\n  "SignIn": {\n    "subject": "Welcome back to Logto",\n    "replyTo": "Foo <foo@bar.com>",\n    "template": "logto-sign-in",\n    "variables": {\n      "bar": "baz"\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"test-mailgun-email-connector",children:"Test Mailgun email connector"}),"\n",(0,s.jsx)(n.p,{children:'You can type in an email address and click on "Send" to see whether the settings can work before "Save and Done".'}),"\n",(0,s.jsxs)(n.p,{children:["That's it. Don't forget to ",(0,s.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/configure-connectors/email-connector/enable-email-sign-in/",children:"Enable connector in sign-in experience"})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},42059:(e,n,i)=>{i.d(n,{Ay:()=>r,RM:()=>o});var s=i(86070),t=i(15658);const o=[];function l(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In this guide, we assume you have basic knowledge of Logto Connectors. If you don't, check out the ",(0,s.jsx)(n.a,{href:"/docs/recipes/configure-connectors/",children:"Configure connectors"})," guide to get started."]}),"\n"]})})}function r(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var s=i(30758);const t={},o=s.createContext(t);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);