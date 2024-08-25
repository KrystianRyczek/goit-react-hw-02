
export const Feedback =({statValue})=>{
    let total = 0

    for (const key in statValue) {
        total = total + statValue[key]
    }

    const goodPercentage = ((statValue.good+statValue.neutral)/total)*100

    return      (<div>
                    <p>Good: {statValue.good}</p>
                    <p>Neutral: {statValue.neutral}</p>
                    <p>Bad: {statValue.bad}</p>
                    <p>Total: {total}</p>
                    <p>Positive: {goodPercentage.toFixed(0)}%</p>
                </div>)
}