export default function Footer() {

  return (
    <div className="flex flex-col items-center p-8 min-w-screen text-white bg-black">

      <div className="text-3xl  mb-6">
        Contact Information
      </div>

      <div className="flex items-center w-full px-20 justify-between">
        <a href="https://github.com/ptashi" target="_blank" className="flex githubIcon rounded-lg">
            <image src="/assets/images/github-icon.svg" alt="GitHub Link" width={50} height={50} />
        </a>
        <a href="https://www.linkedin.com/in/pemactashi" target="_blank" className="flex linkedinIcon rounded-lg">
            <image src="/assets/images/linkedin-icon.svg" alt="LinkedIn Link" width={50} height={50} />
        </a>
        <a href="https://www.instagram.com/_pematashi_" target="_blank" className="flex instaIcon rounded-lg">
            <image src="/assets/images/instagram-icon.svg" alt="insta Link" width={50} height={50} />
        </a>
      </div>
    </div>

  );
};
