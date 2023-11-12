import { GitHub, Instagram, Twitter } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Divider } from "@mui/material";

const Footer = () => {
  return (
    <>
      <></>
      <>
        <footer className="bg-[#eee] flex justify-center md:justify-start md:mt-10 mt-5 lg:mt-20">
          <div className="mx-auto max-w-screen-xl space-y-4 px-4 py-4 sm:px-6 lg:space-y-6 lg:px-8">
            <div className="sm:flex sm:items-center gap-10 sm:justify-between">
              <div className="">
                <img src="https://i.ibb.co/Ry3S090/Food-AND-Beverage.png"></img>
              </div>
              <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>
                    <FacebookIcon></FacebookIcon>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>

                    <Instagram></Instagram>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>
                    <Twitter></Twitter>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">GitHub</span>

                    <GitHub></GitHub>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-32 sm:grid-cols-2 lg:grid-cols-4 lg:pt-6">
              <div>
                <Divider
                  light
                  sx={{
                    marginBottom: "15px",
                    width: "200px",
                  }}
                ></Divider>
                <p className="font-medium text-gray-900">Services</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      1on1 Coaching
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-700 transition hover:opacity-75">
                      Community Review
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Accounts Review
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      HR Consulting
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      SEO Optimisation
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <Divider
                  light
                  sx={{
                    marginBottom: "15px",
                    width: "200px",
                  }}
                ></Divider>
                <p className="font-medium text-gray-900">Company</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Accounts Review
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <Divider
                  light
                  sx={{
                    marginBottom: "15px",
                    width: "200px",
                  }}
                ></Divider>
                <p className="font-medium text-gray-900">Helpful Links</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Contact
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Live Chat
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <Divider
                  light
                  sx={{
                    marginBottom: "15px",
                    width: "200px",
                  }}
                ></Divider>
                <p className="font-medium text-gray-900">Legal</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Accessibility
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Returns Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Refund Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Hiring Statistics
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-xs text-center text-gray-500">
              &copy; 2022. Community Food. All rights reserved.
            </p>
          </div>
        </footer>
      </>
    </>
  );
};

export default Footer;
