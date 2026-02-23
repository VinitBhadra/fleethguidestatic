// Helper function: Haversine formula for distance calculation
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// 1. Distance Calculator
function calcDistance() {
  const lat1 = parseFloat(document.getElementById('dist-lat1').value);
  const lon1 = parseFloat(document.getElementById('dist-lon1').value);
  const lat2 = parseFloat(document.getElementById('dist-lat2').value);
  const lon2 = parseFloat(document.getElementById('dist-lon2').value);
  
  const result = document.getElementById('dist-result');
  
  if (!lat1 || !lon1 || !lat2 || !lon2) {
    result.classList.remove('show');
    return;
  }
  
  const distKm = haversineDistance(lat1, lon1, lat2, lon2);
  const distMiles = distKm * 0.621371;
  const distMeters = distKm * 1000;
  
  result.innerHTML = `
    <h4>Distance Between Points:</h4>
    <p class="calc-result-value">${distKm.toFixed(2)} km</p>
    <p>${distMiles.toFixed(2)} miles</p>
    <p>${distMeters.toFixed(0)} meters</p>
  `;
  result.classList.add('show');
}

// 2. Speed Calculator
function calcSpeed() {
  const dist = parseFloat(document.getElementById('speed-dist').value);
  const time = parseFloat(document.getElementById('speed-time').value);
  
  const result = document.getElementById('speed-result');
  
  if (!dist || !time || dist <= 0 || time <= 0) {
    result.classList.remove('show');
    return;
  }
  
  const speedKmh = dist / time;
  const speedMph = speedKmh * 0.621371;
  const speedMs = speedKmh / 3.6;
  
  result.innerHTML = `
    <h4>Average Speed:</h4>
    <p class="calc-result-value">${speedKmh.toFixed(2)} km/h</p>
    <p>${speedMph.toFixed(2)} mph</p>
    <p>${speedMs.toFixed(2)} m/s</p>
  `;
  result.classList.add('show');
}

// 3. Time Calculator
function calcTime() {
  const dist = parseFloat(document.getElementById('time-dist').value);
  const speed = parseFloat(document.getElementById('time-speed').value);
  
  const result = document.getElementById('time-result');
  
  if (!dist || !speed || dist <= 0 || speed <= 0) {
    result.classList.remove('show');
    return;
  }
  
  const timeHours = dist / speed;
  const hours = Math.floor(timeHours);
  const minutes = Math.round((timeHours - hours) * 60);
  
  result.innerHTML = `
    <h4>Travel Time:</h4>
    <p class="calc-result-value">${timeHours.toFixed(2)} hours</p>
    <p>${hours} hours ${minutes} minutes</p>
    <p>Covering ${dist} km at ${speed} km/h</p>
  `;
  result.classList.add('show');
}

// 4. Pace Calculator
function calcPace() {
  const dist = parseFloat(document.getElementById('pace-dist').value);
  const time = parseFloat(document.getElementById('pace-time').value);
  
  const result = document.getElementById('pace-result');
  
  if (!dist || !time || dist <= 0 || time <= 0) {
    result.classList.remove('show');
    return;
  }
  
  const paceMinKm = time / dist;
  const paceMinMile = paceMinKm * 1.60934;
  
  result.innerHTML = `
    <h4>Pace:</h4>
    <p class="calc-result-value">${paceMinKm.toFixed(2)} min/km</p>
    <p>${paceMinMile.toFixed(2)} min/mile</p>
    <p>${(60/paceMinKm).toFixed(2)} km/h average speed</p>
  `;
  result.classList.add('show');
}

