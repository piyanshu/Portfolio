function Link({children, to}){
    const handleClick = (event) => {
        console.log(children);
    }
    return <a href={to} onClick={handleClick}>
        {children}
    </a>
};

export default Link;