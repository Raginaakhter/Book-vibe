

const Footer = () => {
  return (
    <div>
      <section className="py-10 bg-white sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
            <div className="col-span-2 md:col-span-4 xl:pr-8">
              <img
                className="w-auto h-9"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                alt=""
              />

              <p className="text-base leading-relaxed text-gray-600 mt-7">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>

              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 mt-7"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Start Live Chat
              </a>
            </div>

            {/* Reusable Column Section */}
            {[
              {
                title: 'Company',
                items: ['About', 'Features', 'Works', 'Career'],
              },
              {
                title: 'Help',
                items: [
                  'Customer Support',
                  'Delivery Details',
                  'Terms & Conditions',
                  'Privacy Policy',
                ],
              },
              {
                title: 'Resources',
                items: [
                  'Free eBooks',
                  'Development Tutorial',
                  'How to - Blog',
                  'YouTube Playlist',
                ],
              },
              {
                title: 'Extra Links',
                items: [
                  'Customer Support',
                  'Delivery Details',
                  'Terms & Conditions',
                  'Privacy Policy',
                ],
              },
            ].map((col, index) => (
              <div className="lg:col-span-2" key={index}>
                <p className="text-base font-semibold text-gray-900">
                  {col.title}
                </p>
                <ul className="mt-6 space-y-5">
                  {col.items.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <hr className="mt-16 mb-10 border-gray-200" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600">
              © Copyright 2021, All Rights Reserved by Postcraft
            </p>

            <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
              {/* Social Media Icons */}
              {[
                // Twitter
                `<path d="M19.633 7.997c..."/>`,
                // Facebook
                `<path d="M13.397 20.997v..."/>`,
                // Instagram
                `<path d="M11.999 7.377a..."/><circle cx="16.806" cy="7.207" r="1.078"/>`,
                // GitHub
                `<path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c..."/>`,
              ].map((path, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                    dangerouslySetInnerHTML={{
                      __html: `<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">${path}</svg>`,
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
