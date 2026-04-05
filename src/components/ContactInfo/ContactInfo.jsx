import { footerData } from "../../data/footer_data/footer_data";
import styled from "styled-components";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <Wrapper>
      <div className="contact-card">
        <div className="contact-item">
          <FaPhoneAlt className="icon" />
          <div>
            <h4>{footerData.phone.title}</h4>
            <p>{footerData.phone.number}</p>
          </div>
        </div>

        <div className="contact-item">
          <FaEnvelope className="icon" />
          <div>
            <h4>{footerData.email.title}</h4>
            <p>{footerData.email.address}</p>
          </div>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <div>
            <h4>{footerData.location.title}</h4>
            <p>{footerData.location.address}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .contact-card {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background: #161616;
    padding: 2rem;
    border-radius: 12px;
    max-width: 400px;
    color: #ffffff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .contact-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  .icon {
    font-size: 2rem;
    color: #51c3c5;
    flex-shrink: 0;
    margin-top: 4px;
  }

  h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: #51c3c5;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #ffffff;
    line-height: 1.4;
  }
`;

export default ContactInfo;
