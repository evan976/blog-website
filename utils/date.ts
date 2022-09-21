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
    } else if (i >= days + weekIndex) {
      if (trailVal < trailDays) {
        trailVal += 1
      }
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

export const getDateOfISOWeek = (week: number, year: number) => {
  var simple = new Date(year, 0, 1 + (week - 1) * 7)
  var dow = simple.getDay()
  var ISOweekStart = simple
  if (dow <= 4) ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1)
  else ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay())
  console.log(ISOweekStart.getFullYear())
  console.log(ISOweekStart.getMonth() + 1)
  console.log(ISOweekStart.getDate())
  return ISOweekStart
}

export const getDate = (effectTime: number) => {
  const date = new Date(effectTime * 24 * 60 * 60 * 1000)
  const year = new Date().getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  let currentDate = year + '-'
  if (month >= 10) {
    currentDate = currentDate + month + '-'
  } else {
    currentDate = currentDate + '0' + month + '-'
  }
  if (day >= 10) {
    currentDate = currentDate + day
  } else {
    currentDate = currentDate + '0' + day
  }
  return currentDate
}
