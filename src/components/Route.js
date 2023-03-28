import useNavigation from "../hooks/use-navigation";

function Route({children, path}){
    const {currentPath} = useNavigation();
    
    if(currentPath === path){
        return children;
    }
    return null;

};
export default Route;