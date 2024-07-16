import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
            <div id="content">
             <div id="title">
                <h1 id="my">My</h1>
                <h1 id="title-heroes"> Heroes</h1>
            </div>
            <div id="empty">

            </div>
            <div className="options">
                <div className="home-nav">
                     <Link to='/' style={{
                        color:'#fff',
                        textDecoration:'none'
                     }}>Home</Link>
                     </div>
           <div className="heroes-nav" >
           <Link to='/Heroes'  style={{
                        color:'#fff',
                        textDecoration:'none'
                     }}>Heroes</Link>

           </div>
              
              
            </div>
        </div>
       );
}
 
export default Navbar;