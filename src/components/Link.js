import useNavigation from "../hooks/use-navigation";

function Link({ children, to }){
    const { navigate } = useNavigation();

    const handleClick = (event) => {
        if(event.ctrlkey || event.metakey){
            return;
        }

        event.preventDefault();
        
        navigate(to);
    }
    return (
        <a href={to} onClick={handleClick}> 
            {children} 
        </a>
    );
};
export default Link;