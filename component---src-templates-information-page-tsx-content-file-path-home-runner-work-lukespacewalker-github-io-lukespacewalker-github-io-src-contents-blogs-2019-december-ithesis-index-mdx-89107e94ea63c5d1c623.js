"use strict";(self.webpackChunksuttisak_personal_site=self.webpackChunksuttisak_personal_site||[]).push([[446],{1576:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(1151),r=n(7294),l=n(7510);function i(e){const t=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,null,"ปัญหาค้างที่ 70%"),"\n",r.createElement(t.p,null,"๊Update Endnote เป็นรุ่นล่าสุดคือ Endnote X 9.2"),"\n",r.createElement(t.h1,null,"ปัญหา Add-Ins หายไปจาก Toolbars ใน Word"),"\n",r.createElement(t.p,null,"ลองตรวจสอบก่อนว่า Add-Ins ถูกปิดไว้หรือไม่ที่ Word โดยเข้าไปที่ File > Option"),"\n",r.createElement(l.p,{name:"word_addins.png"}),"\n",r.createElement(t.p,null,"จากนั้นเลือก Add-Ins และเลือก COM Add-Ins แล้วกด Go"),"\n",r.createElement(l.p,{name:"word_com_dialog.png"}),"\n",r.createElement(t.p,null,"ดูว่า Add-Ins นั้นมีเครื่องหมายถูกหรือไม่ถ้าไม่มี ให้ติกถูก แล้วกด Ok"),"\n",r.createElement(t.p,null,"หากทำแล้ว Add-Ins นั้นยังไม่ปรากฎแปลว่ามันอาจะถูกปิดไว้เพราะมันเคยมีปัญหากับ Word ให้กลับไปที่ Options อีกครั้งแต่ครั้งนี้เลือก Disables Items แทน"),"\n",r.createElement(l.p,{name:"word_disable.png"}),"\n",r.createElement(t.p,null,"ให้ Enable สิ่งที่ต้องการแล้ว Restart Word ดู"),"\n",r.createElement(l.p,{name:"word_disable_dialog.png"}),"\n",r.createElement(t.p,null,"หากยังไม่มาลองไปดูใน Registry โดยเข้า WIN + R แล้วพิมพ์ regedit แล้วเปิด Registry Editor แล้วไปที่ Key (ซึ่งอาจจะไม่มีก็ได้)"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"HKEY_CURRENT_USER\\Software\\Microsoft\\Office\\รุ่นเป็นต้วเลข.0\\Word\\Resiliency\\DisabledItems\n")))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)},c=n(4578),o=n(2825),m=n(3723),d=n(4624),u=n(704),p=n(1252),E=n(3125),g=n(3565);let h=function(e){function t(t){var n;return(n=e.call(this,t)||this).useTOC=!1,"undefined"!=typeof window&&(n.target=decodeURIComponent(window.location.hash),n.target=n.target.replace("#",""),window.location.hash=""),n}(0,c.Z)(t,e);var n=t.prototype;return n.renderAuthors=function(e){const t=e.map(((e,t)=>{const n=e.position.map(((e,t)=>r.createElement("div",{key:t},e)));return r.createElement("div",{className:"author",key:t},r.createElement("div",{className:"image-container"},r.createElement(m.G,{image:e.avatar.childImageSharp.gatsbyImageData,style:{borderRadius:"50%"},alt:e.name})),r.createElement("div",{className:"title-container"},e.name),r.createElement("div",{className:"positions-container"},n))}));return r.createElement("div",{className:"author-container"},t)},n.renderTOCItem=function(e,t){void 0===t&&(t=0);const n=e.map(((e,n)=>null!=e.items&&e.items.length>0?r.createElement(E.k,{key:t+n,title:e.title,url:e.url},this.renderTOCItem(e.items,100*n)):r.createElement("li",{key:t+n},r.createElement("a",{href:e.url,onClick:u.ZP},e.title))));return r.createElement("ul",null,n)},n.renderTOC=function(e){return e.length>0?r.createElement("div",{id:"toc",className:"toc-container"},this.renderTOCItem(e)):""},n.componentDidMount=function(){""!==this.target?(0,u.E6)(this.target):this.target=""},n.render=function(){console.log(this.props);const{data:{mdx:{tableOfContents:{items:e},frontmatter:{title:t,type:n,background:l,images:i,date:s,authors:c,excerpt:u}}}}=this.props,h=c,f=e;let v=r.createElement("div",null);return null==h&&null==f||(v=r.createElement(r.Fragment,null,null!=h?this.renderAuthors(h):"",null!=f?this.renderTOC(f):"")),r.createElement(p.B,{title:t,tagLine:s,GatsyImageElement:r.createElement(m.G,{image:(0,m.c)(l),alt:t}),aside:v},null!=u?r.createElement(o.H,{title:t,description:u,imageUrl:l.publicURL,imageWidth:l.childImageSharp.original.width,imageHeight:l.childImageSharp.original.height}):r.createElement(o.H,{title:t,description:u}),r.createElement("div",{className:"MDXRenderer-body"},r.createElement(a.Zo,{components:{h1:e=>r.createElement(E.H1,Object.assign({useToc:this.useTOC},e)),h2:e=>r.createElement(E.H2,Object.assign({useToc:this.useTOC},e)),h3:e=>r.createElement(E.H3,Object.assign({useToc:this.useTOC},e)),h4:e=>r.createElement(E.H4,Object.assign({useToc:this.useTOC},e)),pre:d.S}},r.createElement(g.p.Provider,{value:{imagesList:i}},this.props.children))))},t}(r.Component);function f(e){return r.createElement(h,e,r.createElement(s,e))}},7510:function(e,t,n){n.d(t,{p:function(){return i}});var a=n(7294),r=n(3723),l=n(3565);const i=e=>{var t,n;let{imageList:i,mode:s="block",className:c="",name:o,alt:m="",caption:d,...u}=e;i=null!==(t=i)&&void 0!==t?t:a.useContext(l.p).imagesList;const p=null===(n=i)||void 0===n?void 0:n.find((e=>(null==e?void 0:e.name)===o.substring(0,o.lastIndexOf("."))));return null!=p&&void 0!==p?a.createElement("div",{className:"image-container"},a.createElement("div",{className:c+" "+s},a.createElement(r.G,Object.assign({image:p.childImageSharp.gatsbyImageData},u,{alt:m})),d&&a.createElement("div",{className:"text-center"},d))):a.createElement("div",{className:"p-6 font-bold"},o," is not exist")}}}]);