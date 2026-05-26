
let cart = [];
let total = 0;

function addToCart(name, price){
  cart.push({name, price});
  total += price;
  renderCart();
}

function renderCart(){
  const list = document.getElementById('cart-list');
  list.innerHTML = '';

  cart.forEach(item=>{
    const li = document.createElement('li');
    li.textContent = `${item.name} - NT$${item.price}`;
    list.appendChild(li);
  });

  document.getElementById('total').textContent = `總金額：NT$${total}`;
}

function checkout(){
  const location = document.getElementById('location').value;

  if(cart.length === 0){
    alert('請先加入商品');
    return;
  }

  if(location.trim() === ''){
    alert('請輸入配送地點');
    return;
  }

  const status = document.getElementById('status');

  status.innerHTML = '店家正在準備餐點...';

  setTimeout(()=>{
    status.innerHTML = '配送員前往中...';
  },2000);

  setTimeout(()=>{
    status.innerHTML = `餐點已送達：${location}`;
  },4000);

  cart = [];
  total = 0;
  renderCart();
}
