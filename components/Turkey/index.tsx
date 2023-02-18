
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from 'next/link'
import City from './city'
import { paths } from './paths'

export default function MapTurkey() {
    let [isOpen, setIsOpen] = useState(false);
    let [item, setItem] = useState({ name: "", path: "", stateId: "", inzone: false });

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <div>
                <svg baseProfile="tiny" fill="#ffffff" height={424} stroke="#1e293b" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="0" version="1.2" viewBox="0 0 1000 424" width={1000}
                    xmlns="http://www.w3.org/2000/svg" className='overflow-visible dark:fill-zinc-900'>
                    {Object.values(paths).map((p: {
                        name: string;
                        path: string;
                        stateId: string;
                        inzone: boolean;
                    }, i) => {
                        return (
                            <Link key={i} onClick={() => { openModal(); setItem(p) }} href={"#" + p.stateId}>
                                <path
                                    className={p.inzone ? 'fill-red-600 hover:fill-red-900' : 'fill-blue-300 hover:fill-blue-600'}
                                    d={p.path}
                                    id={p.stateId}>
                                </path>
                            </Link>
                        )
                    })}
                </svg>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                {item ? <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {item.name}
                                    </Dialog.Title>
                                    <City props={{ stateId: item.stateId }} />
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Kapat
                                        </button>
                                    </div>
                                </Dialog.Panel>
                                    : <></>
                                }
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}