import React from 'react';
import image11 from '../assets/user.png'
import image22 from '../assets/package.png'
import image33 from '../assets/rocket.png'
const CheckIcon = ({ light }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill={light ? "rgba(255,255,255,0.25)" : "#7C3AED"} />
    <path d="M4.5 8L7 10.5L11.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
 
const steps = [
  {
    num: "01",
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    image:image11
  },
  {
    num: "02",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    image:image22
  },
  {
    num: "03",
    title: "Start Creating",
    desc: "Download tools and start using your premium tools immediately.",
    image:image33
  },
];
 
const plans = [
  {
    name: "Starter",
    tag: "Perfect for getting started",
    price: "$0",
    period: "/Month",
    features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
    cta: "Get Started Free",
    highlight: false,
    badge: null,
  },
  {
    name: "Pro",
    tag: "Best for professionals",
    price: "$29",
    period: "/Month",
    features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
    cta: "Start Pro Trial",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    tag: "For teams and businesses",
    price: "$99",
    period: "/Month",
    features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
    cta: "Contact Sales",
    highlight: false,
    badge: null,
  },
];
const Endling = () => {
    return (
        <div className="font-sans text-gray-900">
 
     
      <section className="bg-violet-50 py-20 px-6 text-center space-y-5">
        <h2 className="text-4xl font-bold mb-2">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mb-12 text-sm">Start using premium digital tools in minutes, not hours.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-violet-100 shadow-sm relative text-left">
              <span className="absolute top-4 right-4 bg-violet-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {step.num}
              </span>
              <img src={step.image} alt="" className='mx-auto' />
              
              <h3 className="text-base font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* Pricing Section */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold mb-2">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mb-12 text-sm">Choose the plan that fits your needs. Upgrade or cancel anytime.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-7 text-left relative transition-all duration-200
                ${plan.highlight
                  ? "bg-violet-600 text-white shadow-2xl scale-105"
                  : "bg-white border border-gray-200 hover:border-violet-400 shadow-sm"
                }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                </span>
              )}
              <p className="text-lg font-bold mb-1">{plan.name}</p>
              <p className={`text-xs mb-4 ${plan.highlight ? "text-violet-200" : "text-gray-400"}`}>{plan.tag}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? "text-violet-300" : "text-gray-400"}`}>{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-7">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <CheckIcon light={plan.highlight} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all
                  ${plan.highlight
                    ? "border-2 border-white/40 bg-white/10 text-white hover:bg-white/20"
                    : "bg-violet-600 text-white hover:bg-violet-700"
                  }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>
 
      {/* CTA Banner */}
      <section className="bg-gradient-to-br from-violet-900 to-violet-600 py-20 px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-3">Ready To Transform Your Workflow?</h2>
        <p className="text-violet-200 mb-8 text-sm">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />Start your free trial today.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button className="px-7 py-3 rounded-lg bg-white text-violet-700 font-semibold text-sm hover:bg-violet-50 transition-all">
            Explore Products
          </button>
          <button className="px-7 py-3 rounded-lg border-2 border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-all">
            View Pricing
          </button>
        </div>
        <p className="text-violet-300 text-xs mt-5">14-day free trial • No credit card required • Cancel anytime</p>
      </section>
 
      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-3">DigiTools</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
            </p>
          </div>
          {[
            { title: "Product", links: ["Features", "Pricing", "Templates", "Integrations"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
            { title: "Resources", links: ["Documentation", "Help Center", "Community", "Contact"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Social Links</h4>
            <div className="flex gap-2">
              {["▶", "f", "in"].map((s, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs text-gray-400 cursor-pointer hover:bg-gray-700 transition-colors">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-wrap justify-between gap-3 max-w-5xl mx-auto text-xs text-gray-600">
          <span>© 2024 Digitools. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
 
    </div>
    );
};

export default Endling;