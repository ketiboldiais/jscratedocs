"use strict";(self.webpackChunkjscratedocs=self.webpackChunkjscratedocs||[]).push([[593],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=l(r),u=a,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4447:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"Weighted Graph"},i=void 0,p={unversionedId:"WeightedGraph",id:"WeightedGraph",title:"WeightedGraph",description:"The WeightedGraph module implements a weighted simple graph. That is, a",source:"@site/docs/WeightedGraph.mdx",sourceDirName:".",slug:"/WeightedGraph",permalink:"/jscratedocs/docs/WeightedGraph",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Weighted Graph"},sidebar:"tutorialSidebar",previous:{title:"Vector",permalink:"/jscratedocs/docs/Vector"}},s={},l=[{value:"Constructor",id:"constructor",level:2},{value:"shortestPath(\ud835\udc46, \ud835\udc38)",id:"shortestpath\ud835\udc46-\ud835\udc38",level:2}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"WeightedGraph")," module implements a weighted ",(0,a.kt)("em",{parentName:"p"},"simple graph"),". That is, a\na simple graph with weighted edges."),(0,a.kt)("h2",{id:"constructor"},"Constructor"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"WeightedGraph")," can be instantiated by passing a comma separated list of\nedges (or a spread of an array of edges). Alternatively, the parameter list\ncan be left empty, with edges and vertices added later via the ",(0,a.kt)("inlineCode",{parentName:"p"},"addEdge"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"addVertices")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { WeightedGraph } from "@crates";\nimport { Print } from "@util";\n\nconst wg = WeightedGraph(["A", "B", 4], ["A", "C", 2], ["B", "D", 3]);\n\nPrint(wg);\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal"},"\u251c\u2500 A\n\u2502  \u251c\u2500 0\n\u2502  \u2502  \u251c\u2500 node: B\n\u2502  \u2502  \u2514\u2500 weight: 4\n\u2502  \u2514\u2500 1\n\u2502     \u251c\u2500 node: C\n\u2502     \u2514\u2500 weight: 2\n\u251c\u2500 B\n\u2502  \u251c\u2500 0\n\u2502  \u2502  \u251c\u2500 node: A\n\u2502  \u2502  \u2514\u2500 weight: 4\n\u2502  \u2514\u2500 1\n\u2502     \u251c\u2500 node: D\n\u2502     \u2514\u2500 weight: 3\n\u251c\u2500 C\n\u2502  \u2514\u2500 0\n\u2502     \u251c\u2500 node: A\n\u2502     \u2514\u2500 weight: 2\n\u2514\u2500 D\n   \u2514\u2500 0\n      \u251c\u2500 node: B\n      \u2514\u2500 weight: 3\n")),(0,a.kt)("h2",{id:"shortestpath\ud835\udc46-\ud835\udc38"},"shortestPath(\ud835\udc46, \ud835\udc38)"),(0,a.kt)("p",null,"Returns an array listing the shortest path from \ud835\udc46 to \ud835\udc38, using Dijkstra's\nalgorithm."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { WeightedGraph } from "@crates";\nimport { Print } from "@util";\n\nconst wg = WeightedGraph(\n    ["A", "B", 4],\n    ["A", "C", 2],\n    ["B", "E", 3],\n    ["C", "D", 2],\n    ["C", "F", 4],\n    ["D", "E", 3],\n    ["D", "F", 1],\n    ["E", "F", 1],\n);\n\nconst shortestPath_A_to_E = wg.shortestPath("A", "E");\n\nPrint(shortestPath_A_to_E);\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal"},"[A, C, D, F, E]\n")))}d.isMDXComponent=!0}}]);