import{$a as hn,$b as ur,B as So,Ba as at,Bc as jo,Cb as Ke,Cc as Yo,D as Co,Db as Ze,Dc as Ho,Eb as lt,Ec as Tt,F as Eo,Fb as ni,Gb as ii,Gc as ai,Hb as $o,Hc as Go,I as Do,Jb as ri,Jc as zo,Kb as Oe,Lb as fn,Mb as pn,Nb as gn,P as To,Pb as mn,Q as Mo,Qb as yn,S as dn,Sb as Dt,T as sr,Tb as oi,U as W,Ub as cr,V as he,Wa as Z,X as ie,Xa as ce,Z as rt,Za as Ro,Zb as pe,_ as A,a as N,b as Te,ba as ei,c as wo,e as ju,ea as Oo,eb as Me,fa as Ao,fb as fe,ga as xo,gb as re,ha as St,hc as si,ib as ee,j as Xn,jc as J,ka as ko,kb as Wt,kc as Uo,la as G,lb as Et,lc as ct,m as _t,mc as Re,na as ti,nb as Fo,nc as jt,oa as Io,p as Qn,pb as Po,pc as dr,q as or,qa as No,ra as ot,sa as ar,sb as Ne,sc as Fe,tb as z,ua as st,ub as Lo,v as wt,va as Ct,vb as lr,wb as Vo,xa as ve,xb as Bt,yc as Wo,zc as Bo}from"./chunk-URIV444J.js";var Hh=ju((kr,Qt)=>{"use strict";(function(t,i){typeof kr=="object"&&typeof Qt<"u"?Qt.exports=i():typeof define=="function"&&define.amd?define(i):t.moment=i()})(kr,function(){"use strict";var t;function i(){return t.apply(null,arguments)}function n(e){t=e}function o(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function l(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function u(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function d(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var r;for(r in e)if(u(e,r))return!1;return!0}function f(e){return e===void 0}function p(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function m(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function y(e,r){var s=[],a,c=e.length;for(a=0;a<c;++a)s.push(r(e[a],a));return s}function _(e,r){for(var s in r)u(r,s)&&(e[s]=r[s]);return u(r,"toString")&&(e.toString=r.toString),u(r,"valueOf")&&(e.valueOf=r.valueOf),e}function v(e,r,s,a){return Jr(e,r,s,a,!0).utc()}function S(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function w(e){return e._pf==null&&(e._pf=S()),e._pf}var T;Array.prototype.some?T=Array.prototype.some:T=function(e){var r=Object(this),s=r.length>>>0,a;for(a=0;a<s;a++)if(a in r&&e.call(this,r[a],a,r))return!0;return!1};function O(e){var r=null,s=!1,a=e._d&&!isNaN(e._d.getTime());if(a&&(r=w(e),s=T.call(r.parsedDateParts,function(c){return c!=null}),a=r.overflow<0&&!r.empty&&!r.invalidEra&&!r.invalidMonth&&!r.invalidWeekday&&!r.weekdayMismatch&&!r.nullInput&&!r.invalidFormat&&!r.userInvalidated&&(!r.meridiem||r.meridiem&&s),e._strict&&(a=a&&r.charsLeftOver===0&&r.unusedTokens.length===0&&r.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=a;else return a;return e._isValid}function P(e){var r=v(NaN);return e!=null?_(w(r),e):w(r).userInvalidated=!0,r}var Y=i.momentProperties=[],L=!1;function q(e,r){var s,a,c,h=Y.length;if(f(r._isAMomentObject)||(e._isAMomentObject=r._isAMomentObject),f(r._i)||(e._i=r._i),f(r._f)||(e._f=r._f),f(r._l)||(e._l=r._l),f(r._strict)||(e._strict=r._strict),f(r._tzm)||(e._tzm=r._tzm),f(r._isUTC)||(e._isUTC=r._isUTC),f(r._offset)||(e._offset=r._offset),f(r._pf)||(e._pf=w(r)),f(r._locale)||(e._locale=r._locale),h>0)for(s=0;s<h;s++)a=Y[s],c=r[a],f(c)||(e[a]=c);return e}function ye(e){q(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),L===!1&&(L=!0,i.updateOffset(this),L=!1)}function X(e){return e instanceof ye||e!=null&&e._isAMomentObject!=null}function ft(e){i.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function Q(e,r){var s=!0;return _(function(){if(i.deprecationHandler!=null&&i.deprecationHandler(null,e),s){var a=[],c,h,g,C=arguments.length;for(h=0;h<C;h++){if(c="",typeof arguments[h]=="object"){c+=`
[`+h+"] ";for(g in arguments[0])u(arguments[0],g)&&(c+=g+": "+arguments[0][g]+", ");c=c.slice(0,-2)}else c=arguments[h];a.push(c)}ft(e+`
Arguments: `+Array.prototype.slice.call(a).join("")+`
`+new Error().stack),s=!1}return r.apply(this,arguments)},r)}var pt={};function gt(e,r){i.deprecationHandler!=null&&i.deprecationHandler(e,r),pt[e]||(ft(r),pt[e]=!0)}i.suppressDeprecationWarnings=!1,i.deprecationHandler=null;function oe(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function xt(e){var r,s;for(s in e)u(e,s)&&(r=e[s],oe(r)?this[s]=r:this["_"+s]=r);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Le(e,r){var s=_({},e),a;for(a in r)u(r,a)&&(l(e[a])&&l(r[a])?(s[a]={},_(s[a],e[a]),_(s[a],r[a])):r[a]!=null?s[a]=r[a]:delete s[a]);for(a in e)u(e,a)&&!u(r,a)&&l(e[a])&&(s[a]=_({},s[a]));return s}function Ve(e){e!=null&&this.set(e)}var Xe;Object.keys?Xe=Object.keys:Xe=function(e){var r,s=[];for(r in e)u(e,r)&&s.push(r);return s};var kt={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function It(e,r,s){var a=this._calendar[e]||this._calendar.sameElse;return oe(a)?a.call(r,s):a}function se(e,r,s){var a=""+Math.abs(e),c=r-a.length,h=e>=0;return(h?s?"+":"":"-")+Math.pow(10,Math.max(0,c)).toString().substr(1)+a}var Qe=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,$e=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,et={},Ce={};function D(e,r,s,a){var c=a;typeof a=="string"&&(c=function(){return this[a]()}),e&&(Ce[e]=c),r&&(Ce[r[0]]=function(){return se(c.apply(this,arguments),r[1],r[2])}),s&&(Ce[s]=function(){return this.localeData().ordinal(c.apply(this,arguments),e)})}function An(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function xn(e){var r=e.match(Qe),s,a;for(s=0,a=r.length;s<a;s++)Ce[r[s]]?r[s]=Ce[r[s]]:r[s]=An(r[s]);return function(c){var h="",g;for(g=0;g<a;g++)h+=oe(r[g])?r[g].call(c,e):r[g];return h}}function mt(e,r){return e.isValid()?(r=kn(r,e.localeData()),et[r]=et[r]||xn(r),et[r](e)):e.localeData().invalidDate()}function kn(e,r){var s=5;function a(c){return r.longDateFormat(c)||c}for($e.lastIndex=0;s>=0&&$e.test(e);)e=e.replace($e,a),$e.lastIndex=0,s-=1;return e}var Di={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Ti(e){var r=this._longDateFormat[e],s=this._longDateFormat[e.toUpperCase()];return r||!s?r:(this._longDateFormat[e]=s.match(Qe).map(function(a){return a==="MMMM"||a==="MM"||a==="DD"||a==="dddd"?a.slice(1):a}).join(""),this._longDateFormat[e])}var Mi="Invalid date";function Oi(){return this._invalidDate}var Ai="%d",xi=/\d{1,2}/;function ki(e){return this._ordinal.replace("%d",e)}var Ii={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Ni(e,r,s,a){var c=this._relativeTime[s];return oe(c)?c(e,r,s,a):c.replace(/%d/i,e)}function Ri(e,r){var s=this._relativeTime[e>0?"future":"past"];return oe(s)?s(r):s.replace(/%s/i,r)}var In={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function ue(e){return typeof e=="string"?In[e]||In[e.toLowerCase()]:void 0}function en(e){var r={},s,a;for(a in e)u(e,a)&&(s=ue(a),s&&(r[s]=e[a]));return r}var Fi={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Pi(e){var r=[],s;for(s in e)u(e,s)&&r.push({unit:s,priority:Fi[s]});return r.sort(function(a,c){return a.priority-c.priority}),r}var Nn=/\d/,ae=/\d\d/,Ir=/\d{3}/,Li=/\d{4}/,Rn=/[+-]?\d{6}/,$=/\d\d?/,Nr=/\d\d\d\d?/,Rr=/\d\d\d\d\d\d?/,Fn=/\d{1,3}/,Vi=/\d{1,4}/,Pn=/[+-]?\d{1,6}/,Nt=/\d+/,Ln=/[+-]?\d+/,la=/Z|[+-]\d\d:?\d\d/gi,Vn=/Z|[+-]\d\d(?::?\d\d)?/gi,ca=/[+-]?\d+(\.\d{1,3})?/,tn=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Rt=/^[1-9]\d?/,$i=/^([1-9]\d|\d)/,$n;$n={};function E(e,r,s){$n[e]=oe(r)?r:function(a,c){return a&&s?s:r}}function ua(e,r){return u($n,e)?$n[e](r._strict,r._locale):new RegExp(da(e))}function da(e){return Ue(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(r,s,a,c,h){return s||a||c||h}))}function Ue(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function be(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function x(e){var r=+e,s=0;return r!==0&&isFinite(r)&&(s=be(r)),s}var Ui={};function F(e,r){var s,a=r,c;for(typeof e=="string"&&(e=[e]),p(r)&&(a=function(h,g){g[r]=x(h)}),c=e.length,s=0;s<c;s++)Ui[e[s]]=a}function nn(e,r){F(e,function(s,a,c,h){c._w=c._w||{},r(s,c._w,c,h)})}function ha(e,r,s){r!=null&&u(Ui,e)&&Ui[e](r,s._a,s,e)}function Un(e){return e%4===0&&e%100!==0||e%400===0}var ne=0,We=1,Ie=2,K=3,Ee=4,Be=5,yt=6,fa=7,pa=8;D("Y",0,0,function(){var e=this.year();return e<=9999?se(e,4):"+"+e}),D(0,["YY",2],0,function(){return this.year()%100}),D(0,["YYYY",4],0,"year"),D(0,["YYYYY",5],0,"year"),D(0,["YYYYYY",6,!0],0,"year"),E("Y",Ln),E("YY",$,ae),E("YYYY",Vi,Li),E("YYYYY",Pn,Rn),E("YYYYYY",Pn,Rn),F(["YYYYY","YYYYYY"],ne),F("YYYY",function(e,r){r[ne]=e.length===2?i.parseTwoDigitYear(e):x(e)}),F("YY",function(e,r){r[ne]=i.parseTwoDigitYear(e)}),F("Y",function(e,r){r[ne]=parseInt(e,10)});function rn(e){return Un(e)?366:365}i.parseTwoDigitYear=function(e){return x(e)+(x(e)>68?1900:2e3)};var Fr=Ft("FullYear",!0);function ga(){return Un(this.year())}function Ft(e,r){return function(s){return s!=null?(Pr(this,e,s),i.updateOffset(this,r),this):on(this,e)}}function on(e,r){if(!e.isValid())return NaN;var s=e._d,a=e._isUTC;switch(r){case"Milliseconds":return a?s.getUTCMilliseconds():s.getMilliseconds();case"Seconds":return a?s.getUTCSeconds():s.getSeconds();case"Minutes":return a?s.getUTCMinutes():s.getMinutes();case"Hours":return a?s.getUTCHours():s.getHours();case"Date":return a?s.getUTCDate():s.getDate();case"Day":return a?s.getUTCDay():s.getDay();case"Month":return a?s.getUTCMonth():s.getMonth();case"FullYear":return a?s.getUTCFullYear():s.getFullYear();default:return NaN}}function Pr(e,r,s){var a,c,h,g,C;if(!(!e.isValid()||isNaN(s))){switch(a=e._d,c=e._isUTC,r){case"Milliseconds":return void(c?a.setUTCMilliseconds(s):a.setMilliseconds(s));case"Seconds":return void(c?a.setUTCSeconds(s):a.setSeconds(s));case"Minutes":return void(c?a.setUTCMinutes(s):a.setMinutes(s));case"Hours":return void(c?a.setUTCHours(s):a.setHours(s));case"Date":return void(c?a.setUTCDate(s):a.setDate(s));case"FullYear":break;default:return}h=s,g=e.month(),C=e.date(),C=C===29&&g===1&&!Un(h)?28:C,c?a.setUTCFullYear(h,g,C):a.setFullYear(h,g,C)}}function ma(e){return e=ue(e),oe(this[e])?this[e]():this}function ya(e,r){if(typeof e=="object"){e=en(e);var s=Pi(e),a,c=s.length;for(a=0;a<c;a++)this[s[a].unit](e[s[a].unit])}else if(e=ue(e),oe(this[e]))return this[e](r);return this}function ba(e,r){return(e%r+r)%r}var H;Array.prototype.indexOf?H=Array.prototype.indexOf:H=function(e){var r;for(r=0;r<this.length;++r)if(this[r]===e)return r;return-1};function Wi(e,r){if(isNaN(e)||isNaN(r))return NaN;var s=ba(r,12);return e+=(r-s)/12,s===1?Un(e)?29:28:31-s%7%2}D("M",["MM",2],"Mo",function(){return this.month()+1}),D("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),D("MMMM",0,0,function(e){return this.localeData().months(this,e)}),E("M",$,Rt),E("MM",$,ae),E("MMM",function(e,r){return r.monthsShortRegex(e)}),E("MMMM",function(e,r){return r.monthsRegex(e)}),F(["M","MM"],function(e,r){r[We]=x(e)-1}),F(["MMM","MMMM"],function(e,r,s,a){var c=s._locale.monthsParse(e,a,s._strict);c!=null?r[We]=c:w(s).invalidMonth=e});var va="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Lr="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Vr=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,_a=tn,wa=tn;function Sa(e,r){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Vr).test(r)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone}function Ca(e,r){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Vr.test(r)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Ea(e,r,s){var a,c,h,g=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],a=0;a<12;++a)h=v([2e3,a]),this._shortMonthsParse[a]=this.monthsShort(h,"").toLocaleLowerCase(),this._longMonthsParse[a]=this.months(h,"").toLocaleLowerCase();return s?r==="MMM"?(c=H.call(this._shortMonthsParse,g),c!==-1?c:null):(c=H.call(this._longMonthsParse,g),c!==-1?c:null):r==="MMM"?(c=H.call(this._shortMonthsParse,g),c!==-1?c:(c=H.call(this._longMonthsParse,g),c!==-1?c:null)):(c=H.call(this._longMonthsParse,g),c!==-1?c:(c=H.call(this._shortMonthsParse,g),c!==-1?c:null))}function Da(e,r,s){var a,c,h;if(this._monthsParseExact)return Ea.call(this,e,r,s);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),a=0;a<12;a++){if(c=v([2e3,a]),s&&!this._longMonthsParse[a]&&(this._longMonthsParse[a]=new RegExp("^"+this.months(c,"").replace(".","")+"$","i"),this._shortMonthsParse[a]=new RegExp("^"+this.monthsShort(c,"").replace(".","")+"$","i")),!s&&!this._monthsParse[a]&&(h="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[a]=new RegExp(h.replace(".",""),"i")),s&&r==="MMMM"&&this._longMonthsParse[a].test(e))return a;if(s&&r==="MMM"&&this._shortMonthsParse[a].test(e))return a;if(!s&&this._monthsParse[a].test(e))return a}}function $r(e,r){if(!e.isValid())return e;if(typeof r=="string"){if(/^\d+$/.test(r))r=x(r);else if(r=e.localeData().monthsParse(r),!p(r))return e}var s=r,a=e.date();return a=a<29?a:Math.min(a,Wi(e.year(),s)),e._isUTC?e._d.setUTCMonth(s,a):e._d.setMonth(s,a),e}function Ur(e){return e!=null?($r(this,e),i.updateOffset(this,!0),this):on(this,"Month")}function Ta(){return Wi(this.year(),this.month())}function Ma(e){return this._monthsParseExact?(u(this,"_monthsRegex")||Wr.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(u(this,"_monthsShortRegex")||(this._monthsShortRegex=_a),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function Oa(e){return this._monthsParseExact?(u(this,"_monthsRegex")||Wr.call(this),e?this._monthsStrictRegex:this._monthsRegex):(u(this,"_monthsRegex")||(this._monthsRegex=wa),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Wr(){function e(M,k){return k.length-M.length}var r=[],s=[],a=[],c,h,g,C;for(c=0;c<12;c++)h=v([2e3,c]),g=Ue(this.monthsShort(h,"")),C=Ue(this.months(h,"")),r.push(g),s.push(C),a.push(C),a.push(g);r.sort(e),s.sort(e),a.sort(e),this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Aa(e,r,s,a,c,h,g){var C;return e<100&&e>=0?(C=new Date(e+400,r,s,a,c,h,g),isFinite(C.getFullYear())&&C.setFullYear(e)):C=new Date(e,r,s,a,c,h,g),C}function sn(e){var r,s;return e<100&&e>=0?(s=Array.prototype.slice.call(arguments),s[0]=e+400,r=new Date(Date.UTC.apply(null,s)),isFinite(r.getUTCFullYear())&&r.setUTCFullYear(e)):r=new Date(Date.UTC.apply(null,arguments)),r}function Wn(e,r,s){var a=7+r-s,c=(7+sn(e,0,a).getUTCDay()-r)%7;return-c+a-1}function Br(e,r,s,a,c){var h=(7+s-a)%7,g=Wn(e,a,c),C=1+7*(r-1)+h+g,M,k;return C<=0?(M=e-1,k=rn(M)+C):C>rn(e)?(M=e+1,k=C-rn(e)):(M=e,k=C),{year:M,dayOfYear:k}}function an(e,r,s){var a=Wn(e.year(),r,s),c=Math.floor((e.dayOfYear()-a-1)/7)+1,h,g;return c<1?(g=e.year()-1,h=c+je(g,r,s)):c>je(e.year(),r,s)?(h=c-je(e.year(),r,s),g=e.year()+1):(g=e.year(),h=c),{week:h,year:g}}function je(e,r,s){var a=Wn(e,r,s),c=Wn(e+1,r,s);return(rn(e)-a+c)/7}D("w",["ww",2],"wo","week"),D("W",["WW",2],"Wo","isoWeek"),E("w",$,Rt),E("ww",$,ae),E("W",$,Rt),E("WW",$,ae),nn(["w","ww","W","WW"],function(e,r,s,a){r[a.substr(0,1)]=x(e)});function xa(e){return an(e,this._week.dow,this._week.doy).week}var ka={dow:0,doy:6};function Ia(){return this._week.dow}function Na(){return this._week.doy}function Ra(e){var r=this.localeData().week(this);return e==null?r:this.add((e-r)*7,"d")}function Fa(e){var r=an(this,1,4).week;return e==null?r:this.add((e-r)*7,"d")}D("d",0,"do","day"),D("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),D("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),D("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),D("e",0,0,"weekday"),D("E",0,0,"isoWeekday"),E("d",$),E("e",$),E("E",$),E("dd",function(e,r){return r.weekdaysMinRegex(e)}),E("ddd",function(e,r){return r.weekdaysShortRegex(e)}),E("dddd",function(e,r){return r.weekdaysRegex(e)}),nn(["dd","ddd","dddd"],function(e,r,s,a){var c=s._locale.weekdaysParse(e,a,s._strict);c!=null?r.d=c:w(s).invalidWeekday=e}),nn(["d","e","E"],function(e,r,s,a){r[a]=x(e)});function Pa(e,r){return typeof e!="string"?e:isNaN(e)?(e=r.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function La(e,r){return typeof e=="string"?r.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Bi(e,r){return e.slice(r,7).concat(e.slice(0,r))}var Va="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),jr="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),$a="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ua=tn,Wa=tn,Ba=tn;function ja(e,r){var s=o(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(r)?"format":"standalone"];return e===!0?Bi(s,this._week.dow):e?s[e.day()]:s}function Ya(e){return e===!0?Bi(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Ha(e){return e===!0?Bi(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ga(e,r,s){var a,c,h,g=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],a=0;a<7;++a)h=v([2e3,1]).day(a),this._minWeekdaysParse[a]=this.weekdaysMin(h,"").toLocaleLowerCase(),this._shortWeekdaysParse[a]=this.weekdaysShort(h,"").toLocaleLowerCase(),this._weekdaysParse[a]=this.weekdays(h,"").toLocaleLowerCase();return s?r==="dddd"?(c=H.call(this._weekdaysParse,g),c!==-1?c:null):r==="ddd"?(c=H.call(this._shortWeekdaysParse,g),c!==-1?c:null):(c=H.call(this._minWeekdaysParse,g),c!==-1?c:null):r==="dddd"?(c=H.call(this._weekdaysParse,g),c!==-1||(c=H.call(this._shortWeekdaysParse,g),c!==-1)?c:(c=H.call(this._minWeekdaysParse,g),c!==-1?c:null)):r==="ddd"?(c=H.call(this._shortWeekdaysParse,g),c!==-1||(c=H.call(this._weekdaysParse,g),c!==-1)?c:(c=H.call(this._minWeekdaysParse,g),c!==-1?c:null)):(c=H.call(this._minWeekdaysParse,g),c!==-1||(c=H.call(this._weekdaysParse,g),c!==-1)?c:(c=H.call(this._shortWeekdaysParse,g),c!==-1?c:null))}function za(e,r,s){var a,c,h;if(this._weekdaysParseExact)return Ga.call(this,e,r,s);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),a=0;a<7;a++){if(c=v([2e3,1]).day(a),s&&!this._fullWeekdaysParse[a]&&(this._fullWeekdaysParse[a]=new RegExp("^"+this.weekdays(c,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[a]=new RegExp("^"+this.weekdaysShort(c,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[a]=new RegExp("^"+this.weekdaysMin(c,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[a]||(h="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[a]=new RegExp(h.replace(".",""),"i")),s&&r==="dddd"&&this._fullWeekdaysParse[a].test(e))return a;if(s&&r==="ddd"&&this._shortWeekdaysParse[a].test(e))return a;if(s&&r==="dd"&&this._minWeekdaysParse[a].test(e))return a;if(!s&&this._weekdaysParse[a].test(e))return a}}function qa(e){if(!this.isValid())return e!=null?this:NaN;var r=on(this,"Day");return e!=null?(e=Pa(e,this.localeData()),this.add(e-r,"d")):r}function Ka(e){if(!this.isValid())return e!=null?this:NaN;var r=(this.day()+7-this.localeData()._week.dow)%7;return e==null?r:this.add(e-r,"d")}function Za(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var r=La(e,this.localeData());return this.day(this.day()%7?r:r-7)}else return this.day()||7}function Ja(e){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||ji.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(u(this,"_weekdaysRegex")||(this._weekdaysRegex=Ua),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Xa(e){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||ji.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(u(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Wa),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Qa(e){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||ji.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(u(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ba),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function ji(){function e(le,qe){return qe.length-le.length}var r=[],s=[],a=[],c=[],h,g,C,M,k;for(h=0;h<7;h++)g=v([2e3,1]).day(h),C=Ue(this.weekdaysMin(g,"")),M=Ue(this.weekdaysShort(g,"")),k=Ue(this.weekdays(g,"")),r.push(C),s.push(M),a.push(k),c.push(C),c.push(M),c.push(k);r.sort(e),s.sort(e),a.sort(e),c.sort(e),this._weekdaysRegex=new RegExp("^("+c.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Yi(){return this.hours()%12||12}function el(){return this.hours()||24}D("H",["HH",2],0,"hour"),D("h",["hh",2],0,Yi),D("k",["kk",2],0,el),D("hmm",0,0,function(){return""+Yi.apply(this)+se(this.minutes(),2)}),D("hmmss",0,0,function(){return""+Yi.apply(this)+se(this.minutes(),2)+se(this.seconds(),2)}),D("Hmm",0,0,function(){return""+this.hours()+se(this.minutes(),2)}),D("Hmmss",0,0,function(){return""+this.hours()+se(this.minutes(),2)+se(this.seconds(),2)});function Yr(e,r){D(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),r)})}Yr("a",!0),Yr("A",!1);function Hr(e,r){return r._meridiemParse}E("a",Hr),E("A",Hr),E("H",$,$i),E("h",$,Rt),E("k",$,Rt),E("HH",$,ae),E("hh",$,ae),E("kk",$,ae),E("hmm",Nr),E("hmmss",Rr),E("Hmm",Nr),E("Hmmss",Rr),F(["H","HH"],K),F(["k","kk"],function(e,r,s){var a=x(e);r[K]=a===24?0:a}),F(["a","A"],function(e,r,s){s._isPm=s._locale.isPM(e),s._meridiem=e}),F(["h","hh"],function(e,r,s){r[K]=x(e),w(s).bigHour=!0}),F("hmm",function(e,r,s){var a=e.length-2;r[K]=x(e.substr(0,a)),r[Ee]=x(e.substr(a)),w(s).bigHour=!0}),F("hmmss",function(e,r,s){var a=e.length-4,c=e.length-2;r[K]=x(e.substr(0,a)),r[Ee]=x(e.substr(a,2)),r[Be]=x(e.substr(c)),w(s).bigHour=!0}),F("Hmm",function(e,r,s){var a=e.length-2;r[K]=x(e.substr(0,a)),r[Ee]=x(e.substr(a))}),F("Hmmss",function(e,r,s){var a=e.length-4,c=e.length-2;r[K]=x(e.substr(0,a)),r[Ee]=x(e.substr(a,2)),r[Be]=x(e.substr(c))});function tl(e){return(e+"").toLowerCase().charAt(0)==="p"}var nl=/[ap]\.?m?\.?/i,il=Ft("Hours",!0);function rl(e,r,s){return e>11?s?"pm":"PM":s?"am":"AM"}var Gr={calendar:kt,longDateFormat:Di,invalidDate:Mi,ordinal:Ai,dayOfMonthOrdinalParse:xi,relativeTime:Ii,months:va,monthsShort:Lr,week:ka,weekdays:Va,weekdaysMin:$a,weekdaysShort:jr,meridiemParse:nl},j={},ln={},cn;function ol(e,r){var s,a=Math.min(e.length,r.length);for(s=0;s<a;s+=1)if(e[s]!==r[s])return s;return a}function zr(e){return e&&e.toLowerCase().replace("_","-")}function sl(e){for(var r=0,s,a,c,h;r<e.length;){for(h=zr(e[r]).split("-"),s=h.length,a=zr(e[r+1]),a=a?a.split("-"):null;s>0;){if(c=Bn(h.slice(0,s).join("-")),c)return c;if(a&&a.length>=s&&ol(h,a)>=s-1)break;s--}r++}return cn}function al(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Bn(e){var r=null,s;if(j[e]===void 0&&typeof Qt<"u"&&Qt&&Qt.exports&&al(e))try{r=cn._abbr,s=wo,s("./locale/"+e),tt(r)}catch{j[e]=null}return j[e]}function tt(e,r){var s;return e&&(f(r)?s=Ye(e):s=Hi(e,r),s?cn=s:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),cn._abbr}function Hi(e,r){if(r!==null){var s,a=Gr;if(r.abbr=e,j[e]!=null)gt("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),a=j[e]._config;else if(r.parentLocale!=null)if(j[r.parentLocale]!=null)a=j[r.parentLocale]._config;else if(s=Bn(r.parentLocale),s!=null)a=s._config;else return ln[r.parentLocale]||(ln[r.parentLocale]=[]),ln[r.parentLocale].push({name:e,config:r}),null;return j[e]=new Ve(Le(a,r)),ln[e]&&ln[e].forEach(function(c){Hi(c.name,c.config)}),tt(e),j[e]}else return delete j[e],null}function ll(e,r){if(r!=null){var s,a,c=Gr;j[e]!=null&&j[e].parentLocale!=null?j[e].set(Le(j[e]._config,r)):(a=Bn(e),a!=null&&(c=a._config),r=Le(c,r),a==null&&(r.abbr=e),s=new Ve(r),s.parentLocale=j[e],j[e]=s),tt(e)}else j[e]!=null&&(j[e].parentLocale!=null?(j[e]=j[e].parentLocale,e===tt()&&tt(e)):j[e]!=null&&delete j[e]);return j[e]}function Ye(e){var r;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return cn;if(!o(e)){if(r=Bn(e),r)return r;e=[e]}return sl(e)}function cl(){return Xe(j)}function Gi(e){var r,s=e._a;return s&&w(e).overflow===-2&&(r=s[We]<0||s[We]>11?We:s[Ie]<1||s[Ie]>Wi(s[ne],s[We])?Ie:s[K]<0||s[K]>24||s[K]===24&&(s[Ee]!==0||s[Be]!==0||s[yt]!==0)?K:s[Ee]<0||s[Ee]>59?Ee:s[Be]<0||s[Be]>59?Be:s[yt]<0||s[yt]>999?yt:-1,w(e)._overflowDayOfYear&&(r<ne||r>Ie)&&(r=Ie),w(e)._overflowWeeks&&r===-1&&(r=fa),w(e)._overflowWeekday&&r===-1&&(r=pa),w(e).overflow=r),e}var ul=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,dl=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,hl=/Z|[+-]\d\d(?::?\d\d)?/,jn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],zi=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],fl=/^\/?Date\((-?\d+)/i,pl=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,gl={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function qr(e){var r,s,a=e._i,c=ul.exec(a)||dl.exec(a),h,g,C,M,k=jn.length,le=zi.length;if(c){for(w(e).iso=!0,r=0,s=k;r<s;r++)if(jn[r][1].exec(c[1])){g=jn[r][0],h=jn[r][2]!==!1;break}if(g==null){e._isValid=!1;return}if(c[3]){for(r=0,s=le;r<s;r++)if(zi[r][1].exec(c[3])){C=(c[2]||" ")+zi[r][0];break}if(C==null){e._isValid=!1;return}}if(!h&&C!=null){e._isValid=!1;return}if(c[4])if(hl.exec(c[4]))M="Z";else{e._isValid=!1;return}e._f=g+(C||"")+(M||""),Ki(e)}else e._isValid=!1}function ml(e,r,s,a,c,h){var g=[yl(e),Lr.indexOf(r),parseInt(s,10),parseInt(a,10),parseInt(c,10)];return h&&g.push(parseInt(h,10)),g}function yl(e){var r=parseInt(e,10);return r<=49?2e3+r:r<=999?1900+r:r}function bl(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function vl(e,r,s){if(e){var a=jr.indexOf(e),c=new Date(r[0],r[1],r[2]).getDay();if(a!==c)return w(s).weekdayMismatch=!0,s._isValid=!1,!1}return!0}function _l(e,r,s){if(e)return gl[e];if(r)return 0;var a=parseInt(s,10),c=a%100,h=(a-c)/100;return h*60+c}function Kr(e){var r=pl.exec(bl(e._i)),s;if(r){if(s=ml(r[4],r[3],r[2],r[5],r[6],r[7]),!vl(r[1],s,e))return;e._a=s,e._tzm=_l(r[8],r[9],r[10]),e._d=sn.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),w(e).rfc2822=!0}else e._isValid=!1}function wl(e){var r=fl.exec(e._i);if(r!==null){e._d=new Date(+r[1]);return}if(qr(e),e._isValid===!1)delete e._isValid;else return;if(Kr(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:i.createFromInputFallback(e)}i.createFromInputFallback=Q("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Pt(e,r,s){return e??r??s}function Sl(e){var r=new Date(i.now());return e._useUTC?[r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()]:[r.getFullYear(),r.getMonth(),r.getDate()]}function qi(e){var r,s,a=[],c,h,g;if(!e._d){for(c=Sl(e),e._w&&e._a[Ie]==null&&e._a[We]==null&&Cl(e),e._dayOfYear!=null&&(g=Pt(e._a[ne],c[ne]),(e._dayOfYear>rn(g)||e._dayOfYear===0)&&(w(e)._overflowDayOfYear=!0),s=sn(g,0,e._dayOfYear),e._a[We]=s.getUTCMonth(),e._a[Ie]=s.getUTCDate()),r=0;r<3&&e._a[r]==null;++r)e._a[r]=a[r]=c[r];for(;r<7;r++)e._a[r]=a[r]=e._a[r]==null?r===2?1:0:e._a[r];e._a[K]===24&&e._a[Ee]===0&&e._a[Be]===0&&e._a[yt]===0&&(e._nextDay=!0,e._a[K]=0),e._d=(e._useUTC?sn:Aa).apply(null,a),h=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[K]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==h&&(w(e).weekdayMismatch=!0)}}function Cl(e){var r,s,a,c,h,g,C,M,k;r=e._w,r.GG!=null||r.W!=null||r.E!=null?(h=1,g=4,s=Pt(r.GG,e._a[ne],an(U(),1,4).year),a=Pt(r.W,1),c=Pt(r.E,1),(c<1||c>7)&&(M=!0)):(h=e._locale._week.dow,g=e._locale._week.doy,k=an(U(),h,g),s=Pt(r.gg,e._a[ne],k.year),a=Pt(r.w,k.week),r.d!=null?(c=r.d,(c<0||c>6)&&(M=!0)):r.e!=null?(c=r.e+h,(r.e<0||r.e>6)&&(M=!0)):c=h),a<1||a>je(s,h,g)?w(e)._overflowWeeks=!0:M!=null?w(e)._overflowWeekday=!0:(C=Br(s,a,c,h,g),e._a[ne]=C.year,e._dayOfYear=C.dayOfYear)}i.ISO_8601=function(){},i.RFC_2822=function(){};function Ki(e){if(e._f===i.ISO_8601){qr(e);return}if(e._f===i.RFC_2822){Kr(e);return}e._a=[],w(e).empty=!0;var r=""+e._i,s,a,c,h,g,C=r.length,M=0,k,le;for(c=kn(e._f,e._locale).match(Qe)||[],le=c.length,s=0;s<le;s++)h=c[s],a=(r.match(ua(h,e))||[])[0],a&&(g=r.substr(0,r.indexOf(a)),g.length>0&&w(e).unusedInput.push(g),r=r.slice(r.indexOf(a)+a.length),M+=a.length),Ce[h]?(a?w(e).empty=!1:w(e).unusedTokens.push(h),ha(h,a,e)):e._strict&&!a&&w(e).unusedTokens.push(h);w(e).charsLeftOver=C-M,r.length>0&&w(e).unusedInput.push(r),e._a[K]<=12&&w(e).bigHour===!0&&e._a[K]>0&&(w(e).bigHour=void 0),w(e).parsedDateParts=e._a.slice(0),w(e).meridiem=e._meridiem,e._a[K]=El(e._locale,e._a[K],e._meridiem),k=w(e).era,k!==null&&(e._a[ne]=e._locale.erasConvertYear(k,e._a[ne])),qi(e),Gi(e)}function El(e,r,s){var a;return s==null?r:e.meridiemHour!=null?e.meridiemHour(r,s):(e.isPM!=null&&(a=e.isPM(s),a&&r<12&&(r+=12),!a&&r===12&&(r=0)),r)}function Dl(e){var r,s,a,c,h,g,C=!1,M=e._f.length;if(M===0){w(e).invalidFormat=!0,e._d=new Date(NaN);return}for(c=0;c<M;c++)h=0,g=!1,r=q({},e),e._useUTC!=null&&(r._useUTC=e._useUTC),r._f=e._f[c],Ki(r),O(r)&&(g=!0),h+=w(r).charsLeftOver,h+=w(r).unusedTokens.length*10,w(r).score=h,C?h<a&&(a=h,s=r):(a==null||h<a||g)&&(a=h,s=r,g&&(C=!0));_(e,s||r)}function Tl(e){if(!e._d){var r=en(e._i),s=r.day===void 0?r.date:r.day;e._a=y([r.year,r.month,s,r.hour,r.minute,r.second,r.millisecond],function(a){return a&&parseInt(a,10)}),qi(e)}}function Ml(e){var r=new ye(Gi(Zr(e)));return r._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Zr(e){var r=e._i,s=e._f;return e._locale=e._locale||Ye(e._l),r===null||s===void 0&&r===""?P({nullInput:!0}):(typeof r=="string"&&(e._i=r=e._locale.preparse(r)),X(r)?new ye(Gi(r)):(m(r)?e._d=r:o(s)?Dl(e):s?Ki(e):Ol(e),O(e)||(e._d=null),e))}function Ol(e){var r=e._i;f(r)?e._d=new Date(i.now()):m(r)?e._d=new Date(r.valueOf()):typeof r=="string"?wl(e):o(r)?(e._a=y(r.slice(0),function(s){return parseInt(s,10)}),qi(e)):l(r)?Tl(e):p(r)?e._d=new Date(r):i.createFromInputFallback(e)}function Jr(e,r,s,a,c){var h={};return(r===!0||r===!1)&&(a=r,r=void 0),(s===!0||s===!1)&&(a=s,s=void 0),(l(e)&&d(e)||o(e)&&e.length===0)&&(e=void 0),h._isAMomentObject=!0,h._useUTC=h._isUTC=c,h._l=s,h._i=e,h._f=r,h._strict=a,Ml(h)}function U(e,r,s,a){return Jr(e,r,s,a,!1)}var Al=Q("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=U.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:P()}),xl=Q("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=U.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:P()});function Xr(e,r){var s,a;if(r.length===1&&o(r[0])&&(r=r[0]),!r.length)return U();for(s=r[0],a=1;a<r.length;++a)(!r[a].isValid()||r[a][e](s))&&(s=r[a]);return s}function kl(){var e=[].slice.call(arguments,0);return Xr("isBefore",e)}function Il(){var e=[].slice.call(arguments,0);return Xr("isAfter",e)}var Nl=function(){return Date.now?Date.now():+new Date},un=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Rl(e){var r,s=!1,a,c=un.length;for(r in e)if(u(e,r)&&!(H.call(un,r)!==-1&&(e[r]==null||!isNaN(e[r]))))return!1;for(a=0;a<c;++a)if(e[un[a]]){if(s)return!1;parseFloat(e[un[a]])!==x(e[un[a]])&&(s=!0)}return!0}function Fl(){return this._isValid}function Pl(){return De(NaN)}function Yn(e){var r=en(e),s=r.year||0,a=r.quarter||0,c=r.month||0,h=r.week||r.isoWeek||0,g=r.day||0,C=r.hour||0,M=r.minute||0,k=r.second||0,le=r.millisecond||0;this._isValid=Rl(r),this._milliseconds=+le+k*1e3+M*6e4+C*1e3*60*60,this._days=+g+h*7,this._months=+c+a*3+s*12,this._data={},this._locale=Ye(),this._bubble()}function Hn(e){return e instanceof Yn}function Zi(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Ll(e,r,s){var a=Math.min(e.length,r.length),c=Math.abs(e.length-r.length),h=0,g;for(g=0;g<a;g++)(s&&e[g]!==r[g]||!s&&x(e[g])!==x(r[g]))&&h++;return h+c}function Qr(e,r){D(e,0,0,function(){var s=this.utcOffset(),a="+";return s<0&&(s=-s,a="-"),a+se(~~(s/60),2)+r+se(~~s%60,2)})}Qr("Z",":"),Qr("ZZ",""),E("Z",Vn),E("ZZ",Vn),F(["Z","ZZ"],function(e,r,s){s._useUTC=!0,s._tzm=Ji(Vn,e)});var Vl=/([\+\-]|\d\d)/gi;function Ji(e,r){var s=(r||"").match(e),a,c,h;return s===null?null:(a=s[s.length-1]||[],c=(a+"").match(Vl)||["-",0,0],h=+(c[1]*60)+x(c[2]),h===0?0:c[0]==="+"?h:-h)}function Xi(e,r){var s,a;return r._isUTC?(s=r.clone(),a=(X(e)||m(e)?e.valueOf():U(e).valueOf())-s.valueOf(),s._d.setTime(s._d.valueOf()+a),i.updateOffset(s,!1),s):U(e).local()}function Qi(e){return-Math.round(e._d.getTimezoneOffset())}i.updateOffset=function(){};function $l(e,r,s){var a=this._offset||0,c;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Ji(Vn,e),e===null)return this}else Math.abs(e)<16&&!s&&(e=e*60);return!this._isUTC&&r&&(c=Qi(this)),this._offset=e,this._isUTC=!0,c!=null&&this.add(c,"m"),a!==e&&(!r||this._changeInProgress?io(this,De(e-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,i.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?a:Qi(this)}function Ul(e,r){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,r),this):-this.utcOffset()}function Wl(e){return this.utcOffset(0,e)}function Bl(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Qi(this),"m")),this}function jl(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Ji(la,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Yl(e){return this.isValid()?(e=e?U(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Hl(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Gl(){if(!f(this._isDSTShifted))return this._isDSTShifted;var e={},r;return q(e,this),e=Zr(e),e._a?(r=e._isUTC?v(e._a):U(e._a),this._isDSTShifted=this.isValid()&&Ll(e._a,r.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function zl(){return this.isValid()?!this._isUTC:!1}function ql(){return this.isValid()?this._isUTC:!1}function eo(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Kl=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Zl=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function De(e,r){var s=e,a=null,c,h,g;return Hn(e)?s={ms:e._milliseconds,d:e._days,M:e._months}:p(e)||!isNaN(+e)?(s={},r?s[r]=+e:s.milliseconds=+e):(a=Kl.exec(e))?(c=a[1]==="-"?-1:1,s={y:0,d:x(a[Ie])*c,h:x(a[K])*c,m:x(a[Ee])*c,s:x(a[Be])*c,ms:x(Zi(a[yt]*1e3))*c}):(a=Zl.exec(e))?(c=a[1]==="-"?-1:1,s={y:bt(a[2],c),M:bt(a[3],c),w:bt(a[4],c),d:bt(a[5],c),h:bt(a[6],c),m:bt(a[7],c),s:bt(a[8],c)}):s==null?s={}:typeof s=="object"&&("from"in s||"to"in s)&&(g=Jl(U(s.from),U(s.to)),s={},s.ms=g.milliseconds,s.M=g.months),h=new Yn(s),Hn(e)&&u(e,"_locale")&&(h._locale=e._locale),Hn(e)&&u(e,"_isValid")&&(h._isValid=e._isValid),h}De.fn=Yn.prototype,De.invalid=Pl;function bt(e,r){var s=e&&parseFloat(e.replace(",","."));return(isNaN(s)?0:s)*r}function to(e,r){var s={};return s.months=r.month()-e.month()+(r.year()-e.year())*12,e.clone().add(s.months,"M").isAfter(r)&&--s.months,s.milliseconds=+r-+e.clone().add(s.months,"M"),s}function Jl(e,r){var s;return e.isValid()&&r.isValid()?(r=Xi(r,e),e.isBefore(r)?s=to(e,r):(s=to(r,e),s.milliseconds=-s.milliseconds,s.months=-s.months),s):{milliseconds:0,months:0}}function no(e,r){return function(s,a){var c,h;return a!==null&&!isNaN(+a)&&(gt(r,"moment()."+r+"(period, number) is deprecated. Please use moment()."+r+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),h=s,s=a,a=h),c=De(s,a),io(this,c,e),this}}function io(e,r,s,a){var c=r._milliseconds,h=Zi(r._days),g=Zi(r._months);e.isValid()&&(a=a??!0,g&&$r(e,on(e,"Month")+g*s),h&&Pr(e,"Date",on(e,"Date")+h*s),c&&e._d.setTime(e._d.valueOf()+c*s),a&&i.updateOffset(e,h||g))}var Xl=no(1,"add"),Ql=no(-1,"subtract");function ro(e){return typeof e=="string"||e instanceof String}function ec(e){return X(e)||m(e)||ro(e)||p(e)||nc(e)||tc(e)||e===null||e===void 0}function tc(e){var r=l(e)&&!d(e),s=!1,a=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],c,h,g=a.length;for(c=0;c<g;c+=1)h=a[c],s=s||u(e,h);return r&&s}function nc(e){var r=o(e),s=!1;return r&&(s=e.filter(function(a){return!p(a)&&ro(e)}).length===0),r&&s}function ic(e){var r=l(e)&&!d(e),s=!1,a=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],c,h;for(c=0;c<a.length;c+=1)h=a[c],s=s||u(e,h);return r&&s}function rc(e,r){var s=e.diff(r,"days",!0);return s<-6?"sameElse":s<-1?"lastWeek":s<0?"lastDay":s<1?"sameDay":s<2?"nextDay":s<7?"nextWeek":"sameElse"}function oc(e,r){arguments.length===1&&(arguments[0]?ec(arguments[0])?(e=arguments[0],r=void 0):ic(arguments[0])&&(r=arguments[0],e=void 0):(e=void 0,r=void 0));var s=e||U(),a=Xi(s,this).startOf("day"),c=i.calendarFormat(this,a)||"sameElse",h=r&&(oe(r[c])?r[c].call(this,s):r[c]);return this.format(h||this.localeData().calendar(c,this,U(s)))}function sc(){return new ye(this)}function ac(e,r){var s=X(e)?e:U(e);return this.isValid()&&s.isValid()?(r=ue(r)||"millisecond",r==="millisecond"?this.valueOf()>s.valueOf():s.valueOf()<this.clone().startOf(r).valueOf()):!1}function lc(e,r){var s=X(e)?e:U(e);return this.isValid()&&s.isValid()?(r=ue(r)||"millisecond",r==="millisecond"?this.valueOf()<s.valueOf():this.clone().endOf(r).valueOf()<s.valueOf()):!1}function cc(e,r,s,a){var c=X(e)?e:U(e),h=X(r)?r:U(r);return this.isValid()&&c.isValid()&&h.isValid()?(a=a||"()",(a[0]==="("?this.isAfter(c,s):!this.isBefore(c,s))&&(a[1]===")"?this.isBefore(h,s):!this.isAfter(h,s))):!1}function uc(e,r){var s=X(e)?e:U(e),a;return this.isValid()&&s.isValid()?(r=ue(r)||"millisecond",r==="millisecond"?this.valueOf()===s.valueOf():(a=s.valueOf(),this.clone().startOf(r).valueOf()<=a&&a<=this.clone().endOf(r).valueOf())):!1}function dc(e,r){return this.isSame(e,r)||this.isAfter(e,r)}function hc(e,r){return this.isSame(e,r)||this.isBefore(e,r)}function fc(e,r,s){var a,c,h;if(!this.isValid())return NaN;if(a=Xi(e,this),!a.isValid())return NaN;switch(c=(a.utcOffset()-this.utcOffset())*6e4,r=ue(r),r){case"year":h=Gn(this,a)/12;break;case"month":h=Gn(this,a);break;case"quarter":h=Gn(this,a)/3;break;case"second":h=(this-a)/1e3;break;case"minute":h=(this-a)/6e4;break;case"hour":h=(this-a)/36e5;break;case"day":h=(this-a-c)/864e5;break;case"week":h=(this-a-c)/6048e5;break;default:h=this-a}return s?h:be(h)}function Gn(e,r){if(e.date()<r.date())return-Gn(r,e);var s=(r.year()-e.year())*12+(r.month()-e.month()),a=e.clone().add(s,"months"),c,h;return r-a<0?(c=e.clone().add(s-1,"months"),h=(r-a)/(a-c)):(c=e.clone().add(s+1,"months"),h=(r-a)/(c-a)),-(s+h)||0}i.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",i.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function pc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function gc(e){if(!this.isValid())return null;var r=e!==!0,s=r?this.clone().utc():this;return s.year()<0||s.year()>9999?mt(s,r?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):oe(Date.prototype.toISOString)?r?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",mt(s,"Z")):mt(s,r?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function mc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",r="",s,a,c,h;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",r="Z"),s="["+e+'("]',a=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",c="-MM-DD[T]HH:mm:ss.SSS",h=r+'[")]',this.format(s+a+c+h)}function yc(e){e||(e=this.isUtc()?i.defaultFormatUtc:i.defaultFormat);var r=mt(this,e);return this.localeData().postformat(r)}function bc(e,r){return this.isValid()&&(X(e)&&e.isValid()||U(e).isValid())?De({to:this,from:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function vc(e){return this.from(U(),e)}function _c(e,r){return this.isValid()&&(X(e)&&e.isValid()||U(e).isValid())?De({from:this,to:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function wc(e){return this.to(U(),e)}function oo(e){var r;return e===void 0?this._locale._abbr:(r=Ye(e),r!=null&&(this._locale=r),this)}var so=Q("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function ao(){return this._locale}var zn=1e3,Lt=60*zn,qn=60*Lt,lo=(365*400+97)*24*qn;function Vt(e,r){return(e%r+r)%r}function co(e,r,s){return e<100&&e>=0?new Date(e+400,r,s)-lo:new Date(e,r,s).valueOf()}function uo(e,r,s){return e<100&&e>=0?Date.UTC(e+400,r,s)-lo:Date.UTC(e,r,s)}function Sc(e){var r,s;if(e=ue(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(s=this._isUTC?uo:co,e){case"year":r=s(this.year(),0,1);break;case"quarter":r=s(this.year(),this.month()-this.month()%3,1);break;case"month":r=s(this.year(),this.month(),1);break;case"week":r=s(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":r=s(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":r=s(this.year(),this.month(),this.date());break;case"hour":r=this._d.valueOf(),r-=Vt(r+(this._isUTC?0:this.utcOffset()*Lt),qn);break;case"minute":r=this._d.valueOf(),r-=Vt(r,Lt);break;case"second":r=this._d.valueOf(),r-=Vt(r,zn);break}return this._d.setTime(r),i.updateOffset(this,!0),this}function Cc(e){var r,s;if(e=ue(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(s=this._isUTC?uo:co,e){case"year":r=s(this.year()+1,0,1)-1;break;case"quarter":r=s(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":r=s(this.year(),this.month()+1,1)-1;break;case"week":r=s(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":r=s(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":r=s(this.year(),this.month(),this.date()+1)-1;break;case"hour":r=this._d.valueOf(),r+=qn-Vt(r+(this._isUTC?0:this.utcOffset()*Lt),qn)-1;break;case"minute":r=this._d.valueOf(),r+=Lt-Vt(r,Lt)-1;break;case"second":r=this._d.valueOf(),r+=zn-Vt(r,zn)-1;break}return this._d.setTime(r),i.updateOffset(this,!0),this}function Ec(){return this._d.valueOf()-(this._offset||0)*6e4}function Dc(){return Math.floor(this.valueOf()/1e3)}function Tc(){return new Date(this.valueOf())}function Mc(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Oc(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Ac(){return this.isValid()?this.toISOString():null}function xc(){return O(this)}function kc(){return _({},w(this))}function Ic(){return w(this).overflow}function Nc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}D("N",0,0,"eraAbbr"),D("NN",0,0,"eraAbbr"),D("NNN",0,0,"eraAbbr"),D("NNNN",0,0,"eraName"),D("NNNNN",0,0,"eraNarrow"),D("y",["y",1],"yo","eraYear"),D("y",["yy",2],0,"eraYear"),D("y",["yyy",3],0,"eraYear"),D("y",["yyyy",4],0,"eraYear"),E("N",er),E("NN",er),E("NNN",er),E("NNNN",Yc),E("NNNNN",Hc),F(["N","NN","NNN","NNNN","NNNNN"],function(e,r,s,a){var c=s._locale.erasParse(e,a,s._strict);c?w(s).era=c:w(s).invalidEra=e}),E("y",Nt),E("yy",Nt),E("yyy",Nt),E("yyyy",Nt),E("yo",Gc),F(["y","yy","yyy","yyyy"],ne),F(["yo"],function(e,r,s,a){var c;s._locale._eraYearOrdinalRegex&&(c=e.match(s._locale._eraYearOrdinalRegex)),s._locale.eraYearOrdinalParse?r[ne]=s._locale.eraYearOrdinalParse(e,c):r[ne]=parseInt(e,10)});function Rc(e,r){var s,a,c,h=this._eras||Ye("en")._eras;for(s=0,a=h.length;s<a;++s){switch(typeof h[s].since){case"string":c=i(h[s].since).startOf("day"),h[s].since=c.valueOf();break}switch(typeof h[s].until){case"undefined":h[s].until=1/0;break;case"string":c=i(h[s].until).startOf("day").valueOf(),h[s].until=c.valueOf();break}}return h}function Fc(e,r,s){var a,c,h=this.eras(),g,C,M;for(e=e.toUpperCase(),a=0,c=h.length;a<c;++a)if(g=h[a].name.toUpperCase(),C=h[a].abbr.toUpperCase(),M=h[a].narrow.toUpperCase(),s)switch(r){case"N":case"NN":case"NNN":if(C===e)return h[a];break;case"NNNN":if(g===e)return h[a];break;case"NNNNN":if(M===e)return h[a];break}else if([g,C,M].indexOf(e)>=0)return h[a]}function Pc(e,r){var s=e.since<=e.until?1:-1;return r===void 0?i(e.since).year():i(e.since).year()+(r-e.offset)*s}function Lc(){var e,r,s,a=this.localeData().eras();for(e=0,r=a.length;e<r;++e)if(s=this.clone().startOf("day").valueOf(),a[e].since<=s&&s<=a[e].until||a[e].until<=s&&s<=a[e].since)return a[e].name;return""}function Vc(){var e,r,s,a=this.localeData().eras();for(e=0,r=a.length;e<r;++e)if(s=this.clone().startOf("day").valueOf(),a[e].since<=s&&s<=a[e].until||a[e].until<=s&&s<=a[e].since)return a[e].narrow;return""}function $c(){var e,r,s,a=this.localeData().eras();for(e=0,r=a.length;e<r;++e)if(s=this.clone().startOf("day").valueOf(),a[e].since<=s&&s<=a[e].until||a[e].until<=s&&s<=a[e].since)return a[e].abbr;return""}function Uc(){var e,r,s,a,c=this.localeData().eras();for(e=0,r=c.length;e<r;++e)if(s=c[e].since<=c[e].until?1:-1,a=this.clone().startOf("day").valueOf(),c[e].since<=a&&a<=c[e].until||c[e].until<=a&&a<=c[e].since)return(this.year()-i(c[e].since).year())*s+c[e].offset;return this.year()}function Wc(e){return u(this,"_erasNameRegex")||tr.call(this),e?this._erasNameRegex:this._erasRegex}function Bc(e){return u(this,"_erasAbbrRegex")||tr.call(this),e?this._erasAbbrRegex:this._erasRegex}function jc(e){return u(this,"_erasNarrowRegex")||tr.call(this),e?this._erasNarrowRegex:this._erasRegex}function er(e,r){return r.erasAbbrRegex(e)}function Yc(e,r){return r.erasNameRegex(e)}function Hc(e,r){return r.erasNarrowRegex(e)}function Gc(e,r){return r._eraYearOrdinalRegex||Nt}function tr(){var e=[],r=[],s=[],a=[],c,h,g,C,M,k=this.eras();for(c=0,h=k.length;c<h;++c)g=Ue(k[c].name),C=Ue(k[c].abbr),M=Ue(k[c].narrow),r.push(g),e.push(C),s.push(M),a.push(g),a.push(C),a.push(M);this._erasRegex=new RegExp("^("+a.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+r.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+s.join("|")+")","i")}D(0,["gg",2],0,function(){return this.weekYear()%100}),D(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Kn(e,r){D(0,[e,e.length],0,r)}Kn("gggg","weekYear"),Kn("ggggg","weekYear"),Kn("GGGG","isoWeekYear"),Kn("GGGGG","isoWeekYear"),E("G",Ln),E("g",Ln),E("GG",$,ae),E("gg",$,ae),E("GGGG",Vi,Li),E("gggg",Vi,Li),E("GGGGG",Pn,Rn),E("ggggg",Pn,Rn),nn(["gggg","ggggg","GGGG","GGGGG"],function(e,r,s,a){r[a.substr(0,2)]=x(e)}),nn(["gg","GG"],function(e,r,s,a){r[a]=i.parseTwoDigitYear(e)});function zc(e){return ho.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function qc(e){return ho.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Kc(){return je(this.year(),1,4)}function Zc(){return je(this.isoWeekYear(),1,4)}function Jc(){var e=this.localeData()._week;return je(this.year(),e.dow,e.doy)}function Xc(){var e=this.localeData()._week;return je(this.weekYear(),e.dow,e.doy)}function ho(e,r,s,a,c){var h;return e==null?an(this,a,c).year:(h=je(e,a,c),r>h&&(r=h),Qc.call(this,e,r,s,a,c))}function Qc(e,r,s,a,c){var h=Br(e,r,s,a,c),g=sn(h.year,0,h.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}D("Q",0,"Qo","quarter"),E("Q",Nn),F("Q",function(e,r){r[We]=(x(e)-1)*3});function eu(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}D("D",["DD",2],"Do","date"),E("D",$,Rt),E("DD",$,ae),E("Do",function(e,r){return e?r._dayOfMonthOrdinalParse||r._ordinalParse:r._dayOfMonthOrdinalParseLenient}),F(["D","DD"],Ie),F("Do",function(e,r){r[Ie]=x(e.match($)[0])});var fo=Ft("Date",!0);D("DDD",["DDDD",3],"DDDo","dayOfYear"),E("DDD",Fn),E("DDDD",Ir),F(["DDD","DDDD"],function(e,r,s){s._dayOfYear=x(e)});function tu(e){var r=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?r:this.add(e-r,"d")}D("m",["mm",2],0,"minute"),E("m",$,$i),E("mm",$,ae),F(["m","mm"],Ee);var nu=Ft("Minutes",!1);D("s",["ss",2],0,"second"),E("s",$,$i),E("ss",$,ae),F(["s","ss"],Be);var iu=Ft("Seconds",!1);D("S",0,0,function(){return~~(this.millisecond()/100)}),D(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),D(0,["SSS",3],0,"millisecond"),D(0,["SSSS",4],0,function(){return this.millisecond()*10}),D(0,["SSSSS",5],0,function(){return this.millisecond()*100}),D(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),D(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),D(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),D(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),E("S",Fn,Nn),E("SS",Fn,ae),E("SSS",Fn,Ir);var nt,po;for(nt="SSSS";nt.length<=9;nt+="S")E(nt,Nt);function ru(e,r){r[yt]=x(("0."+e)*1e3)}for(nt="S";nt.length<=9;nt+="S")F(nt,ru);po=Ft("Milliseconds",!1),D("z",0,0,"zoneAbbr"),D("zz",0,0,"zoneName");function ou(){return this._isUTC?"UTC":""}function su(){return this._isUTC?"Coordinated Universal Time":""}var b=ye.prototype;b.add=Xl,b.calendar=oc,b.clone=sc,b.diff=fc,b.endOf=Cc,b.format=yc,b.from=bc,b.fromNow=vc,b.to=_c,b.toNow=wc,b.get=ma,b.invalidAt=Ic,b.isAfter=ac,b.isBefore=lc,b.isBetween=cc,b.isSame=uc,b.isSameOrAfter=dc,b.isSameOrBefore=hc,b.isValid=xc,b.lang=so,b.locale=oo,b.localeData=ao,b.max=xl,b.min=Al,b.parsingFlags=kc,b.set=ya,b.startOf=Sc,b.subtract=Ql,b.toArray=Mc,b.toObject=Oc,b.toDate=Tc,b.toISOString=gc,b.inspect=mc,typeof Symbol<"u"&&Symbol.for!=null&&(b[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),b.toJSON=Ac,b.toString=pc,b.unix=Dc,b.valueOf=Ec,b.creationData=Nc,b.eraName=Lc,b.eraNarrow=Vc,b.eraAbbr=$c,b.eraYear=Uc,b.year=Fr,b.isLeapYear=ga,b.weekYear=zc,b.isoWeekYear=qc,b.quarter=b.quarters=eu,b.month=Ur,b.daysInMonth=Ta,b.week=b.weeks=Ra,b.isoWeek=b.isoWeeks=Fa,b.weeksInYear=Jc,b.weeksInWeekYear=Xc,b.isoWeeksInYear=Kc,b.isoWeeksInISOWeekYear=Zc,b.date=fo,b.day=b.days=qa,b.weekday=Ka,b.isoWeekday=Za,b.dayOfYear=tu,b.hour=b.hours=il,b.minute=b.minutes=nu,b.second=b.seconds=iu,b.millisecond=b.milliseconds=po,b.utcOffset=$l,b.utc=Wl,b.local=Bl,b.parseZone=jl,b.hasAlignedHourOffset=Yl,b.isDST=Hl,b.isLocal=zl,b.isUtcOffset=ql,b.isUtc=eo,b.isUTC=eo,b.zoneAbbr=ou,b.zoneName=su,b.dates=Q("dates accessor is deprecated. Use date instead.",fo),b.months=Q("months accessor is deprecated. Use month instead",Ur),b.years=Q("years accessor is deprecated. Use year instead",Fr),b.zone=Q("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Ul),b.isDSTShifted=Q("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Gl);function au(e){return U(e*1e3)}function lu(){return U.apply(null,arguments).parseZone()}function go(e){return e}var R=Ve.prototype;R.calendar=It,R.longDateFormat=Ti,R.invalidDate=Oi,R.ordinal=ki,R.preparse=go,R.postformat=go,R.relativeTime=Ni,R.pastFuture=Ri,R.set=xt,R.eras=Rc,R.erasParse=Fc,R.erasConvertYear=Pc,R.erasAbbrRegex=Bc,R.erasNameRegex=Wc,R.erasNarrowRegex=jc,R.months=Sa,R.monthsShort=Ca,R.monthsParse=Da,R.monthsRegex=Oa,R.monthsShortRegex=Ma,R.week=xa,R.firstDayOfYear=Na,R.firstDayOfWeek=Ia,R.weekdays=ja,R.weekdaysMin=Ha,R.weekdaysShort=Ya,R.weekdaysParse=za,R.weekdaysRegex=Ja,R.weekdaysShortRegex=Xa,R.weekdaysMinRegex=Qa,R.isPM=tl,R.meridiem=rl;function Zn(e,r,s,a){var c=Ye(),h=v().set(a,r);return c[s](h,e)}function mo(e,r,s){if(p(e)&&(r=e,e=void 0),e=e||"",r!=null)return Zn(e,r,s,"month");var a,c=[];for(a=0;a<12;a++)c[a]=Zn(e,a,s,"month");return c}function nr(e,r,s,a){typeof e=="boolean"?(p(r)&&(s=r,r=void 0),r=r||""):(r=e,s=r,e=!1,p(r)&&(s=r,r=void 0),r=r||"");var c=Ye(),h=e?c._week.dow:0,g,C=[];if(s!=null)return Zn(r,(s+h)%7,a,"day");for(g=0;g<7;g++)C[g]=Zn(r,(g+h)%7,a,"day");return C}function cu(e,r){return mo(e,r,"months")}function uu(e,r){return mo(e,r,"monthsShort")}function du(e,r,s){return nr(e,r,s,"weekdays")}function hu(e,r,s){return nr(e,r,s,"weekdaysShort")}function fu(e,r,s){return nr(e,r,s,"weekdaysMin")}tt("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var r=e%10,s=x(e%100/10)===1?"th":r===1?"st":r===2?"nd":r===3?"rd":"th";return e+s}}),i.lang=Q("moment.lang is deprecated. Use moment.locale instead.",tt),i.langData=Q("moment.langData is deprecated. Use moment.localeData instead.",Ye);var He=Math.abs;function pu(){var e=this._data;return this._milliseconds=He(this._milliseconds),this._days=He(this._days),this._months=He(this._months),e.milliseconds=He(e.milliseconds),e.seconds=He(e.seconds),e.minutes=He(e.minutes),e.hours=He(e.hours),e.months=He(e.months),e.years=He(e.years),this}function yo(e,r,s,a){var c=De(r,s);return e._milliseconds+=a*c._milliseconds,e._days+=a*c._days,e._months+=a*c._months,e._bubble()}function gu(e,r){return yo(this,e,r,1)}function mu(e,r){return yo(this,e,r,-1)}function bo(e){return e<0?Math.floor(e):Math.ceil(e)}function yu(){var e=this._milliseconds,r=this._days,s=this._months,a=this._data,c,h,g,C,M;return e>=0&&r>=0&&s>=0||e<=0&&r<=0&&s<=0||(e+=bo(ir(s)+r)*864e5,r=0,s=0),a.milliseconds=e%1e3,c=be(e/1e3),a.seconds=c%60,h=be(c/60),a.minutes=h%60,g=be(h/60),a.hours=g%24,r+=be(g/24),M=be(vo(r)),s+=M,r-=bo(ir(M)),C=be(s/12),s%=12,a.days=r,a.months=s,a.years=C,this}function vo(e){return e*4800/146097}function ir(e){return e*146097/4800}function bu(e){if(!this.isValid())return NaN;var r,s,a=this._milliseconds;if(e=ue(e),e==="month"||e==="quarter"||e==="year")switch(r=this._days+a/864e5,s=this._months+vo(r),e){case"month":return s;case"quarter":return s/3;case"year":return s/12}else switch(r=this._days+Math.round(ir(this._months)),e){case"week":return r/7+a/6048e5;case"day":return r+a/864e5;case"hour":return r*24+a/36e5;case"minute":return r*1440+a/6e4;case"second":return r*86400+a/1e3;case"millisecond":return Math.floor(r*864e5)+a;default:throw new Error("Unknown unit "+e)}}function Ge(e){return function(){return this.as(e)}}var _o=Ge("ms"),vu=Ge("s"),_u=Ge("m"),wu=Ge("h"),Su=Ge("d"),Cu=Ge("w"),Eu=Ge("M"),Du=Ge("Q"),Tu=Ge("y"),Mu=_o;function Ou(){return De(this)}function Au(e){return e=ue(e),this.isValid()?this[e+"s"]():NaN}function vt(e){return function(){return this.isValid()?this._data[e]:NaN}}var xu=vt("milliseconds"),ku=vt("seconds"),Iu=vt("minutes"),Nu=vt("hours"),Ru=vt("days"),Fu=vt("months"),Pu=vt("years");function Lu(){return be(this.days()/7)}var ze=Math.round,$t={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Vu(e,r,s,a,c){return c.relativeTime(r||1,!!s,e,a)}function $u(e,r,s,a){var c=De(e).abs(),h=ze(c.as("s")),g=ze(c.as("m")),C=ze(c.as("h")),M=ze(c.as("d")),k=ze(c.as("M")),le=ze(c.as("w")),qe=ze(c.as("y")),it=h<=s.ss&&["s",h]||h<s.s&&["ss",h]||g<=1&&["m"]||g<s.m&&["mm",g]||C<=1&&["h"]||C<s.h&&["hh",C]||M<=1&&["d"]||M<s.d&&["dd",M];return s.w!=null&&(it=it||le<=1&&["w"]||le<s.w&&["ww",le]),it=it||k<=1&&["M"]||k<s.M&&["MM",k]||qe<=1&&["y"]||["yy",qe],it[2]=r,it[3]=+e>0,it[4]=a,Vu.apply(null,it)}function Uu(e){return e===void 0?ze:typeof e=="function"?(ze=e,!0):!1}function Wu(e,r){return $t[e]===void 0?!1:r===void 0?$t[e]:($t[e]=r,e==="s"&&($t.ss=r-1),!0)}function Bu(e,r){if(!this.isValid())return this.localeData().invalidDate();var s=!1,a=$t,c,h;return typeof e=="object"&&(r=e,e=!1),typeof e=="boolean"&&(s=e),typeof r=="object"&&(a=Object.assign({},$t,r),r.s!=null&&r.ss==null&&(a.ss=r.s-1)),c=this.localeData(),h=$u(this,!s,a,c),s&&(h=c.pastFuture(+this,h)),c.postformat(h)}var rr=Math.abs;function Ut(e){return(e>0)-(e<0)||+e}function Jn(){if(!this.isValid())return this.localeData().invalidDate();var e=rr(this._milliseconds)/1e3,r=rr(this._days),s=rr(this._months),a,c,h,g,C=this.asSeconds(),M,k,le,qe;return C?(a=be(e/60),c=be(a/60),e%=60,a%=60,h=be(s/12),s%=12,g=e?e.toFixed(3).replace(/\.?0+$/,""):"",M=C<0?"-":"",k=Ut(this._months)!==Ut(C)?"-":"",le=Ut(this._days)!==Ut(C)?"-":"",qe=Ut(this._milliseconds)!==Ut(C)?"-":"",M+"P"+(h?k+h+"Y":"")+(s?k+s+"M":"")+(r?le+r+"D":"")+(c||a||e?"T":"")+(c?qe+c+"H":"")+(a?qe+a+"M":"")+(e?qe+g+"S":"")):"P0D"}var I=Yn.prototype;I.isValid=Fl,I.abs=pu,I.add=gu,I.subtract=mu,I.as=bu,I.asMilliseconds=_o,I.asSeconds=vu,I.asMinutes=_u,I.asHours=wu,I.asDays=Su,I.asWeeks=Cu,I.asMonths=Eu,I.asQuarters=Du,I.asYears=Tu,I.valueOf=Mu,I._bubble=yu,I.clone=Ou,I.get=Au,I.milliseconds=xu,I.seconds=ku,I.minutes=Iu,I.hours=Nu,I.days=Ru,I.weeks=Lu,I.months=Fu,I.years=Pu,I.humanize=Bu,I.toISOString=Jn,I.toString=Jn,I.toJSON=Jn,I.locale=oo,I.localeData=ao,I.toIsoString=Q("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Jn),I.lang=so,D("X",0,0,"unix"),D("x",0,0,"valueOf"),E("x",Ln),E("X",ca),F("X",function(e,r,s){s._d=new Date(parseFloat(e)*1e3)}),F("x",function(e,r,s){s._d=new Date(x(e))});return i.version="2.30.1",n(U),i.fn=b,i.min=kl,i.max=Il,i.now=Nl,i.utc=v,i.unix=au,i.months=cu,i.isDate=m,i.locale=tt,i.invalid=P,i.duration=De,i.isMoment=X,i.weekdays=du,i.parseZone=lu,i.localeData=Ye,i.isDuration=Hn,i.monthsShort=uu,i.weekdaysMin=fu,i.defineLocale=Hi,i.updateLocale=ll,i.locales=cl,i.weekdaysShort=hu,i.normalizeUnits=ue,i.relativeTimeRounding=Uu,i.relativeTimeThreshold=Wu,i.calendarFormat=rc,i.prototype=b,i.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},i})});function Yu(t){t||(xo(Yu),t=A(Io));let i=new Xn(n=>t.onDestroy(n.next.bind(n)));return n=>n.pipe(Mo(i))}var ts=(()=>{class t{_renderer;_elementRef;onChange=n=>{};onTouched=()=>{};constructor(n,o){this._renderer=n,this._elementRef=o}setProperty(n,o){this._renderer.setProperty(this._elementRef.nativeElement,n,o)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}static \u0275fac=function(o){return new(o||t)(ce(hn),ce(Ct))};static \u0275dir=re({type:t})}return t})(),Hu=(()=>{class t extends ts{static \u0275fac=(()=>{let n;return function(l){return(n||(n=G(t)))(l||t)}})();static \u0275dir=re({type:t,features:[ee]})}return t})(),ns=new ie("");var Gu={provide:ns,useExisting:sr(()=>is),multi:!0};function zu(){let t=dr()?dr().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var qu=new ie(""),is=(()=>{class t extends ts{_compositionMode;_composing=!1;constructor(n,o,l){super(n,o),this._compositionMode=l,this._compositionMode==null&&(this._compositionMode=!zu())}writeValue(n){let o=n??"";this.setProperty("value",o)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}static \u0275fac=function(o){return new(o||t)(ce(hn),ce(Ct),ce(qu,8))};static \u0275dir=re({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(o,l){o&1&&ri("input",function(d){return l._handleInput(d.target.value)})("blur",function(){return l.onTouched()})("compositionstart",function(){return l._compositionStart()})("compositionend",function(d){return l._compositionEnd(d.target.value)})},standalone:!1,features:[pe([Gu]),ee]})}return t})();var Ku=new ie(""),Zu=new ie("");function rs(t){return t!=null}function os(t){return Fo(t)?Qn(t):t}function ss(t){let i={};return t.forEach(n=>{i=n!=null?N(N({},i),n):i}),Object.keys(i).length===0?null:i}function as(t,i){return i.map(n=>n(t))}function Ju(t){return!t.validate}function ls(t){return t.map(i=>Ju(i)?i:n=>i.validate(n))}function Xu(t){if(!t)return null;let i=t.filter(rs);return i.length==0?null:function(n){return ss(as(n,i))}}function cs(t){return t!=null?Xu(ls(t)):null}function Qu(t){if(!t)return null;let i=t.filter(rs);return i.length==0?null:function(n){let o=as(n,i).map(os);return So(o).pipe(wt(ss))}}function us(t){return t!=null?Qu(ls(t)):null}function qo(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function ed(t){return t._rawValidators}function td(t){return t._rawAsyncValidators}function hr(t){return t?Array.isArray(t)?t:[t]:[]}function ci(t,i){return Array.isArray(t)?t.includes(i):t===i}function Ko(t,i){let n=hr(i);return hr(t).forEach(l=>{ci(n,l)||n.push(l)}),n}function Zo(t,i){return hr(i).filter(n=>!ci(t,n))}var ui=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=cs(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=us(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,n){return this.control?this.control.hasError(i,n):!1}getError(i,n){return this.control?this.control.getError(i,n):null}},fr=class extends ui{name;get formDirective(){return null}get path(){return null}},Sn=class extends ui{_parent=null;name=null;valueAccessor=null},pr=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},nd={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},wf=Te(N({},nd),{"[class.ng-submitted]":"isSubmitted"}),Sf=(()=>{class t extends pr{constructor(n){super(n)}static \u0275fac=function(o){return new(o||t)(ce(Sn,2))};static \u0275dir=re({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(o,l){o&2&&lr("ng-untouched",l.isUntouched)("ng-touched",l.isTouched)("ng-pristine",l.isPristine)("ng-dirty",l.isDirty)("ng-valid",l.isValid)("ng-invalid",l.isInvalid)("ng-pending",l.isPending)},standalone:!1,features:[ee]})}return t})();var bn="VALID",li="INVALID",Yt="PENDING",vn="DISABLED",Gt=class{},di=class extends Gt{value;source;constructor(i,n){super(),this.value=i,this.source=n}},_n=class extends Gt{pristine;source;constructor(i,n){super(),this.pristine=i,this.source=n}},wn=class extends Gt{touched;source;constructor(i,n){super(),this.touched=i,this.source=n}},Ht=class extends Gt{status;source;constructor(i,n){super(),this.status=i,this.source=n}};function id(t){return(hi(t)?t.validators:t)||null}function rd(t){return Array.isArray(t)?cs(t):t||null}function od(t,i){return(hi(i)?i.asyncValidators:t)||null}function sd(t){return Array.isArray(t)?us(t):t||null}function hi(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var gr=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,n){this._assignValidators(i),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Re(this.statusReactive)}set status(i){Re(()=>this.statusReactive.set(i))}_status=ct(()=>this.statusReactive());statusReactive=ve(void 0);get valid(){return this.status===bn}get invalid(){return this.status===li}get pending(){return this.status==Yt}get disabled(){return this.status===vn}get enabled(){return this.status!==vn}errors;get pristine(){return Re(this.pristineReactive)}set pristine(i){Re(()=>this.pristineReactive.set(i))}_pristine=ct(()=>this.pristineReactive());pristineReactive=ve(!0);get dirty(){return!this.pristine}get touched(){return Re(this.touchedReactive)}set touched(i){Re(()=>this.touchedReactive.set(i))}_touched=ct(()=>this.touchedReactive());touchedReactive=ve(!1);get untouched(){return!this.touched}_events=new _t;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(Ko(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(Ko(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(Zo(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(Zo(i,this._rawAsyncValidators))}hasValidator(i){return ci(this._rawValidators,i)}hasAsyncValidator(i){return ci(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let n=this.touched===!1;this.touched=!0;let o=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched(Te(N({},i),{sourceControl:o})),n&&i.emitEvent!==!1&&this._events.next(new wn(!0,o))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(i))}markAsUntouched(i={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let o=i.sourceControl??this;this._forEachChild(l=>{l.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:o})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,o),n&&i.emitEvent!==!1&&this._events.next(new wn(!1,o))}markAsDirty(i={}){let n=this.pristine===!0;this.pristine=!1;let o=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty(Te(N({},i),{sourceControl:o})),n&&i.emitEvent!==!1&&this._events.next(new _n(!1,o))}markAsPristine(i={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let o=i.sourceControl??this;this._forEachChild(l=>{l.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,o),n&&i.emitEvent!==!1&&this._events.next(new _n(!0,o))}markAsPending(i={}){this.status=Yt;let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ht(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending(Te(N({},i),{sourceControl:n}))}disable(i={}){let n=this._parentMarkedDirty(i.onlySelf);this.status=vn,this.errors=null,this._forEachChild(l=>{l.disable(Te(N({},i),{onlySelf:!0}))}),this._updateValue();let o=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new di(this.value,o)),this._events.next(new Ht(this.status,o)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Te(N({},i),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(l=>l(!0))}enable(i={}){let n=this._parentMarkedDirty(i.onlySelf);this.status=bn,this._forEachChild(o=>{o.enable(Te(N({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(Te(N({},i),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(o=>o(!1))}_updateAncestors(i,n){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let o=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===bn||this.status===Yt)&&this._runAsyncValidator(o,i.emitEvent)}let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new di(this.value,n)),this._events.next(new Ht(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity(Te(N({},i),{sourceControl:n}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?vn:bn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,n){if(this.asyncValidator){this.status=Yt,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let o=os(this.asyncValidator(this));this._asyncValidationSubscription=o.subscribe(l=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(l,{emitEvent:n,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,n={}){this.errors=i,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(i){let n=i;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((o,l)=>o&&o._find(l),this)}getError(i,n){let o=n?this.get(n):this;return o&&o.errors?o.errors[i]:null}hasError(i,n){return!!this.getError(i,n)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,n,o){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||o)&&this._events.next(new Ht(this.status,n)),this._parent&&this._parent._updateControlsErrors(i,n,o)}_initObservables(){this.valueChanges=new ot,this.statusChanges=new ot}_calculateStatus(){return this._allControlsDisabled()?vn:this.errors?li:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Yt)?Yt:this._anyControlsHaveStatus(li)?li:bn}_anyControlsHaveStatus(i){return this._anyControls(n=>n.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,n){let o=!this._anyControlsDirty(),l=this.pristine!==o;this.pristine=o,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),l&&this._events.next(new _n(this.pristine,n))}_updateTouched(i={},n){this.touched=this._anyControlsTouched(),this._events.next(new wn(this.touched,n)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){hi(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let n=this._parent&&this._parent.dirty;return!i&&!!n&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=rd(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=sd(this._rawAsyncValidators)}};var ds=new ie("",{providedIn:"root",factory:()=>mr}),mr="always";function ad(t,i){return[...i.path,t]}function ld(t,i,n=mr){ud(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),dd(t,i),fd(t,i),hd(t,i),cd(t,i)}function Jo(t,i){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(i)})}function cd(t,i){if(i.valueAccessor.setDisabledState){let n=o=>{i.valueAccessor.setDisabledState(o)};t.registerOnDisabledChange(n),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function ud(t,i){let n=ed(t);i.validator!==null?t.setValidators(qo(n,i.validator)):typeof n=="function"&&t.setValidators([n]);let o=td(t);i.asyncValidator!==null?t.setAsyncValidators(qo(o,i.asyncValidator)):typeof o=="function"&&t.setAsyncValidators([o]);let l=()=>t.updateValueAndValidity();Jo(i._rawValidators,l),Jo(i._rawAsyncValidators,l)}function dd(t,i){i.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&hs(t,i)})}function hd(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&hs(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function hs(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function fd(t,i){let n=(o,l)=>{i.valueAccessor.writeValue(o),l&&i.viewToModelUpdate(o)};t.registerOnChange(n),i._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function pd(t,i){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(i,n.currentValue)}function gd(t){return Object.getPrototypeOf(t.constructor)===Hu}function md(t,i){if(!i)return null;Array.isArray(i);let n,o,l;return i.forEach(u=>{u.constructor===is?n=u:gd(u)?o=u:l=u}),l||o||n||null}function Xo(t,i){let n=t.indexOf(i);n>-1&&t.splice(n,1)}function Qo(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var yd=class extends gr{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,n,o){super(id(n),od(o,n)),this._applyFormState(i),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),hi(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Qo(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,n={}){this.value=this._pendingValue=i,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(o=>o(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(i,n={}){this.setValue(i,n)}reset(i=this.defaultValue,n={}){this._applyFormState(i),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Xo(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Xo(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){Qo(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var bd={provide:Sn,useExisting:sr(()=>vd)},es=Promise.resolve(),vd=(()=>{class t extends Sn{_changeDetectorRef;callSetDisabledState;control=new yd;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new ot;constructor(n,o,l,u,d,f){super(),this._changeDetectorRef=d,this.callSetDisabledState=f,this._parent=n,this._setValidators(o),this._setAsyncValidators(l),this.valueAccessor=md(this,u)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let o=n.name.previousValue;this.formDirective.removeControl({name:o,path:this._getPath(o)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),pd(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ld(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){es.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let o=n.isDisabled.currentValue,l=o!==0&&J(o);es.then(()=>{l&&!this.control.disabled?this.control.disable():!l&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?ad(n,this._parent):[n]}static \u0275fac=function(o){return new(o||t)(ce(fr,9),ce(Ku,10),ce(Zu,10),ce(ns,10),ce(si,8),ce(ds,8))};static \u0275dir=re({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[pe([bd]),ee,St]})}return t})();var _d=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=fe({type:t});static \u0275inj=he({})}return t})();var Ef=(()=>{class t{static withConfig(n){return{ngModule:t,providers:[{provide:ds,useValue:n.callSetDisabledState??mr}]}}static \u0275fac=function(o){return new(o||t)};static \u0275mod=fe({type:t});static \u0275inj=he({imports:[_d]})}return t})();function fs(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function Cn(t,i){if(t&&i){let n=o=>{fs(t,o)||(t.classList?t.classList.add(o):t.className+=" "+o)};[i].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(n))}}function wd(){return window.innerWidth-document.documentElement.offsetWidth}function zt(t){for(let i of document?.styleSheets)try{for(let n of i?.cssRules)for(let o of n?.style)if(t.test(o))return{name:o,value:n.style.getPropertyValue(o).trim()}}catch{}return null}function Of(t="p-overflow-hidden"){let i=zt(/-scrollbar-width$/);i?.name&&document.body.style.setProperty(i.name,wd()+"px"),Cn(document.body,t)}function Mt(t,i){if(t&&i){let n=o=>{t.classList?t.classList.remove(o):t.className=t.className.replace(new RegExp("(^|\\b)"+o.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(n))}}function Af(t="p-overflow-hidden"){let i=zt(/-scrollbar-width$/);i?.name&&document.body.style.removeProperty(i.name),Mt(document.body,t)}function ps(t){let i={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),i}function gs(){let t=window,i=document,n=i.documentElement,o=i.getElementsByTagName("body")[0],l=t.innerWidth||n.clientWidth||o.clientWidth,u=t.innerHeight||n.clientHeight||o.clientHeight;return{width:l,height:u}}function Sd(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function Cd(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function xf(t,i,n=!0){var o,l,u,d;if(t){let f=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:ps(t),p=f.height,m=f.width,y=i.offsetHeight,_=i.offsetWidth,v=i.getBoundingClientRect(),S=Cd(),w=Sd(),T=gs(),O,P,Y="top";v.top+y+p>T.height?(O=v.top+S-p,Y="bottom",O<0&&(O=S)):O=y+v.top+S,v.left+m>T.width?P=Math.max(0,v.left+w+_-m):P=v.left+w,t.style.top=O+"px",t.style.left=P+"px",t.style.transformOrigin=Y,n&&(t.style.marginTop=Y==="bottom"?`calc(${(l=(o=zt(/-anchor-gutter$/))==null?void 0:o.value)!=null?l:"2px"} * -1)`:(d=(u=zt(/-anchor-gutter$/))==null?void 0:u.value)!=null?d:"")}}function ms(t,i){if(t instanceof HTMLElement){let n=t.offsetWidth;if(i){let o=getComputedStyle(t);n+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return n}return 0}function kf(t,i,n=!0){var o,l,u,d;if(t){let f=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:ps(t),p=i.offsetHeight,m=i.getBoundingClientRect(),y=gs(),_,v,S="top";m.top+p+f.height>y.height?(_=-1*f.height,S="bottom",m.top+_<0&&(_=-1*m.top)):_=p,f.width>y.width?v=m.left*-1:m.left+f.width>y.width?v=(m.left+f.width-y.width)*-1:v=0,t.style.top=_+"px",t.style.left=v+"px",t.style.transformOrigin=S,n&&(t.style.marginTop=S==="bottom"?`calc(${(l=(o=zt(/-anchor-gutter$/))==null?void 0:o.value)!=null?l:"2px"} * -1)`:(d=(u=zt(/-anchor-gutter$/))==null?void 0:u.value)!=null?d:"")}}function qt(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function ys(t){let i=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?i=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?i=t.el.nativeElement:i=t.el)),qt(i)?i:void 0}function If(t,i){let n=ys(t);if(n)n.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function fi(t,i={}){if(qt(t)){let n=(o,l)=>{var u,d;let f=(u=t?.$attrs)!=null&&u[o]?[(d=t?.$attrs)==null?void 0:d[o]]:[];return[l].flat().reduce((p,m)=>{if(m!=null){let y=typeof m;if(y==="string"||y==="number")p.push(m);else if(y==="object"){let _=Array.isArray(m)?n(o,m):Object.entries(m).map(([v,S])=>o==="style"&&(S||S===0)?`${v.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${S}`:S?v:void 0);p=_.length?p.concat(_.filter(v=>!!v)):p}}return p},f)};Object.entries(i).forEach(([o,l])=>{if(l!=null){let u=o.match(/^on(.+)/);u?t.addEventListener(u[1].toLowerCase(),l):o==="p-bind"||o==="pBind"?fi(t,l):(l=o==="class"?[...new Set(n("class",l))].join(" ").trim():o==="style"?n("style",l).join(";").trim():l,(t.$attrs=t.$attrs||{})&&(t.$attrs[o]=l),t.setAttribute(o,l))}})}}function Nf(t,i={},...n){if(t){let o=document.createElement(t);return fi(o,i),o.append(...n),o}}function Rf(t,i){if(t){t.style.opacity="0";let n=+new Date,o="0",l=function(){o=`${+t.style.opacity+(new Date().getTime()-n)/i}`,t.style.opacity=o,n=+new Date,+o<1&&(window.requestAnimationFrame&&requestAnimationFrame(l)||setTimeout(l,16))};l()}}function Ed(t,i){return qt(t)?Array.from(t.querySelectorAll(i)):[]}function Dd(t,i){return qt(t)?t.matches(i)?t:t.querySelector(i):null}function Ff(t,i){t&&document.activeElement!==t&&t.focus(i)}function Pf(t,i){if(qt(t)){let n=t.getAttribute(i);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}function bs(t,i=""){let n=Ed(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),o=[];for(let l of n)getComputedStyle(l).display!="none"&&getComputedStyle(l).visibility!="hidden"&&o.push(l);return o}function Lf(t,i){let n=bs(t,i);return n.length>0?n[0]:null}function yr(t){if(t){let i=t.offsetHeight,n=getComputedStyle(t);return i-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),i}return 0}function Vf(t,i){let n=bs(t,i);return n.length>0?n[n.length-1]:null}function vs(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function _s(t,i){if(t){let n=t.offsetHeight;if(i){let o=getComputedStyle(t);n+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return n}return 0}function br(t){if(t){let i=t.offsetWidth,n=getComputedStyle(t);return i-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),i}return 0}function $f(t){return t?getComputedStyle(t).direction==="rtl":!1}function Uf(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function ws(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function Wf(t,i){let n=ys(t);if(n)n.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function Ss(t,i="",n){qt(t)&&n!==null&&n!==void 0&&t.setAttribute(i,n)}function Cs(){let t=new Map;return{on(i,n){let o=t.get(i);return o?o.push(n):o=[n],t.set(i,o),this},off(i,n){let o=t.get(i);return o&&o.splice(o.indexOf(n)>>>0,1),this},emit(i,n){let o=t.get(i);o&&o.slice().map(l=>{l(n)})},clear(){t.clear()}}}var Td=Object.defineProperty,Es=Object.getOwnPropertySymbols,Md=Object.prototype.hasOwnProperty,Od=Object.prototype.propertyIsEnumerable,Ds=(t,i,n)=>i in t?Td(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,Ad=(t,i)=>{for(var n in i||(i={}))Md.call(i,n)&&Ds(t,n,i[n]);if(Es)for(var n of Es(i))Od.call(i,n)&&Ds(t,n,i[n]);return t};function we(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function vr(t,i,n=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||n.has(t)||n.has(i))return!1;n.add(t).add(i);let o=Array.isArray(t),l=Array.isArray(i),u,d,f;if(o&&l){if(d=t.length,d!=i.length)return!1;for(u=d;u--!==0;)if(!vr(t[u],i[u],n))return!1;return!0}if(o!=l)return!1;let p=t instanceof Date,m=i instanceof Date;if(p!=m)return!1;if(p&&m)return t.getTime()==i.getTime();let y=t instanceof RegExp,_=i instanceof RegExp;if(y!=_)return!1;if(y&&_)return t.toString()==i.toString();let v=Object.keys(t);if(d=v.length,d!==Object.keys(i).length)return!1;for(u=d;u--!==0;)if(!Object.prototype.hasOwnProperty.call(i,v[u]))return!1;for(u=d;u--!==0;)if(f=v[u],!vr(t[f],i[f],n))return!1;return!0}function xd(t,i){return vr(t,i)}function Ms(t){return!!(t&&t.constructor&&t.call&&t.apply)}function B(t){return!we(t)}function _r(t,i){if(!t||!i)return null;try{let n=t[i];if(B(n))return n}catch{}if(Object.keys(t).length){if(Ms(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let n=i.split("."),o=t;for(let l=0,u=n.length;l<u;++l){if(o==null)return null;o=o[n[l]]}return o}}return null}function Os(t,i,n){return n?_r(t,n)===_r(i,n):xd(t,i)}function Hf(t,i){if(t!=null&&i&&i.length){for(let n of i)if(Os(t,n))return!0}return!1}function Ae(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function _e(t,...i){return Ms(t)?t(...i):t}function ut(t,i=!0){return typeof t=="string"&&(i||t!=="")}function Ts(t){return ut(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function pi(t,i="",n={}){let o=Ts(i).split("."),l=o.shift();return l?Ae(t)?pi(_e(t[Object.keys(t).find(u=>Ts(u)===l)||""],n),o.join("."),n):void 0:_e(t,n)}function gi(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function As(t){return B(t)&&!isNaN(t)}function me(t,i){if(i){let n=i.test(t);return i.lastIndex=0,n}return!1}function En(...t){let i=(n={},o={})=>{let l=Ad({},n);return Object.keys(o).forEach(u=>{Ae(o[u])&&u in n&&Ae(n[u])?l[u]=i(n[u],o[u]):l[u]=o[u]}),l};return t.reduce((n,o,l)=>l===0?o:i(n,o),{})}function Ot(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function mi(t){return ut(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,n)=>n===0?i:"-"+i.toLowerCase()).toLowerCase():t}function wr(t){return ut(t)?t.replace(/[A-Z]/g,(i,n)=>n===0?i:"."+i.toLowerCase()).toLowerCase():t}var yi={};function Dn(t="pui_id_"){return yi.hasOwnProperty(t)||(yi[t]=0),yi[t]++,`${t}${yi[t]}`}function kd(){let t=[],i=(d,f,p=999)=>{let m=l(d,f,p),y=m.value+(m.key===d?0:p)+1;return t.push({key:d,value:y}),y},n=d=>{t=t.filter(f=>f.value!==d)},o=(d,f)=>l(d,f).value,l=(d,f,p=0)=>[...t].reverse().find(m=>f?!0:m.key===d)||{key:d,value:p},u=d=>d&&parseInt(d.style.zIndex,10)||0;return{get:u,set:(d,f,p)=>{f&&(f.style.zIndex=String(i(d,!0,p)))},clear:d=>{d&&(n(u(d)),d.style.zIndex="")},getCurrent:d=>o(d,!0)}}var qf=kd();var te=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var lp=(()=>{class t{clickSource=new _t;clickObservable=this.clickSource.asObservable();add(n){n&&this.clickSource.next(n)}static \u0275fac=function(o){return new(o||t)};static \u0275prov=W({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var xs=(()=>{class t{template;type;name;constructor(n){this.template=n}getType(){return this.name}static \u0275fac=function(o){return new(o||t)(ce(Ro))};static \u0275dir=re({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),dt=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=fe({type:t});static \u0275inj=he({imports:[Tt]})}return t})(),cp=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var Id=Object.defineProperty,Nd=Object.defineProperties,Rd=Object.getOwnPropertyDescriptors,vi=Object.getOwnPropertySymbols,Ns=Object.prototype.hasOwnProperty,Rs=Object.prototype.propertyIsEnumerable,ks=(t,i,n)=>i in t?Id(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,ke=(t,i)=>{for(var n in i||(i={}))Ns.call(i,n)&&ks(t,n,i[n]);if(vi)for(var n of vi(i))Rs.call(i,n)&&ks(t,n,i[n]);return t},Sr=(t,i)=>Nd(t,Rd(i)),Je=(t,i)=>{var n={};for(var o in t)Ns.call(t,o)&&i.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&vi)for(var o of vi(t))i.indexOf(o)<0&&Rs.call(t,o)&&(n[o]=t[o]);return n};function hp(...t){return En(...t)}var Fd=Cs(),Se=Fd;function Is(t,i){gi(t)?t.push(...i||[]):Ae(t)&&Object.assign(t,i)}function Pd(t){return Ae(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function Ld(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Cr(t="",i=""){return Ld(`${ut(t,!1)&&ut(i,!1)?`${t}-`:t}${i}`)}function Fs(t="",i=""){return`--${Cr(t,i)}`}function Vd(t=""){let i=(t.match(/{/g)||[]).length,n=(t.match(/}/g)||[]).length;return(i+n)%2!==0}function Ps(t,i="",n="",o=[],l){if(ut(t)){let u=/{([^}]*)}/g,d=t.trim();if(Vd(d))return;if(me(d,u)){let f=d.replaceAll(u,y=>{let v=y.replace(/{|}/g,"").split(".").filter(S=>!o.some(w=>me(S,w)));return`var(${Fs(n,mi(v.join("-")))}${B(l)?`, ${l}`:""})`}),p=/(\d+\s+[\+\-\*\/]\s+\d+)/g,m=/var\([^)]+\)/g;return me(f.replace(m,"0"),p)?`calc(${f})`:f}return d}else if(As(t))return t}function $d(t,i,n){ut(i,!1)&&t.push(`${i}:${n};`)}function Kt(t,i){return t?`${t}{${i}}`:""}var Zt=(...t)=>Ud(V.getTheme(),...t),Ud=(t={},i,n,o)=>{if(i){let{variable:l,options:u}=V.defaults||{},{prefix:d,transform:f}=t?.options||u||{},m=me(i,/{([^}]*)}/g)?i:`{${i}}`;return o==="value"||we(o)&&f==="strict"?V.getTokenValue(i):Ps(m,void 0,d,[l.excludedKeyRegex],n)}return""};function Wd(t,i={}){let n=V.defaults.variable,{prefix:o=n.prefix,selector:l=n.selector,excludedKeyRegex:u=n.excludedKeyRegex}=i,d=(m,y="")=>Object.entries(m).reduce((_,[v,S])=>{let w=me(v,u)?Cr(y):Cr(y,mi(v)),T=Pd(S);if(Ae(T)){let{variables:O,tokens:P}=d(T,w);Is(_.tokens,P),Is(_.variables,O)}else _.tokens.push((o?w.replace(`${o}-`,""):w).replaceAll("-",".")),$d(_.variables,Fs(w),Ps(T,w,o,[u]));return _},{variables:[],tokens:[]}),{variables:f,tokens:p}=d(t,o);return{value:f,tokens:p,declarations:f.join(""),css:Kt(l,f.join(""))}}var xe={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(n=>n!=="custom").map(n=>this.rules[n]);return[t].flat().map(n=>{var o;return(o=i.map(l=>l.resolve(n)).find(l=>l.matched))!=null?o:this.rules.custom.resolve(n)})}},_toVariables(t,i){return Wd(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:n,set:o,defaults:l}){var u,d,f,p,m,y,_;let{preset:v,options:S}=i,w,T,O,P,Y,L,q;if(B(v)&&S.transform!=="strict"){let{primitive:ye,semantic:X,extend:ft}=v,Q=X||{},{colorScheme:pt}=Q,gt=Je(Q,["colorScheme"]),oe=ft||{},{colorScheme:xt}=oe,Le=Je(oe,["colorScheme"]),Ve=pt||{},{dark:Xe}=Ve,kt=Je(Ve,["dark"]),It=xt||{},{dark:se}=It,Qe=Je(It,["dark"]),$e=B(ye)?this._toVariables({primitive:ye},S):{},et=B(gt)?this._toVariables({semantic:gt},S):{},Ce=B(kt)?this._toVariables({light:kt},S):{},D=B(Xe)?this._toVariables({dark:Xe},S):{},An=B(Le)?this._toVariables({semantic:Le},S):{},xn=B(Qe)?this._toVariables({light:Qe},S):{},mt=B(se)?this._toVariables({dark:se},S):{},[kn,Di]=[(u=$e.declarations)!=null?u:"",$e.tokens],[Ti,Mi]=[(d=et.declarations)!=null?d:"",et.tokens||[]],[Oi,Ai]=[(f=Ce.declarations)!=null?f:"",Ce.tokens||[]],[xi,ki]=[(p=D.declarations)!=null?p:"",D.tokens||[]],[Ii,Ni]=[(m=An.declarations)!=null?m:"",An.tokens||[]],[Ri,In]=[(y=xn.declarations)!=null?y:"",xn.tokens||[]],[ue,en]=[(_=mt.declarations)!=null?_:"",mt.tokens||[]];w=this.transformCSS(t,kn,"light","variable",S,o,l),T=Di;let Fi=this.transformCSS(t,`${Ti}${Oi}`,"light","variable",S,o,l),Pi=this.transformCSS(t,`${xi}`,"dark","variable",S,o,l);O=`${Fi}${Pi}`,P=[...new Set([...Mi,...Ai,...ki])];let Nn=this.transformCSS(t,`${Ii}${Ri}color-scheme:light`,"light","variable",S,o,l),ae=this.transformCSS(t,`${ue}color-scheme:dark`,"dark","variable",S,o,l);Y=`${Nn}${ae}`,L=[...new Set([...Ni,...In,...en])],q=_e(v.css,{dt:Zt})}return{primitive:{css:w,tokens:T},semantic:{css:O,tokens:P},global:{css:Y,tokens:L},style:q}},getPreset({name:t="",preset:i={},options:n,params:o,set:l,defaults:u,selector:d}){var f,p,m;let y,_,v;if(B(i)&&n.transform!=="strict"){let S=t.replace("-directive",""),w=i,{colorScheme:T,extend:O,css:P}=w,Y=Je(w,["colorScheme","extend","css"]),L=O||{},{colorScheme:q}=L,ye=Je(L,["colorScheme"]),X=T||{},{dark:ft}=X,Q=Je(X,["dark"]),pt=q||{},{dark:gt}=pt,oe=Je(pt,["dark"]),xt=B(Y)?this._toVariables({[S]:ke(ke({},Y),ye)},n):{},Le=B(Q)?this._toVariables({[S]:ke(ke({},Q),oe)},n):{},Ve=B(ft)?this._toVariables({[S]:ke(ke({},ft),gt)},n):{},[Xe,kt]=[(f=xt.declarations)!=null?f:"",xt.tokens||[]],[It,se]=[(p=Le.declarations)!=null?p:"",Le.tokens||[]],[Qe,$e]=[(m=Ve.declarations)!=null?m:"",Ve.tokens||[]],et=this.transformCSS(S,`${Xe}${It}`,"light","variable",n,l,u,d),Ce=this.transformCSS(S,Qe,"dark","variable",n,l,u,d);y=`${et}${Ce}`,_=[...new Set([...kt,...se,...$e])],v=_e(P,{dt:Zt})}return{css:y,tokens:_,style:v}},getPresetC({name:t="",theme:i={},params:n,set:o,defaults:l}){var u;let{preset:d,options:f}=i,p=(u=d?.components)==null?void 0:u[t];return this.getPreset({name:t,preset:p,options:f,params:n,set:o,defaults:l})},getPresetD({name:t="",theme:i={},params:n,set:o,defaults:l}){var u;let d=t.replace("-directive",""),{preset:f,options:p}=i,m=(u=f?.directives)==null?void 0:u[d];return this.getPreset({name:d,preset:m,options:p,params:n,set:o,defaults:l})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var n;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(n=t.darkModeSelector)!=null?n:i.options.darkModeSelector):[]},getLayerOrder(t,i={},n,o){let{cssLayer:l}=i;return l?`@layer ${_e(l.order||"primeui",n)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:n,props:o={},set:l,defaults:u}){let d=this.getCommon({name:t,theme:i,params:n,set:l,defaults:u}),f=Object.entries(o).reduce((p,[m,y])=>p.push(`${m}="${y}"`)&&p,[]).join(" ");return Object.entries(d||{}).reduce((p,[m,y])=>{if(y?.css){let _=Ot(y?.css),v=`${m}-variables`;p.push(`<style type="text/css" data-primevue-style-id="${v}" ${f}>${_}</style>`)}return p},[]).join("")},getStyleSheet({name:t="",theme:i={},params:n,props:o={},set:l,defaults:u}){var d;let f={name:t,theme:i,params:n,set:l,defaults:u},p=(d=t.includes("-directive")?this.getPresetD(f):this.getPresetC(f))==null?void 0:d.css,m=Object.entries(o).reduce((y,[_,v])=>y.push(`${_}="${v}"`)&&y,[]).join(" ");return p?`<style type="text/css" data-primevue-style-id="${t}-variables" ${m}>${Ot(p)}</style>`:""},createTokens(t={},i,n="",o="",l={}){return Object.entries(t).forEach(([u,d])=>{let f=me(u,i.variable.excludedKeyRegex)?n:n?`${n}.${wr(u)}`:wr(u),p=o?`${o}.${u}`:u;Ae(d)?this.createTokens(d,i,f,p,l):(l[f]||(l[f]={paths:[],computed(m,y={}){var _,v;return this.paths.length===1?(_=this.paths[0])==null?void 0:_.computed(this.paths[0].scheme,y.binding):m&&m!=="none"?(v=this.paths.find(S=>S.scheme===m))==null?void 0:v.computed(m,y.binding):this.paths.map(S=>S.computed(S.scheme,y[S.scheme]))}}),l[f].paths.push({path:p,value:d,scheme:p.includes("colorScheme.light")?"light":p.includes("colorScheme.dark")?"dark":"none",computed(m,y={}){let _=/{([^}]*)}/g,v=d;if(y.name=this.path,y.binding||(y.binding={}),me(d,_)){let w=d.trim().replaceAll(_,P=>{var Y;let L=P.replace(/{|}/g,""),q=(Y=l[L])==null?void 0:Y.computed(m,y);return gi(q)&&q.length===2?`light-dark(${q[0].value},${q[1].value})`:q?.value}),T=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,O=/var\([^)]+\)/g;v=me(w.replace(O,"0"),T)?`calc(${w})`:w}return we(y.binding)&&delete y.binding,{colorScheme:m,path:this.path,paths:y,value:v.includes("undefined")?void 0:v}}}))}),l},getTokenValue(t,i,n){var o;let u=(p=>p.split(".").filter(y=>!me(y.toLowerCase(),n.variable.excludedKeyRegex)).join("."))(i),d=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,f=[(o=t[u])==null?void 0:o.computed(d)].flat().filter(p=>p);return f.length===1?f[0].value:f.reduce((p={},m)=>{let y=m,{colorScheme:_}=y,v=Je(y,["colorScheme"]);return p[_]=v,p},void 0)},getSelectorRule(t,i,n,o){return n==="class"||n==="attr"?Kt(B(i)?`${t}${i},${t} ${i}`:t,o):Kt(t,B(i)?Kt(i,o):o)},transformCSS(t,i,n,o,l={},u,d,f){if(B(i)){let{cssLayer:p}=l;if(o!=="style"){let m=this.getColorSchemeOption(l,d);i=n==="dark"?m.reduce((y,{type:_,selector:v})=>(B(v)&&(y+=v.includes("[CSS]")?v.replace("[CSS]",i):this.getSelectorRule(v,f,_,i)),y),""):Kt(f??":root",i)}if(p){let m={name:"primeui",order:"primeui"};Ae(p)&&(m.name=_e(p.name,{name:t,type:o})),B(m.name)&&(i=Kt(`@layer ${m.name}`,i),u?.layerNames(m.name))}return i}return""}},V={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=Sr(ke({},i),{options:ke(ke({},this.defaults.options),i.options)}),this._tokens=xe.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),Se.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Sr(ke({},this.theme),{preset:t}),this._tokens=xe.createTokens(t,this.defaults),this.clearLoadedStyleNames(),Se.emit("preset:change",t),Se.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Sr(ke({},this.theme),{options:t}),this.clearLoadedStyleNames(),Se.emit("options:change",t),Se.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return xe.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return xe.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let n={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return xe.getPresetC(n)},getDirective(t="",i){let n={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return xe.getPresetD(n)},getCustomPreset(t="",i,n,o){let l={name:t,preset:i,options:this.options,selector:n,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return xe.getPreset(l)},getLayerOrderCSS(t=""){return xe.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,n="style",o){return xe.transformCSS(t,i,o,n,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,n={}){return xe.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,n={}){return xe.getStyleSheet({name:t,theme:this.theme,params:i,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),Se.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&Se.emit("theme:load"))}};var Bd=0,Ls=(()=>{class t{document=A(Fe);use(n,o={}){let l=!1,u=n,d=null,{immediate:f=!0,manual:p=!1,name:m=`style_${++Bd}`,id:y=void 0,media:_=void 0,nonce:v=void 0,first:S=!1,props:w={}}=o;if(this.document){if(d=this.document.querySelector(`style[data-primeng-style-id="${m}"]`)||y&&this.document.getElementById(y)||this.document.createElement("style"),!d.isConnected){u=n,fi(d,{type:"text/css",media:_,nonce:v});let T=this.document.head;S&&T.firstChild?T.insertBefore(d,T.firstChild):T.appendChild(d),Ss(d,"data-primeng-style-id",m)}return d.textContent!==u&&(d.textContent=u),{id:y,name:m,el:d,css:u}}}static \u0275fac=function(o){return new(o||t)};static \u0275prov=W({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Jt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},jd=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,Yd=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,de=(()=>{class t{name="base";useStyle=A(Ls);theme=jd;css=Yd;classes={};inlineStyles={};load=(n,o={},l=u=>u)=>{let u=l(_e(n,{dt:Zt}));return u?this.useStyle.use(Ot(u),N({name:this.name},o)):{}};loadCSS=(n={})=>this.load(this.css,n);loadTheme=(n={},o="")=>this.load(this.theme,n,(l="")=>V.transformCSS(n.name||this.name,`${l}${o}`));getCommonTheme=n=>V.getCommon(this.name,n);getComponentTheme=n=>V.getComponent(this.name,n);getDirectiveTheme=n=>V.getDirective(this.name,n);getPresetTheme=(n,o,l)=>V.getCustomPreset(this.name,n,o,l);getLayerOrderThemeCSS=()=>V.getLayerOrderCSS(this.name);getStyleSheet=(n="",o={})=>{if(this.css){let l=_e(this.css,{dt:Zt}),u=Ot(`${l}${n}`),d=Object.entries(o).reduce((f,[p,m])=>f.push(`${p}="${m}"`)&&f,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${d}>${u}</style>`}return""};getCommonThemeStyleSheet=(n,o={})=>V.getCommonStyleSheet(this.name,n,o);getThemeStyleSheet=(n,o={})=>{let l=[V.getStyleSheet(this.name,n,o)];if(this.theme){let u=this.name==="base"?"global-style":`${this.name}-style`,d=_e(this.theme,{dt:Zt}),f=Ot(V.transformCSS(u,d)),p=Object.entries(o).reduce((m,[y,_])=>m.push(`${y}="${_}"`)&&m,[]).join(" ");l.push(`<style type="text/css" data-primeng-style-id="${u}" ${p}>${f}</style>`)}return l.join("")};static \u0275fac=function(o){return new(o||t)};static \u0275prov=W({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Hd=(()=>{class t{theme=ve(void 0);csp=ve({nonce:void 0});isThemeChanged=!1;document=A(Fe);baseStyle=A(de);constructor(){jt(()=>{Se.on("theme:change",n=>{Re(()=>{this.isThemeChanged=!0,this.theme.set(n)})})}),jt(()=>{let n=this.theme();this.document&&n&&(this.isThemeChanged||this.onThemeChange(n),this.isThemeChanged=!1)})}ngOnDestroy(){V.clearLoadedStyleNames(),Se.clear()}onThemeChange(n){V.setTheme(n),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!V.isStyleNameLoaded("common")){let{primitive:n,semantic:o,global:l,style:u}=this.baseStyle.getCommonTheme?.()||{},d={nonce:this.csp?.()?.nonce};this.baseStyle.load(n?.css,N({name:"primitive-variables"},d)),this.baseStyle.load(o?.css,N({name:"semantic-variables"},d)),this.baseStyle.load(l?.css,N({name:"global-variables"},d)),this.baseStyle.loadTheme(N({name:"global-style"},d),u),V.setLoadedStyleName("common")}}setThemeConfig(n){let{theme:o,csp:l}=n||{};o&&this.theme.set(o),l&&this.csp.set(l)}static \u0275fac=function(o){return new(o||t)};static \u0275prov=W({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Er=(()=>{class t extends Hd{ripple=ve(!1);platformId=A(at);inputStyle=ve("outlined");inputVariant=ve("outlined");overlayOptions={};csp=ve({nonce:void 0});filterMatchModeOptions={text:[te.STARTS_WITH,te.CONTAINS,te.NOT_CONTAINS,te.ENDS_WITH,te.EQUALS,te.NOT_EQUALS],numeric:[te.EQUALS,te.NOT_EQUALS,te.LESS_THAN,te.LESS_THAN_OR_EQUAL_TO,te.GREATER_THAN,te.GREATER_THAN_OR_EQUAL_TO],date:[te.DATE_IS,te.DATE_IS_NOT,te.DATE_BEFORE,te.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new _t;translationObserver=this.translationSource.asObservable();getTranslation(n){return this.translation[n]}setTranslation(n){this.translation=N(N({},this.translation),n),this.translationSource.next(this.translation)}setConfig(n){let{csp:o,ripple:l,inputStyle:u,theme:d,overlayOptions:f,translation:p}=n||{};o&&this.csp.set(o),l&&this.ripple.set(l),u&&this.inputStyle.set(u),f&&(this.overlayOptions=f),p&&this.setTranslation(p),d&&this.setThemeConfig({theme:d,csp:o})}static \u0275fac=(()=>{let n;return function(l){return(n||(n=G(t)))(l||t)}})();static \u0275prov=W({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gd=new ie("PRIME_NG_CONFIG");function Bp(...t){let i=t?.map(o=>({provide:Gd,useValue:o,multi:!1})),n=Po(()=>{let o=A(Er);t?.forEach(l=>o.setConfig(l))});return ei([...i,n])}var Vs=(()=>{class t extends de{name="common";static \u0275fac=(()=>{let n;return function(l){return(n||(n=G(t)))(l||t)}})();static \u0275prov=W({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pe=(()=>{class t{document=A(Fe);platformId=A(at);el=A(Ct);injector=A(ti);cd=A(si);renderer=A(hn);config=A(Er);baseComponentStyle=A(Vs);baseStyle=A(de);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Dn("pc");_getHostInstance(n){if(n)return n?this.hostName?n.name===this.hostName?n:this._getHostInstance(n.parentInstance):n.parentInstance:void 0}_getOptionValue(n,o="",l={}){return pi(n,o,l)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(n){if(this.document&&!Go(this.platformId)){let{dt:o}=n;o&&o.currentValue&&(this._loadScopedThemeStyles(o.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(o.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let n=()=>{Jt.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),Jt.setLoadedStyleName("base")),this._loadThemeStyles()};n(),this._themeChangeListener(()=>n())}_loadCoreStyles(){!Jt.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Jt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!V.isStyleNameLoaded("common")){let{primitive:n,semantic:o,global:l,style:u}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(n?.css,N({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(o?.css,N({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(l?.css,N({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(N({name:"global-style"},this.styleOptions),u),V.setLoadedStyleName("common")}if(!V.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:n,style:o}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(n,N({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(N({name:`${this.componentStyle?.name}-style`},this.styleOptions),o),V.setLoadedStyleName(this.componentStyle?.name)}if(!V.isStyleNameLoaded("layer-order")){let n=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(n,N({name:"layer-order",first:!0},this.styleOptions)),V.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(n){let{css:o}=this.componentStyle?.getPresetTheme?.(n,`[${this.attrSelector}]`)||{},l=this.componentStyle?.load(o,N({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=l?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(n=()=>{}){Jt.clearLoadedStyleNames(),Se.on("theme:change",n)}cx(n,o){let l=this.parent?this.parent.componentStyle?.classes?.[n]:this.componentStyle?.classes?.[n];return typeof l=="function"?l({instance:this}):typeof l=="string"?l:n}sx(n){let o=this.componentStyle?.inlineStyles?.[n];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:N({},o)}get parent(){return this.parentInstance}static \u0275fac=function(o){return new(o||t)};static \u0275dir=re({type:t,inputs:{dt:"dt"},features:[pe([Vs,de]),St]})}return t})();var Dr=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(n,o){n&&o&&(n.classList?n.classList.add(o):n.className+=" "+o)}static addMultipleClasses(n,o){if(n&&o)if(n.classList){let l=o.trim().split(" ");for(let u=0;u<l.length;u++)n.classList.add(l[u])}else{let l=o.split(" ");for(let u=0;u<l.length;u++)n.className+=" "+l[u]}}static removeClass(n,o){n&&o&&(n.classList?n.classList.remove(o):n.className=n.className.replace(new RegExp("(^|\\b)"+o.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(n,o){n&&o&&[o].flat().filter(Boolean).forEach(l=>l.split(" ").forEach(u=>this.removeClass(n,u)))}static hasClass(n,o){return n&&o?n.classList?n.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(n.className):!1}static siblings(n){return Array.prototype.filter.call(n.parentNode.children,function(o){return o!==n})}static find(n,o){return Array.from(n.querySelectorAll(o))}static findSingle(n,o){return this.isElement(n)?n.querySelector(o):null}static index(n){let o=n.parentNode.childNodes,l=0;for(var u=0;u<o.length;u++){if(o[u]==n)return l;o[u].nodeType==1&&l++}return-1}static indexWithinGroup(n,o){let l=n.parentNode?n.parentNode.childNodes:[],u=0;for(var d=0;d<l.length;d++){if(l[d]==n)return u;l[d].attributes&&l[d].attributes[o]&&l[d].nodeType==1&&u++}return-1}static appendOverlay(n,o,l="self"){l!=="self"&&n&&o&&this.appendChild(n,o)}static alignOverlay(n,o,l="self",u=!0){n&&o&&(u&&(n.style.minWidth=`${t.getOuterWidth(o)}px`),l==="self"?this.relativePosition(n,o):this.absolutePosition(n,o))}static relativePosition(n,o,l=!0){let u=Y=>{if(Y)return getComputedStyle(Y).getPropertyValue("position")==="relative"?Y:u(Y.parentElement)},d=n.offsetParent?{width:n.offsetWidth,height:n.offsetHeight}:this.getHiddenElementDimensions(n),f=o.offsetHeight,p=o.getBoundingClientRect(),m=this.getWindowScrollTop(),y=this.getWindowScrollLeft(),_=this.getViewport(),S=u(n)?.getBoundingClientRect()||{top:-1*m,left:-1*y},w,T;p.top+f+d.height>_.height?(w=p.top-S.top-d.height,n.style.transformOrigin="bottom",p.top+w<0&&(w=-1*p.top)):(w=f+p.top-S.top,n.style.transformOrigin="top");let O=p.left+d.width-_.width,P=p.left-S.left;d.width>_.width?T=(p.left-S.left)*-1:O>0?T=P-O:T=p.left-S.left,n.style.top=w+"px",n.style.left=T+"px",l&&(n.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(n,o,l=!0){let u=n.offsetParent?{width:n.offsetWidth,height:n.offsetHeight}:this.getHiddenElementDimensions(n),d=u.height,f=u.width,p=o.offsetHeight,m=o.offsetWidth,y=o.getBoundingClientRect(),_=this.getWindowScrollTop(),v=this.getWindowScrollLeft(),S=this.getViewport(),w,T;y.top+p+d>S.height?(w=y.top+_-d,n.style.transformOrigin="bottom",w<0&&(w=_)):(w=p+y.top+_,n.style.transformOrigin="top"),y.left+f>S.width?T=Math.max(0,y.left+v+m-f):T=y.left+v,n.style.top=w+"px",n.style.left=T+"px",l&&(n.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(n,o=[]){return n.parentNode===null?o:this.getParents(n.parentNode,o.concat([n.parentNode]))}static getScrollableParents(n){let o=[];if(n){let l=this.getParents(n),u=/(auto|scroll)/,d=f=>{let p=window.getComputedStyle(f,null);return u.test(p.getPropertyValue("overflow"))||u.test(p.getPropertyValue("overflowX"))||u.test(p.getPropertyValue("overflowY"))};for(let f of l){let p=f.nodeType===1&&f.dataset.scrollselectors;if(p){let m=p.split(",");for(let y of m){let _=this.findSingle(f,y);_&&d(_)&&o.push(_)}}f.nodeType!==9&&d(f)&&o.push(f)}}return o}static getHiddenElementOuterHeight(n){n.style.visibility="hidden",n.style.display="block";let o=n.offsetHeight;return n.style.display="none",n.style.visibility="visible",o}static getHiddenElementOuterWidth(n){n.style.visibility="hidden",n.style.display="block";let o=n.offsetWidth;return n.style.display="none",n.style.visibility="visible",o}static getHiddenElementDimensions(n){let o={};return n.style.visibility="hidden",n.style.display="block",o.width=n.offsetWidth,o.height=n.offsetHeight,n.style.display="none",n.style.visibility="visible",o}static scrollInView(n,o){let l=getComputedStyle(n).getPropertyValue("borderTopWidth"),u=l?parseFloat(l):0,d=getComputedStyle(n).getPropertyValue("paddingTop"),f=d?parseFloat(d):0,p=n.getBoundingClientRect(),y=o.getBoundingClientRect().top+document.body.scrollTop-(p.top+document.body.scrollTop)-u-f,_=n.scrollTop,v=n.clientHeight,S=this.getOuterHeight(o);y<0?n.scrollTop=_+y:y+S>v&&(n.scrollTop=_+y-v+S)}static fadeIn(n,o){n.style.opacity=0;let l=+new Date,u=0,d=function(){u=+n.style.opacity.replace(",",".")+(new Date().getTime()-l)/o,n.style.opacity=u,l=+new Date,+u<1&&(window.requestAnimationFrame&&requestAnimationFrame(d)||setTimeout(d,16))};d()}static fadeOut(n,o){var l=1,u=50,d=o,f=u/d;let p=setInterval(()=>{l=l-f,l<=0&&(l=0,clearInterval(p)),n.style.opacity=l},u)}static getWindowScrollTop(){let n=document.documentElement;return(window.pageYOffset||n.scrollTop)-(n.clientTop||0)}static getWindowScrollLeft(){let n=document.documentElement;return(window.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}static matches(n,o){var l=Element.prototype,u=l.matches||l.webkitMatchesSelector||l.mozMatchesSelector||l.msMatchesSelector||function(d){return[].indexOf.call(document.querySelectorAll(d),this)!==-1};return u.call(n,o)}static getOuterWidth(n,o){let l=n.offsetWidth;if(o){let u=getComputedStyle(n);l+=parseFloat(u.marginLeft)+parseFloat(u.marginRight)}return l}static getHorizontalPadding(n){let o=getComputedStyle(n);return parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)}static getHorizontalMargin(n){let o=getComputedStyle(n);return parseFloat(o.marginLeft)+parseFloat(o.marginRight)}static innerWidth(n){let o=n.offsetWidth,l=getComputedStyle(n);return o+=parseFloat(l.paddingLeft)+parseFloat(l.paddingRight),o}static width(n){let o=n.offsetWidth,l=getComputedStyle(n);return o-=parseFloat(l.paddingLeft)+parseFloat(l.paddingRight),o}static getInnerHeight(n){let o=n.offsetHeight,l=getComputedStyle(n);return o+=parseFloat(l.paddingTop)+parseFloat(l.paddingBottom),o}static getOuterHeight(n,o){let l=n.offsetHeight;if(o){let u=getComputedStyle(n);l+=parseFloat(u.marginTop)+parseFloat(u.marginBottom)}return l}static getHeight(n){let o=n.offsetHeight,l=getComputedStyle(n);return o-=parseFloat(l.paddingTop)+parseFloat(l.paddingBottom)+parseFloat(l.borderTopWidth)+parseFloat(l.borderBottomWidth),o}static getWidth(n){let o=n.offsetWidth,l=getComputedStyle(n);return o-=parseFloat(l.paddingLeft)+parseFloat(l.paddingRight)+parseFloat(l.borderLeftWidth)+parseFloat(l.borderRightWidth),o}static getViewport(){let n=window,o=document,l=o.documentElement,u=o.getElementsByTagName("body")[0],d=n.innerWidth||l.clientWidth||u.clientWidth,f=n.innerHeight||l.clientHeight||u.clientHeight;return{width:d,height:f}}static getOffset(n){var o=n.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(n,o){let l=n.parentNode;if(!l)throw"Can't replace element";return l.replaceChild(o,n)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var n=window.navigator.userAgent,o=n.indexOf("MSIE ");if(o>0)return!0;var l=n.indexOf("Trident/");if(l>0){var u=n.indexOf("rv:");return!0}var d=n.indexOf("Edge/");return d>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(n,o){if(this.isElement(o))o.appendChild(n);else if(o&&o.el&&o.el.nativeElement)o.el.nativeElement.appendChild(n);else throw"Cannot append "+o+" to "+n}static removeChild(n,o){if(this.isElement(o))o.removeChild(n);else if(o.el&&o.el.nativeElement)o.el.nativeElement.removeChild(n);else throw"Cannot remove "+n+" from "+o}static removeElement(n){"remove"in Element.prototype?n.remove():n.parentNode.removeChild(n)}static isElement(n){return typeof HTMLElement=="object"?n instanceof HTMLElement:n&&typeof n=="object"&&n!==null&&n.nodeType===1&&typeof n.nodeName=="string"}static calculateScrollbarWidth(n){if(n){let o=getComputedStyle(n);return n.offsetWidth-n.clientWidth-parseFloat(o.borderLeftWidth)-parseFloat(o.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let o=document.createElement("div");o.className="p-scrollbar-measure",document.body.appendChild(o);let l=o.offsetWidth-o.clientWidth;return document.body.removeChild(o),this.calculatedScrollbarWidth=l,l}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetHeight-n.clientHeight;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}static invokeElementMethod(n,o,l){n[o].apply(n,l)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let n=this.resolveUserAgent();this.browser={},n.browser&&(this.browser[n.browser]=!0,this.browser.version=n.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let n=navigator.userAgent.toLowerCase(),o=/(chrome)[ \/]([\w.]+)/.exec(n)||/(webkit)[ \/]([\w.]+)/.exec(n)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n)||/(msie) ([\w.]+)/.exec(n)||n.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n)||[];return{browser:o[1]||"",version:o[2]||"0"}}static isInteger(n){return Number.isInteger?Number.isInteger(n):typeof n=="number"&&isFinite(n)&&Math.floor(n)===n}static isHidden(n){return!n||n.offsetParent===null}static isVisible(n){return n&&n.offsetParent!=null}static isExist(n){return n!==null&&typeof n<"u"&&n.nodeName&&n.parentNode}static focus(n,o){n&&document.activeElement!==n&&n.focus(o)}static getFocusableSelectorString(n=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`}static getFocusableElements(n,o=""){let l=this.find(n,this.getFocusableSelectorString(o)),u=[];for(let d of l){let f=getComputedStyle(d);this.isVisible(d)&&f.display!="none"&&f.visibility!="hidden"&&u.push(d)}return u}static getFocusableElement(n,o=""){let l=this.findSingle(n,this.getFocusableSelectorString(o));if(l){let u=getComputedStyle(l);if(this.isVisible(l)&&u.display!="none"&&u.visibility!="hidden")return l}return null}static getFirstFocusableElement(n,o=""){let l=this.getFocusableElements(n,o);return l.length>0?l[0]:null}static getLastFocusableElement(n,o){let l=this.getFocusableElements(n,o);return l.length>0?l[l.length-1]:null}static getNextFocusableElement(n,o=!1){let l=t.getFocusableElements(n),u=0;if(l&&l.length>0){let d=l.indexOf(l[0].ownerDocument.activeElement);o?d==-1||d===0?u=l.length-1:u=d-1:d!=-1&&d!==l.length-1&&(u=d+1)}return l[u]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(n,o){if(!n)return null;switch(n){case"document":return document;case"window":return window;case"@next":return o?.nextElementSibling;case"@prev":return o?.previousElementSibling;case"@parent":return o?.parentElement;case"@grandparent":return o?.parentElement.parentElement;default:let l=typeof n;if(l==="string")return document.querySelector(n);if(l==="object"&&n.hasOwnProperty("nativeElement"))return this.isExist(n.nativeElement)?n.nativeElement:void 0;let d=(f=>!!(f&&f.constructor&&f.call&&f.apply))(n)?n():n;return d&&d.nodeType===9||this.isExist(d)?d:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(n,o){if(n){let l=n.getAttribute(o);return isNaN(l)?l==="true"||l==="false"?l==="true":l:+l}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(n="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,n)}static unblockBodyScroll(n="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,n)}static createElement(n,o={},...l){if(n){let u=document.createElement(n);return this.setAttributes(u,o),u.append(...l),u}}static setAttribute(n,o="",l){this.isElement(n)&&l!==null&&l!==void 0&&n.setAttribute(o,l)}static setAttributes(n,o={}){if(this.isElement(n)){let l=(u,d)=>{let f=n?.$attrs?.[u]?[n?.$attrs?.[u]]:[];return[d].flat().reduce((p,m)=>{if(m!=null){let y=typeof m;if(y==="string"||y==="number")p.push(m);else if(y==="object"){let _=Array.isArray(m)?l(u,m):Object.entries(m).map(([v,S])=>u==="style"&&(S||S===0)?`${v.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${S}`:S?v:void 0);p=_.length?p.concat(_.filter(v=>!!v)):p}}return p},f)};Object.entries(o).forEach(([u,d])=>{if(d!=null){let f=u.match(/^on(.+)/);f?n.addEventListener(f[1].toLowerCase(),d):u==="pBind"?this.setAttributes(n,d):(d=u==="class"?[...new Set(l("class",d))].join(" ").trim():u==="style"?l("style",d).join(";").trim():d,(n.$attrs=n.$attrs||{})&&(n.$attrs[u]=d),n.setAttribute(u,d))}})}}static isFocusableElement(n,o=""){return this.isElement(n)?n.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o}`):!1}}return t})(),$s=class{element;listener;scrollableParents;constructor(i,n=()=>{}){this.element=i,this.listener=n}bindScrollListener(){this.scrollableParents=Dr.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Us=(()=>{class t extends Pe{autofocus=!1;_autofocus=!1;focused=!1;platformId=A(at);document=A(Fe);host=A(Ct);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){ai(this.platformId)&&this._autofocus&&setTimeout(()=>{let n=Dr.getFocusableElements(this.host?.nativeElement);n.length===0&&this.host.nativeElement.focus(),n.length>0&&n[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let n;return function(l){return(n||(n=G(t)))(l||t)}})();static \u0275dir=re({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",J],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[Wt,ee]})}return t})();var zd=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,qd={root:({props:t,instance:i})=>["p-badge p-component",{"p-badge-circle":B(t.value)&&String(t.value).length===1,"p-badge-dot":we(t.value)&&!i.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},Ws=(()=>{class t extends de{name="badge";theme=zd;classes=qd;static \u0275fac=(()=>{let n;return function(l){return(n||(n=G(t)))(l||t)}})();static \u0275prov=W({token:t,factory:t.\u0275fac})}return t})();var Tr=(()=>{class t extends Pe{styleClass=st();style=st();badgeSize=st();size=st();severity=st();value=st();badgeDisabled=st(!1,{transform:J});_componentStyle=A(Ws);containerClass=ct(()=>{let n="p-badge p-component";return B(this.value())&&String(this.value()).length===1&&(n+=" p-badge-circle"),this.badgeSize()==="large"?n+=" p-badge-lg":this.badgeSize()==="xlarge"?n+=" p-badge-xl":this.badgeSize()==="small"&&(n+=" p-badge-sm"),we(this.value())&&(n+=" p-badge-dot"),this.styleClass()&&(n+=` ${this.styleClass()}`),this.severity()&&(n+=` p-badge-${this.severity()}`),n});static \u0275fac=(()=>{let n;return function(l){return(n||(n=G(t)))(l||t)}})();static \u0275cmp=Me({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(o,l){o&2&&(Vo(l.style()),Bt(l.containerClass()),Lo("display",l.badgeDisabled()&&"none"))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[pe([Ws]),ee],decls:1,vars:1,template:function(o,l){o&1&&Dt(0),o&2&&oi(l.value())},dependencies:[Tt,dt],encapsulation:2,changeDetection:0})}return t})(),Bs=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=fe({type:t});static \u0275inj=he({imports:[Tr,dt,dt]})}return t})();var Zd=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Jd=(()=>{class t extends de{name="baseicon";inlineStyles=Zd;static \u0275fac=(()=>{let n;return function(l){return(n||(n=G(t)))(l||t)}})();static \u0275prov=W({token:t,factory:t.\u0275fac})}return t})();var Xd=["*"],js=(()=>{class t extends Pe{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let n=we(this.label);this.role=n?void 0:"img",this.ariaLabel=n?void 0:this.label,this.ariaHidden=n}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let n;return function(l){return(n||(n=G(t)))(l||t)}})();static \u0275cmp=Me({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",J],styleClass:"styleClass"},features:[pe([Jd]),Wt,ee],ngContentSelectors:Xd,decls:1,vars:0,template:function(o,l){o&1&&(fn(),pn(0))},encapsulation:2,changeDetection:0})}return t})();var Ys=(()=>{class t extends js{pathId;ngOnInit(){this.pathId="url(#"+Dn()+")"}static \u0275fac=(()=>{let n;return function(l){return(n||(n=G(t)))(l||t)}})();static \u0275cmp=Me({type:t,selectors:[["SpinnerIcon"]],features:[ee],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,l){o&1&&(ko(),Ke(0,"svg",0)(1,"g"),lt(2,"path",1),Ze(),Ke(3,"defs")(4,"clipPath",2),lt(5,"rect",3),Ze()()()),o&2&&(Bt(l.getClassNames()),Ne("aria-label",l.ariaLabel)("aria-hidden",l.ariaHidden)("role",l.role),Z(),Ne("clip-path",l.pathId),Z(3),z("id",l.pathId))},encapsulation:2})}return t})();var Qd=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,eh={root:"p-ink"},Hs=(()=>{class t extends de{name="ripple";theme=Qd;classes=eh;static \u0275fac=(()=>{let n;return function(l){return(n||(n=G(t)))(l||t)}})();static \u0275prov=W({token:t,factory:t.\u0275fac})}return t})();var Gs=(()=>{class t extends Pe{zone=A(ar);_componentStyle=A(Hs);animationListener;mouseDownListener;timeout;constructor(){super(),jt(()=>{ai(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(n){let o=this.getInk();if(!o||this.document.defaultView?.getComputedStyle(o,null).display==="none")return;if(Mt(o,"p-ink-active"),!yr(o)&&!br(o)){let f=Math.max(ms(this.el.nativeElement),_s(this.el.nativeElement));o.style.height=f+"px",o.style.width=f+"px"}let l=vs(this.el.nativeElement),u=n.pageX-l.left+this.document.body.scrollTop-br(o)/2,d=n.pageY-l.top+this.document.body.scrollLeft-yr(o)/2;this.renderer.setStyle(o,"top",d+"px"),this.renderer.setStyle(o,"left",u+"px"),Cn(o,"p-ink-active"),this.timeout=setTimeout(()=>{let f=this.getInk();f&&Mt(f,"p-ink-active")},401)}getInk(){let n=this.el.nativeElement.children;for(let o=0;o<n.length;o++)if(typeof n[o].className=="string"&&n[o].className.indexOf("p-ink")!==-1)return n[o];return null}resetInk(){let n=this.getInk();n&&Mt(n,"p-ink-active")}onAnimationEnd(n){this.timeout&&clearTimeout(this.timeout),Mt(n.currentTarget,"p-ink-active")}create(){let n=this.renderer.createElement("span");this.renderer.addClass(n,"p-ink"),this.renderer.appendChild(this.el.nativeElement,n),this.renderer.setAttribute(n,"aria-hidden","true"),this.renderer.setAttribute(n,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(n,"animationend",this.onAnimationEnd.bind(this)))}remove(){let n=this.getInk();n&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ws(n))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(o){return new(o||t)};static \u0275dir=re({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[pe([Hs]),ee]})}return t})(),Hg=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=fe({type:t});static \u0275inj=he({})}return t})();var nh=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,ih={root:({instance:t,props:i})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},zs=(()=>{class t extends de{name="button";theme=nh;classes=ih;static \u0275fac=(()=>{let n;return function(l){return(n||(n=G(t)))(l||t)}})();static \u0275prov=W({token:t,factory:t.\u0275fac})}return t})();var rh=["content"],oh=["loading"],sh=["icon"],ah=["*"],qs=t=>({class:t});function lh(t,i){t&1&&$o(0)}function ch(t,i){if(t&1&&lt(0,"span",8),t&2){let n=Oe(3);z("ngClass",n.iconClass()),Ne("aria-hidden",!0)("data-pc-section","loadingicon")}}function uh(t,i){if(t&1&&lt(0,"SpinnerIcon",9),t&2){let n=Oe(3);z("styleClass",n.spinnerIconClass())("spin",!0),Ne("aria-hidden",!0)("data-pc-section","loadingicon")}}function dh(t,i){if(t&1&&(ni(0),Et(1,ch,1,3,"span",6)(2,uh,1,4,"SpinnerIcon",7),ii()),t&2){let n=Oe(2);Z(),z("ngIf",n.loadingIcon),Z(),z("ngIf",!n.loadingIcon)}}function hh(t,i){}function fh(t,i){if(t&1&&Et(0,hh,0,0,"ng-template",10),t&2){let n=Oe(2);z("ngIf",n.loadingIconTemplate||n._loadingIconTemplate)}}function ph(t,i){if(t&1&&(ni(0),Et(1,dh,3,2,"ng-container",2)(2,fh,1,1,null,5),ii()),t&2){let n=Oe();Z(),z("ngIf",!n.loadingIconTemplate&&!n._loadingIconTemplate),Z(),z("ngTemplateOutlet",n.loadingIconTemplate||n._loadingIconTemplate)("ngTemplateOutletContext",ur(3,qs,n.iconClass()))}}function gh(t,i){if(t&1&&lt(0,"span",8),t&2){let n=Oe(2);Bt(n.icon),z("ngClass",n.iconClass()),Ne("data-pc-section","icon")}}function mh(t,i){}function yh(t,i){if(t&1&&Et(0,mh,0,0,"ng-template",10),t&2){let n=Oe(2);z("ngIf",!n.icon&&(n.iconTemplate||n._iconTemplate))}}function bh(t,i){if(t&1&&(ni(0),Et(1,gh,1,4,"span",11)(2,yh,1,1,null,5),ii()),t&2){let n=Oe();Z(),z("ngIf",n.icon&&!n.iconTemplate&&!n._iconTemplate),Z(),z("ngTemplateOutlet",n.iconTemplate||n._iconTemplate)("ngTemplateOutletContext",ur(3,qs,n.iconClass()))}}function vh(t,i){if(t&1&&(Ke(0,"span",12),Dt(1),Ze()),t&2){let n=Oe();Ne("aria-hidden",n.icon&&!n.label)("data-pc-section","label"),Z(),oi(n.label)}}function _h(t,i){if(t&1&&lt(0,"p-badge",13),t&2){let n=Oe();z("value",n.badge)("severity",n.badgeSeverity)}}var wh=(()=>{class t extends Pe{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new ot;onFocus=new ot;onBlur=new ot;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(n){this._buttonProps=n,n&&typeof n=="object"&&Object.entries(n).forEach(([o,l])=>this[`_${o}`]!==l&&(this[`_${o}`]=l))}get hasFluid(){let o=this.el.nativeElement.closest("p-fluid");return we(this.fluid)?!!o:this.fluid}_componentStyle=A(zs);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(n=>{switch(n.getType()){case"content":this.contentTemplate=n.template;break;case"icon":this.iconTemplate=n.template;break;case"loadingicon":this.loadingIconTemplate=n.template;break;default:this.contentTemplate=n.template;break}})}ngOnChanges(n){super.ngOnChanges(n);let{buttonProps:o}=n;if(o){let l=o.currentValue;for(let u in l)this[u]=l[u]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,n])=>!!n).reduce((n,[o])=>n+` ${o}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let n;return function(l){return(n||(n=G(t)))(l||t)}})();static \u0275cmp=Me({type:t,selectors:[["p-button"]],contentQueries:function(o,l,u){if(o&1&&(gn(u,rh,5),gn(u,oh,5),gn(u,sh,5),gn(u,xs,4)),o&2){let d;mn(d=yn())&&(l.contentTemplate=d.first),mn(d=yn())&&(l.loadingIconTemplate=d.first),mn(d=yn())&&(l.iconTemplate=d.first),mn(d=yn())&&(l.templates=d)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",J],loading:[2,"loading","loading",J],loadingIcon:"loadingIcon",raised:[2,"raised","raised",J],rounded:[2,"rounded","rounded",J],text:[2,"text","text",J],plain:[2,"plain","plain",J],severity:"severity",outlined:[2,"outlined","outlined",J],link:[2,"link","link",J],tabindex:[2,"tabindex","tabindex",Uo],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",J],fluid:[2,"fluid","fluid",J],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[pe([zs]),Wt,ee,St],ngContentSelectors:ah,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(o,l){o&1&&(fn(),Ke(0,"button",0),ri("click",function(d){return l.onClick.emit(d)})("focus",function(d){return l.onFocus.emit(d)})("blur",function(d){return l.onBlur.emit(d)}),pn(1),Et(2,lh,1,0,"ng-container",1)(3,ph,3,5,"ng-container",2)(4,bh,3,5,"ng-container",2)(5,vh,2,3,"span",3)(6,_h,1,2,"p-badge",4),Ze()),o&2&&(z("ngStyle",l.style)("disabled",l.disabled||l.loading)("ngClass",l.buttonClass)("pAutoFocus",l.autofocus),Ne("type",l.type)("aria-label",l.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",l.tabindex),Z(2),z("ngTemplateOutlet",l.contentTemplate||l._contentTemplate),Z(),z("ngIf",l.loading),Z(),z("ngIf",!l.loading),Z(),z("ngIf",!l.contentTemplate&&!l._contentTemplate&&l.label),Z(),z("ngIf",!l.contentTemplate&&!l._contentTemplate&&l.badge))},dependencies:[Tt,Bo,jo,Ho,Yo,Gs,Us,Ys,Bs,Tr,dt],encapsulation:2,changeDetection:0})}return t})(),mm=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=fe({type:t});static \u0275inj=he({imports:[Tt,wh,dt,dt]})}return t})();var Ks=class t{title;subTitle;ngOnInit(){}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=Me({type:t,selectors:[["app-content-header"]],inputs:{title:"title",subTitle:"subTitle"},decls:5,vars:2,consts:[[1,"flex","justify-center","flex-col","items-center","my-5"],[1,"text-2xl","font-bold"],[1,"text-md","font-semibold","text-zinc-500"]],template:function(n,o){n&1&&(Ke(0,"div",0)(1,"div",1),Dt(2),Ze(),Ke(3,"div",2),Dt(4),Ze()()),n&2&&(Z(2),cr(" ",o.title," "),Z(2),cr(" ",o.subTitle," "))},styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};var Mn=class{},wi=class{},At=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(n=>{let o=n.indexOf(":");if(o>0){let l=n.slice(0,o),u=n.slice(o+1).trim();this.addHeaderEntry(l,u)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((n,o)=>{this.addHeaderEntry(o,n)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([n,o])=>{this.setHeaderEntries(n,o)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let n=this.headers.get(i.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,n){return this.clone({name:i,value:n,op:"a"})}set(i,n){return this.clone({name:i,value:n,op:"s"})}delete(i,n){return this.clone({name:i,value:n,op:"d"})}maybeSetNormalizedName(i,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(n=>{this.headers.set(n,i.headers.get(n)),this.normalizedNames.set(n,i.normalizedNames.get(n))})}clone(i){let n=new t;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([i]),n}applyUpdate(i){let n=i.name.toLowerCase();switch(i.op){case"a":case"s":let o=i.value;if(typeof o=="string"&&(o=[o]),o.length===0)return;this.maybeSetNormalizedName(i.name,n);let l=(i.op==="a"?this.headers.get(n):void 0)||[];l.push(...o),this.headers.set(n,l);break;case"d":let u=i.value;if(!u)this.headers.delete(n),this.normalizedNames.delete(n);else{let d=this.headers.get(n);if(!d)return;d=d.filter(f=>u.indexOf(f)===-1),d.length===0?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,d)}break}}addHeaderEntry(i,n){let o=i.toLowerCase();this.maybeSetNormalizedName(i,o),this.headers.has(o)?this.headers.get(o).push(n):this.headers.set(o,[n])}setHeaderEntries(i,n){let o=(Array.isArray(n)?n:[n]).map(u=>u.toString()),l=i.toLowerCase();this.headers.set(l,o),this.maybeSetNormalizedName(i,l)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>i(this.normalizedNames.get(n),this.headers.get(n)))}};var Or=class{encodeKey(i){return Zs(i)}encodeValue(i){return Zs(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Sh(t,i){let n=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(l=>{let u=l.indexOf("="),[d,f]=u==-1?[i.decodeKey(l),""]:[i.decodeKey(l.slice(0,u)),i.decodeValue(l.slice(u+1))],p=n.get(d)||[];p.push(f),n.set(d,p)}),n}var Ch=/%(\d[a-f0-9])/gi,Eh={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Zs(t){return encodeURIComponent(t).replace(Ch,(i,n)=>Eh[n]??i)}function _i(t){return`${t}`}var ht=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Or,i.fromString){if(i.fromObject)throw new dn(2805,!1);this.map=Sh(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(n=>{let o=i.fromObject[n],l=Array.isArray(o)?o.map(_i):[_i(o)];this.map.set(n,l)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let n=this.map.get(i);return n?n[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,n){return this.clone({param:i,value:n,op:"a"})}appendAll(i){let n=[];return Object.keys(i).forEach(o=>{let l=i[o];Array.isArray(l)?l.forEach(u=>{n.push({param:o,value:u,op:"a"})}):n.push({param:o,value:l,op:"a"})}),this.clone(n)}set(i,n){return this.clone({param:i,value:n,op:"s"})}delete(i,n){return this.clone({param:i,value:n,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let n=this.encoder.encodeKey(i);return this.map.get(i).map(o=>n+"="+this.encoder.encodeValue(o)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let n=new t({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(i),n}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let n=(i.op==="a"?this.map.get(i.param):void 0)||[];n.push(_i(i.value)),this.map.set(i.param,n);break;case"d":if(i.value!==void 0){let o=this.map.get(i.param)||[],l=o.indexOf(_i(i.value));l!==-1&&o.splice(l,1),o.length>0?this.map.set(i.param,o):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};var Ar=class{map=new Map;set(i,n){return this.map.set(i,n),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}};function Dh(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Js(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Xs(t){return typeof Blob<"u"&&t instanceof Blob}function Qs(t){return typeof FormData<"u"&&t instanceof FormData}function Th(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var ea="Content-Type",ia="X-Request-URL",ra="text/plain",oa="application/json",Mh=`${oa}, ${ra}, */*`,Tn=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(i,n,o,l){this.url=n,this.method=i.toUpperCase();let u;if(Dh(this.method)||l?(this.body=o!==void 0?o:null,u=l):u=o,u&&(this.reportProgress=!!u.reportProgress,this.withCredentials=!!u.withCredentials,u.responseType&&(this.responseType=u.responseType),u.headers&&(this.headers=u.headers),u.context&&(this.context=u.context),u.params&&(this.params=u.params),this.transferCache=u.transferCache),this.headers??=new At,this.context??=new Ar,!this.params)this.params=new ht,this.urlWithParams=n;else{let d=this.params.toString();if(d.length===0)this.urlWithParams=n;else{let f=n.indexOf("?"),p=f===-1?"?":f<n.length-1?"&":"";this.urlWithParams=n+p+d}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Js(this.body)||Xs(this.body)||Qs(this.body)||Th(this.body)?this.body:this.body instanceof ht?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Qs(this.body)?null:Xs(this.body)?this.body.type||null:Js(this.body)?null:typeof this.body=="string"?ra:this.body instanceof ht?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?oa:null}clone(i={}){let n=i.method||this.method,o=i.url||this.url,l=i.responseType||this.responseType,u=i.transferCache??this.transferCache,d=i.body!==void 0?i.body:this.body,f=i.withCredentials??this.withCredentials,p=i.reportProgress??this.reportProgress,m=i.headers||this.headers,y=i.params||this.params,_=i.context??this.context;return i.setHeaders!==void 0&&(m=Object.keys(i.setHeaders).reduce((v,S)=>v.set(S,i.setHeaders[S]),m)),i.setParams&&(y=Object.keys(i.setParams).reduce((v,S)=>v.set(S,i.setParams[S]),y)),new t(n,o,d,{params:y,headers:m,context:_,reportProgress:p,responseType:l,withCredentials:f,transferCache:u})}},Xt=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(Xt||{}),On=class{headers;status;statusText;url;ok;type;constructor(i,n=200,o="OK"){this.headers=i.headers||new At,this.status=i.status!==void 0?i.status:n,this.statusText=i.statusText||o,this.url=i.url||null,this.ok=this.status>=200&&this.status<300}},xr=class t extends On{constructor(i={}){super(i)}type=Xt.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Si=class t extends On{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Xt.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Ci=class extends On{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Oh=200,Ah=204;function Mr(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var xh=(()=>{class t{handler;constructor(n){this.handler=n}request(n,o,l={}){let u;if(n instanceof Tn)u=n;else{let p;l.headers instanceof At?p=l.headers:p=new At(l.headers);let m;l.params&&(l.params instanceof ht?m=l.params:m=new ht({fromObject:l.params})),u=new Tn(n,o,l.body!==void 0?l.body:null,{headers:p,context:l.context,params:m,reportProgress:l.reportProgress,responseType:l.responseType||"json",withCredentials:l.withCredentials,transferCache:l.transferCache})}let d=or(u).pipe(Eo(p=>this.handler.handle(p)));if(n instanceof Tn||l.observe==="events")return d;let f=d.pipe(Co(p=>p instanceof Si));switch(l.observe||"body"){case"body":switch(u.responseType){case"arraybuffer":return f.pipe(wt(p=>{if(p.body!==null&&!(p.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return p.body}));case"blob":return f.pipe(wt(p=>{if(p.body!==null&&!(p.body instanceof Blob))throw new Error("Response is not a Blob.");return p.body}));case"text":return f.pipe(wt(p=>{if(p.body!==null&&typeof p.body!="string")throw new Error("Response is not a string.");return p.body}));case"json":default:return f.pipe(wt(p=>p.body))}case"response":return f;default:throw new Error(`Unreachable: unhandled observe type ${l.observe}}`)}}delete(n,o={}){return this.request("DELETE",n,o)}get(n,o={}){return this.request("GET",n,o)}head(n,o={}){return this.request("HEAD",n,o)}jsonp(n,o){return this.request("JSONP",n,{params:new ht().append(o,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,o={}){return this.request("OPTIONS",n,o)}patch(n,o,l={}){return this.request("PATCH",n,Mr(l,o))}post(n,o,l={}){return this.request("POST",n,Mr(l,o))}put(n,o,l={}){return this.request("PUT",n,Mr(l,o))}static \u0275fac=function(o){return new(o||t)(rt(Mn))};static \u0275prov=W({token:t,factory:t.\u0275fac})}return t})();var kh=new ie("");function Ih(t,i){return i(t)}function Nh(t,i,n){return(o,l)=>Ao(n,()=>i(o,u=>t(u,l)))}var sa=new ie(""),Rh=new ie(""),Fh=new ie("",{providedIn:"root",factory:()=>!0});var ta=(()=>{class t extends Mn{backend;injector;chain=null;pendingTasks=A(No);contributeToStability=A(Fh);constructor(n,o){super(),this.backend=n,this.injector=o}handle(n){if(this.chain===null){let o=Array.from(new Set([...this.injector.get(sa),...this.injector.get(Rh,[])]));this.chain=o.reduceRight((l,u)=>Nh(l,u,this.injector),Ih)}if(this.contributeToStability){let o=this.pendingTasks.add();return this.chain(n,l=>this.backend.handle(l)).pipe(Do(()=>this.pendingTasks.remove(o)))}else return this.chain(n,o=>this.backend.handle(o))}static \u0275fac=function(o){return new(o||t)(rt(wi),rt(Oo))};static \u0275prov=W({token:t,factory:t.\u0275fac})}return t})();var Ph=/^\)\]\}',?\n/,Lh=RegExp(`^${ia}:`,"m");function Vh(t){return"responseURL"in t&&t.responseURL?t.responseURL:Lh.test(t.getAllResponseHeaders())?t.getResponseHeader(ia):null}var na=(()=>{class t{xhrFactory;constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new dn(-2800,!1);let o=this.xhrFactory;return(o.\u0275loadImpl?Qn(o.\u0275loadImpl()):or(null)).pipe(To(()=>new Xn(u=>{let d=o.build();if(d.open(n.method,n.urlWithParams),n.withCredentials&&(d.withCredentials=!0),n.headers.forEach((T,O)=>d.setRequestHeader(T,O.join(","))),n.headers.has("Accept")||d.setRequestHeader("Accept",Mh),!n.headers.has(ea)){let T=n.detectContentTypeHeader();T!==null&&d.setRequestHeader(ea,T)}if(n.responseType){let T=n.responseType.toLowerCase();d.responseType=T!=="json"?T:"text"}let f=n.serializeBody(),p=null,m=()=>{if(p!==null)return p;let T=d.statusText||"OK",O=new At(d.getAllResponseHeaders()),P=Vh(d)||n.url;return p=new xr({headers:O,status:d.status,statusText:T,url:P}),p},y=()=>{let{headers:T,status:O,statusText:P,url:Y}=m(),L=null;O!==Ah&&(L=typeof d.response>"u"?d.responseText:d.response),O===0&&(O=L?Oh:0);let q=O>=200&&O<300;if(n.responseType==="json"&&typeof L=="string"){let ye=L;L=L.replace(Ph,"");try{L=L!==""?JSON.parse(L):null}catch(X){L=ye,q&&(q=!1,L={error:X,text:L})}}q?(u.next(new Si({body:L,headers:T,status:O,statusText:P,url:Y||void 0})),u.complete()):u.error(new Ci({error:L,headers:T,status:O,statusText:P,url:Y||void 0}))},_=T=>{let{url:O}=m(),P=new Ci({error:T,status:d.status||0,statusText:d.statusText||"Unknown Error",url:O||void 0});u.error(P)},v=!1,S=T=>{v||(u.next(m()),v=!0);let O={type:Xt.DownloadProgress,loaded:T.loaded};T.lengthComputable&&(O.total=T.total),n.responseType==="text"&&d.responseText&&(O.partialText=d.responseText),u.next(O)},w=T=>{let O={type:Xt.UploadProgress,loaded:T.loaded};T.lengthComputable&&(O.total=T.total),u.next(O)};return d.addEventListener("load",y),d.addEventListener("error",_),d.addEventListener("timeout",_),d.addEventListener("abort",_),n.reportProgress&&(d.addEventListener("progress",S),f!==null&&d.upload&&d.upload.addEventListener("progress",w)),d.send(f),u.next({type:Xt.Sent}),()=>{d.removeEventListener("error",_),d.removeEventListener("abort",_),d.removeEventListener("load",y),d.removeEventListener("timeout",_),n.reportProgress&&(d.removeEventListener("progress",S),f!==null&&d.upload&&d.upload.removeEventListener("progress",w)),d.readyState!==d.DONE&&d.abort()}})))}static \u0275fac=function(o){return new(o||t)(rt(zo))};static \u0275prov=W({token:t,factory:t.\u0275fac})}return t})(),aa=new ie(""),$h="XSRF-TOKEN",Uh=new ie("",{providedIn:"root",factory:()=>$h}),Wh="X-XSRF-TOKEN",Bh=new ie("",{providedIn:"root",factory:()=>Wh}),Ei=class{},jh=(()=>{class t{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(n,o,l){this.doc=n,this.platform=o,this.cookieName=l}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=Wo(n,this.cookieName),this.lastCookieString=n),this.lastToken}static \u0275fac=function(o){return new(o||t)(rt(Fe),rt(at),rt(Uh))};static \u0275prov=W({token:t,factory:t.\u0275fac})}return t})();function Yh(t,i){let n=t.url.toLowerCase();if(!A(aa)||t.method==="GET"||t.method==="HEAD"||n.startsWith("http://")||n.startsWith("https://"))return i(t);let o=A(Ei).getToken(),l=A(Bh);return o!=null&&!t.headers.has(l)&&(t=t.clone({headers:t.headers.set(l,o)})),i(t)}function $m(...t){let i=[xh,na,ta,{provide:Mn,useExisting:ta},{provide:wi,useFactory:()=>A(kh,{optional:!0})??A(na)},{provide:sa,useValue:Yh,multi:!0},{provide:aa,useValue:!0},{provide:Ei,useClass:jh}];for(let n of t)i.push(...n.\u0275providers);return ei(i)}export{xh as a,$m as b,Yu as c,ns as d,is as e,Ku as f,Sn as g,Sf as h,vd as i,Ef as j,fs as k,Cn as l,Of as m,Mt as n,Af as o,gs as p,Sd as q,Cd as r,xf as s,ms as t,kf as u,If as v,Nf as w,Rf as x,Ed as y,Dd as z,Ff as A,Pf as B,Lf as C,yr as D,Vf as E,vs as F,_s as G,br as H,$f as I,Uf as J,Wf as K,Ss as L,we as M,Os as N,Hf as O,Dn as P,lp as Q,xs as R,dt as S,cp as T,hp as U,de as V,Er as W,Bp as X,Pe as Y,Dr as Z,$s as _,Tr as $,Bs as aa,js as ba,Gs as ca,Hg as da,wh as ea,mm as fa,Ks as ga,Hh as ha};
