document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const input1 = parseFloat(document.getElementById('input1').value);
        const input2 = parseFloat(document.getElementById('input2').value);
        const input3 = parseFloat(document.getElementById('input3').value);
        const input4 = parseFloat(document.getElementById('input4').value);
        const input5 = parseFloat(document.getElementById('input5').value);
        const input6 = parseFloat(document.getElementById('input6').value);

        // Clear previous error messages
        let errors = [];
        const errorContainer = document.getElementById('errorContainer');
        if (errorContainer) {
            errorContainer.innerHTML = '';
        }

        // Validation checks
        if (isNaN(input1) || input1 < 0 || input1> 30) {
            errors.push('Input 1 must be a non-negative number.');
        }
        if (isNaN(input2) || input2 < 0 || input2> 30) {
            errors.push('Input 2 must be a non-negative number.');
        }
        if (isNaN(input3) || input3 < 0 || input3> 30) {
            errors.push('Input 3 must be a non-negative number.');
        }
        if (isNaN(input4) || input4 < 0 || input4> 30) {
            errors.push('Input 1 must be a non-negative number.');
        }
        if (isNaN(input5) || input5 < 0 || input5> 30) {
            errors.push('Input 2 must be a non-negative number.');
        }
        if (isNaN(input6) || input6 < 0 || input6> 30) {
            errors.push('Input 3 must be a non-negative number.');
        }

        if (errors.length > 0) {
            event.preventDefault(); // Prevent form submission
            const errorList = document.createElement('ul');
            errors.forEach(error => {
                const listItem = document.createElement('li');
                listItem.textContent = error;
                errorList.appendChild(listItem);
            });
            if (errorContainer) {
                errorContainer.appendChild(errorList);
            } else {
                const newErrorContainer = document.createElement('div');
                newErrorContainer.id = 'errorContainer';
                newErrorContainer.appendChild(errorList);
                form.insertAdjacentElement('beforebegin', newErrorContainer);
            }
        }
    });
});
