(self.webpackChunksuttisak_personal_site=self.webpackChunksuttisak_personal_site||[]).push([[55],{9662:function(t,e,n){var r=n(614),o=n(6330),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not a function")}},9670:function(t,e,n){var r=n(111),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),o=n(1400),i=n(6244),c=function(t){return function(e,n,c){var u,a=r(e),s=i(a),f=o(c,s);if(t&&n!=n){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},4326:function(t,e,n){var r=n(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,e,n){var r=n(1694),o=n(614),i=n(4326),c=n(5112)("toStringTag"),u=Object,a="Arguments"==i(function(){return arguments}());t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=u(t),c))?n:a?i(e):"Object"==(r=i(e))&&o(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),o=n(3887),i=n(1236),c=n(3070);t.exports=function(t,e,n){for(var u=o(e),a=c.f,s=i.f,f=0;f<u.length;f++){var l=u[f];r(t,l)||n&&r(n,l)||a(t,l,s(e,l))}}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),o=n(8880),i=n(6339),c=n(3072);t.exports=function(t,e,n,u){u||(u={});var a=u.enumerable,s=void 0!==u.name?u.name:e;return r(n)&&i(n,s,u),u.global?a?t[e]=n:c(e,n):(u.unsafe?t[e]&&(a=!0):delete t[e],a?t[e]=n:o(t,e,n)),t}},3072:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,o,i=n(7854),c=n(8113),u=i.process,a=i.Deno,s=u&&u.versions||a&&a.version,f=s&&s.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),c=n(8052),u=n(3072),a=n(9920),s=n(4705);t.exports=function(t,e){var n,f,l,p,v,h=t.target,d=t.global,m=t.stat;if(n=d?r:m?r[h]||u(h,{}):(r[h]||{}).prototype)for(f in e){if(p=e[f],l=t.dontCallGetSet?(v=o(n,f))&&v.value:n[f],!s(d?f:h+(m?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,f,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,n){var r=n(9781),o=n(2597),i=Function.prototype,c=r&&Object.getOwnPropertyDescriptor,u=o(i,"name"),a=u&&"something"===function(){}.name,s=u&&(!r||r&&c(i,"name").configurable);t.exports={EXISTS:u,PROPER:a,CONFIGURABLE:s}},1702:function(t,e,n){var r=n(4374),o=Function.prototype,i=o.bind,c=o.call,u=r&&i.bind(c,c);t.exports=r?function(t){return t&&u(t)}:function(t){return t&&function(){return c.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),o=n(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},647:function(t,e,n){var r=n(1702),o=n(7908),i=Math.floor,c=r("".charAt),u=r("".replace),a=r("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,f=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,r,l,p){var v=n+t.length,h=r.length,d=f;return void 0!==l&&(l=o(l),d=s),u(p,d,(function(o,u){var s;switch(c(u,0)){case"$":return"$";case"&":return t;case"`":return a(e,0,n);case"'":return a(e,v);case"<":s=l[a(u,1,-1)];break;default:var f=+u;if(0===f)return o;if(f>h){var p=i(f/10);return 0===p?o:p<=h?void 0===r[p-1]?c(u,1):r[p-1]+c(u,1):o}s=r[f-1]}return void 0===s?"":s}))}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),o=n(7293),i=n(4326),c=Object,u=r("".split);t.exports=o((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?u(t,""):c(t)}:c},2788:function(t,e,n){var r=n(1702),o=n(614),i=n(5465),c=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return c(t)}),t.exports=i.inspectSource},9909:function(t,e,n){var r,o,i,c=n(8536),u=n(7854),a=n(1702),s=n(111),f=n(8880),l=n(2597),p=n(5465),v=n(6200),h=n(3501),d="Object already initialized",m=u.TypeError,g=u.WeakMap;if(c||p.state){var y=p.state||(p.state=new g),b=a(y.get),x=a(y.has),w=a(y.set);r=function(t,e){if(x(y,t))throw new m(d);return e.facade=t,w(y,t,e),e},o=function(t){return b(y,t)||{}},i=function(t){return x(y,t)}}else{var E=v("state");h[E]=!0,r=function(t,e){if(l(t,E))throw new m(d);return e.facade=t,f(t,E,e),e},o=function(t){return l(t,E)?t[E]:{}},i=function(t){return l(t,E)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!s(e)||(n=o(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}}}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,c=function(t,e){var n=a[u(t)];return n==f||n!=s&&(o(e)?r(e):!!e)},u=c.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=c.data={},s=c.NATIVE="N",f=c.POLYFILL="P";t.exports=c},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},7850:function(t,e,n){var r=n(111),o=n(4326),i=n(5112)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},2190:function(t,e,n){var r=n(5005),o=n(614),i=n(7976),c=n(3307),u=Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&i(e.prototype,u(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(7293),o=n(614),i=n(2597),c=n(9781),u=n(6530).CONFIGURABLE,a=n(2788),s=n(9909),f=s.enforce,l=s.get,p=Object.defineProperty,v=c&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),h=String(String).split("String"),d=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!i(t,"name")||u&&t.name!==e)&&p(t,"name",{value:e,configurable:!0}),v&&n&&i(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?c&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=f(t);return i(r,"source")||(r.source=h.join("string"==typeof e?e:"")),t};Function.prototype.toString=d((function(){return o(this)&&l(this).source||a(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},133:function(t,e,n){var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),o=n(614),i=n(2788),c=r.WeakMap;t.exports=o(c)&&/native code/.test(i(c))},3070:function(t,e,n){var r=n(9781),o=n(4664),i=n(3353),c=n(9670),u=n(4948),a=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",v="writable";e.f=r?i?function(t,e,n){if(c(t),e=u(e),c(n),"function"==typeof t&&"prototype"===e&&"value"in n&&v in n&&!n.writable){var r=f(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:p in n?n.configurable:r.configurable,enumerable:l in n?n.enumerable:r.enumerable,writable:!1})}return s(t,e,n)}:s:function(t,e,n){if(c(t),e=u(e),c(n),o)try{return s(t,e,n)}catch(r){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(6916),i=n(5296),c=n(9114),u=n(5656),a=n(4948),s=n(2597),f=n(4664),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=u(t),e=a(e),f)try{return l(t,e)}catch(n){}if(s(t,e))return c(!o(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),o=n(2597),i=n(5656),c=n(1318).indexOf,u=n(3501),a=r([].push);t.exports=function(t,e){var n,r=i(t),s=0,f=[];for(n in r)!o(u,n)&&o(r,n)&&a(f,n);for(;e.length>s;)o(r,n=e[s++])&&(~c(f,n)||a(f,n));return f}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var r=n(6916),o=n(614),i=n(111),c=TypeError;t.exports=function(t,e){var n,u;if("string"===e&&o(n=t.toString)&&!i(u=r(n,t)))return u;if(o(n=t.valueOf)&&!i(u=r(n,t)))return u;if("string"!==e&&o(n=t.toString)&&!i(u=r(n,t)))return u;throw c("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(1702),i=n(8006),c=n(5181),u=n(9670),a=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(u(t)),n=c.f;return n?a(e,n(t)):e}},7066:function(t,e,n){"use strict";var r=n(9670);t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},4706:function(t,e,n){var r=n(6916),o=n(2597),i=n(7976),c=n(7066),u=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in u||o(t,"flags")||!i(u,t)?e:r(c,t)}},4488:function(t){var e=TypeError;t.exports=function(t){if(null==t)throw e("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3072),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.8",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.8/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,e,n){var r=n(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!=e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),o=Object;t.exports=function(t){return o(r(t))}},7593:function(t,e,n){var r=n(6916),o=n(111),i=n(2190),c=n(8173),u=n(2140),a=n(5112),s=TypeError,f=a("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var n,a=c(t,f);if(a){if(void 0===e&&(e="default"),n=r(a,t,e),!o(n)||i(n))return n;throw s("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},1694:function(t,e,n){var r={};r[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},1340:function(t,e,n){var r=n(648),o=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,i=Math.random(),c=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+c(++o+i,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),o=n(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(2597),c=n(9711),u=n(133),a=n(3307),s=o("wks"),f=r.Symbol,l=f&&f.for,p=a?f:f&&f.withoutSetter||c;t.exports=function(t){if(!i(s,t)||!u&&"string"!=typeof s[t]){var e="Symbol."+t;u&&i(f,t)?s[t]=f[t]:s[t]=a&&l?l(e):p(e)}return s[t]}},8757:function(t,e,n){"use strict";var r=n(2109),o=n(6916),i=n(1702),c=n(4488),u=n(614),a=n(7850),s=n(1340),f=n(8173),l=n(4706),p=n(647),v=n(5112),h=n(1913),d=v("replace"),m=TypeError,g=i("".indexOf),y=i("".replace),b=i("".slice),x=Math.max,w=function(t,e,n){return n>t.length?-1:""===e?n:g(t,e,n)};r({target:"String",proto:!0},{replaceAll:function(t,e){var n,r,i,v,E,S,O,j,k,C=c(this),P=0,T=0,M="";if(null!=t){if((n=a(t))&&(r=s(c(l(t))),!~g(r,"g")))throw m("`.replaceAll` does not allow non-global regexes");if(i=f(t,d))return o(i,t,C,e);if(h&&n)return y(s(C),t,e)}for(v=s(C),E=s(t),(S=u(e))||(e=s(e)),O=E.length,j=x(1,O),P=w(v,E,0);-1!==P;)k=S?s(e(E,P,v)):p(E,v,P,[],void 0,e),M+=b(v,T,P)+k,T=P+O,P=w(v,E,P+j);return T<v.length&&(M+=b(v,T)),M}})},7207:function(t,e,n){n(8757)},7338:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{h:function(){return a},Z:function(){return u}});var o=n(1721),i=n(7294),c=n(7059),u=function(t){function e(e){var n;return(n=t.call(this,e)||this).myRef=i.createRef(),n.moveToView=function(){n.myRef.current.scrollIntoView({behavior:"auto",inline:"start",block:"nearest"})},n}return(0,o.Z)(e,t),e.prototype.render=function(){return i.createElement("div",{className:"relative rounded-lg shadow-lg overflow-hidden",ref:this.myRef},i.createElement(c.G,{style:{height:"100%"},image:this.props.image,imgStyle:{objectFit:this.props.mode},alt:""}),i.createElement("div",{className:"carousal-module--banner-source--h1ygG"},this.props.children))},e}(i.Component),a=function(t){function e(e){var n;return(n=t.call(this,e)||this).children=null,n.childrenRefs=[],n.state={previousIndex:0,index:0},n.prev=n.prev.bind(r(n)),n.next=n.next.bind(r(n)),n.goTo=n.goTo.bind(r(n)),n.children=i.Children.map(n.props.children,(function(t,e){var r=i.createRef();n.childrenRefs.push(r);var o=n.props.hasOwnProperty("mode")?n.props.mode:"cover";return i.cloneElement(t,{mode:o,key:e,ref:r})})),n}(0,o.Z)(e,t);var n=e.prototype;return n.prev=function(){var t=this.state.index-1;t<0&&(t=this.childrenRefs.length-1),this.setState({previousIndex:this.state.index,index:t})},n.next=function(){var t=this.state.index+1;t>this.childrenRefs.length-1&&(t=0),this.setState({previousIndex:this.state.index,index:t})},n.goTo=function(t){this.setState({previousIndex:this.state.index,index:t})},n.render=function(){for(var t=[],e=0;e<this.childrenRefs.length;e++)this.state.index===e?t.push(i.createElement("b",{key:e,onClick:this.goTo.bind(this,e)},e+1)):t.push(i.createElement("span",{key:e,onClick:this.goTo.bind(this,e)},e+1));return i.createElement("div",{className:"relative h-full"},i.createElement("div",{className:"carousal-module--container--5qWwM "+(this.childrenRefs.length>1?"":"carousal-module--hide--9eV6u")},i.createElement("div",{className:"carousal-module--children-container--GCDDJ"},this.children),i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"carousal-module--back--5otIy",onClick:this.prev,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},i.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})),i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"carousal-module--next--74UzQ",onClick:this.next,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},i.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})),i.createElement("div",{className:"carousal-module--nav--mlAMl"},t)))},n.componentDidUpdate=function(){this.state.index!=this.state.previousIndex&&this.childrenRefs[this.state.index].current.moveToView()},e}(i.Component)},4139:function(t,e,n){"use strict";n.d(e,{$:function(){return i}});n(7207);var r=n(7294),o=n(1597),i=function(t){return r.createElement("section",{className:"mb-6 flex flex-col relative "+(void 0!==t.dark?"section-module--dark--cx72m":"")+" "+(void 0!==t.className?t.className:"")+" "+(void 0!==t.fullHeight?"h-screen":"")},r.createElement("div",{className:"flex flex-wrap gap-6 items-center mb-6"},r.createElement("h2",{className:"text-gradient",id:t.title.toLowerCase().replaceAll(" ","-")},void 0!==t.to?r.createElement(o.Link,{to:t.to},t.title):t.title),r.createElement("div",null,t.arbitary)),r.createElement("div",{className:"flex-1"},t.children))}},2748:function(t,e,n){"use strict";n.d(e,{LK:function(){return c},yu:function(){return u},Fi:function(){return a}});var r=n(7294),o=n(9605),i=n(6760),c=function(t){return r.createElement("a",Object.assign({},t,{href:"https://www.youtube.com/channel/UCdGwXjUz3JZhIk7b9vQRmCQ"}),r.createElement("img",{id:"youtube",src:i.Z,style:{height:"24px"}}))},u=function(t){return r.createElement("a",Object.assign({},t,{href:"https://www.instagram.com/lukesp763/"}),r.createElement("img",{src:o.Z,style:{height:"24px"}}))},a=function(t){return r.createElement("a",Object.assign({},t,{href:"https://500px.com/lukespacewalker"}),r.createElement("svg",{style:{height:"24px",fill:"#2F2F2F"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 80 20"},r.createElement("title",null,"500px"),r.createElement("path",{d:"M24.83,0a10,10,0,1,0,10,10h0A10.09,10.09,0,0,0,24.83,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.9,7.9,0,0,1,24.83,17.9ZM46.32,0a10,10,0,1,0,10,10h0A10,10,0,0,0,46.32,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.77,7.77,0,0,1,46.32,17.9ZM7.63,6a6.74,6.74,0,0,0-5.3,1.4V2.1h9c0.3,0,.5-0.1.5-1s-0.4-.9-0.6-0.9H1.33a0.9,0.9,0,0,0-.9.9V9.9c0,0.5.3,0.6,0.8,0.7a0.76,0.76,0,0,0,.9-0.2h0a5.69,5.69,0,0,1,5-2.4,5.2,5.2,0,0,1,4.5,4.4A5.06,5.06,0,0,1,7.23,18H6.63a5.1,5.1,0,0,1-4.7-3.3c-0.1-.3-0.3-0.5-1.1-0.2s-0.9.5-.8,0.8a7.09,7.09,0,0,0,9,4.2,7.09,7.09,0,0,0,4.2-9A7,7,0,0,0,7.63,6ZM63.12,0.1a5.42,5.42,0,0,0-4.8,5.4v8.9c0,0.5.4,0.6,1,.6s1-.1,1-0.6V5.5a3.36,3.36,0,0,1,2.9-3.4,3.29,3.29,0,0,1,2.5.8,3.19,3.19,0,0,1,1.1,2.4,4,4,0,0,1-.7,1.9,3.15,3.15,0,0,1-2.8,1.3h0c-0.4,0-.7,0-0.8.9,0,0.6,0,.9.5,1a4.92,4.92,0,0,0,2.9-.6,5.37,5.37,0,0,0,2.9-4.2A5.18,5.18,0,0,0,64,0,2.77,2.77,0,0,1,63.12.1Zm13.1,5.2,3.6-3.6c0.1-.1.4-0.4-0.2-1.1a1,1,0,0,0-.7-0.4h0a0.52,0.52,0,0,0-.4.2L74.92,4l-3.6-3.7c-0.3-.3-0.6-0.2-1.1.2s-0.5.8-.2,1.1l3.6,3.6L70,8.9h0a0.76,0.76,0,0,0-.2.4,0.84,0.84,0,0,0,.4.7,1.61,1.61,0,0,0,.7.4h0a1.06,1.06,0,0,0,.5-0.2L75,6.6l3.6,3.6a0.52,0.52,0,0,0,.4.2h0a1,1,0,0,0,.7-0.4c0.3-.4.4-0.8,0.1-1Z",transform:"translate(0)"})))}}}]);