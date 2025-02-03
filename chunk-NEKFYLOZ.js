import{a as F}from"./chunk-WUM36Y44.js";import{a as H,b as N,c as P,d as j}from"./chunk-2DQ6VMD2.js";import{a as _}from"./chunk-6FGTPDBD.js";import{a as B}from"./chunk-STZT26O6.js";import{a as M,b as G}from"./chunk-PAQ4GHWO.js";import"./chunk-S3Q5GCPH.js";import{b as h,e as C,f as D,g as T,h as k,i as E}from"./chunk-PUOMFX4A.js";import{b as w}from"./chunk-HUJBF5IC.js";import{f as q}from"./chunk-GXZROAI3.js";import{Na as S,Oa as x,n as v,u as g,v as b}from"./chunk-VYEGLGHD.js";import{Eb as t,Fb as i,Gb as c,Hc as I,Lb as f,Ub as r,Vb as m,Wa as e,Wb as s,Xa as u,f as V,fb as U,kc as n,lc as o,ub as l}from"./chunk-KZVD5HA2.js";var O=V(F());var A=class y{constructor(d,p,a){this.menuService=d;this.helper=p;this.router=a}uuid="";data={};totalVisit=0;ngOnInit(){let d=I.stripTrailingSlash(this.router.url);this.data=this.menuService.getMenuByUrl(d)?.data??{},this.onGenerateUUID()}onGenerateUUID(){this.uuid=O.UUID.UUID()}onCopyToClipboard(){this.helper.copyToClipboard(this.uuid),this.helper.notify("Copied output to clipboard successfully")}static \u0275fac=function(p){return new(p||y)(u(q),u(w),u(v))};static \u0275cmp=U({type:y,selectors:[["app-uuid-generate"]],decls:35,vars:30,consts:[[1,"w-full","h-full","flex","flex-col","p-2"],[3,"title","subTitle"],["position","center"],[1,"text-lg","my-2","font-semibold"],[1,"mt-10"],["severity","primary",3,"onClick","label"],["pInputText","","placeholder","UUID",3,"ngModel"],["icon","pi pi-copy","severity","secondary","tooltipPosition","left",3,"onClick","pTooltip"]],template:function(p,a){p&1&&(t(0,"div",0),c(1,"app-content-header",1)(2,"app-page-visit-count",2),t(3,"div")(4,"h1"),r(5),n(6,"translate"),i(),t(7,"p"),r(8),n(9,"translate"),i(),t(10,"h3",3),r(11),n(12,"translate"),i(),t(13,"ul")(14,"li"),r(15),n(16,"translate"),i(),t(17,"li"),r(18),n(19,"translate"),i(),t(20,"li"),r(21),n(22,"translate"),i()(),t(23,"p"),r(24),n(25,"translate"),i()(),t(26,"div",4)(27,"p-inputgroup")(28,"p-inputgroup-addon")(29,"p-button",5),n(30,"translate"),f("onClick",function(){return a.onGenerateUUID()}),i()(),c(31,"input",6),t(32,"p-inputgroup-addon")(33,"p-button",7),n(34,"translate"),f("onClick",function(){return a.onCopyToClipboard()}),i()()()()()),p&2&&(e(),l("title",a.data.title)("subTitle",a.data.subTitle),e(4),m(o(6,12,"UUID Generator")),e(3),s(" ",o(9,14,"This tool allows you to easily generate Universally Unique Identifiers (UUIDs). A UUID is a 128-bit value used for identifying resources uniquely across systems without requiring a central authority. UUIDs are commonly used in database systems, distributed systems, and web applications to ensure unique identifiers for entities.")," "),e(3),m(o(12,16,"How it works:")),e(4),m(o(16,18,'Simply click the "Generate UUID" button to create a new UUID.')),e(3),s(" ",o(19,20,"Each UUID is randomly generated, ensuring that it's unique and not duplicated.")," "),e(3),s(" ",o(22,22,"The generated UUID can be copied to your clipboard for use in your projects.")," "),e(3),s(" ",o(25,24,"Use this tool to generate UUIDs for your applications, ensuring that your identifiers are globally unique and collision-free.")," "),e(5),l("label",o(30,26,"Generate New UUID")),e(2),l("ngModel",a.uuid),e(2),l("pTooltip",o(34,28,"Copy to clipboard")))},dependencies:[T,h,C,D,E,k,N,H,j,P,x,S,G,M,_,b,g,B],styles:["ul[_ngcontent-%COMP%]{display:block;list-style-type:disc;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0px;margin-inline-end:0px;padding-inline-start:40px;unicode-bidi:isolate}"]})};export{A as UuidGenerateComponent};
