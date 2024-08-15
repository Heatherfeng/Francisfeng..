
// You can add interactivity if needed, for example, a dynamic greeting based on the time of day.
/*document.addEventListener('DOMContentLoaded', function() {
    const headerText = document.querySelector('header h1');
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Good Morning, Welcome to';
    } else if (hours < 18) {
        greeting = 'Good Afternoon, Welcome to';
    } else {
        greeting = 'Good Evening, Welcome to';
    }

    headerText.textContent = `${greeting} HeatherWeb Internet Café`;
});
*/


document.addEventListener('DOMContentLoaded', function() {
    // Dynamic greeting based on time of day
    const headerText = document.querySelector('.header-content h1');
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Good Morning, Welcome to';
    } else if (hours < 18) {
        greeting = 'Good Afternoon, Welcome to';
    } else {
        greeting = 'Good Evening, Welcome to';
    }

    headerText.textContent = `${greeting} Heather Internet Cafe`;
});
