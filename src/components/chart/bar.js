import './bar.css'

function Bar(props) {
    
    const handleclick = ()=>{
        props.onclick(props.spendings)
    }
    return(
        <div style={{
            height:props.height,
            background:props.background,
        }} onClick={handleclick} className="bar">

        </div>
    )
}

export default Bar