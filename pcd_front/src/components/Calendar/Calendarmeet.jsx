import React, { useEffect } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";

function Calendar() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      console.log("Session détectée, redirection vers CalendarConnecte");
      navigate("/calendar-connecte");
    }
  }, [session, navigate]);

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
        redirectTo: "http://localhost:3000/calendar-connecte",
      },
    });

    if (error) {
      alert("Erreur lors de la connexion avec Google : " + error.message);
    }
  }

  return (
    <div className="App">
      <div style={{ width: "400px", margin: "30px auto" }}>
        <h2>Connexion au calendrier</h2>
        <button onClick={googleSignIn}>Se connecter avec Google</button>
      </div>
    </div>
  );
}

export default Calendar;
