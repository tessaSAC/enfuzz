(function(e){function t(t){for(var r,i,l=t[0],u=t[1],c=t[2],p=0,d=[];p<l.length;p++)i=l[p],o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;a.push([2,0]),n()})({"+wtH":function(e,t,n){"use strict";var r=n("IJI7"),o=n.n(r);o.a},2:function(e,t,n){e.exports=n("Vtdi")},"6Zmr":function(e,t,n){e.exports=n.p+"media/meowmix.cd1605f5.ogg"},IJI7:function(e,t,n){},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var r=n("Kw5r"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticClass:"App",attrs:{gutter:20}},[r("el-col",{attrs:{span:8,offset:8}},[r("h1",[e._v("enfuzz")]),r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px","label-position":"top"}},[r("el-form-item",{attrs:{label:"input"}},[r("el-input",{attrs:{type:"textarea",placeholder:e.placeholder},nativeOn:{keyup:function(t){return("button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter"))&&t.ctrlKey?e.translate(t):null}},model:{value:e.form.input,callback:function(t){e.$set(e.form,"input",t)},expression:"form.input"}})],1),r("p",{staticClass:"tip"},[e._v("ctrl-click to speed-"+e._s(e.directionLabel))]),r("el-form-item",{attrs:{label:e.directionLabel}},[r("el-switch",{on:{change:e.clearOutput},model:{value:e.form.direction,callback:function(t){e.$set(e.form,"direction",t)},expression:"form.direction"}})],1),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.form.direction,expression:"form.direction"}],attrs:{label:"encoding"}},[r("el-select",{attrs:{placeholder:"please select an encoding"},on:{change:e.translate},model:{value:e.form.encodingSelected,callback:function(t){e.$set(e.form,"encodingSelected",t)},expression:"form.encodingSelected"}},e._l(e.typefaces,function(e,t){return r("el-option",{key:t,attrs:{label:t,value:t}})}))],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.translate}},[e._v(e._s(e.directionLabel))])],1)],1),r("el-form",{directives:[{name:"show",rawName:"v-show",value:e.form.direction,expression:"form.direction"}],attrs:{"label-position":"top"}},[r("el-form-item",{attrs:{label:e.whichOutputLabel}},[r("el-switch",{model:{value:e.whichOutput,callback:function(t){e.whichOutput=t},expression:"whichOutput"}})],1)],1),e.whichOutput?r("p",{class:e.form.encodingSelected,domProps:{innerHTML:e._s(e.output)}}):r("p",{staticClass:"pleb"},[e._v(e._s(e.output))]),r("audio",{attrs:{autoplay:"",loop:""}},[r("source",{attrs:{src:n("6Zmr"),type:"audio/ogg"}}),e._v("\n    Your browser does not support the "),r("code",[e._v("audio")]),e._v(" element.\n  ")])],1)],1)},a=[],i=(n("pIFo"),n("Z2Ku"),n("L9s1"),n("rGqo"),n("KKXr"),{data:function(){return{maxRandom:50,typefaces:{pleb:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(){}:",nyan:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"},placeholder:"Elegantly unscramble this input using the space provided. Then write the scrambler that made it. The answer is an object with global scope that can scramble and unscramble any text any number of times.",form:{input:"",encodingSelected:"nyan",direction:!0},output:"",whichOutput:!0}},computed:{alphabet:function(){return this.typefaces[this.form.encodingSelected]},directionLabel:function(){return this.form.direction?"encode":"decode"},whichOutputLabel:function(){return this.whichOutput?"html":"plaintext"}},methods:{clearOutput:function(){this.output=""},generateRandomNumber:function(e){return Math.ceil(Math.random()*e)},generateRandomString:function(){var e=[],t=this.generateRandomNumber(this.maxRandom);while(t)e.push(this.alphabet[this.generateRandomNumber(this.alphabet.length)-1]),--t;return e},hide:function(e){return"<span hidden>".concat(e,"</span>")},span:function(e){return"<span>".concat(e,"</span>")},translate:function(){var e=this,t=[],n=[];if(this.form.direction){var r=this.form.input.split("").map(this.hide);r.forEach(function(n){t.push(n),e.generateRandomString().forEach(function(n){return t.push(e.span(n))})});for(var o=1,a=0;a<t.length;++a)n.push(t[a]),t[a].includes("hidden")||(100===o?(n.push("<br>"),o=1):++o);this.output=n.join("")}else{var i=this.form.input;this.output=i.replace(/<span>.<\/span>/g,"").replace(/<br>/g,"").replace(/<span hidden>/g,"").replace(/<\/span>/g,"")}}}}),l=i,u=(n("+wtH"),n("KHd+")),c=Object(u["a"])(l,o,a,!1,null,"9d867a00",null),s=c.exports,p=n("XJYT"),d=n.n(p),f=(n("D66Q"),n("stYL")),h=n.n(f);r["default"].use(d.a,{locale:h.a}),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=app.8a807b32.js.map
