import React from "react";
import './Community.css';

function Community () {
    return (
        <section className="Community">
            <h2 className="CommunityTitle">COMMUNITY</h2>
            <p className="CommunityText">
                Get involved and stay up to date.
                Access exclusive giveaways, and share your thoughts with the community.
            </p>
            <button className="CommunityButton TwitterButton">Follow us on Twitter!</button>
            <button className="CommunityButton DiscordButton">Join our Discord community!</button>
        </section>
    );
}

export { Community };