import LogoVideo from "../../assets/logoVideo.mp4";
import styled from "styled-components";
function IntroVideo({ onEnd }) {
  const LVideo = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    inset: 0;
    object-fit: cover;
  `;

  return (
    <div className="z-index:1000;">
      <LVideo src={LogoVideo} autoPlay muted onEnded={onEnd}></LVideo>
    </div>
  );
}

export default IntroVideo;
