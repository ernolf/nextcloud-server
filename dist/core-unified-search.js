/*! For license information please see core-unified-search.js.LICENSE.txt */
!function(){"use strict";var e,r={23767:function(e,r,i){var a=i(17499),o=i(45994),s=i(31352),c=i(20144),u=i(20296),l=i.n(u),d=i(78595),f=i(64024),h=i(45400),A=i.n(h),p=i(12945),m=i.n(p),g=i(93455),C=i.n(g),v=i(85750),b=i.n(v),_=i(93234);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}var x=i(72875),w={name:"SearchResult",components:{NcHighlight:i.n(x)()},props:{thumbnailUrl:{type:String,default:null},title:{type:String,required:!0},subline:{type:String,default:null},resourceUrl:{type:String,default:null},icon:{type:String,default:""},rounded:{type:Boolean,default:!1},query:{type:String,default:""},focused:{type:Boolean,default:!1}},data:function(){return{hasValidThumbnail:this.thumbnailUrl&&""!==this.thumbnailUrl.trim(),loaded:!1}},computed:{isIconUrl:function(){if(this.icon.startsWith("/"))return!0;try{new URL(this.icon)}catch(t){return!1}return!0}},watch:{thumbnailUrl:function(){this.hasValidThumbnail=this.thumbnailUrl&&""!==this.thumbnailUrl.trim(),this.loaded=!1}},methods:{reEmitEvent:function(t){this.$emit(t.type,t)},onError:function(){this.hasValidThumbnail=!1},onLoad:function(){this.loaded=!0}}},k=i(93379),S=i.n(k),D=i(7795),$=i.n(D),B=i(90569),I=i.n(B),R=i(3565),q=i.n(R),E=i(19216),U=i.n(E),L=i(44589),P=i.n(L),j=i(20427),O={};O.styleTagTransform=P(),O.setAttributes=q(),O.insert=I().bind(null,"head"),O.domAPI=$(),O.insertStyleElement=U(),S()(j.Z,O),j.Z&&j.Z.locals&&j.Z.locals;var F=i(51900),z=(0,F.Z)(w,(function(){var t,e,n,r=this,i=r._self._c;return i("a",{staticClass:"unified-search__result",class:{"unified-search__result--focused":r.focused},attrs:{href:r.resourceUrl||"#"},on:{click:r.reEmitEvent,focus:r.reEmitEvent}},[i("div",{staticClass:"unified-search__result-icon",class:(t={"unified-search__result-icon--rounded":r.rounded,"unified-search__result-icon--no-preview":!r.hasValidThumbnail&&!r.loaded,"unified-search__result-icon--with-thumbnail":r.hasValidThumbnail&&r.loaded},e=r.icon,n=!r.loaded&&!r.isIconUrl,(e=function(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===y(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t),style:{backgroundImage:r.isIconUrl?"url(".concat(r.icon,")"):""}},[r.hasValidThumbnail?i("img",{directives:[{name:"show",rawName:"v-show",value:r.loaded,expression:"loaded"}],attrs:{src:r.thumbnailUrl,alt:""},on:{error:r.onError,load:r.onLoad}}):r._e()]),r._v(" "),i("span",{staticClass:"unified-search__result-content"},[i("span",{staticClass:"unified-search__result-line-one",attrs:{title:r.title}},[i("NcHighlight",{attrs:{text:r.title,search:r.query}})],1),r._v(" "),r.subline?i("span",{staticClass:"unified-search__result-line-two",attrs:{title:r.subline}},[r._v(r._s(r.subline))]):r._e()])])}),[],!1,null,"0ec7b18f",null).exports,N={name:"SearchResultPlaceholders",data:function(){return{light:null,dark:null}},mounted:function(){var t=getComputedStyle(document.documentElement);this.dark=t.getPropertyValue("--color-placeholder-dark"),this.light=t.getPropertyValue("--color-placeholder-light")},methods:{randWidth:function(){return Math.floor(20*Math.random())+30}}},T=i(78033),M={};M.styleTagTransform=P(),M.setAttributes=q(),M.insert=I().bind(null,"head"),M.domAPI=$(),M.insertStyleElement=U(),S()(T.Z,M),T.Z&&T.Z.locals&&T.Z.locals;var G=(0,F.Z)(N,(function(){var t=this,e=t._self._c;return e("ul",[e("svg",{staticClass:"unified-search__result-placeholder-gradient"},[e("defs",[e("linearGradient",{attrs:{id:"unified-search__result-placeholder-gradient"}},[e("stop",{attrs:{offset:"0%","stop-color":t.light}},[e("animate",{attrs:{attributeName:"stop-color",values:"".concat(t.light,"; ").concat(t.light,"; ").concat(t.dark,"; ").concat(t.dark,"; ").concat(t.light),dur:"2s",repeatCount:"indefinite"}})]),t._v(" "),e("stop",{attrs:{offset:"100%","stop-color":t.dark}},[e("animate",{attrs:{attributeName:"stop-color",values:"".concat(t.dark,"; ").concat(t.light,"; ").concat(t.light,"; ").concat(t.dark,"; ").concat(t.dark),dur:"2s",repeatCount:"indefinite"}})])],1)],1)]),t._v(" "),t._l([1,2,3],(function(n){return e("li",{key:n},[e("svg",{staticClass:"unified-search__result-placeholder",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"url(#unified-search__result-placeholder-gradient)"}},[e("rect",{staticClass:"unified-search__result-placeholder-icon"}),t._v(" "),e("rect",{staticClass:"unified-search__result-placeholder-line-one"}),t._v(" "),e("rect",{staticClass:"unified-search__result-placeholder-line-two",style:{width:"calc(".concat(t.randWidth(),"%)")}})])])}))],2)}),[],!1,null,"9ed03c40",null).exports,Z=i(79753),W=i(79954),Q=i(4820),H=i(25108);function V(t,e,n,r,i,a,o){try{var s=t[a](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}function Y(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(t){V(a,r,i,o,s,"next",t)}function s(t){V(a,r,i,o,s,"throw",t)}o(void 0)}))}}var K=(0,W.j)("unified-search","limit-default"),X=(0,W.j)("unified-search","min-search-length",1),J=(0,W.j)("unified-search","live-search",!0),tt=/(^|\s)in:([a-z_-]+)/gi,et=/(^|\s)-in:([a-z_-]+)/gi;function nt(){return rt.apply(this,arguments)}function rt(){return(rt=Y(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Q.default.get((0,Z.generateOcsUrl)("search/providers"),{params:{from:window.location.pathname.replace("/index.php","")+window.location.search}});case 3:if(e=t.sent,!("ocs"in(n=e.data)&&"data"in n.ocs&&Array.isArray(n.ocs.data)&&n.ocs.data.length>0)){t.next=7;break}return t.abrupt("return",n.ocs.data);case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),H.error(t.t0);case 12:return t.abrupt("return",[]);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function it(t){var e=t.type,n=t.query,r=t.cursor,i=Q.default.CancelToken.source(),a=function(){var t=Y(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Q.default.get((0,Z.generateOcsUrl)("search/providers/{type}/search",{type:e}),{cancelToken:i.token,params:{term:n,cursor:r,from:window.location.pathname.replace("/index.php","")+window.location.search}}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{request:a,cancel:i.cancel}}function at(t){return function(t){if(Array.isArray(t))return ct(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||st(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ot(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=st(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){s=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw a}}}}function st(t,e){if(t){if("string"==typeof t)return ct(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ct(t,e):void 0}}function ct(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ut(t,e,n,r,i,a,o){try{var s=t[a](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}function lt(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(t){ut(a,r,i,o,s,"next",t)}function s(t){ut(a,r,i,o,s,"throw",t)}o(void 0)}))}}var dt={name:"UnifiedSearch",components:{Magnify:_.default,NcActionButton:A(),NcActions:m(),NcEmptyContent:C(),NcHeaderMenu:b(),SearchResult:z,SearchResultPlaceholders:G},data:function(){return{types:[],cursors:{},limits:{},loading:{},reached:{},requests:[],results:{},query:"",focused:null,triggered:!1,defaultLimit:K,minSearchLength:X,enableLiveSearch:J,open:!1}},computed:{typesIDs:function(){return this.types.map((function(t){return t.id}))},typesNames:function(){return this.types.map((function(t){return t.name}))},typesMap:function(){return this.types.reduce((function(t,e){return t[e.id]=e.name,t}),{})},ariaLabel:function(){return t("core","Search")},hasResults:function(){return 0!==Object.keys(this.results).length},orderedResults:function(){var t=this;return this.typesIDs.filter((function(e){return e in t.results})).map((function(e){return{type:e,list:t.results[e]}}))},availableFilters:function(){return Object.keys(this.results)},usedFiltersIn:function(){for(var t,e=[];null!==(t=tt.exec(this.query));)e.push(t[2]);return e},usedFiltersNot:function(){for(var t,e=[];null!==(t=et.exec(this.query));)e.push(t[2]);return e},validQueryTitle:function(){return this.triggered?t("core","No results for {query}",{query:this.query}):t("core","Press enter to start searching")},shortQueryDescription:function(){return this.isShortQuery?n("core","Please enter {minSearchLength} character or more to search","Please enter {minSearchLength} characters  or more to search",this.minSearchLength,{minSearchLength:this.minSearchLength}):""},isShortQuery:function(){return this.query&&this.query.trim().length<X},isValidQuery:function(){return this.query&&""!==this.query.trim()&&!this.isShortQuery},isDoneSearching:function(){return Object.values(this.reached).every((function(t){return!1===t}))},isLoading:function(){return Object.values(this.loading).some((function(t){return!0===t}))}},created:function(){var t=this;return lt(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,d.Ld)("files:navigation:changed",t.resetForm),e.next=3,nt();case 3:t.types=e.sent,t.logger.debug("Unified Search initialized with the following providers",t.types);case 5:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){(0,d.r1)("files:navigation:changed",this.resetForm)},mounted:function(){var t=this;OCP.Accessibility.disableKeyboardShortcuts()||document.addEventListener("keydown",(function(e){e.ctrlKey&&"f"===e.key&&!t.open&&(e.preventDefault(),t.open=!0),t.open&&("ArrowDown"===e.key&&t.focusNext(e),"ArrowUp"===e.key&&t.focusPrev(e))}))},methods:{onOpen:function(){var t=this;return lt(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,nt();case 2:t.types=e.sent;case 3:case"end":return e.stop()}}),e)})))()},onClose:function(){(0,d.j8)("nextcloud:unified-search.close")},resetForm:function(){this.$el.querySelector('form[role="search"]').reset()},onReset:function(){(0,d.j8)("nextcloud:unified-search.reset"),this.logger.debug("Search reset"),this.query="",this.resetState(),this.focusInput()},resetState:function(){var t=this;return lt(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.cursors={},t.limits={},t.reached={},t.results={},t.focused=null,t.triggered=!1,e.next=8,t.cancelPendingRequests();case 8:case"end":return e.stop()}}),e)})))()},cancelPendingRequests:function(){var t=this;return lt(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.requests.slice(0),t.requests=[],e.next=4,Promise.all(n.map((function(t){return t()})));case 4:case"end":return e.stop()}}),e)})))()},focusInput:function(){var t=this;this.$nextTick((function(){t.$refs.input.focus(),t.$refs.input.select()}))},onInputEnter:function(){this.hasResults?this.getResultsList()[0].click():this.onInput()},onInput:function(){var t=this;return lt(regeneratorRuntime.mark((function e(){var n,r,i,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,d.j8)("nextcloud:unified-search.search",{query:t.query}),""!==t.query.trim()&&!t.isShortQuery){e.next=5;break}n=ot(t.typesIDs);try{for(n.s();!(r=n.n()).done;)i=r.value,t.$delete(t.results,i)}catch(t){n.e(t)}finally{n.f()}return e.abrupt("return");case 5:return a=t.typesIDs,o=t.query,t.usedFiltersNot.length>0&&(a=t.typesIDs.filter((function(e){return-1===t.usedFiltersNot.indexOf(e)}))),t.usedFiltersIn.length>0&&(a=t.typesIDs.filter((function(e){return t.usedFiltersIn.indexOf(e)>-1}))),o=o.replace(tt,"").replace(et,""),e.next=12,t.resetState();case 12:if(t.triggered=!0,a.length){e.next=16;break}return t.logger.error("No types to search in"),e.abrupt("return");case 16:t.$set(t.loading,"all",!0),t.logger.debug("Searching ".concat(o," in"),a),Promise.all(a.map(function(){var e=lt(regeneratorRuntime.mark((function e(n){var r,i,a,s,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=it({type:n,query:o}),i=r.request,a=r.cancel,t.requests.push(a),e.next=5,i();case 5:return s=e.sent,(c=s.data).ocs.data.entries.length>0?t.$set(t.results,n,c.ocs.data.entries):t.$delete(t.results,n),c.ocs.data.cursor?t.$set(t.cursors,n,c.ocs.data.cursor):c.ocs.data.isPaginated||t.$set(t.limits,n,t.defaultLimit),c.ocs.data.entries.length<t.defaultLimit&&t.$set(t.reached,n,!0),null===t.focused&&(t.focused=0),e.abrupt("return",1);case 14:if(e.prev=14,e.t0=e.catch(0),t.$delete(t.results,n),!e.t0.response||!e.t0.response.status){e.next=21;break}return t.logger.error("Error searching for ".concat(t.typesMap[n]),e.t0),(0,f.x2)(t.t("core","An error occurred while searching for {type}",{type:t.typesMap[n]})),e.abrupt("return",0);case 21:return e.abrupt("return",2);case 22:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}())).then((function(e){e.some((function(t){return 2===t}))||(t.loading={})}));case 19:case"end":return e.stop()}}),e)})))()},onInputDebounced:J?l()((function(t){this.onInput(t)}),500):function(){this.triggered=!1},loadMore:function(t){var e=this;return lt(regeneratorRuntime.mark((function n(){var r,i,a,o,s,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.loading[t]){n.next=2;break}return n.abrupt("return");case 2:if(!e.cursors[t]){n.next=14;break}return r=it({type:t,query:e.query,cursor:e.cursors[t]}),i=r.request,a=r.cancel,e.requests.push(a),n.next=7,i();case 7:o=n.sent,(s=o.data).ocs.data.cursor&&e.$set(e.cursors,t,s.ocs.data.cursor),s.ocs.data.entries.length>0&&(c=e.results[t]).push.apply(c,at(s.ocs.data.entries)),s.ocs.data.entries.length<e.defaultLimit&&e.$set(e.reached,t,!0),n.next=15;break;case 14:e.limits[t]&&e.limits[t]>=0&&(e.limits[t]+=e.defaultLimit,e.limits[t]>=e.results[t].length&&e.$set(e.reached,t,!0));case 15:null!==e.focused&&e.$nextTick((function(){e.focusIndex(e.focused)}));case 16:case"end":return n.stop()}}),n)})))()},limitIfAny:function(t,e){return e in this.limits?t.slice(0,this.limits[e]):t},getResultsList:function(){return this.$el.querySelectorAll(".unified-search__results .unified-search__result")},focusFirst:function(t){var e=this.getResultsList();e&&e.length>0&&(t&&t.preventDefault(),this.focused=0,this.focusIndex(this.focused))},focusNext:function(t){if(null!==this.focused){var e=this.getResultsList();e&&e.length>0&&this.focused+1<e.length&&(t.preventDefault(),this.focused++,this.focusIndex(this.focused))}else this.focusFirst(t)},focusPrev:function(t){if(null!==this.focused){var e=this.getResultsList();e&&e.length>0&&this.focused>0&&(t.preventDefault(),this.focused--,this.focusIndex(this.focused))}else this.focusFirst(t)},focusIndex:function(t){var e=this.getResultsList();e&&e[t]&&e[t].focus()},setFocusedIndex:function(t){var e=t.target,n=at(this.getResultsList()).findIndex((function(t){return t===e}));n>-1&&(this.focused=n)},onClickFilter:function(t){this.query="".concat(this.query," ").concat(t).replace(/ {2}/g," ").trim(),this.onInput()}}},ft=dt,ht=i(31395),At={};At.styleTagTransform=P(),At.setAttributes=q(),At.insert=I().bind(null,"head"),At.domAPI=$(),At.insertStyleElement=U(),S()(ht.Z,At),ht.Z&&ht.Z.locals&&ht.Z.locals;var pt=(0,F.Z)(ft,(function(){var t=this,e=t._self._c;return e("NcHeaderMenu",{staticClass:"unified-search",attrs:{id:"unified-search","exclude-click-outside-classes":"popover",open:t.open,"aria-label":t.ariaLabel},on:{"update:open":function(e){t.open=e},open:t.onOpen,close:t.onClose},scopedSlots:t._u([{key:"trigger",fn:function(){return[e("Magnify",{staticClass:"unified-search__trigger",attrs:{size:22}})]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"unified-search__input-wrapper"},[e("label",{attrs:{for:"unified-search__input"}},[t._v(t._s(t.ariaLabel))]),t._v(" "),e("div",{staticClass:"unified-search__input-row"},[e("form",{staticClass:"unified-search__form",class:{"icon-loading-small":t.isLoading},attrs:{role:"search"},on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.onInputEnter.apply(null,arguments)},reset:function(e){return e.preventDefault(),e.stopPropagation(),t.onReset.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"input",staticClass:"unified-search__form-input",class:{"unified-search__form-input--with-reset":!!t.query},attrs:{id:"unified-search__input",type:"search",placeholder:t.t("core","Search {types} …",{types:t.typesNames.join(", ")}),"aria-describedby":"unified-search-desc"},domProps:{value:t.query},on:{input:[function(e){e.target.composing||(t.query=e.target.value)},t.onInputDebounced],keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),e.stopPropagation(),t.onInputEnter.apply(null,arguments))}}}),t._v(" "),e("p",{staticClass:"hidden-visually",attrs:{id:"unified-search-desc"}},[t._v("\n\t\t\t\t\t"+t._s(t.t("core","Search starts once you start typing and results may be reached with the arrow keys"))+"\n\t\t\t\t")]),t._v(" "),t.query&&!t.isLoading?e("input",{staticClass:"unified-search__form-reset icon-close",attrs:{type:"reset","aria-label":t.t("core","Reset search"),value:""}}):t._e(),t._v(" "),!t.query||t.isLoading||t.enableLiveSearch?t._e():e("input",{staticClass:"unified-search__form-submit icon-confirm",attrs:{type:"submit","aria-label":t.t("core","Start search"),value:""}})]),t._v(" "),t.availableFilters.length>1?e("NcActions",{staticClass:"unified-search__filters",attrs:{placement:"bottom",container:".unified-search__input-wrapper"}},t._l(t.availableFilters,(function(n){return e("NcActionButton",{key:n,attrs:{icon:"icon-filter",title:t.t("core","Search for {name} only",{name:t.typesMap[n]})},on:{click:function(e){return e.stopPropagation(),t.onClickFilter("in:".concat(n))}}},[t._v("\n\t\t\t\t\t"+t._s("in:".concat(n))+"\n\t\t\t\t")])})),1):t._e()],1)]),t._v(" "),t.hasResults?t._l(t.orderedResults,(function(n,r){var i=n.list,a=n.type;return e("ul",{key:a,staticClass:"unified-search__results",class:"unified-search__results-".concat(a),attrs:{"aria-label":t.typesMap[a]}},[e("h2",{staticClass:"unified-search__results-header"},[t._v("\n\t\t\t\t"+t._s(t.typesMap[a])+"\n\t\t\t")]),t._v(" "),t._l(t.limitIfAny(i,a),(function(n,i){return e("li",{key:n.resourceUrl},[e("SearchResult",t._b({attrs:{query:t.query,focused:0===t.focused&&0===r&&0===i},on:{focus:t.setFocusedIndex}},"SearchResult",n,!1))],1)})),t._v(" "),e("li",[t.reached[a]?t._e():e("SearchResult",{staticClass:"unified-search__result-more",attrs:{title:t.loading[a]?t.t("core","Loading more results …"):t.t("core","Load more results"),"icon-class":t.loading[a]?"icon-loading-small":""},on:{click:function(e){return e.stopPropagation(),t.loadMore(a)},focus:t.setFocusedIndex}})],1)],2)})):[t.isLoading?e("SearchResultPlaceholders"):t.isValidQuery?e("NcEmptyContent",{attrs:{title:t.validQueryTitle},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Magnify")]},proxy:!0}],null,!1,931131664)}):!t.isLoading||t.isShortQuery?e("NcEmptyContent",{attrs:{title:t.t("core","Start typing to search"),description:t.shortQueryDescription},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Magnify")]},proxy:!0}],null,!1,931131664)}):t._e()]],2)}),[],!1,null,"e6819cee",null),mt=pt.exports;i.nc=btoa((0,o.IH)());var gt=(0,a.IY)().setApp("unified-search").detectUser().build();c.default.mixin({data:function(){return{logger:gt}},methods:{t:s.Iu,n:s.uN}}),new c.default({el:"#unified-search",name:"UnifiedSearchRoot",render:function(t){return t(mt)}})},20427:function(t,e,n){var r=n(87537),i=n.n(r),a=n(23645),o=n.n(a)()(i());o.push([t.id,".unified-search__result[data-v-0ec7b18f]{display:flex;align-items:center;height:44px;padding:10px;border:2px solid rgba(0,0,0,0);border-radius:var(--border-radius-large) !important}.unified-search__result--focused[data-v-0ec7b18f]{background-color:var(--color-background-hover)}.unified-search__result[data-v-0ec7b18f]:active,.unified-search__result[data-v-0ec7b18f]:hover,.unified-search__result[data-v-0ec7b18f]:focus{background-color:var(--color-background-hover);border:2px solid var(--color-border-maxcontrast)}.unified-search__result *[data-v-0ec7b18f]{cursor:pointer}.unified-search__result-icon[data-v-0ec7b18f]{overflow:hidden;width:44px;height:44px;border-radius:var(--border-radius);background-repeat:no-repeat;background-position:center center;background-size:32px}.unified-search__result-icon--rounded[data-v-0ec7b18f]{border-radius:22px}.unified-search__result-icon--no-preview[data-v-0ec7b18f]{background-size:32px}.unified-search__result-icon--with-thumbnail[data-v-0ec7b18f]{background-size:cover}.unified-search__result-icon--with-thumbnail[data-v-0ec7b18f]:not(.unified-search__result-icon--rounded){max-width:42px;max-height:42px;border:1px solid var(--color-border)}.unified-search__result-icon img[data-v-0ec7b18f]{width:100%;height:100%;object-fit:cover;object-position:center}.unified-search__result-icon[data-v-0ec7b18f],.unified-search__result-actions[data-v-0ec7b18f]{flex:0 0 44px}.unified-search__result-content[data-v-0ec7b18f]{display:flex;align-items:center;flex:1 1 100%;flex-wrap:wrap;min-width:0;padding-left:10px}.unified-search__result-line-one[data-v-0ec7b18f],.unified-search__result-line-two[data-v-0ec7b18f]{overflow:hidden;flex:1 1 100%;margin:1px 0;white-space:nowrap;text-overflow:ellipsis;color:inherit;font-size:inherit}.unified-search__result-line-two[data-v-0ec7b18f]{opacity:.7;font-size:var(--default-font-size)}","",{version:3,sources:["webpack://./core/src/components/UnifiedSearch/SearchResult.vue"],names:[],mappings:"AAMA,yCACC,YAAA,CACA,kBAAA,CACA,WANgB,CAOhB,YANQ,CAOR,8BAAA,CACA,mDAAA,CAEA,kDACC,8CAAA,CAGD,8IAGC,8CAAA,CACA,gDAAA,CAGD,2CACC,cAAA,CAGD,8CACC,eAAA,CACA,UA5Be,CA6Bf,WA7Be,CA8Bf,kCAAA,CACA,2BAAA,CACA,iCAAA,CACA,oBAAA,CACA,uDACC,kBAAA,CAED,0DACC,oBAAA,CAED,8DACC,qBAAA,CAED,yGAEC,cAAA,CACA,eAAA,CACA,oCAAA,CAGD,kDAEC,UAAA,CACA,WAAA,CAEA,gBAAA,CACA,sBAAA,CAIF,+FAEC,aAAA,CAGD,iDACC,YAAA,CACA,kBAAA,CACA,aAAA,CACA,cAAA,CAEA,WAAA,CACA,iBAvEO,CA0ER,oGAEC,eAAA,CACA,aAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAEA,aAAA,CACA,iBAAA,CAED,kDACC,UAAA,CACA,kCAAA",sourcesContent:['\n@use "sass:math";\n\n$clickable-area: 44px;\n$margin: 10px;\n\n.unified-search__result {\n\tdisplay: flex;\n\talign-items: center;\n\theight: $clickable-area;\n\tpadding: $margin;\n\tborder: 2px solid transparent;\n\tborder-radius: var(--border-radius-large) !important;\n\n\t&--focused {\n\t\tbackground-color: var(--color-background-hover);\n\t}\n\n\t&:active,\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: var(--color-background-hover);\n\t\tborder: 2px solid var(--color-border-maxcontrast);\n\t}\n\n\t* {\n\t\tcursor: pointer;\n\t}\n\n\t&-icon {\n\t\toverflow: hidden;\n\t\twidth: $clickable-area;\n\t\theight: $clickable-area;\n\t\tborder-radius: var(--border-radius);\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: center center;\n\t\tbackground-size: 32px;\n\t\t&--rounded {\n\t\t\tborder-radius: math.div($clickable-area, 2);\n\t\t}\n\t\t&--no-preview {\n\t\t\tbackground-size: 32px;\n\t\t}\n\t\t&--with-thumbnail {\n\t\t\tbackground-size: cover;\n\t\t}\n\t\t&--with-thumbnail:not(&--rounded) {\n\t\t\t// compensate for border\n\t\t\tmax-width: $clickable-area - 2px;\n\t\t\tmax-height: $clickable-area - 2px;\n\t\t\tborder: 1px solid var(--color-border);\n\t\t}\n\n\t\timg {\n\t\t\t// Make sure to keep ratio\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\n\t\t\tobject-fit: cover;\n\t\t\tobject-position: center;\n\t\t}\n\t}\n\n\t&-icon,\n\t&-actions {\n\t\tflex: 0 0 $clickable-area;\n\t}\n\n\t&-content {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex: 1 1 100%;\n\t\tflex-wrap: wrap;\n\t\t// Set to minimum and gro from it\n\t\tmin-width: 0;\n\t\tpadding-left: $margin;\n\t}\n\n\t&-line-one,\n\t&-line-two {\n\t\toverflow: hidden;\n\t\tflex: 1 1 100%;\n\t\tmargin: 1px 0;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\t// Use the same color as the `a`\n\t\tcolor: inherit;\n\t\tfont-size: inherit;\n\t}\n\t&-line-two {\n\t\topacity: .7;\n\t\tfont-size: var(--default-font-size);\n\t}\n}\n\n'],sourceRoot:""}]),e.Z=o},78033:function(t,e,n){var r=n(87537),i=n.n(r),a=n(23645),o=n.n(a)()(i());o.push([t.id,".unified-search__result-placeholder-gradient[data-v-9ed03c40]{position:fixed;height:0;width:0;z-index:-1}.unified-search__result-placeholder[data-v-9ed03c40]{width:calc(100% - 2 * 10px);height:44px;margin:10px}.unified-search__result-placeholder-icon[data-v-9ed03c40]{width:44px;height:44px;rx:var(--border-radius);ry:var(--border-radius)}.unified-search__result-placeholder-line-one[data-v-9ed03c40],.unified-search__result-placeholder-line-two[data-v-9ed03c40]{width:calc(100% - 54px);height:1em;x:54px}.unified-search__result-placeholder-line-one[data-v-9ed03c40]{y:5px}.unified-search__result-placeholder-line-two[data-v-9ed03c40]{y:25px}","",{version:3,sources:["webpack://./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue"],names:[],mappings:"AAIA,8DACC,cAAA,CACA,QAAA,CACA,OAAA,CACA,UAAA,CAGD,qDACC,2BAAA,CACA,WAZgB,CAahB,WAZQ,CAcR,0DACC,UAhBe,CAiBf,WAjBe,CAkBf,uBAAA,CACA,uBAAA,CAGD,4HAEC,uBAAA,CACA,UAAA,CACA,MAAA,CAGD,8DACC,KAAA,CAGD,8DACC,MAAA",sourcesContent:["\n$clickable-area: 44px;\n$margin: 10px;\n\n.unified-search__result-placeholder-gradient {\n\tposition: fixed;\n\theight: 0;\n\twidth: 0;\n\tz-index: -1;\n}\n\n.unified-search__result-placeholder {\n\twidth: calc(100% - 2 * #{$margin});\n\theight: $clickable-area;\n\tmargin: $margin;\n\n\t&-icon {\n\t\twidth: $clickable-area;\n\t\theight: $clickable-area;\n\t\trx: var(--border-radius);\n\t\try: var(--border-radius);\n\t}\n\n\t&-line-one,\n\t&-line-two {\n\t\twidth: calc(100% - #{$margin + $clickable-area});\n\t\theight: 1em;\n\t\tx: $margin + $clickable-area;\n\t}\n\n\t&-line-one {\n\t\ty: 5px;\n\t}\n\n\t&-line-two {\n\t\ty: 25px;\n\t}\n}\n\n"],sourceRoot:""}]),e.Z=o},31395:function(t,e,n){var r=n(87537),i=n.n(r),a=n(23645),o=n.n(a)()(i());o.push([t.id,".unified-search__input-wrapper[data-v-e6819cee]{position:sticky;z-index:2;top:0;display:inline-flex;flex-direction:column;align-items:center;width:100%;background-color:var(--color-main-background)}.unified-search__input-wrapper label[for=unified-search__input][data-v-e6819cee]{align-self:flex-start;font-weight:bold;font-size:19px;margin-left:13px}.unified-search__form-input[data-v-e6819cee]{margin:0 !important}.unified-search__input-row[data-v-e6819cee]{display:flex;width:100%;align-items:center}.unified-search__filters[data-v-e6819cee]{margin:10px 0 10px 5px}.unified-search__filters ul[data-v-e6819cee]{display:inline-flex;justify-content:space-between}.unified-search__form[data-v-e6819cee]{position:relative;width:100%;margin:10px 0}.unified-search__form[data-v-e6819cee]::after{right:6px;left:auto}.unified-search__form-input[data-v-e6819cee],.unified-search__form-reset[data-v-e6819cee]{margin:3px}.unified-search__form-input[data-v-e6819cee]{width:100%;height:34px;padding:6px}.unified-search__form-input[data-v-e6819cee],.unified-search__form-input[placeholder][data-v-e6819cee],.unified-search__form-input[data-v-e6819cee]::placeholder{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.unified-search__form-input[data-v-e6819cee]::-webkit-search-decoration,.unified-search__form-input[data-v-e6819cee]::-webkit-search-cancel-button,.unified-search__form-input[data-v-e6819cee]::-webkit-search-results-button,.unified-search__form-input[data-v-e6819cee]::-webkit-search-results-decoration{-webkit-appearance:none}.icon-loading-small .unified-search__form-input[data-v-e6819cee],.unified-search__form-input--with-reset[data-v-e6819cee]{padding-right:34px}.unified-search__form-reset[data-v-e6819cee],.unified-search__form-submit[data-v-e6819cee]{position:absolute;top:0;right:4px;width:28px;height:28px;min-height:30px;padding:0;opacity:.5;border:none;background-color:rgba(0,0,0,0);margin-right:0}.unified-search__form-reset[data-v-e6819cee]:hover,.unified-search__form-reset[data-v-e6819cee]:focus,.unified-search__form-reset[data-v-e6819cee]:active,.unified-search__form-submit[data-v-e6819cee]:hover,.unified-search__form-submit[data-v-e6819cee]:focus,.unified-search__form-submit[data-v-e6819cee]:active{opacity:1}.unified-search__form-submit[data-v-e6819cee]{right:28px}.unified-search__results[data-v-e6819cee]{display:flex;flex-direction:column;gap:4px}.unified-search__results-header[data-v-e6819cee]{display:block;margin:10px;margin-bottom:6px;margin-left:13px;color:var(--color-primary-element);font-size:19px;font-weight:bold}.unified-search .unified-search__result-more[data-v-e6819cee]{color:var(--color-text-maxcontrast)}.unified-search .empty-content[data-v-e6819cee]{margin:10vh 0}.unified-search .empty-content[data-v-e6819cee] .empty-content__title{font-weight:normal;font-size:var(--default-font-size);padding:0 15px;text-align:center}","",{version:3,sources:["webpack://./core/src/views/UnifiedSearch.vue"],names:[],mappings:"AAQC,gDACC,eAAA,CAEA,SAAA,CACA,KAAA,CACA,mBAAA,CACA,qBAAA,CACA,kBAAA,CACA,UAAA,CACA,6CAAA,CAEA,iFACC,qBAAA,CACA,gBAAA,CACA,cAAA,CACA,gBAAA,CAIF,6CACC,mBAAA,CAGD,4CACC,YAAA,CACA,UAAA,CACA,kBAAA,CAGD,0CACC,sBAAA,CACA,6CACC,mBAAA,CACA,6BAAA,CAIF,uCACC,iBAAA,CACA,UAAA,CACA,aAAA,CAGA,8CACC,SA/Ca,CAgDb,SAAA,CAGD,0FAEC,UAAA,CAGD,6CACC,UAAA,CACA,WA3DY,CA4DZ,WA3Da,CA6Db,iKAGC,eAAA,CACA,kBAAA,CACA,sBAAA,CAID,+SAIC,uBAAA,CAID,0HAEC,kBAjFW,CAqFb,2FACC,iBAAA,CACA,KAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CACA,8BAAA,CACA,cAAA,CAEA,uTAGC,SAAA,CAIF,8CACC,UAAA,CAIF,0CAUC,YAAA,CACA,qBAAA,CACA,OAAA,CAXA,iDACC,aAAA,CACA,WAlHM,CAmHN,iBAAA,CACA,gBAAA,CACA,kCAAA,CACA,cAAA,CACA,gBAAA,CAOF,8DACC,mCAAA,CAGD,gDACC,aAAA,CAEA,sEACC,kBAAA,CACS,kCAAA,CACT,cAAA,CACA,iBAAA",sourcesContent:['\n@use "sass:math";\n\n$margin: 10px;\n$input-height: 34px;\n$input-padding: 6px;\n\n.unified-search {\n\t&__input-wrapper {\n\t\tposition: sticky;\n\t\t// above search results\n\t\tz-index: 2;\n\t\ttop: 0;\n\t\tdisplay: inline-flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\twidth: 100%;\n\t\tbackground-color: var(--color-main-background);\n\n\t\tlabel[for="unified-search__input"] {\n\t\t\talign-self: flex-start;\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 19px;\n\t\t\tmargin-left: 13px;\n\t\t}\n\t}\n\n\t&__form-input {\n\t\tmargin: 0 !important;\n\t}\n\n\t&__input-row {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\talign-items: center;\n\t}\n\n\t&__filters {\n\t\tmargin: $margin 0 $margin math.div($margin, 2);\n\t\tul {\n\t\t\tdisplay: inline-flex;\n\t\t\tjustify-content: space-between;\n\t\t}\n\t}\n\n\t&__form {\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\tmargin: $margin 0;\n\n\t\t// Loading spinner\n\t\t&::after {\n\t\t\tright: $input-padding;\n\t\t\tleft: auto;\n\t\t}\n\n\t\t&-input,\n\t\t&-reset {\n\t\t\tmargin: math.div($input-padding, 2);\n\t\t}\n\n\t\t&-input {\n\t\t\twidth: 100%;\n\t\t\theight: $input-height;\n\t\t\tpadding: $input-padding;\n\n\t\t\t&,\n\t\t\t&[placeholder],\n\t\t\t&::placeholder {\n\t\t\t\toverflow: hidden;\n\t\t\t\twhite-space: nowrap;\n\t\t\t\ttext-overflow: ellipsis;\n\t\t\t}\n\n\t\t\t// Hide webkit clear search\n\t\t\t&::-webkit-search-decoration,\n\t\t\t&::-webkit-search-cancel-button,\n\t\t\t&::-webkit-search-results-button,\n\t\t\t&::-webkit-search-results-decoration {\n\t\t\t\t-webkit-appearance: none;\n\t\t\t}\n\n\t\t\t// Ellipsis earlier if reset button is here\n\t\t\t.icon-loading-small &,\n\t\t\t&--with-reset {\n\t\t\t\tpadding-right: $input-height;\n\t\t\t}\n\t\t}\n\n\t\t&-reset, &-submit {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tright: 4px;\n\t\t\twidth: $input-height - $input-padding;\n\t\t\theight: $input-height - $input-padding;\n\t\t\tmin-height: 30px;\n\t\t\tpadding: 0;\n\t\t\topacity: .5;\n\t\t\tborder: none;\n\t\t\tbackground-color: transparent;\n\t\t\tmargin-right: 0;\n\n\t\t\t&:hover,\n\t\t\t&:focus,\n\t\t\t&:active {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\n\t\t&-submit {\n\t\t\tright: 28px;\n\t\t}\n\t}\n\n\t&__results {\n\t\t&-header {\n\t\t\tdisplay: block;\n\t\t\tmargin: $margin;\n\t\t\tmargin-bottom: $margin - 4px;\n\t\t\tmargin-left: 13px;\n\t\t\tcolor: var(--color-primary-element);\n\t\t\tfont-size: 19px;\n\t\t\tfont-weight: bold;\n\t\t}\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 4px;\n\t}\n\n\t.unified-search__result-more::v-deep {\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t.empty-content {\n\t\tmargin: 10vh 0;\n\n\t\t::v-deep .empty-content__title {\n\t\t\tfont-weight: normal;\n            font-size: var(--default-font-size);\n\t\t\tpadding: 0 15px;\n\t\t\ttext-align: center;\n\t\t}\n\t}\n}\n\n'],sourceRoot:""}]),e.Z=o}},i={};function a(t){var e=i[t];if(void 0!==e)return e.exports;var n=i[t]={id:t,loaded:!1,exports:{}};return r[t].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=r,e=[],a.O=function(t,n,r,i){if(!n){var o=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],i=e[l][2];for(var s=!0,c=0;c<n.length;c++)(!1&i||o>=i)&&Object.keys(a.O).every((function(t){return a.O[t](n[c])}))?n.splice(c--,1):(s=!1,i<o&&(o=i));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,r,i]},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,{a:e}),e},a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},a.j=9671,function(){a.b=document.baseURI||self.location.href;var t={9671:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,i,o=n[0],s=n[1],c=n[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(c)var l=c(a)}for(e&&e(n);u<o.length;u++)i=o[u],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(l)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),a.nc=void 0;var o=a.O(void 0,[7874],(function(){return a(23767)}));o=a.O(o)}();
//# sourceMappingURL=core-unified-search.js.map?v=a4046c04f0a5fac3b406