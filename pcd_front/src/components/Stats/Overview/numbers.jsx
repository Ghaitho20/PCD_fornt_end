import doctor from '../../../assets/images/Stats/Overview/doctor.png';
import nurse from '../../../assets/images/Stats/Overview/nurse.png';
import patient from '../../../assets/images/Stats/Overview/patient.png';
import styles from '../../../assets/css/Stats/Overview/numbers.module.css'; // Import CSS Module
import { useState, useEffect } from 'react'; // Import useState and useEffect

export const Numbers = () => {
    // Declare state inside the component
    const [DoctorCount, setDoctorCount] = useState(0);
    const [NurseCount, setNurseCount] = useState(0);
    const [PatientCount, setPatientCount] = useState(0);
    let DoctorNumber = 49;
    let NurseNumber = 89;
    let PatientNumber = 245;

    // Set up the effect inside the component
    useEffect(() => {
        const updateHandler = (number) => {
            const intervalId = setInterval(() => {
                setDoctorCount((prevCount) => {
                    if (prevCount >= number) {
                        clearInterval(intervalId); // Stop when we reach the target
                        return prevCount; // Keep the final value
                    }
                    return prevCount + 1; // Increment the count
                });
            }, 100);
        };

        updateHandler(DoctorNumber); // Start the counter
    }, []); // Empty dependency array to run once on mount

    useEffect(() => {
        const updateHandler = (number) => {
            const intervalId = setInterval(() => {
                setNurseCount((prevCount) => {
                    if (prevCount >= number) {
                        clearInterval(intervalId); // Stop when we reach the target
                        return prevCount; // Keep the final value
                    }
                    return prevCount + 1; // Increment the count
                });
            }, 89);
        };

        updateHandler(NurseNumber); // Start the counter
    }, []); // Empty dependency array to run once on mount

    useEffect(() => {
        const updateHandler = (number) => {
            const intervalId = setInterval(() => {
                setPatientCount((prevCount) => {
                    if (prevCount >= number) {
                        clearInterval(intervalId); // Stop when we reach the target
                        return prevCount; // Keep the final value
                    }
                    return prevCount + 1; // Increment the count
                });
            }, 45);
        };

        updateHandler(PatientNumber); // Start the counter
    }, []); // Empty dependency array to run once on mount

    return (
        <div className={styles.container}> {/* Use styles.container */}
            <div className={styles.innerContainer}> {/* Use styles.innerContainer */}
                <img src={doctor} alt="doctor logo" className={styles.logo} /> {/* Use styles.logo */}
                <div className={styles.number}>{DoctorCount}</div> {/* Use styles.number */}
                <div className={styles.desc}> {/* Use styles.desc */}
                    <span className={styles.occ}>Docteurs</span> {/* Use styles.occ */}
                    <span className={styles.annee}>Année 2024-2025</span> {/* Use styles.annee */}
                </div>
            </div>

            <div className={styles.innerContainer}> {/* Use styles.innerContainer */}
                <img src={nurse} alt="nurse logo" className={styles.logo} /> {/* Use styles.logo */}
                <div className={styles.number}>{NurseCount}</div> {/* Use styles.number */}
                <div className={styles.desc}> {/* Use styles.desc */}
                    <span className={styles.occ}>Infirmières</span> {/* Use styles.occ */}
                    <span className={styles.annee}>Année 2024-2025</span> {/* Use styles.annee */}
                </div>
            </div>

            <div className={styles.innerContainer}> {/* Use styles.innerContainer */}
                <img src={patient} alt="patient logo" className={styles.logo} /> {/* Use styles.logo */}
                <div className={styles.number}>{PatientCount}</div> {/* Use styles.number */}
                <div className={styles.desc}> {/* Use styles.desc */}
                    <span className={styles.occ}>Patients</span> {/* Use styles.occ */}
                    <span className={styles.annee}>Année 2024-2025</span> {/* Use styles.annee */}
                </div>
            </div>
        </div>
    );
};
