!function(){"use strict";const t=document.querySelector(".popover"),e=document.querySelector(".btn");document.addEventListener("DOMContentLoaded",(()=>{!function(t,e,n=15){t.addEventListener("click",(t=>{t.preventDefault(),e.classList.toggle("active"),function(t,e){const n=t.getBoundingClientRect().height+e;t.style.transform=`translateY(-${n}px)`}(e,n)}))}(e,t)}))}();