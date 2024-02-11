export default function useDebounce(cb,delay=2000){
    let timerid;
    return ( ...argument)=>{
        clearInterval(timerid);
        timerid=setTimeout(()=>{
            cb(...argument);
        },delay);
    }
}