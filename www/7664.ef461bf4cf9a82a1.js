"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7664],{7664:(v,c,i)=>{i.r(c),i.d(c,{Newstab1PageModule:()=>N});var r=i(1368),g=i(4716),n=i(2112),l=i(1224),e=i(4496),u=i(7048);let w=(()=>{var t;class s{constructor(o){this.http=o}getNews(){return this.http.get("https://newsapi.org/v2/everything?q=tesla&from=2024-03-01&sortBy=publishedAt&apiKey=899cae8c0f814e7ebba3ba91476ef650")}}return(t=s).\u0275fac=function(o){return new(o||t)(e.CoB(u.KK))},t.\u0275prov=e.wxM({token:t,factory:t.\u0275fac,providedIn:"root"}),s})();var d=i(6032);function b(t,s){if(1&t&&e.wR5(0,"img",18),2&t){const a=e.GaO().$implicit;e.E7m("src",a.urlToImage,e.K6U)}}function m(t,s){if(1&t&&(e.I0R(0,"ion-col",13)(1,"ion-card",14)(2,"ion-card-header",15)(3,"ion-card-subtitle"),e.OEk(4),e.C$Y(),e.I0R(5,"ion-card-title"),e.OEk(6),e.C$Y()(),e.yuY(7,b,1,1,"img",16),e.I0R(8,"ion-card-content",17),e.OEk(9),e.C$Y()()()),2&t){const a=s.$implicit;e.yG2(),e._6D("href",a.url),e.yG2(3),e.cNF(a.author),e.yG2(2),e.cNF(a.title),e.yG2(),e.E7m("ngIf",a.urlToImage),e.yG2(2),e.oRS(" ",a.description," ")}}const p=[{path:"",component:(()=>{var t;class s{constructor(o){this.service=o,this.news=[]}ngOnInit(){this.service.getNews().subscribe(o=>{console.log(o),this.news.push(...o.articles)})}}return(t=s).\u0275fac=function(o){return new(o||t)(e.GI1(w))},t.\u0275cmp=e.In1({type:t,selectors:[["app-newstab1"]],decls:23,vars:2,consts:[[3,"fullscreen"],["collapse","condense"],["size","large"],["size","12","size-md","6",4,"ngFor","ngForOf"],["slot","bottom"],["tab","newstab1"],["name","newspaper"],["tab","radio"],["name","radio"],["tab","library"],["name","library"],["tab","search"],["name","search"],["size","12","size-md","6"],["target","_blank",1,"news-card",3,"href"],[1,"header-space"],["class","news-image",3,"src",4,"ngIf"],[1,"descrip-wrap"],[1,"news-image",3,"src"]],template:function(o,y){1&o&&(e.wR5(0,"app-header"),e.I0R(1,"ion-content",0)(2,"ion-header",1)(3,"ion-toolbar")(4,"ion-title",2),e.OEk(5,"Tesla News"),e.C$Y()()(),e.I0R(6,"ion-grid")(7,"ion-row"),e.yuY(8,m,10,5,"ion-col",3),e.C$Y()()(),e.I0R(9,"ion-tabs")(10,"ion-tab-bar",4)(11,"ion-tab-button",5),e.wR5(12,"ion-icon",6),e.OEk(13," Tesla "),e.C$Y(),e.I0R(14,"ion-tab-button",7),e.wR5(15,"ion-icon",8),e.OEk(16," Radio "),e.C$Y(),e.I0R(17,"ion-tab-button",9),e.wR5(18,"ion-icon",10),e.OEk(19," Library "),e.C$Y(),e.I0R(20,"ion-tab-button",11),e.wR5(21,"ion-icon",12),e.OEk(22," Search "),e.C$Y()()()),2&o&&(e.yG2(),e.E7m("fullscreen",!0),e.yG2(7),e.E7m("ngForOf",y.news))},dependencies:[r.ay,r.u_,n.KC,n.Gg,n.YY,n.MN,n.I7,n.Kk,n._i,n.YP,n.wB,n.Ko,n.qo,n.mx,n.ej,n.tM,n.Md,n.CE,d.k],styles:[".news-image[_ngcontent-%COMP%]{width:100%;height:200px;object-fit:cover}.news-card[_ngcontent-%COMP%]{font-weight:700;height:500px}.descrip-wrap[_ngcontent-%COMP%]{height:100px;overflow:hidden}"]}),s})()}];let h=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[l.qQ.forChild(p),l.qQ]}),s})();var f=i(7604);let N=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[r.MD,g.y,n.wZ,h,f.z]}),s})()}}]);