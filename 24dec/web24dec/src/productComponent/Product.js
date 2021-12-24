import { useState } from 'react'
import './Product.css'
import DummyData from '../ProductData'

function Product() 
{
    const [products, setProducts] = useState(DummyData)

    const fetchCategory = (event)=>
    {
        var category = event.target.innerHTML.toLowerCase()
        setProducts(DummyData.filter(prod=>category=='all'?true:prod.category==category))
    }

    const addCart = (event)=>
    {
        var pid = event.target.getAttribute('data-id');        
    }
    return <div className='Product'>

        <div className='row'>
            <div className='col-lg-3 text-center filterdiv'> 
                <h2>All Category</h2>               
                <hr/>
                    <h5 onClick={fetchCategory}>All</h5> <br/>
                    <h5 onClick={fetchCategory}>TV</h5> <br/>
                    <h5 onClick={fetchCategory}>AC</h5><br/>
                    <h5 onClick={fetchCategory}>Fan</h5>    <br/>            
            </div>
            <div className='col-lg-9'>
                <table className='table table-hovered'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Company</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((prod, index) => {
                            return <tr>
                                <td>{index + 1}</td>
                                <td><img src={prod.image} /></td>
                                <td>{prod.name}</td>
                                <td>{prod.company}</td>
                                <td>{prod.price}</td>
                                <td>{prod.discount}</td>
                                <th>
                                    <button onClick={addCart} 
                                    data-id={prod.pid}
                                    className='btn btn-success'>Add Cart</button>
                                </th>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>


    </div>
}
export default Product