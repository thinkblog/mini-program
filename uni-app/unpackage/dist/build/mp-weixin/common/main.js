(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"1d6d":function(t,e,n){},3048:function(t,e,n){},"66af":function(t,e,n){"use strict";n.r(e);var o=n("f113"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=r.a},"6c94":function(t,e,n){"use strict";var o,r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return o})},"79ac":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,o,r,u,a){try{var i=t[u](a),c=i.value}catch(s){return void n(s)}i.done?e(c):Promise.resolve(c).then(o,r)}function a(t){return function(){var e=this,n=arguments;return new Promise(function(o,r){var a=t.apply(e,n);function i(t){u(a,o,r,i,c,"next",t)}function c(t){u(a,o,r,i,c,"throw",t)}i(void 0)})}}var i={name:"home",data:function(){return{isLoading:!0,curPage:0,postData:[]}},methods:{formatTime:function(t){return this.$moment.unix(t).fromNow()},loadPost:function(){var e=a(o.default.mark(function e(){var n;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.isLoading=!0,this.postData.curPage%10==0&&(this.postData=[]),e.next=4,this.$api.getRecentPost({page:this.curPage+1});case 4:n=e.sent,null!=n&&n.length>0&&(this.postData=this.postData.concat(n),this.curPage++),this.isLoading=!1,t.stopPullDownRefresh();case 8:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()},onReady:function(){var t=a(o.default.mark(function t(){var e=this;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.loadPost();case 2:this._observer=wx.createIntersectionObserver(this),this._observer.relativeToViewport({bottom:600}).observe(".action",function(t){console.log(t),e.loadPost()});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),pageLifetimes:{onReachBottom:function(){console.log("触底事件"),this.loadPost()},onPullDownRefresh:function(){this.curPage=0,this.postData=[],this.loadPost()}}};e.default=i}).call(this,n("543d")["default"])},"7e1c":function(t,e,n){"use strict";n.r(e);var o=n("79ac"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=r.a},8276:function(t,e,n){"use strict";var o=n("e46f"),r=n.n(o);r.a},"8a61":function(t,e,n){"use strict";var o=n("1d6d"),r=n.n(o);r.a},9917:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n("a34a")),r=u(n("66fd"));u(n("f66e"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,o,r,u,a){try{var i=t[u](a),c=i.value}catch(s){return void n(s)}i.done?e(c):Promise.resolve(c).then(o,r)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(o,r){var u=t.apply(e,n);function i(t){a(u,o,r,i,c,"next",t)}function c(t){a(u,o,r,i,c,"throw",t)}i(void 0)})}}var c={methods:{update:function(){var t=wx.getUpdateManager();t.onCheckForUpdate(function(t){console.log("是否有新版本？",t.hasUpdate)}),t.onUpdateReady(function(){wx.showModal({title:"发现新版本",content:"新版本已经准备好，是否重启应用？",success:function(e){e.confirm&&t.applyUpdate()}})})},init:function(){t.getSystemInfo({success:function(e){t.getSystemInfo({success:function(t){r.default.prototype.StatusBar=t.statusBarHeight;var e=wx.getMenuButtonBoundingClientRect();e?(r.default.prototype.Custom=e,r.default.prototype.CustomBar=e.bottom+e.top-t.statusBarHeight):r.default.prototype.CustomBar=t.statusBarHeight+50}})}})},login:function(){var e=this;wx.login({success:function(){var n=i(o.default.mark(function n(r){return o.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:console.log("尝试登录",r),r.code?wx.getSetting({success:function(){var n=i(o.default.mark(function n(u){var a;return o.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(!u.authSetting["scope.userInfo"]){n.next=5;break}console.log("用户已授权",u),wx.getUserInfo({success:function(){var n=i(o.default.mark(function n(u){var a,i;return o.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return console.log("尝试获取用户信息",u),a={code:r.code},Object.assign(a,u.userInfo),n.next=5,e.$api.login(a);case 5:i=n.sent,t.setStorageSync("openid",i);case 7:case"end":return n.stop()}},n,this)}));function u(t){return n.apply(this,arguments)}return u}()}),n.next=9;break;case 5:return n.next=7,e.$api.login({code:r.code});case 7:a=n.sent,t.setStorageSync("openid",a);case 9:case"end":return n.stop()}},n,this)}));function u(t){return n.apply(this,arguments)}return u}()}):console.log("登录失败！"+r.errMsg);case 2:case"end":return n.stop()}},n,this)}));function r(t){return n.apply(this,arguments)}return r}()})}},onLaunch:function(){console.log("APP onLaunch"),this.update(),this.init(),this.login()},onHide:function(){console.log("App Hide")}};e.default=c}).call(this,n("543d")["default"])},"9d1b":function(t,e,n){"use strict";(function(t){n("520f");var e=f(n("66fd")),o=f(n("f3ae")),r=f(n("a90b")),u=f(n("a283")),a=s(n("49e2")),i=f(n("0618"));n("c784");var c=f(n("f66e"));function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};o.get||o.set?Object.defineProperty(e,n,o):e[n]=t[n]}return e.default=t,e}function f(t){return t&&t.__esModule?t:{default:t}}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){d(t,e,n[e])})}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=function(){return n.e("common/componets/cu-custom").then(n.bind(null,"c8a9"))};e.default.component("cu-custom",p);var h=function(){return n.e("common/componets/tm-footer").then(n.bind(null,"ed51"))};e.default.component("tm-footer",h),e.default.component("home",r.default),e.default.component("about",u.default),e.default.prototype.$api=a,i.default.locale("zh-cn"),e.default.prototype.$moment=i.default,e.default.prototype.$qs=c.default,o.default.mpType="app";var v=new e.default(l({},o.default));t(v).$mount(),e.default.mixin({onShareAppMessage:function(){return{}}})}).call(this,n("543d")["createApp"])},a283:function(t,e,n){"use strict";n.r(e);var o=n("6c94"),r=n("66af");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("8a61");var a,i=n("f0c5"),c=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=c.exports},a90b:function(t,e,n){"use strict";n.r(e);var o=n("be48"),r=n("7e1c");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("db8b");var a,i=n("f0c5"),c=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=c.exports},be48:function(t,e,n){"use strict";var o,r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.postData,function(e,n){var o=t.formatTime(e.created);return{$orig:t.__get_orig(e),m0:o}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},u=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return o})},db8b:function(t,e,n){"use strict";var o=n("3048"),r=n.n(o);r.a},e46f:function(t,e,n){},f113:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,o,r,u,a){try{var i=t[u](a),c=i.value}catch(s){return void n(s)}i.done?e(c):Promise.resolve(c).then(o,r)}function a(t){return function(){var e=this,n=arguments;return new Promise(function(o,r){var a=t.apply(e,n);function i(t){u(a,o,r,i,c,"next",t)}function c(t){u(a,o,r,i,c,"throw",t)}i(void 0)})}}var i={name:"about",data:function(){return{cid:null,isLoading:!0,Overview:{},postData:{}}},onReady:function(){var t=a(o.default.mark(function t(e){return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.getAboutcid();case 2:return this.cid=t.sent,t.next=5,this.$api.getPostBycid({cid:this.cid});case 5:return this.postData=t.sent,this.isLoading=!1,t.next=9,this.$api.getOverview();case 9:this.Overview=t.sent;case 10:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onShow:function(){}};e.default=i},f3ae:function(t,e,n){"use strict";n.r(e);var o=n("fbdb");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("8276");var u,a,i,c,s=n("f0c5"),f=Object(s["a"])(o["default"],u,a,!1,null,null,null,!1,i,c);e["default"]=f.exports},fbdb:function(t,e,n){"use strict";n.r(e);var o=n("9917"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=r.a}},[["9d1b","common/runtime","common/vendor"]]]);