import React, { useEffect, useState } from 'react';
import './Countdown.css';

const Countdown = () => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24;

		// I'm adding this section so I don't have to keep updating this pen every year :-)
		// remove this if you don't need it
		let today = new Date(),
			dd = String(today.getDate()).padStart(2, '0'),
			mm = String(today.getMonth() + 1).padStart(2, '0'),
			yyyy = today.getFullYear(),
			nextYear = yyyy + 1,
			dayMonth = '02/02/',
			birthday = dayMonth + yyyy;

		today = mm + '/' + dd + '/' + yyyy;
		if (today > birthday) {
			birthday = dayMonth + nextYear;
		}
		// end

		const countDown = new Date(birthday).getTime();
		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countDown - now;

			setDays(Math.floor(distance / day));
			setHours(Math.floor((distance % day) / hour));
			setMinutes(Math.floor((distance % hour) / minute));
			setSeconds(Math.floor((distance % minute) / second));

			// do something later when date is reached
			if (distance < 0) {
				clearInterval(interval);
			}
			// seconds
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="container">
			{/* <h1 id="headline">Countdown to my birthday</h1> */}
			<div id="countdown">
				<ul>
					<li>
						<span id="days" className="days">
							{days}
						</span>
						days
					</li>
					<li>
						<span id="hours" className="hours">
							{hours}
						</span>
						Hours
					</li>
					<li>
						<span id="minutes" className="minutes">
							{minutes}
						</span>
						Minutes
					</li>
					<li>
						<span id="seconds" className="seconds">
							{seconds}
						</span>
						Seconds
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Countdown;