import React, { Fragment } from 'react';
import Countdown from 'react-countdown-now';

const CountdownComponent = () => {

    const Completionist = () => <span>You are good to go!</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <div className="timer-box">
                <div>
                    <div className="timer">
                        <p id="demo">
                            <span>
                                    {days}
                                <span className="padding-l">:</span>
                                <span className="timer-cal">Days</span>
                            </span>
                            <span>
                                    {hours}
                                <span className="padding-l">:</span>
                                <span className="timer-cal">Hrs</span>
                            </span>
                            <span>
                                    {minutes}
                                <span className="padding-l">:</span>
                                <span className="timer-cal">Min</span>
                            </span>
                            <span>{seconds}
                                <span className="timer-cal">Sec</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>;
        }
    };

    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var coundown = new Date(year, month, day + 10).getTime();

    return (
        <Fragment>
            <Countdown date={coundown} renderer={renderer} />
        </Fragment>
    );
};

export default CountdownComponent;