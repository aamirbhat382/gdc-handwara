const Gallery= ({team}) => {

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                       Gallery
                    </h3>
                    
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 lg:grid-cols-2">
                        {team &&
                            team.map((item, idx) => (
                                <li key={idx} className="gap-8 sm:flex">
                                    <div className="w-full h-60">
                                    <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                            alt=""
                                        />
                                    </div>
                                   
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Gallery