// Live Calculator Functions (calculate as you type)
function calcFuelLive() {
  const distance = parseFloat(document.getElementById('fc-distance').value);
  const price = parseFloat(document.getElementById('fc-price').value);
  const mileage = parseFloat(document.getElementById('fc-mileage').value);
  
  const result = document.getElementById('fc-result');
  
  if (!distance || !price || !mileage || distance <= 0 || price <= 0 || mileage <= 0) {
    result.classList.remove('show');
    return;
  }
  
  const fuelRequired = (distance / mileage).toFixed(2);
  const fuelCost = (fuelRequired * price).toFixed(2);
  const costPerKm = (fuelCost / distance).toFixed(2);
  
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
  result.classList.add('show');
}

function calcTripLive() {
  const distance = parseFloat(document.getElementById('tc-distance').value);
  const price = parseFloat(document.getElementById('tc-price').value);
  const mileage = parseFloat(document.getElementById('tc-mileage').value);
  const driver = parseFloat(document.getElementById('tc-driver').value) || 0;
  const toll = parseFloat(document.getElementById('tc-toll').value) || 0;
  
  const result = document.getElementById('tc-result');
  
  if (!distance || !price || !mileage || distance <= 0 || price <= 0 || mileage <= 0) {
    result.classList.remove('show');
    return;
  }
  
  const fuelCost = (distance / mileage) * price;
  const total = fuelCost + driver + toll;
  const costPerKm = (total / distance).toFixed(2);
  
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
  result.classList.add('show');
}

function calcCostPerKMLive() {
  const total = parseFloat(document.getElementById('cpk-total').value);
  const distance = parseFloat(document.getElementById('cpk-distance').value);
  
  const result = document.getElementById('cpk-result');
  
  if (!total || !distance || total <= 0 || distance <= 0) {
    result.classList.remove('show');
    return;
  }
  
  const costPerKM = (total / distance).toFixed(2);
  const cost100km = (costPerKM * 100).toFixed(2);
  const cost1000km = (costPerKM * 1000).toFixed(2);
  
  result.innerHTML = `
    <h4>💡 Cost Per KM Analysis:</h4>
    <p>Total Cost: <strong>₹${total}</strong></p>
    <p>Distance: <strong>${distance} km</strong></p>
    <hr style="margin: 10px 0; border: none; border-top: 1px solid #E0E0E0;">
    <p style="font-size: 1.2rem;"><strong>Cost per KM: <span class="result-value">₹${costPerKM}/km</span></strong></p>
    <p>Cost for 100 km: ₹${cost100km}</p>
    <p>Cost for 1,000 km: ₹${cost1000km}</p>
  `;
  result.classList.add('show');
}

// Original Calculator Functions (with button click)
function calcFuel() {
  calcFuelLive();
}

function calcTrip() {
  calcTripLive();
}

function calcCostPerKM() {
  calcCostPerKMLive();
}

// Mobile Menu Toggle
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Cookie Consent
function showCookieBanner() {
  if (!localStorage.getItem('cookieConsent')) {
    document.getElementById('cookie-banner').classList.add('show');
  }
}

function acceptCookies() {
  localStorage.setItem('cookieConsent', 'accepted');
  document.getElementById('cookie-banner').classList.remove('show');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  showCookieBanner();
  
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // Add enter key support for calculators
  document.querySelectorAll('.calc-card input').forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const card = e.target.closest('.calc-card');
        const button = card.querySelector('.calc-btn');
        if (button) button.click();
      }
    });
  });
});
