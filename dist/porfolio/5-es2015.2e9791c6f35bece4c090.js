(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"U4+L":function(t,n,e){"use strict";e.r(n),e.d(n,"BlogModule",function(){return u});var s=e("ofXK"),c=e("sbAP"),o=e("tyNb"),i=e("fXoL");let l=(()=>{class t{constructor(t,n){this.router=t,this.route=n}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(i.Ob(o.d),i.Ob(o.a))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-blog"]],decls:6,vars:0,consts:[[1,"vw-70"]],template:function(t,n){1&t&&(i.Tb(0,"div",0),i.zc(1,"\n  "),i.zc(2,"\n  "),i.Pb(3,"scully-content"),i.zc(4,"\n"),i.Sb(),i.zc(5,"\n"))},directives:[c.a],styles:["h1[_ngcontent-%COMP%]{color:#330625;background-color:#f8d3ec;padding:5px;border-radius:5px;width:-moz-fit-content;width:fit-content}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{text-align:center;padding:1rem}"]}),t})();var r=e("lJxs");function a(t,n){if(1&t&&(i.Tb(0,"div",6),i.Tb(1,"div",7),i.Pb(2,"i",8),i.Sb(),i.Tb(3,"div",9),i.Tb(4,"h5",10),i.zc(5),i.Sb(),i.Tb(6,"p",11),i.zc(7),i.Sb(),i.Tb(8,"a",12),i.Pb(9,"i",13),i.zc(10," Read "),i.Sb(),i.Sb(),i.Sb()),2&t){const t=n.$implicit;i.Ab(4),i.kc("title",t.title),i.Ab(1),i.Bc(" ",t.title," "),i.Ab(2),i.Bc(" ",t.description," "),i.Ab(1),i.kc("routerLink",t.route)}}const d=function(t,n){return{"justify-content-center flex-wrap":t,"flex-column align-items-center":n}};function p(t,n){if(1&t&&(i.Tb(0,"div",1),i.Tb(1,"h1",2),i.Tb(2,"span",3),i.zc(3,"Tuma's"),i.Sb(),i.zc(4," Blog "),i.Sb(),i.Tb(5,"div",4),i.xc(6,a,11,4,"div",5),i.gc(7,"async"),i.Sb(),i.Sb()),2&t){const t=n.$implicit,e=i.fc();i.kc("ngClass",t.viewClasses),i.Ab(1),i.kc("ngClass",t.titleClasses),i.Ab(4),i.kc("ngClass",i.oc(6,d,!t.displayInColumn,t.displayInColumn)),i.Ab(1),i.kc("ngForOf",i.hc(7,4,e.links$))}}const b=[{path:"",component:(()=>{class t{constructor(t){this.scully=t,this.links$=this.scully.available$.pipe(Object(r.a)(t=>t.filter(t=>t.route.startsWith("/blog/")))),this.respOptions=[{viewClasses:"d-none d-md-flex",displayInColumns:!0,titleClasses:"display-3"},{viewClasses:"d-flex d-md-none",displayInColumns:!0,titleClasses:""}]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(i.Ob(c.c))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-blog-landing"]],decls:1,vars:1,consts:[["class","flex-column align-items-center text-center vw-90 mx-auto",3,"ngClass",4,"ngFor","ngForOf"],[1,"flex-column","align-items-center","text-center","vw-90","mx-auto",3,"ngClass"],[1,"mb-5",2,"color","white",3,"ngClass"],[1,"font-weight-bold"],[1,"d-flex","vw-90",3,"ngClass"],["class","card post-card m-3",4,"ngFor","ngForOf"],[1,"card","post-card","m-3"],[1,"card-img-top","bg-dark"],[1,"far","fa-newspaper","fa-4x","m-5","text-white"],[1,"card-body","d-flex","flex-column"],[1,"card-title","post-title",3,"title"],[1,"card-text","post-description","flex-grow-1"],[1,"btn","btn-outline-dark","align-self-center",3,"routerLink"],[1,"fa-lg","mr-1","far","fa-eye"]],template:function(t,n){1&t&&i.xc(0,p,8,9,"div",0),2&t&&i.kc("ngForOf",n.respOptions)},directives:[s.k,s.j,o.f],pipes:[s.b],styles:[".post-card[_ngcontent-%COMP%]{width:290px;height:360px}.post-title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:20ch}.font-weight-bold[_ngcontent-%COMP%]{color:#fff}"]}),t})()},{path:":slug",component:l},{path:"**",component:l}];let f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({imports:[[o.g.forChild(b)],o.g]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({imports:[[s.c,f,c.b]]}),t})()}}]);