// 5. Bearing Calculator
function calcBearing() {
  const lat1 = parseFloat(document.getElementById('bear-lat1').value);
  const lon1 = parseFloat(document.getElementById('bear-lon1').value);
  const lat2 = parseFloat(document.getElementById('bear-lat2').value);
  const lon2 = parseFloat(document.getElementById('bear-lon2').value);
  
  const result = document.getElementById('bear-result');
  
  if (!lat1 || !lon1 || !lat2 || !lon2) {
    result.classList.remove('show');
    return;
  }
  
  const lat1Rad = lat1 * Math.PI / 180;
  const lat2Rad = lat2 * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  
  const y = Math.sin(dLon) * Math.cos(lat2Rad);
  const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) -
            Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLon);
  let bearing = Math.atan2(y, x) * 180 / Math.PI;
  bearing = (bearing + 360) % 360;
  
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(bearing / 22.5) % 16;
  
  result.innerHTML = `
    <h4>Bearing/Heading:</h4>
    <p class="calc-result-value">${bearing.toFixed(2)}°</p>
    <p>Direction: ${directions[index]}</p>
  `;
  result.classList.add('show');
}

// 6. Midpoint Calculator
function calcMidpoint() {
  const lat1 = parseFloat(document.getElementById('mid-lat1').value);
  const lon1 = parseFloat(document.getElementById('mid-lon1').value);
  const lat2 = parseFloat(document.getElementById('mid-lat2').value);
  const lon2 = parseFloat(document.getElementById('mid-lon2').value);
  
  const result = document.getElementById('mid-result');
  
  if (!lat1 || !lon1 || !lat2 || !lon2) {
    result.classList.remove('show');
    return;
  }
  
  const lat1Rad = lat1 * Math.PI / 180;
  const lon1Rad = lon1 * Math.PI / 180;
  const lat2Rad = lat2 * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  
  const Bx = Math.cos(lat2Rad) * Math.cos(dLon);
  const By = Math.cos(lat2Rad) * Math.sin(dLon);
  
  const midLat = Math.atan2(
    Math.sin(lat1Rad) + Math.sin(lat2Rad),
    Math.sqrt((Math.cos(lat1Rad) + Bx) * (Math.cos(lat1Rad) + Bx) + By * By)
  ) * 180 / Math.PI;
  
  const midLon = (lon1Rad + Math.atan2(By, Math.cos(lat1Rad) + Bx)) * 180 / Math.PI;
  
  result.innerHTML = `
    <h4>Midpoint:</h4>
    <p class="calc-result-value">Lat: ${midLat.toFixed(6)}</p>
    <p class="calc-result-value">Lon: ${midLon.toFixed(6)}</p>
  `;
  result.classList.add('show');
}

// 7. Radius Calculator
function calcRadius() {
  const radius = parseFloat(document.getElementById('radius-km').value);
  
  const result = document.getElementById('radius-result');
  
  if (!radius || radius <= 0) {
    result.classList.remove('show');
    return;
  }
  
  const area = Math.PI * radius * radius;
  const circumference = 2 * Math.PI * radius;
  
  result.innerHTML = `
    <h4>Circle Properties:</h4>
    <p>Radius: <span class="calc-result-value">${radius} km</span></p>
    <p>Area: ${area.toFixed(2)} km²</p>
    <p>Circumference: ${circumference.toFixed(2)} km</p>
  `;
  result.classList.add('show');
}

// 8. Distance Unit Converter
function calcUnits() {
  const value = parseFloat(document.getElementById('unit-value').value);
  const fromUnit = document.getElementById('unit-from').value;
  
  const result = document.getElementById('unit-result');
  
  if (!value || value < 0) {
    result.classList.remove('show');
    return;
  }
  
  let km;
  if (fromUnit === 'km') km = value;
  else if (fromUnit === 'mi') km = value * 1.60934;
  else if (fromUnit === 'm') km = value / 1000;
  else if (fromUnit === 'ft') km = value / 3280.84;
  else if (fromUnit === 'nm') km = value * 1.852;
  
  result.innerHTML = `
    <h4>Conversions:</h4>
    <p class="calc-result-value">${km.toFixed(2)} km</p>
    <p>${(km * 0.621371).toFixed(2)} miles</p>
    <p>${(km * 1000).toFixed(0)} meters</p>
    <p>${(km * 3280.84).toFixed(0)} feet</p>
    <p>${(km / 1.852).toFixed(2)} nautical miles</p>
  `;
  result.classList.add('show');
}

