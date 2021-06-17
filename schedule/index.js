const dates = require('./dates')

const intros = [
    "Who wants which day next week?",
    "Lets help some newb-ees out! Pick a day!"
]

const formatter = new Intl.DateTimeFormat('en-ZA')

const formatDay = (dayInfo) => {
    if (dayInfo.style === "Session") {
        return `${dayInfo.day} (${formatter.format(dayInfo.date)}) - `
    }

    if (dayInfo.style === "Coffee") {
        return `${dayInfo.day} (${formatter.format(dayInfo.date)}) - ☕`
    }

    if (dayInfo.style === "Public Holiday") {
        return `${dayInfo.day} (${formatter.format(dayInfo.date)}) - No Session. It is a public holiday 🏖`
    }
}

const schedule = () => {
    const intro = intros[Math.floor(Math.random() * intros.length)]
    let result = `${intro}\n\n`
    const days = dates()
    days.forEach(day => {
        result += formatDay(day) + "\n"
    })

    return result
}

module.exports = schedule