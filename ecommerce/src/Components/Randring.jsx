import React, { useMemo, useRef, useState } from 'react'

function Useref() {
    const [timer,setTimer]=useState(0);
    const [search,setSearch]=useState('');
    const [list,setList]=useState(['apple','banana','grapes','orange','mango'])

    const timeRef=useRef(null);

    const startTimer=()=>{
        if(!timeRef.current){
            timeRef.current=setInterval(()=>{
                setTimer((prev)=>prev+1);
            },1000);
        }
    };
    const stopTimer=()=>{
        clearInterval(timerRef.current);
        timeRef.current=null;
    };

    const resetTimer=()=>{
        stopTimer();
        setTimer(0);
    };

    // useMemo
    const filterList=useMemo(()=>{
        console.log('filtered List...');
        return list.filter((item)=>item.toLowerCase().includes(search));
    },[search.list])
  return (
    <div>
        <h1>useRef</h1>
        <div>
            <h2>Timer(useRef)</h2>
            <p>Time:{timer} seconds</p>
            <button onClick={startTimer} style={{marginRight:'10px',padding:'8px 12px',cursor:'pointer'}}>Start</button>
            <button onClick={stopTimer} style={{marginRight:'10px',padding:'8px 12px',cursor:'pointer'}}>Stop</button>
            <button onClick={resetTimer} style={{marginRight:'10px',padding:'8px 12px',cursor:'pointer'}}>Reset</button>
        </div>
        <div>
            <h2>Filtered Section with useMemo</h2>
            <input type="text"  onClick={(e)=>setSearch(e.target.value)} style={{padding:'8px',fontSize:'16px',display:'block'}}/>
            <ul>
                {filterList.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Useref