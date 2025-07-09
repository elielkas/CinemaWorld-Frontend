import React from "react";

const Sidebar2 = ({ activeComponent, setActiveComponent }) => {
    const styles = {
        sidebar: {
            height: '100%',
            padding: '20px',
            overflowY: 'auto',
            backgroundColor: '#f0f0f0',
            boxSizing: 'border-box',
        },
        image: {
            width: '100%',
            borderBottom: '10px',
            marginBottom: '15px',
        },
        text: {
            textAlign: 'justify',
            lineHeight: '1.5',
        },
        title: {
            textAlign: 'center',
            fontWeight: 'bold',
        },
        activeLink: {
            color: 'blue',
            fontWeight: 'bold',
            textDecoration: 'underline',
        },
        link: {
            color: 'inherit',
            textDecoration: 'none',
            ':hover': {
                color: 'blue',
            }
        }
    };

    const categories = [
        { name: "Action", component: "Action" },
        { name: "Legend", component: "Legend" },
        { name: "Fiction", component: "Fiction" },
        { name: "Dessin-animé", component: "DessinAnime" },
        { name: "High-School", component: "HighSchool" },
        { name: "Comique", component: "Comique" },
        { name: "Novelas", component: "Novelas" },
    ];

    return (
        <aside style={styles.sidebar}>
            <img src="/Photos/download-29.jpg" alt="Logo" style={styles.image} />

            <h2 style={styles.title}>Toutes les Catégories</h2>
            
            <div className="menu">
                <ul>
                    {categories.map((category) => (
                        <p key={category.component} style={styles.text}>
                            <li>
                                <a 
                                    href="#" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveComponent(category.component);
                                    }}
                                    style={{
                                        ...styles.link,
                                        ...(activeComponent === category.component ? styles.activeLink : {})
                                    }}
                                >
                                    {category.name}
                                </a>
                            </li>
                        </p>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar2;