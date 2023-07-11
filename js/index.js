var img_feature=document.querySelector('.img-feature');
var listImg=document.querySelectorAll('.smallDivs img');
var prev=document.querySelector('.icon-left');
var next=document.querySelector('.icon-right');
var prev=document.querySelector('.icon-left');

var current=0;
var itemBorders = document.querySelectorAll('.item-border-yellow');
  function update(index){
    current=index;
    img_feature.src=listImg[index].getAttribute('src');
    img_feature.style.opacity = '1';
    itemBorders.forEach((item, i) => {
      if (i === index) {
        item.classList.add('yellow');
      } else {
        item.classList.remove('yellow');
      }
    });
  }
  listImg.forEach((imgElement, index)=>{
    imgElement.addEventListener('click',e=>{
        img_feature.style.opacity="0"
        
    })
  })
 next.addEventListener('click',e=>{
    if(current==listImg.length-1){
        current=0;
    }else{
        current++;
    }
    update(current)
 })
 prev.addEventListener('click',e=>{
    if(current==0){
        current=listImg.length-1;
    }else{
        current--;
    }
    update(current)
 })
 itemBorders.forEach((border, index) => {
  border.addEventListener('click', function() {
    // Xóa class 'yellow' từ tất cả '.item-border-yellow'
    itemBorders.forEach(border => {
      border.classList.remove('yellow');
    });

    // Thêm class 'yellow' vào '.item-border-yellow' được click
    this.classList.add('yellow');

    // Hiển thị hình ảnh tương ứng
    img_feature.src = listImg[index].src;
    img_feature.style.opacity = '1';
  });
});
 update(0);


 var list=document.querySelector('.header_app-list-list');
 var app_center=document.querySelector('.app_center1');

 var count=0;
 list.addEventListener('click', function() {
  //app_center.style.opacity="1"
  if (count === 0) {
    app_center.style.display = "none";
    count++;
  } else {
    app_center.style.display = "block";
    count = 0;
  }
});
const auth_form = document.querySelector('.auth-form');
const auth_form_1 = document.querySelector('.auth-form-register');
const cover_layer = document.querySelector('.cover_layer');
const login = document.querySelector('.login-button');
const register_button = document.querySelector('.register-button');
const auth_form__header = document.querySelector('.auth-form__header .fa-xmark');
const auth_form__header_second = document.querySelector('.auth-form__header_second .fa-xmark');
const link_register=document.querySelector('.auth-form__policy-link span');
const link_register_second=document.querySelector('.auth-form__policy-link_second span');

login.addEventListener('click', function() {
  auth_form.style.display = "block";
  cover_layer.style.display = "block";
});

register_button.addEventListener('click', function() {
  auth_form_1.style.display = "block";
  cover_layer.style.display = "block";
});

auth_form__header.addEventListener('click', function() {
  auth_form.style.display = "none";
  cover_layer.style.display = "none";
});
auth_form__header_second.addEventListener('click', function() {
  auth_form_1.style.display = "none";
  cover_layer.style.display = "none";
});
link_register.addEventListener('click', function() {
  auth_form.style.display = "none";
  auth_form_1.style.display="block";
});
link_register_second.addEventListener('click', function() {
  auth_form.style.display = "block";
  auth_form_1.style.display="none";
});



