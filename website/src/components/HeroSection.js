import { Network, Zap, Handshake, Building, MapPin, Rocket } from 'lucide-react';

export default function HeroSection() {
    const features = [
        {
            icon: <Network size={32} />,
            title: 'Jaringan Bisnis Luas',
        },
        {
            icon: <Zap size={32} />,
            title: 'Akselerasi Digital',
        },
        {
            icon: <Handshake size={32} />,
            title: 'Mentorship Ekslusif',
        },
    ];

    const stats = [
        { icon: <Building size={20} />, value: '35', label: 'KAB/KOTA' },
        { icon: <MapPin size={20} />, value: '10', label: 'WILAYAH' },
        { icon: <Rocket size={20} />, value: '3', label: 'PROGRAM' },
    ];

    return (
        <section className="hero" id="hero">
            <div className="hero-particles"></div>
            <div className="hero-glow hero-glow-1"></div>
            <div className="hero-glow hero-glow-2"></div>
            <div className="container hero-centered">
                <h1 className="hero-title-centered">
                    KOLABORASI
                    <br />
                    <span className="text-gradient">HIPMI × ZILENIAL</span>
                    <br />
                    JAWA TENGAH
                </h1>

                <div className="hero-features">
                    {features.map((f, i) => (
                        <div key={i} className="hero-feature-card">
                            <div className="hero-feature-icon">{f.icon}</div>
                            <span className="hero-feature-title">{f.title}</span>
                        </div>
                    ))}
                </div>

                <div className="hero-bottom-stats">
                    {stats.map((s, i) => (
                        <div key={i} className="hero-stat-item">
                            <div className="hero-stat-icon">{s.icon}</div>
                            <div className="hero-stat-info">
                                <span className="hero-stat-value">{s.value}</span>
                                <span className="hero-stat-label">{s.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
