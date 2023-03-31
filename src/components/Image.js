import classNames from "classnames";

function Image({profile, className}){
    const classes = classNames(
        className
    );

    return <div>
        <img className={classes} src={profile} alt=''></img>
    </div>
};
export default Image;