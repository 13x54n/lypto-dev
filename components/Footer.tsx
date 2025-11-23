import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="font-bold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Payments</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Billing</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Connect</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Payouts</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Developers</h3>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">API Reference</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Status</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-zinc-500">
                    <p>&copy; {new Date().getFullYear()} Lypto Inc. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                        <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
                        <Link href="#" className="hover:text-white transition-colors">Discord</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
