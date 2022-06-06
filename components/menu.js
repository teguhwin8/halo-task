import Link from "next/link";
import { useRouter } from "next/router";

function Menu(props) {
	const { path, title, icon } = props;
	console.log(props);
	const router = useRouter();
	const classes =
		"hover:bg-slate-200 flex items-center transition-all duration-200 px-3 py-2 cursor-pointer rounded-md font-medium";
	const activeClasses = "bg-slate-200 " + classes;

	return (
		<>
			{/* <div className="p-4">
				<Link href={path}>
					<a>
						<div className={router.pathname === path ? activeClasses : classes}>
							{icon} {title}
						</div>
					</a>
				</Link>
			</div> */}
		</>
	);
}

export async function getServerSideProps(context) {
	return {
		props: { props }, // will be passed to the page component as props
	};
}

export default Menu;
