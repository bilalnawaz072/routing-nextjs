import { useRouter } from "next/router";


export default function Catch()
{
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <h1>You are reading article with id: {slug}</h1>
        </div>
    )
}