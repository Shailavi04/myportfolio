import Button from "./Button";
export default function Header() {
    return (
      <header className="text-center text-white py-16 px-4">
        <p className="text-sm mb-2">Hey, I'm</p>
        <h1 className="font-extrabold text-4xl sm:text-5xl mb-2 leading-tight">
          Shailavi Srivastava
        </h1>
        <p className="text-gray-50 sm:text-lg mb-6">
          Seeking valuable opportunities in Full Stack Developement
        </p>
        <div className="flex justify-center gap-4">
  <a href="#contact">
  <Button value="Contact Me" className="bg-white text-black hover:bg-indigo-600 " />
    </a>
</div>
      </header>
    );
  }
  