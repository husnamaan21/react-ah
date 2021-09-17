import React,{useState,useEffect} from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashAlt,faPenAlt,faPen,faEdit} from '@fortawesome/free-solid-svg-icons';
import Header from './header';
export default function Todo() {
    const [data,setData]=useState('')
    const [item,setitem]=useState(getLocal())
    const [toggle,settoggle]=useState(true)
    const [store,setStore]=useState()
    function onSubmit(e){
       
        if(data){
            e.preventDefault()
            const input={id :new Date().getTime().toString(), task:data}
            setitem([input,...item])
            setData("")
            settoggle(true)

        }
        else if(data && !toggle){
            setitem( item.map((v)=>{
                if(v.id === store){
                   return {...v,task:data}

                }
                return v;
            }))
           
          
        }
      

    }
    function getLocal(){
        let list = localStorage.getItem('list')
        console.log(list)
     
        if(list){
            return JSON.parse(localStorage.getItem('list'))
        }else{
            return []
        }
    }
    function del(index){
        const delItem = item.filter((val,ind)=> {
            return index!== val.id
        })
         setitem(delItem)
    }
    function edit(index){
        const editItem = item.find((v,i)=>{
        return index ===v.id
      
      
        })
        console.log(editItem)
        settoggle(false)
        setData(editItem.task)
        setStore(index)
       
       
       
    }
    function deleteAll(){
        setitem([])
    }
  
   useEffect(() => {
  localStorage.setItem('list',JSON.stringify(item))
     
   }, [item])
    return (
        <div className="wrapper">
            <Header />
            <div className="inner">
             
          
            <input type="text" placeholder=" Add Task... &#x270D;" onChange={(e)=>setData(e.target.value)} value={data} />
            <div className="btns">
            <button onClick={onSubmit}>{toggle ? <FontAwesomeIcon  icon={faPlus} /> : <FontAwesomeIcon icon={faEdit} />}</button>
            <button onClick={deleteAll}><FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>
            </div>
            {item.map((v,i)=><div className="list"  key={v.id}>
                <li>{v.task}</li>
                <div className ="btns"><button onClick={()=>del(v.id)}><FontAwesomeIcon icon={faTrashAlt} /></button
                ><button onClick={()=>edit(v.id)}> <FontAwesomeIcon icon={faPen} /></button>
                </div></div>)}
       
        </div>
    )
}
