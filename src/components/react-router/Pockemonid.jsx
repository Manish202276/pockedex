import { useParams } from "react-router-dom"
import  axios  from "axios";
import { useEffect, useState } from "react";
export default function Pockemonid({Searchid}){
    const {id}=useParams();
    const [obj,setobj]=useState({});
    async function downloadpockemondetails(){
        if(Searchid){
            console.log(Searchid);
            const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${Searchid}`);
            const responsedata=response.data;
        setobj({
            img:responsedata.sprites.other.dream_world.front_default,
            name:responsedata.species.name,
            height:responsedata.height,
            weight:responsedata.weight
    })
        }else{
            const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);  
            const responsedata=response.data;
        setobj({
            img:responsedata.sprites.other.dream_world.front_default,
            name:responsedata.species.name,
            height:responsedata.height,
            weight:responsedata.weight
    })
        }
    }
    useEffect(()=>{downloadpockemondetails()},[])
    return(
        <div className="iddetailswrapper">
            <img src={obj.img}/>
            <div className="idcontent">
            <h1>name:{obj.name}</h1>
            <h1>Weight:{obj.weight}</h1>
            <h1>Height:{obj.height}</h1>
            </div>
        </div>
    )
}