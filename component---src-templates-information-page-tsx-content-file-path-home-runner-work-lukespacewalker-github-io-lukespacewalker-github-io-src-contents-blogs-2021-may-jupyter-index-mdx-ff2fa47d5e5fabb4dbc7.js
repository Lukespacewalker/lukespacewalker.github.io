"use strict";(self.webpackChunksuttisak_personal_site=self.webpackChunksuttisak_personal_site||[]).push([[213],{9621:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(6410),l=n(7294),r=n(7510);function i(e){var t=Object.assign({p:"p",h1:"h1",h2:"h2",ol:"ol",li:"li",a:"a",pre:"pre",code:"code"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"แนะนำการติดตั้ง Python + Jupyter Lab และการใช้งานผ่าน Visual Studio Code บน Windows 10"),"\n",l.createElement(t.h1,null,"เตรียมการติดตั้ง"),"\n",l.createElement(t.h2,null,"โปรแกรมที่จำเป็น"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://code.visualstudio.com/"},"Visual Studio Code")),"\n"),"\n",l.createElement(t.h2,null,"โปรแกรมที่ควรมีก่อนการติดตั้ง"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.microsoft.com/store/productId/9N8G5RFZ9XK3"},"Windows Terminal")),"\n"),"\n",l.createElement(t.h1,null,"ขั้นตอนการติดตั้ง"),"\n",l.createElement(t.h2,null,"ติดตั้ง Python 3.9 ผ่าน Microsoft Store"),"\n",l.createElement(r.p,{name:"step1-installpython.png"}),"\n",l.createElement(t.p,null,"หลังติดตั้งแล้วให้ทำการตรวจสอบ Version ดู"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"python --version\n")),"\n",l.createElement(r.p,{name:"step2-checkpython.png"}),"\n",l.createElement(t.h2,null,"ติดตั้ง Jupyter Labs"),"\n",l.createElement(t.p,null,"ติดตั้งผ่าน Windows Terminal หรือ Command Prompt"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"pip install jupyterlab\n")),"\n",l.createElement(t.p,null,"หลังจากติดตั้งแล้ว ให้ทดลองรันโดยใช้"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"jupyter lab\n")),"\n",l.createElement(t.p,null,"หากไม่สามารถรันได้ โดยแจ้งข้อความผิดผลาดที่ว่าไม่พบคำสั่ง jupyter นั้นอาจเกิดจากตัวติดตั้งไม่ได้เพิ่ม Environmental variables ให้ตรวจสอบที่อยู่ของ Jupyter.exer ก่อน โดย Python Script ที่ติดตั้งจาก Pip จะไปอยู่ที่"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"C:\\Users\\<User-Name>\\AppData\\Local\\Packages\\PythonSoftwareFoundation.Python.3.9_qbz5n2kfra8p0\\LocalCache\\local-packages\\Python39\\Scripts\n")),"\n",l.createElement(r.p,{name:"step3-checkpath.png"}),"\n",l.createElement(t.p,null,"เมื่อเจอกับไฟล์ ",l.createElement(t.code,null,"jupyter.exe")," ในโฟล์เดอร์นี้แล้วให้ทำการเพิ่ม Environmental variables โดยเพิ่มไปที่ System variables ที่ชื่อว่า Path ตามรูป"),"\n",l.createElement(r.p,{name:"step3-addpath.png"}),"\n",l.createElement(r.p,{name:"step3-addpath2.png"}),"\n",l.createElement(t.p,null,"จากนั้นให้ปิด Command Prompt / Windows Terminal แล้วเปิดใหม่เพื่อให้มันโหลด Environmental variables แล้วรัน ",l.createElement(t.code,null,"jupyter lab")," อีกครั้ง จะได้แบบนี้"),"\n",l.createElement(r.p,{name:"step4-run.png"}),"\n",l.createElement(t.p,null,"ให้คลิก URL ที่มันบอกเพื่อเปิด Jupyter Lab ใน Browser"),"\n",l.createElement(r.p,{name:"step4-jupyter.png"}),"\n",l.createElement(t.h1,null,"ติดตั้ง Libaries ที่จำเป็น"),"\n",l.createElement(t.h2,null,l.createElement(t.a,{href:"https://pandas.pydata.org/docs/getting_started/install.html#dependencies"},"Panda")),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"pip install pandas\n")),"\n",l.createElement(t.h2,null,l.createElement(t.a,{href:"https://plotly.com/python/getting-started/"},"Plotly")),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"pip install plotly\npip install jupyterlab ipywidgets\njupyter labextension install jupyterlab-plotly\njupyter labextension install @jupyter-widgets/jupyterlab-manager plotlywidget\n")),"\n",l.createElement(t.h1,null,"Visual Studio Code"),"\n",l.createElement(t.p,null,"ทำการติดตั้ง Extension ชื่อ Python Pylance และ Jupyter"),"\n",l.createElement(r.p,{name:"step5-vsextension.png"}),"\n",l.createElement(t.p,null,"จากนั้นกด Control+Shift+P เพื่อเปิด Command Pane แล้วพิมพ์ Jupyter แล้วเลือก Create New Blank Notebook ก็เรียบร้อย"),"\n",l.createElement(r.p,{name:"step5-add.png"}))}var c=function(e){void 0===e&&(e={});var t=Object.assign({},(0,a.ah)(),e.components).wrapper;return t?l.createElement(t,e,l.createElement(i,e)):i(e)},o=n(1721),m=n(7959),s=n(6296),u=n(8668),p=n(704),d=n(1252),E=n(3125),h=n(3565),g=function(e){function t(t){var n;return(n=e.call(this,t)||this).useTOC=!1,"undefined"!=typeof window&&(n.target=decodeURIComponent(window.location.hash),n.target=n.target.replace("#",""),window.location.hash=""),n}(0,o.Z)(t,e);var n=t.prototype;return n.renderAuthors=function(e){var t=e.map((function(e,t){var n=e.position.map((function(e,t){return l.createElement("div",{key:t},e)}));return l.createElement("div",{className:"author",key:t},l.createElement("div",{className:"image-container"},l.createElement(s.G,{image:e.avatar.childImageSharp.gatsbyImageData,style:{borderRadius:"50%"},alt:e.name})),l.createElement("div",{className:"title-container"},e.name),l.createElement("div",{className:"positions-container"},n))}));return l.createElement("div",{className:"author-container"},t)},n.renderTOCItem=function(e,t){var n=this;void 0===t&&(t=0);var a=e.map((function(e,a){return null!=e.items&&e.items.length>0?l.createElement(E.k,{key:t+a,title:e.title,url:e.url},n.renderTOCItem(e.items,100*a)):l.createElement("li",{key:t+a},l.createElement("a",{href:e.url,onClick:p.ZP},e.title))}));return l.createElement("ul",null,a)},n.renderTOC=function(e){return e.length>0?l.createElement("div",{id:"toc",className:"toc-container"},this.renderTOCItem(e)):""},n.componentDidMount=function(){""!==this.target?(0,p.E6)(this.target):this.target=""},n.render=function(){var e=this;console.log(this.props);var t=this.props.data.mdx,n=t.tableOfContents.items,r=t.frontmatter,i=r.title,c=(r.type,r.background),o=r.images,p=r.date,g=r.authors,y=r.excerpt,v=g,f=n,b=l.createElement("div",null);return null==v&&null==f||(b=l.createElement(l.Fragment,null,null!=v?this.renderAuthors(v):"",null!=f?this.renderTOC(f):"")),l.createElement(d.B,{title:i,tagLine:p,GatsyImageElement:l.createElement(s.G,{image:(0,s.c)(c),alt:i}),aside:b},null!=y?l.createElement(m.H,{title:i,description:y,imageUrl:c.publicURL,imageWidth:c.childImageSharp.original.width,imageHeight:c.childImageSharp.original.height}):l.createElement(m.H,{title:i,description:y}),l.createElement("div",{className:"MDXRenderer-body"},l.createElement(a.Zo,{components:{h1:function(t){return l.createElement(E.H1,Object.assign({useToc:e.useTOC},t))},h2:function(t){return l.createElement(E.H2,Object.assign({useToc:e.useTOC},t))},h3:function(t){return l.createElement(E.H3,Object.assign({useToc:e.useTOC},t))},h4:function(t){return l.createElement(E.H4,Object.assign({useToc:e.useTOC},t))},pre:u.S}},l.createElement(h.p.Provider,{value:{imagesList:o}},this.props.children))))},t}(l.Component);function y(e){return l.createElement(g,e,l.createElement(c,e))}},7510:function(e,t,n){n.d(t,{p:function(){return o}});var a=n(3366),l=n(7294),r=n(6296),i=n(3565),c=["imageList","mode","className","name","alt","caption"],o=function(e){var t,n,o=e.imageList,m=e.mode,s=void 0===m?"block":m,u=e.className,p=void 0===u?"":u,d=e.name,E=e.alt,h=void 0===E?"":E,g=e.caption,y=(0,a.Z)(e,c),v=null===(n=o=null!==(t=o)&&void 0!==t?t:l.useContext(i.p).imagesList)||void 0===n?void 0:n.find((function(e){return e.name===d.substring(0,d.lastIndexOf("."))}));return v&&l.createElement("div",{className:"image-container"},l.createElement("div",{className:p+" "+s},l.createElement(r.G,Object.assign({image:v.childImageSharp.gatsbyImageData},y,{alt:h})),g&&l.createElement("div",{className:"text-center"},g)))}}}]);