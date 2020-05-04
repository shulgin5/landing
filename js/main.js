var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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
  $('#reviewModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var recipient = button.data('whatever') 
    var modal = $(this)
  })
  $('#send-review').on('click', function (event) {
    var modal = $('#reviewModal')
    var client = modal.find('.modal-body input').val()
    var review = modal.find('.modal-body textarea').val()
    var status = $('#status-review')
    if (client!='' && review!=''){
      modal.find('.modal-body textarea').val('')
      modal.find('.modal-body input').val('')
      status.css('display','block')
      status.css('color','#36d536')
      $.ajax({
        url: 'php/send-review.php',
        method: 'post',
        dataType: 'html',
        data: {'client': client, 'review': review},
        success: function(data){
          status.html(data)
        }
      });
    }else{
      status.html('Заполните все поля!')
      status.css('display','block')
      status.css('color','rgb(181, 3, 3)')
    } 
  })
  $("#order-phone").mask("+7(999) 999-9999");