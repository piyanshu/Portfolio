import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

function Navlink({ children, to, className }){
    const { navigate } = useNavigation();

    const classes = classNames(className);

    const handleClick = (event) => {
        console.log(event);
        if(event.ctrlkey || event.metakey){
            return;
        }

        event.preventDefault();
        
        navigate(to);
    }
    return (
        <a href={to} onClick={handleClick} className={classes}> 
            {children} 
        </a>
    );
};
export default Navlink;