webpackJsonp([2],{j7e0:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"Home",data:function(){return{msg:"",msgType:"",msgShow:!1}},beforeRouteEnter:function(s,e,t){var n=e.name,o=s.params.logout;t(function(s){if(s.$store.state.auth)switch(n){case"Register":s.showMsg("注册成功");break;case"Login":s.showMsg("登录成功")}else o&&s.showMsg("操作成功")})},computed:{auth:function(){return this.$store.state.auth}},watch:{auth:function(s){s||this.showMsg("操作成功")}},methods:{showMsg:function(s){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.msg=s,this.msgType=e,this.msgShow=!0}}},o={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("Message",{attrs:{show:s.msgShow,type:s.msgType,msg:s.msg},on:{"update:show":function(e){s.msgShow=e}}})],1)},staticRenderFns:[]},a=t("VU/8")(n,o,!1,null,null,null);e.default=a.exports}});
//# sourceMappingURL=2.4bb780da62cb5f6f1f57.js.map