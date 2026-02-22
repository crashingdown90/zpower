import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import BackToTop from '@/components/BackToTop';
import {
    Rocket, GraduationCap, BarChart3, Wallet, Sprout, Factory,
    Globe, Trophy, Users, PartyPopper, Scale, Landmark, ArrowLeft, Check
} from 'lucide-react';

export const metadata = {
    title: 'Rencana Pengembangan | HIPMI Z-POWER',
    description: 'Program pengembangan masa depan kolaborasi HIPMI × Zilenial: Z-Academy, Z-Dashboard, Z-Fintech, Z-Awards, dan lainnya.',
};

export default function PengembanganPage() {
    const highPriority = [
        {
            icon: <GraduationCap size={28} />,
            title: 'Z-Academy',
            tag: 'E-Learning Platform',
            desc: 'Platform pembelajaran online khusus Zilenial yang terintegrasi dengan Z-Talent Marketplace.',
            features: [
                'Video course & live workshop',
                'Kurikulum oleh praktisi HIPMI',
                'Sertifikat kompetensi',
                'Auto-masuk Z-Talent Pool',
            ],
            timeline: 'Q2 2025',
            color: 'blue',
        },
        {
            icon: <BarChart3 size={28} />,
            title: 'Z-Dashboard',
            tag: 'Data Command Center',
            desc: 'Dashboard terpusat untuk monitoring real-time seluruh program HIPMI Z-POWER.',
            features: [
                'Peta interaktif per wilayah',
                'KPI tracker real-time',
                'Economic Impact Index',
                'Early Warning System',
            ],
            timeline: 'Q2 2025',
            color: 'purple',
        },
        {
            icon: <Wallet size={28} />,
            title: 'Z-Fintech',
            tag: 'Akses Permodalan',
            desc: 'Menjembatani Zilenial dengan sumber permodalan yang sesuai kebutuhan bisnis.',
            features: [
                'Peer-to-Peer Lending',
                'Crowdfunding Produk',
                'Invoice Financing',
                'Grant Matching',
            ],
            timeline: 'Q3 2025',
            color: 'orange',
        },
        {
            icon: <Users size={28} />,
            title: 'Z-Mentor Circle',
            tag: 'Pendampingan Berkelanjutan',
            desc: 'Sistem mentoring terstruktur pengusaha senior HIPMI mendampingi Zilenial secara berkelanjutan.',
            features: [
                '1-on-1 Mentoring (1:5)',
                'Group Mastermind bulanan',
                'Reverse Mentoring',
                'Emergency Hotline',
            ],
            timeline: 'Q1 2025',
            color: 'green',
        },
        {
            icon: <Scale size={28} />,
            title: 'Legal & Compliance Hub',
            tag: 'Layanan Hukum Terpusat',
            desc: 'Konsultasi hukum, template legal, dan pendampingan legalitas usaha untuk Zilenial.',
            features: [
                'Konsultasi hukum gratis',
                'Template dokumen standar',
                'Pendampingan izin usaha',
                'Workshop compliance',
            ],
            timeline: 'Q2 2025',
            color: 'blue',
        },
    ];

    const medPriority = [
        {
            icon: <Sprout size={24} />,
            title: 'Z-Agri & Z-Maritim',
            desc: 'Digitalisasi sektor primer: smart farming, marketplace hasil bumi, fisheries tech.',
            timeline: 'Q4 2025',
        },
        {
            icon: <Factory size={24} />,
            title: 'Z-Industry Link',
            desc: 'Fasilitasi UMKM Zilenial menjadi vendor/supplier perusahaan besar anggota HIPMI.',
            timeline: 'Q1 2026',
        },
        {
            icon: <Globe size={24} />,
            title: 'Z-Global',
            desc: 'Akselerasi ekspor produk Zilenial: audit readiness, collective brand, market access.',
            timeline: 'Q2 2026',
        },
        {
            icon: <Trophy size={24} />,
            title: 'Z-Awards',
            desc: 'Penghargaan tahunan: Best Rising Entrepreneur, Best Digital Talent, Best Social Impact.',
            timeline: 'Q4 2025',
        },
        {
            icon: <PartyPopper size={24} />,
            title: 'Z-Festival',
            desc: 'Festival besar tahunan: Expo Zone, Stage Zone, Networking Zone, Experience Zone.',
            timeline: 'Q3 2026',
        },
        {
            icon: <Landmark size={24} />,
            title: 'Policy Advocacy',
            desc: 'White paper tahunan, policy dialogue dengan DPRD, regulatory sandbox untuk startup.',
            timeline: 'Q3 2025',
        },
    ];

    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="page-hero">
                    <div className="container">
                        <a href="/" className="back-link"><ArrowLeft size={16} /> Kembali ke Beranda</a>
                        <span className="section-badge"><Rocket size={14} /> PENGEMBANGAN</span>
                        <h1 className="page-hero-title">Rencana <span className="text-gradient">Pengembangan</span></h1>
                        <p className="page-hero-desc">
                            12 program pengembangan masa depan untuk memperkuat dan memperluas
                            dampak kolaborasi HIPMI × Zilenial Jawa Tengah.
                        </p>
                    </div>
                </section>

                {/* High Priority */}
                <section className="section">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge" style={{ background: 'rgba(220,38,38,0.15)', color: '#F87171', borderColor: 'rgba(220,38,38,0.25)' }}>🔴 PRIORITAS TINGGI</span>
                            <h2 className="section-title">Program <span className="text-gradient">Utama</span></h2>
                            <p className="section-desc">Program berprioritas tinggi yang menjadi fondasi ekosistem digital kolaborasi.</p>
                        </div>
                        <div className="dev-grid">
                            {highPriority.map((prog, i) => (
                                <div key={i} className={`dev-card border-top-${prog.color}`}>
                                    <div className="dev-header">
                                        <div className={`dev-icon bg-${prog.color}`}>{prog.icon}</div>
                                        <span className="dev-timeline">{prog.timeline}</span>
                                    </div>
                                    <span className={`program-tag tag-${prog.color}`}>{prog.tag}</span>
                                    <h3>{prog.title}</h3>
                                    <p>{prog.desc}</p>
                                    <ul className="dev-features">
                                        {prog.features.map((f, j) => (
                                            <li key={j}><Check size={14} /> {f}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Medium Priority */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge" style={{ background: 'rgba(202,138,4,0.15)', color: '#FACC15', borderColor: 'rgba(202,138,4,0.25)' }}>🟡 PRIORITAS SEDANG</span>
                            <h2 className="section-title">Program <span className="text-gradient">Ekspansi</span></h2>
                            <p className="section-desc">Program fase kedua untuk perluasan impact dan engagement.</p>
                        </div>
                        <div className="dev-grid-compact">
                            {medPriority.map((prog, i) => (
                                <div key={i} className="dev-compact-card">
                                    <div className="dev-compact-icon">{prog.icon}</div>
                                    <div className="dev-compact-info">
                                        <div className="dev-compact-header">
                                            <h4>{prog.title}</h4>
                                            <span className="dev-timeline">{prog.timeline}</span>
                                        </div>
                                        <p>{prog.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ecosystem */}
                <section className="section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Integrasi <span className="text-gradient">Ekosistem</span></h2>
                            <p className="section-desc">Setiap program saling terhubung membentuk ekosistem yang utuh.</p>
                        </div>
                        <div className="ecosystem-flow">
                            <div className="ecosystem-card">
                                <span className="eco-step">1</span>
                                <h4>Z-Academy</h4>
                                <p>Belajar & Sertifikasi</p>
                            </div>
                            <div className="ecosystem-arrow">→</div>
                            <div className="ecosystem-card">
                                <span className="eco-step">2</span>
                                <h4>Z-Talent Pool</h4>
                                <p>Masuk Marketplace</p>
                            </div>
                            <div className="ecosystem-arrow">→</div>
                            <div className="ecosystem-card">
                                <span className="eco-step">3</span>
                                <h4>Dapat Proyek</h4>
                                <p>Via Project Board</p>
                            </div>
                            <div className="ecosystem-arrow">→</div>
                            <div className="ecosystem-card">
                                <span className="eco-step">4</span>
                                <h4>Z-Fintech</h4>
                                <p>Akses Modal</p>
                            </div>
                            <div className="ecosystem-arrow">→</div>
                            <div className="ecosystem-card">
                                <span className="eco-step">5</span>
                                <h4>Z-Mentor</h4>
                                <p>Pendampingan</p>
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
