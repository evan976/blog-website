import * as React from 'react'
import ReactTooltip from 'react-tooltip'
import type { Contributions } from 'types'
import { getDateOfWeek } from 'utils/date'

const GithubContribution: React.FC<Partial<Contributions>> = ({ contributions, year }) => {
  return (
    <div className="bg-bg-100 rounded p-3">
      <ul className="flex w-full overflow-hidden">
        {contributions?.map((contribution, week) => (
            <li key={contribution.week} className="flex flex-col">
              {contribution?.days?.map((day, index) => (
                <>
                  {contribution?.days?.length < 7 && (
                    Array.from({ length: 7 - contribution?.days?.length }).map((_, index) => (
                      <span key={index} className="w-[10px] h-[10px] p-1 m-[2px] rounded-sm bg-transparent" />
                    ))
                  )}
                  <span
                    data-count={day.count}
                    data-tip={`${day.count} 个贡献：${getDateOfWeek(Number(year), week + 1, contribution?.days?.length < 7 ? 6 - index : index)}`}
                    className={`w-[10px] h-[10px] p-1 m-[2px] rounded-sm ${day.count === 0 ? 'bg-bg-200' : day.count < 5 ? 'bg-lime' : 'bg-green'}`} key={index}
                  />
                </>

              ))}
            </li>
        ))}
      </ul>
      <ReactTooltip effect="solid" />
    </div>
  )
}

export default GithubContribution
