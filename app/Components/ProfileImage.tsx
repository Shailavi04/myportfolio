import Card from '../Components/Card';
const profileCards = [
  {
    title: "📧 Email:",
    desc: "shailavisrivastava977@gmail.com",
  },
  {
    title: "📞 Phone:",
    desc: "+91 8299630439",
  },
  {
    title: "📅 Date of Birth:",
    desc: "2004-09-04",
  },
];

  
      
export default function ProfileImage() {
  return (
    <section className="p-0 text-black space-y-6">
      <img
        src="MyProfilePhoto.jpeg"
        alt="Portrait"
        className="tralate transform hover:scale-105 w-50 h-50 rounded-full object-cover mx-auto sm:mx-0 border-red-500 drop-shadow-2xl shadow-lg shadow-gray-500/50"
      />
     {profileCards.map((card, index) => (
             <Card
               key={index}
               title={card.title}
               desc={card.desc}
               width="w-full sm:w-[250px] rounded-sm drop-shadow-2xl bg-blue-300 hover:bg-blue-400"
             />
           ))}
    </section>

    );}
