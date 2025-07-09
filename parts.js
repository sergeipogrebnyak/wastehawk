const parts = [
  {
    name: 'Rotor Arm',
    material: 'Carbon Fiber',
    weight: '50g',
    stl: 'assets/parts/rotor_arm.stl',
    spec: 'assets/parts/rotor_arm_spec.html',
    desc: 'Lightweight, durable arm for quadcopter drones.'
  },
  {
    name: 'Camera Mount',
    material: 'ABS Plastic',
    weight: '20g',
    stl: 'assets/parts/camera_mount.stl',
    spec: 'assets/parts/camera_mount_spec.html',
    desc: 'Adjustable mount for FPV and HD cameras.'
  },
  {
    name: 'Landing Gear',
    material: 'Nylon',
    weight: '35g',
    stl: 'assets/parts/landing_gear.stl',
    spec: 'assets/parts/landing_gear_spec.html',
    desc: 'Shock-absorbing gear for safe landings.'
  },
  {
    name: 'Battery Case',
    material: 'Polycarbonate',
    weight: '28g',
    stl: 'assets/parts/battery_case.stl',
    spec: 'assets/parts/battery_case_spec.html',
    desc: 'Protective enclosure for LiPo batteries.'
  },
  {
    name: 'Propeller',
    material: 'Composite',
    weight: '12g',
    stl: 'assets/parts/propeller.stl',
    spec: 'assets/parts/propeller_spec.html',
    desc: 'High-efficiency propeller for stable flight.'
  },
  {
    name: 'GPS Mount',
    material: 'PLA',
    weight: '10g',
    stl: 'assets/parts/gps_mount.stl',
    spec: 'assets/parts/gps_mount_spec.html',
    desc: 'Secure mount for GPS modules.'
  },
  {
    name: 'Antenna Holder',
    material: 'TPU',
    weight: '8g',
    stl: 'assets/parts/antenna_holder.stl',
    spec: 'assets/parts/antenna_holder_spec.html',
    desc: 'Flexible holder for radio antennas.'
  },
  {
    name: 'Flight Controller Tray',
    material: 'ABS',
    weight: '18g',
    stl: 'assets/parts/fc_tray.stl',
    spec: 'assets/parts/fc_tray_spec.html',
    desc: 'Vibration-dampened tray for flight controllers.'
  },
  {
    name: 'Motor Mount',
    material: 'Aluminum',
    weight: '22g',
    stl: 'assets/parts/motor_mount.stl',
    spec: 'assets/parts/motor_mount_spec.html',
    desc: 'Precision mount for brushless motors.'
  },
  {
    name: 'Payload Bay',
    material: 'Polycarbonate',
    weight: '60g',
    stl: 'assets/parts/payload_bay.stl',
    spec: 'assets/parts/payload_bay_spec.html',
    desc: 'Spacious bay for carrying payloads or sensors.'
  }
];

function renderPartsTable() {
  const tbody = document.querySelector('#parts-table tbody');
  parts.forEach(part => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${part.name}</td>
      <td>${part.material}</td>
      <td>${part.weight}</td>
      <td><a href="${part.stl}" download>Download</a></td>
      <td><a href="${part.spec}" target="_blank">Spec Sheet</a></td>
      <td>${part.desc}</td>
    `;
    tbody.appendChild(tr);
  });
}

document.addEventListener('DOMContentLoaded', renderPartsTable); 