import './bar.css'

function Bar(props) {
    
    return(
        <div style={{
            height:props.height,
            background:props.background,
        }} className="bar">

        </div>
    )
}

export default Bar