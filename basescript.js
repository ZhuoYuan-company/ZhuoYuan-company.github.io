  var products = ["产品1", "产品2", "产品3", "产品4", "产品5"];
  var sidebar = document.querySelector('.sidebar');
  var menuToggle = document.querySelector('.menu-toggle');
  
  function searchProduct() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toUpperCase();
    var resultDiv = document.getElementById('searchResult');
    resultDiv.innerHTML = "";
    
    var filteredProducts = products.filter(function(product) {
      return product.toUpperCase().indexOf(filter) > -1;
    });
    
    filteredProducts.forEach(function(product) {
      var div = document.createElement('div');
      div.textContent = product;
      resultDiv.appendChild(div);
    });
  }
  
  document.getElementById('searchInput').addEventListener('input', searchProduct);
  
  function toggleSidebar() {
    sidebar.classList.toggle('active');
  }

  function showSidebar() {
    if (window.innerWidth >= 768) {
      sidebar.classList.add('active');
    }
  }

  function hideSidebar() {
    if (window.innerWidth >= 768) {
      sidebar.classList.remove('active');
    }
  }

  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768 && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
    }
  });

  // 初始化侧栏状态
  function initSidebar() {
    if (window.innerWidth >= 768) {
      sidebar.classList.remove('active');
    } else {
      sidebar.classList.add('active');
    }
  }

  initsidebar();
