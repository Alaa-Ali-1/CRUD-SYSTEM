var input1 = document.getElementById('btn1');
var input2 = document.getElementById('btn2');
var input3 = document.getElementById('btn3');
var input4 = document.getElementById('btn4');
let update=document.getElementById('update');
let UpdateIndex;
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
} 

let product=[];
if (localStorage.products != null) {
  product = JSON.parse(localStorage.products);

  var cartona = ``;

  for (var i = 0; i < product.length; i++) {
    cartona += `
    <tr>
                <td>
                    ${product[i].name}
                </td>
                <td>
                ${product[i].age}
            </td>
            <td>
            ${product[i].email}
        </td>
        <td>
            ${product[i].mass}
        </td>
            
            
                <td>
                    <button onclick="DeleteItem(${i})" class="btn btn-outline-danger btn-sm")>DELETE</button>
                    <button onclick="UpdateDate(${i})" class="btn btn-outline-worning btn-sm">UPDATE</button>
                </td>
    </tr>            
    
    
    `;
  }
  document.getElementById("demo").innerHTML = cartona;
}
function Addproduct() {
  var productKey = {
    name: input1.value,
    age: input2.value,
    email: input3.value,
    mass: input4.value,
  }
  product.unshift(productKey);
  localStorage.setItem("products", JSON.stringify(product));
  readData();
}
function readData() {
  var cartona = ``;

  for (var i = 0; i < product.length; i++) {
    cartona += `
      <tr>
                  <td>
                      ${product[i].name}
                  </td>
                  <td>
                  ${product[i].age}
              </td>
              <td>
              ${product[i].email}
          </td>
          <td>
              ${product[i].mass}
          </td>
              
          <td>
          <button onclick="DeleteItem(${i})" class="btn btn-outline-danger btn-sm ">DELETE</button>
          <button onclick="UpdateDate(${i})" class="btn btn-outline-worning btn-sm">UPDATE</button>
      </td>
  </tr>            
      
      
      `;
  }
  document.getElementById("demo").innerHTML = cartona;
}

function DeleteItem(index) {
  product.splice(index, 1);
  localStorage.products = JSON.stringify(product);
  //   DeleteItem();
  readData();
}

function search(search) {
  var cartona2 = ``;
  for (var i = 0; i < product.length; i++) {
    if (product[i].name.toLowerCase().includes(search.toLowerCase())) {
      cartona2 += `
    <tr>
                <td>
                    ${product[i].name.replace(search,`<span class="span1">${search}</span>`)}
                </td>
                <td>
                ${product[i].age}
            </td>
            <td>
            ${product[i].email}
        </td>
        <td>
            ${product[i].mass}
        </td>
            
        <td>
        <button onclick="DeleteItem(${i})" class="btn btn-outline-danger btn-sm ">DELETE</button>
        <button onclick="UpdateDate(${i})" class="btn btn-outline-worning btn-sm">UPDATE</button>
    </td>
</tr>            
    
    
    `;
    }
  }
  document.getElementById("demo").innerHTML = cartona2;
}

function ClearInput(){
  input1.value=""
  input2.value=""
  input3.value=""
  input4.value=""
  
}

function UpdateDate(index){
  update.style.display="inline"
  clearBtn.style.display="inline"
  click.style.display="none"
  input1.value=product[index].name
  input2.value=product[index].age
  input3.value=product[index].email
  input4.value=product[index].mass
  UpdateIndex=index;

}

function UpdateProduct(index){
  update.style.display="none"
  clearBtn.style.display="inline"
  click.style.display="inline"
  product[UpdateIndex].name=input1.value
  product[UpdateIndex].age=input2.value
  product[UpdateIndex].email=input3.value
  product[UpdateIndex].mass=input4.value
  localStorage.setItem("products", JSON.stringify(product));
  readData();
}