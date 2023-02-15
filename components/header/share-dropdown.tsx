import { MutableRefObject, RefObject, useRef, useState } from 'react';

import { useOnClickOutside } from '@/hooks/useOnClickOutSide';
import { useToggle } from '@/hooks/useToggle';

import Icon from '../icon';

export default function ShareDropdown() {
  const [isDropdownOpen, toggleDropdown] = useToggle();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => {
    if (isDropdownOpen) toggleDropdown();
  });

  return (
    <div
      className="flex justify-center rounded-lg px-5 py-2.5 hover:bg-zinc-700"
      ref={dropdownRef}
      onClick={() => {
        toggleDropdown();
      }}
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
           ${!isDropdownOpen && 'hidden'}
          flex
          min-w-max
          list-none
          rounded-lg
          border-none
          bg-zinc-400
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
                href="https://www.addtoany.com/add_to/email?linkurl=https%3A%2F%2Fdeprem.io&linkname=Yard%C4%B1m%20iste%20%26%20yard%C4%B1m%20sa%C4%9Fla.%20Deprem%20%C4%B0mece%20Platformu%20-%20deprem.io&linknote="
                rel="noreferrer"
              >
                <Icon icon="email" />
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
                target="_blank"
                href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fdeprem.io&linkname=Yard%C4%B1m%20iste%20%26%20yard%C4%B1m%20sa%C4%9Fla.%20Deprem%20%C4"
                rel="noreferrer"
              >
                <Icon icon="facebook" />
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
                target="_blank"
                href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fdeprem.io&linkname=Yard%C4%B1m%20iste%20%26%20yard%C4%B1m%20sa%C4%9Fla.%20Deprem%20%C4%B0mece%20Platformu%20-%20deprem.io&linknote="
                rel="noreferrer"
              >
                <Icon icon="twitter" />
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
                target="_blank"
                href="https://www.addtoany.com/add_to/linkedin?linkurl=https%3A%2F%2Fdeprem.io&linkname=Yard%C4%B1m%20iste%20%26%20yard%C4%B1m%20sa%C4%9Fla.%20Deprem%20%C4%B0mece%20Platformu%20-%20deprem.io&linknote="
                rel="noreferrer"
              >
                <Icon icon="linkedin" />
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
                target="_blank"
                href="https://www.addtoany.com/add_to/tumblr?linkurl=https%3A%2F%2Fdeprem.io&linkname=Yard%C4%B1m%20iste%20%26%20yard%C4%B1m%20sa%C4%9Fla.%20Deprem%20%C4%B0mece%20Platformu%20-%20deprem.io&linknote="
                rel="noreferrer"
              >
                <Icon icon="tumblr" />
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
                target="_blank"
                href="https://www.addtoany.com/add_to/reddit?linkurl=https%3A%2F%2Fdeprem.io&linkname=Yard%C4%B1m%20iste%20%26%20yard%C4%B1m%20sa%C4%9Fla.%20Deprem%20%C4%B0mece%20Platformu%20-%20deprem.io&linknote="
                rel="noreferrer"
              >
                <Icon icon="reddit" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
