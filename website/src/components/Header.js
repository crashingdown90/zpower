'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown, Camera, Smartphone, Wallet, Rocket, Heart, Target } from 'lucide-react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const mainLinks = [
        { label: 'Kolaborasi', href: '/#kolaborasi' },
        { label: 'Program', href: '/#program' },
        { label: 'Target', href: '/target' },
    ];

    const moreLinks = [
        { label: 'Tentang', href: '/tentang', icon: <Heart size={16} className="nav-icon-blue" /> },
        { label: 'Event & Dokumentasi', href: '/events', icon: <Camera size={16} className="nav-icon-purple" /> },
        { label: 'Mockup Z-Talent', href: '/mockup', icon: <Smartphone size={16} className="nav-icon-orange" /> },
        { label: 'Pendanaan', href: '/pendanaan', icon: <Wallet size={16} className="nav-icon-green" /> },
        { label: 'Pengembangan', href: '/pengembangan', icon: <Rocket size={16} className="nav-icon-blue" /> },
    ];

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container header-inner">
                    <Link href="/" className="logo">
                        <Image
                            src="/images/logo-collab.png"
                            alt="HIPMI Z-POWER — Kolaborasi HIPMI × Zilenial"
                            width={44}
                            height={44}
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                        <span className="logo-brand">HIPMI <span className="text-gradient">Z-POWER</span></span>
                    </Link>

                    <nav className="nav-links">
                        {mainLinks.map(l => (
                            <Link key={l.href} href={l.href}>{l.label}</Link>
                        ))}
                        <div className="nav-dropdown" ref={dropdownRef}>
                            <button
                                className="nav-dropdown-toggle"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                Lainnya <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'none' }} />
                            </button>
                            {dropdownOpen && (
                                <div className="nav-dropdown-menu">
                                    {moreLinks.map(l => (
                                        <Link key={l.href} href={l.href} onClick={() => setDropdownOpen(false)}>{l.icon}{l.label}</Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Link href="/#gabung" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.875rem' }}>
                            Unduh Proposal
                        </Link>
                    </nav>

                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle navigation"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            <div className={`mobile-nav ${mobileOpen ? 'active' : ''}`}>
                {mainLinks.map(l => (
                    <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
                        {l.label}
                    </Link>
                ))}
                <div className="mobile-nav-divider"></div>
                {moreLinks.map(l => (
                    <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {l.icon}{l.label}
                    </Link>
                ))}
                <Link href="/#gabung" className="btn btn-primary" style={{ textAlign: 'center', marginTop: '1rem' }}>
                    Unduh Proposal
                </Link>
            </div>
        </>
    );
}
