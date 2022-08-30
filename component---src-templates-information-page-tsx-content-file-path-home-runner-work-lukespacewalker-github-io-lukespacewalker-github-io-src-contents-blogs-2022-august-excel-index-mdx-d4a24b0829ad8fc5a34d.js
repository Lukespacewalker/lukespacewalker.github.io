"use strict";(self.webpackChunksuttisak_personal_site=self.webpackChunksuttisak_personal_site||[]).push([[24],{1025:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var l=t(6410),a=t(7294),r=t(7510);function c(e){var n=Object.assign({p:"p",strong:"strong",a:"a",h1:"h1",h2:"h2",code:"code",hr:"hr",h3:"h3"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.p,null,a.createElement(n.strong,null,"วิธีการใช้งานและรูปภาพทั้งหมดมาจาก Microsoft Excel ที่เป็นส่วนหนึ่งของ Microsoft Office 365 หากคุณใช้ Excel รุ่นเก่ากว่านี้ หรือไม่ใช่รุ่น 365 อาจมีหน้าจอโปรแกรมที่แตกต่าง และอาจไม่มีบางฟังก์ชัน")),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Work-in-progress")),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"ดูไฟล์ตัวอย่างได้ที่ ",a.createElement(n.a,{href:"https://1drv.ms/x/s!AnqXyzBKVJbomsxqj2p9mc1oUADNKw?e=qrVcdT"},"https://1drv.ms/x/s!AnqXyzBKVJbomsxqj2p9mc1oUADNKw?e=qrVcdT"))),"\n",a.createElement(n.h1,null,"คำศัพท์"),"\n",a.createElement(n.p,null,"Range หมายถึงการระบุ Cell ที่อาจจะมี 1 หรือหลาย Cell ก็ได้ โดยใช้ A1 Notation เช่น A1:C3"),"\n",a.createElement(n.h1,null,"พื้นฐาน"),"\n",a.createElement(n.h2,null,"Relative vs Absolute reference"),"\n",a.createElement(n.p,null,"การใช้งาน Formula ใน Excel นั้นจะมีการอ้างถึง Cell เช่น ",a.createElement(n.code,null,"=A1+B2")," ซึ่งการอ้างแบบนี้คือการอ้างแบบ Relative โดยเวลาเรา Drag Cell เช่น Cell C2 ลงมาถึง C7 จะเห็นว่า Formula จะเปลี่ยนไปเรื่อยเป็น ",a.createElement(n.code,null,"=A7+B7")," เวลาเราอ้างอิงถึง Cell จะมีการอ้างทั้งแบบ Relative reference ดังรูป โดยเวลาเรา Drag cell นั้น Cell ที่อ้างถึงจะเลื่อนตามไปด้วย"),"\n",a.createElement(r.p,{name:"relative-ref-1.png"}),"\n",a.createElement(r.p,{name:"relative-ref-2.png"}),"\n",a.createElement(n.p,null,"ในขณะที่เป็น Absolute reference นั้น เวลาเรา Drag cell ที่ Formula"),"\n",a.createElement(r.p,{name:"absolute-ref-1.png"}),"\n",a.createElement(r.p,{name:"absolute-ref-2.png"}),"\n",a.createElement(n.h2,null,"การจัดความกว้างของ Cell"),"\n",a.createElement(n.p,null,"สามารถจัด Dimension ของ Row และ Column แบบอัติโนมัติได้"),"\n",a.createElement(r.p,{name:"basic-format-cell-dimension.png"}),"\n",a.createElement(n.h1,null,"Table"),"\n",a.createElement(n.p,null,"การกำหนด Range ให้กลายเป็น Table นั้นมีประโญชน์คือทำให้การกระทำใดๆ ก็ตามที่มองข้อมูลเป็น Row เหมือนเป็นฐานข้อมูลนั้นทำได้ง่ายขึ้น (ลองนึกถึง DataFrame ใน Pandas หรือ SPSS หรือ Stata หรือ Relational Database )"),"\n",a.createElement(n.h2,null,"การกำหนด Cell ทีต้องการให้เป็น Table และการเปลี่ยน Table กับไปเป็น Cell ปกติ"),"\n",a.createElement(n.p,null,"Drag cells ที่ต้องการทำให้เป็น Table จากนั้นกด Format as a table จากนั้นตรวจสอบ Range อีกครั้งและดูว่า Cells มี Header หรือไม่ โดยข้อความใน Header นี้ต้องไม่ซ้ำกัน จากนั้นกด Ok"),"\n",a.createElement(n.h2,null,"การปรับเปลี่ยนขนาด Table"),"\n",a.createElement(n.p,null,"สามารถทำได้โดยคลิกที่ Cell ในก็ได้ใน Table แล้วเลือก Table tab จาก Ribbon จากนั้นกด Resize table"),"\n",a.createElement(r.p,{name:"table-resize-1.png",caption:"ปุ่ม Resize ที่อยู่ตรง Table tab"}),"\n",a.createElement(r.p,{name:"table-resize-2.png",caption:"ระบุ Range (โดยการพิมพ์หรือ Drag) ของ Table ใหม่ที่ต้องการ โดยต้อง Overlap กับส่วนเดิม"}),"\n",a.createElement(n.p,null,"หรือ Drag ที่บริเวณมุมขวาล่างของ Table เพื่อปรับขนาด"),"\n",a.createElement(r.p,{name:"table-resize-2.1.png",caption:"Drag บริเวณเครื่องหมายบวกตรงมุมขวาล่างของ Table"}),"\n",a.createElement(n.p,null,"ก็ได้จะ Table ขนาดใหม่ตามที่ต้องการ"),"\n",a.createElement(r.p,{name:"table-resize-3.png",caption:"Table ขนาดใหม่"}),"\n",a.createElement(n.h2,null,"Formula ใน Table"),"\n",a.createElement(n.p,null,"เมื่อ Format cells เป็น Table แล้ว การใช้งาน Formula ใน Table จะง่ายขึ้นสำหรับ Formula ที่อ้างอิง Cell อื่นๆ ที่อยู่ใน Row เดียวกัน"),"\n",a.createElement(n.p,null,"โดยแทนที่จะเป็น A1 Notation จะการเป็น [@[Header1]:@[Header2]] แทน ซึ่งจะหมายถึงการอ้างอิงถึงค่าใน Cell ที่มี Header"),"\n",a.createElement(r.p,{name:"formula-table-1.png",caption:"Formula ใน Table จะเปลี่ยนแปลงรูปแบบไป"}),"\n",a.createElement(n.p,null,"เมื่อเราใส่ Formula ในบรรทัดแรกแล้ว เราสามารถจะ Fill in cell ที่เหลือใน Column นั้นได้โดยตรง โดยการ Drag ลงมาหรือกดจาก Auto correct ก็ได้"),"\n",a.createElement(r.p,{name:"formula-table-2.png",caption:"Formula ที่ Fill in เรียบร้อย"}),"\n",a.createElement(n.p,null,"จะเห็นว่า Formula ของทุก Cell นั้นเหมือนกัน เพราะมันอ้างถึง Cell ที่ยังอยู่ใน Row เดียวกัน แค่ต่าง Column กันเท่านั้น"),"\n",a.createElement(n.hr),"\n",a.createElement(n.h1,null,"การทำความสะอาดข้อมูลด้วย Excel"),"\n",a.createElement(n.h2,null,"ใช้ ",a.createElement(n.code,null,"CONVERT()")," ในแปลงหน่วยข้อมูล"),"\n",a.createElement(n.p,null,"รองรับหลายหน่วยวัดเช่นความยาวปริมาณน้ำหนักความเร็วพลังงานเป็นต้น"),"\n",a.createElement(r.p,{name:"clean-unit-conversion.png",caption:"ตัวอย่างการแปลงหน่วย"}),"\n",a.createElement(n.h2,null,"การใช้ Find and Replace ในการลบอักขระที่ไม่จำเป็นออกจากข้อความ"),"\n",a.createElement(n.p,null,"บางครั้งเราต้องการลบขระบางอย่างออกจากข้อความทั้งหมดอย่างถาวร การใช้ Find and replace เป็นวิธีการนึงที่ดี ซึ่งเหมาะกับการลบอักขระเช่น ",a.createElement(n.code,null,"U+200B Zero-width space")," เป็นต้น\nให้เปิด Find and Replace (กด Ctrl+F) จากนั้น พิมพ์ข้อความที่ต้องการหาและแทนที โดยในกรณีของ Unicode ที่มองไม่เห็นเช่น ",a.createElement(n.code,null,"U+200B")," แนะนำให้ใช้ เว็บ ",a.createElement(n.a,{href:"https://unicode-table.com/en/200B/"},"https://unicode-table.com/en/200B/")," แล้วทำการคัดลอกอักขระมาใส่ใน Find and Replace"),"\n",a.createElement(r.p,{name:"clean-find-replace.png",caption:"อักขระพิเศษ และการใช้ Find and replace"}),"\n",a.createElement(n.h2,null,"การใช้ ",a.createElement(n.code,null,"CLEAN()")," ",a.createElement(n.code,null,"TRIM()")," ",a.createElement(n.code,null,"SUBSTITUTE()")," ",a.createElement(n.code,null,"UNICHAR()")," ",a.createElement(n.code,null,"HEX2DEC()")," เพื่อลบช่องว่างและอักขระส่วนเกิน"),"\n",a.createElement(n.p,null,"เวลาเรารับข้อมูลมาจากผู้ใช้เช่น Google Form / Microsoft Form เรามีความจำเป็นต้องทำความสะอาดข้อมูลก่อน โดยเฉพาะข้อมูลที่เป็น String (ข้อความ) เช่น การลบช่องว่างหรืออักขระส่วนเกินออก"),"\n",a.createElement(n.p,null,"โดยเราจะใช้ Formula เหล่านี้ในการจัดการข้อมูลที่เป็น String"),"\n",a.createElement(n.h3,null,a.createElement(n.code,null,"TRIM()")),"\n",a.createElement(n.p,null,"เป็นการลบช่องว่างที่อยู่หน้าและหลังข้อความ และลดช่องว่างระหว่างข้อความให้เหลือ 1 ช่องเท่านั้น"),"\n",a.createElement(n.h3,null,a.createElement(n.code,null,"CLEAN()")),"\n",a.createElement(n.p,null,"เป็นการลบอักขระ ASCII ที่มีหมายเลข (Decimal) 0-31 ซึ่งเป็นอักขระที่ print ไม่ได้ ออกไปจากข้อมูล"),"\n",a.createElement(n.h3,null,a.createElement(n.code,null,"SUBSTITITE()")),"\n",a.createElement(n.p,null,"เป็นการแทนที่ข้อความที่ที่ค้นหาด้วยข้อความใหม่ทุกตำแหน่งของ String นั้นๆ โดยเราจะใช้ Fuction นี้การลบอักขระอื่นๆ ที่ ",a.createElement(n.code,null,"CLEAN()")," ไม่ได้ลบ โดยหากเราต้องการลบอักขระพิเษศที่ไม่มีบน Keyboard เราสามารถใช้ Unicode Number แทนได้ โดยใช้ ",a.createElement(n.code,null,"UNICHAR()")," ซึ่งจะแปลง Unicode Number ที่เป็น Decimal เป็นตัวขระนั้นๆ แต่โดยปกติเวลาเราดูตาราง Unnicode มันจะเป็น Hexdecimal ดังนั้นเราสามารถใช้ ",a.createElement(n.code,null,"HEX2DEC()")," ในการแปลงเลขฐาน 16 เป็น ฐาน 10 ก่อน ได้"),"\n",a.createElement(n.p,null,"เช่น ",a.createElement(n.code,null,'=UNICHAR(HEX2DEC("0042"))')," คือ ",a.createElement(n.code,null,"B")),"\n",a.createElement(n.p,null,"ที่นี้ในตัวอย่างถ้าเราจะต้องกำจัดช่องว่างส่วนเกิน และอักขระ ",a.createElement(n.code,null,"U+200B Zero-width space")," เราจะใช้ Formula เช่น ",a.createElement(n.code,null,'=TRIM(SUBSTITUTE(CLEAN(B2),UNICHAR(HEX2DEC("200B")),""))')),"\n",a.createElement(r.p,{name:"clean-formula.png",caption:"การใช้ Formula ในการ Clean"}),"\n",a.createElement(n.h2,null,"การแยกข้อความให้จาก 1 Column เป็นหลาย Columns"),"\n",a.createElement(n.p,null,"บางครั้งข้อมูล เช่น ชื่อ นามสกุล ดันพิพม์มาใน Cell เดียวกันแต่แยกด้วยช่องว่าง เราสามารถแยกเป็น 2 Cells ได้ ได้โดยใช้ ",a.createElement(n.code,null,"TEXTSPLIT()")," หรือใช้ Ribbon > Data tab > Text-to-column ก็ได้ (แต่ Text-to-column นั้นไม่สามารถใช้กับ Cell ที่ค่าของมันเกิดจากสูตรได้ ต้องทำการคัดลอกแล้ว Paste values ก่อนถึงจะสามารถใช้ได้ ไม่งั้นมันเป็นการพยายามแยกข้อความจากสูตร ไม่ใช่ข้อความจริงๆ) โดยทั้งสองวิธีไม่สามารถใช้กับ Table ได้ (จะเห็นว่าในตัวอย่างไม่ใช่ Table สังเกตุได้จากไม่มี Table Format tab ที่ Ribbon เวลาคลิก)"),"\n",a.createElement(r.p,{name:"clean-text-split.png",caption:"การแยกข้อความเป็นหลาย Cell โดยใช้ Formula"}),"\n",a.createElement(n.p,null,"จะเห็นว่าข้อความที่แยกจะ Spill ไปยัง Column ถัดไป ที่นี้ลองมาดูการแยกโดยใน Text-to-column"),"\n",a.createElement(r.p,{name:"clean-text-to-column-1.png"}),"\n",a.createElement(r.p,{name:"clean-text-to-column-2.png"}),"\n",a.createElement(r.p,{name:"clean-text-to-column-3.png"}),"\n",a.createElement(r.p,{name:"clean-text-to-column-4.png"}),"\n",a.createElement(r.p,{name:"clean-text-to-column-5.png"}),"\n",a.createElement(n.h2,null,"การจัดการแถวที่ข้อมูลซ้ำกัน"),"\n",a.createElement(n.p,null,"โดยการลบนั้นระบบจะลบทั้งแถวที่มีข้อมูลเราใช้ตัดสินใจว่าข้อมูลซ้ำกัน โดยเหลือเฉพาะแถวแรกไส้เท่านั้น ดังนั้นหากเราจะ Keep-first หรือ Keep-last data เราจะต้องทำการเรียงข้อมูลก่อน โดยเรียงโดยใช้ Columns ที่สามารถใช้บอกว่าข้อมูลนี้กรอกเข้ามาก่อนหลังได้ เช่น EntryId EntryDate เป็นต้น"),"\n",a.createElement(n.p,null,"เช่น ต้องการ Keep-last ข้อมูลการฉีดวัคซีน เราก็จะเรียงข้อมูล Entry Id จาก มากไปหาน้อย"),"\n",a.createElement(r.p,{name:"clean-remove-dup.png",caption:"เรียก Entry Id จากมากไปน้อย"}),"\n",a.createElement(n.h3,null,"Filter แถวข้อมูล"),"\n",a.createElement(r.p,{name:"clean-filter-dup.png",caption:"Filter แถวข้อมูล"}),"\n",a.createElement(n.p,null,"จะเห็นว่าบางแถวถูกซ่อนแต่แถวมันยังคงอยู่เห็นได้จากจำนวนแถวข้อมูลที่ยังเท่าเดิม"),"\n",a.createElement(r.p,{name:"clean-filter-dup-1.png",caption:"หลังการ Filter แถวข้อมูล จะเห็นว่าข้อมูลยังคงอยู่ 7 แถว เหมือนเดิม"}),"\n",a.createElement(n.h3,null,"ลบแถวข้อมูล"),"\n",a.createElement(n.p,null,"แนะนำว่าเราอาจ Format สีพื้นหลังเพื่อแสดงให้เห็นแถวที่ Duplicate ก่อน เพื่อที่เราจะได้บอกพอได้ว่าแถวไหนบ้างที่จะถูกลบแถวที่ซ้ำออกไป โดยกดที่ Ribbon > Home > Conditional Formating"),"\n",a.createElement(r.p,{name:"clean-remove-dup-0.5.png",caption:"Format สีพื้นหลัง"}),"\n",a.createElement(n.p,null,"จากนั้นเราค่อยทำการลบข้อมูลออกจริง โดยไปที่ Ribbon > Data > Remove duplicates จากนั้นเลือกเฉพาะ Column ที่จะพิจารณาว่ามีข้อมูลซ้ำ อย่างในกรณีนี้คือ SSO"),"\n",a.createElement(r.p,{name:"clean-remove-dup-1.png",caption:"เลือก Columns"}),"\n",a.createElement(r.p,{name:"clean-remove-dup-2.png",caption:"ข้อมูลลดเหลือ 5 แถว"}),"\n",a.createElement(n.h1,null,"Formula"),"\n",a.createElement(n.h2,null,"การเว้นบรรทัดในช่อง Formula"),"\n",a.createElement(n.p,null,"เมื่อต้องพิมพ์ Formula ที่ยาวหรือซับซ้อน เช่น การใช้ ",a.createElement(n.code,null,"IF()")," ซ้อนกันหลายครั้ง"),"\n",a.createElement(r.p,{name:"formula-line-break.png"}),"\n",a.createElement(n.p,null,"กด ALT+ENTER เพื่อเว้นบรรทัด จะช่วยให้ Formula อ่านได้ง่ายมากขึ้น"),"\n",a.createElement(r.p,{name:"formula-line-break-2.png"}),"\n",a.createElement(n.h2,null,"Formula watch window"),"\n",a.createElement(n.p,null,"ใช้้สำหรับการ Watch ค่าใน Cell ที่เราสนใจว่ามีค่าเปลี่ยนแปลงไปอย่างไร ซึ่งมีประโยขน์ถ้าเราจำเป็นต้องดูค่าจาก Cell หลายจุด หลาย Sheet พร้อมกัน"),"\n",a.createElement(n.p,null,"ใน Formula tab เลือก Watch window จะแสดงหน้าต่าง Watch window ขึ้นมา จากนั้นให้กด Add watch แล้วเลือก Cell ที่ต้องการ Watch สำหรับการยกเลิกการ Monitor ให้กด Delete watch"),"\n",a.createElement(r.p,{name:"formula-watch-windows-1.png",caption:"การเพิ่ม Cell ที่ต้องการ Watch"}),"\n",a.createElement(r.p,{name:"formula-watch-windows-2.png",caption:"หน้าจอ Watch window"}),"\n",a.createElement(n.p,null,"จากนั้นพอเราลองเปลี่ยนข้อมูลดู จะเห็นว่า Cell ซึ่งคำนวนค่าเฉลี่ย BMI ของทุกคน จะมีค่าเปลี่ยนแปลงไปด้วย ทำให้เราไม่ต้องคอยเลื่อนหน้าจอ Sheet ไปดู Cell นั้นๆ เอง"),"\n",a.createElement(r.p,{name:"formula-watch-windows-3.png",caption:"หน้าจอ Watch window ที่แสดงค่าใน Cell ที่เปลี่ยนแปลงไป"}),"\n",a.createElement(n.h2,null,"การตรวจการทำงานของ Formula"),"\n",a.createElement(n.h3,null,"Trace แหล่งข้อมูลและการส่งข้อมูลของ Formula"),"\n",a.createElement(n.p,null,"เราสามารถตรวจสอบการทำงานของ Formula ได้ โดยกดที่ Ribbon > Formula > Trace Precedents กับ Trace Dependents จากนั้นมันจะแสดงลูกศรให้เห็นว่า Formula ในช่องนั้นคำนวณ มาจากข้อมูล ใน Cell ใดบ้างและ จากช่องนี้ถูกส่งไปใช้ ในการคำนวณ ต่อใน Cell ใดบ้างและหากต้องการลบลูกศรสามารถกดที Remove Arrow"),"\n",a.createElement(r.p,{name:"formula-trace.png",caption:"ลูกศรจะปรากฎขึ้นเมื่อกด Trace Precedents กับ Trace Dependents"}),"\n",a.createElement(n.p,null,"นอกจากนี้สามารถให้ Excel แสดงขั้นตอนการคำนวณ Formula ได้ โดยกดที่ Ribbon > Formula > Evaluate Formula"),"\n",a.createElement(r.p,{name:"formula-eval.png",caption:"แสดงขั้นตอนการคำนวน Formula นั้นเป็นลำดับขั้นตอน"}),"\n",a.createElement(n.hr),"\n",a.createElement(n.h1,null,"การรวมข้อมูลจากหลาย Table"),"\n",a.createElement(r.p,{name:"relationship-intro.png",caption:"การรวมข้อมูลโดยใช้ทั้งสองวิธี"}),"\n",a.createElement(n.h2,null,"การใช้ ",a.createElement(n.code,null,"XLOOKUP()")," ในการ Join Table (ซึ่งแนะนำว่าหากมี หลาย Table มากๆ ไม่ควรใช้วิธีนี้)"),"\n",a.createElement(n.h2,null,"การสร้างความสันพันธ์ของข้อมูล เพื่อใช้ใน Pivot Table และ Power Query"),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"แนะนำอย่างมากให้ทำการเปลี่ยนแหล่งของมูลจาก Range เป็น Table ก่อน เพื่อความง่ายในการอ้างอิงและเวลาเราเพิ่มข้อมูล เราจะไม่ต้องมาเปลี่ยน Range ของ DataSource อีก")),"\n",a.createElement(n.p,null,"ต้องเปิด Add-in PowerQuery ก่อน โดยไปที่ Ribbon > File > Options จากนั้นเลือก Add-ins แล้วเลือก COM-Addin แล้วกด Go จากนั้น Tick ถูกที่ Microsoft PowerQuery แล้วกด Ok จะเห็น Power Query เพิ่มขึ้นมาที่ Ribbon"),"\n",a.createElement(r.p,{name:"relationship-addin.png"}),"\n",a.createElement(r.p,{name:"relationship-addin-1.png"}),"\n",a.createElement(n.hr),"\n",a.createElement(n.h1,null,"การวิเคราะห์ข้อมูลด้วย Pivot Table"),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"จำเป็นต้องสร้าง Relationship ของข้อมูลก่อนสร้าง Pivot table ที่ดึงข้อมูลมาจากหลาย Table แต่ถ้าดึงข้อมูลจาก Table/Range ชุดเดียว ไม่ต้องสร้าง Relationship ก็ได้")),"\n",a.createElement(n.h2,null,"การเปลี่ยนโหมดการแสดงผล Pivot table"),"\n",a.createElement(n.p,null,"เปลี่ยนการแสดงผล Pivot table โดยไปที่ Ribbon > Design > Report layout"),"\n",a.createElement(r.p,{name:"pivot-change-layout.png",caption:"เปลี่ยนการแสดงผลของ Pivot Table"}),"\n",a.createElement(n.p,null,"แนะนำให้ใช้ Outline หากต้องการการ Filter ข้อมูลที่ง่าย และ Tabular หากต้องการคัดลอก Values ของ Pivot Table ไปใช้งานต่อ"),"\n",a.createElement(r.p,{name:"pivot-layout-comparison.png",caption:"แสดง Layout ทั้งสามแบบของ Pivot Table"}),"\n",a.createElement(n.hr))}var m=function(e){void 0===e&&(e={});var n=Object.assign({},(0,l.ah)(),e.components).wrapper;return n?a.createElement(n,e,a.createElement(c,e)):c(e)},o=t(1721),i=t(7959),u=t(6296),p=t(8668),E=t(704),s=t(1252),d=t(3125),h=t(3565),g=function(e){function n(n){var t;return(t=e.call(this,n)||this).useTOC=!1,"undefined"!=typeof window&&(t.target=decodeURIComponent(window.location.hash),t.target=t.target.replace("#",""),window.location.hash=""),t}(0,o.Z)(n,e);var t=n.prototype;return t.renderAuthors=function(e){var n=e.map((function(e,n){var t=e.position.map((function(e,n){return a.createElement("div",{key:n},e)}));return a.createElement("div",{className:"author",key:n},a.createElement("div",{className:"image-container"},a.createElement(u.G,{image:e.avatar.childImageSharp.gatsbyImageData,style:{borderRadius:"50%"},alt:e.name})),a.createElement("div",{className:"title-container"},e.name),a.createElement("div",{className:"positions-container"},t))}));return a.createElement("div",{className:"author-container"},n)},t.renderTOCItem=function(e,n){var t=this;void 0===n&&(n=0);var l=e.map((function(e,l){return null!=e.items&&e.items.length>0?a.createElement(d.k,{key:n+l,title:e.title,url:e.url},t.renderTOCItem(e.items,100*l)):a.createElement("li",{key:n+l},a.createElement("a",{href:e.url,onClick:E.ZP},e.title))}));return a.createElement("ul",null,l)},t.renderTOC=function(e){return e.length>0?a.createElement("div",{id:"toc",className:"toc-container"},this.renderTOCItem(e)):""},t.componentDidMount=function(){""!==this.target?(0,E.E6)(this.target):this.target=""},t.render=function(){var e=this;console.log(this.props);var n=this.props.data.mdx,t=n.tableOfContents.items,r=n.frontmatter,c=r.title,m=(r.type,r.background),o=r.images,E=r.date,g=r.authors,b=r.excerpt,C=g,T=t,v=a.createElement("div",null);return null==C&&null==T||(v=a.createElement(a.Fragment,null,null!=C?this.renderAuthors(C):"",null!=T?this.renderTOC(T):"")),a.createElement(s.B,{title:c,tagLine:E,GatsyImageElement:a.createElement(u.G,{image:(0,u.c)(m),alt:c}),aside:v},null!=b?a.createElement(i.H,{title:c,description:b,imageUrl:m.publicURL,imageWidth:m.childImageSharp.original.width,imageHeight:m.childImageSharp.original.height}):a.createElement(i.H,{title:c,description:b}),a.createElement("div",{className:"MDXRenderer-body"},a.createElement(l.Zo,{components:{h1:function(n){return a.createElement(d.H1,Object.assign({useToc:e.useTOC},n))},h2:function(n){return a.createElement(d.H2,Object.assign({useToc:e.useTOC},n))},h3:function(n){return a.createElement(d.H3,Object.assign({useToc:e.useTOC},n))},h4:function(n){return a.createElement(d.H4,Object.assign({useToc:e.useTOC},n))},pre:p.S}},a.createElement(h.p.Provider,{value:{imagesList:o}},this.props.children))))},n}(a.Component);function b(e){return a.createElement(g,e,a.createElement(m,e))}},7510:function(e,n,t){t.d(n,{p:function(){return o}});var l=t(3366),a=t(7294),r=t(6296),c=t(3565),m=["imageList","mode","className","name","alt","caption"],o=function(e){var n,t,o=e.imageList,i=e.mode,u=void 0===i?"block":i,p=e.className,E=void 0===p?"":p,s=e.name,d=e.alt,h=void 0===d?"":d,g=e.caption,b=(0,l.Z)(e,m),C=null===(t=o=null!==(n=o)&&void 0!==n?n:a.useContext(c.p).imagesList)||void 0===t?void 0:t.find((function(e){return e.name===s.substring(0,s.lastIndexOf("."))}));return C&&a.createElement("div",{className:"image-container"},a.createElement("div",{className:E+" "+u},a.createElement(r.G,Object.assign({image:C.childImageSharp.gatsbyImageData},b,{alt:h})),g&&a.createElement("div",{className:"text-center"},g)))}}}]);