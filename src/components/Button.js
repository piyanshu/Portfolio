import classNames from "classnames";

function Button({children, className, type}){
    const classes = classNames(className);

    return <button type={type} className={classes} >
        {children}
    </button>
};

export default Button;