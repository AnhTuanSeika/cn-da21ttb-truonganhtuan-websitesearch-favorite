import { Link } from "react-router-dom";
const menucontactus = [
  { label: "Facebook", link: "/facebook" },
  { label: "Twitter", link: "/twitter" },
  { label: "Instagram", link: "/instagram" },
  { label: "pinterest", link: "/pinterest" },
  { label: "linkedin", link: "/linkedin" },
  { label: "youtube", link: "/youtube" },
];
const listcontact = [
  {
    title: "anhtuangenz@gmail.com",
    title1: "+8438 773 6690",
    description: "Tổng biên tập:",
  },
  // {
  //   title: "guide@newssport.com",
  //   description: "the Art in America Guide",
  // },
  {
    title: "aiaeditor@newssport.com",
    description: "Thư gửi biên tập viên",
  },
  {
    title: "PMC@wrightsmedia.com",
    description: "Accolades and Article Reprints & Permissions",
  },
  {
    title: "ads@newssport.com",
    description: "Phòng Quảng cáo",
  },
  // {
  //   title: "Finance@artmediaholdings.com",
  //   description: "Advertising Deponment",
  // },
  {
    title: "info@newssport.com",
    description: "Website",
  },
];

function contactpage() {
  return (
    <div className="contactUS">
      <div>
        <div className="title">
          <h1 className="h1">LIÊN HỆ VỚI CHÚNG TÔI</h1>
        </div>
      </div>
      <div className="body-contact">
        <div className="contact-top">
          <h3 className="h3-1">
            Chúng tôi nỗ lực hết sức để trả lời các câu hỏi và đảm bảo trải
            nghiệm của bạn về NEWS SPORT tốt nhất có thể.
          </h3>
          <p className="p1-1">
          Trên trang này bạn có thể tìm hiểu cách liên hệ với chúng tôi.
          </p>
        </div>
        <div className="contact-body">
          <div className="cols-span-1">
            <h2 className="h2">126 Nguyễn Thiện Thành, Phường 5, Trà Vinh.</h2>
          </div>
          <div className="cols-span-2 grid grid-col-2 gap-10 gap-x-40">
            {listcontact.map((item, index) => (
              <div key={index}>
                <div>
                  <p style={{ fontSize: "22px" }}>{item.description}</p>
                  {item.title1 && <h3>{item.title1}</h3>}
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-bottom">
          <div className="contact-bottom1"></div>
          <div className="contact-bottom12">
            <div>
              <p>Follow us</p>
            </div>
            <div>
              {menucontactus.map((menucontactus, index) => (
                <Link
                  className="contactus-bottom-link"
                  key={index}
                  to={menucontactus.link}
                >
                  {menucontactus.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contactpage;
