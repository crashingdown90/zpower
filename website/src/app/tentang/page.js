import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import BackToTop from '@/components/BackToTop';
import Image from 'next/image';
import {
    Heart, Landmark, Home, Sparkles, Rocket, Shield, ArrowRight,
    ArrowLeft, Check, BookOpen, Award, Zap, Users
} from 'lucide-react';

export const metadata = {
    title: 'Tentang HIPMI Z-POWER | Kolaborasi HIPMI × Zilenial',
    description: 'Latar belakang, visi, dan integrasi program HIPMI Z-POWER dengan program prioritas daerah Jawa Tengah 2025-2029.',
};

export default function TentangPage() {
    const missions = [
        {
            icon: <Landmark size={28} />,
            title: 'Jateng Makmur',
            desc: 'Pertumbuhan ekonomi inklusif dan berkeadilan — UMKM tumbuh, lapangan kerja terbuka, kesejahteraan merata.',
            color: 'blue',
        },
        {
            icon: <Home size={28} />,
            title: 'Jateng Nyaman',
            desc: 'Lingkungan usaha yang kondusif dan berdaya saing — regulasi ramah, infrastruktur digital siap, ekosistem mendukung.',
            color: 'purple',
        },
        {
            icon: <Sparkles size={28} />,
            title: 'Indonesia Emas 2045',
            desc: 'Kontribusi Jawa Tengah menuju visi nasional — generasi muda produktif, ekonomi berbasis inovasi dan teknologi.',
            color: 'orange',
        },
    ];

    const programs = [
        {
            icon: <BookOpen size={24} />,
            title: 'Taruna Karya Mandiri',
            sub: 'Kartu Zillenial',
            desc: 'HIPMI berperan sebagai penyedia lapangan kerja dan ekosistem wirausaha bagi pemegang Kartu Zillenial untuk menekan tingkat pengangguran terbuka.',
            color: 'blue',
        },
        {
            icon: <Rocket size={24} />,
            title: 'Desa Maju & Berdaya',
            sub: 'Produk Unggulan Desa',
            desc: 'Mendorong produk unggulan Zillenial dari pelosok desa untuk Go International melalui jaringan ekspor HIPMI.',
            color: 'green',
        },
        {
            icon: <Award size={24} />,
            title: 'Ekosistem Ekonomi Syariah',
            sub: 'Halal & Wisata Muslim',
            desc: 'Mengembangkan wisata ramah muslim dan produk halal melalui bimbingan standardisasi industri.',
            color: 'purple',
        },
    ];

    const incubationStages = [
        { step: '01', title: 'Identifikasi', desc: 'Identifikasi potensi usaha Zillenial di setiap wilayah aglomerasi.' },
        { step: '02', title: 'Pendampingan', desc: 'Pelatihan intensif dan mentoring dari pengusaha senior HIPMI.' },
        { step: '03', title: 'Sertifikasi', desc: 'Pengurusan Halal, HAKI, P-IRT secara kolektif untuk efisiensi.' },
        { step: '04', title: 'Go Market', desc: 'Masuk rantai nilai industri nasional dan pasar internasional.' },
    ];

    const certifications = [
        { name: 'Sertifikasi Halal, HAKI, dan P-IRT', desc: 'Pengurusan secara kolektif untuk efisiensi biaya dan waktu' },
        { name: 'Digital Marketing berbasis AI', desc: 'Z-Tech Integration — pelatihan dan implementasi AI untuk pemasaran digital' },
        { name: 'Standarisasi Produk', desc: 'Agar produk Zillenial masuk ke rantai nilai industri nasional' },
    ];

    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="page-hero">
                    <div className="container">
                        <a href="/" className="back-link"><ArrowLeft size={16} /> Kembali ke Beranda</a>
                        <span className="section-badge"><Heart size={14} /> TENTANG</span>
                        <h1 className="page-hero-title">Tentang <span className="text-gradient">HIPMI Z-POWER</span></h1>
                        <p className="page-hero-desc">
                            Selaras dengan semangat <em>Ngopeni</em> (melayani dan memelihara) serta <em>Nglakoni</em> (melaksanakan
                            komitmen dan menyejahterakan), kolaborasi HIPMI × Zilenial bertujuan untuk mewujudkan transformasi
                            ekonomi yang inovatif, mandiri, dan berkelanjutan.
                        </p>
                    </div>
                </section>

                {/* Misi */}
                <section className="section">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge"><Sparkles size={14} /> VISI & MISI</span>
                            <h2 className="section-title">Menuju <span className="text-gradient">Tiga Tujuan</span> Besar</h2>
                        </div>
                        <div className="vision-grid">
                            {missions.map((m, i) => (
                                <div key={i} className={`vision-card border-${m.color}`}>
                                    <div className={`vision-icon bg-${m.color}`}>{m.icon}</div>
                                    <h3>{m.title}</h3>
                                    <p>{m.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Integrasi Program Daerah */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge green"><Landmark size={14} /> INTEGRASI</span>
                            <h2 className="section-title">Program Prioritas <span className="text-gradient">Daerah</span></h2>
                            <p className="section-desc">
                                Kolaborasi ini menjadi kanal eksekusi bagi program unggulan Pemerintah Provinsi Jawa Tengah.
                            </p>
                        </div>
                        <div className="dev-grid">
                            {programs.map((p, i) => (
                                <div key={i} className={`dev-card border-top-${p.color}`}>
                                    <div className="dev-header">
                                        <div className={`dev-icon bg-${p.color}`}>{p.icon}</div>
                                    </div>
                                    <span className={`program-tag tag-${p.color}`}>{p.sub}</span>
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HIPMI Brand Lab — Inkubasi */}
                <section className="section">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge orange"><Zap size={14} /> BRAND LAB</span>
                            <h2 className="section-title">Tahapan <span className="text-gradient">Inkubasi</span></h2>
                            <p className="section-desc">
                                Program "HIPMI Brand Lab" mendampingi Zillenial dari identifikasi potensi hingga Go International.
                            </p>
                        </div>
                        <div className="incubation-flow">
                            {incubationStages.map((stage, i) => (
                                <div key={i} className="incubation-step">
                                    <div className="incubation-number">{stage.step}</div>
                                    <h3>{stage.title}</h3>
                                    <p>{stage.desc}</p>
                                    {i < incubationStages.length - 1 && (
                                        <div className="incubation-arrow"><ArrowRight size={20} /></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sertifikasi & Pendampingan */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge"><Shield size={14} /> PENDAMPINGAN</span>
                            <h2 className="section-title">Program <span className="text-gradient">Sertifikasi</span></h2>
                            <p className="section-desc">Zillenial didampingi dalam pengurusan standar dan legalitas usaha.</p>
                        </div>
                        <div className="cert-grid">
                            {certifications.map((cert, i) => (
                                <div key={i} className="cert-card">
                                    <div className="cert-number">{i + 1}</div>
                                    <div className="cert-info">
                                        <h4>{cert.name}</h4>
                                        <p>{cert.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Talent Categories */}
                <section className="section">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge purple"><Users size={14} /> Z-TALENT</span>
                            <h2 className="section-title">Kategori <span className="text-gradient">Talenta</span></h2>
                            <p className="section-desc">Lima kategori talenta kreatif Zillenial yang tersedia di Z-Talent Marketplace.</p>
                        </div>
                        <div className="talent-grid">
                            <div className="talent-card border-top-blue">
                                <h4>🎨 Desain & Kreatif</h4>
                                <p>Graphic Designer, UI/UX Designer, Ilustrator</p>
                            </div>
                            <div className="talent-card border-top-purple">
                                <h4>📹 Video & Multimedia</h4>
                                <p>Videografer, Editor Video, Animator</p>
                            </div>
                            <div className="talent-card border-top-orange">
                                <h4>📱 Digital Marketing</h4>
                                <p>Social Media Manager, Content Creator, Copywriter</p>
                            </div>
                            <div className="talent-card border-top-green">
                                <h4>💻 Teknologi</h4>
                                <p>Web Developer, App Developer, Data Analyst</p>
                            </div>
                            <div className="talent-card border-top-blue">
                                <h4>📊 Bisnis & Admin</h4>
                                <p>Virtual Assistant, Admin Media Sosial, Customer Service</p>
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
