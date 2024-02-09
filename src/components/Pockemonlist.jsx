import '../App.css'
import {useEffect, useState} from "react";
import axios from 'axios';
import Pockemon from './Pockemon';
export default function Pockemonlist(){
    const [pockemonList,setpockemonList]=useState([]);
    const [isLoading,setisLoading]=useState(true);
    const [pockedexUrl,setpockedexUrl]=useState('https://pokeapi.co/api/v2/pokemon');
    const [nextUrl,setnextUrl]=useState('');
    const [PreviousUrl,setPreviousUrl]=useState('');

    const [q, setQ] = useState("");
    const [searchParam] = useState(["name"]);

    async function downloadpockemon(){
        const response=await axios.get(pockedexUrl);
        const responsedata=response.data
        const responseResult=responsedata.results;
        const responseResultimg=responseResult.map((pockemo)=>axios.get(pockemo.url));
        const pockemonData=await axios.all(responseResultimg);
        const res=pockemonData.map((pockeData)=>{
            const pockemon=pockeData.data;
            return {
                name:pockemon.name,
                image: (pockemon.sprites.other) ? pockemon.sprites.other.dream_world.front_default : pockemon.sprites.front_shiny,
                id:pockemon.id
            }
        })
        setnextUrl(responsedata.next);
        setPreviousUrl(response.data.previous);
        setpockemonList(res);
        setisLoading(false);
    }
    useEffect(()=>{
        downloadpockemon()
    },[pockedexUrl])


    function search(items) {
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }


    return(
        
        <div className="pockemon-list">
                        <div className="wrapperclass">
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search"
                                placeholder="Enter pockemon..."
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                            />
                            {/* <span className="sr-only">Search Pokemon by name.</span> */}
                        </label>
                        </div>

                        
                        
            <div className="pockemon-list-wrapper">

            {(isLoading)?'Loading....':
            search(pockemonList).map((p)=><Pockemon name={p.name} image={p.image} id={p.id}/>)
            }      
            </div>
            <div className='pagination'> 
            <button style={{'padding':'20px'}}    disabled={PreviousUrl==null} onClick={()=>setpockedexUrl(PreviousUrl)}>
                Previous
            </button>
            <button style={{'padding':'20px'}}  disabled={nextUrl==null} onClick={()=>setpockedexUrl(nextUrl)}>
                Next
            </button>
            </div>
        </div>
    )
}