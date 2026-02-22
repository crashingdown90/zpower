import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import BackToTop from '@/components/BackToTop';
import { Smartphone, Search, User, Briefcase, Star, Shield, Zap, ArrowLeft, Check } from 'lucide-react';

export const metadata = {
    title: 'Mockup Aplikasi Z-Talent | HIPMI Z-POWER',
    description: 'Preview platform digital Z-Talent Marketplace — menghubungkan talenta kreatif Zilenial dengan kebutuhan bisnis HIPMI.',
};

export default function MockupPage() {
    const features = [
        {
            icon: <Search size={24} />,
            title: 'Smart Matching AI',
            desc: 'Algoritma AI mencocokkan talenta terbaik dengan kebutuhan proyek bisnis secara otomatis.',
        },
        {
            icon: <User size={24} />,
            title: 'Talent Registry',
            desc: 'Profil lengkap dengan portofolio, skill verification, dan rating dari klien.',
        },
        {
            icon: <Briefcase size={24} />,
            title: 'Project Board',
            desc: 'Papan proyek terbuka di mana bisnis HIPMI memposting kebutuhan dan talenta melamar.',
        },
        {
            icon: <Shield size={24} />,
            title: 'Payment Gateway',
            desc: 'Sistem pembayaran aman dengan escrow, milestone, dan invoice transparan.',
        },
        {
            icon: <Star size={24} />,
            title: 'Review & Rating',
            desc: 'Sistem review dua arah untuk menjaga kualitas kolaborasi.',
        },
        {
            icon: <Zap size={24} />,
            title: 'Skill Verification',
            desc: 'Verifikasi skill melalui assessment dan sertifikasi terintegrasi Z-Academy.',
        },
    ];

    const screens = [
        {
            image: '/images/mockup-dashboard.png',
            title: 'Dashboard Utama',
            desc: 'Overview lengkap: statistik talenta aktif, proyek berjalan, pendapatan, dan chart performa bulanan. Navigasi intuitif untuk akses cepat ke semua fitur.',
            highlights: ['Statistik real-time', 'Chart performa', 'Recent projects', 'Quick actions'],
        },
        {
            image: '/images/mockup-talent-profile.png',
            title: 'Profil Talenta',
            desc: 'Halaman profil detail dengan portofolio visual, skill tags terverifikasi, riwayat kerja, dan review dari klien sebelumnya. Tombol "Hire Now" untuk langsung rekrut.',
            highlights: ['Portofolio visual', 'Skill verification badge', 'Client reviews', 'Hire Now CTA'],
        },
        {
            image: '/images/mockup-project-board.png',
            title: 'Project Board',
            desc: 'Kanban-style board dengan 4 kolom status: Open, In Progress, Review, dan Completed. Filter berdasarkan kategori, budget, dan skill requirement.',
            highlights: ['Kanban workflow', 'Budget range filter', 'Skill tag matching', 'Applicant count'],
        },
    ];

    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="page-hero">
                    <div className="container">
                        <Link href="/" className="back-link"><ArrowLeft size={16} /> Kembali ke Beranda</Link>
                        <span className="section-badge"><Smartphone size={14} /> PLATFORM DIGITAL</span>
                        <h1 className="page-hero-title">Z-Talent <span className="text-gradient">Marketplace</span></h1>
                        <p className="page-hero-desc">
                            Platform digital yang menghubungkan talenta kreatif Zilenial dengan kebutuhan
                            bisnis anggota HIPMI — solusi talent marketplace pertama khusus Jawa Tengah.
                        </p>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Fitur <span className="text-gradient">Utama</span></h2>
                        </div>
                        <div className="features-grid">
                            {features.map((feature, i) => (
                                <div key={i} className="feature-card">
                                    <div className="feature-icon">{feature.icon}</div>
                                    <h4>{feature.title}</h4>
                                    <p>{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mockup Screenshots */}
                <section className="section">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge"><Smartphone size={14} /> MOCKUP PREVIEW</span>
                            <h2 className="section-title">Preview <span className="text-gradient">Tampilan</span> Aplikasi</h2>
                        </div>
                        <div className="mockup-screens">
                            {screens.map((screen, i) => (
                                <div key={i} className={`mockup-item ${i % 2 === 1 ? 'reverse' : ''}`}>
                                    <div className="mockup-image">
                                        <Image
                                            src={screen.image}
                                            alt={screen.title}
                                            width={700}
                                            height={500}
                                            style={{ objectFit: 'contain', width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}
                                        />
                                    </div>
                                    <div className="mockup-info">
                                        <h3>{screen.title}</h3>
                                        <p>{screen.desc}</p>
                                        <ul className="mockup-highlights">
                                            {screen.highlights.map((h, j) => (
                                                <li key={j}><Check size={14} /> {h}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Rencana <span className="text-gradient">Teknologi</span></h2>
                        </div>
                        <div className="tech-grid">
                            <div className="tech-card">
                                <h4>🖥️ Frontend</h4>
                                <p>React.js / Next.js dengan design system modern untuk pengalaman responsif di semua device.</p>
                            </div>
                            <div className="tech-card">
                                <h4>⚙️ Backend</h4>
                                <p>Node.js dengan RESTful API dan WebSocket untuk real-time notifications dan chat.</p>
                            </div>
                            <div className="tech-card">
                                <h4>🤖 AI Engine</h4>
                                <p>Machine Learning untuk smart matching talenta-proyek berdasarkan skill, rating, dan preferensi.</p>
                            </div>
                            <div className="tech-card">
                                <h4>💳 Payment</h4>
                                <p>Integrasi payment gateway (Midtrans/Xendit) dengan escrow system dan milestone payments.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <ScrollReveal />
            <BackToTop />
        </>
    );
}
