"use strict";(self.webpackChunksuttisak_personal_site=self.webpackChunksuttisak_personal_site||[]).push([[446],{1576:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(6410),r=n(7294),l=n(7510);function i(e){var t=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,null,"ปัญหาค้างที่ 70%"),"\n",r.createElement(t.p,null,"๊Update Endnote เป็นรุ่นล่าสุดคือ Endnote X 9.2"),"\n",r.createElement(t.h1,null,"ปัญหา Add-Ins หายไปจาก Toolbars ใน Word"),"\n",r.createElement(t.p,null,"ลองตรวจสอบก่อนว่า Add-Ins ถูกปิดไว้หรือไม่ที่ Word โดยเข้าไปที่ File > Option"),"\n",r.createElement(l.p,{name:"word_addins.png"}),"\n",r.createElement(t.p,null,"จากนั้นเลือก Add-Ins และเลือก COM Add-Ins แล้วกด Go"),"\n",r.createElement(l.p,{name:"word_com_dialog.png"}),"\n",r.createElement(t.p,null,"ดูว่า Add-Ins นั้นมีเครื่องหมายถูกหรือไม่ถ้าไม่มี ให้ติกถูก แล้วกด Ok"),"\n",r.createElement(t.p,null,"หากทำแล้ว Add-Ins นั้นยังไม่ปรากฎแปลว่ามันอาจะถูกปิดไว้เพราะมันเคยมีปัญหากับ Word ให้กลับไปที่ Options อีกครั้งแต่ครั้งนี้เลือก Disables Items แทน"),"\n",r.createElement(l.p,{name:"word_disable.png"}),"\n",r.createElement(t.p,null,"ให้ Enable สิ่งที่ต้องการแล้ว Restart Word ดู"),"\n",r.createElement(l.p,{name:"word_disable_dialog.png"}),"\n",r.createElement(t.p,null,"หากยังไม่มาลองไปดูใน Registry โดยเข้า WIN + R แล้วพิมพ์ regedit แล้วเปิด Registry Editor แล้วไปที่ Key (ซึ่งอาจจะไม่มีก็ได้)"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"HKEY_CURRENT_USER\\Software\\Microsoft\\Office\\รุ่นเป็นต้วเลข.0\\Word\\Resiliency\\DisabledItems\n")))}var c=function(e){void 0===e&&(e={});var t=Object.assign({},(0,a.ah)(),e.components).wrapper;return t?r.createElement(t,e,r.createElement(i,e)):i(e)},s=n(1721),o=n(7959),m=n(6296),d=n(8668),u=n(704),p=n(1252),E=n(3125),g=n(3565),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).useTOC=!0,"undefined"!=typeof window&&(n.target=decodeURIComponent(window.location.hash),n.target=n.target.replace("#",""),window.location.hash=""),n}(0,s.Z)(t,e);var n=t.prototype;return n.renderAuthors=function(e){var t=e.map((function(e,t){var n=e.position.map((function(e,t){return r.createElement("div",{key:t},e)}));return r.createElement("div",{className:"author",key:t},r.createElement("div",{className:"image-container"},r.createElement(m.G,{image:e.avatar.childImageSharp.gatsbyImageData,style:{borderRadius:"50%"},alt:e.name})),r.createElement("div",{className:"title-container"},e.name),r.createElement("div",{className:"positions-container"},n))}));return r.createElement("div",{className:"author-container"},t)},n.renderTOCItem=function(e,t){var n=this;void 0===t&&(t=0);var a=e.map((function(e,a){return null!=e.items&&e.items.length>0?r.createElement(E.k,{key:t+a,title:e.title,url:e.url},n.renderTOCItem(e.items,100*a)):r.createElement("li",{key:t+a},r.createElement("a",{href:e.url,onClick:u.ZP},e.title))}));return r.createElement("ul",null,a)},n.renderTOC=function(e){return e.length>0?r.createElement("div",{id:"toc",className:"toc-container"},this.renderTOCItem(e)):""},n.componentDidMount=function(){""!==this.target?(0,u.E6)(this.target):this.target=""},n.render=function(){var e=this;console.log(this.props);var t=this.props.data.mdx,n=t.tableOfContents.items,l=t.frontmatter,i=l.title,c=(l.type,l.background),s=l.images,u=l.date,h=l.authors,f=l.excerpt,v=h,b=n,O=r.createElement("div",null);return null==v&&null==b||(O=r.createElement(r.Fragment,null,null!=v?this.renderAuthors(v):"",null!=b?this.renderTOC(b):"")),r.createElement(p.B,{title:i,tagLine:u,GatsyImageElement:r.createElement(m.G,{image:(0,m.c)(c),alt:i}),aside:O},null!=f?r.createElement(o.H,{title:i,description:f,imageUrl:c.publicURL,imageWidth:c.childImageSharp.original.width,imageHeight:c.childImageSharp.original.height}):r.createElement(o.H,{title:i,description:f}),r.createElement("div",{className:"MDXRenderer-body"},r.createElement(a.Zo,{components:{h1:function(t){return r.createElement(E.H1,Object.assign({useToc:e.useTOC},t))},h2:function(t){return r.createElement(E.H2,Object.assign({useToc:e.useTOC},t))},h3:function(t){return r.createElement(E.H3,Object.assign({useToc:e.useTOC},t))},h4:function(t){return r.createElement(E.H4,Object.assign({useToc:e.useTOC},t))},pre:d.S}},r.createElement(g.p.Provider,{value:{imagesList:s}},this.props.children))))},t}(r.Component);function f(e){return r.createElement(h,e,r.createElement(c,e))}},7510:function(e,t,n){n.d(t,{p:function(){return s}});var a=n(3366),r=n(7294),l=n(6296),i=n(3565),c=["imageList","mode","className","name","alt","caption"],s=function(e){var t,n,s=e.imageList,o=e.mode,m=void 0===o?"block":o,d=e.className,u=void 0===d?"":d,p=e.name,E=e.alt,g=void 0===E?"":E,h=e.caption,f=(0,a.Z)(e,c),v=null===(n=s=null!==(t=s)&&void 0!==t?t:r.useContext(i.p).imagesList)||void 0===n?void 0:n.find((function(e){return e.name===p.substring(0,p.lastIndexOf("."))}));return v&&r.createElement("div",{className:"image-container"},r.createElement("div",{className:u+" "+m},r.createElement(l.G,Object.assign({image:v.childImageSharp.gatsbyImageData},f,{alt:g})),h&&r.createElement("div",{className:"text-center"},h)))}}}]);