// ==========================================
// CALCULATOR FUNCTIONS - GUARANTEED TO WORK
// ==========================================

// Fuel Cost Calculator
function calcFuelLive() {
  try {
    const distance = parseFloat(document.getElementById('fc-distance').value);
    const price = parseFloat(document.getElementById('fc-price').value);
    const mileage = parseFloat(document.getElementById('fc-mileage').value);
    
    const result = document.getElementById('fc-result');
    if (!result) return;
    
    // Check if all fields have valid values
    if (!distance || !price || !mileage || distance <= 0 || price <= 0 || mileage <= 0) {
      result.style.display = 'none';
      return;
    }
    
    // Calculate
    const fuelRequired = (distance / mileage).toFixed(2);
    const fuelCost = (fuelRequired * price).toFixed(2);
    const costPerKm = (fuelCost / distance).toFixed(2);
    
    // Display result
    result.innerHTML = `
      <h4>💡 Fuel Cost Calculation:</h4>
      <p>Distance: <strong>${distance} km</strong></p>
      <p>Fuel Required: <span class="result-value">${fuelRequired} L</span></p>
      <p>Fuel Price: <strong>₹${price}/L</strong></p>
      <p>Vehicle Mileage: <strong>${mileage} km/L</strong></p>
      <hr style="margin: 10px 0; border: none; border-top: 1px solid #E0E0E0;">
      <p style="font-size: 1.1rem;"><strong>Total Fuel Cost: <span class="result-value">₹${fuelCost}</span></strong></p>
      <p>Cost per km: ₹${costPerKm}/km</p>
    `;
    result.style.display = 'block';
  } catch (e) {
    console.error('Fuel calculator error:', e);
  }
}

// Trip Cost Calculator
function calcTripLive() {
  try {
    const distance = parseFloat(document.getElementById('tc-distance').value);
    const price = parseFloat(document.getElementById('tc-price').value);
    const mileage = parseFloat(document.getElementById('tc-mileage').value);
    const driver = parseFloat(document.getElementById('tc-driver').value) || 0;
    const toll = parseFloat(document.getElementById('tc-toll').value) || 0;
    
    const result = document.getElementById('tc-result');
    if (!result) return;
    
    // Check required fields
    if (!distance || !price || !mileage || distance <= 0 || price <= 0 || mileage <= 0) {
      result.style.display = 'none';
      return;
    }
    
    // Calculate
    const fuelCost = (distance / mileage) * price;
    const total = fuelCost + driver + toll;
    const costPerKm = (total / distance).toFixed(2);
    
    // Display result
    result.innerHTML = `
      <h4>💡 Trip Cost Breakdown:</h4>
      <p>Distance: <strong>${distance} km</strong></p>
      <hr style="margin: 10px 0; border: none; border-top: 1px solid #E0E0E0;">
      <p>Fuel Cost: <span class="result-value">₹${fuelCost.toFixed(2)}</span></p>
      <p>Driver Cost: <span class="result-value">₹${driver.toFixed(2)}</span></p>
      <p>Toll Charges: <span class="result-value">₹${toll.toFixed(2)}</span></p>
      <hr style="margin: 10px 0; border: none; border-top: 1px solid #E0E0E0;">
      <p style="font-size: 1.1rem;"><strong>Total Trip Cost: <span class="result-value">₹${total.toFixed(2)}</span></strong></p>
      <p>Cost per km: ₹${costPerKm}/km</p>
    `;
    result.style.display = 'block';
  } catch (e) {
    console.error('Trip calculator error:', e);
  }
}

