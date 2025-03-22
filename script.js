// Function to toggle extra information
function toggleExtraInfo() {
    var extraInfo = document.getElementById("extraInfo");
    if (extraInfo.style.display === "none") {
        extraInfo.style.display = "block";
    } else {
        extraInfo.style.display = "none";
    }
}

// Example for handling expense form (if added)
document.getElementById("expenseForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    var expenseName = document.getElementById("expenseName").value;
    var expenseAmount = document.getElementById("expenseAmount").value;

    var li = document.createElement("li");
    li.textContent = `${expenseName}: £${expenseAmount}`;

    document.getElementById("expenseDetails").appendChild(li);

    // Clear input fields
    document.getElementById("expenseName").value = '';
    document.getElementById("expenseAmount").value = '';
});
