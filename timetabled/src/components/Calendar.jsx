import React from "react";
import Event from './Event';

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
                    <tr>
                        <td className="time">8 am</td>
                        <Event event="Morning Yoga 🧘‍♂️" color="blue" location="Park" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Team Meeting 📞" color="green" location="Office" />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <Event event="Coffee Break ☕" color="brown" location="Cafe" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <Event event="Project Review 📋" color="red" location="Meeting Room" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Design Session 🎨" color="purple" location="Studio" />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <Event event="Lunch 🍔" color="orange" location="Bistro" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Client Call 📞" color="teal" location="Home Office" />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <Event event="Deep Work 💻" color="gray" location="Library" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Strategy Meeting 🏢" color="gold" location="Boardroom" />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Gym Workout 💪" color="lime" location="Gym" />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <Event event="Code Review 🔍" color="indigo" location="Office" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Brainstorming 💡" color="pink" location="Conference Room" />
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Fancy Dinner 🎩" color="green" location="Restaurant" />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default Calendar;