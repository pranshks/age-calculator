function calculateAge() {
    const dob = document.getElementById('dob').value;
    const today = new Date();
    const birthDate = new Date(dob);
    
    if (isNaN(birthDate)) {
        document.getElementById('result').textContent = 'Please enter a valid date.';
        return;
    }
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust for negative months or days
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    // Construct the result string
    let result = `Your age is ${years} year${years !== 1 ? 's' : ''}`;
    if (months > 0) {
        result += `, ${months} month${months !== 1 ? 's' : ''}`;
    }
    if (days > 0) {
        result += `, and ${days} day${days !== 1 ? 's' : ''}`;
    }

    document.getElementById('result').textContent = result + '.';
}