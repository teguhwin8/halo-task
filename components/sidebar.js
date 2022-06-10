import { FcBullish } from "react-icons/fc";
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
			path: "/project",
			icon: <FcBullish />,
		},
		{
			title: "Task",
			path: "/task",
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
