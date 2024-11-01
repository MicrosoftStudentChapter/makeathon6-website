import React, { useEffect, useState } from 'react';
import styles from './Countdown.module.css';

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
			dayMonth = '02/22/',
			hours = '11',
			minutes = '30',
			birthday = dayMonth + yyyy + ' ' + hours + ':' + minutes;

		today = mm + '/' + dd + '/' + yyyy;
		if (today > birthday) {
			birthday = dayMonth + nextYear + ' ' + hours + ':' + minutes;
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
		<div className={styles.container}>
			{/* <h1 id="headline">Countdown to my birthday</h1> */}
			<div id={styles['countdown']} className={styles.countdown}>
				<ul className={styles.ulpreload}>
					<li className={styles.lipreload}>
						<span id={styles['days']} className={`${styles.days}  ${styles.time}`}>
							{days}
						</span>
						<span className={styles.text}>
							days
						</span>
					</li>
					<li className={styles.lipreload}>
						<span id={styles['hours']} className={`${styles.hours} ${styles.time}`}>
							{hours}
						</span>
						<span className={styles.text}>
							Hours
						</span>
					</li>
					<li className={styles.lipreload}>
						<span id={styles['minutes']} className={`${styles.minutes} ${styles.time}`}>
							{minutes}
						</span>
						<span className={styles.text}>
							Minutes
						</span>

					</li>
					<li className={styles.lipreload}>
						<span id={styles['seconds']} className={`${styles.seconds} ${styles.time}`}>
							{seconds}
						</span>
						<span className={styles.text}>
							Seconds
						</span>
					</li>
				</ul>
			</div>
				{/* <li className={styles.lipreload}>
				<span className={styles.text}>
							22 Feb 2025
						</span>
				</li> */}
		</div>
	);
};

export default Countdown;