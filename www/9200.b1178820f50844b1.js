"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9200,6032,3652],{6032:(f,p,o)=>{o.d(p,{k:()=>c});var a=o(4496),i=o(2112);let c=(()=>{var s;class d{constructor(){this.titulo=""}ngOnInit(){}}return(s=d).\u0275fac=function(l){return new(l||s)},s.\u0275cmp=a.In1({type:s,selectors:[["app-header"]],inputs:{titulo:"titulo"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start"],["text","Regresar","defaultHref","/"],[1,"ion-text-capitalize"]],template:function(l,g){1&l&&(a.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),a.wR5(3,"ion-back-button",2),a.C$Y(),a.I0R(4,"ion-title",3),a.OEk(5),a.C$Y()()()),2&l&&(a.E7m("translucent",!0),a.yG2(5),a.cNF(g.titulo))},dependencies:[i.GS,i.wB,i.tM,i.Md,i.Im]}),d})()},9200:(f,p,o)=>{o.r(p),o.d(p,{AccionesPageModule:()=>P});var a=o(1368),i=o(4716),c=o(2112),s=o(422),d=o(1528),e=o(4496),l=o(6032);const A=[{path:"",component:(()=>{var t;class r{constructor(n,h){this.actionSheetCtrl=n,this.alertSheetCtrl=h}presentAlert(){var n=this;return(0,d.c)(function*(){yield(yield n.alertSheetCtrl.create({header:"Sure you want to delete?",subHeader:"This is a delete message",buttons:["OK","Cancel"]})).present()})()}presentActionSheet(){var n=this;return(0,d.c)(function*(){yield(yield n.actionSheetCtrl.create({backdropDismiss:!1,header:"Actions you can perform",buttons:[{text:"Delete",role:"destructive",data:{action:"delete"},handler:()=>{n.presentAlert()},cssClass:"color-danger"},{text:"Share",icon:"share-outline",cssClass:".color-danger",data:{action:"share"},handler:()=>{navigator.share&&navigator.share({title:"Share this",text:"This is a shared text",url:"https://ionicframework.com/docs/components"}).then(()=>console.log("Successful share")).catch(m=>console.log("Error sharing",m))}},{text:"Cancel",role:"cancel",data:{action:"cancel"}}]})).present()})()}ngOnInit(){}}return(t=r).\u0275fac=function(n){return new(n||t)(e.GI1(c.MR),e.GI1(c.iW))},t.\u0275cmp=e.In1({type:t,selectors:[["app-acciones"]],decls:8,vars:1,consts:[["titulo","Action Sheet"],[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"ion-align-self-center",3,"click"]],template:function(n,h){1&n&&(e.wR5(0,"app-header",0),e.I0R(1,"ion-content",1)(2,"ion-header",2)(3,"ion-toolbar")(4,"ion-title",3),e.OEk(5,"Action Sheet"),e.C$Y()()(),e.I0R(6,"ion-button",4),e.qCj("click",function(){return h.presentActionSheet()}),e.OEk(7,"Action Sheet Display"),e.C$Y()()),2&n&&(e.yG2(),e.E7m("fullscreen",!0))},dependencies:[c.sn,c._i,c.wB,c.tM,c.Md,l.k]}),r})()}];let C=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[s.qQ.forChild(A),s.qQ]}),r})();var v=o(7604);let P=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[a.MD,i.y,c.wZ,C,v.z]}),r})()}}]);