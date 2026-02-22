import { ArrowRight, Mail, FileDown, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function CTASection() {
    return (
        <section className="cta-section" id="gabung">
            <div className="container">
                <div className="cta-card">
                    <Image
                        src="/images/logo-collab.png"
                        alt="HIPMI Z-POWER"
                        width={80}
                        height={80}
                        className="cta-logo"
                        style={{ margin: '0 auto 1.5rem', objectFit: 'contain' }}
                    />
                    <h2>Mari Berkolaborasi<br />untuk Jawa Tengah</h2>
                    <p>
                        Bersama HIPMI dan Zilenial, wujudkan transformasi ekonomi terbesar di Jawa Tengah.
                        Dengan semangat <em>Ngopeni Nglakoni</em>, kita siap membangun
                        Jateng Makmur menuju Indonesia Emas 2045.
                    </p>
                    <div className="cta-actions">
                        <a href="#" className="btn btn-white">
                            <FileDown size={18} />
                            Download Proposal
                        </a>
                        <a href="#" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
                            <Calendar size={18} />
                            Jadwalkan Pertemuan
                        </a>
                    </div>
                    <div className="cta-contact">
                        <Mail size={14} />
                        <span>kolaborasi@hipmizpower.id</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
