!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){this.message=e,this.payload=t}}();t.Message=r,function(e){e.record="record_selection",e.newData="popup_data",e.refreshData="refresh_data",e.deleteDatum="delete_datum"}(t.Messages||(t.Messages={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(){return function(e){var t=this;this.view=e,this.handleRequest=function(e){e.message===r.Messages.newData&&t.view.display(e.payload)},this.refreshViewData=function(){chrome.runtime.sendMessage(new r.Message(r.Messages.refreshData,[]),t.view.display)},this.deleteDatumWithValue=function(e){chrome.runtime.sendMessage(new r.Message(r.Messages.deleteDatum,[e,"fullDateTime"]),function(e){console.log("just deleted now refreshing?"),t.refreshViewData()})},chrome.runtime.onMessage.addListener(function(e,n,r){t.handleRequest(e)})}}();t.PopupViewController=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){var t=this;this.doc=e,this.display=function(e){var n=t.doc.getElementById("my-quotes");if(n.innerHTML="",e.length>0){for(var r=t.doc.createDocumentFragment(),o=0;o<e.length;o++){var a=t.createQuoteFrag(e[o]);r.appendChild(a)}n.appendChild(r)}else{var i=t.doc.createElement("li");i.appendChild(t.doc.createTextNode("No Quotes Saved")),n.appendChild(i)}},this.createQuoteFrag=function(e){var n=t.doc.createElement("li"),r=t.doc.createElement("div"),o=t.doc.createElement("p"),a=t.doc.createElement("cite"),i=t.doc.createElement("p"),d=t.doc.createElement("div"),c=t.doc.createElement("p"),s=t.doc.createElement("button");return n.appendChild(r),n.appendChild(a),n.appendChild(d),r.appendChild(o),a.appendChild(i),d.appendChild(c),d.appendChild(s),o.appendChild(t.doc.createTextNode(e.quote)),i.appendChild(t.doc.createTextNode(e.source)),c.appendChild(t.doc.createTextNode(e.accessDate)),s.appendChild(t.doc.createTextNode("Delete")),s.addEventListener("click",function(){t.controller.deleteDatumWithValue(e.fullDateTime)}),n}}return e.prototype.setController=function(e){this.controller=e},e}();t.QuotePopupView=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(1),a=new r.QuotePopupView(document),i=new o.PopupViewController(a);a.setController(i),window.onload=function(){i.refreshViewData()}}]);