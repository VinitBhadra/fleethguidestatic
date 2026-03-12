// FleetGuide - Unit & Currency Converters

document.addEventListener('DOMContentLoaded', function() {
  
  // Conversion rates
  const distanceRates = {
    km: { km: 1, mi: 0.621371, m: 1000, ft: 3280.84 },
    mi: { km: 1.60934, mi: 1, m: 1609.34, ft: 5280 },
    m: { km: 0.001, mi: 0.000621371, m: 1, ft: 3.28084 },
    ft: { km: 0.0003048, mi: 0.000189394, m: 0.3048, ft: 1 }
  };
  
  const weightRates = {
    kg: { kg: 1, lb: 2.20462, ton: 0.001, oz: 35.274 },
    lb: { kg: 0.453592, lb: 1, ton: 0.000453592, oz: 16 },
    ton: { kg: 1000, lb: 2204.62, ton: 1, oz: 35274 },
    oz: { kg: 0.0283495, lb: 0.0625, ton: 0.0000283495, oz: 1 }
  };
  
  const volumeRates = {
    L: { L: 1, gal: 0.264172, ml: 1000, m3: 0.001 },
    gal: { L: 3.78541, gal: 1, ml: 3785.41, m3: 0.00378541 },
    ml: { L: 0.001, gal: 0.000264172, ml: 1, m3: 0.000001 },
    m3: { L: 1000, gal: 264.172, ml: 1000000, m3: 1 }
  };
  
  // Fixed exchange rates (in real app, would fetch from API)
  const currencyRates = {
    USD: { USD: 1, EUR: 0.92, GBP: 0.79, INR: 83.12, JPY: 149.50, CNY: 7.24 },
    EUR: { USD: 1.09, EUR: 1, GBP: 0.86, INR: 90.52, JPY: 162.89, CNY: 7.89 },
    GBP: { USD: 1.27, EUR: 1.16, GBP: 1, INR: 105.45, JPY: 189.87, CNY: 9.19 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0095, INR: 1, JPY: 1.80, CNY: 0.087 },
    JPY: { USD: 0.0067, EUR: 0.0061, GBP: 0.0053, INR: 0.56, JPY: 1, CNY: 0.048 },
    CNY: { USD: 0.138, EUR: 0.127, GBP: 0.109, INR: 11.49, JPY: 20.72, CNY: 1 }
  };
  
  // Distance Converter
  function convertDistance() {
    const val = parseFloat(document.getElementById('conv-dist-val').value);
    const from = document.getElementById('conv-dist-from').value;
    const to = document.getElementById('conv-dist-to').value;
    const result = document.getElementById('conv-dist-result');
    
    if (!val || val <= 0) {
      result.classList.remove('show');
      return;
    }
    
    const converted = (val * distanceRates[from][to]).toFixed(4);
    result.innerHTML = `<strong>${val} ${from} = ${converted} ${to}</strong>`;
    result.classList.add('show');
  }
  
  // Weight Converter
  function convertWeight() {
    const val = parseFloat(document.getElementById('conv-weight-val').value);
    const from = document.getElementById('conv-weight-from').value;
    const to = document.getElementById('conv-weight-to').value;
    const result = document.getElementById('conv-weight-result');
    
    if (!val || val <= 0) {
      result.classList.remove('show');
      return;
    }
    
    const converted = (val * weightRates[from][to]).toFixed(4);
    result.innerHTML = `<strong>${val} ${from} = ${converted} ${to}</strong>`;
    result.classList.add('show');
  }
  
  // Volume Converter
  function convertVolume() {
    const val = parseFloat(document.getElementById('conv-vol-val').value);
    const from = document.getElementById('conv-vol-from').value;
    const to = document.getElementById('conv-vol-to').value;
    const result = document.getElementById('conv-vol-result');
    
    if (!val || val <= 0) {
      result.classList.remove('show');
      return;
    }
    
    const converted = (val * volumeRates[from][to]).toFixed(4);
    result.innerHTML = `<strong>${val} ${from} = ${converted} ${to}</strong>`;
    result.classList.add('show');
  }
  
  // Currency Converter
  function convertCurrency() {
    const val = parseFloat(document.getElementById('conv-curr-val').value);
    const from = document.getElementById('conv-curr-from').value;
    const to = document.getElementById('conv-curr-to').value;
    const result = document.getElementById('conv-curr-result');
    
    if (!val || val <= 0) {
      result.classList.remove('show');
      return;
    }
    
    const converted = (val * currencyRates[from][to]).toFixed(2);
    result.innerHTML = `<strong>${val} ${from} = ${converted} ${to}</strong>`;
    result.classList.add('show');
  }
  
  // Attach event listeners for converters
  ['conv-dist-val', 'conv-dist-from', 'conv-dist-to'].forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener('input', convertDistance);
      elem.addEventListener('change', convertDistance);
    }
  });
  
  ['conv-weight-val', 'conv-weight-from', 'conv-weight-to'].forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener('input', convertWeight);
      elem.addEventListener('change', convertWeight);
    }
  });
  
  ['conv-vol-val', 'conv-vol-from', 'conv-vol-to'].forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener('input', convertVolume);
      elem.addEventListener('change', convertVolume);
    }
  });
  
  ['conv-curr-val', 'conv-curr-from', 'conv-curr-to'].forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener('input', convertCurrency);
      elem.addEventListener('change', convertCurrency);
    }
  });
  
});
