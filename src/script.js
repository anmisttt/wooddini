window.onload = function() {
  const createMailTemplate = function() {
    return `
    <div class="modal-content">            
    <div class="modal send-mail">                
        <div class="message">                    
            <div class="closeText">Закрыть</div>                    
            <div class="section-head">                        
                <div class="text">                        
                    Оставьте свой адрес электронной почты, и мы 
                    обязательно сообщим вам, когда сайт будет готов
                </div>            
                </div>
                <form id="form">                                                            
                <input type="email" id="email" name="email" placeholder="mebelwooddini@example.com" required>     
                <input type="submit" class="button" value="Отправить">                    
            </form>
        </div>            
    </div>        

</div>
    `
}

const container = document.querySelector(".modal-wrapper");

function closing() {
    const closeText = document
      .querySelector(".modal-content")
      .querySelector(".closeText");
    closeText.addEventListener("click", function () {
      container.innerHTML = "";
    });
    window.addEventListener("click", function (event) {
      const content = document.querySelector(".modal-content");
      if (event.target == content) {
        container.innerHTML = "";
      }
    });
  }

  function openSendMail() {
    container.innerHTML = createMailTemplate();
    $("#form").submit(function() {
      $.ajax({
        type: "POST",
        url: "../ajax/mail.php",
        data: $(this).serialize()
      }).done(function() {
        container.innerHTML = "";
        alert("Ваше письмо успешно отправлено");
      });
      return false
      })
    closing();
  }

document.querySelector('#on-open').addEventListener('click',openSendMail)
}

