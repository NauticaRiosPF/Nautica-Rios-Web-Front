import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detalle() {
 const barcos = useSelector((state) => state.barcos);
 const { id } = useParams();
 const barco = barcos.find((x) => x.id === id);
 let keyId = 0;

 return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 bg-blue-200">
      <h2 className="text-xl font-bold mb-2" style={{ marginTop: "28px" }}>{barco.marcaBarco}</h2>
      <div className="flex">
        <div className="flex-1">
          {barco && 
             Object.keys(barco)?.map((key) => {
                if(key!='imagenes'){
                return (
                 <h3 key={keyId++} className="mb-2">
                    <b>{key}</b>: <span>{barco[key]}</span>
                 </h3>
                );}
              })
            }
        </div>
        <div className="flex-1">
          {barco.imagenes.map((img,i)=>{
            return (<img key={i}
            className="w-4/5 mx-auto mb-2"
            src={img}
          />)})}
          <h2 className="text-2xl font-bold mb-4">precio: ${barco.precio}</h2>
          <Link to="/todoslosbarcos" className="bg-gray-800 text-white font-bold py-2 px-4 rounded">
                Regresar
            </Link>
        </div>
      </div>
    </div>
 );
}
