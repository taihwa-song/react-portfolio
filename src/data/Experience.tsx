export interface Experience {
  company: string
  shortSummary: string
  role: string
  image: string
  period: {
    startDate: Date
    endDate: Date
  }
  points: string[]
  getWorkPeriod(): string
}

export const makeExperience = (
  company: string,
  shortSummary: string,
  role: string,
  image: string,
  startDate: Date,
  endDate: Date,
  points: string[]
) => {
  const e: Experience = {
    company: company,
    shortSummary: shortSummary,
    role: role,
    image: image,
    period: {
      startDate: startDate,
      endDate: endDate
    },
    points: points,
    getWorkPeriod: () => {
      const shortMonthName = new Intl.DateTimeFormat('en-US', {month: 'short'}).format
      const monthStart = shortMonthName(startDate)
      const monthEnd = shortMonthName(endDate)

      const yearStart = startDate.getFullYear().toString().substring(2)
      const yearEnd = endDate.getFullYear().toString().substring(2)

      return `${monthStart}'${yearStart} - ${monthEnd}'${yearEnd}`
    }
  }
  return e
}
