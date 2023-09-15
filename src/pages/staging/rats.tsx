import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react"
import { get_rats } from "../api/data"

export default function Rats({titles, descr}:any){
    return (
        <>
        <div className = "card">
            {titles.map((title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined) =>
                <div className = "card" key = {String(title)}>
                    {title}
                    <span style = {{float:"right", color:"var(--secondary)"}}>{descr[titles.indexOf(title)]}</span>
                </div>
            )}
        </div>
        </>
    )
}

export async function getServerSideProps(context: { req: { cookies: { [x: string]: any } } }){
    const rats = await get_rats(context.req.cookies.user)
    return { props: {
        titles:rats[0],
        descr:rats[1],
    } }
}