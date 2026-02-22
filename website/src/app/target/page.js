import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import BackToTop from '@/components/BackToTop';
import Image from 'next/image';
import {
    Target, TrendingUp, Users, Globe, Briefcase, MapPin, BarChart3,
    Building, ArrowLeft, Check, Clock, FileCheck, CalendarCheck
} from 'lucide-react';

export const metadata = {
    title: 'Sasaran & Target | HIPMI Z-POWER',
    description: 'Target capaian kolaborasi HIPMI × Zilenial Jawa Tengah 2025-2029: sertifikasi UMKM, business matching, talent marketplace, dan Go International.',
};

export default function TargetPage() {
    const kpis = [
        {
            icon: <FileCheck size={28} />,
            label: 'Zillenial Tersertifikasi',
            sub: 'Halal / HAKI / P-IRT',
            targets: [
                { year: '2025', value: '500 UMKM' },
                { year: '2027', value: '2.000 UMKM' },
                { year: '2029', value: '5.000 UMKM' },
            ],
            color: 'blue',
        },
        {
            icon: <Briefcase size={28} />,
            label: 'Business Matching',
            sub: 'Event terlaksana',
            targets: [
                { year: '2025', value: '10 event' },
                { year: '2027', value: '30 event' },
                { year: '2029', value: '60 event' },
            ],
            color: 'purple',
        },
        {
            icon: <Globe size={28} />,
            label: 'Produk Go International',
            sub: 'Via jaringan ekspor HIPMI',
            targets: [
                { year: '2025', value: '50 produk' },
                { year: '2027', value: '200 produk' },
                { year: '2029', value: '500 produk' },
            ],
            color: 'orange',
        },
        {
            icon: <Users size={28} />,
            label: 'Z-Talent Terdaftar',
            sub: 'Talenta di marketplace',
            targets: [
                { year: '2025', value: '1.000' },
                { year: '2027', value: '5.000' },
                { year: '2029', value: '15.000' },
            ],
            color: 'green',
        },
        {
            icon: <Target size={28} />,
            label: 'Proyek Tersalurkan',
            sub: 'Via Z-Talent Marketplace',
            targets: [
                { year: '2025', value: '200' },
                { year: '2027', value: '1.500' },
                { year: '2029', value: '5.000' },
            ],
            color: 'blue',
        },
        {
            icon: <Building size={28} />,
            label: 'Perusahaan HIPMI Aktif',
            sub: 'Di Z-Talent Platform',
            targets: [
                { year: '2025', value: '50' },
                { year: '2027', value: '200' },
                { year: '2029', value: '500' },
            ],
            color: 'purple',
        },
        {
            icon: <TrendingUp size={28} />,
            label: 'Penurunan Pengangguran',
            sub: 'Kontribusi terhadap angka pengangguran terbuka',
            targets: [
                { year: '2025', value: '0,5%' },
                { year: '2027', value: '1,5%' },
                { year: '2029', value: '3%' },
            ],
            color: 'orange',
        },
        {
            icon: <MapPin size={28} />,
            label: 'Wilayah Aglomerasi Aktif',
            sub: 'Dari total 10 titik',
            targets: [
                { year: '2025', value: '5 titik' },
                { year: '2027', value: '8 titik' },
                { year: '2029', value: '10 titik' },
            ],
            color: 'green',
        },
    ];

    const evalFramework = [
        {
            icon: <Clock size={24} />,
            period: 'Bulanan',
            title: 'Laporan Progres',
            desc: 'Laporan progres per wilayah aglomerasi: capaian kegiatan, pendaftaran talenta, dan sertifikasi.',
            color: 'blue',
        },
        {
            icon: <CalendarCheck size={24} />,
            period: 'Triwulan',
            title: 'Review KPI',
            desc: 'Review capaian KPI, identifikasi bottleneck, dan adjustment program untuk kuartal berikutnya.',
            color: 'purple',
        },
        {
            icon: <BarChart3 size={24} />,
            period: 'Tahunan',
            title: 'Evaluasi Komprehensif',
            desc: 'Evaluasi menyeluruh dampak ekonomi, penyusunan laporan tahunan, dan rencana tahun berikutnya.',
            color: 'orange',
        },
    ];

    return (
        <>
            <Header />
            <main>
                <section className="page-hero">
                    <div className="container">
                        <a href="/" className="back-link"><ArrowLeft size={16} /> Kembali ke Beranda</a>
                        <span className="section-badge"><Target size={14} /> SASARAN & KPI</span>
                        <h1 className="page-hero-title">Target <span className="text-gradient">Capaian</span> 2025–2029</h1>
                        <p className="page-hero-desc">
                            Indikator kinerja terukur untuk memastikan kolaborasi HIPMI × Zilenial
                            memberikan dampak nyata bagi ekonomi Jawa Tengah.
                        </p>
                    </div>
                </section>

                {/* KPI Grid */}
                <section className="section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Key Performance <span className="text-gradient">Indicators</span></h2>
                            <p className="section-desc">8 indikator utama yang akan dimonitor selama periode 2025-2029.</p>
                        </div>
                        <div className="kpi-grid">
                            {kpis.map((kpi, i) => (
                                <div key={i} className={`kpi-card border-top-${kpi.color}`}>
                                    <div className={`kpi-icon bg-${kpi.color}`}>{kpi.icon}</div>
                                    <h3>{kpi.label}</h3>
                                    <p className="kpi-sub">{kpi.sub}</p>
                                    <div className="kpi-targets">
                                        {kpi.targets.map((t, j) => (
                                            <div key={j} className="kpi-target">
                                                <span className="kpi-year">{t.year}</span>
                                                <span className={`kpi-value text-${kpi.color}`}>{t.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* KPI Indicators */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge purple"><BarChart3 size={14} /> PENGUKURAN</span>
                            <h2 className="section-title">Dimensi <span className="text-gradient">Pengukuran</span></h2>
                            <p className="section-desc">Tiga level pengukuran untuk memastikan efektivitas program.</p>
                        </div>
                        <div className="indicator-grid">
                            <div className="indicator-card">
                                <div className="indicator-number">1</div>
                                <h3>Output</h3>
                                <p>Jumlah kegiatan terlaksana sesuai rencana — event, pelatihan, sertifikasi, dan onboarding.</p>
                            </div>
                            <div className="indicator-card">
                                <div className="indicator-number">2</div>
                                <h3>Outcome</h3>
                                <p>Peningkatan omzet dan kapasitas usaha Zillenial — pertumbuhan revenue, skill, dan jaringan bisnis.</p>
                            </div>
                            <div className="indicator-card">
                                <div className="indicator-number">3</div>
                                <h3>Impact</h3>
                                <p>Kontribusi terhadap penurunan pengangguran dan pertumbuhan ekonomi daerah Jawa Tengah.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Monitoring & Evaluation */}
                <section className="section">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge orange"><Clock size={14} /> MONITORING</span>
                            <h2 className="section-title">Framework <span className="text-gradient">Evaluasi</span></h2>
                            <p className="section-desc">Mekanisme evaluasi berkala untuk memastikan program on-track.</p>
                        </div>
                        <div className="eval-grid">
                            {evalFramework.map((item, i) => (
                                <div key={i} className={`eval-card border-top-${item.color}`}>
                                    <div className={`eval-icon bg-${item.color}`}>{item.icon}</div>
                                    <span className="eval-period">{item.period}</span>
                                    <h3>{item.title}</h3>
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
