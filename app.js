// Simulated telemetry data
defaultTelemetry = {
  temperature: 22,
  battery: 100,
  location: 'Bay 3',
  status: 'Idle'
};

function randomTelemetry() {
  return {
    temperature: (20 + Math.random() * 10).toFixed(1),
    battery: Math.max(0, Math.floor(defaultTelemetry.battery - Math.random() * 10)),
    location: ['Bay 1', 'Bay 2', 'Bay 3', 'Bay 4'][Math.floor(Math.random() * 4)],
    status: ['Idle', 'Printing', 'Error', 'Maintenance'][Math.floor(Math.random() * 4)]
  };
}

function updateTelemetry() {
  const t = randomTelemetry();
  document.getElementById('temp-value').textContent = t.temperature + ' °C';
  document.getElementById('battery-value').textContent = t.battery + ' %';
  document.getElementById('location-value').textContent = t.location;
  document.getElementById('status-value').textContent = t.status;
}

setInterval(updateTelemetry, 2000);
updateTelemetry();

// Simulated print queue
defaultQueue = [
  { part: 'Rotor Arm', status: 'In Progress', progress: 45 },
  { part: 'Camera Mount', status: 'Queued', progress: 0 },
  { part: 'Landing Gear', status: 'Completed', progress: 100 },
  { part: 'Battery Case', status: 'In Progress', progress: 70 }
];

function randomizeQueue(queue) {
  return queue.map(item => {
    if (item.status === 'In Progress') {
      let newProgress = Math.min(100, item.progress + Math.floor(Math.random() * 10));
      let newStatus = newProgress === 100 ? 'Completed' : 'In Progress';
      return { ...item, progress: newProgress, status: newStatus };
    }
    return item;
  });
}

function renderQueue(queue) {
  const tbody = document.getElementById('queue-body');
  tbody.innerHTML = '';
  queue.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.part}</td>
      <td class="status-${item.status.replace(' ', '-').toLowerCase()}">${item.status}</td>
      <td>
        <div class="progress-bar">
          <div class="progress" style="width: ${item.progress}%;"></div>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

let queue = [...defaultQueue];
function updateQueue() {
  queue = randomizeQueue(queue);
  renderQueue(queue);
}
setInterval(updateQueue, 2500);
renderQueue(queue);

// Simulated warnings
function randomWarnings() {
  const warnings = [
    'Low filament detected in Bay 2',
    'Temperature spike in Bay 4',
    'Printer error: Rotor Arm',
    'Maintenance required: Camera Mount',
    'Battery low in Bay 1'
  ];
  // Randomly pick 0-2 warnings
  let count = Math.floor(Math.random() * 3);
  let shuffled = warnings.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function updateWarnings() {
  const warningList = document.getElementById('warning-list');
  warningList.innerHTML = '';
  randomWarnings().forEach(w => {
    const li = document.createElement('li');
    li.textContent = w;
    warningList.appendChild(li);
  });
}
setInterval(updateWarnings, 4000);
updateWarnings();
