!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){this.message=e,this.payload=t}}();t.Message=r,function(e){e.record="record_selection",e.newData="popup_data",e.refreshData="refresh_data"}(t.Messages||(t.Messages={}))},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t,n){this.quote=e,this.source=t,this.accessDate=n}}();t.Quote=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(3),u=function(){function e(e,t){this.window=e,this.loc=t}return e.prototype.handleRequest=function(e,t){e.message===r.Messages.record&&t(this.getCurrentSelectedQuote())},e.prototype.getCurrentSelectedQuote=function(){return new o.Quote(this.window.getSelection().toString(),this.loc.href,new Date)},e}();t.TabView=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=new(n(4).TabView)(window,location);chrome.runtime.onMessage.addListener(function(e,t,n){return r.handleRequest(e,n),!0})}]);