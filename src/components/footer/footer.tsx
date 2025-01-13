import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full py-12 px-32 bg-gray-300 flex justify-between"
      id="footer-section"
    >
      <div>
        <p>&copy; Zari Glanz</p>
        <p>
          Founded by <span className="italic ">Arun J-I</span>
        </p>
      </div>
      <div>
        <h3 className="text-zinc-500 text-sm">Socials</h3>
        <ul className="list-none">
          <li>
            <Link href="https://www.instagram.com/zariglanz">Instagram</Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/zariglanz">Facebook</Link>
          </li>
          <li>
            <Link href="https://www.tiktok.com/zariglanz">TikTok</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
