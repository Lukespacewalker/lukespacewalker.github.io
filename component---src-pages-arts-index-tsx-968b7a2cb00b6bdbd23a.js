(self.webpackChunksuttisak_personal_site=self.webpackChunksuttisak_personal_site||[]).push([[547],{647:function(e,t,n){var r=n(1702),a=n(7908),l=Math.floor,i=r("".charAt),c=r("".replace),s=r("".slice),o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,h,m){var d=n+e.length,f=r.length,p=u;return void 0!==h&&(h=a(h),p=o),c(m,p,(function(a,c){var o;switch(i(c,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,n);case"'":return s(t,d);case"<":o=h[s(c,1,-1)];break;default:var u=+c;if(0===u)return a;if(u>f){var m=l(u/10);return 0===m?a:m<=f?void 0===r[m-1]?i(c,1):r[m-1]+i(c,1):a}o=r[u-1]}return void 0===o?"":o}))}},7850:function(e,t,n){var r=n(111),a=n(4326),l=n(5112)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[l])?!!t:"RegExp"==a(e))}},7066:function(e,t,n){"use strict";var r=n(9670);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},4706:function(e,t,n){var r=n(6916),a=n(2597),l=n(7976),i=n(7066),c=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in c||a(e,"flags")||!l(c,e)?t:r(i,e)}},1340:function(e,t,n){var r=n(648),a=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return a(e)}},8757:function(e,t,n){"use strict";var r=n(2109),a=n(6916),l=n(1702),i=n(4488),c=n(614),s=n(7850),o=n(1340),u=n(8173),h=n(4706),m=n(647),d=n(5112),f=n(1913),p=d("replace"),v=TypeError,g=l("".indexOf),E=l("".replace),x=l("".slice),w=Math.max,b=function(e,t,n){return n>e.length?-1:""===t?n:g(e,t,n)};r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,l,d,k,y,N,R,C,Z=i(this),A=0,S=0,F="";if(null!=e){if((n=s(e))&&(r=o(i(h(e))),!~g(r,"g")))throw v("`.replaceAll` does not allow non-global regexes");if(l=u(e,p))return a(l,e,Z,t);if(f&&n)return E(o(Z),e,t)}for(d=o(Z),k=o(e),(y=c(t))||(t=o(t)),N=k.length,R=w(1,N),A=b(d,k,0);-1!==A;)C=y?o(t(k,A,d)):m(k,d,A,[],void 0,t),F+=x(d,S,A)+C,S=A+N,A=b(d,k,A+R);return S<d.length&&(F+=x(d,S)),F}})},935:function(e,t,n){n(8757)},7338:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{h:function(){return s},Z:function(){return c}});var a=n(1721),l=n(7294),i=n(6296),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).myRef=l.createRef(),n.moveToView=function(){n.myRef.current.scrollIntoView({behavior:"auto",inline:"start",block:"nearest"})},n}return(0,a.Z)(t,e),t.prototype.render=function(){return l.createElement("div",{className:"relative rounded-lg shadow-lg overflow-hidden",ref:this.myRef},l.createElement(i.G,{style:{height:"100%"},image:this.props.image,imgStyle:{objectFit:this.props.mode},alt:""}),l.createElement("div",{className:"carousal-module--banner-source--h1ygG"},this.props.children))},t}(l.Component),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).children=null,n.childrenRefs=[],n.state={previousIndex:0,index:0},n.prev=n.prev.bind(r(n)),n.next=n.next.bind(r(n)),n.goTo=n.goTo.bind(r(n)),n.children=l.Children.map(n.props.children,(function(e,t){var r=l.createRef();n.childrenRefs.push(r);var a=n.props.hasOwnProperty("mode")?n.props.mode:"cover";return l.cloneElement(e,{mode:a,key:t,ref:r})})),n}(0,a.Z)(t,e);var n=t.prototype;return n.prev=function(){var e=this.state.index-1;e<0&&(e=this.childrenRefs.length-1),this.setState({previousIndex:this.state.index,index:e})},n.next=function(){var e=this.state.index+1;e>this.childrenRefs.length-1&&(e=0),this.setState({previousIndex:this.state.index,index:e})},n.goTo=function(e){this.setState({previousIndex:this.state.index,index:e})},n.render=function(){for(var e=[],t=0;t<this.childrenRefs.length;t++)this.state.index===t?e.push(l.createElement("b",{key:t,onClick:this.goTo.bind(this,t)},t+1)):e.push(l.createElement("span",{key:t,onClick:this.goTo.bind(this,t)},t+1));return l.createElement("div",{className:"relative h-full"},l.createElement("div",{className:"carousal-module--container--5qWwM "+(this.childrenRefs.length>1?"":"carousal-module--hide--9eV6u")},l.createElement("div",{className:"carousal-module--children-container--GCDDJ"},this.children),l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"carousal-module--back--5otIy",onClick:this.prev,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})),l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"carousal-module--next--74UzQ",onClick:this.next,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})),l.createElement("div",{className:"carousal-module--nav--mlAMl"},e)))},n.componentDidUpdate=function(){this.state.index!=this.state.previousIndex&&this.childrenRefs[this.state.index].current.moveToView()},t}(l.Component)},4139:function(e,t,n){"use strict";n.d(t,{$:function(){return l}});n(935);var r=n(7294),a=n(1597),l=function(e){return r.createElement("section",{className:"mb-6 flex flex-col relative "+(void 0!==e.dark?"section-module--dark--cx72m":"")+" "+(void 0!==e.className?e.className:"")+" "+(void 0!==e.fullHeight?"h-screen":"")},r.createElement("div",{className:"flex flex-wrap gap-6 items-center mb-6"},r.createElement("h2",{className:"text-gradient",id:e.title.toLowerCase().replaceAll(" ","-")},void 0!==e.to?r.createElement(a.Link,{to:e.to},e.title):e.title),r.createElement("div",null,e.arbitary)),r.createElement("div",{className:"flex-1"},e.children))}},382:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var r=n(7294),a=n(7942),l=n(4474),i=function(e){return r.createElement(r.Fragment,null,r.createElement("div",{className:"relative h-72 lg:h-96 mb-12"},r.createElement("div",{className:"absolute w-full h-full shadow-xl overflow-hidden"},e.backgroundElement),r.createElement(a.h,null),r.createElement("div",{className:"absolute bottom-6 w-full z-1"},e.header)),r.createElement("section",{className:"container"},e.children),r.createElement(l.$,null))}},7248:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(1721),a=n(7294),l=n(7959),i=n(382),c=n(4139),s=n(7338),o=n(6296),u=n(1597),h=function(e){var t=(0,u.useStaticQuery)("2437061654");return a.createElement(s.h,null,t.allPhotolistJson.nodes.map((function(e,t){return a.createElement(s.Z,{key:t,image:(0,o.c)(e.file)},a.createElement("b",null,e.description),a.createElement("br",null),"2019-2021 © Suttisak")})))},m=function(e){var t=(0,u.useStaticQuery)("420574660");return a.createElement(s.h,{mode:"contain"},t.allRenderlistJson.nodes.map((function(e,t){return a.createElement(s.Z,{key:t,image:(0,o.c)(e.file)},a.createElement("b",null,e.description),a.createElement("br",null),"2019-2021 © Suttisak")})))},d=n(2748),f=function(e){function t(t){return e.call(this,t)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.data.ogimage.ogimagePublicURL;return a.createElement(i.c,{header:a.createElement(a.Fragment,null,a.createElement("h1",{className:"text-center lg:text-5xl"},"Arts"),a.createElement("div",{className:"text-center text-sm"},"3D Rendering และภาพถ่าย ที่อยากจะแชร์")),backgroundElement:a.createElement("div",{className:"w-full h-96",style:{background:"linear-gradient(to right, #EECDA3bb, #EF629Fbb)"}})},a.createElement(l.H,{title:"Projects",imageUrl:e}),a.createElement(c.$,{fullHeight:!0,title:"3D Rendering"},a.createElement(m,null)),a.createElement(c.$,{fullHeight:!0,title:"Photography",arbitary:a.createElement("div",{className:"flex items-center gap-6"},a.createElement(d.yu,null)," ",a.createElement(d.Fi,null))},a.createElement(h,null)))},t}(a.Component)},2748:function(e,t,n){"use strict";n.d(t,{LK:function(){return i},yu:function(){return c},Fi:function(){return s}});var r=n(7294),a=n(9605),l=n(6760),i=function(e){return r.createElement("a",Object.assign({},e,{href:"https://www.youtube.com/channel/UCdGwXjUz3JZhIk7b9vQRmCQ"}),r.createElement("img",{id:"youtube",src:l.Z,style:{height:"24px"}}))},c=function(e){return r.createElement("a",Object.assign({},e,{href:"https://www.instagram.com/lukesp763/"}),r.createElement("img",{src:a.Z,style:{height:"24px"}}))},s=function(e){return r.createElement("a",Object.assign({},e,{href:"https://500px.com/lukespacewalker"}),r.createElement("svg",{style:{height:"24px",fill:"#2F2F2F"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 80 20"},r.createElement("title",null,"500px"),r.createElement("path",{d:"M24.83,0a10,10,0,1,0,10,10h0A10.09,10.09,0,0,0,24.83,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.9,7.9,0,0,1,24.83,17.9ZM46.32,0a10,10,0,1,0,10,10h0A10,10,0,0,0,46.32,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.77,7.77,0,0,1,46.32,17.9ZM7.63,6a6.74,6.74,0,0,0-5.3,1.4V2.1h9c0.3,0,.5-0.1.5-1s-0.4-.9-0.6-0.9H1.33a0.9,0.9,0,0,0-.9.9V9.9c0,0.5.3,0.6,0.8,0.7a0.76,0.76,0,0,0,.9-0.2h0a5.69,5.69,0,0,1,5-2.4,5.2,5.2,0,0,1,4.5,4.4A5.06,5.06,0,0,1,7.23,18H6.63a5.1,5.1,0,0,1-4.7-3.3c-0.1-.3-0.3-0.5-1.1-0.2s-0.9.5-.8,0.8a7.09,7.09,0,0,0,9,4.2,7.09,7.09,0,0,0,4.2-9A7,7,0,0,0,7.63,6ZM63.12,0.1a5.42,5.42,0,0,0-4.8,5.4v8.9c0,0.5.4,0.6,1,.6s1-.1,1-0.6V5.5a3.36,3.36,0,0,1,2.9-3.4,3.29,3.29,0,0,1,2.5.8,3.19,3.19,0,0,1,1.1,2.4,4,4,0,0,1-.7,1.9,3.15,3.15,0,0,1-2.8,1.3h0c-0.4,0-.7,0-0.8.9,0,0.6,0,.9.5,1a4.92,4.92,0,0,0,2.9-.6,5.37,5.37,0,0,0,2.9-4.2A5.18,5.18,0,0,0,64,0,2.77,2.77,0,0,1,63.12.1Zm13.1,5.2,3.6-3.6c0.1-.1.4-0.4-0.2-1.1a1,1,0,0,0-.7-0.4h0a0.52,0.52,0,0,0-.4.2L74.92,4l-3.6-3.7c-0.3-.3-0.6-0.2-1.1.2s-0.5.8-.2,1.1l3.6,3.6L70,8.9h0a0.76,0.76,0,0,0-.2.4,0.84,0.84,0,0,0,.4.7,1.61,1.61,0,0,0,.7.4h0a1.06,1.06,0,0,0,.5-0.2L75,6.6l3.6,3.6a0.52,0.52,0,0,0,.4.2h0a1,1,0,0,0,.7-0.4c0.3-.4.4-0.8,0.1-1Z",transform:"translate(0)"})))}}}]);