import{S as l,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const p=document.getElementById("search-form"),i=document.getElementById("gallery");p.addEventListener("submit",async a=>{a.preventDefault();const t=document.getElementById("search").value;i.innerHTML="";const r=`https://pixabay.com/api/?key=19490895-43525fbfea01be26fe968a218&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`;try{i.innerHTML='<div class="loader"></div>';const s=await(await fetch(r)).json();s.hits.length>0?(i.innerHTML="",d(s.hits),new l("#gallery a").refresh()):c.error({title:"No Results",message:"No images found for your search. Please try another keyword."})}catch(e){console.error("Error fetching images:",e),c.error({title:"Error",message:"Something went wrong. Please try again."})}});function d(a){return a.forEach(t=>{i.innerHTML+=`
            <li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img class="gallery-image" src="${t.largeImageURL}" alt="${t.tags}" title="${t.tags}">
            </a>
                <div class="image-captions">
                <div class="image-caption-datas">
                <p class="img-caption-head">Views</p>
                <p class="img-caption-value">${t.views}</p>
                </div>
                <div class="image-caption-datas">
                <p class="img-caption-head">Downloads</p>
                <p class="img-caption-value">${t.downloads}</p>
                </div>
                <div class="image-caption-datas">
                <p class="img-caption-head">Likes</p>
                <p class="img-caption-value">${t.likes}</p>
                </div>
                <div class="image-caption-datas">
                <p class="img-caption-head">Comments</p>
                <p class="img-caption-value">${t.comments}</p>
                </div>
            </li>
        `})}
//# sourceMappingURL=index.js.map
