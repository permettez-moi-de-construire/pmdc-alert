import t from"lodash/once";var n=function(t){this.containerEl=t};n.prototype._wrapContent=function(t){if(!t)return t;if(!t.nodeType){var n=document.createElement("p");return n.innerHTML=t,n}return t},n.prototype._createAlert=function(t){var n=document.createElement("div");return n.classList.add("notification"),n.classList.add("animated"),n.classList.add("fadeInLeft"),n.appendChild(this._wrapContent(t)),n},n.prototype._displayAlert=function(t,n){var e=this;this.containerEl.appendChild(t),t.addEventListener("click",function(n){n.preventDefault(),e._removeAlert(t)}),n&&window.setTimeout(function(){e._removeAlert(t)},n)},n.prototype._removeAlert=function(e){if(this.containerEl.contains(e)){var r=t(this.containerEl.removeChild.bind(this.containerEl,e));["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"].forEach(function(t){e.addEventListener(t,function(){r()})}),e.classList.add("fadeOutLeft");var i=new window.CustomEvent(n.events.CLOSE);e.dispatchEvent(i)}},n.prototype.alert=function(t,n,e){var r=this._createAlert(t);return r.classList.add("is-"+e),this._displayAlert(r,n),r},n.prototype.success=function(t,n){return this.alert(t,n,"success")},n.prototype.danger=function(t,n){return this.alert(t,n,"danger")},n.prototype.warning=function(t,n){return this.alert(t,n,"warning")},n.prototype.primary=function(t,n){return this.alert(t,n,"primary")},n.prototype.link=function(t,n){return this.alert(t,n,"link")},n.prototype.info=function(t,n){return this.alert(t,n,"info")},n.events={CLOSE:"alert.close"};export default n;
//# sourceMappingURL=index.mjs.map