import Navlink from "./Navlink";

function Navbar(){
    const links = [
        { label: 'Home', path: '/'},
        { label: 'About', path: '/about'},
        { label: 'Skills', path: '/skills'},
        { label: 'Projects', path: '/projects'},
        { label: 'Contact', path: '/contact'}
    ];
    const renderedLinks = links.map((link) => {
        return (
        <Navlink key={link.label} to={link.path} className='mx-6'>
            { link.label }
        </Navlink>
    )});
    return (
        <div className='text-right p-4 text-xl font-medium'>
            {renderedLinks}
        </div>
    )
};
export default Navbar;