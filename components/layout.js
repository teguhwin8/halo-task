import Sidebar from "./sidebar";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({ children }) {
	return (
		<div>
			<Head>
				<title>Halo Task</title>
			</Head>
			<div className="flex">
				<div className="flex-none w-0 md:w-60 xl:w-80 transition-all duration-200 ease-in bg-slate-100 overflow-hidden">
					<div className="flex flex-col h-screen">
						<div className="flex-1 overflow-y-auto overflow-x-hidden">
							<Sidebar />
						</div>
						<div className="flex-none w-full">
							<Footer />
						</div>
					</div>
				</div>
				<div className="flex-1 h-screen overflow-y-auto">{children}</div>
			</div>
		</div>
	);
}
