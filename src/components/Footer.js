import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div class="footer">
      Created By
      <FontAwesomeIcon icon="fa-solid fa-heart" style={{ color: "#bb3e30" }} />
      <a
        href="https://www.linkedin.com/in/jiteshKhurana/"
        target="_blank"
        title="Jitesh Khurana's Linkedin Profile"
      >
        Jitesh Khurana
      </a>
      <strong>Foodify</strong>
    </div>
  );
};
export default Footer;
