import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 w-full mt-auto">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-2">Siddharam Sutar</h2>
        <p className="text-gray-400">Age: 20</p>
        <p className="text-gray-400">📞 +91 9767738681</p>
        <p className="text-gray-400">📧 siddharamsutar23@gmail.com</p>
        <div className="mt-4">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Siddharam Sutar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
