function addTiming() {
    let timingInputs = document.getElementById("timing-inputs");
    let timingInput = document.createElement("input");
    timingInput.type = "time";
    timingInput.name = "timing";
    timingInputs.appendChild(timingInput);
    timingInputs.appendChild(document.createElement("br"));
}

function setReminder() {
    event.preventDefault(); // Prevent form submission

    let medicationName = document.getElementById("medication-name").value;
    let dosage = document.getElementById("dosage").value;
    let frequency = parseInt(document.getElementById("frequency").value);
    let reminderDateTimeInputs = document.getElementsByName("timing");
    let reminderDateTimeArray = [];
    for (let i = 0; i < reminderDateTimeInputs.length; i++) {
        if (reminderDateTimeInputs[i].value !== "") {
            reminderDateTimeArray.push(reminderDateTimeInputs[i].value);
        }
    }

    if (reminderDateTimeArray.length === 0) {
        alert("Please enter at least one reminder time.");
        return;
    }

    // Display reminder message
    let reminderMessage = `Don't forget to take ${medicationName} (${dosage}) ${frequency} times a day at:`;
    for (let i = 0; i < reminderDateTimeArray.length; i++) {
        reminderMessage += `\n- ${reminderDateTimeArray[i]}`;
    }
    document.getElementById("reminder-message").textContent = reminderMessage;
    document.getElementById("reminder-section").classList.remove("hidden");

    // Clear form fields
    document.getElementById("add-medication-form").reset();
}

// Function to check if the medication has been taken
document.getElementById("taken").addEventListener("change", function() {
    let takenCheckbox = document.getElementById("taken");
    if (takenCheckbox.checked) {
        alert("Thank you for confirming that you've taken the medication!");
    }
});