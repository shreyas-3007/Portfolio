function sendEmail()
{

  // let emailElement = document.querySelector(".email-field");
  // let nameElement = document.querySelector(".name-field");
  // let messageElement = document.querySelector(".message-field");
 

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "shreyaspatil3007@gmail.com",
    Password : "C420231AF2A6ECE54638C7C9FD8BDA9FE1ED",
    To : 'shreyaspatil3007@gmail.com',
    From : document.querySelector(".email-field").value,
    Subject : "Portfolio Website Enquiry",
    Body : `Name : ${document.querySelector(".name-field").value} <br>
    Email: ${document.querySelector(".email-field").value} <br>
    Message : ${document.querySelector(".message-field").value}`,
  }).then(
       message => alert("Information Sent Scuccessfully..Stay Connected")
    );

  

  
  
}