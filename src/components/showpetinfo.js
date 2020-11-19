const Showpetinfo = (props) => {
    return (
        <div style={{backgroundColor:"white", borderRadius: "20px", borderColor: "white",
                marginLeft: "20px", marginRight: "20px", marginTop: "10px", width: "100%", fontWeight:"bold"}}>
                <p style={{marginLeft: "20px", marginTop: "10px", color: "#707070"}}>Name : {(props.nontinfoList.length===0?"":props.nontinfoList[0].pet_name)}</p>
                <p style={{marginLeft: "20px", marginTop: "10px", color: "#707070"}}> Type : {(props.nontinfoList.length===0?"":props.nontinfoList[0].type)}</p>
                <p style={{marginLeft: "20px", marginTop: "10px", color: "#707070"}}>Have medical certificate : {(props.nontinfoList.length===0?"":props.nontinfoList[0].had_medical_cert)}</p>
        </div>
    )
}

export default Showpetinfo