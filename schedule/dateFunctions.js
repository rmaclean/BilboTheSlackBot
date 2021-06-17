module.exports = {
    addDays: (date, offset) => {
        return new Date(date.setDate(date.getDate() + offset))
    }
}