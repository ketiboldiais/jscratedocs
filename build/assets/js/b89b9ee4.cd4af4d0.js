"use strict";(self.webpackChunkjscratedocs=self.webpackChunkjscratedocs||[]).push([[20],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>N});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},o=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),h=i(t),N=r,k=h["".concat(p,".").concat(N)]||h[N]||c[N]||s;return t?n.createElement(k,m(m({ref:a},o),{},{components:t})):n.createElement(k,m({ref:a},o))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=h;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,m[1]=l;for(var i=2;i<s;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7026:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>m,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=t(7462),r=(t(7294),t(3905));const s={sidebar_label:"Binary Search Tree"},m="BinarySearchTree",l={unversionedId:"BinarySearchTree",id:"BinarySearchTree",title:"BinarySearchTree",description:"The BinarySearchTree module implements a binary search tree.",source:"@site/docs/BinarySearchTree.mdx",sourceDirName:".",slug:"/BinarySearchTree",permalink:"/jscratedocs/docs/BinarySearchTree",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Binary Search Tree"},sidebar:"tutorialSidebar",previous:{title:"AVL Tree",permalink:"/jscratedocs/docs/AVLTree"},next:{title:"Bitset",permalink:"/jscratedocs/docs/Bitset"}},p={},i=[{value:"Constructor",id:"constructor",level:2},{value:"\ud835\udc35.arrayed(\ud835\udc46:string)",id:"\ud835\udc35arrayed\ud835\udc46string",level:2},{value:"\ud835\udc35.push(\ud835\udc63)",id:"\ud835\udc35push\ud835\udc63",level:2},{value:"\ud835\udc35.delete(\ud835\udc63)",id:"\ud835\udc35delete\ud835\udc63",level:2},{value:"\ud835\udc35.size()",id:"\ud835\udc35size",level:2},{value:"\ud835\udc35.isStrict()",id:"\ud835\udc35isstrict",level:2},{value:"\ud835\udc35.leafCount()",id:"\ud835\udc35leafcount",level:2},{value:"\ud835\udc35.deg2Count()",id:"\ud835\udc35deg2count",level:2},{value:"\ud835\udc35.deg1Count()",id:"\ud835\udc35deg1count",level:2},{value:"\ud835\udc35.height()",id:"\ud835\udc35height",level:2},{value:"\ud835\udc35.maxDepth()",id:"\ud835\udc35maxdepth",level:2},{value:"\ud835\udc35.minDepth()",id:"\ud835\udc35mindepth",level:2},{value:"Details",id:"details",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Caveats",id:"caveats",level:3}],o={toc:i};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"binarysearchtree"},"BinarySearchTree"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BinarySearchTree")," module implements a binary search tree."),(0,r.kt)("h2",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"To construct a new ",(0,r.kt)("inlineCode",{parentName:"p"},"BinarySearchTree"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { binarySearchTree } from "@crates";\nimport { Print } from "@util";\n\nconst bst = binarySearchTree(8, 3, 10, 1, 6, 14, 4, 7, 13);\nPrint(bst);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"\u2514\u2500 root\n   \u251c\u2500 value: 8\n   \u251c\u2500 left\n   \u2502  \u251c\u2500 value: 3\n   \u2502  \u251c\u2500 left\n   \u2502  \u2502  \u251c\u2500 value: 1\n   \u2502  \u2502  \u251c\u2500 left: null\n   \u2502  \u2502  \u2514\u2500 right: null\n   \u2502  \u2514\u2500 right\n   \u2502     \u251c\u2500 value: 6\n   \u2502     \u251c\u2500 left\n   \u2502     \u2502  \u251c\u2500 value: 4\n   \u2502     \u2502  \u251c\u2500 left: null\n   \u2502     \u2502  \u2514\u2500 right: null\n   \u2502     \u2514\u2500 right\n   \u2502        \u251c\u2500 value: 7\n   \u2502        \u251c\u2500 left: null\n   \u2502        \u2514\u2500 right: null\n   \u2514\u2500 right\n      \u251c\u2500 value: 10\n      \u251c\u2500 left: null\n      \u2514\u2500 right\n         \u251c\u2500 value: 14\n         \u251c\u2500 left\n         \u2502  \u251c\u2500 value: 13\n         \u2502  \u251c\u2500 left: null\n         \u2502  \u2514\u2500 right: null\n         \u2514\u2500 right: null\n")),(0,r.kt)("h2",{id:"\ud835\udc35arrayed\ud835\udc46string"},"\ud835\udc35.arrayed(\ud835\udc46:string)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Returns an array of \ud835\udc35's values in the specified order \ud835\udc46. Valid \ud835\udc46 values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"pre"')," - yields the array from a preorder traversal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"in"')," - yields the array from an inorder traversal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"post"')," - yields the array from a postorder traversal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"level"')," - yields the array from a level-order traveral"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," - default to ",(0,r.kt)("inlineCode",{parentName:"li"},'"in"'))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { binarySearchTree } from "@crates";\n\nconst bst = binarySearchTree(7, 4, 12, 2, 6, 9, 19, 3, 5, 8, 11, 15, 20);\n\nconst preorder = bst.arrayed("pre");\nconst inorder = bst.arrayed("in");\nconst postorder = bst.arrayed("post");\nconst levelorder = bst.arrayed("level");\nconst defaultOrder = bst.arrayed();\n\nconsole.log(`preorder: ${preorder}`);\nconsole.log(`inorder: ${inorder}`);\nconsole.log(`postorder: ${postorder}`);\nconsole.log(`levelorder: ${levelorder}`);\nconsole.log(`defaultOrder: ${defaultOrder}`);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"preorder: 7,4,2,3,6,5,12,9,8,11,19,15,20\ninorder: 2,3,4,5,6,7,8,9,11,12,15,19,20\npostorder: 3,2,5,6,4,8,11,9,15,20,19,12,7\nlevelorder: 7,4,12,2,6,9,19,3,5,8,11,15,20\n")),(0,r.kt)("h2",{id:"\ud835\udc35push\ud835\udc63"},"\ud835\udc35.push(\ud835\udc63)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"push()")," method inserts a new node with the value \ud835\udc63 into the tree.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { binarySearchTree } from "@crates";\n\nconst bst = binarySearchTree(8, 3, 10, 1, 6, 14, 4, 7, 13);\nbst.push(17);\n')),(0,r.kt)("h2",{id:"\ud835\udc35delete\ud835\udc63"},"\ud835\udc35.delete(\ud835\udc63)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deletes the node containing the value \ud835\udc63, and returns ",(0,r.kt)("inlineCode",{parentName:"li"},"this"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { binarySearchTree } from "@crates";\n\nconst bst = binarySearchTree(8, 3, 10, 1, 6, 14, 4, 7, 13);\nbst.print();\nbst.delete(8);\n')),(0,r.kt)("h2",{id:"\ud835\udc35size"},"\ud835\udc35.size()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The number of nodes in the binary search tree.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { binarySearchTree } from "@crates";\n\nconst bst = binarySearchTree(8, 3, 10, 1, 6, 14, 4, 7, 13);\nconst size = bst.size();\nconsole.log(size);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"9\n")),(0,r.kt)("h2",{id:"\ud835\udc35isstrict"},"\ud835\udc35.isStrict()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Returns false if at least one node in the tree has exactly one child,\ntrue otherwise.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { binarySearchTree } from "@crates";\n\nconst bst = binarySearchTree(8, 3, 10, 1, 6, 14, 4, 7, 13);\nconst isStrict = bst.isStrict();\nconsole.log(isStrict);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"false\n")),(0,r.kt)("h2",{id:"\ud835\udc35leafcount"},"\ud835\udc35.leafCount()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Returns the number of leaves in the tree.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { binarySearchTree } from "@crates";\n\nconst bst = binarySearchTree(8, 3, 10, 1, 6, 14, 4, 7, 13);\nconst leafCount = bst.leafCount();\nconsole.log(leafCount);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"4\n")),(0,r.kt)("h2",{id:"\ud835\udc35deg2count"},"\ud835\udc35.deg2Count()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Returns the number of nodes in the tree with exactly two children.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { binarySearchTree } from "@crates";\n\nconst bst = binarySearchTree(8, 3, 10, 1, 6, 14, 4, 7, 13);\nconst deg2s = bst.deg2Count();\nconsole.log(deg2s);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"3\n")),(0,r.kt)("h2",{id:"\ud835\udc35deg1count"},"\ud835\udc35.deg1Count()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Returns the number of nodes in the tree with exactly one child.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { binarySearchTree } from "@crates";\n\nconst bst = binarySearchTree(8, 3, 10, 1, 6, 14, 4, 7, 13);\nconst deg1Count = bst.deg1Count();\nconsole.log(deg1Count);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"2\n")),(0,r.kt)("h2",{id:"\ud835\udc35height"},"\ud835\udc35.height()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Returns the height of \ud835\udc35."),(0,r.kt)("li",{parentName:"ul"},"The result is computed with recursion. If this value is extensively used,\nit's a good idea to store the result in a variable for caching.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { binarySearchTree } from "@crates";\n\nconst bst = binarySearchTree(8, 3, 10, 1, 6, 14, 4, 7, 13);\nconst bstHeight = bst.height();\nconsole.log(bstHeight);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"4\n")),(0,r.kt)("h2",{id:"\ud835\udc35maxdepth"},"\ud835\udc35.maxDepth()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Returns the length of the longest path from the root node to the farthest\nleaf node of \ud835\udc35."),(0,r.kt)("li",{parentName:"ul"},"Like the ",(0,r.kt)("inlineCode",{parentName:"li"},"\ud835\udc35.height()")," method, the ",(0,r.kt)("inlineCode",{parentName:"li"},"maxDepth()")," is computed with\nrecursion. For efficient caching, store the result in a variable.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { binarySearchTree } from "@crates";\n\nconst bst = binarySearchTree(8, 3, 10, 1, 6, 14, 4, 7, 13);\nconst maxDepth = bst.maxDepth();\nconsole.log(maxDepth);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"4\n")),(0,r.kt)("h2",{id:"\ud835\udc35mindepth"},"\ud835\udc35.minDepth()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Returns the length of the shortest path from the root node to the\nfarthest leaf.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { binarySearchTree } from "@crates";\n\nconst bst = binarySearchTree(8, 3, 10, 1, 6, 14, 4, 7, 13);\nconst minDepth = bst.minDepth();\nconsole.log(minDepth);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"2\n")),(0,r.kt)("h2",{id:"details"},"Details"),(0,r.kt)("p",null,"Binary search trees are a connected data structure, consisting of a set of\nnodes, where each node holds (1) data, (2) a pointer to a binary tree \ud835\udc4e\n(often called the left child), and (3) a pointer to a binary tree \ud835\udc4f (often\ncalled the right child). All of the tree's nodes originate from a single\nnode, called the ",(0,r.kt)("em",{parentName:"p"},"root"),". As such, binary trees are a kind of ascyclic\ngraph."),(0,r.kt)("p",null,"The binary search algorithm provides an efficient way to search ",(0,r.kt)("em",{parentName:"p"},"sorted"),"\narrays, but that efficiency is limited to searching. Arrays, sorted or\notherwise, still suffer from expensive add and delete operations. Binary\nsearch trees provide a way around these problems."),(0,r.kt)("h3",{id:"use-cases"},"Use Cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Storing names and looking up a named based on a prefix of the name (used\nin internet routers)."),(0,r.kt)("li",{parentName:"ul"},"Storing a graph's paths and reversing subsections of the path in\n",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"lg"),(0,r.kt)("mo",{parentName:"mrow"},"\u2061"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},".")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{O(\\lg n).}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mop"},"l",(0,r.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."))))))," This leads to significant savings in solving travelling\nsalesman problems."),(0,r.kt)("li",{parentName:"ul"},"Determining the rank of a node in a given set."),(0,r.kt)("li",{parentName:"ul"},"Splitting a data set along a boundary (e.g., given a boundary ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},",")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{x,}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},",")))))),"\nseparating the data into those less than ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{x}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))))," and those greater than\n",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{x}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))),"). Binary search trees accomplish this in ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"lg"),(0,r.kt)("mo",{parentName:"mrow"},"\u2061"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},".")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{O(\\lg n).}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mop"},"l",(0,r.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mord"},".")))))))),(0,r.kt)("h3",{id:"caveats"},"Caveats"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Searching is ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"lg"),(0,r.kt)("mo",{parentName:"mrow"},"\u2061"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{O(\\lg n)}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mop"},"l",(0,r.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))," at best. At worst, ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},".")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{O(n).}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."))))))," This is because\nthe running time depends on the length of a path. If the binary search\ntree is skewed (a straight path from root to leaf), the binary search\ntree degenerates into a linked list, and searching is ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},".")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{O(n).}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mord"},".")))))),(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"lg"),(0,r.kt)("mo",{parentName:"mrow"},"\u2061"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{O(\\lg n)}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mop"},"l",(0,r.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))," occurs only if the tree is perfectly balanced.")))}c.isMDXComponent=!0}}]);