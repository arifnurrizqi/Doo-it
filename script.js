// Ambil referensi elemen canvas
var ctx = document.getElementById('myChart').getContext('2d');

// Inisialisasi grafik bar
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        datasets: [{
            label: 'Income',
            data: [4300, 4600, 5300, 5000, 7400, 6600, 4200, 3850, 4400, 3800, 6200],
            fill: false,
            borderColor: 'green',
            tension: 0.5
        },{
            label: 'Expenses',
            data: [3300, 3800, 5000, 3600, 4400, 6400, 6200, 5000, 3040, 4800, 4600],
            fill: false,
            borderColor: 'rgb(169 255 0)',
            tension: 0.5
        }
      ]
    },
    options: {
      scales: {
          y: {
              ticks: {
                  // Include a dollar sign in the ticks
                  callback: function(value, index, ticks) {
                      return '$' + value;
                  }
              }
          }
      }
  }
});

//navbar
document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});

const navItems = document.querySelectorAll('nav li');
const profileElement = document.querySelector('.profile');
const brandElement = document.querySelector('.brand');


navItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (index === 1 || index === 2) {
      profileElement.style.display = 'none';
      brandElement.style.fontSize = '34px'; 
    } else {
      profileElement.style.display = 'flex';
      brandElement.style.fontSize = '18px'; 
    }
  });
});

//visible unvisible passw
function toggleVisibility() {
  var newPassword = document.getElementById("new-password");
  var confirmPassword = document.getElementById("confirm-password");
  if (newPassword.type === "password") {
    newPassword.type = "text";
  } else {
    newPassword.type = "password";
  }
}



