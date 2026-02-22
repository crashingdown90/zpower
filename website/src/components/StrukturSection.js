import { Users, Shield, Lightbulb, Network, Smartphone, ClipboardCheck } from 'lucide-react';

export default function StrukturSection() {
    const divisions = [
        {
            icon: <Lightbulb size={24} />,
            title: 'HIPMI Brand Lab',
            desc: 'Inkubasi & Standardisasi',
            color: 'blue',
        },
        {
            icon: <Network size={24} />,
            title: 'HIPMI Z-Connect',
            desc: 'Aglomerasi & Networking',
            color: 'purple',
        },
        {
            icon: <Smartphone size={24} />,
            title: 'HIPMI Z-Talent',
            desc: 'Digital Talent Marketplace',
            color: 'orange',
        },
        {
            icon: <ClipboardCheck size={24} />,
            title: 'Monitoring & Evaluasi',
            desc: 'KPI, Laporan, Adjustment',
            color: 'green',
        },
    ];

    return (
        <section className="section bg-light" id="struktur">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <Users size={14} />
                        STRUKTUR KOLABORASI
                    </span>
                    <h2 className="section-title">
                        Organisasi <span className="text-gradient">Kolaborasi Bersama</span>
                    </h2>
                    <p className="section-desc">
                        Struktur organisasi yang memastikan kolaborasi HIPMI × Zilenial berjalan
                        terkoordinasi, terukur, dan akuntabel.
                    </p>
                </div>

                <div className="struktur-chart">
                    <div className="struktur-steering">
                        <div className="struktur-card steering-card">
                            <Shield size={28} />
                            <h3>Steering Committee</h3>
                            <p>Ketua HIPMI Jateng & Koordinator Zilenial Jateng</p>
                        </div>
                    </div>

                    <div className="struktur-connector">
                        <div className="connector-line"></div>
                    </div>

                    <div className="struktur-divisions">
                        {divisions.map((div, i) => (
                            <div key={i} className={`struktur-card division-card border-top-${div.color}`}>
                                <div className={`division-icon bg-${div.color}`}>
                                    {div.icon}
                                </div>
                                <h4>{div.title}</h4>
                                <p>{div.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
