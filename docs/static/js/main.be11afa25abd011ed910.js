webpackJsonp([8],{0:function(t,n,e){e("j1ja"),t.exports=e("NHnr")},DmmN:function(t,n){},EIeB:function(t,n){},GI30:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={};e.d(o,"test1",function(){return v}),e.d(o,"test2",function(){return m});var i=e("fZjL"),l=e.n(i),A=e("7+uW"),r=e("zL8q"),a=e.n(r),s=(e("tvR6"),e("GI30"),{render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"header"},[o("div",{staticClass:"top"},[o("div",{staticClass:"logo fl",staticStyle:{"text-align":"center",display:"flex","justify-content":"center","align-items":"center",height:"70px"}},[o("router-link",{attrs:{to:"/"}},[o("img",{staticStyle:{height:"30px"},attrs:{src:e("P+qR"),alt:"汉兴科技",link:"/"}})])],1),t._v(" "),t._m(0)]),t._v(" "),o("div",{staticClass:"menu"},[o("div",{staticClass:"center"},t._l(t.menuLists,function(n,e){return o("router-link",{key:e,class:{active:t.activeIndex===e},staticStyle:{"font-weight":"bolder"},attrs:{to:n.link},nativeOn:{click:function(n){return t.changeIndex(e)}}},[t._v(t._s(n.title))])}),1)])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"tel fr",staticStyle:{color:"#00458e","font-weight":"bolder"}},[n("img",{staticStyle:{"margin-top":"-5px"},attrs:{src:e("UqHI")}}),this._v(" 咨询热线：153-3530-0606")])}]});var c={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"banner"},[n("el-carousel",{attrs:{trigger:"click",height:"650px","indicator-position":this.indicatorStatus,interval:5e3}},this._l(this.bannerLists,function(t,e){return n("el-carousel-item",{key:e,style:"background: url("+t+") no-repeat center"})}),1)],1)},staticRenderFns:[]};var g={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"footer"},[e("div",{staticClass:"w"},[e("div",{staticClass:"info fl"},[e("div",{staticClass:"link"},t._l(t.menuLists,function(n,o){return e("router-link",{key:o,attrs:{to:n.link}},[t._v(t._s(n.title))])}),1),t._v(" "),t._m(0)]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"msg"},[n("p",{staticStyle:{"line-height":"30px"}},[this._v("\n          地址：山东省济南市槐荫区兴福寺南路与滨州路交叉路口往西北约100米(恒大翡翠华庭3期南侧约150米)\n          "),n("br"),this._v("\n          电话：153-3530-0606 邮箱：15335300606@163.com\n          "),n("br"),this._v("\n          版权所有：Copyright@2020 济南汉兴自动化科技有限公司 | "),n("a",{attrs:{href:"http://www.beian.miit.gov.cn",target:"_blank"}},[n("img",{staticStyle:{"margin-top":"-5px"},attrs:{src:"http://image.focusprogram.top/icp_beian.png"}}),this._v(" 鲁ICP备20032717号-1")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"icons fr"},[n("img",{staticClass:"code",attrs:{src:e("oB+8"),alt:""}})])}]};var u={name:"App",components:{"v-header":e("VU/8")({data:function(){return{menuLists:[{title:"首页",link:"/"},{title:"产品列表",link:"professors"},{title:"产品案例",link:"productcase"},{title:"关于我们",link:"introduction"},{title:"联系我们",link:"contact"}],activeIndex:0}},methods:{changeIndex:function(t){this.activeIndex=t}},watch:{$route:function(t){var n=this;this.menuLists.map(function(e,o){-1!==t.path.indexOf(e.link)&&(n.activeIndex=o)})}},created:function(){this.$emit("banner",!1)}},s,!1,function(t){e("DmmN")},"data-v-14ace690",null).exports,"v-banner":e("VU/8")({data:function(){return{bannerLists:["./static/images/banner/banner-5.png","./static/images/banner/banner-6.png","./static/images/banner/banner-7.png"],indicatorStatus:"inside"}},created:function(){this.indicatorStatus=this.bannerLists.length>1?"inside":"none"}},c,!1,function(t){e("EIeB")},null,null).exports,"v-footer":e("VU/8")({data:function(){return{menuLists:[{title:"首页",link:"/"},{title:"产品列表",link:"professors"},{title:"产品案例",link:"productcase"},{title:"关于我们",link:"introduction"},{title:"联系我们",link:"contact"}]}}},g,!1,function(t){e("w0bi")},"data-v-4272d7ae",null).exports},data:function(){return{banner_show:!0}},methods:{banner:function(t){this.banner_show=t}}},d={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-header"),this._v(" "),this.banner_show?n("v-banner"):this._e(),this._v(" "),n("router-view",{on:{banner:this.banner}}),this._v(" "),n("v-footer")],1)},staticRenderFns:[]},f=e("VU/8")(u,d,!1,null,null,null).exports,h=e("/ocq");A.default.use(h.a);var p=new h.a({routes:[{path:"*",redirect:"/"},{path:"/",name:"home",component:function(){return e.e(0).then(e.bind(null,"lyB/"))}},{path:"/introduction",name:"introduction",component:function(){return e.e(1).then(e.bind(null,"CSiD"))}},{path:"/productcase",name:"productcase",component:function(){return e.e(6).then(e.bind(null,"uCrh"))}},{path:"/productcasedetail",name:"productcasedetail",component:function(){return e.e(3).then(e.bind(null,"zQTH"))}},{path:"/professors",name:"professors",component:function(){return e.e(2).then(e.bind(null,"3LBO"))}},{path:"/professorsdetail",name:"professorsdetail",component:function(){return e.e(4).then(e.bind(null,"jwfd"))}},{path:"/contact",name:"contact",component:function(){return e.e(5).then(e.bind(null,"THSP"))}}]}),v=function(t){return 2*t},m=function(t){return t*(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)},b=e("dAEq"),R=e.n(b);l()(o).forEach(function(t){return A.default.filter(t,o[t])}),A.default.config.productionTip=!1,A.default.use(a.a),A.default.use(R.a,{ak:"3zYv2l6H81yf4RF4AS25X3FwQULdG3L2"}),A.default.prototype.common={getNumArr:function(t,n){for(var e=t.length,o=[],i=0;i<e/n;i++)o.push(t.slice(i*n,(i+1)*n));return o}},p.afterEach(function(t,n,e){window.scrollTo(0,0)}),e("txPn"),new A.default({el:"#app",router:p,components:{App:f},template:"<App/>"})},"P+qR":function(t,n,e){t.exports=e.p+"static/img/hanxing-logo.7fa96e2.png"},UqHI:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABI1BMVEUAAAAAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAlogAAAChE7csAAAAX3RSTlMAAAcKCAYuaJi0vL24VQlMrOo1q/a+C27kwAwWmfvmndrDDh2xwTpE48gQHLamG1L+/aESAUVsZl5YTxkFjw1g96gRKdvEBJs/7wOf8Hgn+pMTYXaVhYF7c2VTt7qylA0YacUAAAABYktHRACIBR1IAAAACXBIWXMAAAJYAAACWACbxr6zAAAAB3RJTUUH5AcFBxU3TriKiAAAAPpJREFUKM9tkOlWwjAYREkXkVIqiApKXbAugAUqoqKoqIDgvuLGMu//FrZJ5ZSE+ZVzb/Ilk1AoEEIjybJCCIfVmfBsRIvqMTLBjbl4AjS6Etw+n1yAn8WlwPZUGuMsr4x5xlzF2vqGL7Kb/9zaArZ3yG6OiXzB53s2UCy5i7J7u7PvVFQmDuJwzIL3gOrh0XHt5LROKD87B8wLF/sVvdBBjUtcXZOJtvRAs4W2NYXfdJDoCtwV3VvY6hRxdw88PCriqCfvJ55fXgXx5tCu74L4YJ/Q44UUYeKTF7LGxJcgokx880LRmfgRevz2tYE9HFlic8kwJLXKT/oDmfA2iaGN4MYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDMtMTlUMTA6NTA6NTkrMDA6MDDENyNFAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAxLTA4VDIwOjA4OjQ0KzAwOjAwgwIUFAAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAAyMzfIntMJAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADIzN1tvg1QAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTU0Njk3ODEyNLgaEf0AAAARdEVYdFRodW1iOjpTaXplADQyODdCvX9MRAAAAFp0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2RhdGEvd3d3cm9vdC93d3cuZWFzeWljb24ubmV0L2Nkbi1pbWcuZWFzeWljb24uY24vZmlsZXMvMTIxLzEyMTEwNTUucG5ndiBqkAAAAABJRU5ErkJggg=="},"oB+8":function(t,n,e){t.exports=e.p+"static/img/wechat.92c1a79.png"},tvR6:function(t,n){},txPn:function(t,n,e){var o=e("zNUS"),i=o.Random;o.mock("/getNews","get",function(){for(var t=[],n=0;n<6;n++){var e={id:n,time:i.date("yyyy-MM-dd"),title:i.ctitle(),poster:i.dataImage("336x280","mock的图片"),brief:i.csentence(20,50)};t.push(e)}return{newsList:t}}),o.mock("/getBrief","get",{brief:i.csentence(100,500)})},w0bi:function(t,n){}},[0]);