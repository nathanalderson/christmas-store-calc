(this["webpackJsonpchristmas-store-calc"]=this["webpackJsonpchristmas-store-calc"]||[]).push([[0],{12:function(t,e,s){},13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n=s(1),c=s.n(n),a=s(6),l=s.n(a),r=(s(12),s(7)),j=(s(13),new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}));function i(t){return t<1?Math.round(100*t)+"\xa2":t%1==0?"$"+t:"$"+t.toFixed(2)}var u=s(0);var o=function(t){var e=t.vals.map((function(t){return i(t)}));return Object(u.jsxs)("div",{class:"numlist-container",children:[Object(u.jsx)("span",{class:"label",children:"Items:"}),Object(u.jsx)("span",{class:"output",children:e.join(", ")||"-"})]})};var b=function(t){var e=t.vals.reduce((function(t,e){return t+e}),0);return Object(u.jsx)("div",{class:"total-container",children:Object(u.jsx)("span",{class:"output",children:j.format(e)})})},d=s(5);function O(t){return Object(u.jsxs)("td",{class:"button number",onClick:function(){return t.setVals((function(e){return[].concat(Object(d.a)(e),[t.val])}))},children:[t.display,Object(u.jsx)("br",{}),Object(u.jsxs)("span",{class:"value",children:["(",i(t.val),")"]})]})}function x(t){return Object(u.jsx)("td",{class:"other",children:Object(u.jsxs)("form",{children:[Object(u.jsxs)("label",{children:["Amount:",Object(u.jsx)("input",{name:"amount",type:"number",id:"amount"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault();var s=parseFloat(document.getElementById("amount").value);isNaN(s)||(console.log(s),t.setVals((function(t){return[].concat(Object(d.a)(t),[s])})))},children:"Add"})]})})}function h(t){return Object(u.jsx)("td",{class:"button removelast",onClick:function(){return t.setVals((function(t){return t.slice(0,-1)}))},children:"REMOVE LAST"})}function v(t){return Object(u.jsx)("td",{class:"button clear",onClick:function(){return t.setVals([])},children:"CLEAR ALL"})}var p=function(t){return Object(u.jsx)("div",{class:"button-area",children:Object(u.jsxs)("table",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)(O,{setVals:t.setVals,val:.25,display:"1"}),Object(u.jsx)(O,{setVals:t.setVals,val:.5,display:"2"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)(O,{setVals:t.setVals,val:1,display:"3, 4"}),Object(u.jsx)(O,{setVals:t.setVals,val:2,display:"5, 6"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)(O,{setVals:t.setVals,val:3,display:"7, 8"}),Object(u.jsx)(O,{setVals:t.setVals,val:4,display:"9, 10"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)(O,{setVals:t.setVals,val:5,display:"11, 12, 13"}),Object(u.jsx)(O,{setVals:t.setVals,val:7,display:"14, 15, 16, 17"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)(O,{setVals:t.setVals,val:10,display:"18, 19, 20"}),Object(u.jsx)(x,{setVals:t.setVals})]})]})})};var V=function(){var t=Object(n.useState)([]),e=Object(r.a)(t,2),s=e[0],c=e[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("table",{class:"header",children:[Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{rowspan:"2",children:[Object(u.jsx)(o,{vals:s}),Object(u.jsx)(b,{vals:s})]}),Object(u.jsx)(v,{setVals:c})]}),Object(u.jsx)("tr",{children:Object(u.jsx)(h,{setVals:c})})]}),Object(u.jsx)(p,{setVals:c})]})},f=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(e){var s=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,l=e.getTTFB;s(t),n(t),c(t),a(t),l(t)}))};l.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(V,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.b26a0963.chunk.js.map