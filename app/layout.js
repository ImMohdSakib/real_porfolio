import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of MOHD SAKIB - Java Full Stack Developer",
//   description:
//     "This is the portfolio of Abu Said. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
// };

description:
"My name is Mohd Sakib. I am a passionate and dedicated programmer who has completed a course in Java Full Stack Development. I am enthusiastic about learning new technologies and continuously improving my skills. Although I haven't worked professionally yet, I have built several projects to enhance my knowledge and gain hands-on experience. I have a strong foundation in both frontend and backend technologies, with expertise in React.js, Spring Boot, and MySQL. I enjoy solving complex problems and creating dynamic, user-friendly web applications. I am actively looking for opportunities that match my skills and interests, where I can learn, grow, and contribute effectively as a Full Stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
