import { createStackNavigator, createAppContainer, createDrawerNavigator} from "react-navigation";
import Note from "./Screen/Note";
import Home from "./Screen/Home";

const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Details: Note
    }
    );

const drawerNotes = createDrawerNavigator(
	{
		Home: Home,
		Details: Note
	});


export default createAppContainer(drawerNotes);