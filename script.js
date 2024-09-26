 
  function sendMail(){
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    }
    emailjs.send('service_vmpegai', 'template_n9syz6l',params).then(alert("Email Sent!!"));
  }