import React from "react";

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                {Array.from({ length: 10 }).map((_, index) => {
                    const hour = index + 8;
                    const period = hour < 12 ? "AM" : "PM";
                    const displayHour = hour > 12 ? hour - 12 : hour; // Convert 13-17 to 1-5

                    return (
                        <tr key={index}>
                            <td className="time">{displayHour} {period}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;