import React from "react";
import Heatmap from "react-calendar-heatmap";
import { subYears, isBefore, isSameDay, addDays } from "date-fns";

import { Container } from "./styles";

type HeatmapValue = {
    date: Date;
    count: number;
}

const RandomCalendar: React.FC = () => {

    const endDate = new Date();
    const startDate = subYears(endDate, 1);

    return (
        <Container>
            <div className="wrapper">
                <Heatmap 
                    startDate={startDate}
                    endDate={endDate}
                    values={generateHeatmapValues(startDate, endDate)}
                    gutterSize={3.5}
                    classForValue={(item: HeatmapValue) => {
                        let clampedCount = 0;
                        if (item !== null) {
                            clampedCount = Math.max(item.count, 0);
                            clampedCount = Math.min(item.count, 4);
                        }
                        return `scale-${clampedCount}`
                    }}
                    showWeekdayLabels
                />
            </div>
            <span>Random Calendar (do not represent actual data)</span>
        </Container>
    )
}

const generateHeatmapValues = (startDate: Date, endDate: Date) => {
    const values: HeatmapValue[] = [];

    let currentDate = startDate;
    while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
        const count = Math.random() * 4;
        values.push({ date: currentDate, count: Math.round(count) });

        currentDate = addDays(currentDate, 1);
    }

    return values;
}

export default RandomCalendar;