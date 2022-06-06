import Link from "next/link";

function Logo() {
	return (
		<Link href="/">
			<a>
				<h3 className="text-2xl font-bold text-center px-3 py-4 whitespace-nowrap">HALO TASK</h3>
			</a>
		</Link>
	);
}

export default Logo;
