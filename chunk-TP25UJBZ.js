import{e as Re,f as De}from"./chunk-67NAKIP6.js";import{a as ke}from"./chunk-OU3XUPXV.js";import{a as Ve,b as Fe}from"./chunk-MMURXMYA.js";import{a as xe}from"./chunk-TR56YZBI.js";import{b as fe,c as he,f as Ie}from"./chunk-2KIJ43PW.js";import{Aa as Ce,Ca as Te,Fa as Pe,Ma as Le,Qa as Se,Ra as be,ia as W,n as ce,p as ge,ta as we,w as me,wa as _e,x as ue,xa as ye,za as ve}from"./chunk-Z5QJVAFB.js";import{Ab as Q,Cb as H,Db as q,Eb as l,Fb as p,Gb as C,Hb as j,Ib as J,Jb as D,Jc as Y,Kb as b,Lb as x,Lc as ne,Mb as c,Nb as ie,Nc as re,Ob as N,Oc as se,Pb as f,Pc as le,Qc as pe,Rb as h,Rc as de,Sb as w,Sc as z,Ub as m,Vb as V,Wa as s,Wb as M,X,Xa as R,Xb as I,ac as oe,ba as E,cc as U,dc as ae,fb as A,ia as Z,ja as P,jb as ee,ka as L,kc as u,lb as te,lc as T,ma as $,mb as g,mc as O,nc as G,oc as K,sa as F,ub as d,vc as y,wc as k,yb as B,zb as S}from"./chunk-VECOZZOS.js";var Be=({dt:t})=>`
.p-dataview {
    border-color: ${t("dataview.border.color")};
    border-width: ${t("dataview.border.width")};
    border-style: solid;
    border-radius: ${t("dataview.border.radius")};
    padding: ${t("dataview.padding")};
}

.p-dataview-header {
    background: ${t("dataview.header.background")};
    color: ${t("dataview.header.color")};
    border-color: ${t("dataview.header.border.color")};
    border-width: ${t("dataview.header.border.width")};
    border-style: solid;
    padding: ${t("dataview.header.padding")};
    border-radius: ${t("dataview.header.border.radius")};
}

.p-dataview-content {
    background: ${t("dataview.content.background")};
    border-color: ${t("dataview.content.border.color")};
    border-width: ${t("dataview.content.border.width")};
    border-style: solid;
    color: ${t("dataview.content.color")};
    padding: ${t("dataview.content.padding")};
    border-radius: ${t("dataview.content.border.radius")};
}

.p-dataview-footer {
    background: ${t("dataview.footer.background")};
    color: ${t("dataview.footer.color")};
    border-color: ${t("dataview.footer.border.color")};
    border-width: ${t("dataview.footer.border.width")};
    border-style: solid;
    padding: ${t("dataview.footer.padding")};
    border-radius: ${t("dataview.footer.border.radius")};
}

.p-dataview-paginator-top {
    border-width: ${t("dataview.paginator.top.border.width")};
    border-color: ${t("dataview.paginator.top.border.color")};
    border-style: solid;
}

.p-dataview-paginator-bottom {
    border-width: ${t("dataview.paginator.bottom.border.width")};
    border-color: ${t("dataview.paginator.bottom.border.color")};
    border-style: solid;
}
`,Qe={root:({props:t})=>["p-dataview p-component",{"p-dataview-list":t.layout==="list","p-dataview-grid":t.layout==="grid"}],header:"p-dataview-header",pcPaginator:({position:t})=>"p-dataview-paginator-"+t,content:"p-dataview-content",emptyMessage:"p-dataview-empty-message",footer:"p-dataview-footer"},Ae=(()=>{class t extends Te{name="dataview";theme=Be;classes=Qe;static \u0275fac=(()=>{let e;return function(i){return(e||(e=$(t)))(i||t)}})();static \u0275prov=X({token:t,factory:t.\u0275fac})}return t})();var He=["list"],qe=["grid"],je=["header"],Je=["emptymessage"],Ne=["footer"],Ue=["paginatorleft"],Ge=["paginatorright"],Ke=["paginatordropdownitem"],Ye=["loadingIcon"],We=["listicon"],Xe=["gridicon"],Ze=[[["p-header"]],[["p-footer"]]],et=["p-header","p-footer"],tt=(t,a)=>({"p-dataview p-component":!0,"p-dataview-list":t,"p-dataview-grid":a}),Me=t=>({$implicit:t});function it(t,a){if(t&1&&C(0,"i"),t&2){let e=c(2);B("p-dataview-loading-icon pi-spin "+e.loadingIcon)}}function ot(t,a){t&1&&C(0,"SpinnerIcon",14),t&2&&d("spin",!0)("styleClass","p-dataview-loading-icon")}function at(t,a){}function nt(t,a){t&1&&g(0,at,0,0,"ng-template")}function rt(t,a){if(t&1&&(j(0),g(1,ot,1,2,"SpinnerIcon",12)(2,nt,1,0,null,13),J()),t&2){let e=c(2);s(),d("ngIf",!e.loadingicon),s(),d("ngTemplateOutlet",e.loadingicon)}}function st(t,a){if(t&1&&(l(0,"div",9)(1,"div",10),g(2,it,1,2,"i",11)(3,rt,3,2,"ng-container",6),p()()),t&2){let e=c();s(2),d("ngIf",e.loadingIcon),s(),d("ngIf",!e.loadingIcon)}}function lt(t,a){t&1&&D(0)}function pt(t,a){if(t&1&&(l(0,"div",15),N(1),g(2,lt,1,0,"ng-container",13),p()),t&2){let e=c();s(2),d("ngTemplateOutlet",e.headerTemplate)}}function dt(t,a){if(t&1){let e=b();l(0,"p-paginator",16),x("onPageChange",function(i){P(e);let o=c();return L(o.paginate(i))}),p()}if(t&2){let e=c();d("rows",e.rows)("first",e.first)("totalRecords",e.totalRecords)("pageLinkSize",e.pageLinks)("alwaysShow",e.alwaysShowPaginator)("rowsPerPageOptions",e.rowsPerPageOptions)("dropdownAppendTo",e.paginatorDropdownAppendTo)("dropdownScrollHeight",e.paginatorDropdownScrollHeight)("templateLeft",e.paginatorleft)("templateRight",e.paginatorright)("currentPageReportTemplate",e.currentPageReportTemplate)("showFirstLastIcon",e.showFirstLastIcon)("dropdownItemTemplate",e.paginatordropdownitem)("showCurrentPageReport",e.showCurrentPageReport)("showJumpToPageDropdown",e.showJumpToPageDropdown)("showPageLinks",e.showPageLinks)("styleClass",e.paginatorStyleClass)}}function ct(t,a){t&1&&D(0)}function gt(t,a){if(t&1&&(g(0,ct,1,0,"ng-container",17),u(1,"slice")),t&2){let e=c();d("ngTemplateOutlet",e.listTemplate)("ngTemplateOutletContext",U(6,Me,e.paginator?G(1,2,e.filteredValue||e.value,e.lazy?0:e.first,(e.lazy?0:e.first)+e.rows):e.filteredValue||e.value))}}function mt(t,a){t&1&&D(0)}function ut(t,a){if(t&1&&(g(0,mt,1,0,"ng-container",17),u(1,"slice")),t&2){let e=c();d("ngTemplateOutlet",e.gridTemplate)("ngTemplateOutletContext",U(6,Me,e.paginator?G(1,2,e.filteredValue||e.value,e.lazy?0:e.first,(e.lazy?0:e.first)+e.rows):e.filteredValue||e.value))}}function ft(t,a){if(t&1&&(j(0),m(1),J()),t&2){let e=c(2);s(),M(" ",e.emptyMessageLabel," ")}}function ht(t,a){t&1&&D(0,null,0)}function wt(t,a){if(t&1&&(l(0,"div")(1,"div",18),g(2,ft,2,1,"ng-container",19)(3,ht,2,0,"ng-container",13),p()()),t&2){let e=c();s(2),d("ngIf",!e.emptymessageTemplate)("ngIfElse",e.empty),s(),d("ngTemplateOutlet",e.emptymessageTemplate)}}function _t(t,a){if(t&1){let e=b();l(0,"p-paginator",20),x("onPageChange",function(i){P(e);let o=c();return L(o.paginate(i))}),p()}if(t&2){let e=c();d("rows",e.rows)("first",e.first)("totalRecords",e.totalRecords)("pageLinkSize",e.pageLinks)("alwaysShow",e.alwaysShowPaginator)("rowsPerPageOptions",e.rowsPerPageOptions)("dropdownAppendTo",e.paginatorDropdownAppendTo)("dropdownScrollHeight",e.paginatorDropdownScrollHeight)("templateLeft",e.paginatorleft)("templateRight",e.paginatorright)("currentPageReportTemplate",e.currentPageReportTemplate)("showFirstLastIcon",e.showFirstLastIcon)("dropdownItemTemplate",e.paginatordropdownitem)("showCurrentPageReport",e.showCurrentPageReport)("showJumpToPageDropdown",e.showJumpToPageDropdown)("showPageLinks",e.showPageLinks)("styleClass",e.paginatorStyleClass)}}function yt(t,a){t&1&&D(0)}function vt(t,a){if(t&1&&(l(0,"div",21),N(1,1),g(2,yt,1,0,"ng-container",13),p()),t&2){let e=c();s(2),d("ngTemplateOutlet",e.footerTemplate)}}var Oe=(()=>{class t extends Pe{paginator;rows;totalRecords;pageLinks=5;rowsPerPageOptions;paginatorPosition="bottom";paginatorStyleClass;alwaysShowPaginator=!0;paginatorDropdownAppendTo;paginatorDropdownScrollHeight="200px";currentPageReportTemplate="{currentPage} of {totalPages}";showCurrentPageReport;showJumpToPageDropdown;showFirstLastIcon=!0;showPageLinks=!0;lazy;lazyLoadOnInit=!0;emptyMessage="";style;styleClass;gridStyleClass="";trackBy=(e,r)=>r;filterBy;filterLocale;loading;loadingIcon;first=0;sortField;sortOrder;value;layout="list";onLazyLoad=new F;onPage=new F;onSort=new F;onChangeLayout=new F;listTemplate;gridTemplate;headerTemplate;emptymessageTemplate;footerTemplate;paginatorleft;paginatorright;paginatordropdownitem;loadingicon;listicon;gridicon;header;footer;_value;filteredValue;filterValue;initialized;_layout="list";translationSubscription;_componentStyle=E(Ae);get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(Ce.EMPTY_MESSAGE)}filterService=E(we);ngOnInit(){super.ngOnInit(),this.lazy&&this.lazyLoadOnInit&&this.onLazyLoad.emit(this.createLazyLoadMetadata()),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.cd.markForCheck()}),this.initialized=!0}ngAfterViewInit(){super.ngAfterViewInit()}ngOnChanges(e){super.ngOnChanges(e),e.value&&(this._value=e.value.currentValue,this.updateTotalRecords(),!this.lazy&&this.hasFilter()&&this.filter(this.filterValue)),(e.sortField||e.sortOrder)&&(!this.lazy||this.initialized)&&this.sort()}updateTotalRecords(){this.totalRecords=this.lazy?this.totalRecords:this._value?this._value.length:0}paginate(e){this.first=e.first,this.rows=e.rows,this.lazy&&this.onLazyLoad.emit(this.createLazyLoadMetadata()),this.onPage.emit({first:this.first,rows:this.rows})}sort(){this.first=0,this.lazy?this.onLazyLoad.emit(this.createLazyLoadMetadata()):this.value&&(this.value.sort((e,r)=>{let i=W(e,this.sortField),o=W(r,this.sortField),n=null;return i==null&&o!=null?n=-1:i!=null&&o==null?n=1:i==null&&o==null?n=0:typeof i=="string"&&typeof o=="string"?n=i.localeCompare(o):n=i<o?-1:i>o?1:0,this.sortOrder*n}),this.hasFilter()&&this.filter(this.filterValue)),this.onSort.emit({sortField:this.sortField,sortOrder:this.sortOrder})}isEmpty(){let e=this.filteredValue||this.value;return e==null||e.length==0}createLazyLoadMetadata(){return{first:this.first,rows:this.rows,sortField:this.sortField,sortOrder:this.sortOrder}}getBlockableElement(){return this.el.nativeElement.children[0]}filter(e,r="contains"){if(this.filterValue=e,this.value&&this.value.length){let i=this.filterBy.split(",");this.filteredValue=this.filterService.filter(this.value,i,e,r,this.filterLocale),this.filteredValue.length===this.value.length&&(this.filteredValue=null),this.paginator&&(this.first=0,this.totalRecords=this.filteredValue?this.filteredValue.length:this.value?this.value.length:0),this.cd.markForCheck()}}hasFilter(){return this.filterValue&&this.filterValue.trim().length>0}ngOnDestroy(){this.translationSubscription&&this.translationSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=$(t)))(i||t)}})();static \u0275cmp=A({type:t,selectors:[["p-dataView"],["p-dataview"],["p-data-view"]],contentQueries:function(r,i,o){if(r&1&&(f(o,He,5),f(o,qe,5),f(o,je,5),f(o,Je,5),f(o,Ne,5),f(o,Ue,5),f(o,Ge,5),f(o,Ke,5),f(o,Ye,5),f(o,We,5),f(o,Xe,5),f(o,_e,5),f(o,ye,5)),r&2){let n;h(n=w())&&(i.listTemplate=n.first),h(n=w())&&(i.gridTemplate=n.first),h(n=w())&&(i.headerTemplate=n.first),h(n=w())&&(i.emptymessageTemplate=n.first),h(n=w())&&(i.footerTemplate=n.first),h(n=w())&&(i.paginatorleft=n.first),h(n=w())&&(i.paginatorright=n.first),h(n=w())&&(i.paginatordropdownitem=n.first),h(n=w())&&(i.loadingicon=n.first),h(n=w())&&(i.listicon=n.first),h(n=w())&&(i.gridicon=n.first),h(n=w())&&(i.header=n.first),h(n=w())&&(i.footer=n.first)}},inputs:{paginator:[2,"paginator","paginator",y],rows:[2,"rows","rows",k],totalRecords:[2,"totalRecords","totalRecords",k],pageLinks:[2,"pageLinks","pageLinks",k],rowsPerPageOptions:"rowsPerPageOptions",paginatorPosition:"paginatorPosition",paginatorStyleClass:"paginatorStyleClass",alwaysShowPaginator:[2,"alwaysShowPaginator","alwaysShowPaginator",y],paginatorDropdownAppendTo:"paginatorDropdownAppendTo",paginatorDropdownScrollHeight:"paginatorDropdownScrollHeight",currentPageReportTemplate:"currentPageReportTemplate",showCurrentPageReport:[2,"showCurrentPageReport","showCurrentPageReport",y],showJumpToPageDropdown:[2,"showJumpToPageDropdown","showJumpToPageDropdown",y],showFirstLastIcon:[2,"showFirstLastIcon","showFirstLastIcon",y],showPageLinks:[2,"showPageLinks","showPageLinks",y],lazy:[2,"lazy","lazy",y],lazyLoadOnInit:[2,"lazyLoadOnInit","lazyLoadOnInit",y],emptyMessage:"emptyMessage",style:"style",styleClass:"styleClass",gridStyleClass:"gridStyleClass",trackBy:"trackBy",filterBy:"filterBy",filterLocale:"filterLocale",loading:[2,"loading","loading",y],loadingIcon:"loadingIcon",first:[2,"first","first",k],sortField:"sortField",sortOrder:[2,"sortOrder","sortOrder",k],value:"value",layout:"layout"},outputs:{onLazyLoad:"onLazyLoad",onPage:"onPage",onSort:"onSort",onChangeLayout:"onChangeLayout"},features:[oe([Ae]),te,ee,Z],ngContentSelectors:et,decls:10,vars:15,consts:[["empty",""],[3,"ngClass","ngStyle"],["class","p-dataview-loading",4,"ngIf"],["class","p-dataview-header",4,"ngIf"],["styleClass","p-paginator-top",3,"rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","dropdownAppendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass","onPageChange",4,"ngIf"],[1,"p-dataview-content"],[4,"ngIf"],["styleClass","p-paginator-bottom",3,"rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","dropdownAppendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass","onPageChange",4,"ngIf"],["class","p-dataview-footer",4,"ngIf"],[1,"p-dataview-loading"],[1,"p-dataview-loading-overlay","p-overlay-mask"],[3,"class",4,"ngIf"],[3,"spin","styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"spin","styleClass"],[1,"p-dataview-header"],["styleClass","p-paginator-top",3,"onPageChange","rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","dropdownAppendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-dataview-emptymessage"],[4,"ngIf","ngIfElse"],["styleClass","p-paginator-bottom",3,"onPageChange","rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","dropdownAppendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass"],[1,"p-dataview-footer"]],template:function(r,i){r&1&&(ie(Ze),l(0,"div",1),g(1,st,4,2,"div",2)(2,pt,3,1,"div",3)(3,dt,1,17,"p-paginator",4),l(4,"div",5),g(5,gt,2,8,"ng-container")(6,ut,2,8,"ng-container")(7,wt,4,3,"div",6),p(),g(8,_t,1,17,"p-paginator",7)(9,vt,3,1,"div",8),p()),r&2&&(B(i.styleClass),d("ngClass",ae(12,tt,i.layout==="list",i.layout==="grid"))("ngStyle",i.style),s(),d("ngIf",i.loading),s(),d("ngIf",i.header||i.headerTemplate),s(),d("ngIf",i.paginator&&(i.paginatorPosition==="top"||i.paginatorPosition=="both")),s(2),S(i.layout==="list"?5:-1),s(),S(i.layout==="grid"?6:-1),s(),d("ngIf",i.isEmpty()&&!i.loading),s(),d("ngIf",i.paginator&&(i.paginatorPosition==="bottom"||i.paginatorPosition=="both")),s(),d("ngIf",i.footer||i.footerTemplate))},dependencies:[z,ne,re,le,se,de,De,Re,Le,ve],encapsulation:2,changeDetection:0})}return t})();function Ct(t,a){t&1&&C(0,"img",7)}function Tt(t,a){t&1&&C(0,"img",8)}function Pt(t,a){t&1&&C(0,"img",9)}function Lt(t,a){t&1&&C(0,"img",10)}function St(t,a){if(t&1){let e=b();l(0,"div",4),x("click",function(){let i=P(e).$implicit,o=c(2);return L(o.onViewContent(i))}),l(1,"div",5)(2,"div",6),g(3,Ct,1,0,"img",7)(4,Tt,1,0,"img",8)(5,Pt,1,0,"img",9)(6,Lt,1,0,"img",10),p(),l(7,"div")(8,"div",11),m(9),p(),l(10,"div",12)(11,"div"),m(12),u(13,"translate"),u(14,"date"),p(),l(15,"div",13),m(16),u(17,"translate"),p()()()()()}if(t&2){let e,r,i=a.$implicit,o=a.$index;s(3),S((e=o)===0?3:e===1?4:e===2?5:6),s(6),V(i.label),s(3),I("",T(13,6,"Publish Date"),":\xA0",O(14,8,i.timestamp,"yyyy-MM-dd"),""),s(4),I("",T(17,11,"Total read"),":\xA0",(r=i.totalRead)!==null&&r!==void 0?r:0,"")}}function bt(t,a){if(t&1&&(l(0,"h3")(1,"span"),m(2),u(3,"translate"),p()(),l(4,"div"),H(5,St,18,13,"div",3,Q),p()),t&2){let e=c();s(2),V(T(3,1,"Top 20 Blog Posts")),s(3),q(e.filteredList)}}function xt(t,a){if(t&1&&(l(0,"span"),m(1),u(2,"translate"),p(),m(3)),t&2){let e=c(2);s(),V(T(2,3,"Category")),s(2),I(" : ",e.category," (",e.filteredList.length,") ")}}function It(t,a){t&1&&(l(0,"span"),m(1),u(2,"translate"),p()),t&2&&(s(),V(T(2,1,"Blog Posts")))}function Rt(t,a){if(t&1){let e=b();l(0,"div",18),x("click",function(){let i=P(e).$implicit,o=c(3);return L(o.onViewContent(i))}),l(1,"div",19)(2,"h2"),m(3),p()(),l(4,"div",20)(5,"div"),m(6),u(7,"translate"),u(8,"date"),p(),l(9,"div",13),m(10),u(11,"translate"),p()(),l(12,"div",21),m(13),u(14,"appCutText"),p(),C(15,"app-article-tags",22),p()}if(t&2){let e,r=a.$implicit;s(3),V(r.label),s(3),I("",T(7,7,"Publish Date"),":\xA0",O(8,9,r.timestamp,"yyyy-MM-dd"),""),s(4),I("",T(11,12,"Total read"),":\xA0",(e=r.totalRead)!==null&&e!==void 0?e:0,""),s(3),M(" ",O(14,14,r.content,300)," "),s(2),d("keywords",r.keywords)}}function Dt(t,a){if(t&1&&H(0,Rt,16,17,"div",17,Q),t&2){let e=a.$implicit;q(e)}}function Vt(t,a){t&1&&(l(0,"div",23),m(1,"No Articles exist"),p())}function kt(t,a){if(t&1){let e=b();l(0,"div",14)(1,"h1"),g(2,xt,4,5)(3,It,3,3,"span"),p()(),l(4,"div",15),m(5),u(6,"translate"),p(),l(7,"p-dataview",16),x("onPage",function(i){P(e);let o=c();return L(o.onPage(i))}),g(8,Dt,2,0,"ng-template",null,0,K)(10,Vt,2,0,"ng-template",null,1,K),p()}if(t&2){let e=c();s(2),S(e.category?2:3),s(3),I(" ",T(6,7,"Total visit"),":\xA0",e.totalVisit," "),s(2),d("value",e.filteredList)("first",e.first)("rows",e.rows)("paginator",!0)}}var ze=class t{constructor(a,e,r,i,o){this.helper=a;this.menuService=e;this.route=r;this.router=i;this.counter=o}filteredList=[];rows=5;first=0;totalVisit=0;isHomepage=!1;category;ngOnInit(){let e=[...he].reverse().map(o=>({label:o.label,routerLink:o.routerLink,keywords:o.keywords.split(",").map(n=>n.trim()),category:o.category,timestamp:o.timestamp})),r=Y.stripTrailingSlash(this.router.url).split("?")[0],i=this.route.snapshot.queryParams;if(this.isHomepage=r==="/"||r==="",this.isHomepage)this.counter.getTopArticles().subscribe(o=>{o.success&&(this.filteredList=e.filter(n=>{let _=o.data.find(v=>v.url===n.routerLink);return n.totalRead=_?.visit,_}))});else{this.filteredList=e;let o=r.split("/");if(o.includes("article-category-list")){let _=o.at(-1);this.filteredList=e.filter(v=>v.category===_),this.category=fe.find(v=>v.category===_)?.label}else this.category=void 0;let n=i.page?+i.page:1;this.first=(n-1)*this.rows,this.onPage({first:this.first,rows:this.rows},!0)}}onPage(a,e){if(a){for(let o=a.first;o<a.first+a.rows&&o<this.filteredList.length;o++){let n=this.filteredList[o],_=this.menuService.getBlogContentByUrl(n.routerLink);if(_){let v=this.helper.extractContent(_.content);n.content=v}}let r=this.filteredList.map(o=>o.routerLink),i=Y.stripTrailingSlash(this.router.url).split("?")[0];if(r.push(i),this.counter.getCounts(r).subscribe(o=>{o.data.length>0&&o.data.forEach(n=>{let _=this.filteredList.find(v=>v.routerLink===n.url);_?_.totalRead=n.visit??0:n.url===i&&(this.totalVisit=n.visit??0)})}),!e){let o=Math.floor(a.first/a.rows)+1;this.updatePage(o)}}}updatePage(a){this.router.navigate([],{queryParams:{page:a}})}onViewContent(a){this.menuService.navigateToArticle(a)}static \u0275fac=function(e){return new(e||t)(R(xe),R(Ie),R(ce),R(ge),R(be))};static \u0275cmp=A({type:t,selectors:[["app-article-list"]],decls:3,vars:1,consts:[["list",""],["emptymessage",""],[1,"sm:p-2"],[1,"overflow-hidden","cursor-pointer"],[1,"overflow-hidden","cursor-pointer",3,"click"],[1,"flex","mt-1","mb-1","text-zinc-600","hover:bg-yellow-200","overflow-hidden","break-all"],[1,"mr-1","flex-none","mt-1"],["src","/assets/images/gold.png","width","30","height","30","alt","medal"],["src","/assets/images/silver.png","width","30","height","30","alt","medal"],["src","/assets/images/bronze.png","width","30","height","30","alt","medal"],["src","/assets/images/prize.png","width","20","height","20","alt","medal",1,"ml-1"],[1,"font-semibold"],[1,"text-sm","font-bold","mb-3","text-surface-500","flex","flex-row","items-center"],[1,"ml-2"],[1,"px-2"],[1,"px-2","text-sm","font-bold","mb-5","text-surface-500"],[3,"onPage","value","first","rows","paginator"],[1,"flex","flex-col","p-5","border","my-2","cursor-pointer","hover:bg-primary-100"],[1,"flex","flex-col","p-5","border","my-2","cursor-pointer","hover:bg-primary-100",3,"click"],[1,"mb-1","text-zinc-600","hover:text-primary-500","overflow-hidden","break-all"],[1,"text-sm","font-bold","mb-5","text-surface-500","border-b","flex","flex-row","items-center"],[1,"text-zinc-500"],[3,"keywords"],[1,"flex","justify-center","items-center","h-20","border","my-2","p-5","font-bold"]],template:function(e,r){e&1&&(l(0,"div",2),g(1,bt,7,3)(2,kt,12,9),p()),e&2&&(s(),S(r.isHomepage?1:2))},dependencies:[Oe,Se,z,pe,ke,Ve,ue,me,Fe],encapsulation:2})};export{ze as a};
