import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary p-6 sm:p-10 text-white">
      <div className="container mx-auto w-[90%]">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <span className="footer-title">Services</span>
            <Link href="/" passHref>
              <a className="link-hover block cursor-pointer">Branding</a>
            </Link>
            <Link href="/" passHref>
              <a className="link-hover block cursor-pointer">Design</a>
            </Link>
            <Link href="/" passHref>
              <a className="link-hover block cursor-pointer">Marketing</a>
            </Link>
            <Link href="/" passHref>
              <a className="link-hover block cursor-pointer">Advertisement</a>
            </Link>
          </div>

          <div className="space-y-4">
            <span className="footer-title">Company</span>
            <Link href="/" passHref>
              <a className="link-hover block cursor-pointer">About us</a>
            </Link>
            <Link href="/" passHref>
              <a className="link-hover block cursor-pointer">Contact</a>
            </Link>
            <Link href="/" passHref>
              <a className="link-hover block cursor-pointer">Jobs</a>
            </Link>
            <Link href="/" passHref>
              <a className="link-hover block cursor-pointer">Press kit</a>
            </Link>
          </div>

          <div className="space-y-4">
            <span className="footer-title">Legal</span>
            <Link href="/" passHref>
              <a className="link-hover block cursor-pointer">Terms of use</a>
            </Link>
            <Link href="/" passHref>
              <a className="link-hover block cursor-pointer">Privacy policy</a>
            </Link>
            <Link href="/" passHref>
              <a className="link-hover block cursor-pointer">Cookie policy</a>
            </Link>
          </div>

          <div className="space-y-4">
            <span className="footer-title">Follow us</span>
            <Link href="/" passHref>
              <a className="link-hover block cursor-pointer">Facebook</a>
            </Link>
            <Link href="https://x.com/SecureBootSammy" passHref>
              <a className="link-hover block cursor-pointer">Twitter</a>
            </Link>
            <Link
              href="https://portfolio-git-master-bobleeswagger09s-projects.vercel.app/"
              passHref
            >
              <a className="link-hover block cursor-pointer">Portfolio</a>
            </Link>
            <Link
              href="https://www.linkedin.com/in/victor-samuel-42a092220/"
              passHref
            >
              <a className="link-hover block cursor-pointer">LinkedIn</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
