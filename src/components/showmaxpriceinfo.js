const ShowMaxprice = (props) => {
    return (
        <div style={{backgroundColor:"white", borderRadius: "10px", borderColor: "white",
        height: "100%", width: "100%"}}>
            <p style={{ marginLeft: "20px" }}>max price <br></br> ฿ {props.minmaxlist[1]}</p>
        </div>
    )
}

export default ShowMaxprice

// style={{backgroundColor:"white", borderRadius: "10px", borderColor: "white",
//         marginLeft: "80px", marginRight: "10px", marginTop: "10px", height: "100%", width: "40%"}}