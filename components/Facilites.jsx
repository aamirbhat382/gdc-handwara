const Facilities = () => {

    const facilities = [
        {
            avatar: "https://mu.ac.in/wp-content/uploads/2019/01/Auditorim-410x260.jpg",
            name: "Knowledge Resource Centre",
          
        },
        {
            avatar: "https://mu.ac.in/wp-content/uploads/2019/01/hostels.jpg",
            name: "Hostel",
            
        },
        {
            avatar: "https://mu.ac.in/wp-content/uploads/2019/01/Canteen1-410x260.jpg",
            name: "Cafetaria",
           
        },
        {
            avatar: "https://mu.ac.in/wp-content/uploads/2019/01/Sports-410x260.jpg",
            name: "Sports Complex",
           
        },
        {
            avatar: "https://mu.ac.in/wp-content/uploads/2019/01/VC1-410x260.jpg",
            name: "Virtual Classrooms",
           
        },
        {
            avatar: "https://mu.ac.in/wp-content/uploads/2019/01/hc-410x260.jpg",
            name: "Health Care Centre",
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto sm:text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Our Facilities
                    </h3>
                    
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            facilities.map((item, idx) => (
                                <li key={idx}>
                                    <a href="#">
                                    <div className="w-full h-60 sm:h-52 md:h-56">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                                    </div>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Facilities