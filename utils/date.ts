import format from 'date-fns/format'

export const weekMap = ['日', ' 一', '二', '三', '四', '五', '六']
const calendarGrid = 42
export interface CalendarItem {
  year: number
  month: number
  day: number
  isCurrentMonth: boolean
}

const isLeap = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 100 === 0
}

const getDays = (year: number, month: number): number => {
  const feb = isLeap(year) ? 29 : 28
  const daysPerMonth = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  return daysPerMonth[month]
}

const getNextOrLastMonthDays = (date: Date, type: 'next' | 'last') => {
  const month = date.getMonth()
  const year = date.getFullYear()
  if (type === 'last') {
    const lastMonth = month === 0 ? 11 : month - 1
    const lastYear = lastMonth === 11 ? year - 1 : year
    return {
      year: lastYear,
      month: lastMonth,
      days: getDays(lastYear, lastMonth),
    }
  }
  const nextMonth = month === 11 ? 0 : month + 1
  const nextYear = nextMonth === 0 ? year + 1 : year
  return {
    year: nextYear,
    month: nextMonth,
    days: getDays(nextYear, nextMonth),
  }
}

export const generateCalendar = (date: Date) => {
  const currentYear = date.getFullYear()
  const currentMonth = date.getMonth()
  const days = getDays(currentYear, currentMonth)

  const {
    days: lastMonthDays,
    year: lastMonthYear,
    month: lastMonth,
  } = getNextOrLastMonthDays(date, 'last')
  const { year: nextMonthYear, month: nextMonth } = getNextOrLastMonthDays(date, 'next')

  const weekIndex = new Date(`${currentYear}/${currentMonth + 1}/1`).getDay()
  const trailDays = calendarGrid - weekIndex - days
  let trailVal = 0
  const calendarTable: CalendarItem[] = []

  for (let i = 0; i < calendarGrid; i++) {
    // previous month days
    if (i < weekIndex) {
      calendarTable[i] = {
        year: lastMonthYear,
        month: lastMonth,
        day: lastMonthDays - weekIndex + i + 1,
        isCurrentMonth: false,
      }
      // next month days
    }
    else if (i >= days + weekIndex) {
      if (trailVal < trailDays)
        trailVal += 1

      calendarTable[i] = {
        year: nextMonthYear,
        month: nextMonth,
        day: trailVal,
        isCurrentMonth: false,
      }
    }
  }
  // fill
  for (let d = 1; d <= days; d++) {
    calendarTable[weekIndex + d - 1] = {
      year: currentYear,
      month: currentMonth,
      day: d,
      isCurrentMonth: true,
    }
  }

  return calendarTable
}

export const getDateOfWeek = (year: number, week: number, day: number) => {
  const date = new Date(year, 0, 1)
  const dayMS = 24 * 60 * 60 * 1000
  const firstDay = (7 - date.getDay()) * dayMS
  const weekMS = (week - 2) * 7 * dayMS
  const result = date.getTime() + firstDay + weekMS + day * dayMS
  date.setTime(result)
  return format(date, 'yyyy年MM月dd日')
}
