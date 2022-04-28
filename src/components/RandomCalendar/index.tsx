import React from "react";
import Heatmap from "react-calendar-heatmap";
import { subYears } from "date-fns";

import { Container } from "./styles";

type HeatmapValue = {
    date: Date;
    count: number;
}

const RandomCalendar: React.FC = () => {

    const endDate = new Date();
    const startDate = subYears(endDate, 1);

    const values: HeatmapValue[] = [];

    values.push({ date: new Date(), count: 3 });

    return (
        <Container>
            <div className="wrapper">
                <Heatmap 
                    startDate={startDate}
                    endDate={endDate}
                    values={[]}
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

export default RandomCalendar;