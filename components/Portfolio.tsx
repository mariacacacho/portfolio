import Image from 'next/image';
import Link from 'next/link';
import { content, links, marquee, type Lang } from '@/content/content';
import { PixelHeart } from './Icons';

export default function Portfolio({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    <div className="page">
      <div className="window">
        {/* ---------- window chrome + nav ---------- */}
        <header className="chrome">
          <div className="chrome__id">
            <div className="dots" aria-hidden="true">
              <span style={{ background: 'var(--orange)' }} />
              <span style={{ background: 'var(--lime)' }} />
              <span style={{ background: 'var(--lilac-300)' }} />
            </div>
            <span className="chrome__title">maria_cacacho.portfolio</span>
          </div>

          <nav aria-label={t.nav.label} className="nav">
            <a href="#proyectos">{t.nav.projects}</a>
            <a href="#contenido">{t.nav.content}</a>
            <a href="#experiencia">{t.nav.experience}</a>
            <a href="#contacto">{t.nav.contact}</a>
          </nav>

          <div className="chrome__actions">
            <div className="lang" aria-label="Idioma / Language">
              <Link href="/" hrefLang="es" aria-current={lang === 'es' ? 'page' : undefined}>ES</Link>
              <Link href="/en" hrefLang="en" aria-current={lang === 'en' ? 'page' : undefined}>EN</Link>
            </div>
            <a href="#contacto" className="pill pill--dark">{t.nav.cv} ↓</a>
          </div>
        </header>

        <main>
          {/* ---------- hero ---------- */}
          <section className="hero">
            <div className="hero__text">
              <p className="eyebrow">
                <PixelHeart />
                <span>{t.hello}</span>
              </p>
              <h1 className="stickers">
                <span className="sticker sticker--lilac ht">software</span>
                <span className="sticker sticker--plum">engineer</span>
                <span className="sticker sticker--lime ht sticker--sm">
                  &amp; <em>tech creator</em>
                </span>
              </h1>
              <p className="hero__bio">{t.bio}</p>
              <div className="row">
                <a href="#proyectos" className="btn btn--dark">{t.ctaDev}</a>
                <a href="#contenido" className="btn btn--pink">{t.ctaCreator}</a>
              </div>
            </div>

            <figure className="photo">
              <Image src="/images/maria.jpg" alt={t.photoAlt} fill priority sizes="(max-width: 900px) 100vw, 560px" />
              <span className="photo__frame" aria-hidden="true" />
              <figcaption className="photo__handle">{links.handle}</figcaption>
              <div className="photo__name">
                <strong>MARIA.</strong>
                <div>
                  <span>software<br />engineer</span>
                  <span>tech<br />creator</span>
                  <span>gt<br />2026</span>
                </div>
              </div>
            </figure>
          </section>

          {/* ---------- two sides ---------- */}
          <section className="sides">
            <div className="side side--dev">
              <p className="label label--lime">&lt;/&gt; {t.side1}</p>
              <p className="side__line">{t.side1Line}</p>
              <ul className="pills">
                {t.devPills.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
            <div className="side side--creator ht">
              <p className="label">● rec · {t.side2}</p>
              <p className="side__line">{t.side2Line}</p>
              <ul className="pills pills--cream">
                {t.creatorPills.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </section>

          {/* ---------- projects ---------- */}
          <section id="proyectos" className="section section--dashed">
            <div className="section__head">
              <h2 className="h2">{t.projH[0]} <em>{t.projH[1]}</em></h2>
              <span className="mono muted">~/proyectos_dev</span>
            </div>
            <div className="grid grid--projects">
              {t.projects.map((p) => (
                <article key={p.name} className="project">
                  <div className="project__tab" style={{ background: p.tab }} />
                  <div className="project__body" style={{ background: p.bg }}>
                    <div className={`project__shot${p.phone ? ' project__shot--phone' : ''}`}>
                      <Image src={p.img} alt={p.alt} fill={!p.phone} width={p.phone ? 414 : undefined} height={p.phone ? 900 : undefined} sizes="(max-width: 700px) 100vw, 400px" />
                    </div>
                    <div className="project__title">
                      <h3>{p.name}</h3>
                      <span className="mono">{p.kind}</span>
                    </div>
                    <p>{p.desc}</p>
                    <p className="mono small">{p.stack}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ---------- content ---------- */}
          <section id="contenido" className="section section--pink ht">
            <div className="section__head">
              <h2 className="h2">{t.contH[0]} <em>{t.contH[1]}</em></h2>
              <div className="row">
                <a href={links.tiktok} target="_blank" rel="noopener noreferrer" className="pill pill--cream">tiktok ↗</a>
                <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="pill pill--cream">instagram ↗</a>
                <a href={links.mediakit} target="_blank" rel="noopener noreferrer" className="pill pill--dark">media kit →</a>
              </div>
            </div>
            <div className="grid grid--videos">
              {t.videos.map((v) => (
                <a key={v.img} href={v.url} target="_blank" rel="noopener noreferrer" className="video">
                  <div className="video__thumb" style={{ background: v.bg }}>
                    <Image src={v.img} alt={v.alt} fill sizes="(max-width: 700px) 50vw, 280px" />
                    <span className="video__views">▷ {v.views}</span>
                  </div>
                  <h3>{v.title}</h3>
                </a>
              ))}
            </div>
          </section>

          {/* ---------- experience + recognition ---------- */}
          <section id="experiencia" className="section section--split">
            <div>
              <h2 className="h2 h2--sm">{t.expH}</h2>
              <ol className="jobs">
                {t.jobs.map((j) => (
                  <li key={j.role + j.org}>
                    <div>
                      <h3>{j.role}</h3>
                      <p className="jobs__org">{j.org}</p>
                      <p>{j.desc}</p>
                    </div>
                    <span className="mono">{j.dates}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="h2 h2--serif">{t.awardsH}</h2>
              <div className="badges">
                <div className="badge badge--lime ht" style={{ transform: 'rotate(-1deg)' }}>
                  <h3>Solis Award</h3>
                  <p className="mono small">TELUS Digital · Americas Luminary Awards 2026</p>
                  <p>{t.awardFor}</p>
                </div>
                <div className="badge badge--lilac ht" style={{ transform: 'rotate(0.8deg)' }}>
                  <h3>Professional Diploma in UX Design</h3>
                  <p className="mono small">UX Design Institute · 2025</p>
                </div>
                <div className="badge badge--plum" style={{ transform: 'rotate(-0.5deg)' }}>
                  <h3>OpenJS Node.js Application Developer (JSNAD)</h3>
                  <p className="mono small">The Linux Foundation · 2022</p>
                  <h3 style={{ marginTop: 12 }}>Cloud Digital Leader</h3>
                  <p className="mono small">Google Cloud · 2023</p>
                </div>
                <div className="oval mono">
                  {t.degree}<br />universidad mesoamericana · 2019
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* ---------- marquee ---------- */}
        <div className="marquee" role="region" aria-label={t.marqueeLabel}>
          <ul className="marquee__track">
            {[...marquee, ...marquee].map((m, i) => (
              <li key={i} aria-hidden={i >= marquee.length ? true : undefined}>
                {m}<span className={i % 2 ? 'star star--pink' : 'star'}>✱</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- contact ---------- */}
        <footer id="contacto" className="contact">
          <div>
            <p className="mono muted">contacto.exe</p>
            <p className="contact__talk">{t.talk}</p>
            <p className="contact__sub">{t.talkSub}</p>
          </div>
          <div className="contact__links">
            <a href={links.cv} download className="cv-btn">
              <span>{t.cvDownload}</span>
              <span className="mono small">[PDF]</span>
            </a>
            <div className="row">
              <a href={links.email} className="pill">{links.emailLabel}</a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="pill">linkedin · María Pacheco</a>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="pill">github.com/mariacacacho</a>
              <a href={links.site} className="pill">codepen.io/mariacacacho</a>
              <a href={links.tiktok} target="_blank" rel="noopener noreferrer" className="pill">tiktok · {links.handle}</a>
              <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="pill">instagram · {links.handle}</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
