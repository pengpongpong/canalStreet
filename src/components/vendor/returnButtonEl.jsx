import React from 'react'
import { Link } from "react-router-dom";
import "./Vendor.sass";

function ReturnButtonEl({ retail, community, feature, returnButtonText, radio }) {

    let linkCat;

    if (retail) {
        linkCat = "retail"
    }
    else if (community) {
        linkCat = "community"
    }
    else {
        linkCat = "food"
    }

    let communityLink;
    let communityLinkText;


    if (feature) {
        communityLink = "feature"
        communityLinkText = "Features"
    }
    else if (radio) {
        communityLink = "radio"
        communityLinkText = "Radio"
    } else {
        communityLink = "event"
        communityLinkText = "Events"
    }

    const test = communityLink.charAt(0).toUpperCase + communityLink.slice(1)

    return (
        <div className="introPageVendor__buttonContainer">
            <Link className="introPageVendor__returnButton" to={`/${linkCat}`} >{returnButtonText}</Link>
            {community ? <Link style={{ borderLeft: "0px" }} className="introPageVendor__returnButton" to={`/community/${communityLink}`} >{communityLinkText}</Link> : ""}
        </div>
    )
}

export default ReturnButtonEl