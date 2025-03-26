import {Numbers} from './numbers';
import TransActChart from './transActChart';
import TransplantActivityTable from './activiteGreffe';
import {PatientBox} from './overviewKey';
import PatientDemographicsChart from './patientDemographics';
import TransplantDemographicsChart from './transplantDemographics';
import ActivitePharmacie from './activitePharmacie';
import Footer from '../../footer/footer';
import '../../../assets/css/Stats/Overview/paragraph.css';
import ChatBot from '../../ChatBot/ChatBot';
function StatsPage() {
  return (
    <>
      <div style={{ display: "flex", marginBottom: "50px", padding: "40px", alignSelf: "center"}}>
        <div
          className="mee"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <PatientBox />
          <Numbers />
          <PatientDemographicsChart />
          <TransplantDemographicsChart />
          <TransActChart />
          <TransplantActivityTable />

          <div
            className="Paragraphs"
            style={{
              fontFamily: "Roboto",
              fontSize: "18px",
              width: "80%",
              margin: "0px",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                marginBottom: "50px",

              }}
            >
              Activités du service pharmacie du CNGMO
            </div>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?"
          </div>
          <ActivitePharmacie />
        </div>
      </div>
      <ChatBot/>
      <Footer />
    </>
  );
}

export default StatsPage;
