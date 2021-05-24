import React from "react";
import { createPopper } from "@popperjs/core";
import Link from 'next/link';

const Dropdown = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-gray-300")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-gray-600 uppercase px-3 pt-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              ≡
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <Link href="/profile">
              <div
                className={
                  "cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:opacity-50 transition duration-200 " +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
              >
                  プロフィール Profile
              </div>
              </Link>
              <Link href="/notes">
              <div
                className={
                  "cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:opacity-50 transitin duration-200 " +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
              >
                  ノート Notes
              </div>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown color="white" />
    </>
  );
}
