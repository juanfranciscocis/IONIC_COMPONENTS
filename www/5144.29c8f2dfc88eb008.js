"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5144],{5144:(M,s,i)=>{i.r(s),i.d(s,{SearchPageModule:()=>y});var c=i(1368),d=i(4716),o=i(2112),u=i(1224),e=i(4496),g=i(8644);let m=(()=>{var a;class r{transform(t,l=""){return t.filter(h=>h.title.toLowerCase().includes(l.toLowerCase()))}}return(a=r).\u0275fac=function(t){return new(t||a)},a.\u0275pipe=e.UTH({name:"filtro",type:a,pure:!0}),r})();function p(a,r){if(1&a&&(e.I0R(0,"ion-item")(1,"ion-label",7),e.OEk(2),e.C$Y()()),2&a){const n=r.$implicit;e.yG2(2),e.CAO("",n.id,". ",n.title,"")}}const f=[{path:"",component:(()=>{var a;class r{constructor(t){this.dataService=t,this.albums=[],this.query=""}ngOnInit(){this.dataService.getAlbums().subscribe(t=>{this.albums=t,console.log(this.albums)})}onSearchChange(t){this.query=t.detail.value}}return(a=r).\u0275fac=function(t){return new(t||a)(e.GI1(g.A))},a.\u0275cmp=e.In1({type:a,selectors:[["app-search"]],decls:12,vars:7,consts:[[3,"translucent"],["slot","start","default-href","/","text","Regresar","color","primary"],["placeholder","Buscar","animated","true",3,"debounce","ionChange"],[3,"fullscreen"],["collapse","condense"],["size","large"],[4,"ngFor","ngForOf"],[1,"ion-text-capitalize"]],template:function(t,l){1&t&&(e.I0R(0,"ion-header",0)(1,"ion-toolbar"),e.wR5(2,"ion-back-button",1),e.C$Y(),e.I0R(3,"ion-searchbar",2),e.qCj("ionChange",function(C){return l.onSearchChange(C)}),e.C$Y()(),e.I0R(4,"ion-content",3)(5,"ion-header",4)(6,"ion-toolbar")(7,"ion-title",5),e.OEk(8,"Search"),e.C$Y()()(),e.I0R(9,"ion-list"),e.yuY(10,p,3,2,"ion-item",6),e.wVc(11,"filtro"),e.C$Y()()),2&t&&(e.E7m("translucent",!0),e.yG2(3),e.E7m("debounce",1e3),e.yG2(),e.E7m("fullscreen",!0),e.yG2(6),e.E7m("ngForOf",e.g7$(11,4,l.albums,l.query)))},dependencies:[c.ay,o._i,o.wB,o.Yb,o.QR,o.OC,o.KQ,o.tM,o.Md,o.qG,o.Im,m]}),r})()}];let P=(()=>{var a;class r{}return(a=r).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[u.qQ.forChild(f),u.qQ]}),r})(),S=(()=>{var a;class r{}return(a=r).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[c.MD]}),r})(),y=(()=>{var a;class r{}return(a=r).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[c.MD,d.y,o.wZ,P,S]}),r})()}}]);