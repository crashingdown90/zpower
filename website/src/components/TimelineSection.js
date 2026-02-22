import { Clock, CheckCircle } from 'lucide-react';

export default function TimelineSection() {
    const phases = [
        {
            phase: 'Fase 1',
            title: 'Fondasi',
            period: 'Q1–Q2 2025',
            description: 'Membangun landasan kolaborasi, MoU, tim eksekusi, dan peluncuran program.',
            tasks: [
                'Penyusunan MoU HIPMI × Zilenial Jateng',
                'Pembentukan Tim Eksekusi Bersama',
                'Launching 3 Program Kolaborasi',
                'Identifikasi 500 Zilenial di 5 wilayah awal',
                'Pengembangan MVP Platform Z-Talent',
                'Onboarding 1.000 talenta & 50 perusahaan',
            ],
        },
        {
            phase: 'Fase 2',
            title: 'Akselerasi',
            period: 'Q3 2025 – Q4 2026',
            description: 'Implementasi program intensif, sertifikasi kolektif, dan perluasan digital.',
            tasks: [
                'Business Matching rutin (1×/bulan per wilayah)',
                'Sertifikasi kolektif batch pertama',
                'Implementasi Z-Tech AI Digital Marketing',
                'Peluncuran Smart Matching & Skill Verification',
                'Scaling Z-Talent ke seluruh wilayah',
                'Evaluasi mid-term & penyesuaian program',
            ],
        },
        {
            phase: 'Fase 3',
            title: 'Ekspansi',
            period: '2027 – 2029',
            description: 'Perluasan penuh ke seluruh aglomerasi dan Go International.',
            tasks: [
                'Perluasan ke seluruh 10 titik aglomerasi',
                'Produk Zilenial Go International via HIPMI',
                'Replikasi model ke provinsi lain',
                'Evaluasi akhir & laporan dampak',
            ],
        },
    ];

    return (
        <section className="section" id="timeline">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <Clock size={14} />
                        ROADMAP KOLABORASI
                    </span>
                    <h2 className="section-title">
                        Timeline <span className="text-gradient">Implementasi</span>
                    </h2>
                    <p className="section-desc">
                        Rencana pelaksanaan kolaborasi dalam 3 fase strategis selama 5 tahun.
                    </p>
                </div>

                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    {phases.map((item, i) => (
                        <div key={i} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-card">
                                <span className="timeline-phase">{item.phase}</span>
                                <h3>{item.title} <span style={{ fontWeight: 400, fontSize: '0.875rem', color: 'var(--text-muted)' }}>({item.period})</span></h3>
                                <p>{item.description}</p>
                                <div className="timeline-tasks">
                                    {item.tasks.map((task, j) => (
                                        <div key={j} className="timeline-task">
                                            <CheckCircle size={14} />
                                            {task}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
