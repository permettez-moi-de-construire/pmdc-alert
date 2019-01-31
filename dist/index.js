var t,n=(t=require("lodash/once"))&&"object"==typeof t&&"default"in t?t.default:t,e=function(t){this.containerEl=t};e.prototype._wrapContent=function(t){if(!t)return t;if(!t.nodeType){var n=document.createElement("p");return n.innerHTML=t,n}return t},e.prototype._createAlert=function(t){var n=document.createElement("div");return n.classList.add("notification"),n.classList.add("animated"),n.classList.add("fadeInLeft"),n.appendChild(this._wrapContent(t)),n},e.prototype._displayAlert=function(t,n){var e=this;this.containerEl.appendChild(t),t.addEventListener("click",function(n){n.preventDefault(),e._removeAlert(t)}),n&&window.setTimeout(function(){e._removeAlert(t)},n)},e.prototype._removeAlert=function(t){if(this.containerEl.contains(t)){var i=n(this.containerEl.removeChild.bind(this.containerEl,t));["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"].forEach(function(n){t.addEventListener(n,function(){i()})}),t.classList.add("fadeOutLeft");var r=new window.CustomEvent(e.events.CLOSE);t.dispatchEvent(r)}},e.prototype.alert=function(t,n,e){var i=this._createAlert(t);return i.classList.add("is-"+e),this._displayAlert(i,n),i},e.prototype.success=function(t,n){return this.alert(t,n,"success")},e.prototype.danger=function(t,n){return this.alert(t,n,"danger")},e.prototype.warning=function(t,n){return this.alert(t,n,"warning")},e.prototype.primary=function(t,n){return this.alert(t,n,"primary")},e.prototype.link=function(t,n){return this.alert(t,n,"link")},e.prototype.info=function(t,n){return this.alert(t,n,"info")},e.events={CLOSE:"alert.close"},module.exports=e;
//# sourceMappingURL=index.js.map
