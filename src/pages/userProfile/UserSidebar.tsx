import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';


const UserSidebar = () => {
    return (
        <div>
            {/* Logo */}
            <NavLink to="/" className='flex justify-center items-center gap-2 p-5 text-3xl font-semibold'>
                <img className='w-12' src={logo} alt="" />
                <h1 id='logo'>Laivaly</h1>
            </NavLink>

            {/* Nav Item */}
        </div>
    );
};

export default UserSidebar;