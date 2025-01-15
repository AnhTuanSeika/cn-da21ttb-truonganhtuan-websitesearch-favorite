import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const menufooter = [
  { label: "Facebook", link: "/facebook" },
  { label: "Twitter", link: "/twitter" },
  { label: "Instagram", link: "/instagram" },
  { label: "pinterest", link: "/pinterest" },
  { label: "linkedin", link: "/linkedin" },
  { label: "youtube", link: "/youtube" },
];

function Footer() {
  return (
    <footer className="container footer-container">
      <div className="footer-top">
        <span>Đăng ký nhận bản tin của chúng tôi</span>

        <div className="input-container">
          <input
            id="input-field"
            placeholder="Nhập email"
            className="input-field"
            type="text"
          />
          <label htmlFor="input-field" className="input-label">
            Email
          </label>
          <span className="input-highlight"></span>
        </div>
      </div>
      <div className="footer-body">
        <div style={{ width: "200px" }}>
          <img src={logo} />
          <span className="spanlogo">
            NGUỒN HÀNG ĐẦU CHO NGHỆ THUẬT
            <br />
            TIN TỨC & NGHỆ THUẬT SỰ KIỆN
          </span>
        </div>
        <div className="footer-body1">
          <h3>TRUYỀN THÔNG NGHỆ THUẬT</h3>
          <p>Về chúng tôi</p>
          <p>Khả năng tiếp cận</p>
          <p>Quảng cáo</p>
          {/* <p>PCM Fashion & Luxury</p> */}
        </div>
        <div>
          <h3>HỢP PHÁP</h3>
          <p>Đội ngũ sử dụng</p>
          <p>Chính sách bảo mật</p>
          <p>Lựa chọn quảng cáo</p>
          {/* <p>EU Privacy Preferences</p> */}
        </div>
      </div>
      <div className="footer1">
        <div className="footer2">
          <h3>GỬI PHẢN HỒI CHO CHÚNG TÔI</h3>

          {/* <MOVEUPRIGHT/>  */}
        </div>
        <div className="footer-bottom">
          {menufooter.map((menufooter, index) => (
            <Link
              className="footer-bottom-link"
              key={index}
              to={menufooter.link}
            >
              {menufooter.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
// style={{ padding: '10px', width: '200px', marginRight: '10px' } }
