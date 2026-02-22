'use client';

import { useState, useEffect, useRef } from 'react';
import { Award, Briefcase, Globe, Users, TrendingUp, Target } from 'lucide-react';

function AnimatedNumber({ value, suffix = '' }) {
    const [display, setDisplay] = useState('0');
    const ref = useRef(null);
    const animated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animated.current) {
                    animated.current = true;
                    const num = parseInt(value.replace(/\./g, '').replace(/,/g, ''));
                    const duration = 2000;
                    const steps = 60;
                    const increment = num / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= num) {
                            current = num;
                            clearInterval(timer);
                        }
                        // Format with dots for thousands (Indonesian style)
                        const formatted = Math.floor(current).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                        setDisplay(formatted);
                    }, duration / steps);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value]);

    return <span ref={ref}>{display}{suffix}</span>;
}

export default function StatsSection() {
    const stats = [
        { icon: <Award size={32} />, number: '5.000', suffix: '+', label: 'UMKM Tersertifikasi', sub: 'Halal, HAKI, P-IRT' },
        { icon: <Users size={32} />, number: '15.000', suffix: '+', label: 'Talenta Z-Talent', sub: 'Terverifikasi & Terkurasi' },
        { icon: <Briefcase size={32} />, number: '5.000', suffix: '+', label: 'Proyek Tersalurkan', sub: 'Via Platform Z-Talent' },
        { icon: <Globe size={32} />, number: '500', suffix: '+', label: 'Produk Go International', sub: 'Melalui Jaringan HIPMI' },
        { icon: <TrendingUp size={32} />, number: '60', suffix: '+', label: 'Business Matching', sub: 'Event di 10 Wilayah' },
        { icon: <Target size={32} />, number: '3', suffix: '%', label: 'Penurunan Pengangguran', sub: 'Kontribusi Kolaborasi' },
    ];

    return (
        <section className="stats-section" id="target">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title" style={{ color: 'white' }}>
                        Target Kolaborasi 2025–2029
                    </h2>
                    <p className="section-desc" style={{ color: 'rgba(255,255,255,0.8)' }}>
                        Sasaran capaian kolaborasi HIPMI × Zilenial dalam periode 5 tahun.
                    </p>
                </div>

                <div className="stats-grid stats-grid-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="stat-card">
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-number">
                                <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                            </div>
                            <div className="stat-label">{stat.label}</div>
                            <div className="stat-sub">{stat.sub}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
