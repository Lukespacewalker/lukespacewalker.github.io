"use strict";(self.webpackChunksuttisak_personal_site=self.webpackChunksuttisak_personal_site||[]).push([[194],{5098:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var l=n(1151),a=n(7294),r=n(7510);function i(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3",ol:"ol"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"โปรแกรมช่วยดึงข้อมูลจาก PDF ที่ได้จากเครื่อง Body Compistion รุ่น InBody 230"),"\n",a.createElement(t.h2,null,"ฟีเจอร์"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"สามารถใช้งานได้บนระบบปฏิบัติการย้อนหลังไปถึง Windows 7 SP1 (แต่ต้องติดตั้ง Update ตาม ",a.createElement(t.a,{href:"https://www.howtogeek.com/255435/how-to-update-windows-7-all-at-once-with-microsofts-convenience-rollup/"},"How to Update Windows 7 All at Once with Microsoft’s Convenience Rollup"),")"),"\n"),"\n",a.createElement(t.h2,null,"การใช้งาน"),"\n",a.createElement(t.h3,null,"วิดีโอสาธิตการใช้งาน"),"\n",a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/MZyYe3mMW4U",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",a.createElement(t.h3,null,"ขั้นตอนการใช้งาน"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"ทำการ Print ผลการตรวจจากโปรแกรมของ InBody 230 เป็น PDF โดยใช้ PDF Printer เช่น Microsoft Print To PDF, Adobe PDF Printer, novaPDF, doPDF เป็นต้น ใส่โฟล์เดอร์ไว้ โดยสามารถตั้งชื่อไฟล์อย่างไรก็ได้เพียงแต่ต้องไม่ซ้ำกัน (ถ้าซ้ำกันมันก็บันทึกทับไฟล์เดิม 😖)"),"\n",a.createElement(t.li,null,"เปิดโปรแกรมจากนั้นเลือกโฟล์เดอร์ที่เก็บไฟล์ PDF เหล่านี้ไว้"),"\n"),"\n",a.createElement(r.p,{name:"2.png"}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"กดดึงข้อมูลจาก PDF โปรแกรมจะทำการดึงข้อมูลจากทุกไฟล์ โดยสามารถดูเปรียบเตรียมข้อมูลที่ดึงออกมากับไฟล์ต้นฉบับได้ โดยสามารถแก้ไขข้อมูลที่ดึงออกมาได้ด้วย"),"\n"),"\n",a.createElement(r.p,{name:"3.png"}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"ไฟล์ Excel ที่ส่งออกมาจะมีข้อมูลที่นำออกมาจากไฟล์ PDF สามารถนำไปวิเคราะห์อื่นๆ ต่อได้"),"\n"),"\n",a.createElement(r.p,{name:"4.png"}),"\n",a.createElement(t.h2,null,"ดาวน์โหลด"),"\n",a.createElement(t.p,null,"สามารถดาวน์โหลดโปรแกรมได้จาก OneDrive ของผม"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://1drv.ms/u/s!AnqXyzBKVJbomrAtXrnZhobYEyeCQg?e=D5kerI"},"InBodyPDFExtractor 1.1.0 win-x64")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://1drv.ms/u/s!AnqXyzBKVJbomrAuFx1oJJxUJ0J_WQ?e=lhLhQy"},"InBodyPDFExtractor 1.1.0 win-x86")),"\n"),"\n",a.createElement(t.h2,null,"เบื้องหลังการพัฒนา"),"\n",a.createElement(t.p,null,"พัฒนาโดยใช้ Microsoft Visual Studio 2022 Preview โดยใช้ภาษา C# และใช้ UI Framework คือ WPF (Windows Presentation Foundation) เนื่องจากต้องการให้มันสามารถใช้งานได้ใน Windows 7 SP1 โดยใช้ Lib ชื่อ ",a.createElement(t.a,{href:"https://github.com/lepoco/wpfui"},"WPF-UI ")," และ ",a.createElement(t.a,{href:"https://www.reactiveui.net/"},"ReactiveUI")),"\n",a.createElement(t.h3,null,"Source Code"),"\n",a.createElement(t.p,null,"สามารถดูได้ที่ GitHub ของผม ",a.createElement(t.a,{href:"https://github.com/Lukespacewalker/InBodyPDFExtractor"},"InBodyPDFExtractor")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)},o=n(4578),s=n(2825),m=n(3723),u=n(4624),d=n(704),h=n(1252),p=n(3125),E=n(3565);let g=function(e){function t(t){var n;return(n=e.call(this,t)||this).useTOC=!1,"undefined"!=typeof window&&(n.target=decodeURIComponent(window.location.hash),n.target=n.target.replace("#",""),window.location.hash=""),n}(0,o.Z)(t,e);var n=t.prototype;return n.renderAuthors=function(e){const t=e.map(((e,t)=>{const n=e.position.map(((e,t)=>a.createElement("div",{key:t},e)));return a.createElement("div",{className:"author",key:t},a.createElement("div",{className:"image-container"},a.createElement(m.G,{image:e.avatar.childImageSharp.gatsbyImageData,style:{borderRadius:"50%"},alt:e.name})),a.createElement("div",{className:"title-container"},e.name),a.createElement("div",{className:"positions-container"},n))}));return a.createElement("div",{className:"author-container"},t)},n.renderTOCItem=function(e,t){void 0===t&&(t=0);const n=e.map(((e,n)=>null!=e.items&&e.items.length>0?a.createElement(p.k,{key:t+n,title:e.title,url:e.url},this.renderTOCItem(e.items,100*n)):a.createElement("li",{key:t+n},a.createElement("a",{href:e.url,onClick:d.ZP},e.title))));return a.createElement("ul",null,n)},n.renderTOC=function(e){return e.length>0?a.createElement("div",{id:"toc",className:"toc-container"},this.renderTOCItem(e)):""},n.componentDidMount=function(){""!==this.target?(0,d.E6)(this.target):this.target=""},n.render=function(){console.log(this.props);const{data:{mdx:{tableOfContents:{items:e},frontmatter:{title:t,type:n,background:r,images:i,date:c,authors:o,excerpt:d}}}}=this.props,g=o,w=e;let f=a.createElement("div",null);return null==g&&null==w||(f=a.createElement(a.Fragment,null,null!=g?this.renderAuthors(g):"",null!=w?this.renderTOC(w):"")),a.createElement(h.B,{title:t,tagLine:c,GatsyImageElement:a.createElement(m.G,{image:(0,m.c)(r),alt:t}),aside:f},null!=d?a.createElement(s.H,{title:t,description:d,imageUrl:r.publicURL,imageWidth:r.childImageSharp.original.width,imageHeight:r.childImageSharp.original.height}):a.createElement(s.H,{title:t,description:d}),a.createElement("div",{className:"MDXRenderer-body"},a.createElement(l.Zo,{components:{h1:e=>a.createElement(p.H1,Object.assign({useToc:this.useTOC},e)),h2:e=>a.createElement(p.H2,Object.assign({useToc:this.useTOC},e)),h3:e=>a.createElement(p.H3,Object.assign({useToc:this.useTOC},e)),h4:e=>a.createElement(p.H4,Object.assign({useToc:this.useTOC},e)),pre:u.S}},a.createElement(E.p.Provider,{value:{imagesList:i}},this.props.children))))},t}(a.Component);function w(e){return a.createElement(g,e,a.createElement(c,e))}},7510:function(e,t,n){n.d(t,{p:function(){return i}});var l=n(7294),a=n(3723),r=n(3565);const i=e=>{var t,n;let{imageList:i,mode:c="block",className:o="",name:s,alt:m="",caption:u,...d}=e;i=null!==(t=i)&&void 0!==t?t:l.useContext(r.p).imagesList;const h=null===(n=i)||void 0===n?void 0:n.find((e=>(null==e?void 0:e.name)===s.substring(0,s.lastIndexOf("."))));return null!=h&&void 0!==h?l.createElement("div",{className:"image-container"},l.createElement("div",{className:o+" "+c},l.createElement(a.G,Object.assign({image:h.childImageSharp.gatsbyImageData},d,{alt:m})),u&&l.createElement("div",{className:"text-center"},u))):l.createElement("div",{className:"p-6 font-bold"},s," is not exist")}}}]);