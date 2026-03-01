(function(){
  const OFFER_URL = "https://SEU-LINK-AQUI";

  function go(){
    if(!OFFER_URL.includes("SEU-LINK-AQUI")){
      window.location.href = OFFER_URL;
    }
  }

  const btn = document.querySelector("[data-cta]");
  const img = document.querySelector("[data-img]");

  if(btn) btn.addEventListener("click", go);
  if(img) img.addEventListener("click", go);
})();
