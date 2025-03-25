import React, { useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";

function CalendarConnecte() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const navigate = useNavigate();
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Chargement initial

  useEffect(() => {
    const checkSession = async () => {
      console.log("Vérification de la session...");
      if (session) {
        console.log("Session active :", session.user);
        setLoading(false); // Une fois la session récupérée, on peut arrêter le chargement
        await fetchEvents(); // Charger les événements si la session est active
      } else {
        console.log("Pas de session trouvée, redirection...");
        navigate("/calendar"); // Redirection vers la page de connexion si pas de session
      }
    };

    // Si la session change, on la vérifie
    checkSession();
  }, [session, navigate]);

  // Fonction pour récupérer les événements
  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase.from("events").select("*");
      if (error) throw error;
      setEvents(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des événements : ", error);
    }
  };

  // Fonction pour créer un événement
  const createCalendarEvent = async () => {
    if (!session) return; // Vérification si la session existe avant de créer l'événement

    const { error } = await supabase.from("events").insert([
      {
        user_email: session.user.email,
        start_time: start.toISOString(),
        end_time: end.toISOString(),
        title: eventName,
        description: eventDescription,
      },
    ]);

    if (error) {
      alert("Erreur lors de la création de l'événement : " + error.message);
    } else {
      alert("Événement créé avec succès !");
      fetchEvents(); // Recharger les événements après en avoir créé un
    }
  };

  // Fonction de déconnexion
  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/calendar"); // Rediriger vers la page de connexion
  };

  // Si la session est en cours de chargement, afficher un message de chargement
  if (loading) {
    return <div>Chargement...</div>;
  }

  // Affichage du composant lorsque la session est active
  return (
    <div className="App">
      <div style={{ width: "400px", margin: "30px auto" }}>
        <h2>Bienvenue {session.user.email}</h2>

        <p>Début de votre événement</p>
        <DateTimePicker onChange={setStart} value={start} />

        <p>Fin de votre événement</p>
        <DateTimePicker onChange={setEnd} value={end} />

        <p>Nom de l'événement</p>
        <input type="text" onChange={(e) => setEventName(e.target.value)} />

        <p>Description de l'événement</p>
        <input type="text" onChange={(e) => setEventDescription(e.target.value)} />

        <button onClick={createCalendarEvent}>Créer un événement</button>

        <h3>Événements existants</h3>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <strong>{event.title}</strong> - {event.start_time}
            </li>
          ))}
        </ul>

        <button onClick={signOut}>Se déconnecter</button>
      </div>
    </div>
  );
}

export default CalendarConnecte;
