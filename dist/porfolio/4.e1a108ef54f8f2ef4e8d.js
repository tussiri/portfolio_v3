(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"U4+L":function(t,n,e){"use strict";e.r(n),e.d(n,"BlogModule",function(){return u});var s=e("ofXK"),c=e("sbAP"),i=e("tyNb"),o=e("fXoL");let l=(()=>{class t{constructor(t,n){this.router=t,this.route=n}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(i.d),o.Mb(i.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-blog"]],decls:6,vars:0,consts:[[1,"vw-70"]],template:function(t,n){1&t&&(o.Rb(0,"div",0),o.wc(1,"\n  "),o.wc(2,"\n  "),o.Nb(3,"scully-content"),o.wc(4,"\n"),o.Qb(),o.wc(5,"\n"))},directives:[c.a],styles:["h1[_ngcontent-%COMP%]{color:#330625;background-color:#f8d3ec;padding:5px;border-radius:5px;width:-moz-fit-content;width:fit-content}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{text-align:center;padding:1rem}"]}),t})();var r=e("lJxs");function a(t,n){if(1&t&&(o.Rb(0,"div",6),o.Rb(1,"div",7),o.Nb(2,"i",8),o.Qb(),o.Rb(3,"div",9),o.Rb(4,"h5",10),o.wc(5),o.Qb(),o.Rb(6,"p",11),o.wc(7),o.Qb(),o.Rb(8,"a",12),o.Nb(9,"i",13),o.wc(10," Read "),o.Qb(),o.Qb(),o.Qb()),2&t){const t=n.$implicit;o.Ab(4),o.ic("title",t.title),o.Ab(1),o.yc(" ",t.title," "),o.Ab(2),o.yc(" ",t.description," "),o.Ab(1),o.ic("routerLink",t.route)}}const d=function(t,n){return{"justify-content-center flex-wrap":t,"flex-column align-items-center":n}};function p(t,n){if(1&t&&(o.Rb(0,"div",1),o.Rb(1,"h1",2),o.Rb(2,"span",3),o.wc(3,"Tuma's"),o.Qb(),o.wc(4," Blog "),o.Qb(),o.Rb(5,"div",4),o.uc(6,a,11,4,"div",5),o.ec(7,"async"),o.Qb(),o.Qb()),2&t){const t=n.$implicit,e=o.dc();o.ic("ngClass",t.viewClasses),o.Ab(1),o.ic("ngClass",t.titleClasses),o.Ab(4),o.ic("ngClass",o.mc(6,d,!t.displayInColumn,t.displayInColumn)),o.Ab(1),o.ic("ngForOf",o.fc(7,4,e.links$))}}const b=[{path:"",component:(()=>{class t{constructor(t){this.scully=t,this.links$=this.scully.available$.pipe(Object(r.a)(t=>t.filter(t=>t.route.startsWith("/blog/")))),this.respOptions=[{viewClasses:"d-none d-md-flex",displayInColumns:!0,titleClasses:"display-3"},{viewClasses:"d-flex d-md-none",displayInColumns:!0,titleClasses:""}]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(c.c))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-blog-landing"]],decls:1,vars:1,consts:[["class","flex-column align-items-center text-center vw-90 mx-auto",3,"ngClass",4,"ngFor","ngForOf"],[1,"flex-column","align-items-center","text-center","vw-90","mx-auto",3,"ngClass"],[1,"mb-5",2,"color","white",3,"ngClass"],[1,"font-weight-bold"],[1,"d-flex","vw-90",3,"ngClass"],["class","card post-card m-3",4,"ngFor","ngForOf"],[1,"card","post-card","m-3"],[1,"card-img-top","bg-dark"],[1,"far","fa-newspaper","fa-4x","m-5","text-white"],[1,"card-body","d-flex","flex-column"],[1,"card-title","post-title",3,"title"],[1,"card-text","post-description","flex-grow-1"],[1,"btn","btn-outline-dark","align-self-center",3,"routerLink"],[1,"fa-lg","mr-1","far","fa-eye"]],template:function(t,n){1&t&&o.uc(0,p,8,9,"div",0),2&t&&o.ic("ngForOf",n.respOptions)},directives:[s.k,s.j,i.f],pipes:[s.b],styles:[".post-card[_ngcontent-%COMP%]{width:290px;height:360px}.post-title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:20ch}.font-weight-bold[_ngcontent-%COMP%]{color:#fff}"]}),t})()},{path:":slug",component:l},{path:"**",component:l}];let f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({imports:[[i.g.forChild(b)],i.g]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({imports:[[s.c,f,c.b]]}),t})()}}]);