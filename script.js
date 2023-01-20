
const mainImage = document.querySelector(".main-image");

const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const image4 = document.querySelector(".image4");

const imageArray = [image1, image2, image3, image4];
imageArray.forEach(img => {
    img.addEventListener('click', (e)=> {
        
        switch (e.target.className) {
            case "img-1":
                mainImage.innerHTML = `<img src="/images/image-product-1.jpg" alt="" />`
                
                break;
            case "img-2":
                mainImage.innerHTML = `<img src="/images/image-product-2.jpg" alt="" />`
                
                break;
            case "img-3":
                mainImage.innerHTML = `<img src="/images/image-product-3.jpg" alt="" />`
                
                break;
            case "img-4":
                mainImage.innerHTML = `<img src="/images/image-product-4.jpg" alt="" />`
                
                break;
        
            
        }
    })
})

const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const quantityNumber  = document.querySelector('.number-quantity')
let count = 0
quantityNumber.innerHTML = count

const mainPrice  = document.querySelector('.main-price')
let shoesPrice = mainPrice.innerHTML
let mainpriceNum = Number(shoesPrice)
const addCartBtn = document.querySelector('.add-cart-btn')
minus.addEventListener('click',() =>{
    if(count <= 0){
        count = 0
        quantityNumber.innerHTML = count
    }
    else{
        count--
        quantityNumber.innerHTML = count

        console.log(mainpriceNum * count)
        
        
    }



}
)
plus.addEventListener('click',() =>{
    count++
    quantityNumber.innerHTML = count
    console.log(mainpriceNum * count)
}
)

addCartBtn.addEventListener('click', ()=> {
    cartHeader = document.querySelector('.cart-header')
    cartHeader.innerHTML = quantityNumber.innerHTML
    const showShoeQuan = document.querySelector('.cart-icon-quan')
    showShoeQuan.innerHTML = cartHeader.innerHTML
    const showShoeAmount = document.querySelector('.cart-icon-amount')
    showShoeAmount.innerHTML = mainpriceNum * count
})


const emptyCart = document.querySelector('.empty-cart')
const fullcart = document.querySelector('.full-cart')

const cart = document.querySelector('.cart')

cart.addEventListener('click', ()=> {
    const cartItem = document.querySelector('.cart-items')
    cartItem.classList.toggle('active')
    cartHeader = document.querySelector('.cart-header')
    const emptyCart = document.querySelector('.cart-empty')
    const fullCart = document.querySelector('.full-cart')
    const deleteCart = document.querySelector('.delete-cart')
    deleteCart.addEventListener('click', ()=> {
        fullCart.style.display = 'none'
        emptyCart.style.display = 'block'
        cartHeader.innerHTML = 0
        
    })
    if(cartHeader.innerHTML == '0'){
       fullCart.style.display = 'none';
       emptyCart.style.display = 'block';
    }
    else {
        emptyCart.style.display = 'none';
        fullCart.style.display = 'block'
    }
})


const openBtn = document.querySelector('.open')
const closeBtn  = document.querySelector('.close')
const menu  = document.querySelector('.absolute')

openBtn.addEventListener('click', ()=> {
setTimeout(() => {
        openBtn.style.display = 'none'
        closeBtn.style.display = 'block'
        menu.style.transform = 'translateX(0%)'
        
    }, 200);
})
closeBtn.addEventListener('click', ()=> {
setTimeout(() => {
        openBtn.style.display = 'block'
        closeBtn.style.display = 'none'
        menu.style.transform = 'translateX(-100%)'
        
    }, 200);
})