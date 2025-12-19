import React from 'react';
import LinearGallery from '../components/LinearGallery';

const Projects = () => {
    // Project Data
    const projectsData = [
        {
            title: "JobTrackr.Co",
            overview: "AI-Powered Automated Application Tracking System",
            features: [
                "Reduced manual data entry by 95% by architecting an event-driven system that autonomously parses Gmail user data in real - time.",
                "Achieved ¡100ms UI latency by implementing a decoupled background worker service with BullMQ & Redis to handle high-volume email processing asynchronously.",
                "Attained 92% classification accuracy for extracting unstructured data (Company, Role, Status) by engineering a hybrid pipeline combining Regex patterns with Google Gemini LLM.",
                "Processed 1000+ concurrent email jobs without API throttling by designing a scalable queue-based architecture independent of the main Express server thread"
            ],
            stack: ["Node.js", "React", "MongoDB", "BullMQ (Redis)", "TypeScript"],
            repoLink: "https://github.com/Pratyush426/Jobtrack",
            featured: "primary"
        },
        {
            title: "Research QA",
            overview: "Intelligent assistant for querying research papers with citations.",
            features: [
                "Developed an interactive research paper QA system using Streamlit with modular FastAPI endpoints for PDF querying and analysis.",
                "Implemented LangChain with FAISS vector search to enable fast embedding retrieval and efficient contextual lookup.",
                "Integrated Google Generative AI to generate concise, context-aware answers with high accuracy and reliability."
            ],
            stack: ["Python", "Gemini", "FAISS", "Streamlit"],
            repoLink: "https://github.com/Pratyush426/research-qa",
            featured: "secondary"
        },
        {
            title: "Text to Verilog",
            overview: "Decentralized file storage system ensuring data privacy.",
            features: [
                "IPFS Integration",
                "Blockchain Auth",
                "Encrypted Storage"
            ],
            stack: ["Solidity", "React", "IPFS"],
            demoText: "Demo",
            featured: "none"
        },
        {
            title: "Fake News Detector",
            overview: "High-octane cyberpunk endless runner game.",
            features: [
                "3D Graphics",
                "Procedural Gen",
                "High Score System"
            ],
            stack: ["Three.js", "WebGL", "Blender"],
            featured: "none"
        },
        {
            title: "SQL Retail Sale",
            overview: "IoT solution for real-time indoor air quality monitoring.",
            stack: ["IoT", "Arduino", "React Native"],
            featured: "none"
        },
        {
            title: "HealTrip",
            overview: "Automated defect detection for manufacturing.",
            stack: ["OpenCV", "PyTorch", "FastAPI"],
            featured: "none"
        },
        {
            title: "Drone",
            overview: "Automated defect detection for manufacturing.",
            stack: ["OpenCV", "PyTorch", "FastAPI"],
            featured: "none"
        },
        {
            title: "Avea- APAC Launch",
            overview: "Automated defect detection for manufacturing.",
            stack: ["OpenCV", "PyTorch", "FastAPI"],
            featured: "none"
        }
    ];

    const FeatureCard = ({ project, isPrimary }) => (
        <div className={`glass-card ${isPrimary ? 'featured-primary' : 'featured-secondary'}`} style={{
            marginBottom: '2rem',
            border: isPrimary ? '1px solid #26a0da' : '1px solid rgba(26, 95, 122, 0.4)',
            boxShadow: isPrimary ? '0 0 20px rgba(38, 160, 218, 0.2)' : 'none',
            transform: isPrimary ? 'scale(1.02)' : 'none'
        }}>
            <h3 className="card-title" style={{ fontSize: isPrimary ? '2rem' : '1.5rem' }}>
                {project.title} {isPrimary && <span style={{ fontSize: '0.8rem', verticalAlign: 'middle', background: '#26a0da', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '12px', marginLeft: '1rem' }}>FEATURED</span>}
            </h3>
            <div className="card-content">
                <strong style={{ fontSize: isPrimary ? '1.1rem' : '1rem' }}>Overview:</strong> {project.overview}
                <br /><br />
                {project.features && (
                    <>
                        <strong>Key Features:</strong>
                        <ul className="feature-list" style={{ marginTop: '0.5rem' }}>
                            {project.features.map((feat, i) => (
                                <li key={i}>• {feat}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
            <div className="tech-stack" style={{ marginTop: '1.5rem' }}>
                {project.stack.map((tech, i) => (
                    <span key={i} className="tech-badge" style={{
                        fontSize: isPrimary ? '0.9rem' : '0.8rem',
                        padding: isPrimary ? '0.4rem 1rem' : '0.3rem 0.8rem'
                    }}>{tech}</span>
                ))}
            </div>
            {project.repoLink && (
                <div className="card-links">
                    <a href={project.repoLink} className="nav-link">GitHub Repo</a>
                </div>
            )}
            {project.demoText && (
                <div className="card-links">
                    <span className="nav-link">{project.demoText}</span>
                </div>
            )}
        </div>
    );

    const GalleryCard = ({ project }) => (
        <div className="glass-card project-card-detailed">
            <h3 className="card-title">{project.title}</h3>
            <div className="card-content">
                <strong>Overview:</strong> {project.overview}
                <br /><br />
                {project.features && (
                    <>
                        <strong>Key Features:</strong>
                        <ul className="feature-list">
                            {project.features.map((feat, i) => (
                                <li key={i}>• {feat}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
            <div className="tech-stack">
                {project.stack.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                ))}
            </div>
            {project.repoLink && (
                <div className="card-links">
                    <a href={project.repoLink} className="nav-link">GitHub Repo</a>
                </div>
            )}
            {project.demoText && (
                <div className="card-links">
                    <span className="nav-link">{project.demoText}</span>
                </div>
            )}
        </div>
    );

    const primaryProject = projectsData.find(p => p.featured === 'primary');
    const secondaryProject = projectsData.find(p => p.featured === 'secondary');
    const galleryItems = projectsData.filter(p => p.featured === 'none').map((p, i) => <GalleryCard key={i} project={p} />);

    return (
        <section id="projects" className="section">
            <h2 className="section-title" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '4px', textAlign: 'center' }}>
                &lt; PROJECTS /&gt;
            </h2>

            {/* Featured Section */}
            <div className="featured-projects" style={{ maxWidth: '1000px', margin: '0 auto 4rem auto' }}>
                <FeatureCard project={primaryProject} isPrimary={true} />
                <FeatureCard project={secondaryProject} isPrimary={false} />
            </div>

            <p style={{ textAlign: 'center', color: '#b0b0b0', marginBottom: '2rem' }}>
                &lt; More Projects (Drag to Explore) &gt;
            </p>

            <LinearGallery items={galleryItems} />

        </section>
    );
};

export default Projects;
