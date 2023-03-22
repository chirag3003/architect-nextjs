
interface props{
    images : {
        src: string;
    }[];
}
export default function Images({images}:props) {
    return (
        <ul role="list"
            className="grid grid-cols-1  gap-x-1 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {images.map((file,index) => (
                <li key={index} className="relative">
                    <div
                        className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <img src={file.src} alt="" className="pointer-events-none object-cover group-hover:opacity-75"/>
                    </div>
                </li>
            ))}
        </ul>
    )
}
