import React from 'react'
import { Link } from "react-router-dom";
import "./Vendor.sass";

function ReturnButtonEl({ retail, community, feature, returnButtonText }) {

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

    let communityLink = feature ? "feature" : "event"
    let communityLinkText = feature ? "Features" : "Events"

    return (
        <div className="introPageVendor__buttonContainer">
            <Link className="introPageVendor__returnButton" to={`/${linkCat}`} >{returnButtonText}</Link>
            {community ? <Link style={{ borderLeft: 0 }} className="introPageVendor__returnButton" to={`/community/${communityLink}`} >{communityLinkText}</Link> : ""}
        </div>
    )
}

export default ReturnButtonEl