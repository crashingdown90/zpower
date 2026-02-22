import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import BackToTop from '@/components/BackToTop';
import { Camera, MapPin, Calendar, Users, ArrowLeft } from 'lucide-react';

export const metadata = {
    title: 'Event & Dokumentasi | HIPMI Z-POWER',
    description: 'Dokumentasi kegiatan kolaborasi HIPMI × Zilenial Jawa Tengah: Business Matching, Expo, Workshop, dan Networking.',
};

export default function EventsPage() {
    const events = [
        {
            image: '/images/event-business-matching.png',
            title: 'Business Matching Semarang',
            category: 'Business Matching',
            date: 'Maret 2025',
            location: 'Hotel Ciputra, Semarang',
            desc: 'Pertemuan pertama antara 50 pengusaha senior HIPMI dengan 100 wirausaha muda Zilenial untuk menggali potensi kerjasama bisnis yang saling menguntungkan.',
            attendees: '150+',
            color: 'blue',
        },
        {
            image: '/images/event-expo.png',
            title: 'Expo & Showcase Produk Zilenial',
            category: 'Expo & Showcase',
            date: 'April 2025',
            location: 'Jateng Fair, Semarang',
            desc: 'Pameran produk unggulan dari wirausaha muda Zilenial dari 10 wilayah aglomerasi, menampilkan beragam produk lokal inovatif.',
            attendees: '500+',
            color: 'purple',
        },
        {
            image: '/images/event-workshop.png',
            title: 'Workshop Digital Marketing & AI',
            category: 'Workshop & Pelatihan',
            date: 'Mei 2025',
            location: 'Creative Hub, Solo',
            desc: 'Pelatihan intensif strategi pemasaran digital berbasis AI untuk pelaku UMKM muda, dibimbing langsung oleh praktisi HIPMI.',
            attendees: '75+',
            color: 'orange',
        },
        {
            image: '/images/event-networking.png',
            title: 'Networking Session Jawa Tengah',
            category: 'Networking',
            date: 'Juni 2025',
            location: 'Rooftop Lounge, Semarang',
            desc: 'Sesi networking informal antara komunitas entrepreneurial HIPMI dan Zilenial, membangun koneksi dan peluang kolaborasi baru.',
            attendees: '200+',
            color: 'green',
        },
    ];

    const upcomingEvents = [
        { title: 'Business Matching Subosukawonosraten', date: 'Juli 2025', location: 'Solo' },
        { title: 'Z-Talent Launch Event', date: 'Agustus 2025', location: 'Semarang' },
        { title: 'Expo Produk Petanglong', date: 'September 2025', location: 'Pekalongan' },
        { title: 'Workshop Sertifikasi Halal', date: 'Oktober 2025', location: 'Purwokerto' },
        { title: 'Z-Awards Ceremony 2025', date: 'November 2025', location: 'Semarang' },
        { title: 'Z-Festival Jawa Tengah', date: 'Desember 2025', location: 'Semarang' },
    ];

    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="page-hero">
                    <div className="container">
                        <Link href="/" className="back-link"><ArrowLeft size={16} /> Kembali ke Beranda</Link>
                        <span className="section-badge"><Camera size={14} /> DOKUMENTASI</span>
                        <h1 className="page-hero-title">Event & <span className="text-gradient">Dokumentasi</span></h1>
                        <p className="page-hero-desc">
                            Kegiatan kolaborasi HIPMI × Zilenial yang telah dan akan diselenggarakan
                            di seluruh wilayah Jawa Tengah.
                        </p>
                    </div>
                </section>

                {/* Events Grid */}
                <section className="section">
                    <div className="container">
                        <div className="events-grid">
                            {events.map((event, i) => (
                                <div key={i} className={`event-card border-top-${event.color}`}>
                                    <div className="event-image">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            width={600}
                                            height={400}
                                            style={{ objectFit: 'cover', width: '100%', height: '280px' }}
                                        />
                                        <span className={`event-category tag-${event.color}`}>{event.category}</span>
                                    </div>
                                    <div className="event-content">
                                        <h3>{event.title}</h3>
                                        <p>{event.desc}</p>
                                        <div className="event-meta">
                                            <span><Calendar size={14} /> {event.date}</span>
                                            <span><MapPin size={14} /> {event.location}</span>
                                            <span><Users size={14} /> {event.attendees} peserta</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Upcoming Events */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge"><Calendar size={14} /> AGENDA MENDATANG</span>
                            <h2 className="section-title">Jadwal <span className="text-gradient">Kegiatan</span> 2025</h2>
                        </div>
                        <div className="upcoming-grid">
                            {upcomingEvents.map((event, i) => (
                                <div key={i} className="upcoming-card">
                                    <div className="upcoming-number">{i + 1}</div>
                                    <div className="upcoming-info">
                                        <h4>{event.title}</h4>
                                        <div className="upcoming-meta">
                                            <span><Calendar size={12} /> {event.date}</span>
                                            <span><MapPin size={12} /> {event.location}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <ScrollReveal />
            <BackToTop />
        </>
    );
}
