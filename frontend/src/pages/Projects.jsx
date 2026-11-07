import { useEffect, useState } from "react";
import API from "../services/api";

function Projects() {

    const [projects, setProjects] = useState([]);
    const [certificates, setCertificates] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        async function fetchData() {
            try {
                const projectResponse = await API.get("/projects");
                const certificateResponse = await API.get("/certificates");

                setProjects(projectResponse.data);
                setCertificates(certificateResponse.data);

            } catch (error) {
                console.error(error);
                setError("Unable to load portfolio information.");
            } finally {
                setLoading(false);
            }
        }

        fetchData();

    }, []);

    if (loading) {
        return <p>Loading portfolio...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <h3>Projects & Experience</h3>

            <div className="project-container">

                {projects.length > 0 ? (

                    projects.map((project) => (

                        <div className="project-card" key={project._id}>

                            <h4>
                                <u><b>{project.name}</b></u>
                            </h4>

                            <b>
                                <u>{project.technologies}</u>
                            </b>

                            <p>{project.description}</p>

                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                            )}

                        </div>

                    ))

                ) : (
                    <p>No projects found in the database.</p>
                )}

            </div>

            <h3>Certifications & Trainings</h3>

            <div className="certificate-container">

                {certificates.length > 0 ? (

                    certificates.map((certificate) => (

                        <div className="certificate-card" key={certificate._id}>

                            <h4>
                                <u>{certificate.name}</u>
                            </h4>

                            <u>{certificate.organization}</u>

                            <p>{certificate.description}</p>

                            {certificate.image && (
                                <a
                                    href={`/images/certificates/${encodeURIComponent(certificate.image)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Certificate
                                </a>
                            )}

                        </div>

                    ))

                ) : (
                    <p>No certificates found in the database.</p>
                )}

            </div>
        </>
    );
}

export default Projects;