import React, { Component } from 'react';
import moment from 'moment';

class Calendar extends Component {
    weekDays = moment.weekdays();

    render() {
        let weekDays = this.weekDays.map(day => {
            return (
              <th key={day} className="week-day">
               {day}
              </th>
            );
         });
        return (
            <div>
                <div>Calendar</div>
                    <div>{weekDays}</div>
            </div>
        );
    }
}

export default Calendar;