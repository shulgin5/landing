var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });

  description_button.onclick = function() {
    if(description_button.innerHTML == "Развернуть"){
      description_text.style.overflow = "visible";
      description_text.style.height = "auto";
      description_button.innerHTML = "Свернуть";
    } else{
      description_text.style.overflow = "hidden";
      description_text.style.height = "50px";
      description_button.innerHTML = "Развернуть";
    }
  };
  properties_button.onclick = function() {
    if(properties_button.innerHTML == "Развернуть"){
      properties_text.style.overflow = "visible";
      properties_text.style.height = "auto";
      properties_button.innerHTML = "Свернуть";
    } else{
      properties_text.style.overflow = "hidden";
      properties_text.style.height = "90px";
      properties_button.innerHTML = "Развернуть";
    }
  };