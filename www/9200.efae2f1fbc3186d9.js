"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9200],{9200:(y,i,o)=>{o.r(i),o.d(i,{AccionesPageModule:()=>v});var h=o(1368),g=o(4716),c=o(2112),l=o(7632),u=o(1528),t=o(4496),p=o(6032);const f=[{path:"",component:(()=>{var e;class a{constructor(n,r){this.actionSheetCtrl=n,this.alertSheetCtrl=r}presentAlert(){var n=this;return(0,u.c)(function*(){yield(yield n.alertSheetCtrl.create({header:"Sure you want to delete?",subHeader:"This is a delete message",buttons:["OK","Cancel"]})).present()})()}presentActionSheet(){var n=this;return(0,u.c)(function*(){yield(yield n.actionSheetCtrl.create({backdropDismiss:!1,header:"Actions you can perform",buttons:[{text:"Delete",role:"destructive",data:{action:"delete"},handler:()=>{n.presentAlert()},cssClass:"color-danger"},{text:"Share",icon:"share-outline",cssClass:".color-danger",data:{action:"share"},handler:()=>{navigator.share&&navigator.share({title:"Share this",text:"This is a shared text",url:"https://ionicframework.com/docs/components"}).then(()=>console.log("Successful share")).catch(d=>console.log("Error sharing",d))}},{text:"Cancel",role:"cancel",data:{action:"cancel"}}]})).present()})()}ngOnInit(){}}return(e=a).\u0275fac=function(n){return new(n||e)(t.GI1(c.MR),t.GI1(c.iW))},e.\u0275cmp=t.In1({type:e,selectors:[["app-acciones"]],decls:8,vars:1,consts:[["titulo","Action Sheet"],[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"ion-align-self-center",3,"click"]],template:function(n,r){1&n&&(t.wR5(0,"app-header",0),t.I0R(1,"ion-content",1)(2,"ion-header",2)(3,"ion-toolbar")(4,"ion-title",3),t.OEk(5,"Action Sheet"),t.C$Y()()(),t.I0R(6,"ion-button",4),t.qCj("click",function(){return r.presentActionSheet()}),t.OEk(7,"Action Sheet Display"),t.C$Y()()),2&n&&(t.yG2(),t.E7m("fullscreen",!0))},dependencies:[c.sn,c._i,c.wB,c.tM,c.Md,p.k]}),a})()}];let m=(()=>{var e;class a{}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.a4G({type:e}),e.\u0275inj=t.s3X({imports:[l.qQ.forChild(f),l.qQ]}),a})();var A=o(7604);let v=(()=>{var e;class a{}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.a4G({type:e}),e.\u0275inj=t.s3X({imports:[h.MD,g.y,c.wZ,m,A.z]}),a})()}}]);