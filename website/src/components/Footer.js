import Image from 'next/image';
import Link from 'next/link';
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
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                            <a href="mailto:kolaborasi@hipmizpower.id" aria-label="Email"><Mail size={18} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Program</h4>
                        <Link href="/#program">HIPMI Brand Lab</Link>
                        <Link href="/#program">HIPMI Z-Connect</Link>
                        <Link href="/#program">HIPMI Z-Talent</Link>
                        <Link href="/#timeline">Timeline</Link>
                    </div>

                    <div className="footer-col">
                        <h4>Proposal</h4>
                        <Link href="/events">Event & Dokumentasi</Link>
                        <Link href="/mockup">Mockup Z-Talent</Link>
                        <Link href="/pendanaan">Pendanaan</Link>
                        <Link href="/pengembangan">Pengembangan</Link>
                    </div>

                    <div className="footer-col">
                        <h4>Kontak</h4>
                        <span style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                            <MapPin size={14} style={{ marginTop: '3px', flexShrink: 0 }} />
                            Semarang, Jawa Tengah
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Phone size={14} style={{ flexShrink: 0 }} />
                            (024) xxxx-xxxx
                        </span>
                        <a href="mailto:kolaborasi@hipmizpower.id" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
