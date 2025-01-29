import{ca as V,da as f,ga as H,ja as G}from"./chunk-6O6L65EU.js";import{Ab as D,Cb as S,Eb as F,Fb as j,Gb as s,Hb as c,Ib as d,Jb as N,Kb as z,Nc as P,Ob as u,Pb as B,Pc as q,Qb as E,Rb as v,Rc as J,Tb as T,Tc as R,Ub as _,Wa as o,Wb as m,X as b,Xb as A,Y as $,ba as M,cc as O,fb as p,gb as k,jb as I,lb as x,ma as y,mb as l,wb as r,xc as Q,zb as w}from"./chunk-3BTIAF7P.js";var X=({dt:e})=>`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${e("tag.primary.background")};
    color: ${e("tag.primary.color")};
    font-size: ${e("tag.font.size")};
    font-weight: ${e("tag.font.weight")};
    padding: ${e("tag.padding")};
    border-radius: ${e("tag.border.radius")};
    gap: ${e("tag.gap")};
}

.p-tag-icon {
    font-size: ${e("tag.icon.size")};
    width: ${e("tag.icon.size")};
    height:${e("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${e("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${e("tag.success.background")};
    color: ${e("tag.success.color")};
}

.p-tag-info {
    background: ${e("tag.info.background")};
    color: ${e("tag.info.color")};
}

.p-tag-warn {
    background: ${e("tag.warn.background")};
    color: ${e("tag.warn.color")};
}

.p-tag-danger {
    background: ${e("tag.danger.background")};
    color: ${e("tag.danger.color")};
}

.p-tag-secondary {
    background: ${e("tag.secondary.background")};
    color: ${e("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${e("tag.contrast.background")};
    color: ${e("tag.contrast.color")};
}
`,Y={root:({props:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},K=(()=>{class e extends H{name="tag";theme=X;classes=Y;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var Z=["icon"],ee=["*"];function te(e,i){if(e&1&&d(0,"span",4),e&2){let t=u(2);r("ngClass",t.icon)}}function ne(e,i){if(e&1&&(N(0),l(1,te,1,1,"span",3),z()),e&2){let t=u();o(),r("ngIf",t.icon)}}function ae(e,i){}function oe(e,i){e&1&&l(0,ae,0,0,"ng-template")}function ie(e,i){if(e&1&&(s(0,"span",5),l(1,oe,1,0,null,6),c()),e&2){let t=u();o(),r("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var h=(()=>{class e extends G{get style(){return this._style}set style(t){this._style=t,this.cd.markForCheck()}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_style;_componentStyle=M(K);ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break}})}containerClass(){let t="p-tag p-component";return this.severity&&(t+=` p-tag-${this.severity}`),this.rounded&&(t+=" p-tag-rounded"),this.styleClass&&(t+=` ${this.styleClass}`),t}static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=p({type:e,selectors:[["p-tag"]],contentQueries:function(a,n,C){if(a&1&&(v(C,Z,4),v(C,V,4)),a&2){let g;T(g=_())&&(n.iconTemplate=g.first),T(g=_())&&(n.templates=g)}},hostVars:4,hostBindings:function(a,n){a&2&&(w(n.style),D(n.containerClass()))},inputs:{style:"style",styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",Q]},features:[O([K]),x,I],ngContentSelectors:ee,decls:5,vars:3,consts:[[4,"ngIf"],["class","p-tag-icon",4,"ngIf"],[1,"p-tag-label"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-icon",3,"ngClass"],[1,"p-tag-icon"],[4,"ngTemplateOutlet"]],template:function(a,n){a&1&&(B(),E(0),l(1,ne,2,1,"ng-container",0)(2,ie,2,1,"span",1),s(3,"span",2),m(4),c()),a&2&&(o(),r("ngIf",!n.iconTemplate&&!n._iconTemplate),o(),r("ngIf",n.iconTemplate||n._iconTemplate),o(2),A(n.value))},dependencies:[R,P,q,J,f],encapsulation:2,changeDetection:0})}return e})(),L=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=k({type:e});static \u0275inj=$({imports:[h,f,f]})}return e})();function se(e,i){if(e&1&&(s(0,"span",1),d(1,"p-tag",2),c()),e&2){let t=i.$implicit;o(),r("value","#"+t)}}var U=class e{keywords=[];ngOnInit(){}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["app-article-tags"]],inputs:{keywords:"keywords"},decls:4,vars:0,consts:[[1,"mt-3","text-sm","text-zinc-400"],[1,"mr-1"],[3,"value"]],template:function(t,a){t&1&&(s(0,"div",0),m(1," Tags: "),F(2,se,2,1,"span",1,S),c()),t&2&&(o(2),j(a.keywords))},dependencies:[L,h],encapsulation:2})};export{L as a,U as b};
