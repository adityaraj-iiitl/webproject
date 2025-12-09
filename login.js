document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const companyName = document.getElementById('companyName').value.trim();
    const jobTitle = document.getElementById('jobTitle').value.trim();
    const appDate = document.getElementById('appDate').value;
    const interviewDate = document.getElementById('interviewDate').value;
    const appStatus = document.getElementById('appStatus').value;
    const messageEl = document.getElementById('message');

    messageEl.className = 'hidden';
    messageEl.textContent = '';

    // Required validations
    if (!companyName || !jobTitle || !appDate || !appStatus) {
        showMessage('Please fill all required fields (*)', 'error');
        return;
    }

    // Interview Date validation
    if (interviewDate && new Date(interviewDate) < new Date(appDate)) {
        showMessage('Interview date cannot be before the application date!', 'error');
        return;
    }

    const data = {
        companyName,
        jobTitle,
        applicationDate: appDate,
        interviewDate,
        source: document.getElementById('source').value.trim() || 'N/A',
        salaryExpectation: document.getElementById('salaryExpectation').value || 'N/A',
        applicationStatus: appStatus
    };

    console.log("Saved:", data);

    showMessage(`Application for "${jobTitle}" at "${companyName}" recorded!`, 'success');

    document.getElementById('applicationForm').reset();
});

function showMessage(msg, type) {
    const messageEl = document.getElementById('message');
    messageEl.textContent = msg;
    messageEl.className = type;
}
 
