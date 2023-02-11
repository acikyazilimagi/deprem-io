import { useOnClickOutside } from '@/hooks/useOnClickOutSide'
import { MutableRefObject, RefObject, useRef, useState } from 'react'

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(dropdownRef, () => setIsOpen(false))

  return (
    <div
      className="flex justify-center"
      ref={dropdownRef}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div>
        <div className="dropdown relative">
          <a
            className={`flex text-sm font-bold text-zinc-400`}
            href="#"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Paylaş
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="ml-2 w-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
              ></path>
            </svg>
          </a>
          <ul
            className={`
          dropdown-menu
          absolute
          z-50
          float-left
          m-0
          mt-1
           ${!isOpen && 'hidden'}
          min-w-max
          list-none
          rounded-lg
          border-none
          bg-white
          bg-clip-padding
          py-2
          text-left
          text-base
          shadow-lg
        `}
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <a
                className="
              dropdown-item
              block
              w-full
              whitespace-nowrap
              bg-transparent
              py-2
              px-4
              text-sm
              font-normal
              text-gray-700
              hover:bg-gray-100
            "
                href="#"
              >
                Action
              </a>
            </li>
            <li>
              <a
                className="
              dropdown-item
              block
              w-full
              whitespace-nowrap
              bg-transparent
              py-2
              px-4
              text-sm
              font-normal
              text-gray-700
              hover:bg-gray-100
            "
                href="#"
              >
                Another action
              </a>
            </li>
            <li>
              <a
                className="
              dropdown-item
              block
              w-full
              whitespace-nowrap
              bg-transparent
              py-2
              px-4
              text-sm
              font-normal
              text-gray-700
              hover:bg-gray-100
            "
                href="#"
              >
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
