import{da as h,ga as M,ja as I}from"./chunk-6O6L65EU.js";import{Ab as f,Pb as u,Qb as m,Tc as y,X as s,Y as c,ba as r,cc as g,fb as l,gb as d,jb as a,ma as o,yb as p}from"./chunk-3BTIAF7P.js";var $=({dt:e})=>`
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
`,j={root:"p-iconfield"},v=(()=>{class e extends M{name="iconfield";theme=$;classes=j;static \u0275fac=(()=>{let n;return function(t){return(n||(n=o(e)))(t||e)}})();static \u0275prov=s({token:e,factory:e.\u0275fac})}return e})();var x=["*"],B=(()=>{class e extends I{iconPosition="left";get _styleClass(){return this.styleClass}styleClass;_componentStyle=r(v);static \u0275fac=(()=>{let n;return function(t){return(n||(n=o(e)))(t||e)}})();static \u0275cmp=l({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostAttrs:[1,"p-iconfield"],hostVars:6,hostBindings:function(i,t){i&2&&(f(t._styleClass),p("p-iconfield-left",t.iconPosition==="left")("p-iconfield-right",t.iconPosition==="right"))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[g([v]),a],ngContentSelectors:x,decls:1,vars:0,template:function(i,t){i&1&&(u(),m(0))},dependencies:[y],encapsulation:2,changeDetection:0})}return e})(),q=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=d({type:e});static \u0275inj=c({imports:[B]})}return e})();var z={root:"p-inputicon"},F=(()=>{class e extends M{name="inputicon";classes=z;static \u0275fac=(()=>{let n;return function(t){return(n||(n=o(e)))(t||e)}})();static \u0275prov=s({token:e,factory:e.\u0275fac})}return e})(),S=["*"],P=(()=>{class e extends I{styleClass;get hostClasses(){return this.styleClass}_componentStyle=r(F);static \u0275fac=(()=>{let n;return function(t){return(n||(n=o(e)))(t||e)}})();static \u0275cmp=l({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:4,hostBindings:function(i,t){i&2&&(f(t.hostClasses),p("p-inputicon",!0))},inputs:{styleClass:"styleClass"},features:[g([F]),a],ngContentSelectors:S,decls:1,vars:0,template:function(i,t){i&1&&(u(),m(0))},dependencies:[y,h],encapsulation:2,changeDetection:0})}return e})(),ie=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=d({type:e});static \u0275inj=c({imports:[P,h,h]})}return e})();export{B as a,q as b,P as c,ie as d};
