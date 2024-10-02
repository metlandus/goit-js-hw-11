import{S as l,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const d=document.getElementById("search-form"),r=document.getElementById("gallery");d.addEventListener("submit",function(i){i.preventDefault();const t=document.getElementById("search").value;r.innerHTML="";const o=`https://pixabay.com/api/?key=19490895-43525fbfea01be26fe968a218&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`;r.innerHTML='<div class="loader"></div>',fetch(o).then(function(e){return e.json()}).then(function(e){e.hits.length>0?(r.innerHTML="",p(e.hits),new l("#gallery a").refresh()):c.error({title:"No Results",message:"No images found for your search. Please try another keyword."})}).catch(function(e){console.error("Error fetching images:",e),c.error({title:"Error",message:"Something went wrong. Please try again."})})});function p(i){return i.forEach(function(t){r.innerHTML+=`
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
                </div>
            </li>
        `})}
//# sourceMappingURL=index.js.map
