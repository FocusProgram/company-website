webpackJsonp([5],{"/+b2":function(t,a){},THSP:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i={created:function(){this.$emit("banner",!1)},data:function(){return{map:{center:{lng:116.936679,lat:36.679809},zoom:15,show:!0,dragging:!0}}},methods:{handler:function(t){var a=t.BMap,s=t.map;console.log(a,s),s.enableScrollWheelZoom(!0),s.addEventListener("click",function(t){console.log(t.point.lng,t.point.lat)})}}},e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"contact common-box"},[s("div",{staticClass:"w"},[s("div",{staticClass:"title"},[t._v("联系我们")]),t._v(" "),s("div",{staticClass:"map"},[s("baidu-map",{staticClass:"map",attrs:{center:t.map.center,zoom:t.map.zoom},on:{ready:t.handler}},[s("bm-navigation",{attrs:{anchor:"BMAP_ANCHOR_TOP_LEFT"}}),t._v(" "),s("bm-geolocation",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT",showAddressBar:!0,autoLocation:!0}}),t._v(" "),s("bm-marker",{attrs:{position:t.map.center,dragging:t.map.dragging,animation:"BMAP_ANIMATION_DROP"}},[s("bm-info-window",{staticStyle:{"font-weight":"bolder"},attrs:{show:t.map.show}},[t._v("济南汉兴自动化科技有限公司"),s("br"),s("br"),t._v("山东省济南市槐荫区兴福寺南路与滨州路交叉路口往西北约100米")])],1)],1),t._v(" "),s("img",{attrs:{src:"",alt:""}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"detail"},[s("span",[s("i",[t._v("公司地址：")]),t._v("山东省济南市槐荫区兴福寺南路与滨州路交叉路口往西北约100米(恒大翡翠华庭3期南侧约150米)")]),s("br"),s("br"),t._v(" "),s("span",[s("i",[t._v("咨询电话：")]),t._v("153-3530-0606")]),s("br"),s("br"),t._v(" "),s("span",[s("i",[t._v("邮箱地址：")]),t._v("15335300606@163.com")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"codes clearfix"},[a("div",{staticClass:"code fr"},[a("img",{attrs:{src:s("oB+8"),alt:""}}),this._v(" "),a("div",{staticClass:"code-title"},[this._v("客服微信")])]),this._v(" "),a("div",{staticClass:"code fr active"},[a("img",{attrs:{src:s("oB+8"),alt:""}}),this._v(" "),a("div",{staticClass:"code-title"},[this._v("微信公众平台")])])])}]};var n=s("VU/8")(i,e,!1,function(t){s("/+b2")},"data-v-11a472dc",null);a.default=n.exports}});