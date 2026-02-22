import Image from 'next/image';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                            <Image
                                src="/images/logo-collab.png"
                                alt="HIPMI Z-POWER"
                                width={40}
                                height={40}
                                style={{ objectFit: 'contain' }}
                            />
                            <span style={{ color: 'white' }}>HIPMI Z-POWER</span>
                        </h3>
                        <p>
                            Proposal kolaborasi strategis HIPMI Jawa Tengah × Zilenial Jateng untuk transformasi ekonomi menuju Indonesia Emas 2045.
                        </p>
                        <div className="footer-socials" style={{ marginTop: '1.5rem' }}>
                            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                            <a href="#" aria-label="Email"><Mail size={18} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Program</h4>
                        <a href="/#program">HIPMI Brand Lab</a>
                        <a href="/#program">HIPMI Z-Connect</a>
                        <a href="/#program">HIPMI Z-Talent</a>
                        <a href="/#timeline">Timeline</a>
                    </div>

                    <div className="footer-col">
                        <h4>Proposal</h4>
                        <a href="/events">Event & Dokumentasi</a>
                        <a href="/mockup">Mockup Z-Talent</a>
                        <a href="/pendanaan">Pendanaan</a>
                        <a href="/pengembangan">Pengembangan</a>
                    </div>

                    <div className="footer-col">
                        <h4>Kontak</h4>
                        <a href="#" style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                            <MapPin size={14} style={{ marginTop: '3px', flexShrink: 0 }} />
                            Semarang, Jawa Tengah
                        </a>
                        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Phone size={14} style={{ flexShrink: 0 }} />
                            (024) xxxx-xxxx
                        </a>
                        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Mail size={14} style={{ flexShrink: 0 }} />
                            kolaborasi@hipmizpower.id
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 HIPMI Z-POWER Central Java. Proposal Kolaborasi.</p>
                    <p>Ngopeni Nglakoni — Jateng Makmur &amp; Nyaman</p>
                </div>
            </div>
        </footer>
    );
}
