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
    var city = $('#order-city').val().trim()
    var address = $('#order-address').val().trim()
    var home = $('#order-home').val().trim()
    var korpus = $('#order-korpus').val().trim()
    var room = $('#order-room').val().trim()
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

    if (city==''){
      $('#order-city').css('border','1px solid red');
      flag = false
    }else{
      $('#order-city').css('border','1px solid #ccc');
    }

    if (address==''){
      $('#order-address').css('border','1px solid red');
      $('#order-address').val('')
      flag = false
    }else{
      $('#order-address').css('border','1px solid #ccc');
    }

    if (home==''){
      $('#order-home').css('border','1px solid red');
      $('#order-home').val('')
      flag = false
    }else{
      $('#order-home').css('border','1px solid #ccc');
    }

    if (korpus==''){
      $('#order-korpus').css('border','1px solid red');
      $('#order-korpus').val('')
      flag = false
    }else{
      $('#order-korpus').css('border','1px solid #ccc');
    }

    if (room==''){
      $('#order-room').css('border','1px solid red');
      $('#order-room').val('')
      flag = false
    }else{
      $('#order-room').css('border','1px solid #ccc');
    }

    if (!checkbox){
      $('#accept').parent().css('color', 'red');
      flag = false
    }else{
      $('#accept').parent().css('color', 'black');
    }

    if (flag){
      $.ajax({
        url: 'php/send-order.php',
        method: 'post',
        dataType: 'html',
        data: {'client': client, 'phone': phone, 
        'city':city, 'address':address, 'home':home,
        'korpus':korpus, 'room':room },
        success: function(data){
          swal("Заказ принят!", "В ближайшее время с Вами свяжется менеджер для подтверждения заказа", "success");
        }
      });
      $('#order-name').val('')
      $('#order-phone').val('')
      $('#order-address').val('')
      $('#order-home').val('')
      $('#order-korpus').val('')
      $('#order-room').val('')
      $("#accept").prop('checked', false);
      $('#orderModal').modal('hide')
    }
  })
  $("#order-phone").mask("+7(999) 999-9999");