(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{143:function(t,e,o){var content=o(148);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(65).default)("25828ecb",content,!0,{sourceMap:!1})},144:function(t,e,o){var content=o(150);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(65).default)("265da9ba",content,!0,{sourceMap:!1})},145:function(t,e,o){"use strict";o(146)("link",function(t){return function(e){return t(this,"a","href",e)}})},146:function(t,e,o){var n=o(5),r=o(9),c=o(18),l=/"/g,f=function(t,e,o,n){var r=String(c(t)),f="<"+e;return""!==o&&(f+=" "+o+'="'+String(n).replace(l,"&quot;")+'"'),f+">"+r+"</"+e+">"};t.exports=function(t,e){var o={};o[t]=e(f),n(n.P+n.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",o)}},147:function(t,e,o){"use strict";var n=o(143);o.n(n).a},148:function(t,e,o){(t.exports=o(64)(!1)).push([t.i,".box[data-v-afc699f2]{position:relative}.title[data-v-afc699f2]{position:absolute;bottom:0;color:#fff;text-shadow:0 2px rgba(0,0,0,.58039)}h3[data-v-afc699f2]{font-size:1em;margin:.5em}.post-container[data-v-afc699f2]{position:relative;width:20vw}.img-fluid[data-v-afc699f2]{width:100%;height:auto}.img-box[data-v-afc699f2]{max-height:16.66667vh}",""])},149:function(t,e,o){"use strict";var n=o(144);o.n(n).a},150:function(t,e,o){(t.exports=o(64)(!1)).push([t.i,".container{display:flex;flex-wrap:wrap}.grid{position:relative}.item{display:block;position:absolute}html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}",""])},151:function(t,e,o){"use strict";o.r(e);o(50);var n,r=o(7),c=(o(145),{name:"StoryPost",props:{postData:{type:Object,required:!0,default:null}},data:function(){return{test:"TEST"}},computed:{},methods:{toggle:function(t){"play"===t?this.$refs.player.play():this.$refs.player.pause()}}}),l=(o(147),o(22)),f={components:{StoryPost:Object(l.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post-container",style:{backgroundColor:t.postData.secondary_color},on:{mouseover:function(e){return t.toggle("play")},mouseleave:function(e){return t.toggle("pause")}}},[o("div",{staticClass:"box"},[o("img",{staticClass:"img-fluid",attrs:{src:t.postData.featured_image}}),t._v(" "),o("div",{staticClass:"title"},[o("h3",{domProps:{innerHTML:t._s(t.postData.title)}})])]),t._v(" "),o("audio",{ref:"player",attrs:{controlshidden:"",preload:"none",src:t.postData.feature_audio,type:"audio/mp3"}})])},[],!1,null,"afc699f2",null).exports},data:function(){return{postsDataRaw:[],grid:null}},computed:{postsData:function(){return this.postsDataRaw.map(function(t){return{featured_image:t.episode_featured_image,feature_audio:t.acf.featured_audio,secondary_color:t.acf.secondary_color,primary_color:t.acf.primary_color,content:t.content,date:t.date,link:t.link,id:t.id,title:t.title.rendered}})}},mounted:function(){var t=this;this.fetchData(31).then(function(){t.startMuuri()})},methods:{fetchData:(n=Object(r.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yr.media/wp-json/wp/v2/posts?outlets=94&per_page=".concat(e)).then(function(t){return t.json()});case 2:this.postsDataRaw=t.sent;case 3:case"end":return t.stop()}},t,this)})),function(t){return n.apply(this,arguments)}),startMuuri:function(){this.grid=new Muuri(".grid",{layout:{fillGaps:!0,horizontal:!1,alignRight:!1,alignBottom:!1,rounding:!1},dragEnabled:!1,showDuration:0,hideDuration:0,layoutDuration:0})}}},d=(o(149),Object(l.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid"},this._l(this.postsData,function(t){return e("div",{key:t.id,staticClass:"item"},[e("a",{attrs:{href:t.link,target:"_blanket"}},[e("StoryPost",{attrs:{"post-data":t}})],1)])}),0)},[],!1,null,null,null));e.default=d.exports}}]);