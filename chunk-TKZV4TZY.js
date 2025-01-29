import{_ as M,ba as I,ea as v}from"./chunk-VZYFHTC7.js";import{Mb as m,Nb as g,Nc as h,U as c,V as r,_ as l,_b as y,cb as p,db as a,fb as F,gb as d,ja as s,vb as f,xb as u}from"./chunk-OHA7V53V.js";var C=class e{transform(o,t=20){return typeof o!="string"?o:o.length>t?o.substring(0,t)+"...":o}static \u0275fac=function(t){return new(t||e)};static \u0275pipe=F({name:"appCutText",type:e,pure:!0})};var B=({dt:e})=>`
.p-iconfield {
    position: relative;
    display: block;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (${e("icon.size")} / 2));
    color: ${e("iconfield.icon.color")};
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: ${e("form.field.sm.font.size")};
    width: ${e("form.field.sm.font.size")};
    height: ${e("form.field.sm.font.size")};
    margin-top: calc(-1 * (${e("form.field.sm.font.size")} / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: ${e("form.field.lg.font.size")};
    width: ${e("form.field.lg.font.size")};
    height: ${e("form.field.lg.font.size")};
    margin-top: calc(-1 * (${e("form.field.lg.font.size")} / 2));
}
`,z={root:"p-iconfield"},x=(()=>{class e extends I{name="iconfield";theme=B;classes=z;static \u0275fac=(()=>{let t;return function(n){return(t||(t=s(e)))(n||e)}})();static \u0275prov=c({token:e,factory:e.\u0275fac})}return e})();var P=["*"],S=(()=>{class e extends v{iconPosition="left";get _styleClass(){return this.styleClass}styleClass;_componentStyle=l(x);static \u0275fac=(()=>{let t;return function(n){return(t||(t=s(e)))(n||e)}})();static \u0275cmp=p({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostAttrs:[1,"p-iconfield"],hostVars:6,hostBindings:function(i,n){i&2&&(u(n._styleClass),f("p-iconfield-left",n.iconPosition==="left")("p-iconfield-right",n.iconPosition==="right"))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[y([x]),d],ngContentSelectors:P,decls:1,vars:0,template:function(i,n){i&1&&(m(),g(0))},dependencies:[h],encapsulation:2,changeDetection:0})}return e})(),O=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=a({type:e});static \u0275inj=r({imports:[S]})}return e})();var b={root:"p-inputicon"},$=(()=>{class e extends I{name="inputicon";classes=b;static \u0275fac=(()=>{let t;return function(n){return(t||(t=s(e)))(n||e)}})();static \u0275prov=c({token:e,factory:e.\u0275fac})}return e})(),w=["*"],N=(()=>{class e extends v{styleClass;get hostClasses(){return this.styleClass}_componentStyle=l($);static \u0275fac=(()=>{let t;return function(n){return(t||(t=s(e)))(n||e)}})();static \u0275cmp=p({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:4,hostBindings:function(i,n){i&2&&(u(n.hostClasses),f("p-inputicon",!0))},inputs:{styleClass:"styleClass"},features:[y([$]),d],ngContentSelectors:w,decls:1,vars:0,template:function(i,n){i&1&&(m(),g(0))},dependencies:[h,M],encapsulation:2,changeDetection:0})}return e})(),ce=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=a({type:e});static \u0275inj=r({imports:[N,M,M]})}return e})();export{S as a,O as b,N as c,ce as d,C as e};
