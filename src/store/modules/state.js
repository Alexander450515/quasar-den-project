export default function() {
  return {
    cards: [],
    selectedPatient: JSON.parse(localStorage.getItem("selected_patient"))
  };
}
