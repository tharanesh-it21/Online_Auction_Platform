import React from 'react'
import { Tabs } from 'antd';
import Products from './Products';
import Apps from '../../video/Apps';

function Profile() {
  return (
    <div>
     <Tabs defaultActiveKey='1'>
        <Tabs.TabPane tab="Products" key="1">
            <Products />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Bids-Guidelines" key="2">
            <h1>Online Auction Platform Guidelines:

Online auction platforms provide a convenient and engaging way for buyers and sellers to transact. To ensure a successful and secure online auction experience, here are some guidelines for both buyers and sellers:

For Buyers:

Registration and Verification:

Create an account on the auction platform with accurate information.
Verify your identity if required by the platform.
Research and Due Diligence:

Thoroughly research the items you're interested in bidding on.
Read item descriptions, including condition, provenance, and any terms and conditions.
Ask questions to the seller if you need more information.
Set a Budget:

Determine your budget for each item and stick to it.
Factor in additional costs like taxes, shipping, and buyer's premium.
Payment Terms:

Familiarize yourself with the platform's accepted payment methods.
Understand the payment deadlines and procedures.
Bidding Strategy:

Decide your bidding strategy, such as placing a maximum bid or bidding incrementally.
Pay attention to bid increments set by the platform.
Participate Actively:

Attend the auction in real-time if possible.
Be prepared to act quickly when bidding.
Review Terms and Conditions:

Read and understand the platform's terms and conditions, including return policies.
Security:

Use secure, password-protected devices for bidding.
Be cautious of phishing attempts or fraudulent sellers.
For Sellers:

Registration and Verification:

Register as a seller on the platform.
Complete any necessary verification steps.
Accurate Listings:

Provide detailed and accurate descriptions of your items.
Include high-quality images from various angles.
Set Realistic Reserves and Starting Prices:

Set reserve prices if desired, but be realistic.
Consider starting prices to attract initial bids.
Communication:

Be responsive to buyer inquiries.
Answer questions and provide additional information promptly.
Payment and Fees:

Understand the platform's fees and commissions.
Specify your preferred payment methods.
Shipping and Delivery:

Clearly state your shipping policies, including shipping costs and estimated delivery times.
Use secure packaging to protect items during shipping.
Transparency:

Be transparent about the item's condition and any defects.
Disclose any relevant provenance or history.
Customer Service:

Provide excellent customer service to build a positive reputation.
Address any post-sale inquiries or issues promptly.
Security:

Use secure, reputable payment and communication methods.
Be cautious of fraudulent buyers or phishing attempts.
By following these guidelines, both buyers and sellers can have a safe and enjoyable experience on online auction platforms, fostering trust and transparency in the process.</h1>
         </Tabs.TabPane>
         <Tabs.TabPane tab="LIVE STREAM" key="3">
           <h1>LIVE STREAMING AUCTIONS....</h1>
            <Apps />
         </Tabs.TabPane>
     </Tabs>
    </div>
  )
}

export default Profile
