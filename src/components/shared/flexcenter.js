function FlexCenter(props) {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height:'100%'
        }} 
        className={props.className}
        >
            {props.children}
        </div>
    )
}

export default FlexCenter