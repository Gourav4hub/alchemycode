import {useState} from 'react'

import DummyData from '../ProductData'

function Product()
{         
  const [products,setProducts] = useState(DummyData)             
  
  return <div className='Product'>
      <table className='table table-hovered'>
          <thead>
              <tr>
                  <th>S.No.</th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Company</th>
                  <th>Price</th>
                  <th>Discount</th>
              </tr>
          </thead>
          <tbody>
              {products.map((prod,index)=>
              {
                return <tr>
                    <td>{index+1}</td>
                    <td><img src={prod.image}/></td>
                    <td>{prod.name}</td>
                    <td>{prod.company}</td>
                    <td>{prod.price}</td>
                    <td>{prod.discount}</td>
                </tr>
              })}
          </tbody>
      </table>
  </div>
}
export default Product