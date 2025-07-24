import React from 'react'
const stats = [
    { value: "50000+", label: "Full Time Students" },
    { value: "35000+", label: "International Students" },
    { value: "28", label: "States" },
    { value: "75+", label: "Nationalities" }
]
const Stats = () => {
    const [statsData, setStatsData] = React.useState(stats.map((stat) => ({ ...stat, count: 0, hasAnimated: false })))
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.dataset.index
                        if (!statsData[index].hasAnimated) {
                            setStatsData((prevStats) => {
                                const newStats = [...prevStats]
                                newStats[index] = { ...newStats[index], hasAnimated: true }
                                return newStats
                            })

                            const targetValue = Number.parseInt(statsData[index].value.replace(/[^\d]/g, ""))
                            const suffix = statsData[index].value.replace(/[\d]/g, "")
                            const duration = 2000 // 2 seconds
                            const steps = 60
                            const increment = targetValue / steps
                            const stepDuration = duration / steps

                            let currentCount = 0
                            const timer = setInterval(() => {
                                currentCount += increment
                                if (currentCount >= targetValue) {
                                    setStatsData((prevStats) => {
                                        const newStats = [...prevStats]
                                        newStats[index] = { ...newStats[index], count: targetValue }
                                        return newStats
                                    })
                                    clearInterval(timer)
                                } else {
                                    setStatsData((prevStats) => {
                                        const newStats = [...prevStats]
                                        newStats[index] = { ...newStats[index], count: Math.floor(currentCount) }
                                        return newStats
                                    })
                                }
                            }, stepDuration)
                        }
                    }
                })
            },
            { threshold: 0.5 },
        )

        stats.forEach((_, index) => {
            const element = document.querySelector(`[data-index="${index}"]`)
            if (element) {
                observer.observe(element)
            }
        })

        return () => observer.disconnect()
    }, [])
    return (
        <section className="py-12 md:py-16 bg-blue-900 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                    {statsData.map((stat, index) => {
                        const targetValue = Number.parseInt(stat.value.replace(/[^\d]/g, ""))
                        const suffix = stat.value.replace(/[\d]/g, "")

                        return (
                            <div key={index} data-index={index}>
                                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
                                    {stat.count}
                                    {suffix}
                                </div>
                                <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats