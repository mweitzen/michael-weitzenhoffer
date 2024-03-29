import { Fragment, Dispatch, SetStateAction } from "react";
import { Listbox, Transition } from "@headlessui/react";
//
import ChevronUpDown from "@/icons/chevron-up-down";
import RequestIcon from "@/icons/request";
//
import { IFilterOption } from "@/types/filters";

interface IFilterDropdown {
  label: string;
  options: IFilterOption[];
  handleChange: Dispatch<SetStateAction<any[]>>;
}

const FilterDropdown: React.FC<IFilterDropdown> = ({
  label,
  options,
  handleChange,
}) => {
  return (
    <Listbox
      as="div"
      className="relative flex-1"
      onChange={handleChange}
      multiple
    >
      {({ open }) => (
        <Fragment>
          <Listbox.Button className="flex w-full items-center justify-between border border-dark-purple bg-white bg-opacity-5 py-2 px-4">
            {label}
            <ChevronUpDown className="pointer-events-none" />
          </Listbox.Button>
          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute max-h-72 w-[300%] overflow-y-scroll border-8 border-black bg-dark-purple p-2 ring-black ring-opacity-5 brightness-105 focus:outline-none">
              {options.map((option, i) => (
                <Listbox.Option
                  key={i}
                  value={option.value}
                  className={({ active }) =>
                    `${active ? "text-purple-700" : ""} relative py-1`
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-semibold" : ""
                        } ml-3 block truncate`}
                      >
                        {option.label}
                      </span>

                      {selected ? (
                        <span
                          className={`${
                            active ? "text-white" : "text-purple-700"
                          } absolute inset-y-0 right-0 flex items-center pr-4`}
                        >
                          <RequestIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Fragment>
      )}
    </Listbox>
  );
};

export default FilterDropdown;
