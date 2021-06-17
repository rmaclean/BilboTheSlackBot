const isPublicHoliday = require("./isPublicHoliday")
const dateFunctions = require('./dateFunctions')

const offSetDate = (offset) => {
    return dateFunctions.addDays(new Date(), offset)
}

const defaults = [
    { 
        day: "Monday", 
        offSet: 0,
        style: "Session"
    },
    { 
        day: "Tuesday", 
        offSet: 1,
        style: "Session" 
    },
    { 
        day: "Wednesday", 
        offSet: 2,
        style: "Coffee"
    },
    { 
        day: "Thursday", 
        offSet: 3,
        style: "Session"
    },
    { 
        day: "Friday", 
        offSet: 4,
        style: "Session"
    },
]

const dates = () => {
    const today = new Date()
    const dayOfWeek = today.getDay()
    let offset = 0
    if (dayOfWeek === 0) {
        offSet = 1
    }
    // no need to check for 1 since that Monday is today
    if (dayOfWeek >= 2) {
        offSet = 8 - dayOfWeek
    }

    return defaults.map(item => {
        let style = item.style
        const date = offSetDate(offSet + item.offSet)
        if (isPublicHoliday(date)) {
            style = "Public Holiday"
        }

        return {
            day: item.day,
            date,
            style,
        }
    })
}

module.exports = dates