// Cost Per KM Calculator
function calcCostPerKMLive() {
  try {
    const total = parseFloat(document.getElementById('cpk-total').value);
    const distance = parseFloat(document.getElementById('cpk-distance').value);
    
    const result = document.getElementById('cpk-result');
    if (!result) return;
    
    // Check if both fields have valid values
    if (!total || !distance || total <= 0 || distance <= 0) {
      result.style.display = 'none';
      return;
    }
    
    // Calculate
    const costPerKM = (total / distance).toFixed(2);
    const cost100km = (costPerKM * 100).toFixed(2);
    const cost1000km = (costPerKM * 1000).toFixed(2);
    
    // Display result
    result.innerHTML = `
      <h4>💡 Cost Per KM Analysis:</h4>
      <p>Total Cost: <strong>₹${total}</strong></p>
      <p>Distance: <strong>${distance} km</strong></p>
      <hr style="margin: 10px 0; border: none; border-top: 1px solid #E0E0E0;">
      <p style="font-size: 1.2rem;"><strong>Cost per KM: <span class="result-value">₹${costPerKM}/km</span></strong></p>
      <p>Cost for 100 km: ₹${cost100km}</p>
      <p>Cost for 1,000 km: ₹${cost1000km}</p>
    `;
    result.style.display = 'block';
  } catch (e) {
    console.error('Cost per KM calculator error:', e);
  }
}

// Old button-based functions (for backward compatibility)
function calcFuel() { calcFuelLive(); }
function calcTrip() { calcTripLive(); }
function calcCostPerKM() { calcCostPerKMLive(); }

// ==========================================
// OTHER FUNCTIONS
// ==========================================

// Mobile Menu Toggle
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  if (nav) {
    nav.classList.toggle('active');
  }
}

// Cookie Consent
function acceptCookies() {
  localStorage.setItem('cookieConsent', 'true');
  const banner = document.getElementById('cookie-banner');
  if (banner) {
    banner.style.display = 'none';
  }
}

function showCookieBanner() {
  const consent = localStorage.getItem('cookieConsent');
  const banner = document.getElementById('cookie-banner');
  if (!consent && banner) {
    banner.style.display = 'flex';
  }
}

// ==========================================
// INITIALIZE ON PAGE LOAD
// ==========================================

window.addEventListener('DOMContentLoaded', function() {
  console.log('FleetGuide calculators loaded');
  
  // Setup Fuel Calculator
  const fcInputs = ['fc-distance', 'fc-price', 'fc-mileage'];
  fcInputs.forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener('input', calcFuelLive);
      elem.addEventListener('change', calcFuelLive);
      console.log('Added listener to:', id);
    }
  });
  
  // Setup Trip Calculator
  const tcInputs = ['tc-distance', 'tc-price', 'tc-mileage', 'tc-driver', 'tc-toll'];
  tcInputs.forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener('input', calcTripLive);
      elem.addEventListener('change', calcTripLive);
      console.log('Added listener to:', id);
    }
  });
  
  // Setup Cost Per KM Calculator
  const cpkInputs = ['cpk-total', 'cpk-distance'];
  cpkInputs.forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener('input', calcCostPerKMLive);
      elem.addEventListener('change', calcCostPerKMLive);
      console.log('Added listener to:', id);
    }
  });
  
  // Show cookie banner
  showCookieBanner();
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  console.log('All calculator listeners added successfully!');
});

// Also try to initialize immediately (backup)
if (document.readyState === 'loading') {
  // Document still loading, wait for DOMContentLoaded (handled above)
} else {
  // Document already loaded, run immediately
  console.log('Document already loaded, initializing calculators...');
  setTimeout(function() {
    // Give a tiny delay to ensure DOM is fully ready
    const fcDist = document.getElementById('fc-distance');
    if (fcDist && !fcDist.dataset.listenerAdded) {
      console.log('Backup initialization running...');
      ['fc-distance', 'fc-price', 'fc-mileage'].forEach(id => {
        const elem = document.getElementById(id);
        if (elem) {
          elem.addEventListener('input', calcFuelLive);
          elem.dataset.listenerAdded = 'true';
        }
      });
      ['tc-distance', 'tc-price', 'tc-mileage', 'tc-driver', 'tc-toll'].forEach(id => {
        const elem = document.getElementById(id);
        if (elem) {
          elem.addEventListener('input', calcTripLive);
          elem.dataset.listenerAdded = 'true';
        }
      });
      ['cpk-total', 'cpk-distance'].forEach(id => {
        const elem = document.getElementById(id);
        if (elem) {
          elem.addEventListener('input', calcCostPerKMLive);
          elem.dataset.listenerAdded = 'true';
        }
      });
    }
  }, 100);
}
