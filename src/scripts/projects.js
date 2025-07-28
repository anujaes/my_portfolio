import swh          from '../images/project/swh.jpg'
import data          from '../images/project/data.jpg'


const projectRecords = [
    {
        name        : 'Healthcare Data Integration Platform',
        duration    : 'MAR 2023 - Present',
        summary     : "Integrated and processed 10M+ daily records from EHR, claims, and laboratory datasets, enabling 25% faster clinical reporting through optimized ETL pipelines and advanced query tuning. Implemented automated data quality frameworks achieving 99.5% SLA compliance and reducing anomaly detection time by 40% across all healthcare data workflows. Developed scalable provider performance models serving 500+ healthcare providers while maintaining zero HIPAA/HITRUST compliance violations. Optimized Snowflake data warehouse performance through advanced query tuning and resource management, reducing compute costs by 20% while improving response times. Improved the performance and reliability of enterprise level data processing systems to support critical healthcare reporting.",
        technologies: ["DBT", "Snowflake", "MySQL", "Python", "MWAA", "Apache Airflow", "Healthcare APIs"],
        thumbnail   : data
    },
    {
        name        : 'Enterprise DBT Cloud Migration',
        duration    : 'MAR 2023 - Present',
        summary     : "Led migration of 200+ DBT models from Core to Cloud. Established automated CI/CD pipelines,reducing deployment errors by 50%. Configured role-based access controls and environment isolation for enterprise governance. Achieved 95% team adoption rate through comprehensive training and documentation",
        technologies: ["DBT Core","DBT Cloud", "CI/CD", "GitHub Actions", "Git"],
        thumbnail   : data
    },
    {
        name        : 'Production Healthcare Infrastructure Monitoring',
        duration    : 'MAR 2023 - Present',
        summary     : "Monitored 50+ data pipelines across customer environments, ensuring 99.9% uptime. Managed infrastructure optimization including EMR clusters and memory utilization. Implemented proactive issue detection preventing 15+ potential system failures. Achieved 4-hour average incident resolution time through systematic troubleshootingEnhanced overall system efficiency for mission- critical healthcare reporting",
        technologies: ["Apache Airflow","Arena Platform", "Jira", "Linux", "AWS EMR"],
        thumbnail   : data
    },
    {
        name        : 'SWH Hostel',
        duration    : 'SEP 2020 - NOV 2020',
        summary     : "A web app developed for one of the Tezpur University's hostel to manage records of the borders, hostel rooms and other managerial activity related to the hostel.",
        link        : 'https://www.tezu.ernet.in/hostels/swh/',
        technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap", "Javascript"],
        thumbnail   : swh
    }
]

export default projectRecords;