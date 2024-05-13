function completeChecklist() {
    var checklistItems = document.querySelectorAll("#checklist-items input[type='checkbox']");
    var allCompleted = true;

    checklistItems.forEach(function(item) {
        if (!item.checked) {
            allCompleted = false;
        }
    });

    if (allCompleted) {
        document.getElementById("completion-message").style.display = "block";
    } else {
        alert("Please complete all checklist items before submitting.");
    }
}
