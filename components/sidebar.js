import ClipboardList from "./hero_icons/clipboardList";
import Logo from "./logo";
import Menu from "./menu";

function Sidebar() {
	return (
		<div>
			<Logo />
			<Menu path="/task" title="Task" icon={<ClipboardList />} />
		</div>
	);
}

export default Sidebar;