var mockData=[{
  name:'Máy tính Arvn cao cấp',
  price:'12.000.000',
  picture:'image/arvn.webp',
  sale: '25.000.000đ',
},{
  name:'Laptop Asus dành cho sinh viên',
  price:'20.000.00',
  sale:'25.000.000đ',
  picture:'image/asus.webp'
},{
  name:'Laptop Dell Latilude 350',
  price:'17.500.000',
  sale:'19.990.000đ',
  picture:'image/vivobook.webp'
},{
  name:'MSD DS502',
  sale:'',
  price:'999.000',
  picture:'image/MSD 502.webp'
},{
  name:'Microphone Thromax',
  price:'999.999',
  picture:'image/microphone.webp',
  sale:''
},{
  name:'Laptop Asus VivoBook X15EA',
  sale:'16.790.00đ',
  price:'16.000.000',
  picture:'image/vivobook.webp'
},{
  name:'Balo Laptop Gearvn 14',
  price:'350.000',
  sale:'',
  picture:'image/balo.webp'
},{
  name:'Laptop Dell Vostro 3420',
  price:'16.990.000',
  sale:'17.000.000đ',
  picture:'image/vtro.webp'
},{
  name:'Tai nghe Streelseries Tusq',
  price:'590.000',
  sale:'990.000đ',
  picture:'image/tainghe1.webp'
},{
  name:'Tai nghe LogitechG633S',
  price:'2.990.000',
  sale:'4.000.000đ',
  picture:'image/tainghe1.webp'
},{
  name:'Màn hình máy tính Acer KG251Q',
  price:'590.000.000',
  sale:'',
  picture:'image/manhinh1.webp'
},{
  name:'Màn hình SamSung LS27R350FHEXXV 27" 75Hz',
  price:'3.290.000',
  sale:'5.000.000đ',
  picture:'image/manhinh2.webp'
},{
  name:'Appple Mac Studio M1 Max',
  price:'51.990.000',
  sale:'54.990.000',
  picture:'image/mac.webp'
},{
  name:'Chuột Pulsar X2 Red',
  price:'2.990.000',
  sale:'',
  picture:'image/chuot1.webp'
},{
  name:'Chuột Razer Corbra Pro',
  price:'3.390.000',
  sale:'',
  picture:'image/chuot2.webp'
},{
  name:'Lót chuột Razer Acari',
  price:'1.490.000',
  sale:'',
  picture:'image/lot1.webp'
},{
  name:'Phụ kiện ROG Ally Travel Case',
  price:'790.000',
  sale:'',
  picture:'image/phukien1.webp'
},{
  name:'Bộ phụ kiện Razer',
  price:'390.000',
  sale:'',
  picture:'image/phukien2.webp'
},{
  name:'Bàn Gaming E-Dra EGT1610AR',
  price:'2.390.000',
  sale:'2.999.000đ',
  picture:'image/ban1.webp'
},{
  name:'Bàn Gaming E-Dra EGT1610AR',
  price:'2.490.000',
  sale:'2.999.000đ',
  picture:'image/ban2.webp'
},{
  name:'Ghế Cougar Armor Titan',
  price:'7.590.000',
  sale:'8.880.000đ',
  picture:'image/ghe1.webp'
},{
  name:'Ghế Cougar Armor Titan',
  price:'3.990.000',
  sale:'4.000.000đ',
  picture:'image/ghe2.webp'
},{
  name:'Bàn phím Dare-U LK185',
  price:'170.000',
  sale:'299.000đ',
  picture:'image/banphim1.webp'
},{
  name:'Bàn phím Dare-U LK135',
  price:'240.000',
  sale:'',
  picture:'image/banphim2.webp'
},{
  name:'Switch mạng LinhKsys LG108-AP 8 cổng',
  price:'1.170.000',
  sale:'1.299.000đ',
  picture:'image/switch1.webp'
},{
  name:'Switch mạng LinhKsys LG124-AP 24 cổng',
  price:'7.550.000',
  sale:'',
  picture:'image/switch2.webp'
}]


var product = document.querySelector('.header_app-seacher-list');

var showmore_noHave=document.createElement('div');
showmore_noHave.classList.add('show-more-more');
showmore_noHave.innerHTML = '<p>Không tìm thấy</p>';

var showMore = document.createElement('div');
showMore.classList.add('show-more');
showMore.innerHTML = '<p>Xem thêm sản phẩm</p>';
var maxItemsToShow = 4;
var minItemsToShow = 0;




function updateProductList() {
  var txtSearch = searchInput.value.trim().toLowerCase();
  var visibleItemCount = 0;
  var txtSearch_raw = searchInput.value;

  mockData.forEach((item, index) => {
    var nextProduct = product.getElementsByClassName('product')[index];
    var productName = nextProduct.querySelector('.name').innerText.toLowerCase();

    if (productName.includes(txtSearch)) {
      nextProduct.style.display = ''; // Hiển thị sản phẩm nếu tên phù hợp
      visibleItemCount++;
    } else {
      nextProduct.style.display = 'none'; // Ẩn sản phẩm nếu tên không phù hợp
    }

    if (visibleItemCount > maxItemsToShow) {
      nextProduct.style.display = 'none'; // Ẩn sản phẩm nếu số lượng hiển thị vượt quá maxItemsToShow
    }
  });

  if (visibleItemCount > maxItemsToShow) {
    showMore.style.display = 'block'; // Hiển thị nút "Xem thêm" nếu số sản phẩm hiển thị vượt quá maxItemsToShow
  } else {
    showMore.style.display = 'none'; // Ẩn nút "Xem thêm" nếu số sản phẩm hiển thị không vượt quá maxItemsToShow
  }

  if (visibleItemCount ===0) {
    showmore_noHave.style.display = 'block'; // Hiển thị nút "Xem thêm" nếu số sản phẩm hiển thị vượt quá maxItemsToShow
  } else {
    showmore_noHave.style.display = 'none'; // Ẩn nút "Xem thêm" nếu số sản phẩm hiển thị không vượt quá maxItemsToShow
  }
  
  if(txtSearch!==''){
    product.style.display='block';
  }
  else{
    product.style.display='none';
  }
  
}


var searchInput = document.querySelector('.header_app-seacher input');
searchInput.addEventListener('input', updateProductList);

