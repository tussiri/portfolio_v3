!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,c(i.key),i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e,t,n){return(t=c(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9enj":function(t,c,o){"use strict";o.r(c),o.d(c,"PortfolioModule",function(){return ge});var s=o("ofXK"),a=o("tyNb"),r=o("fXoL"),l=o("jl36");function f(e,t){if(1&e&&(r.Tb(0,"h4",18),r.zc(1),r.Sb()),2&e){var n=r.fc().$implicit;r.Ab(1),r.Ac(n)}}function b(e,t){if(1&e&&(r.Tb(0,"h5",18),r.zc(1),r.Sb()),2&e){var n=r.fc().$implicit;r.Ab(1),r.Ac(n)}}function u(e,t){if(1&e&&(r.Tb(0,"div",16),r.xc(1,f,2,1,"h4",17),r.xc(2,b,2,1,"h5",17),r.Sb()),2&e){var n=r.fc(2).$implicit;r.Ab(1),r.kc("ngIf",!n.useSmallerHeadings),r.Ab(1),r.kc("ngIf",n.useSmallerHeadings)}}function m(e,t){if(1&e&&(r.Tb(0,"div",12),r.xc(1,u,3,2,"div",13),r.Tb(2,"a",14),r.zc(3," Resume "),r.Pb(4,"i",15),r.Sb(),r.Sb()),2&e){var n=r.fc(2).ngIf;r.Ab(1),r.kc("ngForOf",n.background),r.Ab(1),r.kc("href",n.resume,r.uc)}}function g(e,t){if(1&e&&(r.Tb(0,"h4",18),r.zc(1),r.Sb()),2&e){var n=r.fc().$implicit;r.Ab(1),r.Ac(n)}}function d(e,t){if(1&e&&(r.Tb(0,"h5",18),r.zc(1),r.Sb()),2&e){var n=r.fc().$implicit;r.Ab(1),r.Ac(n)}}function p(e,t){if(1&e&&(r.Tb(0,"div",16),r.xc(1,g,2,1,"h4",17),r.xc(2,d,2,1,"h5",17),r.Sb()),2&e){var n=r.fc(2).$implicit;r.Ab(1),r.kc("ngIf",!n.useSmallerHeadings),r.Ab(1),r.kc("ngIf",n.useSmallerHeadings)}}function v(e,t){if(1&e&&(r.Tb(0,"div"),r.xc(1,p,3,2,"div",19),r.Tb(2,"a",14),r.zc(3," Resume "),r.Pb(4,"i",15),r.Sb(),r.Sb()),2&e){var n=r.fc(2).ngIf;r.Ab(1),r.kc("ngForOf",n.about),r.Ab(1),r.kc("href",n.resume,r.uc)}}function h(e,t){1&e&&(r.Tb(0,"div",20),r.Pb(1,"img",21),r.Sb())}var x=function(e,t,n,c){var o;return i(o={row:e},"row",t),i(o,"col-md-12",n),i(o,"col-md-12",c),o};function w(e,t){if(1&e&&(r.Tb(0,"div",4),r.Tb(1,"h1",5),r.Tb(2,"span",6),r.zc(3,"About "),r.Sb(),r.zc(4,"Me "),r.Sb(),r.Tb(5,"div",7),r.Tb(6,"div",8),r.Tb(7,"div"),r.xc(8,m,5,2,"div",9),r.xc(9,v,5,2,"div",10),r.Sb(),r.xc(10,h,2,0,"div",11),r.Sb(),r.Sb(),r.Sb()),2&e){var n=t.$implicit,i=r.fc(2);r.kc("ngClass",n.viewClasses),r.Ab(1),r.kc("ngClass",n.headingClass),r.Ab(5),r.kc("ngClass",r.qc(10,x,i.background,i.showImage,!i.showImage,!i.background)),r.Ab(1),r.Eb("col-md-",i.showImage?"6":"12"," col-sm-12 col-lg-",i.showImage?"6":"12",""),r.Ab(1),r.kc("ngIf",i.background),r.Ab(1),r.kc("ngIf",i.about),r.Ab(1),r.kc("ngIf",i.showImage)}}function S(e,t){if(1&e&&(r.Tb(0,"div",2),r.xc(1,w,11,15,"div",3),r.Sb()),2&e){var n=r.fc();r.Ab(1),r.kc("ngForOf",n.respOptions)}}var k,C=function(e){return{color:e}},y=((k=function(){function t(n,i){e(this,t),this.bioService=n,this.activatedRoute=i,this.bio$=this.bioService.getBio(),this.respOptions=[{viewClasses:"d-none d-md-flex",headingClass:"display-3",useSmallerHeadings:!0},{viewClasses:"d-flex d-md-none",headingClass:"",useSmallerHeadings:!0}]}return n(t,[{key:"getFontColor",value:function(){return{color:window.innerWidth>=768?"black":"white"}}},{key:"ngOnInit",value:function(){this.showImage=this.activatedRoute.snapshot.data.showImage,this.background=this.activatedRoute.snapshot.data.background,this.about=this.activatedRoute.snapshot.data.about}}]),t}()).\u0275fac=function(e){return new(e||k)(r.Ob(l.a),r.Ob(a.a))},k.\u0275cmp=r.Ib({type:k,selectors:[["app-about"]],decls:3,vars:6,consts:[[1,"container",3,"ngStyle"],["class"," d-flex flex-wrap justify-content-center align-items-center w-100",4,"ngIf"],[1,"d-flex","flex-wrap","justify-content-center","align-items-center","w-100"],["class","flex-column justify-content-center align-items-center text-center w-100 mt-3",3,"ngClass",4,"ngFor","ngForOf"],[1,"flex-column","justify-content-center","align-items-center","text-center","w-100","mt-3",3,"ngClass"],[1,"mb-5",3,"ngClass"],[1,"font-weight-bold"],[1,"d-flex","flex-wrap","justify-content-center","align-items-start"],[3,"ngClass"],["style","text-align:left",4,"ngIf"],[4,"ngIf"],["class","col-md-6 col-sm-12 mb-3",4,"ngIf"],[2,"text-align","left"],["class"," row",4,"ngFor","ngForOf"],["target","_blank","rel","noopener noreferrer",1,"mt-3","mb-5","btn","btn-dark",2,"color","#64ffda",3,"href"],[1,"ml-1","fas","fa-angle-right"],[1,"row"],["class","mb-4",4,"ngIf"],[1,"mb-4"],["class","row",4,"ngFor","ngForOf"],[1,"col-md-6","col-sm-12","mb-3"],["src","../assets/img/headshot4.jpeg",2,"height","auto","max-width","100%"]],template:function(e,t){1&e&&(r.Tb(0,"div",0),r.xc(1,S,2,1,"div",1),r.gc(2,"async"),r.Sb()),2&e&&(r.kc("ngStyle",r.nc(4,C,t.getFontColor().color)),r.Ab(1),r.kc("ngIf",r.hc(2,2,t.bio$)))},directives:[s.m,s.l,s.k,s.j],pipes:[s.b],styles:[".container-black[_ngcontent-%COMP%]{color:#000}.container-white[_ngcontent-%COMP%]{color:#fff}"]}),k),T=o("tk/3");function O(e,t){if(1&e&&(r.Tb(0,"section",12),r.Tb(1,"h1",13),r.Tb(2,"span",14),r.zc(3,"Skills"),r.Sb(),r.Sb(),r.Sb()),2&e){var n=t.$implicit;r.kc("ngClass",n.viewClasses),r.Ab(1),r.kc("ngClass",n.titleClasses)}}function j(e,t){if(1&e&&(r.Tb(0,"div",15),r.Tb(1,"i"),r.Tb(2,"h3"),r.zc(3),r.Sb(),r.Sb(),r.Sb()),2&e){var n=t.$implicit;r.Ab(1),r.Db("fa-lg mr-5 fa ",n.icon," soft-skills"),r.Ab(2),r.Ac(n.name)}}function A(e,t){if(1&e&&(r.Tb(0,"div",16),r.Pb(1,"i"),r.Sb()),2&e){var n=t.$implicit;r.Ab(1),r.Db("col fa-lg mr-5 fab ",n.icon," languages")}}var I,P=((I=function(){function t(n){e(this,t),this.http=n,this.respOptions=[{viewClasses:"d-none d-md-flex",displayInColumn:!0,useSmallerHeadings:!0,titleClasses:"display-3"},{viewClasses:"d-flex d-md-none",displayInColumn:!0,useSmallerHeadings:!0,titleClasses:""}]}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.http.get("assets/json/skill.json").subscribe(function(t){e.softSkills=t.softSkills,e.languages=t.languages})}}]),t}()).\u0275fac=function(e){return new(e||I)(r.Ob(T.a))},I.\u0275cmp=r.Ib({type:I,selectors:[["app-languages-skills"]],decls:16,vars:3,consts:[[1,"container"],["class","flex-column text-center mt-3 mb-3",3,"ngClass",4,"ngFor","ngForOf"],[1,"container","d-flex","justify-content-center","w-100","mx-auto"],[1,"d-flex","vw-90","text-center","justify-content-center","mx-auto"],[1,"col"],[1,"flex-column","text-center","mt-3","mb-3"],[1,"container","d-flex","vw-33"],[1,"d-flex","flex-wrap","justify-content-center"],["class","text-center col flex-column text-center mt-3 mb-3",4,"ngFor","ngForOf"],[1,"col","vw-40"],[1,"row","flex-wrap"],["class","col flex-column text-center mt-3 mb-3",4,"ngFor","ngForOf"],[1,"flex-column","text-center","mt-3","mb-3",3,"ngClass"],[1,"mb-5",2,"color","#000000",3,"ngClass"],[1,"font-weight-bold"],[1,"text-center","col","flex-column","text-center","mt-3","mb-3"],[1,"col","flex-column","text-center","mt-3","mb-3"]],template:function(e,t){1&e&&(r.Tb(0,"div",0),r.xc(1,O,4,2,"section",1),r.Tb(2,"div",2),r.Tb(3,"div",3),r.Tb(4,"div",4),r.Tb(5,"h2",5),r.zc(6,"Soft Skills"),r.Sb(),r.Tb(7,"div",6),r.Tb(8,"div",7),r.xc(9,j,4,4,"div",8),r.Sb(),r.Sb(),r.Sb(),r.Tb(10,"div",9),r.Tb(11,"div",0),r.Tb(12,"h2",5),r.zc(13,"Languages"),r.Sb(),r.Tb(14,"div",10),r.xc(15,A,2,3,"div",11),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&e&&(r.Ab(1),r.kc("ngForOf",t.respOptions),r.Ab(8),r.kc("ngForOf",t.softSkills),r.Ab(6),r.kc("ngForOf",t.languages))},directives:[s.k,s.j],styles:[".container[_ngcontent-%COMP%]{justify-content:center}h2[_ngcontent-%COMP%]{color:#000;margin-top:50px}h3[_ngcontent-%COMP%]{color:hsla(0,0%,100%,.86);margin-left:1rem}.languages[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}.languages[_ngcontent-%COMP%]{color:hsla(0,0%,100%,.86);display:inline-flex;padding-left:10px;font-size:60px}.soft-skills[_ngcontent-%COMP%]{font-size:20px;color:#64ffda;display:inline-flex;line-height:2rem;flex:1;text-align:center;margin:0 5px}.col[_ngcontent-%COMP%]{max-width:100%;word-wrap:break-word}"]}),I),F=o("5+tZ"),z=o("bHdf"),M=o("pLZG"),$=o("Kqap"),H=o("BFxc"),_=o("xbPD"),N=o("mCNh");function E(e,t,n){return 0===n?[t]:(e.push(t),e)}var L,D=((L=function(){function t(n){e(this,t),this.http=n}return n(t,[{key:"getProjects",value:function(e){var t=this.http.get("assets/json/projects.json");return e?t.pipe(Object(z.a)(),Object(M.a)(function(e){return e.featured||!1}),function(e,t){return arguments.length>=2?function(n){return Object(N.a)(Object($.a)(e,t),Object(H.a)(1),Object(_.a)(t))(n)}:function(t){return Object(N.a)(Object($.a)(function(t,n,i){return e(t,n,i+1)}),Object(H.a)(1))(t)}}(E,[])):t}}]),t}()).\u0275fac=function(e){return new(e||L)(r.ac(T.a))},L.\u0275prov=r.Kb({token:L,factory:L.\u0275fac,providedIn:"root"}),L),B=o("XOzN");function R(e,t){if(1&e&&(r.Tb(0,"a",18),r.Pb(1,"i",19),r.zc(2," Preview "),r.Sb()),2&e){var n=r.fc().$implicit;r.kc("href",n.previewUrl,r.uc)}}function q(e,t){if(1&e&&(r.Tb(0,"a",20),r.Pb(1,"i",21),r.zc(2," Source "),r.Sb()),2&e){var n=r.fc().$implicit;r.kc("href",n.sourceUrl,r.uc)}}var U=function(e,t){return{"m-3":e,"mb-3":t}};function W(e,t){if(1&e&&(r.Tb(0,"div",9),r.Tb(1,"div",10),r.Tb(2,"h5",11),r.zc(3),r.Sb(),r.Tb(4,"h6",12),r.Pb(5,"i",13),r.zc(6),r.Sb(),r.Tb(7,"p",14),r.zc(8),r.Sb(),r.Tb(9,"div",15),r.xc(10,R,3,1,"a",16),r.xc(11,q,3,1,"a",17),r.Sb(),r.Sb(),r.Sb()),2&e){var n=t.$implicit,i=r.fc(2).$implicit;r.kc("ngClass",r.oc(8,U,!i.displayInColumn,i.displayInColumn)),r.Ab(2),r.kc("title",n.name),r.Ab(1),r.Bc(" ",n.name," "),r.Ab(2),r.kc("ngClass",n.stack.iconClasses),r.Ab(1),r.Bc(" ",n.stack.name," "),r.Ab(2),r.Bc(" ",n.description," "),r.Ab(2),r.kc("ngIf",n.previewUrl),r.Ab(1),r.kc("ngIf",n.sourceUrl)}}var G=function(e,t){return{"justify-content-center flex-wrap":e,"flex-column  align-items-center":t}};function K(e,t){if(1&e&&(r.Tb(0,"div",7),r.xc(1,W,12,11,"div",8),r.Sb()),2&e){var n=t.ngIf,i=r.fc().$implicit;r.kc("ngClass",r.oc(2,G,!i.displayInColumn,i.displayInColumn)),r.Ab(1),r.kc("ngForOf",n)}}function X(e,t){1&e&&(r.Tb(0,"button",22),r.zc(1," See More Projects "),r.Pb(2,"i",23),r.Sb())}function J(e,t){if(1&e&&(r.Tb(0,"div",2),r.Tb(1,"h1",3),r.Tb(2,"span",4),r.zc(3,"My"),r.Sb(),r.zc(4," Projects "),r.Sb(),r.xc(5,K,2,5,"div",5),r.gc(6,"async"),r.xc(7,X,3,0,"button",6),r.gc(8,"async"),r.Sb()),2&e){var n=t.$implicit,i=r.fc();r.kc("ngClass",n.viewClasses),r.Ab(1),r.kc("ngClass",n.titleClasses),r.Ab(4),r.kc("ngIf",r.hc(6,4,i.projects$)),r.Ab(2),r.kc("ngIf",r.hc(8,6,i.isHome$))}}var Z,Q=((Z=function(){function t(n,i){var c=this;e(this,t),this.projectsService=n,this.headerService=i,this.isHome$=this.headerService.isHome(),this.projects$=this.isHome$.pipe(Object(F.a)(function(e){return c.projectsService.getProjects(e)})),this.respOptions=[{viewClasses:"d-none d-md-flex",displayInColumn:!1,useSmallerHeadings:!0,titleClasses:"display-3"},{viewClasses:"d-flex d-md-none",displayInColumn:!0,useSmallerHeadings:!0,titleClasses:""}]}return n(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||Z)(r.Ob(D),r.Ob(B.a))},Z.\u0275cmp=r.Ib({type:Z,selectors:[["app-projects"]],decls:2,vars:1,consts:[[1,"container"],["class","d-flex flex-column align-items-center w-75 mt-5 mx-auto",3,"ngClass",4,"ngFor","ngForOf"],[1,"d-flex","flex-column","align-items-center","w-75","mt-5","mx-auto",3,"ngClass"],[1,"mb-5",2,"color","#ffffff",3,"ngClass"],[1,"font-weight-bold"],["class","d-flex vw-90",3,"ngClass",4,"ngIf"],["routerLink","/projects","class","mt-5 btn btn-dark","style","color: #65fcda",4,"ngIf"],[1,"d-flex","vw-90",3,"ngClass"],["class","card project-card m-3",3,"ngClass",4,"ngFor","ngForOf"],[1,"card","project-card","m-3",3,"ngClass"],[1,"card-body","d-flex","flex-column"],[1,"card-title","font-weight-bold","text-center","project-title","mx-auto",3,"title"],[1,"card-subtitle","mb-2","font-weight-lighter","text-left"],[3,"ngClass"],[1,"card-text","text-left"],[1,"d-flex","flex-row","justify-content-between"],["class","btn btn-dark mr-2",3,"href",4,"ngIf"],["class","btn btn-dark",3,"href",4,"ngIf"],[1,"btn","btn-dark","mr-2",3,"href"],[1,"fa-lg","mr-1","far","fa-eye"],[1,"btn","btn-dark",3,"href"],[1,"fa-lg","mr-1","fab","fa-github-alt"],["routerLink","/projects",1,"mt-5","btn","btn-dark",2,"color","#65fcda"],[1,"ml-1","fas","fa-angle-right"]],template:function(e,t){1&e&&(r.Tb(0,"div",0),r.xc(1,J,9,8,"div",1),r.Sb()),2&e&&(r.Ab(1),r.kc("ngForOf",t.respOptions))},directives:[s.k,s.j,s.l,a.e],pipes:[s.b],styles:[".vw-20[_ngcontent-%COMP%]{width:20vw}.project-card[_ngcontent-%COMP%]{width:290px;height:250px}.project-title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:20ch}"]}),Z);function V(e,t){if(1&e&&(r.Tb(0,"h2",17),r.zc(1),r.Sb()),2&e){var n=r.fc().$implicit;r.Ab(1),r.Ac(n)}}function Y(e,t){if(1&e&&(r.Tb(0,"h5",17),r.zc(1),r.Sb()),2&e){var n=r.fc().$implicit;r.Ab(1),r.Ac(n)}}function ee(e,t){if(1&e&&(r.Tb(0,"div"),r.xc(1,V,2,1,"h2",16),r.xc(2,Y,2,1,"h5",16),r.Sb()),2&e){var n=r.fc().$implicit;r.Ab(1),r.kc("ngIf",!n.useSmallerHeadings),r.Ab(1),r.kc("ngIf",n.useSmallerHeadings)}}function te(e,t){if(1&e&&(r.Tb(0,"div",8),r.Tb(1,"h1",9),r.zc(2," Hi, my name is "),r.Tb(3,"span",10),r.zc(4),r.Sb(),r.Sb(),r.xc(5,ee,3,2,"div",11),r.Tb(6,"div",12),r.Tb(7,"button",13),r.zc(8," See My Work "),r.Pb(9,"i",14),r.Sb(),r.Tb(10,"button",15),r.zc(11," About Me "),r.Pb(12,"i",14),r.Sb(),r.Sb(),r.Sb()),2&e){var n=t.$implicit,i=r.fc().ngIf;r.kc("ngClass",n.viewClasses),r.Ab(1),r.kc("ngClass",n.headingClass),r.Ab(3),r.Bc("",i.firstName+" "+i.lastName,"."),r.Ab(1),r.kc("ngForOf",i.intro)}}function ne(e,t){if(1&e&&(r.Tb(0,"div",6),r.xc(1,te,13,4,"div",7),r.Sb()),2&e){var n=r.fc();r.Ab(1),r.kc("ngForOf",n.respOptions)}}var ie,ce=function(e){return{color:e}},oe=((ie=function(){function t(n){e(this,t),this.bioService=n,this.bio$=this.bioService.getBio(),this.respOptions=[{viewClasses:"d-none d-md-flex",headingClass:"display-3",useSmallerHeadings:!0},{viewClasses:"d-flex d-md-none",headingClass:"",useSmallerHeadings:!0}]}return n(t,[{key:"getFontColor",value:function(){return{color:window.innerWidth>=768?"black":"white"}}},{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||ie)(r.Ob(l.a))},ie.\u0275cmp=r.Ib({type:ie,selectors:[["app-home"]],decls:9,vars:6,consts:[[1,"container",3,"ngStyle"],["class","hero d-flex flex-column justify-content-center align-items-center w-100 mt-5 mx-auto",4,"ngIf"],[1,"d-none","d-md-block","mt-5"],["id","about",1,"mb-3"],["id","languages",1,"mb-5"],["id","projects",1,"mb-5"],[1,"hero","d-flex","flex-column","justify-content-center","align-items-center","w-100","mt-5","mx-auto"],["class","flex-column justify-content-center align-items-center text-center w-75 mt-3 mb-3",3,"ngClass",4,"ngFor","ngForOf"],[1,"flex-column","justify-content-center","align-items-center","text-center","w-75","mt-3","mb-3",3,"ngClass"],[1,"text-center",3,"ngClass"],[1,"font-weight-bold",2,"margin-top","20px"],[4,"ngFor","ngForOf"],[1,"d-flex","flex-row","justify-content-between"],["routerLink","/","fragment","projects",1,"mt-3","btn","btn-dark",2,"color","#64ffda"],[1,"ml-1","fas","fa-angle-right"],["routerLink","/about","fragment","about",1,"mt-3","btn","btn-dark",2,"color","#64ffda","margin-left","10px"],["class","text-center",4,"ngIf"],[1,"text-center"]],template:function(e,t){1&e&&(r.Tb(0,"div",0),r.xc(1,ne,2,1,"div",1),r.gc(2,"async"),r.Sb(),r.Pb(3,"div",2),r.Pb(4,"app-about",3),r.Pb(5,"div",2),r.Pb(6,"app-languages-skills",4),r.Pb(7,"div",2),r.Pb(8,"app-projects",5)),2&e&&(r.kc("ngStyle",r.nc(4,ce,t.getFontColor().color)),r.Ab(1),r.kc("ngIf",r.hc(2,2,t.bio$)))},directives:[s.m,s.l,y,P,Q,s.k,s.j,a.e],pipes:[s.b],styles:["img[_ngcontent-%COMP%]{height:150px;padding-bottom:0;border-radius:50%}.hero[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1}.container[_ngcontent-%COMP%]{position:relative;height:90vh}"]}),ie),se=o("3Pt+"),ae=o("WOca");function re(e,t){if(1&e){var n=r.Ub();r.Tb(0,"div",2),r.Tb(1,"h1",3),r.Tb(2,"span",4),r.zc(3,"Contact"),r.Sb(),r.zc(4," Me "),r.Sb(),r.Tb(5,"form",5),r.dc("ngSubmit",function(){r.tc(n);var e=r.fc();return e.onSubmit(e.FormData.value)}),r.Tb(6,"div",6),r.Tb(7,"div",6),r.Tb(8,"label",7),r.zc(9,"Full Name"),r.Sb(),r.Pb(10,"input",8),r.Sb(),r.Tb(11,"label",9),r.zc(12,"Email"),r.Sb(),r.Pb(13,"input",10),r.Tb(14,"small",11),r.zc(15,"We'll never share your email with anyone else."),r.Sb(),r.Sb(),r.Tb(16,"div",6),r.Tb(17,"label",12),r.zc(18,"Message"),r.Sb(),r.Pb(19,"textarea",13),r.Sb(),r.Tb(20,"button",14),r.zc(21,"Submit"),r.Sb(),r.Sb(),r.Sb()}if(2&e){var i=t.$implicit,c=r.fc();r.kc("ngClass",i.viewClasses),r.Ab(1),r.kc("ngClass",i.headingClass),r.Ab(4),r.kc("formGroup",c.FormData),r.Ab(15),r.kc("disabled",!c.FormData.valid)}}var le,fe,be,ue=[{path:"",component:oe,data:{about:!0,showImage:!1,background:!1}},{path:"about",component:y,data:{about:!1,showImage:!0,background:!0}},{path:"projects",component:Q},{path:"contact",component:(le=function(){function t(n,i){e(this,t),this.builder=n,this.contact=i,this.respOptions=[{viewClasses:"d-none d-md-flex",headingClass:"display-3",useSmallerHeadings:!0},{viewClasses:"d-flex d-md-none",headingClass:"",useSmallerHeadings:!0}]}return n(t,[{key:"ngOnInit",value:function(){this.FormData=this.builder.group({Fullname:new se.c("",[se.m.required]),Email:new se.c("",[se.m.compose([se.m.required,se.m.email])]),Message:new se.c("",[se.m.required])})}},{key:"onSubmit",value:function(e){console.log(this.FormData.value),this.contact.PostMessage(e).subscribe(function(e){location.href="https://mailthis.to/confirm",console.log(e)},function(e){console.warn(e.responseText),console.log({error:e})})}}]),t}(),le.\u0275fac=function(e){return new(e||le)(r.Ob(se.b),r.Ob(ae.a))},le.\u0275cmp=r.Ib({type:le,selectors:[["app-contact-form"]],decls:2,vars:1,consts:[[1,"d-flex","justify-content-center","vw-80","mt-5","mx-auto"],["class","flex-column align-items-center text-center w-50",3,"ngClass",4,"ngFor","ngForOf"],[1,"flex-column","align-items-center","text-center","w-50",3,"ngClass"],[1,"text-center",2,"color","#ffffff",3,"ngClass"],[1,"font-weight-bold"],[1,"flex-column","align-items-center","w-100","h-100vh",3,"formGroup","ngSubmit"],[1,"form-group","align-items-center","text-center"],["for","fullname",2,"color","white","font-size","3vw mx-auto"],["type","text","name","Fullname","placeholder","Full Name","formControlName","Fullname",1,"form-control"],["for","Email",2,"color","white","font-size","5vw mx-auto"],["type","email","name","Email","aria-describedby","emailHelp","placeholder","Enter email","formControlName","Email",1,"form-control"],["id","emailHelp",1,"form-text",2,"color","#ffffff","font-size","2vw mx-auto"],["for","message",2,"color","white","font-size","2vw mx-auto"],["formControlName","Message","name","Message",1,"form-control"],["type","submit",1,"btn","btn-primary",2,"color","#65fcda",3,"disabled"]],template:function(e,t){1&e&&(r.Tb(0,"div",0),r.xc(1,re,22,4,"div",1),r.Sb()),2&e&&(r.Ab(1),r.kc("ngForOf",t.respOptions))},directives:[s.k,s.j,se.n,se.j,se.e,se.a,se.i,se.d],styles:[""]}),le)}],me=((be=n(function t(){e(this,t)})).\u0275fac=function(e){return new(e||be)},be.\u0275mod=r.Mb({type:be}),be.\u0275inj=r.Lb({imports:[[a.g.forChild(ue)],a.g]}),be),ge=((fe=n(function t(){e(this,t)})).\u0275fac=function(e){return new(e||fe)},fe.\u0275mod=r.Mb({type:fe}),fe.\u0275inj=r.Lb({imports:[[s.c,me]]}),fe)}}])}();