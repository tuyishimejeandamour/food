function FlexCenter(props) {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }} 
        className={props.className}
        >
            {props.children}
        </div>
    )
}

export default FlexCenter