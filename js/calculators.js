// FleetGuide - Calculator Functions

document.addEventListener('DOMContentLoaded', function() {
  
  // Distance Calculator (Haversine formula)
  function calcDistance() {
    const lat1 = parseFloat(document.getElementById('dist-lat1')?.value);
    const lon1 = parseFloat(document.getElementById('dist-lon1')?.value);
    const lat2 = parseFloat(document.getElementById('dist-lat2')?.value);
    const lon2 = parseFloat(document.getElementById('dist-lon2')?.value);
    const result = document.getElementById('dist-result');
    
    if (!result) return;
    if (!lat1 || !lon1 || !lat2 || !lon2) {
      result.classList.remove('show');
      return;
    }
    
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = (R * c).toFixed(2);
    
    result.innerHTML = `<strong>Distance:</strong> ${distance} km`;
    result.classList.add('show');
  }
  
  // Route Optimizer
  function calcRoute() {
    const stops = parseInt(document.getElementById('route-stops')?.value);
    const distance = parseFloat(document.getElementById('route-dist')?.value);
    const fuelCost = parseFloat(document.getElementById('route-fuel')?.value);
    const result = document.getElementById('route-result');
    
    if (!result) return;
    if (!stops || !distance || !fuelCost || stops < 2) {
      result.classList.remove('show');
      return;
    }
    
    const avgPerStop = (distance / stops).toFixed(2);
    const totalCost = (distance * fuelCost).toFixed(2);
    const efficiency = stops > 5 ? '85%' : stops > 3 ? '92%' : '97%';
    
    result.innerHTML = `
      <strong>Avg/Stop:</strong> ${avgPerStop} km<br>
      <strong>Total:</strong> ${totalCost}<br>
      <strong>Efficiency:</strong> ${efficiency}
    `;
    result.classList.add('show');
  }
  
  // Load Calculator
  function calcLoad() {
    const capacity = parseFloat(document.getElementById('load-capacity')?.value);
    const current = parseFloat(document.getElementById('load-current')?.value);
    const item = parseFloat(document.getElementById('load-items')?.value);
    const result = document.getElementById('load-result');
    
    if (!result) return;
    if (!capacity || !current || !item) {
      result.classList.remove('show');
      return;
    }
    
    const remaining = capacity - current;
    const canFit = Math.floor(remaining / item);
    const utilization = ((current / capacity) * 100).toFixed(1);
    
    result.innerHTML = `
      <strong>Remaining:</strong> ${remaining.toFixed(0)} kg<br>
      <strong>Can Fit:</strong> ${canFit} items<br>
      <strong>Use:</strong> ${utilization}%
    `;
    result.classList.add('show');
  }
  
  // Break-Even Calculator
  function calcBreakEven() {
    const fixed = parseFloat(document.getElementById('be-fixed')?.value);
    const variable = parseFloat(document.getElementById('be-variable')?.value);
    const revenue = parseFloat(document.getElementById('be-revenue')?.value);
    const result = document.getElementById('be-result');
    
    if (!result) return;
    if (!fixed || !variable || !revenue || revenue <= variable) {
      result.classList.remove('show');
      return;
    }
    
    const trips = Math.ceil(fixed / (revenue - variable));
    const breakEvenRevenue = (trips * revenue).toFixed(0);
    
    result.innerHTML = `
      <strong>Trips:</strong> ${trips}<br>
      <strong>Revenue:</strong> ${breakEvenRevenue}<br>
      <strong>Margin:</strong> ${(revenue - variable).toFixed(0)}
    `;
    result.classList.add('show');
  }
  
  // Maintenance Cost Tracker
  function calcMaintenance() {
    const oil = parseFloat(document.getElementById('maint-oil')?.value) || 0;
    const tire = parseFloat(document.getElementById('maint-tire')?.value) || 0;
    const service = parseFloat(document.getElementById('maint-service')?.value) || 0;
    const other = parseFloat(document.getElementById('maint-other')?.value) || 0;
    const result = document.getElementById('maint-result');
    
    if (!result) return;
    if (!oil && !tire && !service && !other) {
      result.classList.remove('show');
      return;
    }
    
    const total = oil + tire + service + other;
    const monthly = total;
    const yearly = total * 12;
    
    result.innerHTML = `
      <strong>Total:</strong> ${total.toFixed(0)}<br>
      <strong>Monthly:</strong> ${monthly.toFixed(0)}<br>
      <strong>Yearly:</strong> ${yearly.toFixed(0)}
    `;
    result.classList.add('show');
  }
  
  // Attach event listeners
  
  // Distance calculator
  ['dist-lat1', 'dist-lon1', 'dist-lat2', 'dist-lon2'].forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener('input', calcDistance);
      elem.addEventListener('change', calcDistance);
    }
  });
  
  // Route optimizer
  ['route-stops', 'route-dist', 'route-fuel'].forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener('input', calcRoute);
      elem.addEventListener('change', calcRoute);
    }
  });
  
  // Load calculator
  ['load-capacity', 'load-current', 'load-items'].forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener('input', calcLoad);
      elem.addEventListener('change', calcLoad);
    }
  });
  
  // Break-even calculator
  ['be-fixed', 'be-variable', 'be-revenue'].forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener('input', calcBreakEven);
      elem.addEventListener('change', calcBreakEven);
    }
  });
  
  // Maintenance calculator
  ['maint-oil', 'maint-tire', 'maint-service', 'maint-other'].forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener('input', calcMaintenance);
      elem.addEventListener('change', calcMaintenance);
    }
  });
  
});
