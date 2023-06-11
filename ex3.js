class Email {
  constructor(from, to, subject, message) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.message = message;
  }
  displayMessageAlert = () => alert(  `From: ${this.from}\nTo: ${this.to}\nSubject: ${this.subject}\n\nMessage: ${this.message}`);
}

const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function () {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const email = new Email(from, to, subject, message);
  email.displayMessageAlert();
});
