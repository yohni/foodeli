function v(){}function W(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function M(){return Object.create(null)}function y(t){t.forEach(T)}function D(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function ft(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function G(t){return Object.keys(t).length===0}function J(t,...n){if(t==null)return v;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function at(t,n,e){t.$$.on_destroy.push(J(n,e))}function _t(t,n,e,i){if(t){const r=q(t,n,e,i);return t[0](r)}}function q(t,n,e,i){return t[1]&&i?W(e.ctx.slice(),t[1](i(n))):e.ctx}function dt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)l[s]=n.dirty[s]|r[s];return l}return n.dirty|r}return n.dirty}function ht(t,n,e,i,r,l){if(r){const c=q(n,e,i,l);t.p(c,r)}}function mt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function pt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function yt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}let w=!1;function K(){w=!0}function Q(){w=!1}function R(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&o.push(a)}n=o}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let o=0;o<n.length;o++){const u=n[o].claim_order,a=(r>0&&n[e[r]].claim_order<=u?r+1:R(1,r,g=>n[e[g]].claim_order,u))-1;i[o]=e[a]+1;const f=a+1;e[f]=o,r=Math.max(f,r)}const l=[],c=[];let s=n.length-1;for(let o=e[r]+1;o!=0;o=i[o-1]){for(l.push(n[o-1]);s>=o;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);l.reverse(),c.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<c.length;o++){for(;u<l.length&&c[o].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(c[o],a)}}function V(t,n){if(w){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function gt(t,n,e){w&&!e?V(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function xt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function bt(){return A(" ")}function $t(){return A("")}function B(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function vt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:B(t,i,n[i])}function wt(t,n){for(const e in n)B(t,e,n[e])}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,r=!1){nt(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const o=e(s);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const o=e(s);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function F(t,n,e,i){return z(t,r=>r.nodeName===n,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||l.push(s.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(n))}function Et(t,n,e){return F(t,n,e,Y)}function Nt(t,n,e){return F(t,n,e,Z)}function et(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function kt(t){return et(t," ")}function St(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function At(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function it(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function jt(t,n){return new t(n)}let p;function m(t){p=t}function E(){if(!p)throw new Error("Function called outside component initialization");return p}function Ct(t){E().$$.on_mount.push(t)}function Mt(t){E().$$.after_update.push(t)}function Ot(t){E().$$.on_destroy.push(t)}function Pt(){const t=E();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const l=it(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}const h=[],O=[],b=[],P=[],H=Promise.resolve();let k=!1;function I(){k||(k=!0,H.then(L))}function Tt(){return I(),H}function S(t){b.push(t)}const N=new Set;let d=0;function L(){if(d!==0)return;const t=p;do{try{for(;d<h.length;){const n=h[d];d++,m(n),rt(n.$$)}}catch(n){throw h.length=0,d=0,n}for(m(null),h.length=0,d=0;O.length;)O.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];N.has(e)||(N.add(e),e())}b.length=0}while(h.length);for(;P.length;)P.pop()();k=!1,N.clear(),m(t)}function rt(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const $=new Set;let _;function Dt(){_={r:0,c:[],p:_}}function qt(){_.r||y(_.c),_=_.p}function ct(t,n){t&&t.i&&($.delete(t),t.i(n))}function Bt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function zt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const c=t[l],s=n[l];if(s){for(const o in c)o in s||(i[o]=1);for(const o in s)r[o]||(e[o]=s[o],r[o]=1);t[l]=s}else for(const o in c)r[o]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Ft(t){t&&t.c()}function Ht(t,n){t&&t.l(n)}function ot(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||S(()=>{const c=t.$$.on_mount.map(T).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...c):y(c),t.$$.on_mount=[]}),l.forEach(S)}function st(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(h.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function It(t,n,e,i,r,l,c,s=[-1]){const o=p;m(t);const u=t.$$={fragment:null,ctx:[],props:l,update:v,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(o?o.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:n.target||o.$$.root};c&&c(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,g,...j)=>{const C=j.length?j[0]:g;return u.ctx&&r(u.ctx[f],u.ctx[f]=C)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](C),a&&ut(t,f)),g}):[],u.update(),a=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){K();const f=tt(n.target);u.fragment&&u.fragment.l(f),f.forEach(X)}else u.fragment&&u.fragment.c();n.intro&&ct(t.$$.fragment),ot(t,n.target,n.anchor,n.customElement),Q(),L()}m(o)}class Lt{$destroy(){st(this,1),this.$destroy=v}$on(n,e){if(!D(e))return v;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Tt as A,v as B,Z as C,Nt as D,V as E,xt as F,_t as G,ht as H,mt as I,dt as J,Ot as K,W as L,pt as M,vt as N,zt as O,wt as P,Pt as Q,at as R,Lt as S,ft as T,L as U,yt as V,O as W,bt as a,gt as b,kt as c,qt as d,$t as e,ct as f,Dt as g,X as h,It as i,Mt as j,Y as k,Et as l,tt as m,B as n,Ct as o,At as p,A as q,et as r,lt as s,Bt as t,St as u,jt as v,Ft as w,Ht as x,ot as y,st as z};