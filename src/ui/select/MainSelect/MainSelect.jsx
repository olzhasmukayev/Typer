import "./MainSelect.css";

const MainSelect = ({ langs, setLanguages }) => {
  return (
    <select
      className="language-select"
      name="language"
      id="language"
      onChange={(e) => setLanguages(e.target.value)}
    >
      <option disabled className="language-option">
        language
      </option>
      {langs.map((language) => (
        <option className="language-option" key={language}>
          {language}
        </option>
      ))}
    </select>
  );
};

export default MainSelect;
