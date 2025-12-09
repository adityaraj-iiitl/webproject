function generateSampleData() {
            const applications = [
                { status: 'Applied', count: 45 },
                { status: 'Interview Scheduled', count: 12 },
                { status: 'Offer Received', count: 5 },
                { status: 'Rejected', count: 18 },
                { status: 'Awaiting Follow-up', count: 8 }
            ];

            const industries = {
                'Technology': 25,
                'Finance': 18,
                'Healthcare': 12,
                'Marketing': 10,
                'Consulting': 8
            };

            const locations = {
                'New York': 22,
                'San Francisco': 18,
                'Remote': 15,
                'Chicago': 12,
                'Boston': 8
            };

            return { applications, industries, locations };
        }

        const data = generateSampleData();

        // Update metrics
        const totalApps = data.applications.reduce((sum, item) => sum + item.count, 0);
        const interviews = data.applications.find(a => a.status === 'Interview Scheduled').count;
        const offers = data.applications.find(a => a.status === 'Offer Received').count;

        document.getElementById('totalApps').textContent = totalApps;
        document.getElementById('interviewRate').textContent = Math.round((interviews / totalApps) * 100) + '%';
        document.getElementById('successRate').textContent = Math.round((offers / totalApps) * 100) + '%';

        // Status Pie Chart
        const statusCtx = document.getElementById('statusChart').getContext('2d');
        new Chart(statusCtx, {
            type: 'doughnut',
            data: {
                labels: data.applications.map(a => a.status),
                datasets: [{
                    data: data.applications.map(a => a.count),
                    backgroundColor: [
                        '#3b82f6',
                        '#f59e0b',
                        '#10b981',
                        '#ef4444',
                        '#8b5cf6'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });

        // Timeline Chart
        const timelineCtx = document.getElementById('timelineChart').getContext('2d');
        new Chart(timelineCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                datasets: [{
                    label: 'Applications Sent',
                    data: [5, 8, 12, 15, 18, 14, 20, 22, 18, 25],
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Populate Top Industries
        const industriesHtml = Object.entries(data.industries)
            .map(([industry, count]) => {
                const percentage = (count / totalApps) * 100;
                return `
                    <div class="insight-item">
                        <span class="insight-label">${industry}</span>
                        <span class="insight-value">${count}</span>
                        <div class="progress-bar-custom">
                            <div class="progress-fill" style="width: ${percentage}%"></div>
                        </div>
                    </div>
                `;
            })
            .join('');
        document.getElementById('topIndustries').innerHTML = industriesHtml;

        // Populate Top Locations
        const locationsHtml = Object.entries(data.locations)
            .map(([location, count]) => {
                const percentage = (count / totalApps) * 100;
                return `
                    <div class="insight-item">
                        <span class="insight-label">${location}</span>
                        <span class="insight-value">${count}</span>
                        <div class="progress-bar-custom">
                            <div class="progress-fill" style="width: ${percentage}%"></div>
                        </div>
                    </div>
                `;
            })
            .join('');
        document.getElementById('topLocations').innerHTML = locationsHtml;