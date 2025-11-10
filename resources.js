

const jobApplications = [
  {
    title: "DevOps Engineer",
    company: "CloudStream Solutions",
    role: "Contract",
    industry: "Cloud Computing",
    status: "Rejected",
    location: "New York, NY",
    date: "2025-09-01",
    link: "#"
  },
  {
    title: "Marketing Specialist",
    company: "GreenGrowth Co.",
    role: "Full-time",
    industry: "Non-profit",
    status: "Interview Scheduled",
    location: "Remote",
    date: "2025-11-06",
    link: "#"
  }
];

localStorage.setItem("jobApplications", JSON.stringify(jobApplications));


function loadJobApplications() {
  const tableBody = document.getElementById("jobTableBody");
  tableBody.innerHTML = ""; // Clear previous rows if any

  const jobs = JSON.parse(localStorage.getItem("jobApplications")) || [];

  if (jobs.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align:center; padding:20px; color:#888;">
          No applications found. Please add data first.
        </td>
      </tr>`;
    return;
  }

  jobs.forEach(job => {
    const row = document.createElement("tr");

    // Badge color based on status
    let badgeClass = "bg-secondary";
    if (job.status.toLowerCase().includes("rejected")) badgeClass = "bg-danger";
    else if (job.status.toLowerCase().includes("interview")) badgeClass = "bg-warning text-dark";
    else if (job.status.toLowerCase().includes("applied")) badgeClass = "bg-primary";
    else if (job.status.toLowerCase().includes("offer")) badgeClass = "bg-success";

    row.innerHTML = `
      <td data-label="Posting Title">${job.title}</td>
      <td data-label="Company">${job.company}</td>
      <td data-label="Role">${job.role}</td>
      <td data-label="Industry">${job.industry}</td>
      <td data-label="Application Status">
        <span class="badge ${badgeClass}">${job.status}</span>
      </td>
      <td data-label="Location">${job.location}</td>
      <td data-label="Application Date">${job.date}</td>
      <td data-label="Link">
        <a href="${job.link}" target="_blank" class="btn btn-sm btn-info">View Posting</a>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

// Run when page loads
document.addEventListener("DOMContentLoaded", loadJobApplications);
