"use strict";(self.webpackChunke_top_project=self.webpackChunke_top_project||[]).push([[841],{5841:(x,c,a)=>{a.r(c),a.d(c,{DetailsModule:()=>f});var s=a(6895),p=a(1983),t=a(8256),d=a(5830),l=a(910);function g(n,o){1&n&&t._UZ(0,"i",10)}function u(n,o){1&n&&(t.TgZ(0,"b"),t._uU(1," BUY "),t.qZA())}const m=[{path:"",component:(()=>{class n{constructor(e,i,r){this.route=e,this.api=i,this.cartServices=r,this.data=[],this.cartproducts=[],this.addbutton=!1,this.buy=!1,this.item=new t.vpe}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.getproductid()}getproductid(){this.api.getproductbyid(this.id).subscribe(e=>this.data=e)}add(){this.cartServices.addProduct(this.data)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.gz),t.Y36(d.s),t.Y36(l.N))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-details"]],decls:18,vars:7,consts:[[1,"margin-top"],[1,"all-contetn"],[1,"img"],["alt","",3,"src"],[1,"text"],["routerLink","/products",1,"btn","btn-outline-dark","btn1"],[1,"description"],[1,"btn","btn-outline-dark","btn2",3,"click"],["class","fa-solid fa-check",4,"ngIf"],[4,"ngIf"],[1,"fa-solid","fa-check"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"button",5),t._uU(6),t.qZA(),t.TgZ(7,"h1"),t._uU(8),t.qZA(),t.TgZ(9,"p",6),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12," Price : "),t.TgZ(13,"b"),t._uU(14),t.qZA()(),t.TgZ(15,"button",7),t.NdJ("click",function(){return i.add()})("click",function(){return i.addbutton=!0})("click",function(){return i.buy=!1}),t.YNc(16,g,1,0,"i",8),t.YNc(17,u,2,0,"b",9),t.qZA()()()()),2&e&&(t.xp6(3),t.s9C("src",i.data.image,t.LSH),t.xp6(3),t.hij(" ",i.data.category," "),t.xp6(2),t.Oqu(i.data.title),t.xp6(2),t.Oqu(i.data.description),t.xp6(4),t.hij(" ",i.data.price,"$"),t.xp6(2),t.Q6J("ngIf",i.addbutton),t.xp6(1),t.Q6J("ngIf",!i.addbutton))},dependencies:[s.O5,p.rH],styles:["h1[_ngcontent-%COMP%]{text-transform:capitalize;width:400px;margin:30px 0}.description[_ngcontent-%COMP%]{width:400px;margin:30px 0}.margin-top[_ngcontent-%COMP%]{margin-top:150px;display:flex;padding:20px}.all-contetn[_ngcontent-%COMP%]{display:flex;margin:20px;flex-wrap:wrap;width:100vw;align-items:center}img[_ngcontent-%COMP%]{width:400px;height:300px}.img[_ngcontent-%COMP%]{margin:10px 100px}.btn2[_ngcontent-%COMP%]{background-color:#9683ec!important;border:#7386d5;color:#f5f5f5;font-weight:400;width:400px}@media (max-width: 576px){h1[_ngcontent-%COMP%]{text-transform:capitalize;width:350px;margin:10px 0}.description[_ngcontent-%COMP%]{width:350px;margin:10px 0}.margin-top[_ngcontent-%COMP%]{margin-top:50px;display:flex;padding:10px}.all-contetn[_ngcontent-%COMP%]{display:flex;margin:10px;flex-wrap:wrap;width:100vw;align-items:center}img[_ngcontent-%COMP%]{width:350px;height:300px}.img[_ngcontent-%COMP%]{margin:20px 00px}.btn2[_ngcontent-%COMP%]{background-color:#9683ec!important;border:#7386d5;color:#f5f5f5;font-weight:400;width:350px}}"]}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(m),p.Bz]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,h]}),n})()}}]);