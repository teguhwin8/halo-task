import { FcFolder } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import Logo from "./logo";
import Menu from "./menu";

function Sidebar() {
	const menus = [
		{
			title: "Lobby",
			path: "/",
			icon: <FcHome />,
		},
		{
			title: "Project",
			path: "/projects",
			icon: <FcFolder />,
		},
		{
			title: "Task",
			path: "/tasks",
			icon: <FcTodoList />,
		},
	];
	return (
		<div>
			<Logo />
			{menus.map((menu, index) => (
				<Menu key={index} menu={menu} />
			))}
		</div>
	);
}

export default Sidebar;
