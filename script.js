function confirmAge() { 
    const ageInput = document.getElementById("age"); 
    const age = parseInt(ageInput.value); 

    if (age >= 25) 
    { window.confirm("You are 25 years old and up."); 
} 
    else 
    { 
        alert("You must be at least 25 years old to proceed.");
    } 
    
    if (age < 100) { console.log("Valid age input."); 
}
    else { alert("Please enter a number less than 100."); 
} 
} 