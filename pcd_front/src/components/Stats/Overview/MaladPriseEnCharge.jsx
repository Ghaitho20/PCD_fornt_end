import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import styles from '../assets/css/MaladPriseEnCharge.module.css'; // Correct import
// Sample Data (replace with your own data)
const data1 = [
  { name: 'LH', percent: 13.5 },
  { name: 'LNH', percent: 16 },
  { name: 'MM', percent: 70 },
  { name: 'LA', percent: 0.5 },
];

const data2 = [
  { name: 'LA', percent: 47 },
  { name: 'AMA', percent: 30 },
  { name: 'MM', percent: 5 },
  { name: 'LMC', percent: 4 },
  { name: 'Lymphome', percent: 3 },
  { name: 'Hémoglobinopathie', percent: 2 },
  { name: 'SMD', percent: 2 },
  { name: 'Gaucher', percent: 1 },
  { name: 'Fanconi', percent: 6 },
];

// Colors for each slice
const COLORS1 = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const COLORS2 = [
  '#4C8BF5',  // Light Blue
  '#66BB6A',  // Green
  '#FFCA28',  // Amber Yellow
  '#FF7043',  // Coral
  '#42A5F5',  // Sky Blue
  '#9CCC65',  // Lime Green
  '#FFEB3B',  // Yellow
  '#FF7043',  // Deep Coral
  '#26C6DA',  // Turquoise
];

const Legends = [
  { acronym: "LH", name: "Lymphome de Hodgkin" },
  { acronym: "LNH", name: "Lymphome non Hodgkinien" },
  { acronym: "MM", name: "Myoélome multiple" },
  { acronym: "LA", name: "Leucémie aigue" },
  { acronym: "LMC", name: "Leucémie myéloide chronique" },
  { acronym: "AMA", name: "Aplasie médullaire acquise" },
  { acronym: "SMD", name: "Syndrome myélodysplasique " },
];

const PieChart = ({ data, COLORS }) => {
  // Helper function to render the label with percentage
  const renderLabel = ({ name, percent }) => ` ${name} ${percent}%`;

  return (
    <RechartsPieChart width={500} height={400}>
      <Pie
        data={data}                 // Data source
        dataKey="percent"           // Data field to use
        nameKey="name"              // Label to display in legend
        cx="50%"                    // X-center position
        cy="50%"                    // Y-center position
        outerRadius={120}           // Size of the Pie
        label={renderLabel}         // Custom label with percentages
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Legend verticalAlign="bottom" height={36} /> {/* Legend with names */}
    </RechartsPieChart>
  );
};

export const MaladiePriseEnCharge = () => {
  return (
    <div className={styles.container}> {/* Using the correct class from the CSS Module */}
      <div className={styles.titleContainer}> {/* Corrected class name */}
        Maladies prises en charge par la greffe
      </div>
      <div className={styles.subContainer}> {/* Correct class name */}
        <div className={styles.leftPart}> {/* Correct class name */}
          <div className={styles.legendContainer}> {/* Correct class name */}
            {Legends.map(({ acronym, name }, index) => (
              <div key={index}>
                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>
                  {acronym}:{" "}
                </span>
                <span style={{ fontSize: '14px' }}>{name}</span>
              </div>
            ))}
          </div>
          <div className={styles.rightPart}>
            <PieChart data={data1} COLORS={COLORS1} />
          </div>
          
        </div>

        <div className={styles.rightPart}> {/* Correct class name */}
          <PieChart data={data2} COLORS={COLORS2} />
        </div>
      </div>
    </div>
  );
};


