(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shenqingfuyi/add-or-update"],{"1a46":function(e,n,t){},"371a":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,a,r,i,u){try{var o=e[i](u),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(a,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var u=e.apply(n,t);function o(e){i(u,a,r,o,s,"next",e)}function s(e){i(u,a,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("698b"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{cross:"",ruleForm:{gongshibiaoti:"",gongshitupian:"",jiazhangzhanghao:"",jiazhangxingming:"",jiazhangshouji:"",fuyineirong:"",fuyishijian:"",sfsh:"",shhf:""},user:{},ro:{gongshibiaoti:!1,gongshitupian:!1,jiazhangzhanghao:!1,jiazhangxingming:!1,jiazhangshouji:!1,fuyineirong:!1,fuyishijian:!1,sfsh:!1,shhf:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return u(a.default.mark((function r(){var i,u,o,s;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.ruleForm.fuyishijian=t.$utils.getCurDateTime(),i=e.getStorageSync("nowTable"),r.next=4,t.$api.session(i);case 4:if(u=r.sent,t.user=u.data,t.ruleForm.jiazhangzhanghao=t.user.jiazhangzhanghao,t.ro.jiazhangzhanghao=!0,t.ruleForm.jiazhangxingming=t.user.jiazhangxingming,t.ro.jiazhangxingming=!0,t.ruleForm.jiazhangshouji=t.user.jiazhangshouji,t.ro.jiazhangshouji=!0,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=20;break}return t.ruleForm.id=n.id,r.next=18,t.$api.info("shenqingfuyi",t.ruleForm.id);case 18:u=r.sent,t.ruleForm=u.data;case 20:if(t.cross=n.cross,!n.cross){r.next=56;break}o=e.getStorageSync("crossObj"),r.t0=a.default.keys(o);case 24:if((r.t1=r.t0()).done){r.next=56;break}if(s=r.t1.value,"gongshibiaoti"!=s){r.next=30;break}return t.ruleForm.gongshibiaoti=o[s],t.ro.gongshibiaoti=!0,r.abrupt("continue",24);case 30:if("gongshitupian"!=s){r.next=34;break}return t.ruleForm.gongshitupian=o[s],t.ro.gongshitupian=!0,r.abrupt("continue",24);case 34:if("jiazhangzhanghao"!=s){r.next=38;break}return t.ruleForm.jiazhangzhanghao=o[s],t.ro.jiazhangzhanghao=!0,r.abrupt("continue",24);case 38:if("jiazhangxingming"!=s){r.next=42;break}return t.ruleForm.jiazhangxingming=o[s],t.ro.jiazhangxingming=!0,r.abrupt("continue",24);case 42:if("jiazhangshouji"!=s){r.next=46;break}return t.ruleForm.jiazhangshouji=o[s],t.ro.jiazhangshouji=!0,r.abrupt("continue",24);case 46:if("fuyineirong"!=s){r.next=50;break}return t.ruleForm.fuyineirong=o[s],t.ro.fuyineirong=!0,r.abrupt("continue",24);case 50:if("fuyishijian"!=s){r.next=54;break}return t.ruleForm.fuyishijian=o[s],t.ro.fuyishijian=!0,r.abrupt("continue",24);case 54:r.next=24;break;case 56:t.styleChange();case 57:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},fuyishijianConfirm:function(e){console.log(e),this.ruleForm.fuyishijian=e.result,this.$forceUpdate()},gongshitupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.gongshitupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(a.default.mark((function t(){var r,i,u,o,s,c,g,f,h,l;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.cross){t.next=16;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){t.next=16;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){t.next=12;break}for(g in c)g==o&&(c[g]=s);return f=e.getStorageSync("crossTable"),t.next=10,n.$api.update("".concat(f),c);case 10:t.next=16;break;case 12:r=Number(e.getStorageSync("userid")),i=c["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 16:if(!i||!r){t.next=38;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=i,h={page:1,limit:10,crossuserid:r,crossrefid:i},t.next=22,n.$api.list("shenqingfuyi",h);case 22:if(l=t.sent,!(l.data.total>=u)){t.next=28;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 28:if(!n.ruleForm.id){t.next=33;break}return t.next=31,n.$api.update("shenqingfuyi",n.ruleForm);case 31:t.next=35;break;case 33:return t.next=35,n.$api.add("shenqingfuyi",n.ruleForm);case 35:n.$utils.msgBack("提交成功");case 36:t.next=46;break;case 38:if(!n.ruleForm.id){t.next=43;break}return t.next=41,n.$api.update("shenqingfuyi",n.ruleForm);case 41:t.next=45;break;case 43:return t.next=45,n.$api.add("shenqingfuyi",n.ruleForm);case 45:n.$utils.msgBack("提交成功");case 46:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),a=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(t,"-").concat(a,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},"3c65":function(e,n,t){"use strict";(function(e){t("1558");a(t("66fd"));var n=a(t("d295"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},4152:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return a}));var a={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"698b"))}},r=function(){var e=this,n=e.$createElement;e._self._c},i=[]},ace5:function(e,n,t){"use strict";var a=t("1a46"),r=t.n(a);r.a},d295:function(e,n,t){"use strict";t.r(n);var a=t("4152"),r=t("e8ef");for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("ace5");var u,o=t("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"2826a74a",null,!1,a["a"],u);n["default"]=s.exports},e8ef:function(e,n,t){"use strict";t.r(n);var a=t("371a"),r=t.n(a);for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n["default"]=r.a}},[["3c65","common/runtime","common/vendor"]]]);