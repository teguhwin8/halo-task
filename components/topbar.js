import { FcBusinessman } from "react-icons/fc";
import Breadcrumbs from "nextjs-breadcrumbs";

function TopBar() {
	return (
		<>
			<div className="flex text-sm items-center justify-between">
				<Breadcrumbs
					rootLabel="Home"
					useDefaultStyle={true}
					inactiveItemClassName="inactive"
					activeItemClassName="text-sky-600"
					listStyle={{ display: "flex", textTransform: "capitalize" }}
					inactiveItemStyle={{
						paddingRight: ".5rem",
						marginRight: ".5rem",
					}}
				/>

				<div className="relative">
					<div className="rounded-full cursor-pointer bg-red-200 w-8 h-8 flex justify-center items-center">
						<FcBusinessman className="w-6 h-6" />
					</div>
				</div>
			</div>
		</>
	);
}

export default TopBar;
