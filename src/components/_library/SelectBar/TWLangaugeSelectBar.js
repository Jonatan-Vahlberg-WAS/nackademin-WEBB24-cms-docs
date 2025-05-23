import i18next from "i18next";
import Button from "../Button/TWButton";
import SelectBar from "./TWSelectBar";

const LanguageSelectBar = ({
  languages = [],
  selectedLanguage,
  onSelectLanguage,
  children,
  useShort = false,
  showAddLanguage = false,
  showRemoveLanguage = false,
  onAddLanguage = () => {},
  onRemoveLanguage = () => {},
  ...props
}) => {
  const mapLanguage = (language) => {
    return {
      value: useShort ? language.short : language.kind,
      text: language.name,
    };
  };

  return (
    <SelectBar
      items={languages.map((language) => {
        return mapLanguage(language);
      })}
      selectedItem={selectedLanguage ? mapLanguage(selectedLanguage) : {}}
      selectItem={(item) => {
        const language = languages.find((language) => {
          return useShort
            ? language.short === item.value
            : language.kind === item.value;
        });
        onSelectLanguage(language);
      }}
      {...props}
    >
      <>
        <div className="flex items-center gap-2">
          {showAddLanguage && (
            <Button
              size="sm"
              variant="success"
              outline
              onClick={onAddLanguage}
              className="leading-none font-normal"
            >
              +&nbsp;
              {i18next.t("general.language.addLanguage")}
            </Button>
          )}
          {showRemoveLanguage && (
            <Button
              size="sm"
              variant="danger"
              outline
              onClick={onRemoveLanguage}
              className="leading-none font-normal"
            >
              -&nbsp;
              {i18next.t("general.language.removeLanguage")}
            </Button>
          )}
        </div>
        {children}
      </>
    </SelectBar>
  );
};

export default LanguageSelectBar;
