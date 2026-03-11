// FleetGuide.in - Main JavaScript

// Mobile Menu Toggle
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Calculator Functions
document.addEventListener('DOMContentLoaded', function() {
  
  // Fuel Cost Calculator
  const fuelCalc = () => {
    const distance = parseFloat(document.getElementById('fuel-distance')?.value);
    const price = parseFloat(document.getElementById('fuel-price')?.value);
    const mileage = parseFloat(document.getElementById('fuel-mileage')?.value);
    const result = document.getElementById('fuel-result');
    
    if (!result) return;
    
    if (!distance || !price || !mileage || distance <= 0 || price <= 0 || mileage <= 0) {
      result.classList.remove('show');
      return;
    }
    
    const fuelReq = (distance / mileage).toFixed(2);
    const cost = (fuelReq * price).toFixed(2);
    
    result.innerHTML = `<strong>Fuel Required:</strong> ${fuelReq} L<br><strong>Total Cost:</strong> ₹${cost}`;
    result.classList.add('show');
  };
  
  // Trip Cost Calculator
  const tripCalc = () => {
    const distance = parseFloat(document.getElementById('trip-distance')?.value);
    const price = parseFloat(document.getElementById('trip-price')?.value);
    const mileage = parseFloat(document.getElementById('trip-mileage')?.value);
    const driver = parseFloat(document.getElementById('trip-driver')?.value) || 0;
    const toll = parseFloat(document.getElementById('trip-toll')?.value) || 0;
    const result = document.getElementById('trip-result');
    
    if (!result) return;
    
    if (!distance || !price || !mileage || distance <= 0 || price <= 0 || mileage <= 0) {
      result.classList.remove('show');
      return;
    }
    
    const fuel = (distance / mileage) * price;
    const total = fuel + driver + toll;
    
    result.innerHTML = `
      <strong>Fuel:</strong> ₹${fuel.toFixed(2)}<br>
      <strong>Driver:</strong> ₹${driver.toFixed(2)}<br>
      <strong>Toll:</strong> ₹${toll.toFixed(2)}<br>
      <strong>Total:</strong> ₹${total.toFixed(2)}
    `;
    result.classList.add('show');
  };
  
  // Cost Per KM Calculator
  const cpkCalc = () => {
    const total = parseFloat(document.getElementById('cpk-total')?.value);
    const distance = parseFloat(document.getElementById('cpk-distance')?.value);
    const result = document.getElementById('cpk-result');
    
    if (!result) return;
    
    if (!total || !distance || total <= 0 || distance <= 0) {
      result.classList.remove('show');
      return;
    }
    
    const costPerKM = (total / distance).toFixed(2);
    
    result.innerHTML = `
      <strong>Cost Per KM:</strong> ₹${costPerKM}/km<br>
      <strong>For 100 km:</strong> ₹${(costPerKM * 100).toFixed(2)}<br>
      <strong>For 1,000 km:</strong> ₹${(costPerKM * 1000).toFixed(2)}
    `;
    result.classList.add('show');
  };
  
  // Attach event listeners
  ['fuel-distance', 'fuel-price', 'fuel-mileage'].forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener('input', fuelCalc);
      elem.addEventListener('change', fuelCalc);
    }
  });
  
  ['trip-distance', 'trip-price', 'trip-mileage', 'trip-driver', 'trip-toll'].forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener('input', tripCalc);
      elem.addEventListener('change', tripCalc);
    }
  });
  
  ['cpk-total', 'cpk-distance'].forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener('input', cpkCalc);
      elem.addEventListener('change', cpkCalc);
    }
  });
  
  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message. We will respond to fleetguideprivacy@gmail.com shortly.');
      contactForm.reset();
    });
  }
  
});
