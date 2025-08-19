import BehanceIcon from "@/components/ui/BehanceIcon";
import MailIcon from "@/components/ui/MailIcon";
import LinkedinIcon from "@/components/ui/LinkedinIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: MailIcon,
      href: "mailto:nandakumarb02@gmail.com",
      label: "Email"
    },
    {
      icon: LinkedinIcon,
      href: "https://linkedin.com/in/nanda-kumar-balasubramanian",
      label: "LinkedIn"
    },
    {
      icon: BehanceIcon,
      href: "https://behance.net/nandakumarb",
      label: "Behance"
    }
  ];

  const handleScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative py-12 border-t border-[#e5e5e5] bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">
              NANDA KUMAR
            </h3>
            <p className="text-black">
              UI/UX Designer
            </p>
          </div>

          {/* Center - Nav Links */}
          <div className="flex justify-center items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleScroll(item.href)}
                className="text-black hover:text-accent transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Right - Copyright */}
          <div className="flex justify-center md:justify-end space-x-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 group"
                  aria-label={link.label}
                >
                  <IconComponent className="h-5 w-5 text-black group-hover:text-blue-500 transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center">
          <p className="text-base text-gray-600 mb-4">
            Designing purposeful interfaces that just work.
          </p>
          <p className="text-xs text-gray-400">
            © 2025 Nanda Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