searchInput.addEventListener('blur',function(){
  searchInput.value='';
  product.style.display='none';
})
mockData.forEach((item, index) => {
  var nextProduct = document.createElement('div');
  nextProduct.classList.add('product');
  nextProduct.innerHTML = `
    
    <a href="#">
    <div style="display:flex;width: 400px;justify-content: space-between;  padding:0px 10px">
        <div class="info" style="align-items: center; height: 50px;padding-top:5px">
            <p class="name" style="font-size:15px;padding:0 0 4px 0;color:black">${item.name}</p>
            <div style="display:flex">
            <span class="price" style="color: red; font-size:15px;padding-right:5px">${item.price}</span><span style="color:red;font-size:12px;padding-right:10px;margin-left:-4px;margin-top:2px;font-weight:bolder;text-decoration: underline;">đ</span>
            <span class="price" style="color: gray; font-size:15px;padding-left:5px;text-decoration-line:line-through">${item.sale}</span>
            </div>
        </div>
        <img src="${item.picture}" alt="" style="width:30px; height:30px; margin-top:6px; margin-right:25px; padding:4px; border: 1px solid lavender">
       
    </div>
    <div style="border-top: 1px solid lavender;
    width: 398px;
    height: 1px;padding-bottom:4px"></div>
    </a>
  `;
  product.appendChild(nextProduct);

  if (index >= maxItemsToShow) {
    nextProduct.style.display = 'none'; // Ẩn các sản phẩm vượt quá maxItemsToShow ban đầu
  }
});

product.appendChild(showMore);
product.appendChild(showmore_noHave)


// Validate form đăng ký
const form=document.getElementById('form');
const user_name=document.querySelector('.auth-form_input_user');
  const user_email=document.querySelector('.auth-form_input_email');
  const user_pass=document.querySelector('.auth-form_input_pass');
form.addEventListener('submit',e=>{
  e.preventDefault();
  validateInput();
})
const setError=(element,message)=>{
  const inputControl=element.parentElement;
  const errorDisplay=inputControl.querySelector('.error');

  errorDisplay.innerText=message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}
const setSuccess=element=>{
  const inputControl=element.parentElement;
  const errorDisplay=inputControl.querySelector('.error')
  errorDisplay.innerText=''
  inputControl.classList.add('success');
  inputControl.classList.remove('error')
}
const isValidateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const validateInput=()=>{
  const usernamevalue=user_name.value.trim();
  const emailvalue=user_email.value.trim();
  const passvalue=user_pass.value.trim();

  if(usernamevalue===''){
    setError(user_name,'Username is required');
  }else{
    setSuccess(user_name);
  }

  if(emailvalue===''){
    setError(user_email,'Username is required');
  }else if(!isValidateEmail(emailvalue)){
    setError(user_email, 'Provide a valid email address')
  }
  else{
    setSuccess(user_email);
  }

  if(passvalue===''){
    setError(user_pass,'Pass is required');
  }else if( passvalue.length<8){
    setError(pass,'Password must be at least 8 character.')
  }else{
    setSuccess(user_pass)
  }

}



user_name.addEventListener('blur', validateInput);
user_email.addEventListener('blur', validateInput);
user_pass.addEventListener('blur', validateInput);
//login

const form_login = document.getElementById('form_login');
const user_email_login = document.querySelector('.auth-form_input_email_login');
const user_pass_login = document.querySelector('.auth-form_input_pass_login');

form_login.addEventListener('submit', e => {
  e.preventDefault();
  validateInput_login();
});

const setError_login = (element, message) => {
  const inputControl_login = element.parentElement;
  const errorDisplay_login = inputControl_login.querySelector('.error');

  errorDisplay_login.innerText = message;
  inputControl_login.classList.add('error');
  inputControl_login.classList.remove('success');
};

const setSuccess_login = element => {
  const inputControl_login = element.parentElement;
  const errorDisplay_login = inputControl_login.querySelector('.error');

  errorDisplay_login.innerText = '';
  inputControl_login.classList.add('success');
  inputControl_login.classList.remove('error');
};

const isValidateEmail_login = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInput_login = () => {
  const emailvalue_login = user_email_login.value.trim();
  const passvalue_login = user_pass_login.value.trim();

  if (emailvalue_login === '') {
    setError_login(user_email_login, 'Username is required');
  } else if (!isValidateEmail_login(emailvalue_login)) {
    setError_login(user_email_login, 'Provide a valid email address');
  } else {
    setSuccess_login(user_email_login);
  }

  if (passvalue_login === '') {
    setError_login(user_pass_login, 'Pass is required');
  } else if (passvalue_login.length < 8) {
    setError_login(user_pass_login, 'Password must be at least 8 characters.');
  } else {
    setSuccess_login(user_pass_login);
  }
};

user_email_login.addEventListener('blur', validateInput_login);
user_pass_login.addEventListener('blur', validateInput_login);
