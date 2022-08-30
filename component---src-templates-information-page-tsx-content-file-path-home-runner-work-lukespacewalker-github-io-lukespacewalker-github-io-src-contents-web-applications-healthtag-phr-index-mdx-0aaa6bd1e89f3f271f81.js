"use strict";(self.webpackChunksuttisak_personal_site=self.webpackChunksuttisak_personal_site||[]).push([[141],{9505:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(6410),r=n(7294),i=n(7510);function l(e){var t=Object.assign({h2:"h2",p:"p",a:"a",h1:"h1",ul:"ul",li:"li"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h2,null,"สถานะปัจจุบัน"),"\n",r.createElement(t.p,null,"สามารถเข้าดูได้ที่ ",r.createElement(t.a,{href:"https://phr.healthtag.io"},"phr.healthtag.io")),"\n",r.createElement(t.h1,null,"Technology stack ที่ใช้ในส่วนที่ผมพัฒนา"),"\n",r.createElement(t.h2,null,"Front End"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"React"),"\n"),"\n",r.createElement(t.h1,null,"ที่มา"),"\n",r.createElement(t.p,null,"ผมเป็นผู้พัฒนาส่วน Frontend ของระบบนี้ ส่วน Backend พัฒานาโดยทีมงานคนอื่น"),"\n",r.createElement(i.p,{imageList:e.images,name:"medication.png",caption:"หน้า Medication"}))}var c=function(e){void 0===e&&(e={});var t=Object.assign({},(0,a.ah)(),e.components).wrapper;return t?r.createElement(t,e,r.createElement(l,e)):l(e)},s=n(1721),o=n(7959),m=n(6296),u=n(8668),d=n(704),h=n(1252),g=n(3125),p=n(3565),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).useTOC=!1,"undefined"!=typeof window&&(n.target=decodeURIComponent(window.location.hash),n.target=n.target.replace("#",""),window.location.hash=""),n}(0,s.Z)(t,e);var n=t.prototype;return n.renderAuthors=function(e){var t=e.map((function(e,t){var n=e.position.map((function(e,t){return r.createElement("div",{key:t},e)}));return r.createElement("div",{className:"author",key:t},r.createElement("div",{className:"image-container"},r.createElement(m.G,{image:e.avatar.childImageSharp.gatsbyImageData,style:{borderRadius:"50%"},alt:e.name})),r.createElement("div",{className:"title-container"},e.name),r.createElement("div",{className:"positions-container"},n))}));return r.createElement("div",{className:"author-container"},t)},n.renderTOCItem=function(e,t){var n=this;void 0===t&&(t=0);var a=e.map((function(e,a){return null!=e.items&&e.items.length>0?r.createElement(g.k,{key:t+a,title:e.title,url:e.url},n.renderTOCItem(e.items,100*a)):r.createElement("li",{key:t+a},r.createElement("a",{href:e.url,onClick:d.ZP},e.title))}));return r.createElement("ul",null,a)},n.renderTOC=function(e){return e.length>0?r.createElement("div",{id:"toc",className:"toc-container"},this.renderTOCItem(e)):""},n.componentDidMount=function(){""!==this.target?(0,d.E6)(this.target):this.target=""},n.render=function(){var e=this;console.log(this.props);var t=this.props.data.mdx,n=t.tableOfContents.items,i=t.frontmatter,l=i.title,c=(i.type,i.background),s=i.images,d=i.date,E=i.authors,v=i.excerpt,f=E,O=n,b=r.createElement("div",null);return null==f&&null==O||(b=r.createElement(r.Fragment,null,null!=f?this.renderAuthors(f):"",null!=O?this.renderTOC(O):"")),r.createElement(h.B,{title:l,tagLine:d,GatsyImageElement:r.createElement(m.G,{image:(0,m.c)(c),alt:l}),aside:b},null!=v?r.createElement(o.H,{title:l,description:v,imageUrl:c.publicURL,imageWidth:c.childImageSharp.original.width,imageHeight:c.childImageSharp.original.height}):r.createElement(o.H,{title:l,description:v}),r.createElement("div",{className:"MDXRenderer-body"},r.createElement(a.Zo,{components:{h1:function(t){return r.createElement(g.H1,Object.assign({useToc:e.useTOC},t))},h2:function(t){return r.createElement(g.H2,Object.assign({useToc:e.useTOC},t))},h3:function(t){return r.createElement(g.H3,Object.assign({useToc:e.useTOC},t))},h4:function(t){return r.createElement(g.H4,Object.assign({useToc:e.useTOC},t))},pre:u.S}},r.createElement(p.p.Provider,{value:{imagesList:s}},this.props.children))))},t}(r.Component);function v(e){return r.createElement(E,e,r.createElement(c,e))}},7510:function(e,t,n){n.d(t,{p:function(){return s}});var a=n(3366),r=n(7294),i=n(6296),l=n(3565),c=["imageList","mode","className","name","alt","caption"],s=function(e){var t,n,s=e.imageList,o=e.mode,m=void 0===o?"block":o,u=e.className,d=void 0===u?"":u,h=e.name,g=e.alt,p=void 0===g?"":g,E=e.caption,v=(0,a.Z)(e,c),f=null===(n=s=null!==(t=s)&&void 0!==t?t:r.useContext(l.p).imagesList)||void 0===n?void 0:n.find((function(e){return e.name===h.substring(0,h.lastIndexOf("."))}));return f&&r.createElement("div",{className:"image-container"},r.createElement("div",{className:d+" "+m},r.createElement(i.G,Object.assign({image:f.childImageSharp.gatsbyImageData},v,{alt:p})),E&&r.createElement("div",{className:"text-center"},E)))}}}]);