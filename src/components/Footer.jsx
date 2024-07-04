const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <nav className="mb-4">
          <a href="/about" className="mx-2">About</a>
          <a href="/contact" className="mx-2">Contact</a>
          <a href="/privacy-policy" className="mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className="mx-2">Terms of Service</a>
        </nav>
        <p>&copy; 2023 Financial News. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;