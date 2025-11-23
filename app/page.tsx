import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import FeatureCard from "@/components/FeatureCard";
import FadeIn from "@/components/animations/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-400 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
            New: Multi-chain stablecoin support
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            The financial infrastructure<br />
            <span className="text-indigo-400">for the crypto economy</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed mx-auto">
            Lypto provides the APIs and tools for businesses to accept crypto payments,
            manage stablecoin treasuries, and automate global payouts.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto">
              Start now
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Contact sales
            </Button>
          </div>
        </FadeIn>

        {/* Hero Visual / Code Snippet */}
        <FadeIn delay={0.6} className="w-full flex justify-center">
          <div className="mt-20 w-full max-w-4xl rounded-xl bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <div className="p-6 overflow-x-auto text-left">
              <pre className="font-mono text-sm text-zinc-300">
                <code>
                  <span className="text-purple-400">const</span> <span className="text-blue-400">payment</span> = <span className="text-purple-400">await</span> lypto.charges.<span className="text-yellow-300">create</span>({`{`}
                  {'\n'}  amount: <span className="text-green-400">1000</span>,
                  {'\n'}  currency: <span className="text-green-400">'usdc'</span>,
                  {'\n'}  customer: <span className="text-green-400">'cus_12345'</span>,
                  {'\n'}  chain: <span className="text-green-400">'solana'</span>
                  {'\n'}{`}`});
                </code>
              </pre>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Social Proof */}
      <section className="w-full border-y border-white/5 bg-white/2 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn delay={0.2}>
            <p className="text-sm font-medium text-zinc-500 mb-8 uppercase tracking-wider">Trusted by forward-thinking companies</p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos */}
            <FadeIn delay={0.1} direction="none"><div className="text-xl font-bold text-white">ACME Corp</div></FadeIn>
            <FadeIn delay={0.2} direction="none"><div className="text-xl font-bold text-white">GlobalBank</div></FadeIn>
            <FadeIn delay={0.3} direction="none"><div className="text-xl font-bold text-white">TechStart</div></FadeIn>
            <FadeIn delay={0.4} direction="none"><div className="text-xl font-bold text-white">FutureFi</div></FadeIn>
            <FadeIn delay={0.5} direction="none"><div className="text-xl font-bold text-white">BlockSys</div></FadeIn>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything you need to accept crypto</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-zinc-400 text-lg">
              Lypto handles the complexity of blockchain integration, compliance, and liquidity so you can focus on your business.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            index={0}
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
            title="Instant Settlement"
            description="Receive funds in seconds, not days. Settlement to your bank account or crypto wallet instantly."
          />
          <FeatureCard
            index={1}
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>}
            title="Enterprise Security"
            description="Bank-grade security with SOC2 compliance, multi-sig wallets, and automated fraud detection."
          />
          <FeatureCard
            index={2}
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
            title="Global Coverage"
            description="Accept payments from anywhere in the world. Support for 135+ currencies and major blockchains."
          />
          <FeatureCard
            index={3}
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>}
            title="Developer First"
            description="Powerful APIs, SDKs, and webhooks designed for developers. Get up and running in minutes."
          />
          <FeatureCard
            index={4}
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>}
            title="Real-time Analytics"
            description="Track your revenue, payouts, and conversion rates in real-time with our powerful dashboard."
          />
          <FeatureCard
            index={5}
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
            title="Low Fees"
            description="Save up to 80% on transaction fees compared to traditional payment processors."
          />
        </div>
      </section>

      {/* Developer Experience Section */}
      <section id="developers" className="w-full bg-zinc-900/30 border-y border-white/5 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for developers,<br />by developers</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-zinc-400 text-lg mb-8">
                Our API is designed to be intuitive and powerful. We provide SDKs for all major languages and frameworks, so you can integrate Lypto into your stack with ease.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-zinc-300">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Typed SDKs for TS, Python, Go, and more
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Comprehensive documentation and guides
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Sandbox environment for testing
                </li>
              </ul>
              <Button variant="secondary">Read the docs</Button>
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={0.3}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-20"></div>
              <div className="relative rounded-xl bg-black border border-white/10 p-6">
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                  <span className="text-sm font-mono text-zinc-500">webhook.ts</span>
                  <span className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-500">Active</span>
                </div>
                <pre className="font-mono text-sm text-zinc-300 overflow-x-auto">
                  <code>
                    <span className="text-purple-400">import</span> {'{'} Lypto {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'lypto-node'</span>;
                    {'\n'}
                    {'\n'}<span className="text-purple-400">const</span> webhook = <span className="text-purple-400">async</span> (req, res) ={'>'} {'{'}
                    {'\n'}  <span className="text-purple-400">const</span> event = lypto.webhooks.<span className="text-yellow-300">constructEvent</span>(
                    {'\n'}    req.body,
                    {'\n'}    req.headers[<span className="text-green-400">'lypto-signature'</span>]
                    {'\n'}  );
                    {'\n'}
                    {'\n'}  <span className="text-purple-400">if</span> (event.type === <span className="text-green-400">'payment.succeeded'</span>) {'{'}
                    {'\n'}    <span className="text-purple-400">await</span> fulfillOrder(event.data.object);
                    {'\n'}  {'}'}
                    {'\n'}{'}'};
                  </code>
                </pre>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-zinc-400 mb-10">
            Create an account and start accepting crypto payments in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">Create free account</Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">Contact sales</Button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
