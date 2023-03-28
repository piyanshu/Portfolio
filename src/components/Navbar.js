import Link from './Link';

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
        <Link key={link.label} to={link.path} className='mx-6'>
            { link.label }
        </Link>
    )});
    return (
        <div className='text-right p-6 bg-slate-500'>
            {renderedLinks}
        </div>
    )
};
export default Navbar;