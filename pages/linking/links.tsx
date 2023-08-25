import Link from "next/link";


export default function Page()
{
    return (
        <div className="flex flex-row space-x-2">
            <Link href={"/"}>Home</Link>
            <Link href={"/dashboard/about"} as={"/bilal"} prefetch={true}>About</Link>
            <Link href={"/dashboard/Love"}>Love</Link>
            <Link href={"/catch/lovely"}>Catch</Link>
        </div>
    )
}