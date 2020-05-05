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
  $('#send-order').on('click', function (event) {
    var modal = $('#orderModal')
    var client = $('#order-name').val().trim()
    var phone = $('#order-phone').val().trim()
    var checkbox = $("#accept").prop("checked")
    var flag = true
    if (client==''){
      $('#order-name').css('border','1px solid red');
      $('#order-name').val('')
      flag = false
    }else{
      $('#order-name').css('border','1px solid #ccc');
    }

    if (phone==''){
      $('#order-phone').css('border','1px solid red');
      $('#order-phone').val('')
      flag = false
    }else{
      $('#order-phone').css('border','1px solid #ccc');
    }

    if (!checkbox){
      $('#accept').parent().css('color', 'red');
      flag = false
    }else{
      $('#accept').parent().css('color', 'black');
    }

    if (flag){
      $.ajax({
        url: 'php/send-order-new.php',
        method: 'post',
        dataType: 'html',
        data: {'client': client, 'phone': phone},
        success: function(data){
          swal("Заказ принят!", "В ближайшее время с Вами свяжется менеджер для подтверждения заказа", "success");
        }
      });
      $('#order-name').val('')
      $('#order-phone').val('')
      $("#accept").prop('checked', false);
      $('#orderModal').modal('hide')
    }
  })
  $("#order-phone").mask("+7(999) 999-9999");