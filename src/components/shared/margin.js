function Margin(props) {
      const hewi = `calc(100% - ${props.margin} - ${props.margin})`;
    return (
        <div style={{
            margin:props.margin,
            height: hewi,
            width: hewi 
            }} >
            {props.children}
        </div>
    )
}

export default Margin;