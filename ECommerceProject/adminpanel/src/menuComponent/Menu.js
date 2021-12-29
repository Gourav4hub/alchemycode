import {Link} from 'react-router-dom'
function Menu()
{
    return <header className="tm-header" id="tm-header">
    <div className="tm-header-wrapper">        
        <div className="tm-site-header">            
            <h1 className="text-center">ECommerce Admin Panel</h1>
        </div>
        <nav className="tm-nav" id="tm-nav">            
            <ul>
                <li className="tm-nav-item active">
                <Link to="/brand"  className="tm-nav-link">
                    <i className="fas fa-home"></i>
                   Brand
                </Link></li>

                <li className="tm-nav-item active">
                    <Link to="/" className="tm-nav-link">
                    <i className="fas fa-home"></i>
                   Category
                </Link></li>

                <li className="tm-nav-item active">
                <Link to="/product"  className="tm-nav-link">
                    <i className="fas fa-home"></i>
                   Product
                </Link></li>

                
            </ul>
        </nav>
    </div>
</header>
}

export default Menu