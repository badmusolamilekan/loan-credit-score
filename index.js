let loanForm = document.querySelector("#loanForm");

loanForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let creditScore = parseFloat(document.getElementById("creditScore").value);
  let loanAmount = parseFloat(document.getElementById("loanAmount").value);
  let messages = document.getElementById("messages");

  messages.classList.remove("text-red-500", "text-green-500");

  if (
    document.getElementById("creditScore").value === "" ||
    document.getElementById("loanAmount").value === ""
  ) {
    messages.innerHTML = "Please Enter your credit Score and your Loan amount.";
    messages.classList.add("text-red-500");
  } else if (creditScore >= 0 && creditScore <= 3) {
    messages.innerHTML = "Sorry! you are not eligible to borrow money";
    messages.classList.add("text-red-500");
  } else if (creditScore >= 4 && creditScore <= 7) {
    if (loanAmount <= 5000) {
      messages.innerHTML =
        "You are eligible to borrow 5,000 and your loan has been successfully granted.";
      messages.classList.add("text-green-500");
      ("grren");
    } else {
      messages.innerHTML =
        "You are eligible to borrow but you cannot borrow more than 5,000.";
      messages.classList.add("text-red-500");
    }
  } else if (creditScore >= 8 && creditScore <= 9) {
    if (loanAmount <= 10000) {
      messages.innerHTML =
        "You are eligible to borrow 10,000 and your loan has been successfully granted.";
      messages.classList.add("text-green-500");
    } else {
      messages.innerHTML =
        "You are eligible to borrow but you cannot borrow more than 10,000.";
      messages.classList.add("text-red-500");
    }
  } else if (creditScore === 10) {
    messages.innerHTML = "Your Loan has been granted Successfully";
    messages.classList.add("text-green-500");
  } else {
    messages.innerHTML = "Make sure you enter between 0 - 10";
    messages.classList.add("text-red-500");
  }
});
