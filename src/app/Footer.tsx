export default function Footer() {
  return (
    <footer className="bg-secondary p-10 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <span className="footer-title">Services</span>
            <a
              href="/branding"
              className="link-hover link block cursor-pointer"
            >
              Branding
            </a>
            <a href="/design" className="link-hover link block cursor-pointer">
              Design
            </a>
            <a
              href="/marketing"
              className="link-hover link block cursor-pointer"
            >
              Marketing
            </a>
            <a
              href="/advertisement"
              className="link-hover link block cursor-pointer"
            >
              Advertisement
            </a>
          </div>

          <div>
            <span className="footer-title">Company</span>
            <a href="/about" className="link-hover link block cursor-pointer">
              About us
            </a>
            <a href="/contact" className="link-hover link block cursor-pointer">
              Contact
            </a>
            <a href="/jobs" className="link-hover link block cursor-pointer">
              Jobs
            </a>
            <a
              href="/press-kit"
              className="link-hover link block cursor-pointer"
            >
              Press kit
            </a>
          </div>

          <div>
            <span className="footer-title">Legal</span>
            <a
              href="/terms-of-use"
              className="link-hover link block cursor-pointer"
            >
              Terms of use
            </a>
            <a
              href="/privacy-policy"
              className="link-hover link block cursor-pointer"
            >
              Privacy policy
            </a>
            <a
              href="/cookie-policy"
              className="link-hover link block cursor-pointer"
            >
              Cookie policy
            </a>
          </div>

          <div>
            <span className="footer-title">Follow us</span>
            <a
              href="https://facebook.com"
              className="link-hover link block cursor-pointer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              className="link-hover link block cursor-pointer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              className="link-hover link block cursor-pointer"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              className="link-hover link block cursor-pointer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
