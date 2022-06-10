import Link from "next/link";
import { useRouter } from "next/router";

function Menu(props) {
	const { menu } = props;
	const router = useRouter();
	const classes =
		"hover:bg-slate-200 flex items-center transition-all duration-200 px-3 py-2 cursor-pointer rounded-md text-sm whitespace-nowrap";
	const activeClasses = "bg-slate-200 " + classes;

	return (
		<div className="px-4 mb-1">
			<Link href={menu.path}>
				<a>
					<div
						className={router.pathname === menu.path ? activeClasses : classes}
					>
						{menu.icon} {menu.title}
					</div>
				</a>
			</Link>
		</div>
	);
}

export default Menu;
