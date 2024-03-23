

// this component is used exclusively to render a dropdown menu, having a name ("option") and a link to redirect ("redirection")
function Dropdown({select , toggle}: {select: Array<{option:string, redirection:string}>, toggle:boolean}) {

  
  return (
    <ul>
    {select.map((sltc)=>{
        return  ( 
         <li key={sltc.option}  className={toggle ? 'show-select' : 'hide'}>
            <a href={sltc.redirection}> {sltc.option} </a>
        </li>   )
    })}
   </ul>
  )
}

export default Dropdown