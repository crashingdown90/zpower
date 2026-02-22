import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import BackToTop from '@/components/BackToTop';
import { DollarSign, Building, Landmark, Users, PiggyBank, CreditCard, ArrowLeft, TrendingUp, Check } from 'lucide-react';

export const metadata = {
    title: 'Mekanisme Pendanaan | HIPMI Z-POWER',
    description: 'Sumber dan model pendanaan kolaborasi HIPMI × Zilenial: APBD, CSR, hibah, dan revenue mandiri.',
};

export default function PendanaanPage() {
    const sources = [
        {
            icon: <Landmark size={32} />,
            title: 'APBD Jawa Tengah',
            desc: 'Alokasi dari program pemberdayaan UMKM dan tenaga kerja muda Pemerintah Provinsi Jawa Tengah.',
            items: ['Program Desa Maju & Berdaya', 'Pelatihan tenaga kerja muda', 'Pengembangan UMKM daerah'],
            color: 'blue',
        },
        {
            icon: <Building size={32} />,
            title: 'CSR Korporasi',
            desc: 'Kontribusi perusahaan anggota HIPMI melalui program tanggung jawab sosial dan pemberdayaan.',
            items: ['In-kind mentoring & fasilitas', 'Pendanaan program pelatihan', 'Sponsorship event & expo'],
            color: 'purple',
        },
        {
            icon: <DollarSign size={32} />,
            title: 'Hibah & Grant',
            desc: 'Pendanaan dari lembaga donor, organisasi internasional, dan program pemberdayaan nasional.',
            items: ['Grant UNDP / World Bank', 'Program Kemenparekraf', 'CSR Foundation nasional'],
            color: 'orange',
        },
        {
            icon: <PiggyBank size={32} />,
            title: 'Revenue Mandiri',
            desc: 'Model pendapatan mandiri dari platform Z-Talent Marketplace untuk keberlanjutan program.',
            items: ['Transaction fee 3-5%', 'Premium listing & boost', 'Enterprise subscription'],
            color: 'green',
        },
    ];

    const fintech = [
        {
            model: 'Peer-to-Peer Lending',
            desc: 'Anggota HIPMI menjadi lender bagi wirausaha Zilenial yang terverifikasi. Bunga kompetitif, risiko terukur.',
            icon: <Users size={20} />,
        },
        {
            model: 'Crowdfunding Produk',
            desc: 'Sistem pre-order produk Zilenial sebelum produksi massal, mengurangi risiko modal kerja.',
            icon: <TrendingUp size={20} />,
        },
        {
            model: 'Invoice Financing',
            desc: 'Pencairan cepat invoice dari proyek Z-Talent untuk menjaga cash flow wirausaha muda.',
            icon: <CreditCard size={20} />,
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
                        <span className="section-badge"><DollarSign size={14} /> PENDANAAN</span>
                        <h1 className="page-hero-title">Mekanisme <span className="text-gradient">Pendanaan</span></h1>
                        <p className="page-hero-desc">
                            Strategi pendanaan multi-sumber yang dirancang untuk menjamin keberlanjutan
                            kolaborasi HIPMI × Zilenial dalam jangka panjang.
                        </p>
                    </div>
                </section>

                {/* Funding Sources */}
                <section className="section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Sumber <span className="text-gradient">Pendanaan</span></h2>
                            <p className="section-desc">Empat pilar pendanaan untuk menjamin keberlanjutan program kolaborasi.</p>
                        </div>
                        <div className="funding-grid">
                            {sources.map((src, i) => (
                                <div key={i} className={`funding-card border-top-${src.color}`}>
                                    <div className={`funding-icon bg-${src.color}`}>{src.icon}</div>
                                    <h3>{src.title}</h3>
                                    <p>{src.desc}</p>
                                    <ul className="funding-items">
                                        {src.items.map((item, j) => (
                                            <li key={j}><Check size={14} /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Z-Fintech */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge"><CreditCard size={14} /> Z-FINTECH</span>
                            <h2 className="section-title">Model <span className="text-gradient">Z-Fintech</span></h2>
                            <p className="section-desc">Akses permodalan digital untuk wirausaha muda Zilenial.</p>
                        </div>
                        <div className="fintech-grid">
                            {fintech.map((item, i) => (
                                <div key={i} className="fintech-card">
                                    <div className="fintech-icon">{item.icon}</div>
                                    <h3>{item.model}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
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
