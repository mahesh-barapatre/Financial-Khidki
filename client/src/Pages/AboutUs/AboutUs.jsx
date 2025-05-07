import { Icon } from "@iconify/react";

const AboutUs = () => {
  const social = [
    {
      name: "Instagram",
      icon: "skill-icons:instagram",
      img: "",
      url: "",
    },
    {
      name: "Twitter",
      icon: "skill-icons:twitter",
      img: "",
      url: "",
    },
    {
      name: "LinkedIn",
      icon: "skill-icons:linkedin",
      img: "",
      url: "http://www.linkedin.com/in/financial-khidkey-714815364",
    },
    {
      name: "Facebook",
      icon: "",
      img: "",
      url: "https://www.facebook.com/profile.php?id=61575036833090",
    },
  ];

  return (
    <div className="p-6 mt-36 md:mt-0 flex flex-col md:flex-row items-center gap-6 w-full min-h-screen m-auto">
      {/* Content Section */}
      <div className="flex flex-col justify-center items-center text-left">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">About Us</h2>
        <p className="text-gray-700 md:w-1/2">
          Welcome to Financial Khidki, your trusted partner in securing a
          financially stable future. Founded by{" "}
          <span className="font-semibold">Kshitij Gutpa</span>, we specialize in
          providing expert insurance and investment solutions tailored to your
          needs. Our mission is to empower individuals and businesses with the
          right financial strategies, ensuring long-term security and growth.
          <br />
          <br /> At <span className="font-semibold">Financial Khidki</span>, we
          believe that financial planning should be simple, transparent, and
          accessible to everyone. Whether you are looking for the best insurance
          coverage or smart investment opportunities, we are here to guide you
          every step of the way. With our in-depth market knowledge and
          customer-centric approach, we help you make informed decisions for a
          secure tomorrow. <br />
          <br />
          Let us open the window to your financial success!
        </p>

        {/* Social Media Links */}
        <div className="flex w-1/2 gap-4 mt-4 justify-start">
          {social.map((site, i) => (
            <SocialCard key={i} item={site} />
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="p-3 m-auto w-1/2">
        <img
          src="https://via.placeholder.com/300"
          alt="About Us"
          className="w-60 h-60 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

const SocialCard = ({ item }) => {
  return (
    <div
      className="hover:scale-125 transition-all ease-in-out duration-100"
      onClick={() => window.open(item.url, "_blank")}
      //   className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
    >
      {item.icon ? (
        <Icon icon={item.icon} width="24" />
      ) : (
        <img
          src="/images/10464408.png"
          alt="logo"
          className="w-12 relative bottom-3 right-3"
        />
      )}
      {/* <span className="text-lg">{item.name}</span> */}
    </div>
  );
};

export default AboutUs;
