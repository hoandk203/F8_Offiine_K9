var products= [
    {
        id: 1,
        name: `San pham 1`,
        price: 1000
    },
    {
        id: 2,
        name: `San pham 2`,
        price: 2000
    },
    {
        id: 3,
        name: `San pham 3`,
        price: 3000
    },
    {
        id: 4,
        name: `San pham 4`,
        price: 4000
    }
]
var productTable= document.querySelector('.product-list table')
products.forEach(function(product){
    productTable.innerHTML += `<tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>
                        <input style="height: 25px;" type="number" value="1">
                        <button style="width: 100%; height: 25px;" class="btn-add">Them vao gio</button>
                    </td>
                </tr>`
})

var btnsAdd= document.querySelectorAll('.btn-add')
var cartContainer= document.querySelector('.cart')

var cartData= localStorage.getItem('cart')
cartData= JSON.parse(cartData)

renderCart()
////////////////////////////////////////////////////////
btnsAdd.forEach(function(btnAdd){
    btnAdd.addEventListener("click", function(){
        var productId= parseInt(btnAdd.parentElement.parentElement.firstElementChild.innerText)
        var quantityAdd= btnAdd.previousElementSibling.value
        
        
        if(cartData=== null){
            var cartProduct= {
                productId: productId,
                productQuantity: quantityAdd
            }
            cartData= []
            cartData.push(cartProduct)
            localStorage.setItem('cart', JSON.stringify(cartData))
            
        }else{
            var check= false
            cartData.forEach(function(cartDataProduct, productKey){
                
                if(cartDataProduct.productId === productId){
                    
                    
                    var currentQuantity= parseInt(cartDataProduct.productQuantity) + parseInt(quantityAdd)
                    
                    cartData[productKey] = {
                        productId: productId,
                        productQuantity: currentQuantity
                    }
                    check= true
                }
            })
            if(check===false){
                var cartProduct= {
                    productId: productId,
                    productQuantity: quantityAdd
                }
                cartData.push(cartProduct)
            }
            localStorage.setItem('cart', JSON.stringify(cartData))
        }
        renderCart()
    })
})

function updateCart(){
    var btnUpdate= document.querySelector('.btn-update')
    btnUpdate.addEventListener("click", function(){
        var inputAmout= document.querySelectorAll('.cart table input')
        
        inputAmout.forEach(function(amount, inputIndex){
            cartData.forEach(function(cartItem, index){
                
                if(inputIndex === index){
                    
                    cartData[index]= {
                        productId: cartItem.productId,
                        productQuantity: amount.value
                    }
                    localStorage.setItem('cart', JSON.stringify(cartData))
                    
                }
            })
        })
        renderCart()
    })
}
//////////////////////////////////////////////////
function deleteProduct(){
    var btnsDeleteProduct= document.querySelectorAll('.btn-delete-product')
    btnsDeleteProduct.forEach(function(btnDeleteProduct, index){
        btnDeleteProduct.addEventListener("click", function(){
            cartData.splice(index, 1)
            console.log(cartData);
            localStorage.setItem('cart', JSON.stringify(cartData))
            renderCart()
        })
    })
}
///////////////////////////////////////////////////
function deleteCart(){
    var btnDeleteCart= document.querySelector('.btn-delete-cart')
    btnDeleteCart.addEventListener("click", function(){
        cartData=null
        localStorage.removeItem("cart")
        renderCart()
    })
}
///////////////////////////////////////////////////
function renderCart(){
    if(!cartData || cartData.length===0){
        cartContainer.innerHTML= `<p>Gio hang khong co san pham</p>`
    }else{
        cartContainer.innerHTML= `<table id="cart-table" cellpadding="0" cellspacing="0" border="1" width="100%">
                    <tr>
                        <th>STT</th>
                        <th>Ten san pham</th>
                        <th>Gia</th>
                        <th width="20%">So luong</th>
                        <th>Thanh tien</th>
                        <th>Xoa</th>
                    </tr>
                </table>
                <button class="btn-update">Cap nhat gio hang</button>
                <button class="btn-delete-cart">Xoa gio hang</button>`
                
                var cartTable= document.querySelector('.cart table')
                var totalAmout = 0
                var totalPrice= 0
                cartData.forEach(function(cartProduct){
                    totalAmout += parseInt(cartProduct.productQuantity)
                    products.forEach(function(product){
                        if(product.id === cartProduct.productId){
                            totalPrice += product.price * cartProduct.productQuantity
                            cartTable.innerHTML += `
                            <tr>
                                <td>${product.id}</td>
                                <td>${product.name}</td>
                                <td>${product.price}</td>
                                <td>
                                    <input value="${cartProduct.productQuantity}" type="number" style="width: 100%; height: 50px;">
                                </td>
                                <td>${product.price * cartProduct.productQuantity}</td>
                                <td>
                                    <button class="btn-delete-product" style="width: 100%; height: 50px;">Xoa</button>
                                </td>
                            </tr>`
                        }
                    })
                })
                cartTable.innerHTML +=`
                    <tr>
                        <td colspan="3">Tong</td>
                        <td>${totalAmout}</td>
                        <td colspan="2">${totalPrice}</td>
                    </tr>
                `
                updateCart()
                deleteCart()
                deleteProduct()
    }
}