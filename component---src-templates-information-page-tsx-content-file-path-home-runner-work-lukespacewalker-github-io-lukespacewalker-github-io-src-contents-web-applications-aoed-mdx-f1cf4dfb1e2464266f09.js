"use strict";(self.webpackChunksuttisak_personal_site=self.webpackChunksuttisak_personal_site||[]).push([[922],{7706:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(6410),a=n(7294);function l(e){var t=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",a:"a"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,null,"ที่มา"),"\n",a.createElement(t.p,null,"สมาคมโรคจากการประกอบอาชีพและสิ่งแวดล้อมแห่งประเทศไทยไม่มีช่องทางนำเสนอข้อมูล ที่เป็น Official"),"\n",a.createElement(t.h1,null,"Technology stack ที่ใช้"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Gatsby (Static site generator ที่ใช้ React by Facebook)"),"\n"),"\n",a.createElement(t.h2,null,"สถานะปัจจุบัน"),"\n",a.createElement(t.p,null,"สามารถเข้าดูได้ที่ ",a.createElement(t.a,{href:"https://www.aoed.org"},"AOED.org")))}var i=function(e){void 0===e&&(e={});var t=Object.assign({},(0,r.ah)(),e.components).wrapper;return t?a.createElement(t,e,a.createElement(l,e)):l(e)},c=n(1721),s=n(7959),o=n(6296),u=n(8668),m=n(704),h=n(1252),d=n(3125),p=n(3565),g=function(e){function t(t){var n;return(n=e.call(this,t)||this).useTOC=!0,"undefined"!=typeof window&&(n.target=decodeURIComponent(window.location.hash),n.target=n.target.replace("#",""),window.location.hash=""),n}(0,c.Z)(t,e);var n=t.prototype;return n.renderAuthors=function(e){var t=e.map((function(e,t){var n=e.position.map((function(e,t){return a.createElement("div",{key:t},e)}));return a.createElement("div",{className:"author",key:t},a.createElement("div",{className:"image-container"},a.createElement(o.G,{image:e.avatar.childImageSharp.gatsbyImageData,style:{borderRadius:"50%"},alt:e.name})),a.createElement("div",{className:"title-container"},e.name),a.createElement("div",{className:"positions-container"},n))}));return a.createElement("div",{className:"author-container"},t)},n.renderTOCItem=function(e,t){var n=this;void 0===t&&(t=0);var r=e.map((function(e,r){return null!=e.items&&e.items.length>0?a.createElement(d.k,{key:t+r,title:e.title,url:e.url},n.renderTOCItem(e.items,100*r)):a.createElement("li",{key:t+r},a.createElement("a",{href:e.url,onClick:m.ZP},e.title))}));return a.createElement("ul",null,r)},n.renderTOC=function(e){return e.length>0?a.createElement("div",{id:"toc",className:"toc-container"},this.renderTOCItem(e)):""},n.componentDidMount=function(){""!==this.target?(0,m.E6)(this.target):this.target=""},n.render=function(){var e=this;console.log(this.props);var t=this.props.data.mdx,n=t.tableOfContents.items,l=t.frontmatter,i=l.title,c=(l.type,l.background),m=l.images,g=l.date,E=l.authors,f=l.excerpt,v=E,O=n,b=a.createElement("div",null);return null==v&&null==O||(b=a.createElement(a.Fragment,null,null!=v?this.renderAuthors(v):"",null!=O?this.renderTOC(O):"")),a.createElement(h.B,{title:i,tagLine:g,GatsyImageElement:a.createElement(o.G,{image:(0,o.c)(c),alt:i}),aside:b},null!=f?a.createElement(s.H,{title:i,description:f,imageUrl:c.publicURL,imageWidth:c.childImageSharp.original.width,imageHeight:c.childImageSharp.original.height}):a.createElement(s.H,{title:i,description:f}),a.createElement("div",{className:"MDXRenderer-body"},a.createElement(r.Zo,{components:{h1:function(t){return a.createElement(d.H1,Object.assign({useToc:e.useTOC},t))},h2:function(t){return a.createElement(d.H2,Object.assign({useToc:e.useTOC},t))},h3:function(t){return a.createElement(d.H3,Object.assign({useToc:e.useTOC},t))},h4:function(t){return a.createElement(d.H4,Object.assign({useToc:e.useTOC},t))},pre:u.S}},a.createElement(p.p.Provider,{value:{imagesList:m}},this.props.children))))},t}(a.Component);function E(e){return a.createElement(g,e,a.createElement(i,e))}}}]);