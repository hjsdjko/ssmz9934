(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mingdangongshi/add-or-update"],{"01d6":function(e,n,t){"use strict";var r=t("3ecc"),i=t.n(r);i.a},"0964":function(e,n,t){"use strict";(function(e){t("1558");r(t("66fd"));var n=r(t("9add"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"3d6e":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,i,a,u){try{var o=e[a](u),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(r,i)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var u=e.apply(n,t);function o(e){a(u,r,i,o,s,"next",e)}function s(e){a(u,r,i,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("698b"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{cross:"",ruleForm:{shenqingshijian:"",xuexiaobanji:"",pinkundengji:"",shenpishijian:"",zizhujine:"",xueshengxingming:"",zizhunianxian:"",gongshibiaoti:"",gongshitupian:""},user:{},ro:{shenqingshijian:!1,xuexiaobanji:!1,pinkundengji:!1,shenpishijian:!1,zizhujine:!1,xueshengxingming:!1,zizhunianxian:!1,gongshibiaoti:!1,gongshitupian:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return u(r.default.mark((function i(){var a,u,o,s;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.ruleForm.shenpishijian=t.$utils.getCurDate(),a=e.getStorageSync("nowTable"),i.next=4,t.$api.session(a);case 4:if(u=i.sent,t.user=u.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=14;break}return t.ruleForm.id=n.id,i.next=12,t.$api.info("mingdangongshi",t.ruleForm.id);case 12:u=i.sent,t.ruleForm=u.data;case 14:if(t.cross=n.cross,!n.cross){i.next=58;break}o=e.getStorageSync("crossObj"),i.t0=r.default.keys(o);case 18:if((i.t1=i.t0()).done){i.next=58;break}if(s=i.t1.value,"shenqingshijian"!=s){i.next=24;break}return t.ruleForm.shenqingshijian=o[s],t.ro.shenqingshijian=!0,i.abrupt("continue",18);case 24:if("xuexiaobanji"!=s){i.next=28;break}return t.ruleForm.xuexiaobanji=o[s],t.ro.xuexiaobanji=!0,i.abrupt("continue",18);case 28:if("pinkundengji"!=s){i.next=32;break}return t.ruleForm.pinkundengji=o[s],t.ro.pinkundengji=!0,i.abrupt("continue",18);case 32:if("shenpishijian"!=s){i.next=36;break}return t.ruleForm.shenpishijian=o[s],t.ro.shenpishijian=!0,i.abrupt("continue",18);case 36:if("zizhujine"!=s){i.next=40;break}return t.ruleForm.zizhujine=o[s],t.ro.zizhujine=!0,i.abrupt("continue",18);case 40:if("xueshengxingming"!=s){i.next=44;break}return t.ruleForm.xueshengxingming=o[s],t.ro.xueshengxingming=!0,i.abrupt("continue",18);case 44:if("zizhunianxian"!=s){i.next=48;break}return t.ruleForm.zizhunianxian=o[s],t.ro.zizhunianxian=!0,i.abrupt("continue",18);case 48:if("gongshibiaoti"!=s){i.next=52;break}return t.ruleForm.gongshibiaoti=o[s],t.ro.gongshibiaoti=!0,i.abrupt("continue",18);case 52:if("gongshitupian"!=s){i.next=56;break}return t.ruleForm.gongshitupian=o[s],t.ro.gongshitupian=!0,i.abrupt("continue",18);case 56:i.next=18;break;case 58:t.styleChange();case 59:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},shenpishijianChange:function(e){this.ruleForm.shenpishijian=e.target.value,this.$forceUpdate()},gongshitupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.gongshitupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function t(){var i,a,u,o,s,c,g,l,f,d;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.zizhujine){t.next=3;break}return n.$utils.msg("资助金额不能为空"),t.abrupt("return");case 3:if(n.ruleForm.zizhunianxian){t.next=6;break}return n.$utils.msg("资助年限不能为空"),t.abrupt("return");case 6:if(n.ruleForm.gongshibiaoti){t.next=9;break}return n.$utils.msg("公示标题不能为空"),t.abrupt("return");case 9:if(n.ruleForm.gongshitupian){t.next=12;break}return n.$utils.msg("公示图片不能为空"),t.abrupt("return");case 12:if(!n.cross){t.next=28;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){t.next=28;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){t.next=24;break}for(g in c)g==o&&(c[g]=s);return l=e.getStorageSync("crossTable"),t.next=22,n.$api.update("".concat(l),c);case 22:t.next=28;break;case 24:i=Number(e.getStorageSync("userid")),a=c["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 28:if(!a||!i){t.next=50;break}return n.ruleForm.crossuserid=i,n.ruleForm.crossrefid=a,f={page:1,limit:10,crossuserid:i,crossrefid:a},t.next=34,n.$api.list("mingdangongshi",f);case 34:if(d=t.sent,!(d.data.total>=u)){t.next=40;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 40:if(!n.ruleForm.id){t.next=45;break}return t.next=43,n.$api.update("mingdangongshi",n.ruleForm);case 43:t.next=47;break;case 45:return t.next=47,n.$api.add("mingdangongshi",n.ruleForm);case 47:n.$utils.msgBack("提交成功");case 48:t.next=58;break;case 50:if(!n.ruleForm.id){t.next=55;break}return t.next=53,n.$api.update("mingdangongshi",n.ruleForm);case 53:t.next=57;break;case 55:return t.next=57,n.$api.add("mingdangongshi",n.ruleForm);case 57:n.$utils.msgBack("提交成功");case 58:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,i=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(t,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},"3ecc":function(e,n,t){},"9add":function(e,n,t){"use strict";t.r(n);var r=t("b234"),i=t("fd77");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("01d6");var u,o=t("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"1adf8900",null,!1,r["a"],u);n["default"]=s.exports},b234:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var i=function(){var e=this,n=e.$createElement;e._self._c},a=[]},fd77:function(e,n,t){"use strict";t.r(n);var r=t("3d6e"),i=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=i.a}},[["0964","common/runtime","common/vendor"]]]);