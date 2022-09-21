import * as React from 'react'
import { getDate, getDateOfISOWeek } from 'utils/date'

type Day = {
  count: number
}

type Contribution = {
  week: number
  days: Array<Day>
}

interface GithubContributionProps {
  // year: number
  // max: number
  // min: number
  // median: number
  contributions: Array<Contribution>
}

const GithubContribution: React.FC<GithubContributionProps> = ({ contributions }) => {

  return (
    <div className="bg-bg-100 rounded p-3">
      <ul className="flex w-full overflow-hidden">
        {contributions?.map(contribution => (
          <li key={contribution.week} className="flex flex-col">
            {contribution.days?.map((day, index) => (
              <span
                data-count={day.count}
                data-content={`${day.count} 个贡献：${getDate(index)}`}
                className={`w-[10px] h-[10px] p-1 m-[2px] rounded-sm ${day.count === 0 ? 'bg-bg-200' : day.count < 5 ? 'bg-lime' : 'bg-green'}`} key={index}
              />
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GithubContribution