import{a as z,b as K}from"./chunk-OLMEAZIL.js";import{a as V,b as O}from"./chunk-UTEGI3II.js";import{a as $,h as R}from"./chunk-WEODE3DR.js";import{W as a,Z as w,aa as S,g as B,i as _,ia as P,ja as J,ka as H,l as N,m as E,n as q}from"./chunk-W3DXS5Y4.js";import{Cb as p,Db as r,Eb as G,Ec as C,Jb as T,Lb as M,Mb as U,Sb as u,U as l,V as c,Wa as f,Xa as x,Zb as D,_ as m,e as nt,eb as s,f as it,fb as g,ib as y,la as d,sb as h,tb as b,vb as A,wb as v,xb as I}from"./chunk-URIV444J.js";var Q=nt(L=>{"use strict";var pt=function(){function t(){}return t.UUID=function(){if(typeof window<"u"&&typeof window.crypto<"u"&&typeof window.crypto.getRandomValues<"u"){var i=new Uint16Array(8);return window.crypto.getRandomValues(i),this.pad4(i[0])+this.pad4(i[1])+"-"+this.pad4(i[2])+"-"+this.pad4(i[3])+"-"+this.pad4(i[4])+"-"+this.pad4(i[5])+this.pad4(i[6])+this.pad4(i[7])}else return this.random4()+this.random4()+"-"+this.random4()+"-"+this.random4()+"-"+this.random4()+"-"+this.random4()+this.random4()+this.random4()},t.pad4=function(i){for(var e=i.toString(16);e.length<4;)e="0"+e;return e},t.random4=function(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)},t}();L.UUID=pt});var ot=it(Q());var ut=({dt:t})=>`
.p-inputgroup,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${t("inputgroup.addon.padding")};
    background: ${t("inputgroup.addon.background")};
    color: ${t("inputgroup.addon.color")};
    border-block-start: 1px solid ${t("inputgroup.addon.border.color")};
    border-block-end: 1px solid ${t("inputgroup.addon.border.color")};
    min-width: ${t("inputgroup.addon.min.width")};
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid ${t("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid ${t("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:has(.p-button) {
    padding: 0;
    overflow: hidden;
}

.p-inputgroupaddon .p-button {
    border-radius: 0;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup:first-child > p-button > .p-button,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-start-start-radius: ${t("inputgroup.addon.border.radius")};
    border-end-start-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: ${t("inputgroup.addon.border.radius")};
    border-end-end-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}

/*For PrimeNG*/

.p-inputgroup p-button:first-child, .p-inputgroup p-button:last-child {
    display: inline-flex;
}

.p-inputgroup:has(> p-button:first-child) .p-button{
    border-start-start-radius: ${t("inputgroup.addon.border.radius")};
    border-end-start-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroup:has(> p-button:last-child) .p-button {
    border-start-end-radius: ${t("inputgroup.addon.border.radius")};
    border-end-end-radius: ${t("inputgroup.addon.border.radius")};
}
`,at={root:({props:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},W=(()=>{class t extends w{name="inputgroup";theme=ut;classes=at;static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})();var dt=["*"],F=(()=>{class t extends S{style;styleClass;_componentStyle=m(W);static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275cmp=s({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(o,n){o&2&&(h("data-pc-name","inputgroup"),v(n.style),I(n.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[D([W]),y],ngContentSelectors:dt,decls:1,vars:0,template:function(o,n){o&1&&(M(),U(0))},dependencies:[C,a],encapsulation:2})}return t})(),Y=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=g({type:t});static \u0275inj=c({imports:[F,a,a]})}return t})();var lt={root:"p-inputgroupaddon"},Z=(()=>{class t extends w{name="inputgroupaddon";classes=lt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})(),ct=["*"],j=(()=>{class t extends S{style;styleClass;_componentStyle=m(Z);get hostStyle(){return this.style}static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(t)))(n||t)}})();static \u0275cmp=s({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(o,n){o&2&&(h("data-pc-name","inputgroupaddon"),v(n.hostStyle),I(n.styleClass),A("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[D([Z]),y],ngContentSelectors:ct,decls:1,vars:0,template:function(o,n){o&1&&(M(),U(0))},dependencies:[C],encapsulation:2})}return t})(),tt=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=g({type:t});static \u0275inj=c({imports:[j,a,a]})}return t})();var et=class t{constructor(i,e){this.route=i;this.menuService=e;this.route.queryParams.pipe(B()).subscribe(o=>{let n=o.id,k=this.menuService.getMenu(n);k&&(this.data=k.data)})}uuid="";data={};ngOnInit(){this.onGenerateUUID()}onGenerateUUID(){this.uuid=ot.UUID.UUID()}onCopyToClipboard(){navigator.clipboard.writeText(this.uuid)}static \u0275fac=function(e){return new(e||t)(x($),x(R))};static \u0275cmp=s({type:t,selectors:[["app-uuid-generate"]],decls:25,vars:4,consts:[[1,"w-full","h-full","flex","flex-col","px-5"],[3,"title","subTitle"],[1,"text-lg","my-2","font-semibold"],[1,"mt-10"],["label","Generate New UUID","severity","primary",3,"onClick"],["pInputText","","placeholder","UUID",3,"ngModel"],["icon","pi pi-copy","severity","secondary",3,"onClick","pTooltip"]],template:function(e,o){e&1&&(p(0,"div",0),G(1,"app-content-header",1),p(2,"div")(3,"h1"),u(4,"UUID Generator"),r(),p(5,"p"),u(6,"This tool allows you to easily generate Universally Unique Identifiers (UUIDs). A UUID is a 128-bit value used for identifying resources uniquely across systems without requiring a central authority. UUIDs are commonly used in database systems, distributed systems, and web applications to ensure unique identifiers for entities."),r(),p(7,"h3",2),u(8,"How it works:"),r(),p(9,"ul")(10,"li"),u(11,'Simply click the "Generate UUID" button to create a new UUID.'),r(),p(12,"li"),u(13,"Each UUID is randomly generated, ensuring that it's unique and not duplicated."),r(),p(14,"li"),u(15,"The generated UUID can be copied to your clipboard for use in your projects."),r()(),p(16,"p"),u(17,"Use this tool to generate UUIDs for your applications, ensuring that your identifiers are globally unique and collision-free."),r()(),p(18,"div",3)(19,"p-inputgroup")(20,"p-inputgroup-addon")(21,"p-button",4),T("onClick",function(){return o.onGenerateUUID()}),r()(),G(22,"input",5),p(23,"p-inputgroup-addon")(24,"p-button",6),T("onClick",function(){return o.onCopyToClipboard()}),r()()()()()),e&2&&(f(),b("title",o.data.title)("subTitle",o.data.subTitle),f(21),b("ngModel",o.uuid),f(2),b("pTooltip","Copy to clipboard"))},dependencies:[q,_,N,E,O,V,Y,F,tt,j,J,P,K,z,H],styles:["ul[_ngcontent-%COMP%]{display:block;list-style-type:disc;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0px;margin-inline-end:0px;padding-inline-start:40px;unicode-bidi:isolate}"],changeDetection:0})};export{et as UuidGenerateComponent};
