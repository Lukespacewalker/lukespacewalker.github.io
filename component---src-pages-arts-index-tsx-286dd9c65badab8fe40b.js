(self.webpackChunksuttisak_personal_site=self.webpackChunksuttisak_personal_site||[]).push([[547],{3774:function(e,t,n){"use strict";function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{h:function(){return s},Z:function(){return c}});var a=n(7473),r=n(9496),l=n(392);let c=function(e){function t(t){var n;return(n=e.call(this,t)||this).myRef=r.createRef(),n.moveToView=()=>{n.myRef.current.scrollIntoView({behavior:"auto",inline:"start",block:"nearest"})},n}return(0,a.Z)(t,e),t.prototype.render=function(){return r.createElement("div",{className:"carousal-module--carousal-item--31GsY",ref:this.myRef},r.createElement(l.G,{style:{height:"100%"},image:this.props.image,imgStyle:{objectFit:this.props.mode},alt:""}),r.createElement("div",{className:"carousal-module--banner-source--3cJE1"},this.props.children))},t}(r.Component),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).children=null,n.childrenRefs=[],n.state={previousIndex:0,index:0},n.prev=n.prev.bind(i(n)),n.next=n.next.bind(i(n)),n.goTo=n.goTo.bind(i(n)),n.children=r.Children.map(n.props.children,((e,t)=>{const i=r.createRef();n.childrenRefs.push(i);const a=n.props.hasOwnProperty("mode")?n.props.mode:"cover";return r.cloneElement(e,{mode:a,key:t,ref:i})})),n}(0,a.Z)(t,e);var n=t.prototype;return n.prev=function(){let e=this.state.index-1;e<0&&(e=this.childrenRefs.length-1),this.setState({previousIndex:this.state.index,index:e})},n.next=function(){let e=this.state.index+1;e>this.childrenRefs.length-1&&(e=0),this.setState({previousIndex:this.state.index,index:e})},n.goTo=function(e){this.setState({previousIndex:this.state.index,index:e})},n.render=function(){const e=[];for(let t=0;t<this.childrenRefs.length;t++)this.state.index===t?e.push(r.createElement("b",{key:t,onClick:this.goTo.bind(this,t)},t+1)):e.push(r.createElement("span",{key:t,onClick:this.goTo.bind(this,t)},t+1));return r.createElement("div",{className:"carousal-module--carousal-container--OHuy4"},r.createElement("div",{className:"carousal-module--container--2oWtG "+(this.childrenRefs.length>1?"":"carousal-module--hide--Oep0L")},r.createElement("div",{className:"carousal-module--children-container--1z3v_"},this.children),r.createElement("div",{className:"carousal-module--back--1TSIM",onClick:this.prev},r.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOSAxMjkiPg0KICA8Zz4NCiAgICA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0ibTg4LjYsMTIxLjNjMC44LDAuOCAxLjgsMS4yIDIuOSwxLjJzMi4xLTAuNCAyLjktMS4yYzEuNi0xLjYgMS42LTQuMiAwLTUuOGwtNTEtNTEgNTEtNTFjMS42LTEuNiAxLjYtNC4yIDAtNS44cy00LjItMS42LTUuOCwwbC01NCw1My45Yy0xLjYsMS42LTEuNiw0LjIgMCw1LjhsNTQsNTMuOXoiLz4NCiAgPC9nPg0KPC9zdmc+DQo="})),r.createElement("div",{className:"carousal-module--next--25_vB",onClick:this.next},r.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTI5IDEyOSI+DQogIDxnPg0KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJtNDAuNCwxMjEuM2MtMC44LDAuOC0xLjgsMS4yLTIuOSwxLjJzLTIuMS0wLjQtMi45LTEuMmMtMS42LTEuNi0xLjYtNC4yIDAtNS44bDUxLTUxLTUxLTUxYy0xLjYtMS42LTEuNi00LjIgMC01LjggMS42LTEuNiA0LjItMS42IDUuOCwwbDUzLjksNTMuOWMxLjYsMS42IDEuNiw0LjIgMCw1LjhsLTUzLjksNTMuOXoiLz4NCiAgPC9nPg0KPC9zdmc+DQo="})),r.createElement("div",{className:"carousal-module--nav--2Bs8D"},e)))},n.componentDidUpdate=function(){this.state.index!=this.state.previousIndex&&this.childrenRefs[this.state.index].current.moveToView()},t}(r.Component)},5814:function(e,t,n){"use strict";n.d(t,{$:function(){return r}});var i=n(9496),a=n(9497);const r=e=>i.createElement("section",{className:"section-module--section--OxTvr "+(void 0!==e.dark?"section-module--dark--3E5h8":"")+"  "+(void 0!==e.fullHeight?"section-module--full-height--oRFdE":"")},i.createElement("div",{className:"section-module--header-container--2vgbf"},i.createElement("h1",{id:e.title.toLowerCase().replaceAll(" ","-")},void 0!==e.to?i.createElement(a.Link,{to:e.to},e.title):e.title),i.createElement("div",null,e.arbitary)),e.children)},9325:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var i=n(7473),a=n(9496),r=n(2350),l=n(6466),c=n(2859),s=n(5814),o=n(3774),u=n(392),m=n(9497);const d=e=>{const t=(0,m.useStaticQuery)("2437061654");return a.createElement(o.h,null,t.allPhotolistJson.nodes.map(((e,t)=>a.createElement(o.Z,{key:t,image:(0,u.d)(e.file)},a.createElement("b",null,e.description),a.createElement("br",null),"2019-2021 © Suttisak"))))},h=e=>{const t=(0,m.useStaticQuery)("420574660");return a.createElement(o.h,{mode:"contain"},t.allRenderlistJson.nodes.map(((e,t)=>a.createElement(o.Z,{key:t,image:(0,u.d)(e.file)},a.createElement("b",null,e.description),a.createElement("br",null),"2019-2021 © Suttisak"))))};var g=n(306);var p=function(e){function t(t){return e.call(this,t)||this}return(0,i.Z)(t,e),t.prototype.render=function(){const{data:e}=this.props,{ogimage:{ogimagePublicURL:t}}=e;return a.createElement(a.Fragment,null,a.createElement(l.H,{title:"",image:t,keywords:["Suttisak Denduangchai","สุทธิศักดิ์ เด่นดวงใจ","Out of the box"]}),a.createElement("div",{className:"root-container"},a.createElement(c.h,null),a.createElement("div",{style:{gridArea:"main"}},a.createElement(s.$,{dark:!0,fullHeight:!0,title:"3D Rendering"},a.createElement(h,null)),a.createElement(s.$,{dark:!0,fullHeight:!0,title:"Photography",arbitary:a.createElement(a.Fragment,null,a.createElement(g.yu,null)," ",a.createElement(g.Fi,{style:{marginLeft:"1em"}}))},a.createElement(d,null)),a.createElement(r.$,null))))},t}(a.Component)},306:function(e,t,n){"use strict";n.d(t,{LK:function(){return l},yu:function(){return c},Fi:function(){return s}});var i=n(9496),a=n(6786),r=n(7154);const l=e=>i.createElement("a",Object.assign({},e,{href:"https://www.youtube.com/channel/UCdGwXjUz3JZhIk7b9vQRmCQ"}),i.createElement("img",{id:"youtube",src:r.Z,style:{height:"50px"}})),c=e=>i.createElement("a",Object.assign({},e,{href:"https://www.instagram.com/lukesp763/"}),i.createElement("img",{src:a.Z,style:{height:"50px"}})),s=e=>i.createElement("a",Object.assign({},e,{href:"https://500px.com/lukespacewalker"}),i.createElement("svg",{style:{height:"45px",fill:"white"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 80 20"},i.createElement("title",null,"500px"),i.createElement("path",{d:"M24.83,0a10,10,0,1,0,10,10h0A10.09,10.09,0,0,0,24.83,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.9,7.9,0,0,1,24.83,17.9ZM46.32,0a10,10,0,1,0,10,10h0A10,10,0,0,0,46.32,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.77,7.77,0,0,1,46.32,17.9ZM7.63,6a6.74,6.74,0,0,0-5.3,1.4V2.1h9c0.3,0,.5-0.1.5-1s-0.4-.9-0.6-0.9H1.33a0.9,0.9,0,0,0-.9.9V9.9c0,0.5.3,0.6,0.8,0.7a0.76,0.76,0,0,0,.9-0.2h0a5.69,5.69,0,0,1,5-2.4,5.2,5.2,0,0,1,4.5,4.4A5.06,5.06,0,0,1,7.23,18H6.63a5.1,5.1,0,0,1-4.7-3.3c-0.1-.3-0.3-0.5-1.1-0.2s-0.9.5-.8,0.8a7.09,7.09,0,0,0,9,4.2,7.09,7.09,0,0,0,4.2-9A7,7,0,0,0,7.63,6ZM63.12,0.1a5.42,5.42,0,0,0-4.8,5.4v8.9c0,0.5.4,0.6,1,.6s1-.1,1-0.6V5.5a3.36,3.36,0,0,1,2.9-3.4,3.29,3.29,0,0,1,2.5.8,3.19,3.19,0,0,1,1.1,2.4,4,4,0,0,1-.7,1.9,3.15,3.15,0,0,1-2.8,1.3h0c-0.4,0-.7,0-0.8.9,0,0.6,0,.9.5,1a4.92,4.92,0,0,0,2.9-.6,5.37,5.37,0,0,0,2.9-4.2A5.18,5.18,0,0,0,64,0,2.77,2.77,0,0,1,63.12.1Zm13.1,5.2,3.6-3.6c0.1-.1.4-0.4-0.2-1.1a1,1,0,0,0-.7-0.4h0a0.52,0.52,0,0,0-.4.2L74.92,4l-3.6-3.7c-0.3-.3-0.6-0.2-1.1.2s-0.5.8-.2,1.1l3.6,3.6L70,8.9h0a0.76,0.76,0,0,0-.2.4,0.84,0.84,0,0,0,.4.7,1.61,1.61,0,0,0,.7.4h0a1.06,1.06,0,0,0,.5-0.2L75,6.6l3.6,3.6a0.52,0.52,0,0,0,.4.2h0a1,1,0,0,0,.7-0.4c0.3-.4.4-0.8,0.1-1Z",transform:"translate(0)"})))}}]);