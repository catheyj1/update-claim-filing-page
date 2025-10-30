export default function App() {
  // Expect these files to be placed under public/assets by the user
  const lululemonLogoUrl = "/assets/lululemon-logo.png";
  const heroImageUrl = "https://cdn.domain-freighter.prod20.narvar.com/lululemon/926cf133-0e63-4e7b-8f3e-f5baa1a8f44c";
  const narvarPoweredUrl = "/assets/powered-by-narvar.png";

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-10 py-4 bg-white border-b border-gray-300 shrink-0">
        <div className="flex items-center">
          <img src={lululemonLogoUrl} alt="lululemon" className="h-5 w-5" />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-black text-[13px] uppercase tracking-wider hover:opacity-70 font-medium">Women</a>
          <a href="#" className="text-black text-[13px] uppercase tracking-wider hover:opacity-70 font-medium">Men</a>
          <a href="#" className="text-black text-[13px] uppercase tracking-wider hover:opacity-70 font-medium">Accessories</a>
          <a href="#" className="text-black text-[13px] uppercase tracking-wider hover:opacity-70 font-medium">Community</a>
        </nav>
        <div className="w-8 hidden md:block"></div>
      </header>

      {/* Main content */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Left panel - Form */}
        <div className="w-full md:w-[540px] lg:w-[600px] bg-[#f5f5f5] flex flex-col shrink-0">
          <div className="flex-1 overflow-y-auto px-6 md:px-10 lg:px-14 py-8 md:py-10">
            {/* Title */}
            <h1 className="mb-3 md:mb-4 text-black text-[22px] md:text-[24px] leading-[1.3]" style={{ fontWeight: 700 }}>Received items that you didn't order?</h1>
            
            {/* Description */}
            <p className="text-black mb-6 md:mb-8 leading-[1.6] text-[13px] md:text-[14px]" style={{ fontWeight: 400 }}>
            We're here to help. If you received items that you didn't order, please fill out this form.
            </p>

            {/* How claims work */}
            <div className="mb-8 md:mb-10">
              <h2 className="mb-4 md:mb-5 text-black text-[14px] md:text-[16px]" style={{ fontWeight: 700 }}>How claims work</h2>
              <ol className="space-y-3 md:space-y-4 text-black text-[13px] md:text-[14px] leading-[1.6]">
                <li className="flex gap-3">
                  <span className="shrink-0 text-black" style={{ fontWeight: 700 }}>1.</span>
                  <span className="text-black" style={{ fontWeight: 400 }}>Please submit only one claim form for your missing packages or items to avoid delays.</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 text-black" style={{ fontWeight: 700 }}>2.</span>
                  <span className="text-black" style={{ fontWeight: 400 }}>We'll review your claim and get back to you within 2–3 business days.</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 text-black" style={{ fontWeight: 700 }}>3.</span>
                  <span className="text-black" style={{ fontWeight: 400 }}>
                    If you're eligible for a refund, we'll email you the next steps. Need more information? Visit our{' '}
                    <a href="#" className="underline hover:no-underline text-black" style={{ fontWeight: 400 }}>
                      Missing Package(s) or Item(s) help page
                    </a>
                    .
                  </span>
                </li>
              </ol>
            </div>

            {/* Form */}
            <div className="space-y-4 md:space-y-5">
              <div>
                <label className="block mb-4 md:mb-5 text-black text-[13px] md:text-[14px]" style={{ fontWeight: 700 }}>
                  Enter your order details.
                </label>
                <input
                  type="text"
                  placeholder="Order Number"
                  className="w-full px-4 py-3 border border-gray-400 bg-white focus:outline-none focus:border-black text-black text-[13px] md:text-[14px]"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-400 bg-white focus:outline-none focus:border-black text-black text-[13px] md:text-[14px]"
                />
              </div>

              <div>
                <label className="block mb-3 text-black text-[13px] md:text-[14px]" style={{ fontWeight: 700 }}>
                  Let us know what we can help you with
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-gray-400 bg-white focus:outline-none focus:border-black appearance-none cursor-pointer pr-10 text-black text-[13px] md:text-[14px]">
                    <option>Select a reason</option>
                    <option>All items in order are incorrect</option>
                    <option>Only some items are incorrect</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 md:py-4 uppercase tracking-[0.1em] hover:bg-gray-900 transition-colors mt-3 md:mt-4 text-[12px] md:text-[13px] text-center" style={{ fontWeight: 700 }}>
                START A CLAIM
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 md:px-10 lg:px-14 py-5 md:py-6 border-t border-gray-300 shrink-0">
            <div className="flex items-center gap-2">
              <img src={narvarPoweredUrl} alt="Powered by Narvar" className="h-3 w-auto opacity-70" />
            </div>
          </div>
        </div>

        {/* Right panel - Image */}
        <div className="hidden md:flex flex-1 relative overflow-hidden">
          <img
            src={heroImageUrl}
            alt="Hero"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center center' }}
          />
        </div>
      </div>
    </div>
  );
}
