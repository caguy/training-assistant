(this["webpackJsonptraining-assistant"]=this["webpackJsonptraining-assistant"]||[]).push([[0],{43:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(0),o=t.n(a),i=t(18),c=t.n(i),l=t(4),u=t(6),s=t(7),d=t(29),m=t.n(d),f=t(12),b=t(17),p="PACE",h="Allure",j="min/km",g="SPEED",v="Vitesse",O="km/h",x="TIME",y="Temps",w="hh:mm:ss",k="DISTANCE",I="Distance",E="km",S="SET_INPUT_FIELD",V="SET_VALUE",D="SET_TOTAL",C="TOGGLE_FOLD",N="ADD_SEGMENT",F="REMOVE_SEGMENT",_="MOVE_SEGMENT",z=t(30),A=t(5);function L(n,e,t){var r=null;return Array.isArray(n.segments)&&n.segments.forEach((function(n){if(n.id===e){if(!n[t])return;var a=n[t].value;r="object"===typeof a?Object(A.a)({},a):a}})),r}function M(n,e,t){var r=null;return Array.isArray(n.segments)&&n.segments.forEach((function(n){n.id===e&&(t===n.inputs[0]?r=n.inputs[1]:t===n.inputs[1]&&(r=n.inputs[0]))})),r}function G(n,e){var t=null;return Array.isArray(n.segments)&&n.segments.forEach((function(n){n.id===e&&(t=Object(A.a)({},n))})),t}function T(n,e){var t=n.total[e].value;"object"===typeof t&&(t=Object.assign({},n.total[e].value));var r=n.total[e].unit;return Object.assign({},{value:t,unit:r})}var P,R=function(n,e){return n.segments.map((function(n){return"undefined"!==typeof n[e]?n[e].value:null}))};function B(n,e){var t=null;return n.segments.forEach((function(n,r){n.id===e&&(t=r)})),t}var H={id:null,inputs:[g,x],[g]:{value:10,unit:O},[p]:{value:{min:6,sec:0},unit:j},[x]:{value:{h:1,min:0,sec:0},unit:w},[k]:{value:10,unit:E},folded:!1},U=function(){var n=Object(z.cloneDeep)(H);return n.id=P++,n};var q={[g]:{value:10,unit:O},[p]:{value:{min:6,sec:0},unit:j},[x]:{value:{h:1,min:0,sec:0},unit:w},[k]:{value:10,unit:E}};var Y=Object(f.c)({segments:function(n,e){switch("undefined"===typeof n&&(P=0,n=[U()]),e.type){case S:return n.map((function(n){if(n.id===e.payload.segmentId){var t=Array.from(n.inputs);return t[0]===e.payload.oldField?t[0]=e.payload.newField:t[1]===e.payload.oldField&&(t[1]=e.payload.newField),Object.assign({},n,{inputs:t})}return n}));case V:return n.map((function(n){return n.id===e.payload.segmentId&&"undefined"!==typeof n[e.payload.field]?Object.assign({},n,{[e.payload.field]:Object.assign({},n[e.payload.field],{value:e.payload.value})}):n}));case C:return n.map((function(n){return n.id===e.payload.segmentId?Object.assign({},n,{folded:!n.folded}):n}));case N:return[].concat(Object(b.a)(n),[U()]);case F:return Object(b.a)(n).filter((function(n){return n.id!==e.payload.segmentId}));case _:var t=e.payload,r=t.direction,a=B({segments:n},t.segmentId);if(null===a)return n;if(0===a&&"UP"===r)return n;if(a>=n.length-1&&"DOWN"===r)return n;var o=Object(b.a)(n),i=o.splice(a,1),c="UP"===r?a-1:"DOWN"===r?a+1:a;return o.splice.apply(o,[c,0].concat(Object(b.a)(i))),o;default:return n}},total:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case D:var t=Object.assign({},n);return t[g].value=e.payload.speed,t[p].value=Object.assign({},e.payload.pace),t[x].value=Object.assign({},e.payload.time),t[k].value=e.payload.distance,t;default:return n}}}),W=t(31),Z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.d,J=Object(f.e)(Y,Z(Object(f.a)(W.a))),X=t(3),K=t(10),Q=t.n(K);function $(n,e,t){return{type:V,payload:{segmentId:n,field:e,value:t}}}function nn(n){try{var e=Number(n);if(!Number.isNaN(e)&&e>0)return!0;throw new Error}catch(t){return!1}}function en(n){try{var e=Number(n.min),t=Number(n.sec);if(Number.isInteger(e)&&Number.isInteger(t)&&e>=0&&t>=0&&t<60&&e+t!==0)return!0;throw new Error}catch(r){return!1}}function tn(n){try{var e=Number(n.h),t=Number(n.min),r=Number(n.sec);if(Number.isInteger(e)&&Number.isInteger(t)&&Number.isInteger(r)&&e>=0&&t>=0&&t<60&&r>=0&&r<60&&e+t+r!==0)return!0;throw new Error}catch(a){return!1}}function rn(n){try{var e=Number(n);if(!Number.isNaN(e)&&e>0)return!0;throw new Error}catch(t){return!1}}function an(n){return nn(n)?function(n){try{var e=Math.floor(n),t=Math.round(n%1*60);return 60===t&&(t=0,++e),{min:e,sec:t}}catch(r){return null}}(1/(Number(n)/60)):null}function on(n){return en(n)?60/function(n){return en(n)?Number(n.min)+Number(n.sec)/60:null}(n):null}function cn(n){return nn(n)?parseFloat(n).toFixed(1):"--.-"}function ln(n){return rn(n)?parseFloat(n).toFixed(2):"--.--"}function un(n){return tn(n)?Number(n.h)+Number(n.min)/60+Number(n.sec)/3600:null}function sn(n){try{var e=Math.floor(n),t=n%1*60;t>60-1/60&&(t=0,++e);var r=Math.round(t%1*60);return 60===r&&(r=0,++t),{h:e,min:Math.floor(t),sec:r}}catch(a){return null}}function dn(n,e){if(nn(n)&&tn(e)){var t=un(e);return Math.round(Number(n)*Number(t)*1e3)/1e3}return null}function mn(n,e){return rn(n)&&nn(e)?sn(Number(n)/Number(e)):null}function fn(n,e){return rn(n)&&tn(e)?n/un(e):null}var bn=function(){return function(n,e){var t=e(),r=R(t,k),a=R(t,x).map((function(n){return un(n)})),o=r.reduce((function(n,e){return n+e}),null),i=sn(a.reduce((function(n,e){return n+e}),null)),c=fn(o,i),l=an(c);n({type:D,payload:{speed:c,pace:l,time:i,distance:o}})}},pn=function(){return function(n,e){n({type:N,payload:{}}),n(bn())}},hn=function(n){return function(e,t){e(function(n){return{type:F,payload:{segmentId:n}}}(n)),e(bn())}},jn=t(32),gn=function(n){var e=n.initialValue,t=void 0===e?0:e,r=n.dispatchHandler,o=n.nbDecimals,i=void 0===o?0:o,c=n.maxValue,l=void 0===c?99:c,u=n.padStart,s=void 0===u?0:u,d=n.overflowHandler,m=function(n){return s?String(n).padStart(s,"0"):n},f=Object(a.useState)((function(){return m(t)})),b=Object(jn.a)(f,2),p=b[0],h=b[1],j=function(n){h(n),r instanceof Function&&r(n)};return{displayedValue:p,onChange:function(n){var e=String(n.target.value).replaceAll(",",".").trim(),t=parseFloat(e),r=e.indexOf(".");if(!isNaN(+e)&&!(0===i&&r>=0)&&!(t>l)){if(r>=0){if(0===i)return;if(r<e.length-(i+1))return}j(e)}},onIncrement:function(){var n=1/+"1".concat(Array(i+1).join(0)),e=parseFloat(+p+n).toFixed(2);e<=l?(e=parseFloat(e).toFixed(i),j(m(e))):d instanceof Function&&d("CEIL")},onDecrement:function(){var n=1/+"1".concat(Array(i+1).join(0)),e=+p-n;e>=0?(e=parseFloat(e).toFixed(i),j(m(e))):d instanceof Function&&d("FLOOR")},forceValue:function(n){h(n)}}},vn=t(1),On=function(n){var e=n.segmentId,t=n.value,r=n.dispatchValue,a=gn({initialValue:ln(t),dispatchHandler:function(n){try{var t=Number(n);(t<0||!t)&&(t=0),r(e,t)}catch(a){return}},nbDecimals:2,maxValue:99.99}),o=a.displayedValue,i=a.onChange,c=a.onIncrement,l=a.onDecrement;return Object(vn.jsxs)(te,{children:[Object(vn.jsx)(Wn,{value:o,onChange:i,onIncrement:c,onDecrement:l,width:"3.2em"}),Object(vn.jsx)(ie,{children:E})]})};On.propType={segmentId:Q.a.number.isRequired,value:Q.a.number.isRequired,dispatchValue:Q.a.func.isRequired};var xn,yn,wn,kn=Object(l.b)((function(n,e){return{value:L(n,e.segmentId,k)}}),(function(n){return{dispatchValue:function(e,t){return n(function(n,e){return function(t,r){var a=r(),o=M(a,n,k);if(t($(n,k,e)),o===g||o===p){var i=L(a,n,g),c=mn(e,i);t($(n,x,c))}else if(o===x){var l=L(a,n,x),u=fn(e,l),s=an(u);t($(n,g,u)),t($(n,p,s))}t(bn())}}(e,t))}}}))(On),In={[g]:v,[p]:h,[x]:y,[k]:I},En=Object(u.keyframes)(xn||(xn=Object(r.a)(["\n  0%{\n    transform: translateY(0);\n  } 40% {\n    transform: translateY(3px);\n  } 80% {\n    transform: translateY(0);\n  } \n"]))),Sn=X.a.div(yn||(yn=Object(r.a)(['\n  position: relative;\n\n  &::before {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    border: 1px solid ',";\n    border-radius: 1.5em;\n    background-color: ",';\n    z-index: 0;\n    opacity: 0;\n    transition: opacity 120ms ease-in-out;\n  }\n\n  &::after {\n    content: "\u25be";\n    position: absolute;\n    display: block;\n    color: ',";\n    right: 1.5em;\n    top: 0.25em;\n    font-size: 1.25em;\n    transition: transform 200ms ease-in-out;\n  }\n\n  &:hover {\n    &::before {\n      opacity: 1;\n    }\n    &::after {\n      animation: "," 800ms ease-in-out infinite;\n    }\n  }\n"])),(function(n){return n.theme.color.mediumGrey}),(function(n){return n.theme.color.lightGrey}),(function(n){return n.theme.color.secondary}),En),Vn=X.a.select(wn||(wn=Object(r.a)(["\n  position: relative;\n  display: block;\n  font-size: 1.2em;\n  color: ",";\n  line-height: 1.3;\n  padding: 0.3em 1em 0.2em 1.5em;\n  width: 100%;\n  min-width: 8em;\n  box-sizing: border-box;\n  margin: 0;\n  border: none;\n  border-radius: 1em;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background: none;\n  cursor: pointer;\n  z-index: 1;\n\n  &::-ms-expand {\n    display: none;\n  }\n"])),(function(n){return n.theme.color.body}));var Dn,Cn=Object(l.b)(null,(function(n){return{dispatchField:function(e,t,r){n(function(n,e,t){return{type:S,payload:{segmentId:n,oldField:e,newField:t}}}(e,t,r))}}}))((function(n){var e=n.segmentId,t=n.value,r=n.options,a=n.dispatchField,o=r.map((function(n){return Object(vn.jsx)("option",{value:n,children:In[n]},n)}));return Object(vn.jsx)(Sn,{children:Object(vn.jsx)(Vn,{name:"field_type_".concat(t.toLowerCase()),id:"field_type_".concat(t.toLowerCase()),value:t,onChange:function(n){a(e,t,n.target.value)},children:o})})}));function Nn(){return(Nn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function Fn(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function _n(n,e){var t=n.title,r=n.titleId,o=Fn(n,["title","titleId"]);return a.createElement("svg",Nn({xmlns:"http://www.w3.org/2000/svg",width:13.289,height:7.644,viewBox:"0 0 13.289 7.644",ref:e,"aria-labelledby":r},o),t?a.createElement("title",{id:r},t):null,Dn||(Dn=a.createElement("path",{id:"Trac\\xE9_9","data-name":"Trac\\xE9 9",d:"M-25.6,11.2l5.23-5.23,5.23,5.23",transform:"translate(27.015 -4.972)",fill:"none",stroke:"#c1c1c1",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})))}var zn,An,Ln,Mn,Gn,Tn,Pn=a.forwardRef(_n),Rn=(t.p,Object(u.css)(zn||(zn=Object(r.a)(['\n  content: "";\n  display: block;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n'])))),Bn=X.a.div(An||(An=Object(r.a)(["\n  position: relative;\n  float: left;\n\n  &::before {\n    ","\n    background-color: ",";\n  }\n\n  &::after {\n    ","\n    background-color: ",";\n    opacity: 0;\n    transition: opacity 250ms ease-in-out;\n  }\n\n  &:hover, &:focus {\n    &::after {\n      opacity: 1;\n    }\n  }\n"])),Rn,(function(n){return n.theme.color.mediumGrey}),Rn,(function(n){return n.theme.color.secondary})),Hn=X.a.input(Ln||(Ln=Object(r.a)(["\n  color: ",";\n  font-size: 1.75em;\n  margin-right: 0.15em;\n  text-align: center;\n  border: none;\n  background: none;\n  width: ",";\n"])),(function(n){return n.theme.color.body}),(function(n){return n.width})),Un=X.a.div(Mn||(Mn=Object(r.a)(["\n  float: right;\n"]))),qn=X.a.button(Gn||(Gn=Object(r.a)(["\n  cursor: pointer;\n  display: block;\n  background: none;\n  border: none;\n  padding: 0;\n\n  &:hover {\n    path {\n      stroke: ",";\n    }\n  }\n"])),(function(n){return n.theme.color.secondary})),Yn=Object(X.a)(qn)(Tn||(Tn=Object(r.a)(["\n  transform: rotate(180deg);\n"]))),Wn=function(n){var e=n.value,t=n.onChange,r=n.onIncrement,a=n.onDecrement,o=n.width,i=void 0===o?"2em":o;return Object(vn.jsxs)(Bn,{children:[Object(vn.jsx)(Hn,{type:"text",onChange:t,onKeyDown:function(n){switch(n.key){case"ArrowUp":n.preventDefault(),r();break;case"ArrowDown":n.preventDefault(),a();break;default:return}},value:e,width:i}),Object(vn.jsxs)(Un,{children:[Object(vn.jsx)(qn,{onClick:r,children:Object(vn.jsx)(Pn,{style:{width:"0.7em"}})}),Object(vn.jsx)(Yn,{onClick:a,children:Object(vn.jsx)(Pn,{style:{width:"0.7em"}})})]})]})},Zn=function(n){var e=n.segmentId,t=n.value,r=n.dispatchValue,a=function(n){return function(a){try{var o=Number(a),i=Object(A.a)(Object(A.a)({},t),{},{[n]:o});r(e,i)}catch(c){return}}},o=gn({initialValue:String(t.min),dispatchHandler:a("min"),nbDecimals:0,maxValue:59}),i=gn({initialValue:String(t.sec),dispatchHandler:a("sec"),overflowHandler:function(n){switch(n){case"CEIL":t.min<59&&(r(e,{min:t.min+1,sec:0}),o.forceValue(String(t.min+1)),i.forceValue("00"));break;case"FLOOR":t.min>0&&(r(e,{min:t.min-1,sec:59}),o.forceValue(String(t.min-1)),i.forceValue("59"));break;default:return}},nbDecimals:0,maxValue:59,padStart:2});return Object(vn.jsxs)(te,{children:[Object(vn.jsx)(Wn,{value:o.displayedValue,onChange:o.onChange,onIncrement:o.onIncrement,onDecrement:o.onDecrement,width:"1.2em"}),Object(vn.jsx)(re,{children:":"}),Object(vn.jsx)(Wn,{value:i.displayedValue,onChange:i.onChange,onIncrement:i.onIncrement,onDecrement:i.onDecrement,width:"1.2em"}),Object(vn.jsx)(ie,{children:j})]})};Zn.propType={segmentId:Q.a.number.isRequired,value:Q.a.exact({min:Q.a.number,sec:Q.a.number}).isRequired,dispatchValue:Q.a.func.isRequired};var Jn=Object(l.b)((function(n,e){return{value:L(n,e.segmentId,p)}}),(function(n){return{dispatchValue:function(e,t){return n(function(n,e){return function(t,r){var a=r(),o=M(a,n,p);t($(n,p,e));var i=on(e);if(t($(n,g,i)),o===x){var c=dn(i,L(a,n,x));t($(n,k,c))}else if(o===k){var l=mn(L(a,n,k),i);t($(n,x,l))}t(bn())}}(e,t))}}}))(Zn);var Xn,Kn,Qn,$n,ne,ee=Object(l.b)((function(n,e){return{value:L(n,e.segmentId,g)}}),(function(n){return{dispatchValue:function(e,t){return n(function(n,e){return function(t,r){var a=r(),o=M(a,n,g);t($(n,g,e));var i=an(e);if(t($(n,p,i)),o===x){var c=L(a,n,x),l=dn(e,c);t($(n,k,l))}else if(o===k){var u=mn(L(a,n,k),e);t($(n,x,u))}t(bn())}}(e,t))}}}))((function(n){var e=n.segmentId,t=n.value,r=n.dispatchValue,a=gn({initialValue:cn(t),dispatchHandler:function(n){try{var t=Number(n);r(e,t)}catch(a){return}},nbDecimals:1,maxValue:99.9}),o=a.displayedValue,i=a.onChange,c=a.onIncrement,l=a.onDecrement;return Object(vn.jsxs)(te,{children:[Object(vn.jsx)(Wn,{value:o,onChange:i,onIncrement:c,onDecrement:l,width:"2em"}),Object(vn.jsx)(ie,{children:O})]})})),te=X.a.div(Xn||(Xn=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n"]))),re=X.a.span(Kn||(Kn=Object(r.a)(["\n  display: inline-block;\n  color: ",";\n  font-size: 1.5em;\n  padding: 0 0.25em;\n  transform: translateY(-0.25em);\n"])),(function(n){return n.theme.color.mediumGrey})),ae=function(n){return Object(u.css)(Qn||(Qn=Object(r.a)(["\n  font-size: 0.8em;\n  color: ",";\n"])),n.color.heavyGrey)},oe=Object(u.css)($n||($n=Object(r.a)(['\n  @import url("https://fonts.googleapis.com/css?family=Lato|Spartan:400,700&display=swap");\n\n  body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: "Lato", sans-serif;\n    background-color: #fbfbfb;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  button {\n    font-family: "Spartan", sans-serif;\n  }\n']))),ie=X.a.span(ne||(ne=Object(r.a)(["\n  display: inline-block;\n  padding: 0 0 0.3em 0.75em;\n  ","\n"])),(function(n){var e=n.theme;return ae(e)}));var ce,le,ue,se,de,me,fe,be,pe=Object(l.b)((function(n,e){return{value:L(n,e.segmentId,x)}}),(function(n){return{dispatchValue:function(e,t){return n(function(n,e){return function(t,r){var a=r(),o=M(a,n,x);if(t($(n,x,e)),o===g||o===p){var i=dn(L(a,n,g),e);t($(n,k,i))}else if(o===k){var c=fn(L(a,n,k),e),l=an(c);t($(n,g,c)),t($(n,p,l))}t(bn())}}(e,t))}}}))((function(n){var e=n.segmentId,t=n.value,r=n.dispatchValue,a=function(n){return function(a){try{var o=Number(a),i=Object(A.a)(Object(A.a)({},t),{},{[n]:o});r(e,i)}catch(c){return}}},o=function(n){return function(a){switch(a){case"CEIL":"sec"===n?t.min<59?(r(e,Object(A.a)(Object(A.a)({},t),{},{min:t.min+1,sec:0})),c.forceValue(String(t.min+1).padStart(2,"0")),l.forceValue("00")):59===t.min&&t.h<99&&(r(e,{h:t.h+1,min:0,sec:0}),i.forceValue(String(t.h+1).padStart(2,"0")),c.forceValue("00"),l.forceValue("00")):"min"===n&&t.h<99&&(r(e,Object(A.a)(Object(A.a)({},t),{},{h:t.h+1,min:0})),i.forceValue(String(t.h+1).padStart(2,"0")),c.forceValue("00"));break;case"FLOOR":"sec"===n?t.min>0?(r(e,Object(A.a)(Object(A.a)({},t),{},{min:t.min-1,sec:59})),c.forceValue(String(t.min-1).padStart(2,"0")),l.forceValue("59")):0===t.min&&t.h>0&&(r(e,{h:t.h-1,min:59,sec:59}),i.forceValue(String(t.h-1).padStart(2,"0")),c.forceValue("59"),l.forceValue("59")):"min"===n&&t.h>0&&(r(e,Object(A.a)(Object(A.a)({},t),{},{h:t.h-1,min:59})),i.forceValue(String(t.h-1).padStart(2,"0")),c.forceValue("59"));break;default:return}}},i=gn({initialValue:String(t.h),dispatchHandler:a("h"),nbDecimals:0,maxValue:99,padStart:2}),c=gn({initialValue:String(t.min),dispatchHandler:a("min"),overflowHandler:o("min"),nbDecimals:0,maxValue:59,padStart:2}),l=gn({initialValue:String(t.sec),dispatchHandler:a("sec"),overflowHandler:o("sec"),nbDecimals:0,maxValue:59,padStart:2});return Object(vn.jsxs)(te,{children:[Object(vn.jsx)(Wn,{value:i.displayedValue,onChange:i.onChange,onIncrement:i.onIncrement,onDecrement:i.onDecrement,width:"1.15em"}),Object(vn.jsx)(re,{children:":"}),Object(vn.jsx)(Wn,{value:c.displayedValue,onChange:c.onChange,onIncrement:c.onIncrement,onDecrement:c.onDecrement,width:"1.15em"}),Object(vn.jsx)(re,{children:":"}),Object(vn.jsx)(Wn,{value:l.displayedValue,onChange:l.onChange,onIncrement:l.onIncrement,onDecrement:l.onDecrement,width:"1.15em"})]})})),he=X.a.div(ce||(ce=Object(r.a)(["\n  padding-bottom: 0.3em;\n"]))),je=X.a.div(le||(le=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 0.25em 0;\n"]))),ge=function(n){var e=n.segmentId,t=n.type,r=n.options,a={[g]:ee,[p]:Jn,[k]:kn,[x]:pe};return Object(vn.jsxs)(he,{children:[Object(vn.jsx)(je,{children:Object(vn.jsx)(Cn,{segmentId:e,value:t,options:r})}),Object(vn.jsx)(je,{children:o.a.createElement(a[t],{segmentId:e})})]})},ve=X.a.div(ue||(ue=Object(r.a)(["\n  display: flex;\n  margin: auto 1em auto 0;\n  flex: auto;\n"]))),Oe=X.a.div(se||(se=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n"]))),xe=X.a.span(de||(de=Object(r.a)(["\n  color: ",';\n  text-transform: uppercase;\n  font-size: 0.75em;\n  font-family: "Spartan", sans-serif;\n'])),(function(n){return n.theme.color.secondary})),ye=X.a.div(me||(me=Object(r.a)(["\n  white-space: nowrap;\n"]))),we=X.a.span(fe||(fe=Object(r.a)(["\n  color: ",";\n  font-weight: 700;\n  font-size: 1.2em;\n"])),(function(n){return n.theme.color.lightGrey})),ke=X.a.span(be||(be=Object(r.a)(["\n  ","\n"])),(function(n){var e=n.theme;return ae(e)}));var Ie,Ee,Se,Ve,De,Ce,Ne=Object(l.b)((function(n,e){return{content:"number"===typeof e.segmentId?L(n,e.segmentId,e.type):T(n,e.type).value}}))((function(n){n.segmentId;var e,t=n.type,r=n.content,a=null,o=null,i=null;switch(t){case g:a=cn(r),o=v,i=O;break;case p:a=en(e=r)?"".concat(e.min,":").concat(String(e.sec).padStart(2,"0")):"--:--",o=h,i=j;break;case x:a=function(n){if(tn(n)){var e=String(n.h).padStart(2,"0"),t=String(n.min).padStart(2,"0"),r=String(n.sec).padStart(2,"0");return"".concat(e,":").concat(t,":").concat(r)}return"--:--:--"}(r),o=y,i=w;break;case k:a=ln(r),o=I,i=E;break;default:a=r}return Object(vn.jsx)(ve,{children:Object(vn.jsxs)(Oe,{children:[Object(vn.jsx)(xe,{children:o}),Object(vn.jsxs)(ye,{children:[Object(vn.jsx)(we,{children:a}),!(t===x)&&Object(vn.jsxs)(ke,{children:[" ",i]})]})]})})})),Fe=X.a.button(Ie||(Ie=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.8em;\n  height: 1.8em;\n  border-radius: 0.9em;\n  border: none;\n  background-color: ",";\n  box-shadow: 0 0 8px 1px ",";\n  padding: 0;\n  margin: 0 0 0.5em 0;\n  opacity: 0;\n  transform: scale(0.25);\n  transition: opacity 120ms ease-in-out, transform 120ms ease-in-out;\n\n  &:not([disabled]) {\n    cursor: pointer;\n  }\n\n  &:hover:not([disabled]),\n  &:focus {\n    background-color: ",";\n    transform: scale(1);\n    opacity: 1;\n\n    & line {\n      stroke: ",";\n    }\n\n    & path {\n      fill: ",";\n    }\n  }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.mediumGrey}),(function(n){var e=n.theme,t=n.hoverColor;return e.color[t]}),(function(n){var e=n.theme,t=n.hoverStrokeColor;return e.color[t]}),(function(n){var e=n.theme,t=n.hoverStrokeColor;return e.color[t]})),_e=X.a.div(Ee||(Ee=Object(r.a)(["\n  position: relative;\n"]))),ze=function(n){return Object(u.css)(Se||(Se=Object(r.a)(["\n  font-weight: bold;\n  font-size: 0.9rem;\n  letter-spacing: 0.05em;\n  padding: 0.15em 0.75em 0em 0.75em; /* 0.55em 1.25em 0.25em 1.25em */\n  text-transform: uppercase;\n  color: ",";\n  line-height: 1.15;\n"])),n.color.white)},Ae=X.a.h3(Ve||(Ve=Object(r.a)(["\n  position: absolute;\n  max-width: 100%;\n  margin: 0;\n  top: 0;\n  left: 0;\n  background-color: ",";\n  border-radius: 12px;\n  padding: 0.25em 0.4em 0.15em 0.4em;\n  z-index: 10;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n"])),(function(n){return n.theme.color.primary})),Le=X.a.input(De||(De=Object(r.a)(["\n  position: absolute;\n  top: 0.4em;\n  left: 0.5em;\n  width: 100%;\n  ","\n  background: none;\n  border: none;\n  margin: 0;\n  overflow: hidden;\n"])),(function(n){var e=n.theme;return ze(e)})),Me=X.a.span(Ce||(Ce=Object(r.a)(["\n  ","\n  display: inline-block;\n  white-space: pre;\n  visibility: hidden;\n  max-width: 100%;\n"])),(function(n){var e=n.theme;return ze(e)}));var Ge,Te=Object(l.b)((function(n,e){return{name:G(n,e.segmentId).name,position:B(n,e.segmentId)+1}}))((function(n){n.segmentId;var e=n.name,t=n.position,r=null!==e&&void 0!==e?e:"\xc9tape ".concat(t);return Object(vn.jsx)(_e,{children:Object(vn.jsxs)(Ae,{children:[Object(vn.jsx)(Le,{type:"text",value:r,readonly:!0,onChange:function(){console.log("Changed")}}),Object(vn.jsx)(Me,{"aria-hidden":!0,children:r})]})})}));function Pe(){return(Pe=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function Re(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function Be(n,e){var t=n.title,r=n.titleId,o=Re(n,["title","titleId"]);return a.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",width:19.175,height:22.04,viewBox:"0 0 19.175 22.04",ref:e,"aria-labelledby":r},o),t?a.createElement("title",{id:r},t):null,Ge||(Ge=a.createElement("g",{id:"fold_icon","data-name":"fold_icon",transform:"translate(-1516.545 -288.611)"},a.createElement("g",{id:"inside",transform:"translate(1535.72 301.063) rotate(135)"},a.createElement("path",{id:"arrow_edge","data-name":"arrow_edge",d:"M9.249,10.206H.957A.957.957,0,0,1,0,9.249V.957a.957.957,0,0,1,1.914,0V8.292H9.249a.957.957,0,1,1,0,1.914Zm0,0",transform:"translate(0 3.353)",fill:"#f7fafa"}),a.createElement("path",{id:"arrow_core","data-name":"arrow_core",d:"M.957,13.559A.957.957,0,0,1,.28,11.924L11.925.28a.957.957,0,0,1,1.353,1.354L1.634,13.278A.954.954,0,0,1,.957,13.559Zm0,0",transform:"translate(0 0)",fill:"#f7fafa"})),a.createElement("line",{id:"line","data-name":"line",x2:13.352,transform:"translate(1519.687 289.611)",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeWidth:2}))))}var He,Ue=a.forwardRef(Be);t.p;function qe(){return(qe=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function Ye(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function We(n,e){var t=n.title,r=n.titleId,o=Ye(n,["title","titleId"]);return a.createElement("svg",qe({xmlns:"http://www.w3.org/2000/svg",width:19.69,height:19.69,viewBox:"0 0 19.69 19.69",ref:e,"aria-labelledby":r},o),t?a.createElement("title",{id:r},t):null,He||(He=a.createElement("g",{id:"Groupe_57","data-name":"Groupe 57",transform:"translate(-1505.655 -98.655)"},a.createElement("line",{id:"Ligne_5","data-name":"Ligne 5",y1:14.033,x2:14.033,transform:"translate(1508.483 101.483)",fill:"none",stroke:"#341010",strokeLinecap:"round",strokeWidth:3}),a.createElement("line",{id:"Ligne_6","data-name":"Ligne 6",x2:14.033,y2:14.033,transform:"translate(1508.483 101.483)",fill:"none",stroke:"#341010",strokeLinecap:"round",strokeWidth:3}))))}var Ze,Je=a.forwardRef(We);t.p;function Xe(){return(Xe=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function Ke(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function Qe(n,e){var t=n.title,r=n.titleId,o=Ke(n,["title","titleId"]);return a.createElement("svg",Xe({xmlns:"http://www.w3.org/2000/svg",width:19.176,height:19.176,viewBox:"0 0 19.176 19.176",ref:e,"aria-labelledby":r},o),t?a.createElement("title",{id:r},t):null,Ze||(Ze=a.createElement("g",{id:"fold_icon",transform:"translate(-1516.545 -291.474)"},a.createElement("g",{id:"inside",transform:"translate(1535.72 301.063) rotate(135)"},a.createElement("path",{id:"arrow_edge",d:"M9.249,10.206H.957A.957.957,0,0,1,0,9.249V.957a.957.957,0,1,1,1.914,0V8.292H9.249a.957.957,0,1,1,0,1.914Zm0,0",transform:"translate(0 3.353)",fill:"#102334"}),a.createElement("path",{id:"arrow_core",d:"M.957,13.559A.957.957,0,0,1,.28,11.924L11.925.28a.957.957,0,0,1,1.353,1.354L1.634,13.278a.954.954,0,0,1-.677.281Zm0,0",fill:"#102334"})))))}var $e,nt,et,tt,rt,at,ot,it,ct,lt,ut,st,dt,mt,ft=a.forwardRef(Qe),bt=(t.p,X.a.div($e||($e=Object(r.a)(["\n  position: relative;\n  width: 100%;\n  max-width: 50em;\n  min-width: 21em;\n  margin: 2em auto;\n  z-index: 0;\n\n  &:hover {\n    & .actionButton {\n      transform: scale(1);\n      opacity: 1;\n\n      &[disabled] {\n        opacity: 0.3;\n      }\n    }\n  }\n"])))),pt=X.a.div(nt||(nt=Object(r.a)(["\n  position: relative;\n  margin: 1em 0 3em 0;\n  background-color: ",";\n  border-radius: 15px 15px 0 0;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);\n  @media (min-width: ","px) {\n    border-radius: 15px;\n    margin: 1em 2em 3em 2em;\n  }\n"])),(function(n){return n.theme.color.lightGrey}),(function(n){return n.theme.bp.md})),ht=X.a.h4(et||(et=Object(r.a)(["\n  position: absolute;\n  color: ",";\n  text-transform: uppercase;\n  transform: rotate(-90deg);\n  top: 2em;\n  font-size: 0.8em;\n  @media (max-width: ","px) {\n    display: none;\n  }\n"])),(function(n){return n.theme.color.primary}),(function(n){return n.theme.bp.md})),jt=X.a.div(tt||(tt=Object(r.a)(["\n  box-sizing: border-box;\n  position: absolute;\n  display: flex;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 3.5em;\n  background-color: ",";\n  border-radius: 15px;\n  z-index: -10;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);\n  padding-top: 0.5em;\n\n  transition: transform 150ms ease-in-out;\n  transform: translateY(","em);\n  overflow: hidden;\n\n  @media screen and (min-width: ","px) {\n    left: 5.5em;\n  }\n  @media screen and (max-width: ","px) {\n    font-size: 80%;\n    height: 3em;\n    bottom: 0.75em;\n    border-radius: 0 0 15px 15px;\n    padding-top: 0.25em;\n  }\n"])),(function(n){return n.theme.color.darkGrey}),(function(n){return n.folded?-2.5:0}),(function(n){return n.theme.bp.md}),(function(n){return n.theme.bp.md})),gt=X.a.div(rt||(rt=Object(r.a)(["\n  box-sizing: border-box;\n  margin: auto 4em auto 1em;\n  display: flex;\n  flex: auto;\n"]))),vt=X.a.button(at||(at=Object(r.a)(["\n  position: absolute;\n  right: 6px;\n  bottom: 0.1em;\n  cursor: pointer;\n\n  transition: transform 150ms ease-in-out;\n  transform: translateY(","em);\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n    line {\n      stroke: ",";\n    }\n  }\n\n  @media screen and (max-width: ","px) {\n    bottom: 0.8em;\n    transform: translateY(","em);\n\n    path {\n      fill: ",";\n    }\n    line {\n      stroke: ",";\n    }\n  }\n\n  border: none;\n  background-color: unset;\n"])),(function(n){return n.folded?-2.7:0}),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.bp.md}),(function(n){return n.folded?-2.4:0}),(function(n){var e=n.theme;return n.folded?e.color.body:""}),(function(n){var e=n.theme;return n.folded?e.color.body:""})),Ot=X.a.div(ot||(ot=Object(r.a)(["\n  transition: transform 150ms ease-in-out 150ms;\n  transform: rotate(","deg);\n\n  @media screen and (max-width: ","px) {\n    transform: rotate(","deg);\n  }\n"])),(function(n){return n.folded?-180:0}),(function(n){return n.theme.bp.md}),(function(n){return n.folded?-180:0})),xt={width:"0.95em"},yt=X.a.div(it||(it=Object(r.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n  padding: 1em 0 0.5em 0;\n"]))),wt=X.a.div(ct||(ct=Object(r.a)(["\n  box-sizing: border-box;\n  background-color: ",";\n  box-shadow: 0 1px 8px 0px ",";\n  border-radius: 15px;\n  width: 13.75em;\n  height: 100%;\n  padding: 0.1em 0.75em;\n  margin: 6px 12px;\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.mediumGrey})),kt=X.a.div(lt||(lt=Object(r.a)(["\n  position: absolute;\n  top: 0;\n  right: -0.9em;\n  @media screen and (min-width: ","px) {\n    right: 1.1em;\n  }\n"])),(function(n){return n.theme.bp.md})),It=X.a.svg(ut||(ut=Object(r.a)(["\n  width: 0.8em;\n"]))),Et=Object(X.a)(It)(st||(st=Object(r.a)(["\n  & line {\n    stroke: ",";\n  }\n"])),(function(n){return n.theme.color.error})).withComponent(Je),St=Object(X.a)(It)(dt||(dt=Object(r.a)([""]))).withComponent(ft),Vt=Object(X.a)(St)(mt||(mt=Object(r.a)(["\n  transform: rotate(-180deg);\n"])));var Dt,Ct,Nt,Ft,_t,zt,At,Lt,Mt,Gt,Tt=Object(l.b)((function(n,e){var t=G(n,e.id);return{inputs:t.inputs,folded:t.folded,canMoveUp:B(n,e.id)>0,canMoveDown:B(n,e.id)<n.segments.length-1}}),(function(n,e){return{toggleFold:function(){return n((t=e.id,{type:C,payload:{segmentId:t}}));var t},remove:function(){return n(hn(e.id))},move:function(t){return n(function(n,e){return{type:_,payload:{segmentId:n,direction:e}}}(e.id,t))}}}))((function(n){var e=n.id,t=n.inputs,r=n.folded,o=void 0!==r&&r,i=n.toggleFold,c=n.remove,l=n.move,u=n.canMoveUp,s=n.canMoveDown,d=Object(a.useRef)(),m=Object(a.useRef)(),f=function(n){var e=[g,p,k,x];return e.filter((function(e){var r=n===t[0]?t[1]:t[0];return!(e===r||r===p&&e===g||e===p&&r===g)}))},b=t.map((function(n){return Object(vn.jsx)(wt,{children:Object(vn.jsx)(ge,{segmentId:e,type:n,options:f(n)})},n)}));return Object(vn.jsxs)(bt,{children:[Object(vn.jsx)(Te,{segmentId:e}),Object(vn.jsxs)(pt,{children:[Object(vn.jsx)(ht,{children:"Cible"}),Object(vn.jsx)(yt,{children:b})]}),Object(vn.jsx)(jt,{folded:o,children:Object(vn.jsxs)(gt,{children:[Object(vn.jsx)(Ne,{segmentId:e,type:g},g),Object(vn.jsx)(Ne,{segmentId:e,type:p},p),Object(vn.jsx)(Ne,{segmentId:e,type:k},k),Object(vn.jsx)(Ne,{segmentId:e,type:x},x)]})}),Object(vn.jsxs)(kt,{children:[Object(vn.jsx)(Fe,{id:"deleteButton",className:"actionButton",hoverColor:"error",hoverStrokeColor:"white",onClick:c,"aria-label":"Supprimer le segment",children:Object(vn.jsx)(Et,{})}),Object(vn.jsx)(Fe,{ref:d,id:"moveUpButton",className:"actionButton",hoverColor:"secondary",hoverStrokeColor:"body",onClick:function(){d.current.blur(),l("UP")},disabled:!u,"aria-label":"Monter le segment",children:Object(vn.jsx)(St,{})}),Object(vn.jsx)(Fe,{ref:m,id:"moveDownButton",className:"actionButton",hoverColor:"secondary",hoverStrokeColor:"body",onClick:function(){m.current.blur(),l("DOWN")},disabled:!s,"aria-label":"Descendre le segment",children:Object(vn.jsx)(Vt,{})})]}),Object(vn.jsx)(vt,{folded:o,onClick:i,"aria-label":"Masquer le r\xe9sum\xe9 du segment",children:Object(vn.jsx)(Ot,{folded:o,children:Object(vn.jsx)(Ue,{style:xt})})})]})})),Pt=X.a.main(Dt||(Dt=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 2em;\n  @media (min-width: ","px) {\n    flex-direction: row;\n  }\n  margin-bottom: 8em;\n"])),(function(n){return n.theme.bp.md})),Rt=X.a.div(Ct||(Ct=Object(r.a)(["\n  display: flex;\n  position: relative;\n  min-height: 5em;\n  @media (min-width: ","px) {\n    height: auto;\n    width: 8em;\n    margin-top: 3em;\n  }\n"])),(function(n){return n.theme.bp.md})),Bt=X.a.div(Nt||(Nt=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  @media (min-width: ","px) {\n    height: auto;\n    margin-top: 3em;\n  }\n"])),(function(n){return n.theme.bp.md})),Ht=X.a.h1(Ft||(Ft=Object(r.a)(["\n  color: ",";\n  font-weight: 400;\n  text-transform: uppercase;\n  font-size: 1.25em;\n  margin: auto;\n  opacity: 0.6;\n  @media (min-width: ","px) {\n    position: absolute;\n    text-align: right;\n    transform: rotate(-90deg) translate(-100%, 50%);\n    transform-origin: top left;\n    font-size: 1.5em;\n    letter-spacing: 0.2em;\n    width: 500%;\n    margin: 0;\n  }\n"])),(function(n){return n.theme.color.body}),(function(n){return n.theme.bp.md})),Ut=X.a.h2(_t||(_t=Object(r.a)(["\n  color: ",";\n  font-weight: bold;\n  font-size: 1.5em;\n  margin: 0;\n  text-align: center;\n"])),(function(n){return n.theme.color.body})),qt=X.a.div(zt||(zt=Object(r.a)(["\n  margin: 1em 0;\n"]))),Yt=X.a.p(At||(At=Object(r.a)(["\n  text-align: center;\n  opacity: 0.6;\n  color: ",";\n  margin: 0.5rem 0 0.5rem 0;\n"])),(function(n){return n.theme.color.body})),Wt=X.a.div(Lt||(Lt=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 4em 0;\n"]))),Zt=X.a.div(Mt||(Mt=Object(r.a)(["\n  text-align: center;\n  margin: 4em 0;\n"]))),Jt=X.a.button(Gt||(Gt=Object(r.a)(["\n  position: relative;\n  border-radius: 1.25em;\n  height: 2.5em;\n  background-color: ",";\n  border: none;\n  color: ",';\n  text-transform: uppercase;\n  font-size: 0.8em;\n  padding: 0 1.5em 0 3em;\n  cursor: pointer;\n\n  &::before {\n    position: absolute;\n    left: 5px;\n    top: 4px;\n    width: calc(1.65em - 2 * 4px);\n    height: calc(1.65em - 2 * 4px);\n    content: "+";\n    display: block;\n    background-color: ',";\n    border-radius: calc((2.5em - 2 * 3px) / 2);\n    color: ",";\n    font-size: 1.5em;\n    transition: transform 250ms ease-out;\n  }\n\n  &:hover {\n    color: ",";\n    box-shadow: 0px 0px 6px 0.5px ",";\n\n    &::before {\n      transform: rotate(90deg);\n    }\n  }\n\n  &:active {\n    transform: scale(0.98);\n  }\n"])),(function(n){return n.theme.color.body}),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.color.body}),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.color.secondary}));var Xt,Kt,Qt,$t,nr,er=Object(l.b)((function(n){return{segmentIds:n.segments.map((function(n){return n.id}))}}),(function(n){return{addSegment:function(){return n(pn())}}}))((function(n){var e=n.segmentIds,t=n.addSegment,r=e.map((function(n){return Object(vn.jsx)(Tt,{id:n},n)}));return Object(vn.jsxs)(vn.Fragment,{children:[Object(vn.jsxs)(Pt,{children:[Object(vn.jsx)(Rt,{children:Object(vn.jsx)(Ht,{children:"Votre entra\xeenement"})}),Object(vn.jsxs)(Bt,{children:[Object(vn.jsx)(Ut,{children:"D\xe9finissez votre entra\xeenement"}),Object(vn.jsxs)(qt,{children:[Object(vn.jsx)(Yt,{children:"Quel est votre objectif aujourd\u2019hui ?"}),Object(vn.jsx)(Yt,{children:"L'outil calcule pour vous les statistiques pr\xe9visionnelles de votre entra\xeenement pour vous aider pr\xe9parer votre itin\xe9raire."})]}),Object(vn.jsx)(Wt,{children:r}),Object(vn.jsx)(Zt,{children:Object(vn.jsx)(Jt,{onClick:t,children:"Ajouter une \xe9tape"})})]})]}),Object(vn.jsx)(ir,{})]})})),tr=X.a.div(Xt||(Xt=Object(r.a)(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 8em;\n  background-color: ",";\n  padding: 0;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);\n"])),(function(n){return n.theme.color.darkGrey})),rr=X.a.div(Kt||(Kt=Object(r.a)(["\n  display: flex;\n  @media (min-width: ","px) {\n    justify-content: center;\n  }\n  overflow-x: auto;\n  height: 100%;\n"])),(function(n){return n.theme.bp.md})),ar=X.a.h3(Qt||(Qt=Object(r.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0.65em 1em 0.35em 2em;\n  @media (min-width: ","px) {\n    padding: 0.65em 1em 0.35em 4em;\n  }\n  background-color: ",";\n  color: ",";\n  transform: translateY(-50%);\n  text-transform: uppercase;\n  border-radius: 0 12px 12px 0;\n  letter-spacing: 0.1em;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);\n"])),(function(n){return n.theme.bp.md}),(function(n){return n.theme.color.primary}),(function(n){return n.theme.color.white})),or=X.a.div($t||($t=Object(r.a)(["\n  box-sizing: border-box;\n  margin: auto 4em auto 2em;\n  max-width: 50em;\n  @media (min-width: ","px) {\n    margin: auto 4em auto 2em;\n  }\n  display: flex;\n  flex: auto;\n  font-size: 133%;\n"])),(function(n){return n.theme.bp.md})),ir=function(){return Object(vn.jsxs)(tr,{children:[Object(vn.jsx)(ar,{children:"Totaux"}),Object(vn.jsx)(rr,{children:Object(vn.jsxs)(or,{children:[Object(vn.jsx)(Ne,{type:g}),Object(vn.jsx)(Ne,{type:p}),Object(vn.jsx)(Ne,{type:k}),Object(vn.jsx)(Ne,{type:x})]})})]})},cr=document.getElementById("root");c.a.render(Object(vn.jsxs)(l.a,{store:J,children:[Object(vn.jsx)(u.Global,{styles:Object(u.css)(nr||(nr=Object(r.a)(["","",""])),oe,m.a)}),Object(vn.jsx)(s.d,{theme:{color:{body:"#102234",primary:"#A60303",secondary:"#61DAFB",white:"#FFFFFF",lightGrey:"#FAFAFA",mediumGrey:"#D5D5D5",heavyGrey:"#767676",darkGrey:"#102334",background:"#EBEBEB",error:"#EA0000"},bp:{xs:396,sm:576,md:768,lg:992,xl:1200}},children:Object(vn.jsx)(er,{})})]}),cr)}},[[43,1,2]]]);
//# sourceMappingURL=main.75fb3af1.chunk.js.map