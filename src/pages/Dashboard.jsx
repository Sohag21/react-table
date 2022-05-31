import React, { useLayoutEffect, useRef, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';

const people = [
  { name: 'Lindsay Walton', title: 'Developer', email: 'admin@example.com', role: 'Admin' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
]

const Dashboard = () => {
  const [sorting, setSorting] = useState(true);
  const checkbox = useRef()
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [selectedPeople, setSelectedPeople] = useState([])

  useLayoutEffect(() => {
    const isIndeterminate = selectedPeople.length > 0 && selectedPeople.length < people.length
    setChecked(selectedPeople.length === people.length)
    setIndeterminate(isIndeterminate)
    checkbox.current.indeterminate = isIndeterminate
  }, [selectedPeople])

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }
  return (
    <div className="px-4 mt-8 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-orange-400">Manage Sessions</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" id="default-toggle" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Billable</span>
          </label>
        </div>
      </div>
      <div className="w-full mt-8">
        <div className="flex flex-row">

          <div className="basis-1/6">
            <label htmlFor="patients" className="block text-sm font-medium text-gray-700">
              Patients
            </label>
            <select
              id="patients"
              name="patients"
              autoComplete="patients-name"
              className="mt-1 block bg-white border border-gray-300 w-32 rounded-md shadow-sm py-1 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>All</option>
              <option>Data </option>
              <option>Data </option>
              <option>Data </option>
            </select>
          </div>

          <div className="basis-1/6">
            <label htmlFor="provider" className="block text-sm font-medium text-gray-700">
              Provider
            </label>
            <select
              id="provider"
              name="provider"
              autoComplete="provider-name"
              className="mt-1 w-32 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-1 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>All</option>
              <option>Data </option>
              <option>Data </option>
              <option>Data </option>
            </select>
          </div>

          <div className="basis-1/6">
            <label htmlFor="place" className="block text-sm font-medium text-gray-700">
              Place of Service
            </label>
            <select
              id="place"
              name="place"
              autoComplete="place-name"
              className="mt-1 w-32 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-1 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>All</option>
              <option>Data </option>
              <option>Data </option>
              <option>Data </option>
            </select>
          </div>

          <div className="basis-1/6">
            <label htmlFor="place" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <div className="border border-gray-300 mt-1 mr-2 p-0 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <DateRangePickerComponent className='bg-white p-0'></DateRangePickerComponent>
            </div>
          </div>
          <div className="basis-1/6">
            <label htmlFor="Status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="Status"
              name="Status"
              autoComplete="Status-name"
              className="mt-1 block w-28 bg-white border border-gray-300 rounded-md shadow-sm py-1 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>All</option>
              <option>Data </option>
              <option>Data </option>
              <option>Data </option>
            </select>
          </div>
          <div className="basis-1/3">
            <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-1 mt-6 px-4 rounded">
              Go
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-cyan-500">
                  <tr>
                    <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-50 sm:pl-6">
                      <a href="#" className="group inline-flex">
                        Name
                        {
                          sorting ? <span onClick={() => setSorting(false)} className="ml-2 flex-none rounded bg-gray-300 text-gray-900 group-hover:bg-gray-200">
                            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                          </span> : <span onClick={() => setSorting(true)} className="ml-2 flex-none rounded bg-gray-300 text-gray-900 group-hover:bg-gray-200">
                            <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        }
                      </a>
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold text-gray-50">
                      <a href="#" className="group inline-flex">
                        Title
                        <span className="ml-2 flex-none rounded mt-1 text-gray-300 ">
                          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      </a>
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold text-gray-50">
                      <a href="#" className="group inline-flex">
                        Email
                        <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                          <ChevronDownIcon
                            className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-100 group-hover:visible group-focus:visible"
                            aria-hidden="true"
                          />
                        </span>
                      </a>
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold text-gray-50">
                      <a href="#" className="group inline-flex">
                        Role
                        <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                          <ChevronDownIcon
                            className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-100 group-hover:visible group-focus:visible"
                            aria-hidden="true"
                          />
                        </span>
                      </a>
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="text-left text-sm font-bold text-gray-50">Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email} className={selectedPeople.includes(person) ? 'bg-gray-50' : undefined}>
                      <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                        {selectedPeople.includes(person) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                          value={person.email}
                          checked={selectedPeople.includes(person)}
                          onChange={(e) =>
                            setSelectedPeople(
                              e.target.checked
                                ? [...selectedPeople, person]
                                : selectedPeople.filter((p) => p !== person)
                            )
                          }
                        />
                      </td>
                      <td
                        className={`
                          'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                          selectedPeople.includes(person) ? 'text-indigo-600' : 'text-gray-900'`
                        }
                      >
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
                      <td className="flex whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-gray-600 hover:text-indigo-900 mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </a>
                        <a href="#" className="text-red-600 hover:text-red-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
