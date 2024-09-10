import "./index.css";
import MentelCounseling from "./Images/mentel cou.png";
import Newsletter from './components/Newsletter';

const Services = () => {
  const services = [
    {
      title: "Therapeutic Counseling",
      description:
        "Access expert counseling services anytime, with skilled professionals ready to help you navigate life's challenges.",
      imageUrl: MentelCounseling,
    },
    {
      title: "Inner circle",
      description:
        "Connect and grow through engaging sessions designed for meaningful conversations and personal development with community support.",
      imageUrl: MentelCounseling,
    },
    {
      title: "Book Appointments",
      description:
        " Easily schedule appointments with healthcare professionals, selecting specialists and times that fit your needs.",
      imageUrl: MentelCounseling,
    },
    {
      title: "Community groups",
      description:
        "Join community groups to connect, share, and engage with others. Participate in discussions and activities that foster a sense of belonging.",
      imageUrl: MentelCounseling,
    },
    {
      title: "Your Gpt",
      description:
        "Get support and practical advice from our therapeutic AI bot, available anytime to complement our other well-being services.",
      imageUrl: MentelCounseling,
    },
    {
      title: "Chatrooms",
      description:
        "Join our interactive chatrooms to connect, share, and engage with others in a supportive and safe environment.",
      imageUrl: MentelCounseling,
    },
  ];

  return (
    <>
      <div className="min-h-screen p-5 md:p-10 flex flex-col items-center">
        <div className="text-center text-black text-3xl font-bold mt-10 mb-8 border-b-2 border-green-800">
          Services
        </div>
        <div className="text-center text-black text-xl font-semibold mb-8">
          Empowering Minds: Our Mental Health Consulting Services
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative h-[400px] md:h-[500px] w-full border-2 rounded-lg transition duration-500 ease-in-out hover:bg-[#D2F6D5] transform hover:-translate-y-1 hover:scale-105">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="z-0 h-[150px] md:h-[200px] w-4/5 ml-5 pb-3 rounded-md object-cover"
              />
              <button className="absolute inset-0 shadow-xl rounded-xl"
                onClick={() => window.location.href = '../Contact.jsx'}>
              </button>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-black">
                  {service.title}
                </h1>
                <p className="mt-2 text-sm text-gray-700">
                  {service.description}
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-lg font-semibold text-black">
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 p-8 bg-green-50">
        <div className="max-w-sm p-6 bg-green-100 rounded-lg shadow-md">
          <img
            className="w-24 h-24 mx-auto mb-4 rounded-full"
            src="https://via.placeholder.com/150" // Replace with actual image URL
            alt="Client"
          />
          <p className="text-center text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam.
          </p>
          <p className="text-center font-bold text-gray-900">George J - Client</p>
        </div>

        <div className="max-w-sm p-6 bg-green-100 rounded-lg shadow-md">
          <img
            className="w-24 h-24 mx-auto mb-4 rounded-full"
            src="https://via.placeholder.com/150" // Replace with actual image URL
            alt="Client"
          />
          <p className="text-center text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam.
          </p>
          <p className="text-center font-bold text-gray-900">George J - Client</p>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default Services;
