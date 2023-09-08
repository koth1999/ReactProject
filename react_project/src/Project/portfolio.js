import React from "react";
import styled from "styled-components";
import profile from "../ImageFolder/profile.png";


const PortfolioBlock = styled.div`
    margin-top: 50px;
    margin-left: 300px;
    width: 830px;
    height: 680px;
    border: 2px solid black;
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

    h4 {
        color: #3CA03C;
        font-size: 16px;
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

                    <h4>
                    - <img
                        src="https://img.shields.io/badge/Java-007396?style=flat&logo=Conda-Forge&logoColor=white"
                        alt="Java Logo"
                        style={{
                            width: "60px", 
                            height: "20px", 
                            marginRight: "5px", 
                            verticalAlign: "middle", 
                        }}
                    />

                    <img
                        src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat&logo=Spring Boot&logoColor=white"
                        alt="Spring Boot Logo"
                        style={{
                            width: "80px", 
                            height: "20px", 
                            marginRight: "5px", 
                            verticalAlign: "middle", 
                        }}
                    />

                    <img
                        src="https://img.shields.io/badge/JPA-CCCCCC?style=flat&logo=Spring&logoColor=white"
                        alt="JPA Logo"
                        style={{
                            width: "60px", 
                            height: "20px", 
                            marginRight: "5px", 
                            verticalAlign: "middle", 
                        }}
                    />

                    <img
                        src="https://img.shields.io/badge/Mybatis-000000?style=flat&logo=Fluentd&logoColor=white" 
                        alt="MyBatis Logo"
                        style={{
                            width: "60px", 
                            height: "20px", 
                            marginRight: "5px", 
                            verticalAlign: "middle", 
                        }}
                    />
                    
                    : Java의 Spring boot로 웹의 BackEnd를 구현해봤습니다. (JPA, Mybatis)
                    JDBC를 통해 쿼리문을 활용해 BackEnd를 구현해봤습니다.
                    객체지향에 대해 이해하고 메소드와 클래스를 잘 활용할 수 있습니다.
                </h4>

                    <h4>- <img 
                        src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"
                        alt="HTML Logo"
                        style={{
                            width : "60px",
                            height: "20px", 
                            marginRight: "5px", 
                            verticalAlign: "middle", 
                        }}
                    /> <img 
                        src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"
                        alt="CSS Logo"
                        style={{
                            width : "60px",
                            height: "20px", 
                            marginRight: "5px", 
                            verticalAlign: "middle", 
                        }}
                        />: HTML5에 대해 이해하고, CSS를 적절히 사용할 수 있습니다.</h4>

                    <h4>- <img 
                        src="https://img.shields.io/badge/Oracle%20SQL-F80000?style=flat&logo=Oracle&logoColor=white" 
                        alt="Oracle Logo"
                        style={{
                            width : "80px",
                            height: "20px", 
                            marginRight: "5px", 
                            verticalAlign: "middle", 
                        }} />
                    <img 
                        src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white"
                        alt="MySQL Logo"
                        style={{
                            width : "60px",
                            height: "20px", 
                            marginRight: "5px", 
                            verticalAlign: "middle", 
                        }} />

                        : Oracle과 MySQL을 통해 데이터베이스를 구축해 프로젝트를 한 경험이 있습니다.</h4>

                    <h4>- <img 
                            src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"
                            alt="GitHub Logo" 
                            style={{
                                width : "60px",
                                height: "20px", 
                                marginRight: "5px", 
                                verticalAlign: "middle", 
                            }} 
                    />
                    : Git을 통해 소스코드와 프로젝트 파일을 관리하고 협업할 수 있습니다.</h4>

                    <h4>- <img 
                            src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"
                            alt="React Logo"
                            style={{
                                width : "60px",
                                height: "20px", 
                                marginRight: "5px", 
                                verticalAlign: "middle", 
                            }} 
                    /> : React를 통해 웹을 개발한 경험이 있습니다. useEffect와 useState에 이해하고 적절히 사용할 수 있습니다. 
                    Axios를 통해 GET, DELETE, PUT, POST를 사용하여 데이터를 다룰 수 있습니다.</h4>

                    <h4>- <img 
                        src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" 
                        alt="JavaScript Logo"
                        style={{
                            width : "80px",
                            height: "20px", 
                            marginRight: "5px", 
                            verticalAlign: "middle", 
                        }} 
                        />: JavaScript에서 제공하는 클래스와 메소드를 적절히 활용 할 수 있습니다.</h4>
                    
                </div>

            </InfoBlock>
        </PortfolioBlock>
    )
}

export default Portfolio;