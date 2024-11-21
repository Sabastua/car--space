function filterCars() {
    const typeFilter = document.getElementById("type").value;
    const brandFilter = document.getElementById("brand").value;
    const rows = document.querySelectorAll("#car-table tbody tr");
  
    rows.forEach((row) => {
      const type = row.children[3].textContent.toLowerCase();
      const brand = row.children[2].textContent.toLowerCase();
  
      if (
        (typeFilter === "all" || type === typeFilter) &&
        (brandFilter === "all" || brand === brandFilter)
      ) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }
function calculateLoan() {
    const price = parseFloat(document.getElementById("car-price").value);
    const downPayment = parseFloat(document.getElementById("down-payment").value);
    const interestRate = parseFloat(document.getElementById("interest-rate").value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById("loan-term").value) * 12;
  
    if (!price || !downPayment || !interestRate || !loanTerm || price <= downPayment) {
      alert("Please enter valid numbers and ensure the down payment is less than the car price.");
      return;
    }
  
    const loanAmount = price - downPayment;
    const monthlyPayment = 
      (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
  
    document.getElementById("monthly-payment").textContent = `$${monthlyPayment.toFixed(2)}`;
  }
  
  