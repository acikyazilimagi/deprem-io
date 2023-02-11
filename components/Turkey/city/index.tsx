import { paths } from "./subpaths"


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

type itemType = {
    name: string;
    stateId: string;
    id: string;
    inzone: boolean;
    sub: {
        name: string;
        path: string;
        id: string;
    }[];
}

export default function City({ props }: any) {
    const item: itemType | undefined = Object.values(paths).find((c) => c.stateId === props.stateId);
    return (
        <div className="mt-2 z-30">
            <div className="z-40 space-y-4">
                <div>
                    <div className={classNames(
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500",
                        "focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600",
                        "dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    )}>
                        Erzak Talepleri:
                    </div>
                </div>
                <div>
                    <div className={classNames(
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500",
                        "focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600",
                        "dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    )}>
                        Barınma {item?.inzone ? "talepleri" : "imkanları"}:
                    </div>
                </div>
            </div>
            <div className="z-30 flex justify-center align-middle">
                <div>
                    <svg baseProfile="tiny" fill="#ffffff" height={424} stroke="#ffffff" strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="1" version="1.2" viewBox="123 50 500 424" width={300}
                        xmlns="http://www.w3.org/2000/svg" className='overflow-visible dark:fill-zinc-900 dark:stroke-zinc-900'>
                        {item?.sub.map((sub) => {
                            return (
                                <path
                                    key={sub.name}
                                    className={item.inzone ? 'fill-red-600 hover:fill-red-900' : 'fill-blue-300 hover:fill-blue-600'}
                                    d={sub.path}
                                    id={item.stateId}>
                                </path>
                            )
                        })}
                    </svg>
                </div>
            </div>
        </div>
    )
}