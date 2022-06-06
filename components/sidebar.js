import ClipboardList from "./hero_icons/clipboardList";
import ViewGrid from "./hero_icons/viewGrid";
import Logo from "./logo";
import Menu from "./menu";

function Sidebar() {
	return (
		<div>
			<Logo />
			<Menu path="/" title="Lobby" icon={<ViewGrid />} />
			<Menu path="/task" title="Task" icon={<ClipboardList />} />
		</div>
	);
}

export default Sidebar;
