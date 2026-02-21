// Calculator Functions
function calcFuel() {
  const distance = parseFloat(document.getElementById('fc-distance').value);
  const price = parseFloat(document.getElementById('fc-price').value);
  const mileage = parseFloat(document.getElementById('fc-mileage').value);
  
  if (!distance || !price || !mileage) {
    alert('Please fill all fields');
    return;
  }
  
  const fuelRequired = (distance / mileage).toFixed(2);
  const fuelCost = (fuelRequired * price).toFixed(2);
  
  const result = document.getElementById('fc-result');
  result.innerHTML = `
    <h4>Result:</h4>
    <p>Fuel Required: <span class="result-value">${fuelRequired} L</span></p>
    <p>Total Cost: <span class="result-value">₹${fuelCost}</span></p>
  `;
  result.classList.add('show');
}

function calcTrip() {
  const distance = parseFloat(document.getElementById('tc-distance').value);
  const price = parseFloat(document.getElementById('tc-price').value);
  const mileage = parseFloat(document.getElementById('tc-mileage').value);
  const driver = parseFloat(document.getElementById('tc-driver').value) || 0;
  const toll = parseFloat(document.getElementById('tc-toll').value) || 0;
  
  if (!distance || !price || !mileage) {
    alert('Please fill distance, fuel price, and mileage');
    return;
  }
  
  const fuelCost = (distance / mileage) * price;
  const total = fuelCost + driver + toll;
  
  const result = document.getElementById('tc-result');
  result.innerHTML = `
    <h4>Trip Cost Breakdown:</h4>
    <p>Fuel: <span class="result-value">₹${fuelCost.toFixed(2)}</span></p>
    <p>Driver: <span class="result-value">₹${driver.toFixed(2)}</span></p>
    <p>Toll: <span class="result-value">₹${toll.toFixed(2)}</span></p>
    <p><strong>Total: <span class="result-value">₹${total.toFixed(2)}</span></strong></p>
  `;
  result.classList.add('show');
}

function calcCostPerKM() {
  const total = parseFloat(document.getElementById('cpk-total').value);
  const distance = parseFloat(document.getElementById('cpk-distance').value);
  
  if (!total || !distance) {
    alert('Please fill both fields');
    return;
  }
  
  const costPerKM = (total / distance).toFixed(2);
  
  const result = document.getElementById('cpk-result');
  result.innerHTML = `
    <h4>Result:</h4>
    <p>Cost per KM: <span class="result-value">₹${costPerKM}/km</span></p>
    <p style="font-size:0.85rem;opacity:0.8;">Based on ₹${total} over ${distance} km</p>
  `;
  result.classList.add('show');
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
