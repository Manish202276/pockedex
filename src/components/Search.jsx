import { useState } from 'react'
import '../App.css'
import useDebounce from './usedebounce'
export default function Search({updatepockemon}){
    const debounce=useDebounce((e)=>updatepockemon(e.target.value))
    return(
        <div className="wrapperclass">
            <input className="search"
            type="text"
            placeholder="enter pockemon..."
            onChange={debounce}
        />
        </div>
    )
}