// Get current date
const currentDate = new Date();

// Get the start and end dates of the current week
const startOfWeek = new Date(currentDate);
startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
const endOfWeek = new Date(currentDate);
endOfWeek.setDate(startOfWeek.getDate() + 6);

// Get the start and end dates of the current month
const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

// Format dates to display as strings
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedStartOfWeek = startOfWeek.toLocaleDateString('en-US', options);
const formattedEndOfWeek = endOfWeek.toLocaleDateString('en-US', options);
const formattedStartOfMonth = startOfMonth.toLocaleDateString('en-US', options);
const formattedEndOfMonth = endOfMonth.toLocaleDateString('en-US', options);

// Display the current week and month in the dashboard
document.getElementById('current-week').textContent = `Current Week: ${formattedStartOfWeek} - ${formattedEndOfWeek}`;
document.getElementById('current-month').textContent = `Current Month: ${formattedStartOfMonth} - ${formattedEndOfMonth}`;