import clients from "configs/clients";

export default function Clients() {
    return (
        <div className="bg-gray-600  py-14">
            <div className="mx-auto max-w-xl text-center mb-20">
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-yellow-600">
                    Our Clients
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    We have worked with thousands of amazing people
                </p>
            </div>
            <div className="mx-auto max-w-7xl overflow-hidden">
                <div
                    className="clients flex gap-20 items-center w-max">
                    {clients.map((client, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-3 items-center min-w-60">
                                <img
                                    className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
                                    src={client.img}
                                    alt={client.title}
                                    width={158}
                                    height={48}
                                />
                                {/* {client.text && <p>{client.text}</p>} */}
                            </div>
                        );
                    })}
                    {clients.map((client, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-3 items-center min-w-60">
                                <img
                                    className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
                                    src={client.img}
                                    alt={client.title}
                                    width={158}
                                    height={48}
                                />
                                {/* {client.text && <p>{client.text}</p>} */}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
