import { Link, Router} from 'react-router-dom';
import '../App.css'
function Pockemon({name,image,id}){
    return(
            
        <div className="list-wrapper">
            <Link to={`/pockemon/${id}`}>
                <div className='name'>
                    {name}
                </div>
                <div className='imgdiv'>
                    <img src={image} className='img'/>
                </div>
            </Link>
        </div>
            
    )
}
export default Pockemon;