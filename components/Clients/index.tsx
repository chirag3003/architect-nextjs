import clients from "configs/clients";

export default function Clients() {
  return (
    <div className="bg-white py-14">
      <div className="mx-auto max-w-xl text-center mb-20">
        <h2 className="text-lg font-semibold leading-8 tracking-tight text-yellow-600">
          Our Clients
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          We have worked with thousands of amazing people
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {clients.map((client, index) => {
            return (
              <img
                key={index}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={client.img}
                alt={client.title}
                width={158}
                height={48}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
