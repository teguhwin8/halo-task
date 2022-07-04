import Sidebar from "../sidebar";
import Footer from "../footer";
import Head from "next/head";
import TopBar from "../topbar";

export default function Layout({ children }) {
	return (
		<div>
			<Head>
				<title>Halo Task</title>
			</Head>
			<div className="flex">
				<div className="flex-none w-0 md:w-60 xl:w-80 transition-all duration-200 ease-in bg-white overflow-hidden border-r-2">
					<div className="flex flex-col h-screen">
						<div className="flex-1 overflow-y-auto overflow-x-hidden">
							<Sidebar />
						</div>
						<div className="flex-none w-full">
							<Footer />
						</div>
					</div>
				</div>
				<div className="flex-1 h-screen overflow-y-auto bg-slate-100">
					<div className="px-4 py-3 bg-white shadow-sm">
						<TopBar />
					</div>
					<div className="p-4">{children}</div>
				</div>
			</div>
		</div>
	);
}
