import Gallery from "../../components/Gallery"


const gallery = ()=>{
    const photos = [
        {
            avatar: "https://gdchandwara.edu.in/Gallery/republic23/1.jpeg",
            name: "Republic Day Celebrations",
            desc: "26 january 2023, Republic Day Celebrations at GDC Handwara",
        },
        {
            avatar: "https://gdchandwara.edu.in/Gallery/voters23/1.jpeg",
            name: "National Voters Day"
        },
        {
            avatar: "https://gdchandwara.edu.in/Gallery/blood22/7.jpeg",
            name: "Blood Donation Camp",
           
        },
        {
            avatar: "https://gdchandwara.edu.in/Gallery/evs2022/7.jpeg",
            name: "Envirnmental Week Celebrations",
            
        },
        {
            avatar: "https://gdchandwara.edu.in/Gallery/eng2022/7.jpeg",
            name: "One Day Poetry Competition Programme",
            
        },
        {
            avatar: "https://gdchandwara.edu.in/Gallery/bicycle/6.jpeg",
            name: "Bicycle Race",
            
        },
    ]
    return(
<Gallery team={photos} />
    )
}

export default gallery