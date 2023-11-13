import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Commerce from '@chec/commerce.js';
const commerce = new Commerce('pk_test_546744be853293d45b6820501717738c32f21b5c92177');



function App() {

  const [products, setProducts] = useState([]);

    useEffect(() => {
        commerce.products.list().then((product) => {
            setProducts(product.data);
            console.log(product)
       
           
        });
       
    }, []);

  return (
 <div className='maiin'>


<h1>Test Below !</h1>
<h1 id='rot'>Top Deals</h1>
<div className="container">
{products.map((product) => (

  
 <div className='card1' key={product.id}>
<img id='sdd' src={product.image.url}></img><br/>
<p id='xcc'>{product.name}
<p id='sz'>430ml</p>
</p>

<button id='buttonx'>Add to Cart</button>
  
 </div>

 ))} 







 </div>
 
 <br></br>
<h1>Energy Drinks </h1>

<div className="container">
{products.map((product) => (

  
 <div className='card1' key={product.id}>
<img id='sdd' src={product.image.url}></img><br/>
<p id='xcc'>{product.name}
<p id='sz'>430ml</p>
</p>

<button id='buttonx'>Add to Cart</button>
  
 </div>

 ))} 







 </div>


 <div>
 

 


  
</div>

 
 
 
 
 
 
 
 
 
 </div>
  
  
  
  
  
  );
}

export default App;
