"use strict";(self.webpackChunke_top_project=self.webpackChunke_top_project||[]).push([[803],{6803:(x,d,r)=>{r.r(d),r.d(d,{ProductsModule:()=>O});var g=r(6895),s=r(1983),t=r(8256),l=r(5830),f=r(910);let u=(()=>{class e{transform(n,i,c){const a=[];return n&&""!==i&&""!==c?(n.forEach(p=>{p[c].trim().tolowerCase().includes(i.toLowerCase())&&a.push(p)}),a):n}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"filter",type:e,pure:!0}),e})();function P(e,o){if(1&e&&(t.TgZ(0,"option",8),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.s9C("value",n),t.xp6(1),t.hij(" ",n," ")}}function C(e,o){if(1&e&&(t.TgZ(0,"div")(1,"div",9),t._UZ(2,"img",10),t.TgZ(3,"div",11)(4,"h4",12),t._uU(5),t.qZA(),t.TgZ(6,"div",13)(7,"button",14),t._uU(8," BUY "),t.qZA(),t.TgZ(9,"p")(10,"b"),t._uU(11),t.qZA()()()()()()),2&e){const n=o.$implicit;t.xp6(1),t.MGl("routerLink","/details/",n.id,""),t.xp6(1),t.s9C("src",n.image,t.LSH),t.xp6(3),t.hij(" ",n.title," "),t.xp6(2),t.MGl("routerLink","/details/",n.id,""),t.xp6(4),t.hij("",n.price,"$")}}function _(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"h5"),t._uU(3,"PRODUCT OVERVIEW"),t.qZA(),t.TgZ(4,"select",3),t.NdJ("change",function(c){t.CHM(n);const a=t.oxw();return t.KtG(a.filtercategory(c))}),t.TgZ(5,"option",4),t._uU(6,"All Categories"),t.qZA(),t.YNc(7,P,2,2,"option",5),t.qZA()(),t.TgZ(8,"div",6),t.YNc(9,C,12,5,"div",7),t.ALo(10,"filter"),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(7),t.Q6J("ngForOf",n.categories),t.xp6(2),t.Q6J("ngForOf",t.Dn7(10,2,n.product,n.searchKey,"title"))}}const M=[{path:"",component:(()=>{class e{constructor(n,i){this.api=n,this.cartService=i,this.product=[],this.categories=[],this.loading=!1,this.searchKey=""}ngOnInit(){this.get(),this.getcategories(),this.cartService.search.subscribe(n=>{this.searchKey=n})}get(){this.loading=!0,this.api.getall().subscribe(n=>{console.log(n),this.product=n,this.loading=!1})}getcategories(){this.loading=!0,this.api.getcategories().subscribe(n=>{console.log(n),this.categories=n,this.loading=!1})}filtercategory(n){let i=n.target.value;console.log(i),"all"==i?this.get():this.getproductscategory(i)}getproductscategory(n){this.loading=!0,this.api.getproductbyname(n).subscribe(i=>{this.product=i,this.loading=!1})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.s),t.Y36(f.N))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-products"]],decls:1,vars:1,consts:[["class","margin-top",4,"ngIf"],[1,"margin-top"],[1,"productpageone"],[1,"navitems","form-select","custom-select",3,"change"],["value","all","selected",""],["class","dropdawn",3,"value",4,"ngFor","ngForOf"],[1,"flex"],[4,"ngFor","ngForOf"],[1,"dropdawn",3,"value"],[1,"cardproduct",3,"routerLink"],["alt","Avatar",2,"width","100%",3,"src"],[1,"containerproduct"],[1,"titleofprod"],[1,"flexprodprice"],[1,"btn","btn-outline-dark",3,"routerLink"]],template:function(n,i){1&n&&t.YNc(0,_,11,6,"div",0),2&n&&t.Q6J("ngIf",!i.loading)},dependencies:[g.sg,g.O5,s.rH,u],styles:['.nav-widh[_ngcontent-%COMP%]{height:0px}.search[_ngcontent-%COMP%]{background-color:#1d1d1d4d;outline:0;box-shadow:none;border:0}.btn[_ngcontent-%COMP%]   .bx[_ngcontent-%COMP%]{vertical-align:inherit;margin-top:-3px;font-size:1.15rem}.form-control[_ngcontent-%COMP%]{height:calc(2.5rem + 2px);padding:.5rem 1.5rem;font-size:1rem;line-height:1.5;border-radius:.3rem}.btn[_ngcontent-%COMP%]{padding:.5rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem}.bx.icon-single[_ngcontent-%COMP%]{font-size:1.5rem}.form-inline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.form-inline[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}@media (max-width: 576px){.nav-widh[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content}}@media (min-width: 768px){.form-inline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{width:210px}}@media (min-width: 992px){.form-inline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{width:440px}}@media (min-width: 1200px){.form-inline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{width:600px}}.sub-menu.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%], .sub-menu.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .sub-menu.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.show[_ngcontent-%COMP%], .sub-menu.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%]{border-bottom:3px solid #007bff;color:#007bff}.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]{border:none}.navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus{outline:none}.navbar[_ngcontent-%COMP%]{padding:1rem}.main-menu[_ngcontent-%COMP%]{position:relative;z-index:3}.sub-menu[_ngcontent-%COMP%]{position:relative;z-index:2;padding:0 1rem}@media (min-width: 768px){.sub-menu[_ngcontent-%COMP%]{padding:0 1rem}.sub-menu.navbar-expand-md[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding:1rem 1.5rem}}.navbar.bg-light[_ngcontent-%COMP%]{background:#fff!important;box-shadow:0 2px 15px #0000001a}.user-dropdown[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding:.15rem 0}#sidebar[_ngcontent-%COMP%]{background:#fff;height:100%;left:-100%;top:0;bottom:0;overflow:auto;position:fixed;transition:.4s ease-in-out;width:84%;z-index:5001;box-shadow:0 0 20px #0000004d;padding:1.25rem 1rem 1rem}#sidebar.active[_ngcontent-%COMP%]{left:0}#sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]{background:#fff;border-bottom:1px solid #e4e4e4;padding-bottom:1.5rem}#sidebar[_ngcontent-%COMP%]   ul.components[_ngcontent-%COMP%]{padding:20px 0;border-bottom:1px solid #e4e4e4;margin-bottom:40px}#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;padding:10px}#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px 16px;font-size:1.1em;display:block;color:#000}#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#7386d5;background:#fff}#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], #sidebar[_ngcontent-%COMP%]   a[aria-expanded=true][_ngcontent-%COMP%]{color:#007bff;background:#e6f2ff;border-radius:6px}a[data-toggle=collapse][_ngcontent-%COMP%]{position:relative}#sidebar[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:block;position:absolute;top:50%;right:20px;transform:translateY(-50%)}section[_ngcontent-%COMP%]{padding:6rem;background:#e4e4e4;margin-bottom:30px;position:relative;z-index:1}.overlay[_ngcontent-%COMP%]{background:rgba(0,0,0,.7);height:100vh;left:0;position:fixed;top:0;transition:all .5s ease-in-out;z-index:-1;width:100%;opacity:0}.overlay.visible[_ngcontent-%COMP%]{opacity:1;z-index:5000}ul.social-icons[_ngcontent-%COMP%]{list-style-type:none;padding-left:0;margin-bottom:0}ul.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin-right:0;margin-bottom:0}#sidebar[_ngcontent-%COMP%]   ul.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:24px}.utility-nav[_ngcontent-%COMP%]{background:#e4e4e4;padding:.5rem 1rem}.utility-nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.search-bar[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:0 2px 15px #0000001a}.search-bar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{width:calc(100% - 45px)}.avatar[_ngcontent-%COMP%]{border-radius:50%;width:4.5rem;height:4.5rem;margin-right:8px}.avatar.avatar-xs[_ngcontent-%COMP%]{width:2.25rem;height:2.25rem}.user-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{left:auto;right:0}.widh-carsoul[_ngcontent-%COMP%]{width:100vw;height:-moz-fit-content;height:fit-content;opacity:1;filter:grayscale(10%)}.carousel-caption[_ngcontent-%COMP%]{color:#000;position:absolute;transform:translate(-50%,-50%);top:60%;left:30%}.carousel-item[_ngcontent-%COMP%]{position:relative;text-align:center}.carousel-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:25px}.carousel-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px}.cards[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-around}.card[_ngcontent-%COMP%]{width:350px;height:100px;position:relative;border:unset;margin:20px}.card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:.7}.card-body[_ngcontent-%COMP%]{top:50%;position:absolute;z-index:2}.productpageone[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:baseline;margin-top:150px;justify-content:center}.productpageone[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:35px;margin-right:40px}.navitems[_ngcontent-%COMP%]{display:flex;background-color:#929fba;width:600px;height:80px;list-style:none;justify-content:space-around;align-items:center;color:#f5f5f5;flex-wrap:wrap;font-weight:300;box-shadow:#00000029 0 2px 5px,#0000001f 0 2px 10px;border-radius:10px;font-size:larger;cursor:pointer;text-transform:capitalize;font-weight:400;padding-left:40px;border:1px solid transparent}.navitems[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;color:#f5f5f5;cursor:pointer;text-transform:capitalize;font-weight:400;padding:20px;background-color:transparent;border:transparent}.select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .select-selected[_ngcontent-%COMP%]{color:#fff;padding:8px 16px;border:1px solid transparent;cursor:pointer}.select-selected[_ngcontent-%COMP%]:after{position:absolute;content:"";top:14px;right:10px;width:0;height:0}.select-selected.select-arrow-active[_ngcontent-%COMP%]:after{border-color:transparent transparent #fff transparent;top:7px}.cartproduct[_ngcontent-%COMP%]{transform:scale(1.1);transition:1s all ease}@media (max-width: 576px){.carousel-caption[_ngcontent-%COMP%]{color:#000;position:absolute;transform:translate(-50%,-50%);top:50%;left:30%}.carousel-item[_ngcontent-%COMP%]{position:relative;text-align:center}.carousel-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:20px}.carousel-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:10px}.cards[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:unset}.card[_ngcontent-%COMP%]{width:350px;height:-moz-fit-content;height:fit-content;position:relative;border:unset;margin:0}.card-body[_ngcontent-%COMP%]{top:30%;position:absolute;z-index:2}.productpageone[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:30px}.navitems[_ngcontent-%COMP%]{display:flex;background-color:#929fba;width:100vw;height:80px;list-style:none;justify-content:space-around;align-items:center;color:#fff;margin:0;flex-wrap:wrap;font-weight:300;box-shadow:#00000029 0 2px 5px,#0000001f 0 2px 10px;border:unset;outline:unset}.navitems[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;flex-direction:column;color:#f5f5f5}}.cardproduct[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0003;transition:.3s;width:300px;height:450px}.cardproduct[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:300px;height:290px}.cardproduct[_ngcontent-%COMP%]:hover{box-shadow:0 8px 16px #0003}.containerproduct[_ngcontent-%COMP%]{padding:2px 16px}.flex[_ngcontent-%COMP%]{gap:40px;display:flex;flex-wrap:wrap;justify-content:center;margin:100px 50px 50px}.cardproduct[_ngcontent-%COMP%]{position:relative}.titleofprod[_ngcontent-%COMP%]{width:200px;font-size:19px;color:#9683ec;height:20px}.flexprodprice[_ngcontent-%COMP%]{display:flex;align-items:baseline;bottom:3px;position:absolute;justify-content:space-between}.flexprodprice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:100px}.flexprodprice[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100px}.flexprodprice[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#9683ec!important;border:#7386d5}.footer-dark[_ngcontent-%COMP%]{padding:50px 0;color:#f0f9ff;background-color:#282d32}.footer-dark[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:12px;font-weight:700;font-size:16px}.footer-dark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none;line-height:1.6;font-size:14px;margin-bottom:0}.footer-dark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration:none;opacity:.6}.footer-dark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:.8}@media (max-width:767px){.footer-dark[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(.social){text-align:center;padding-bottom:20px}}.footer-dark[_ngcontent-%COMP%]   .item.text[_ngcontent-%COMP%]{margin-bottom:36px}@media (max-width:767px){.footer-dark[_ngcontent-%COMP%]   .item.text[_ngcontent-%COMP%]{margin-bottom:0}}.footer-dark[_ngcontent-%COMP%]   .item.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{opacity:.6;margin-bottom:0}.footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%]{text-align:center}@media (max-width:991px){.footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%]{text-align:center;margin-top:20px}}.footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{font-size:20px;width:36px;height:36px;line-height:36px;display:inline-block;text-align:center;border-radius:50%;box-shadow:0 0 0 1px #fff6;margin:0 8px;color:#fff;opacity:.75}.footer-dark[_ngcontent-%COMP%]   .item.social[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{opacity:.9}.footer-dark[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{text-align:center;padding-top:24px;opacity:.3;font-size:13px;margin-bottom:0}.spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:200px}']}),e})()}];let m=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.Bz.forChild(M),s.Bz]}),e})(),O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.ez,m]}),e})()}}]);