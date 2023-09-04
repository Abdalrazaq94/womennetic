import React from "react";
import { Link } from "react-router-dom";
import "./Event.css";
function Event() {
	return (
		<div className="Event-container">
			<div className="Event-card">
				<div className="Event-text-img">
					<div className="Event-img"></div>
				</div>
				<div className="Event-text-card">
					<div className="Event-txt">
						<p className="wem-event-txt">
						REFUGEE FESTIVAL SCOTLAND{" "}
						</p>
						<p className="Event-main-txt">
						Come Along to our <b>FIND A ‘MENTOR’</b> event, connect with other Women In Tech. If you would like to our speed-networking event:
						</p>
						<div className="wom-but">
							<Link
								target='_blank'
								className="home-link"
								to="https://www.eventbrite.com/e/find-a-mentor-tickets-628786255617"
							>
								<button className="home-bt" id="home-left-bt">
									CLICK TO REGISTER
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Event;
