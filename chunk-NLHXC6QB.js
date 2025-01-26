import{M as E,Z as F,aa as D,h as S}from"./chunk-GPQILTHO.js";import{Hb as I,T as a,Ta as d,U as p,Z as f,Zb as $,db as g,eb as x,gb as h,ia as c,ib as y,lc as v,tb as m}from"./chunk-W2VSJGNJ.js";var M=({dt:t})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("inputtext.color")};
    background: ${t("inputtext.background")};
    padding-block: ${t("inputtext.padding.y")};
    padding-inline: ${t("inputtext.padding.x")};
    border: 1px solid ${t("inputtext.border.color")};
    transition: background ${t("inputtext.transition.duration")}, color ${t("inputtext.transition.duration")}, border-color ${t("inputtext.transition.duration")}, outline-color ${t("inputtext.transition.duration")}, box-shadow ${t("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${t("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${t("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${t("inputtext.focus.border.color")};
    box-shadow: ${t("inputtext.focus.ring.shadow")};
    outline: ${t("inputtext.focus.ring.width")} ${t("inputtext.focus.ring.style")} ${t("inputtext.focus.ring.color")};
    outline-offset: ${t("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${t("inputtext.filled.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${t("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${t("inputtext.disabled.background")};
    color: ${t("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${t("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${t("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${t("inputtext.sm.font.size")};
    padding-block: ${t("inputtext.sm.padding.y")};
    padding-inline: ${t("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${t("inputtext.lg.font.size")};
    padding-block: ${t("inputtext.lg.padding.y")};
    padding-inline: ${t("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,A={root:({instance:t,props:l})=>["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":l.size==="small","p-inputtext-lg":l.size==="large","p-invalid":l.invalid,"p-variant-filled":l.variant==="filled","p-inputtext-fluid":l.fluid}]},z=(()=>{class t extends F{name="inputtext";theme=M;classes=A;static \u0275fac=(()=>{let r;return function(e){return(r||(r=c(t)))(e||t)}})();static \u0275prov=a({token:t,factory:t.\u0275fac})}return t})();var J=(()=>{class t extends D{ngModel;variant="outlined";fluid;pSize;filled;_componentStyle=f(z);get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return E(this.fluid)?!!i:this.fluid}constructor(r){super(),this.ngModel=r}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(i){return new(i||t)(d(S,8))};static \u0275dir=x({type:t,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(i,e){i&1&&I("input",function(s){return e.onInput(s)}),i&2&&m("p-filled",e.filled)("p-variant-filled",e.variant==="filled"||e.config.inputStyle()==="filled"||e.config.inputVariant()==="filled")("p-inputtext-fluid",e.hasFluid)("p-inputtext-sm",e.pSize==="small")("p-inputfield-sm",e.pSize==="small")("p-inputtext-lg",e.pSize==="large")("p-inputfield-lg",e.pSize==="large")},inputs:{variant:"variant",fluid:[2,"fluid","fluid",v],pSize:"pSize"},features:[$([z]),y,h]})}return t})(),U=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=g({type:t});static \u0275inj=p({})}return t})();function w(){let t=[],l=(n,s)=>{let u=t.length>0?t[t.length-1]:{key:n,value:s},o=u.value+(u.key===n?0:s)+2;return t.push({key:n,value:o}),o},r=n=>{t=t.filter(s=>s.value!==n)},i=()=>t.length>0?t[t.length-1].value:0,e=n=>n&&parseInt(n.style.zIndex,10)||0;return{get:e,set:(n,s,u)=>{s&&(s.style.zIndex=String(l(n,u)))},clear:n=>{n&&(r(e(n)),n.style.zIndex="")},getCurrent:()=>i()}}var Q=w();export{J as a,U as b,Q as c};
