import React from "react";
import styled from "styled-components";
import {  FaGithub, FaTwitter, FaLinkedin,} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <footer>
          <div className="footer-social">
              <h3 >Made with ReactJS by Nikhil Tilwani</h3>
              <div className="footer-social--icons">
                <div>
                <a
                    href="https://github.com/TilwaniNikhil"
                    >
                  <FaGithub className="icons" />
                  </a>
                </div>
                <div>
                <a
                    href="https://www.linkedin.com/in/nikhil-tilwani"
                    >
                  <FaLinkedin className="icons"/>
                  </a>
                </div>
                <div>
                  <a
                    href="https://twitter.com/tilwani_011"
                    >
                
                    <FaTwitter className="icons" />
                    
                  </a>
        
                </div>
              </div>
            </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  
  footer {
    
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
      text-align:center;
    }
    
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      padding-left:45%;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
          
        }
      }
    }
  }

 
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
        .footer-social--icons {
            padding-left:40%;
        } 
      padding:2rem;
      
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
