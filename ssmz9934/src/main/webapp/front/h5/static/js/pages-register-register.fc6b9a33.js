(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"048d":function(r,e,i){var a=i("165e");"string"===typeof a&&(a=[[r.i,a,""]]),a.locals&&(r.exports=a.locals);var t=i("4f06").default;t("7a5ab6d0",a,!0,{sourceMap:!1,shadowMode:!1})},"165e":function(r,e,i){var a=i("24fb");e=a(!1),e.push([r.i,".btn-submit[data-v-23b381c4]{height:auto!important;line-height:%?88?%}",""]),r.exports=e},3735:function(r,e,i){"use strict";i.r(e);var a=i("616c"),t=i("48c7");for(var n in t)"default"!==n&&function(r){i.d(e,r,(function(){return t[r]}))}(n);i("bfc8"),i("c260");var o,l=i("f0c5"),d=Object(l["a"])(t["default"],a["b"],a["c"],!1,null,"23b381c4",null,!1,a["a"],o);e["default"]=d.exports},"48c7":function(r,e,i){"use strict";i.r(e);var a=i("4e2d"),t=i.n(a);for(var n in a)"default"!==n&&function(r){i.d(e,r,(function(){return a[r]}))}(n);e["default"]=t.a},"4e2d":function(r,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5"),i("96cf");var t=a(i("3b8d")),n={data:function(){return{banzhurenxingbieOptions:[],banzhurenxingbieIndex:0,jiazhangxingbieOptions:[],jiazhangxingbieIndex:0,jiazhangbanzhurengonghaoOptions:[],jiazhangbanzhurengonghaoIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var r=(0,t.default)(regeneratorRuntime.mark((function r(){var e,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e=[],i=uni.getStorageSync("loginTable"),this.tableName=i,"banzhuren"==this.tableName&&(this.banzhurenxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.banzhurenxingbieOptions[0]),"jiazhang"==this.tableName&&(this.jiazhangxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.jiazhangxingbieOptions[0]),"jiazhang"!=this.tableName){r.next=11;break}return r.next=8,this.$api.option("banzhuren","banzhurengonghao",{});case 8:e=r.sent,this.jiazhangbanzhurengonghaoOptions=e.data,this.ruleForm.banzhurengonghao=this.jiazhangbanzhurengonghaoOptions[0];case 11:this.styleChange();case 12:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),methods:{banzhurenxingbieChange:function(r){this.banzhurenxingbieIndex=r.target.value,this.ruleForm.xingbie=this.banzhurenxingbieOptions[this.banzhurenxingbieIndex]},jiazhangxingbieChange:function(r){this.jiazhangxingbieIndex=r.target.value,this.ruleForm.xingbie=this.jiazhangxingbieOptions[this.jiazhangxingbieIndex]},jiazhangbanzhurengonghaoChange:function(r){this.jiazhangbanzhurengonghaoIndex=r.target.value,this.ruleForm.banzhurengonghao=this.jiazhangbanzhurengonghaoOptions[this.jiazhangbanzhurengonghaoIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var r=(0,t.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.mima||"banzhuren"!=this.tableName){r.next=3;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 3:if("banzhuren"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){r.next=6;break}return this.$utils.msg("两次密码输入不一致"),r.abrupt("return");case 6:if("banzhuren"!=this.tableName||!this.ruleForm.banzhurendianhua||this.$validate.isMobile(this.ruleForm.banzhurendianhua)){r.next=9;break}return this.$utils.msg("班主任电话应输入手机格式"),r.abrupt("return");case 9:if(this.ruleForm.shenfenzheng||"banzhuren"!=this.tableName){r.next=12;break}return this.$utils.msg("身份证不能为空"),r.abrupt("return");case 12:if("banzhuren"!=this.tableName||!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){r.next=15;break}return this.$utils.msg("身份证应输入身份证格式"),r.abrupt("return");case 15:if(this.ruleForm.gongzuozheng||"banzhuren"!=this.tableName){r.next=18;break}return this.$utils.msg("工作证不能为空"),r.abrupt("return");case 18:if(this.ruleForm.jiazhangzhanghao||"jiazhang"!=this.tableName){r.next=21;break}return this.$utils.msg("家长账号不能为空"),r.abrupt("return");case 21:if(this.ruleForm.mima||"jiazhang"!=this.tableName){r.next=24;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 24:if("jiazhang"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){r.next=27;break}return this.$utils.msg("两次密码输入不一致"),r.abrupt("return");case 27:if("jiazhang"!=this.tableName||!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){r.next=30;break}return this.$utils.msg("年龄应输入整数"),r.abrupt("return");case 30:if(this.ruleForm.jiazhangshouji||"jiazhang"!=this.tableName){r.next=33;break}return this.$utils.msg("家长手机不能为空"),r.abrupt("return");case 33:if("jiazhang"!=this.tableName||!this.ruleForm.jiazhangshouji||this.$validate.isMobile(this.ruleForm.jiazhangshouji)){r.next=36;break}return this.$utils.msg("家长手机应输入手机格式"),r.abrupt("return");case 36:if(this.ruleForm.shenfenzheng||"jiazhang"!=this.tableName){r.next=39;break}return this.$utils.msg("身份证不能为空"),r.abrupt("return");case 39:if("jiazhang"!=this.tableName||!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){r.next=42;break}return this.$utils.msg("身份证应输入身份证格式"),r.abrupt("return");case 42:if(this.ruleForm.banzhurengonghao||"jiazhang"!=this.tableName){r.next=45;break}return this.$utils.msg("班主任工号不能为空"),r.abrupt("return");case 45:return r.next=47,this.$api.register("".concat(this.tableName),this.ruleForm,this.emailcode);case 47:this.$utils.msgBack("注册成功");case 49:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}()}};e.default=n},"616c":function(r,e,i){"use strict";var a,t=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"box",style:{padding:"48rpx",boxShadow:"0 0px 0px 20rpx #6B7D90",margin:"60rpx auto",borderColor:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(107, 125, 144, 1)",borderRadius:"60rpx",borderWidth:"40rpx 40rpx 0",width:"90%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"logo",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-image",{style:{padding:"0",boxShadow:"0 0 0px #59f43e",margin:"0 auto",borderColor:"#ccc",borderRadius:"50%",borderWidth:"0",width:"160rpx",borderStyle:"solid",url:"http://codegen.caihongy.cn/20220217/334f34469cfa4398bee694b7c270b918.jfif",isShow:!0,height:"160rpx"},attrs:{src:"http://codegen.caihongy.cn/20220217/334f34469cfa4398bee694b7c270b918.jfif",mode:"aspectFill"}})],1),"banzhuren"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"班主任工号"},model:{value:r.ruleForm.banzhurengonghao,callback:function(e){r.$set(r.ruleForm,"banzhurengonghao",e)},expression:"ruleForm.banzhurengonghao"}})],1):r._e(),"banzhuren"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1):r._e(),"banzhuren"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"确认密码"},model:{value:r.ruleForm.mima2,callback:function(e){r.$set(r.ruleForm,"mima2",e)},expression:"ruleForm.mima2"}})],1):r._e(),"banzhuren"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"班主任姓名"},model:{value:r.ruleForm.banzhurenxingming,callback:function(e){r.$set(r.ruleForm,"banzhurenxingming",e)},expression:"ruleForm.banzhurenxingming"}})],1):r._e(),"banzhuren"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-picker",{attrs:{value:r.banzhurenxingbieIndex,range:r.banzhurenxingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.banzhurenxingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1):r._e(),"banzhuren"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"班级"},model:{value:r.ruleForm.banji,callback:function(e){r.$set(r.ruleForm,"banji",e)},expression:"ruleForm.banji"}})],1):r._e(),"banzhuren"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"班主任电话"},model:{value:r.ruleForm.banzhurendianhua,callback:function(e){r.$set(r.ruleForm,"banzhurendianhua",e)},expression:"ruleForm.banzhurendianhua"}})],1):r._e(),"banzhuren"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"身份证"},model:{value:r.ruleForm.shenfenzheng,callback:function(e){r.$set(r.ruleForm,"shenfenzheng",e)},expression:"ruleForm.shenfenzheng"}})],1):r._e(),"banzhuren"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"工作证"},model:{value:r.ruleForm.gongzuozheng,callback:function(e){r.$set(r.ruleForm,"gongzuozheng",e)},expression:"ruleForm.gongzuozheng"}})],1):r._e(),"jiazhang"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"家长账号"},model:{value:r.ruleForm.jiazhangzhanghao,callback:function(e){r.$set(r.ruleForm,"jiazhangzhanghao",e)},expression:"ruleForm.jiazhangzhanghao"}})],1):r._e(),"jiazhang"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1):r._e(),"jiazhang"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"确认密码"},model:{value:r.ruleForm.mima2,callback:function(e){r.$set(r.ruleForm,"mima2",e)},expression:"ruleForm.mima2"}})],1):r._e(),"jiazhang"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"家长姓名"},model:{value:r.ruleForm.jiazhangxingming,callback:function(e){r.$set(r.ruleForm,"jiazhangxingming",e)},expression:"ruleForm.jiazhangxingming"}})],1):r._e(),"jiazhang"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"年龄"},model:{value:r.ruleForm.nianling,callback:function(e){r.$set(r.ruleForm,"nianling",e)},expression:"ruleForm.nianling"}})],1):r._e(),"jiazhang"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-picker",{attrs:{value:r.jiazhangxingbieIndex,range:r.jiazhangxingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.jiazhangxingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1):r._e(),"jiazhang"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"家长手机"},model:{value:r.ruleForm.jiazhangshouji,callback:function(e){r.$set(r.ruleForm,"jiazhangshouji",e)},expression:"ruleForm.jiazhangshouji"}})],1):r._e(),"jiazhang"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"身份证"},model:{value:r.ruleForm.shenfenzheng,callback:function(e){r.$set(r.ruleForm,"shenfenzheng",e)},expression:"ruleForm.shenfenzheng"}})],1):r._e(),"jiazhang"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-picker",{attrs:{value:r.jiazhangbanzhurengonghaoIndex,range:r.jiazhangbanzhurengonghaoOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.jiazhangbanzhurengonghaoChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.banzhurengonghao?r.ruleForm.banzhurengonghao:"请选择班主任工号"))])],1)],1):r._e(),i("v-uni-button",{staticClass:"btn-submit",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(180, 153, 80, 0)",borderRadius:"40rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"4rpx",width:"40%",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.register.apply(void 0,arguments)}}},[r._v("注册")])],1)],1)},n=[];i.d(e,"b",(function(){return t})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},7278:function(r,e,i){var a=i("24fb");e=a(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-23b381c4]{height:calc(100vh - 44px);overflow:auto}.content[data-v-23b381c4]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220217/0af50ec468a14613a8175b1d6a83d68a.png);background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-23b381c4]{text-align:center}.logo uni-image[data-v-23b381c4]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-23b381c4]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-23b381c4]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-23b381c4]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-23b381c4]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-23b381c4]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-23b381c4]{color:#b49950}.picker-select-input[data-v-23b381c4]{line-height:%?88?%}',""]),r.exports=e},9004:function(r,e,i){var a=i("7278");"string"===typeof a&&(a=[[r.i,a,""]]),a.locals&&(r.exports=a.locals);var t=i("4f06").default;t("506bfc06",a,!0,{sourceMap:!1,shadowMode:!1})},bfc8:function(r,e,i){"use strict";var a=i("048d"),t=i.n(a);t.a},c260:function(r,e,i){"use strict";var a=i("9004"),t=i.n(a);t.a}}]);