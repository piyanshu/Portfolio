function Link({children, to}){
    return <a href={to}>
        {children}
    </a>
};

export default Link;