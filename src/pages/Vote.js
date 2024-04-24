import React from "react";
import Footer from "./Footer";
import revenue_img from "../assets/KRONCASH/13.jpg";
import table_icon_kroncash from "../assets/image/logo.png";
import table_icon_kronlet from "../assets/KRONCASH/14.jpg";
import table_icon_audit from "../assets/image/blockchain/15.svg";
import table_icon_ETH from "../assets/image/eth.png";
import table_icon_clock from "../assets/image/clock.png";
import table_icon_rocket from "../assets/image/blockchain/16.svg";
import "./Vote.scss";

const Vote = () => {
    return (
        <>
            <h1 className="vote_title">Voting Protocols</h1>
            <div className="container">
                <img src={revenue_img} />
                <div className="text">VOTING PROTOCOLS The Kroncash governance process incorporates a sophisticated and transparent voting system, designed to engage token holders in key decisions impacting the platform. Based on the Kroncash Valuation Governance Protocol, token holders have the ability to participate in various governance decisions, including those related to inflation adjustments and protocol changes, which are crucial for maintaining the stability and relevance of Kronlets. This decentralized approach ensures that all adjustments to the Kronlet's value are made transparently and are auditable in real-time, enhancing trust and participation among users. Moreover, the protocol allows for tiered voting, where stakeholders can purchase increased voting rights, further aligning the interests of active participants with the long-term health and viability of the platform. This tiered system not only incentivizes deeper engagement by providing more significant influence over decisions but also serves as an additional revenue stream that supports the financial stability of the reserve.</div>
            </div>
            <div className="container">
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className="sticky"><span>Coin</span></th>
                                <th>Name</th>
                                <th>Badges</th>
                                <th>Chain</th>
                                <th>Market Cap</th>
                                <th>Price</th>
                                <th>Change 24h</th>
                                <th>Launch</th>
                                <th>Vote</th>
                                <th>Vote</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td className="sticky"><img src={table_icon_kroncash} /></td>
                                <td>Kroncash</td>
                                <td><button className="badges"><img style={{width: "15px", height: "15px"}} src={table_icon_audit} /> Audit</button></td>
                                <td><div className="center"><img src={table_icon_ETH} style={{width: "30px", height: "30px"}} /> ETH</div></td>
                                <td><div className="center"><img src={table_icon_clock} style={{width: "22px", height: "22px"}} />Presale</div></td>
                                <td>4 ETH</td>
                                <td>4.30M USDT</td>
                                <td>In 2 months</td>
                                <td><div className="center"><img src={table_icon_rocket} style={{width: "22px", height: "22px"}} /> X 56</div></td>
                                <td><button className="vote">Vote</button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td className="sticky"><img src={table_icon_kronlet} /></td>
                                <td>Kronlet</td>
                                <td><button className="badges"><img style={{width: "15px", height: "15px"}} src={table_icon_audit} /> Audit</button></td>
                                <td><div className="center"><img src={table_icon_ETH} style={{width: "30px", height: "30px"}} /> ETH</div></td>
                                <td><div className="center"><img src={table_icon_clock} style={{width: "22px", height: "22px"}} />Presale</div></td>
                                <td>4 ETH</td>
                                <td>4.30M USDT</td>
                                <td>In 2 months</td>
                                <td><div className="center"><img src={table_icon_rocket} style={{width: "22px", height: "22px"}} /> X 56</div></td>
                                <td><button className="vote">Vote</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Vote;