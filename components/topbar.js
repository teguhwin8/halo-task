import Link from "next/link";
import { FcBusinessman } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

function TopBar() {
  return (
    <div className="flex text-sm items-center justify-between">
        <div className="breadcrumb flex items-center">
            <Link href="/">
                <a>Lobby</a>
            </Link>
            <FcNext className="mx-2" />
            <Link href="#">
                <a className="text-sky-600">Lobby</a>
            </Link>
        </div>
        <div className="relative">
            <div className="rounded-full cursor-pointer bg-red-200 w-8 h-8 flex justify-center items-center">
                <FcBusinessman className="w-6 h-6" />
            </div>
        </div>
    </div>
  )
}

export default TopBar