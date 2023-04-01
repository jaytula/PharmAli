import MyDrugListItem from "../MyDrugListItem";
import "../../styles/Drug.css";

const MyDrugList = ({ drugs, setDrugs, user }) => {
  return (
    <div className="mymedListSection">
      <h1> My Med List</h1>
      <div className="drugListItemContainer">
        {drugs.map((drug) => (
          <div className="drugListItem">
            <MyDrugListItem
              key={drug.drug_id}
              setDrugs={setDrugs}
              drug={drug}
              user={user}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDrugList;