// 9. Speed Unit Converter
function calcSpeedUnits() {
  const value = parseFloat(document.getElementById('speed-unit-value').value);
  const fromUnit = document.getElementById('speed-unit-from').value;
  
  const result = document.getElementById('speed-unit-result');
  
  if (!value || value < 0) {
    result.classList.remove('show');
    return;
  }
  
  let kmh;
  if (fromUnit === 'kmh') kmh = value;
  else if (fromUnit === 'mph') kmh = value * 1.60934;
  else if (fromUnit === 'ms') kmh = value * 3.6;
  else if (fromUnit === 'knots') kmh = value * 1.852;
  
  result.innerHTML = `
    <h4>Speed Conversions:</h4>
    <p class="calc-result-value">${kmh.toFixed(2)} km/h</p>
    <p>${(kmh * 0.621371).toFixed(2)} mph</p>
    <p>${(kmh / 3.6).toFixed(2)} m/s</p>
    <p>${(kmh / 1.852).toFixed(2)} knots</p>
  `;
  result.classList.add('show');
}

// 10. Fuel Efficiency Converter
function calcFuelEff() {
  const value = parseFloat(document.getElementById('fuel-eff-value').value);
  const unit = document.getElementById('fuel-eff-unit').value;
  
  const result = document.getElementById('fuel-eff-result');
  
  if (!value || value <= 0) {
    result.classList.remove('show');
    return;
  }
  
  let kml;
  if (unit === 'kml') kml = value;
  else if (unit === 'mpg') kml = value * 0.425144;
  else if (unit === 'mpg-uk') kml = value * 0.354006;
  else if (unit === 'l100') kml = 100 / value;
  
  result.innerHTML = `
    <h4>Fuel Efficiency:</h4>
    <p class="calc-result-value">${kml.toFixed(2)} km/L</p>
    <p>${(kml / 0.425144).toFixed(2)} MPG (US)</p>
    <p>${(kml / 0.354006).toFixed(2)} MPG (UK)</p>
    <p>${(100 / kml).toFixed(2)} L/100km</p>
  `;
  result.classList.add('show');
}

// 11. Route Calculator
function calcRoute() {
  const inputs = document.querySelectorAll('.route-input');
  const stops = Array.from(inputs).map(i => parseFloat(i.value)).filter(v => !isNaN(v));
  
  const result = document.getElementById('route-result');
  
  if (stops.length < 2) {
    result.classList.remove('show');
    return;
  }
  
  let totalDist = 0;
  for (let i = 1; i < stops.length; i++) {
    totalDist += stops[i] - stops[i-1];
  }
  
  result.innerHTML = `
    <h4>Route Summary:</h4>
    <p>Number of stops: ${stops.length}</p>
    <p class="calc-result-value">Total Distance: ${totalDist.toFixed(2)} km</p>
    <p>Final destination: ${stops[stops.length-1]} km from start</p>
  `;
  result.classList.add('show');
}

// 12. Coordinate Converter
function calcCoord() {
  const lat = parseFloat(document.getElementById('coord-lat').value);
  const lon = parseFloat(document.getElementById('coord-lon').value);
  
  const result = document.getElementById('coord-result');
  
  if (!lat || !lon) {
    result.classList.remove('show');
    return;
  }
  
  function toDMS(decimal) {
    const absolute = Math.abs(decimal);
    const degrees = Math.floor(absolute);
    const minutesDecimal = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesDecimal);
    const seconds = ((minutesDecimal - minutes) * 60).toFixed(2);
    return `${degrees}° ${minutes}' ${seconds}"`;
  }
  
  const latDMS = toDMS(lat) + (lat >= 0 ? ' N' : ' S');
  const lonDMS = toDMS(lon) + (lon >= 0 ? ' E' : ' W');
  
  result.innerHTML = `
    <h4>Coordinate Formats:</h4>
    <p><strong>Decimal Degrees:</strong></p>
    <p class="calc-result-value">${lat.toFixed(6)}, ${lon.toFixed(6)}</p>
    <p><strong>DMS Format:</strong></p>
    <p>${latDMS}</p>
    <p>${lonDMS}</p>
  `;
  result.classList.add('show');
}

