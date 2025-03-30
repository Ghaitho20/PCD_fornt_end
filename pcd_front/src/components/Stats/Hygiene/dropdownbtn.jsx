import PropTypes from "prop-types";
import { useState } from "react";
import "../../../assets/css/Stats/Hygiene/dropdownbtn.css";

function DropDownButton({ label, items, setState }) {
  const [Label, setLabel] = useState(label);

  const LabelHandler = (item) => {
    setLabel(item);
    setState(item);
  };

  return (
    <div className="dropdown">
      <button
        className="dropdown-toggle"
        aria-expanded="false"
        style={{ width: "150px" }}
      >
        {Label}
      </button>
      <ul className="dropdown-menu">
        {items.map((item, index) => (
          <li key={index}>
            <button className="dropdown-item" onClick={() => LabelHandler(item)}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

DropDownButton.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DropDownButton;

export function YearDropDownButton({ setState }) {
  const years = Array.from({ length: 2024 - 2018 + 1 }, (_, i) => (2018 + i).toString());
  return <DropDownButton label="l'année" items={years} setState={setState} />;
}

export function ServiceDropDownButton({ setState }) {
  const Services = ["Service A", "Service B", "Service C"];
  return <DropDownButton label="Service" items={Services} setState={setState} />;
}

export function SurfaceDropDownButton({ setState }) {
  const Surfaces = ["Lavabos", "Air", "Chambre"];
  return <DropDownButton label="Surface" items={Surfaces} setState={setState} />;
}

export function DisinfectantDropDownButton({ setState }) {
  const Disinfectants = ["X1", "X2", "X3", "X4", "Tous"];
  return (
    <DropDownButton label="Désinfectant" items={Disinfectants} setState={setState} />
  );
}

export function GermDropDownButton({ setState }) {
  const Germs = ["Bacteria", "Virus", "Fungus", "Tous"];
  return <DropDownButton label="Germe" items={Germs} setState={setState} />;
}