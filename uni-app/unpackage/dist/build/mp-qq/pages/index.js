(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index"],{"0523":function(t,e,n){"use strict";(function(t){n("520f");a(n("66fd"));var e=a(n("a90b"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("a821")["createPage"])},3048:function(t,e,n){},"79ac":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,a,o,r,i){try{var u=t[r](i),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(a,o)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(a,o){var i=t.apply(e,n);function u(t){r(i,a,o,u,s,"next",t)}function s(t){r(i,a,o,u,s,"throw",t)}u(void 0)})}}var u={name:"home",data:function(){return{isLoading:!0,curPage:0,postData:[]}},methods:{formatTime:function(t){return this.$moment.unix(t).fromNow()},loadPost:function(){var e=i(a.default.mark(function e(){var n;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.isLoading=!0,this.postData.curPage%10==0&&(this.postData=[]),e.next=4,this.$api.getRecentPost({page:this.curPage+1});case 4:n=e.sent,null!=n&&n.length>0&&(this.postData=this.postData.concat(n),this.curPage++),this.isLoading=!1,t.stopPullDownRefresh();case 8:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()},onReady:function(){var t=i(a.default.mark(function t(){var e=this;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.loadPost();case 2:this._observer=wx.createIntersectionObserver(this),this._observer.relativeToViewport({bottom:600}).observe(".action",function(t){console.log(t),e.loadPost()});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),pageLifetimes:{onReachBottom:function(){console.log("触底事件"),this.loadPost()},onPullDownRefresh:function(){this.curPage=0,this.postData=[],this.loadPost()}}};e.default=u}).call(this,n("a821")["default"])},"7e1c":function(t,e,n){"use strict";n.r(e);var a=n("79ac"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},a90b:function(t,e,n){"use strict";n.r(e);var a=n("be48"),o=n("7e1c");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("db8b");var i,u=n("f0c5"),s=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);e["default"]=s.exports},be48:function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.postData,function(e,n){var a=t.formatTime(e.created);return{$orig:t.__get_orig(e),m0:a}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},r=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a})},db8b:function(t,e,n){"use strict";var a=n("3048"),o=n.n(a);o.a}},[["0523","common/runtime","common/vendor"]]]);