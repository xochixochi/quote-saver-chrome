!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=7)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(e,t){this.message=e,this.payload=t}}();t.Message=n,function(e){e.record="record_selection",e.newData="popup_data",e.refreshData="refresh_data"}(t.Messages||(t.Messages={}))},,,,,,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.model=e,this.subscribers=[]}return e.prototype.put=function(e,t){var o=this;console.log("putting quote"),this.model.get(function(n){n.hasOwnProperty("quotes")?n.quotes.push(e):n.quotes=[e],o.model.set(n,t)})},e.prototype.removeFirstWithValueAt=function(e,t,o){var n=this;this.model.get(function(o){if(o.hasOwnProperty("quotes"))for(var r in o.quotes)if(o.quotes[r][t]===e)return o.quotes.splice(r,1),void n.model.set(o)})},e.prototype.getAll=function(e){this.model.get(function(t){t.hasOwnProperty("quotes")?(console.log(t.quotes),console.log(e),e(t.quotes)):e([])})},e.prototype.reset=function(){this.model.set({})},e.prototype.register=function(e){this.subscribers.push(e)},e.prototype.notifyAll=function(){var e=this;this.getAll(function(t){e.subscribers.forEach(function(e){e.update(t)})})},e}();t.QuoteModel=n},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(6),r=o(0),s=new n.QuoteModel(chrome.storage.sync);chrome.runtime.onMessage.addListener(function(e,t,o){return e.message===r.Messages.refreshData&&(s.getAll(o),!0)});chrome.contextMenus.create({title:"Record Quote",contexts:["selection"],onclick:function(e,t){!function(e){!function(e,t){chrome.tabs.query({active:!0,currentWindow:!0},function(o){chrome.tabs.sendMessage(o[0].id,e,t)})}(new r.Message(r.Messages.record,[]),e)}(function(e){s.put(e,void 0)})}})}]);