import { useDispatch } from "react-redux"
import { VACIAR_CARRITO } from "../../redux/actions"
import { useEffect } from "react"



export default function successPage(){
    const dispatch = useDispatch()
    const n = window.location.href = "https://nautica-rios-pf-deploy.netlify.app/home"
    //Vaciar carrito
    useEffect(()=>{
        dispatch(VACIAR_CARRITO())}
        ,[])

    setTimeout(() => {
        n
        }, "1000");


    return(
        <div>
            <h1>Success</h1>
        </div>
    ) 

}