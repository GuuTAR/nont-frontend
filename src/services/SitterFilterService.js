export const searchFilter = (data, reserveID, owner, status, startDate, endDate) => {
    let filterData = data
    if (reserveID !== "")
        filterData = filterData.filter((reserve) => {
            return (
                reserve.reservation_id.toString() === reserveID.toString()
            )
        })
    if (owner !== "")
        filterData = filterData.filter((reserve) => {
            return (
                reserve.owner_name.toString().toLowerCase().indexOf(owner.toString().toLowerCase())) === 0
        })
    if (status !== "All status")
        filterData = filterData.filter((reserve) => {
            return (
                reserve.status.toString() === status.toString()
            )
        })
    if (startDate !== "" && startDate !== null)
        filterData = filterData.filter((reserve) => {
            return (
                parseInt(
                    reserve.check_in_date.toString().split("/")[2] +
                    reserve.check_in_date.toString().split("/")[1] +
                    reserve.check_in_date.toString().split("/")[0]) >= dateToInt(startDate)
            )
        })
    if (endDate !== "" && endDate !== null)
        filterData = filterData.filter((reserve) => {
            return (
                parseInt(
                    reserve.check_out_date.toString().split("/")[2] +
                    reserve.check_out_date.toString().split("/")[1] +
                    reserve.check_out_date.toString().split("/")[0]) <= dateToInt(endDate)
            )
    })    
    return filterData      
}

export const dateToInt = (date) => {
        
    const dateList = date.toString().split(" ")
    let day = dateList[2]
    let month = ""
    switch(dateList[1]) {
        case "Jan" :
            month = "01"
            break
        case "Feb" :
            month = "02"
            break
        case "Mar" :
            month = "03"
            break
        case "Apr" :
            month = "04"
            break
        case "May":
            month = "05"
            break
        case "Jun":
            month = "06"
            break
        case "Jul":
            month = "07"
            break
        case "Aug":
            month = "08"
            break
        case "Sep":
            month = "09"
            break
        case "Oct":
            month = "10"
            break
        case "Nov":
            month = "11"
            break
        case "Dec":
            month = "12"
            break
        default :
            month = "01"
            break
    }
    let year = dateList[3]
    return parseInt(year+month+day)
}

export const getStatus = (status) => {
    if (status===2) return ("Checked in")
    else if (status===3) return ("Checked out")
    return ("Booked")
}

