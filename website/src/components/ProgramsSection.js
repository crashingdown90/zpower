import { Lightbulb, Network, Smartphone, Check, ArrowRight } from 'lucide-react';

export default function ProgramsSection() {
    const programs = [
        {
            color: 'blue',
            icon: <Lightbulb size={36} />,
            tag: 'Inkubasi & Standardisasi',
            title: 'HIPMI Brand Lab',
            description: 'Program pendampingan penguatan sektor unggulan inovatif melalui inkubasi bisnis dan standardisasi produk.',
            hipmiRole: 'Mentoring, akses pasar, jaringan industri',
            zilenialRole: 'Kreativitas produk, energi eksekusi, talenta digital',
            features: [
                'Sertifikasi Halal, HAKI & P-IRT Kolektif',
                'Digital Marketing berbasis AI',
                'Standardisasi produk untuk rantai nilai nasional',
                'Pendampingan intensif dari mentor HIPMI',
            ],
        },
        {
            color: 'purple',
            icon: <Network size={36} />,
            tag: 'Aglomerasi & Networking',
            title: 'HIPMI Z-Connect',
            description: 'Kegiatan rutin berbasis 10 titik aglomerasi ekonomi untuk pemerataan dan penguatan jaringan bisnis.',
            hipmiRole: 'Fasilitasi business matching, mentoring hub',
            zilenialRole: 'Eksekusi expo, showcase produk, networking',
            features: [
                'Business Matching rutin per wilayah',
                'Networking Session antar pelaku usaha muda',
                'Expo & Showcase produk unggulan Zilenial',
                'Mentoring Hub oleh pengusaha senior HIPMI',
            ],
        },
        {
            color: 'orange',
            icon: <Smartphone size={36} />,
            tag: 'Digital Talent Marketplace',
            title: 'HIPMI Z-Talent',
            description: 'Platform digital yang menghubungkan talenta kreatif Zilenial dengan kebutuhan bisnis anggota HIPMI.',
            hipmiRole: 'Penyedia proyek, kebutuhan vendor, pendanaan',
            zilenialRole: 'Talenta digital terverifikasi, portofolio, eksekusi',
            features: [
                'Talent Registry dengan portofolio & rating',
                'Smart Matching berbasis AI',
                'Project Board terbuka untuk kolaborasi',
                'Payment Gateway aman & transparan',
            ],
        },
    ];

    return (
        <section className="section bg-light" id="program">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <Lightbulb size={14} />
                        PROGRAM KOLABORASI
                    </span>
                    <h2 className="section-title">
                        Tiga Pilar <span className="text-gradient">Program Bersama</span>
                    </h2>
                    <p className="section-desc">
                        Program kolaborasi yang dirancang sebagai kanal eksekusi bagi program prioritas
                        Pemerintah Provinsi Jawa Tengah.
                    </p>
                </div>

                <div className="programs-grid">
                    {programs.map((prog, i) => (
                        <div key={i} className={`program-card border-top-${prog.color}`}>
                            <div className={`program-icon-wrapper bg-${prog.color}`}>
                                {prog.icon}
                            </div>
                            <span className={`program-tag tag-${prog.color}`}>{prog.tag}</span>
                            <h3>{prog.title}</h3>
                            <p>{prog.description}</p>

                            <div className="program-roles">
                                <div className="role-item">
                                    <span className="role-label">HIPMI:</span>
                                    <span className="role-text">{prog.hipmiRole}</span>
                                </div>
                                <div className="role-item">
                                    <span className="role-label">Zilenial:</span>
                                    <span className="role-text">{prog.zilenialRole}</span>
                                </div>
                            </div>

                            <ul className="program-features">
                                {prog.features.map((f, j) => (
                                    <li key={j}>
                                        <Check size={14} className="check-icon" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
