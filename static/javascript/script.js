document.addEventListener("DOMContentLoaded", () => {
    const cpuUsageElement = document.getElementById("cpu-usage");
    const diskUsageElement = document.getElementById("disk-usage");
    const memoryUsageElement = document.getElementById("memory-usage");

    const ctx = document.getElementById("usage-chart").getContext("2d");
    const usageChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["CPU", "Disco", "Memória"],
        datasets: [{
            label: "Uso (%)",
            data: [0, 0, 0],
            backgroundColor: ["rgba(75, 192, 192, 0.5)", "rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
            borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
    });

    function updateData() {
    // Simulação de dados aleatórios para demonstração
    const cpuUsage = Math.random() * 100;
    const diskUsage = Math.random() * 100;
    const memoryUsage = Math.random() * 100;

    cpuUsageElement.textContent = `${cpuUsage.toFixed(2)}%`;
    diskUsageElement.textContent = `${diskUsage.toFixed(2)}%`;
    memoryUsageElement.textContent = `${memoryUsage.toFixed(2)}%`;

    usageChart.data.datasets[0].data = [cpuUsage, diskUsage, memoryUsage];
    usageChart.update();
    }

    updateData();
    setInterval(updateData, 1000); // Atualizar a cada segundo
    });