// 13. Grade/Slope Calculator
function calcGrade() {
  const dist = parseFloat(document.getElementById('grade-dist').value);
  const elev = parseFloat(document.getElementById('grade-elev').value);
  
  const result = document.getElementById('grade-result');
  
  if (!dist || !elev || dist <= 0) {
    result.classList.remove('show');
    return;
  }
  
  const distMeters = dist * 1000;
  const gradePercent = (elev / distMeters) * 100;
  const gradeDegrees = Math.atan(elev / distMeters) * 180 / Math.PI;
  
  result.innerHTML = `
    <h4>Grade/Slope:</h4>
    <p class="calc-result-value">${gradePercent.toFixed(2)}%</p>
    <p>${gradeDegrees.toFixed(2)}° angle</p>
    <p>Elevation gain: ${elev} m over ${dist} km</p>
  `;
  result.classList.add('show');
}

// 14. Area Calculator
function toggleAreaInputs() {
  const shape = document.getElementById('area-shape').value;
  document.getElementById('area-circle-inputs').style.display = shape === 'circle' ? 'block' : 'none';
  document.getElementById('area-rect-inputs').style.display = shape === 'rectangle' ? 'block' : 'none';
  calcArea();
}

function calcArea() {
  const shape = document.getElementById('area-shape').value;
  const result = document.getElementById('area-result');
  
  let area;
  if (shape === 'circle') {
    const radius = parseFloat(document.getElementById('area-radius').value);
    if (!radius || radius <= 0) {
      result.classList.remove('show');
      return;
    }
    area = Math.PI * radius * radius;
  } else {
    const length = parseFloat(document.getElementById('area-length').value);
    const width = parseFloat(document.getElementById('area-width').value);
    if (!length || !width || length <= 0 || width <= 0) {
      result.classList.remove('show');
      return;
    }
    area = length * width;
  }
  
  const areaSqMiles = area * 0.386102;
  const areaHectares = area * 100;
  
  result.innerHTML = `
    <h4>Area:</h4>
    <p class="calc-result-value">${area.toFixed(2)} km²</p>
    <p>${areaSqMiles.toFixed(2)} square miles</p>
    <p>${areaHectares.toFixed(2)} hectares</p>
  `;
  result.classList.add('show');
}

// 15. ETA Calculator
function calcETA() {
  const startTime = document.getElementById('eta-start').value;
  const dist = parseFloat(document.getElementById('eta-dist').value);
  const speed = parseFloat(document.getElementById('eta-speed').value);
  const breakTime = parseFloat(document.getElementById('eta-break').value) || 0;
  
  const result = document.getElementById('eta-result');
  
  if (!startTime || !dist || !speed || dist <= 0 || speed <= 0) {
    result.classList.remove('show');
    return;
  }
  
  const travelHours = dist / speed;
  const totalMinutes = (travelHours * 60) + breakTime;
  
  const [hours, minutes] = startTime.split(':').map(Number);
  const startDate = new Date();
  startDate.setHours(hours, minutes, 0);
  
  const eta = new Date(startDate.getTime() + totalMinutes * 60000);
  const etaFormatted = eta.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  
  result.innerHTML = `
    <h4>Estimated Time of Arrival:</h4>
    <p class="calc-result-value">${etaFormatted}</p>
    <p>Travel time: ${travelHours.toFixed(2)} hours</p>
    <p>Break time: ${breakTime} minutes</p>
    <p>Total time: ${Math.floor(totalMinutes/60)}h ${Math.round(totalMinutes%60)}m</p>
  `;
  result.classList.add('show');
}
