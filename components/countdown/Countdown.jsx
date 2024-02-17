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

		let today = new Date(),
			dd = String(today.getDate()).padStart(2, '0'),
			mm = String(today.getMonth() + 1).padStart(2, '0'),
			yyyy = today.getFullYear(),
			nextYear = yyyy + 1,
			dayMonth = '02/24/',
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
			<div id="countdown" className='countdown'>
				<ul>
					<li>
						<span id="days" className="days time">
							{days}
						</span>
						<span className='text'>
							days
						</span>
					</li>
					<li>
						<span id="hours" className="hours time">
							{hours}
						</span>
						<span className='text'>
							Hours
						</span>
					</li>
					<li>
						<span id="minutes" className="minutes time">
							{minutes}
						</span>
						<span className='text'>
							Minutes
						</span>
						
					</li>
					<li>
						<span id="seconds" className="seconds time">
							{seconds}
						</span>
						<span className='text'>
							Seconds
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Countdown;