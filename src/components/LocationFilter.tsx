import React from 'react'

type Props = {
    selected: string;
    onChange: (loc: string) => void;
  };
const locations = ["All", "Noida", "Bangalore", "Delhi", "Hyderabad", "Mumbai"];
const LocationFilter: React.FC<Props> = ({selected, onChange}) => {
  return (
      <div className="mb-4">
          <select
              className="border dark:text-white border-[#eeb2b6] focus:outline-none dark:border-[#310320] p-2 rounded "
              value={selected}
              onChange={(e) => onChange(e.target.value)}
          >
              {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
              ))}
          </select>
      </div>
  )
}

export default LocationFilter