import MyDrugListItem from "../MyDrugListItem";
import "../../styles/Drug.css";

const MyDrugList = (props) => {
  return (
    <div className="mymedListSection">
        <h1> My Med List</h1>
      <div className="drugListItemContainer">
        {props.drugs.map((drug) => (
          <div className="drugListItem">
            <MyDrugListItem
              key={drug.drug_id}
              setDrugs={props.setDrugs}
              drug={drug}
              user={props.user}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDrugList;
