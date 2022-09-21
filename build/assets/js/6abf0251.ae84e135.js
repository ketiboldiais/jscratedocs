"use strict";(self.webpackChunkjscratedocs=self.webpackChunkjscratedocs||[]).push([[868],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>d});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),o=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},l=function(e){var a=o(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),N=o(t),d=s,k=N["".concat(i,".").concat(d)]||N[d]||c[d]||r;return t?n.createElement(k,p(p({ref:a},l),{},{components:t})):n.createElement(k,p({ref:a},l))}));function d(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,p=new Array(r);p[0]=N;var m={};for(var i in a)hasOwnProperty.call(a,i)&&(m[i]=a[i]);m.originalType=e,m.mdxType="string"==typeof e?e:s,p[1]=m;for(var o=2;o<r;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},3659:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>m,toc:()=>o});var n=t(7462),s=(t(7294),t(3905));const r={sidebar_label:"String API",sidebar_position:3},p="Str",m={unversionedId:"string",id:"string",title:"Str",description:"The str module provides several static methods on strings. Note that",source:"@site/docs/string.mdx",sourceDirName:".",slug:"/string",permalink:"/jscratedocs/docs/string",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"String API",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Sort API",permalink:"/jscratedocs/docs/sort"},next:{title:"AVL Tree",permalink:"/jscratedocs/docs/AVLTree"}},i={},o=[{value:"isIsomorph(\ud835\udc461, \ud835\udc462)",id:"isisomorph\ud835\udc461-\ud835\udc462",level:2},{value:"join(\ud835\udc461, \ud835\udc462, \ud835\udc463, ..., \ud835\udc46\ud835\udc5b)",id:"join\ud835\udc461-\ud835\udc462-\ud835\udc463--\ud835\udc46\ud835\udc5b",level:2},{value:"strcmp(\ud835\udc461,\ud835\udc462)",id:"strcmp\ud835\udc461\ud835\udc462",level:2},{value:"subseq(\ud835\udc461,\ud835\udc462)",id:"subseq\ud835\udc461\ud835\udc462",level:2},{value:"Caveats",id:"caveats",level:2}],l={toc:o};function c(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"str"},"Str"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"str")," module provides several static methods on strings. Note that\nthere are unavoidable tradeoffs to working with strings in JavaScript. See\nthe ",(0,s.kt)("em",{parentName:"p"},"Caveats")," section below."),(0,s.kt)("h2",{id:"isisomorph\ud835\udc461-\ud835\udc462"},"isIsomorph(\ud835\udc461, \ud835\udc462)"),(0,s.kt)("p",null,"Returns ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," if \ud835\udc461 is an isomorphism of \ud835\udc462, ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,s.kt)("h2",{id:"join\ud835\udc461-\ud835\udc462-\ud835\udc463--\ud835\udc46\ud835\udc5b"},"join(\ud835\udc461, \ud835\udc462, \ud835\udc463, ..., \ud835\udc46\ud835\udc5b)"),(0,s.kt)("p",null,"Returns \ud835\udc461, \ud835\udc462, ..., \ud835\udc46\ud835\udc5b joined together as a single string."),(0,s.kt)("h2",{id:"strcmp\ud835\udc461\ud835\udc462"},"strcmp(\ud835\udc461,\ud835\udc462)"),(0,s.kt)("p",null,"Returns ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," if \ud835\udc461 comes before \ud835\udc462 alphabetically, ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,s.kt)("h2",{id:"subseq\ud835\udc461\ud835\udc462"},"subseq(\ud835\udc461,\ud835\udc462)"),(0,s.kt)("p",null,"Returns true if \ud835\udc461 is a subsequence of \ud835\udc462, false otherwise:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'import { subseq } from "@str";\n\nconst res = subseq("hello", "hello world");\nconsole.log(res);\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-terminal"},"true\n")),(0,s.kt)("h2",{id:"caveats"},"Caveats"),(0,s.kt)("p",null,"To instantiate strings, JavaScript uses 16 bits (2 bytes) per character.\nThis yields a total of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"16"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{2^{16}}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"16"))))))))))))))," (",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"65"),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,s.kt)("mn",{parentName:"mrow"},"536")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{65~536}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"65"),(0,s.kt)("span",{parentName:"span",className:"mspace nobreak"},"\xa0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"536")))))),") possible characters. The\nproblem: Unicode defines more characters than ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"1")),(0,s.kt)("mn",{parentName:"mrow"},"6")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{2^16}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1")))))))),(0,s.kt)("span",{parentName:"span",className:"mord"},"6"))))))," (the latest standard\nversion defines ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"144"),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,s.kt)("mn",{parentName:"mrow"},"697")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{144~697}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"144"),(0,s.kt)("span",{parentName:"span",className:"mspace nobreak"},"\xa0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"697")))))),") To solve this problem, JavaScript encodes\nstrings with UTF-16.",(0,s.kt)("sup",{parentName:"p",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,s.kt)("p",null,"Under UTF-16, JavaScript maintains every character taking up 2 bytes. In\nUTF-speak, the block of 2 bytes is called a ",(0,s.kt)("em",{parentName:"p"},"code unit"),", and the\ncharacter's ",(0,s.kt)("em",{parentName:"p"},"code point")," is in this block. A code point is just another\nword for ",(0,s.kt)("em",{parentName:"p"},"character code")," (as well as ",(0,s.kt)("em",{parentName:"p"},"code number"),", ",(0,s.kt)("em",{parentName:"p"},"code value"),", ",(0,s.kt)("em",{parentName:"p"},"code\nelement"),", etc.). It's a one-to-one mapping between a character and a\nnatural number."),(0,s.kt)("p",null,"For example, in ASCII, ",(0,s.kt)("inlineCode",{parentName:"p"},"Z")," maps to the natural number 90. This is a simple\nmapping method: Each character is mapped to a natural number in the range 0\nto 255."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'Print("Z".codePointAt(0)); // 90 - inline with ASCII\nPrint("a".codePointAt(0)); // 97 - inline with ASCII\nPrint("\u3081".codePointAt(0)); // 12417 - out of ASCII range\n')),(0,s.kt)("p",null,"In Unicode, the code points are often represented with ",(0,s.kt)("inlineCode",{parentName:"p"},"U+")," prepended, and\ninstead a integer numbers (as outputted by JavaScript) hexadecimals are\nused instead:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'Print("a".codePointAt(0).toString(16)); // 61\nPrint("Z".codePointAt(0).toString(16)); // 5a\nPrint("\u3081".codePointAt(0).toString(16)); // 3081\n')),(0,s.kt)("p",null,"We can confirm this to be the case when we use the ",(0,s.kt)("inlineCode",{parentName:"p"},"\\u")," syntax and the\nhexadecimal numbers in a string:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'Print("a".codePointAt(0).toString(16)); // U+0061\nPrint("Z".codePointAt(0).toString(16)); // U+005a\nPrint("\u3081".codePointAt(0).toString(16)); // U+3081\n\nPrint("\\u0061"); // a\nPrint("\\u005a"); // Z\nPrint("\\u3081"); // \u3081\n')),(0,s.kt)("p",null,"As we can likely tell, these are large numbers. Unicode originally planned\nto only use 16-bit numbers (hence Java's ",(0,s.kt)("inlineCode",{parentName:"p"},"char")," type consisting of 16\nbits), but Unicode's code points today run from ",(0,s.kt)("inlineCode",{parentName:"p"},"0x0000")," (0) to ",(0,s.kt)("inlineCode",{parentName:"p"},"0x10FFFF"),"\n(1~114~111). With just 16 bits, only the code points from ",(0,s.kt)("inlineCode",{parentName:"p"},"0x0000")," to\n",(0,s.kt)("inlineCode",{parentName:"p"},"0xFFFF")," would be covered."),(0,s.kt)("p",null,(0,s.kt)("sup",{parentName:"p",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," Importantly, Unicode is just a set of mappings from integers to\ncharacters. It is ",(0,s.kt)("em",{parentName:"p"},"not")," a character encoding scheme (i.e., Unicode doesn't\ndictate how the mappings are implemented). Instead, Unicode says, \"This is\nthe set, go forth and implement.\" Unicode's audience (the actual encoding\nschemes), include UCS-2, UCS-4, UTF-2, UTF-4, UTF-8 UTF-16 (what JavaScript\nuses), and UTF-32."))}c.isMDXComponent=!0}}]);