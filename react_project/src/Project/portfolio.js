import React from "react";
import styled from "styled-components";
import profile from "../ImageFolder/profile.png";


const PortfolioBlock = styled.div`
    margin-top: 50px;
    margin-left: 150px;
    width: 800px;
    height: 650px;
    border: 1px solid black;
`

const InfoBlock = styled.div`

    .profile {
        width: 100px;
        height: 100px;
    }

    .Info {
        margin-left: 20px;
    }

    p {
        font-weight: bold;
        font-size: 14px;
        color : #3CA03C;
    }
`

const Portfolio = () => {
    return(
        <PortfolioBlock>
            <InfoBlock>
                <div className="profileImg">
                    <img src={profile} alt="profile" className="profile"/>
                </div>

                <div className="Info">
                    <h3 className="name">Name : 고태훈</h3>
                    <h4>Junior Developer</h4>
                    <p>- 사용자의 니즈에 맞게 서비스를 제공하는 개발자</p>
                    <p>- 개인보다 협업을 중요시하는 개발자</p>
                    <p>- 문제를 고민하고 해결하려는 개발자</p>

                    <h3 className="TechStack">
                        TechStack
                    </h3>
                </div>

            </InfoBlock>
        </PortfolioBlock>
    )
}

export default Portfolio;