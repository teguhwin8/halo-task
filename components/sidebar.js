import ClipboardList from "./hero_icons/clipboardList";
import ViewGrid from "./hero_icons/viewGrid";
import Logo from "./logo";
import Menu from "./menu";

function Sidebar() {
	const menus = [
		{
			title: "Lobby",
			path: "/",
			icon: <ViewGrid />,
		},
		{
			title: "Task",
			path: "/task",
			icon: <ClipboardList />,
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
