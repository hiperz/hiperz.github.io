import{_ as e,ba as M,ea as v}from"./chunk-VZYFHTC7.js";import{Mb as m,Nb as b,Nc as h,U as i,V as u,_ as d,_b as y,cb as a,db as s,gb as l,ja as r,sb as c,vb as I,wb as g,xb as f}from"./chunk-OHA7V53V.js";var C=({dt:t})=>`
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
`,G={root:({props:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},w=(()=>{class t extends M{name="inputgroup";theme=C;classes=G;static \u0275fac=(()=>{let o;return function(n){return(o||(o=r(t)))(n||t)}})();static \u0275prov=i({token:t,factory:t.\u0275fac})}return t})();var S=["*"],$=(()=>{class t extends v{style;styleClass;_componentStyle=d(w);static \u0275fac=(()=>{let o;return function(n){return(o||(o=r(t)))(n||t)}})();static \u0275cmp=a({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(p,n){p&2&&(c("data-pc-name","inputgroup"),g(n.style),f(n.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[y([w]),l],ngContentSelectors:S,decls:1,vars:0,template:function(p,n){p&1&&(m(),b(0))},dependencies:[h,e],encapsulation:2})}return t})(),E=(()=>{class t{static \u0275fac=function(p){return new(p||t)};static \u0275mod=s({type:t});static \u0275inj=u({imports:[$,e,e]})}return t})();var j={root:"p-inputgroupaddon"},D=(()=>{class t extends M{name="inputgroupaddon";classes=j;static \u0275fac=(()=>{let o;return function(n){return(o||(o=r(t)))(n||t)}})();static \u0275prov=i({token:t,factory:t.\u0275fac})}return t})(),B=["*"],A=(()=>{class t extends v{style;styleClass;_componentStyle=d(D);get hostStyle(){return this.style}static \u0275fac=(()=>{let o;return function(n){return(o||(o=r(t)))(n||t)}})();static \u0275cmp=a({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(p,n){p&2&&(c("data-pc-name","inputgroupaddon"),g(n.hostStyle),f(n.styleClass),I("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[y([D]),l],ngContentSelectors:B,decls:1,vars:0,template:function(p,n){p&1&&(m(),b(0))},dependencies:[h],encapsulation:2})}return t})(),tt=(()=>{class t{static \u0275fac=function(p){return new(p||t)};static \u0275mod=s({type:t});static \u0275inj=u({imports:[A,e,e]})}return t})();export{$ as a,E as b,A as c,tt as d};
