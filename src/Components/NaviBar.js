import { Link } from 'react-router-dom';

export default function NaviBar() {

    return (

        <nav className='navi-bar'>

            <div className='navi-bar-links'>
               
                <Link to='/blogs' className='blogs-link'>Blogs</Link>

            </div>

        </nav>
    );
}