import { Building2, Sparkles, Rocket, Heart, Settings, Target } from 'lucide-react';

export default function VisionSection() {
    const cards = [
        {
            color: 'blue',
            icon: <Building2 size={32} />,
            title: 'Kekuatan HIPMI',
            description: 'Jaringan pengusaha muda terbesar di Jawa Tengah dengan akses ke pasar nasional dan internasional.',
            points: [
                'Jaringan 35 Kab/Kota',
                'Akses pasar & ekspor',
                'Mentoring bisnis senior',
                'Koneksi pemerintah daerah',
            ],
        },
        {
            color: 'purple',
            icon: <Sparkles size={32} />,
            title: 'Kekuatan Zilenial',
            description: 'Komunitas generasi muda Jawa Tengah dengan talenta digital dan semangat berwirausaha.',
            points: [
                'Talenta kreatif & digital',
                'Energi dan inovasi muda',
                'Jaringan komunitas luas',
                'Kartu Zillenial terintegrasi',
            ],
        },
        {
            color: 'orange',
            icon: <Rocket size={32} />,
            title: 'Sinergi Z-POWER',
            description: 'Gabungan kekuatan HIPMI dan Zilenial menghasilkan ekosistem ekonomi yang transformatif.',
            points: [
                'Transformasi ekonomi inklusif',
                'UMKM Go International',
                'Talent marketplace digital',
                'Indonesia Emas 2045',
            ],
        },
    ];

    return (
        <section className="section" id="kolaborasi">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <Heart size={14} />
                        MENGAPA KOLABORASI?
                    </span>
                    <h2 className="section-title">
                        Sinergi <span className="text-gradient">Dua Kekuatan</span> Jawa Tengah
                    </h2>
                    <p className="section-desc">
                        Selaras dengan semangat <em>Ngopeni</em> (melayani) dan <em>Nglakoni</em> (menyejahterakan),
                        kolaborasi ini hadir untuk mendorong pertumbuhan ekonomi inklusif bagi generasi muda.
                    </p>
                </div>

                <div className="vision-grid">
                    {cards.map((card, i) => (
                        <div key={i} className={`vision-card border-${card.color}`}>
                            <div className={`vision-icon bg-${card.color}`}>
                                {card.icon}
                            </div>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                            <ul className="vision-points">
                                {card.points.map((point, j) => (
                                    <li key={j}>
                                        <Target size={12} />
                                        {point}
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
