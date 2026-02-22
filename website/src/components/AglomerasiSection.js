import Image from 'next/image';
import { MapPin, Globe } from 'lucide-react';

export default function AglomerasiSection() {
    const regions = [
        { name: 'Kedungsepur', desc: 'Kendal, Demak, Ungaran, Semarang, Purwodadi' },
        { name: 'Subosukawonosraten', desc: 'Solo, Boyolali, Sukoharjo, Karanganyar, Wonogiri, Sragen, Klaten' },
        { name: 'Petanglong', desc: 'Pekalongan, Batang, Pemalang' },
        { name: 'Barlingmascakeb', desc: 'Banjarnegara, Purbalingga, Banyumas, Cilacap, Kebumen' },
        { name: 'Purwomanggung', desc: 'Purworejo, Wonosobo, Magelang, Temanggung' },
        { name: 'Wanarakuti', desc: 'Jepara, Kudus, Pati' },
        { name: 'Banglor', desc: 'Rembang, Blora' },
        { name: 'Bregasmalang', desc: 'Brebes, Tegal, Slawi' },
        { name: 'Tangkallaz', desc: 'Batang, Pekalongan (regional hub)' },
        { name: 'Kedu Raya', desc: 'Magelang, Temanggung, Wonosobo' },
    ];

    return (
        <section className="section" id="wilayah">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <Globe size={14} />
                        JANGKAUAN KOLABORASI
                    </span>
                    <h2 className="section-title">
                        <span className="text-gradient">10 Titik Aglomerasi</span> Ekonomi
                    </h2>
                    <p className="section-desc">
                        Kolaborasi HIPMI × Zilenial akan dijalankan secara merata di 10 wilayah aglomerasi
                        ekonomi Jawa Tengah, memastikan pemerataan dampak transformasi.
                    </p>
                </div>

                <div className="aglomerasi-content">
                    <div className="aglomerasi-map">
                        <Image
                            src="/images/jateng-map.png"
                            alt="Peta Jawa Tengah — 10 Titik Aglomerasi Ekonomi Kolaborasi"
                            width={600}
                            height={400}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <div className="aglomerasi-list">
                        {regions.map((r, i) => (
                            <div key={i} className="aglomerasi-item">
                                <div className="aglomerasi-number">{i + 1}</div>
                                <div>
                                    <h4>{r.name}</h4>
                                    <p>{r.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
