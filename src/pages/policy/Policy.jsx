import React from 'react'
import Footer from "../../components/footer/Footer"
import PageContainer from "/src/components/container/PageContainer"
import VendorRegisterBanner from "/src/components/footer/VendorRegisterBanner"
import "./Policy.sass"

function Policy({bgColor}) {

    return (
        <PageContainer bgColor={bgColor}>
            <div className="policy">
                <h1 className="policy__headline">Privacy Policy</h1>
                <p className="policy__text">This privacy notice discloses the privacy practices for https://streetMarket-homepage.com/. This privacy notice applies solely to information collected by this website. It will notify you of the following:</p>
                <p className="policy__text">What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.</p>
                <p className="policy__text">What choices are available to you regarding the use of your data.</p>
                <p className="policy__text">The security procedures in place to protect the misuse of your information.</p>
                <p className="policy__text">How you can correct any inaccuracies in the information.</p>
                <p className="policy__text">Information Collection, Use, and Sharing</p>
                <p className="policy__text">We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.</p>
                <p className="policy__text">We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.</p>
                <p className="policy__text">Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>
                <p className="policy__text">Your Access to and Control Over Information</p>
                <p className="policy__text">You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:</p>
                <p className="policy__text">See what data we have about you, if any.</p>
                <p className="policy__text">Change/correct any data we have about you.</p>
                <p className="policy__text">Have us delete any data we have about you.</p>
                <p className="policy__text">Express any concern you have about our use of your data.</p>
                <p className="policy__text">Security</p>
                <p className="policy__text">We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
                <p className="policy__text">Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page.</p>
                <p className="policy__text">While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.</p>
                <p className="policy__text">If you feel that we are not abiding by this privacy policy, you should contact us immediately at info@streetMarket-homepage.com</p>
            </div>
            <VendorRegisterBanner/>
            <Footer/>
        </PageContainer>
    )
}

export default Policy