const dateFunctions = require('./dateFunctions')

const sameDay = (dayA, dayB) => {
    if (dayA.getYear() !== dayB.getYear()) {
        return false
    }

    if (dayA.getMonth() !== dayB.getMonth()) {
        return false
    }

    if (dayA.getDate() !== dayB.getDate()) {
        return false
    }

    return true
}

const staticPublicHolidays = [
    {
        day: 1,
        month: 1,
    },
    {
        day: 21,
        month: 3,
    },
    {
        day: 27,
        month: 4,
    },
    {
        day: 1,
        month: 5,
    },
    {
        day: 16,
        month: 6,
    },
    {
        day: 9,
        month: 8,
    },
    {
        day: 24,
        month: 9,
    },
    {
        day: 16,
        month: 12,
    },
    {
        day: 25,
        month: 12,
    },
    {
        day: 26,
        month: 12,
    },
]

const getEaster = () => {
    // TODO: determine easter
    // don't forget about this year or next year
}

const buildPublicHolidayList = () => {
    const today = new Date()
    // TODO: work out all public holidays
        return [
            // getEaster - 2 days
            // getEaster
        ].concat(staticPublicHolidays.map(publicHoliday => {
            let year = today.getYear()
            //TODO: if public holiday is in the past for this year, incremenet year
            new Date(year, publicHoliday.month, publicHoliday.day)
        })).flatMap(date => {
            if (date.getDay() === 0) { // sunday
                return [date, dateFunctions.addDays(date, 1)];
            }

            return [date];
        })
}

const publicHolidays = buildPublicHolidayList()

const isPublicHoliday = (date) => {
    const test = new Date(2021, 5, 22)
    return sameDay(test, date)
}

module.exports = isPublicHoliday