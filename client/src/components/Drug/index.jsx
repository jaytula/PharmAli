import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "../../axiosInstance";
import medlist from "../../assets/images/medlist.png";
import locator from "../../assets/images/locator.png";
import blogs from "../../assets/images/blogs.png";
import journal from "../../assets/images/journal.png";
import { BsHeartPulseFill, BsHeartPulse } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/Drug.css";

const Drug = ({ user, setDrugs, drugs }) => {
  // favourite will be the saved_medication id
  const [favourite, setFavourite] = useState();
  const [drugId, setDrugId] = useState();
  const [content, setContent] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const drugName = location.pathname.split("/")[2];
  const [drugNotes, setDrugNotes] = useState("")

  // Everytime something is typed into the drug notes form
  const handleChange = (e) => {
    setDrugNotes(e.target.value);
  };

  // Everyime a drug is added to favourites
  const handleClickSave = () => {
    Promise.all([
      axios.post(`/favourite/notes`, { notes: drugNotes, id: favourite }),
      axios.get(`/favourite/${user}`)
    ]).then((data) => {
      setDrugs(data[1].data)
      navigate('/mydrugs');
    })
  }

  // First time page is visited
  useEffect(() => {
    const drugName = location.pathname.split("/")[2];
    axios.get(`https://api.fda.gov/drug/label.json?search=description:${drugName}`)
      .then((data) => {
        setContent({
          Description: data.data.results[0].description
            ? stringifier(data.data.results[0].description[0])
            : "",
          "Drug Interaction": data.data.results[0].drug_interactions
            ? stringifier(data.data.results[0].drug_interactions[0])
            : "",
          "Dosage and Administration": data.data.results[0]
            .dosage_and_administration
            ? stringifier(data.data.results[0].dosage_and_administration[0])
            : "",
          "Adverse Reaction": data.data.results[0].adverse_reactions
            ? stringifier(data.data.results[0].adverse_reactions[0])
            : "",
          Contraindications: data.data.results[0].contraindications
            ? stringifier(data.data.results[0].contraindications[0])
            : "",
          "Information for Patients": data.data.results[0]
            .information_for_patients
            ? stringifier(data.data.results[0].information_for_patients[0])
            : "",
          Overdosage: data.data.results[0].overdosage
            ? stringifier(data.data.results[0].overdosage[0])
            : "",
        });
      })
      .catch((err) => {
        console.log("Error", err)
      })

    // Check if user is logged in and if so, see if they favourited this dru
    if (user) {
      const findDrug = drugs.find(savedDrug => savedDrug.name === drugName)
      if (findDrug) {
        setFavourite(findDrug.id);
        setDrugNotes(findDrug.notes)
        setDrugId(findDrug.drug_id);
      } else {
        axios.get(`/drugs/${drugName}`)
          .then((data) => {
            setDrugId(data.data[0].id);
          })
      }
    }
  }, [drugs, location.pathname, user]);

  // Remove numbers present at the beginning of the components from the external api data
  const stringifier = (string) => {
    for (let i = 0; i < string.length; i++) {
      if (isNaN(string[i])) {
        return string.substring(i);
      }
    }
  };

  // Every time drug is favourited
  const removeNotification = () => toast("Removed from my Med List 💊");
  const addNotification = () => toast("Added to my Med List 💊");

  // Everytime a heart is added or removed from the list
  const changeLike = () => {
    let params;
    let route;
    if (favourite) {
      params = { favourite };
      route = "/favourite/remove";
    } else {
      params = { user_id: user, drug_id: drugId };
      route = "/favourite/add";
    }
    Promise.all([
      axios.post(route, params),
      axios.get(`/favourite/${user}`)
    ])
      .then((data) => {
        setDrugs(data[1].data)
        favourite ? setFavourite("") : setFavourite(data[0].data.id);
      });
  };

  return (
    <>
      <div className="image-container">
        <div className="image1">
          <Link to="/mydrugs">
            <img className="drug-image" src={medlist} alt={"medlist"} />
          </Link>
          <Link to="/pharma">
            <img className="drug-image" src={locator} alt={"pharmlocator"} />
          </Link>
          <Link to="/blogs">
            <img className="drug-image" src={blogs} alt={"blogs"} />
          </Link>
          <Link to="/myjournal">
            <img className="drug-image" src={journal} alt={"journal"} />
          </Link>
        </div>
      </div>

      <div className="drug">
        <ArrowBackIcon size="large" onClick={() => navigate("/search")} />
        <span className="drug-name">
          <h1>Drug Name: {drugName}</h1>
          {user &&
            <>

              <span className="med-list-icon">
                {!favourite && (
                  <>

                    <h3>Add to my med list</h3>
                    <button className="transparentbutton" onClick={addNotification}>
                      <BsHeartPulse className="green-icon" onClick={changeLike} />
                    </button>
                  </>
                )}
                {favourite &&
                  (<>
                    <h3>Remove from my med list</h3>
                    <button className="transparentbutton" onClick={removeNotification}>
                      <BsHeartPulseFill className="pink-icon" onClick={changeLike} />
                    </button>
                  </>)}
              </span>
            </>}
          <hr className="linebreak" />
        </span>
        {favourite &&
          (<div className="journaldrug">
            <div className='journal-new'>
              <h2 className="jounal-title">Add Notes:</h2>
              <textarea className="journal-text"
                rows="8"
                cols="10"
                placeholder="Add some notes....."
                value={drugNotes}
                onChange={handleChange}
              ></textarea>
              <div className="journal-footer">
                <button
                  className="save"
                  onClick={handleClickSave}
                >Save</button>
              </div>
            </div>
          </div>)}
        {Object.keys(content).map((data) => (
          <>
            <div className="drug-container">
              <div className="subtitle">
                <h1>{data}</h1>
                <hr />
              </div>
              <div className="drug-content">
                <p className="drug-text">{content[`${data}`]}</p>
              </div>
            </div>
          </>
        ))}
      </div>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Drug;
