import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';

function FormG() {

  turnOffbutton();
  var formg = setLocalStorage("formg",
   {H1G1:"",H1G2:"",H1G3:"",H1G4:"",H1G5:""})

  const [formG, setFormG] = useState(JSON.parse(formg));
  return (
    <section>
    <SidePanel id={"7"} />
    <div className="siteInfo">

      <div className="formhdr">
        <div>
          <h3>
          Finance </h3>
        </div>
      </div>

      <div className="formcontent">

      <Radio byDefault={formG.H1G1} onClick={handleChange(setFormG)} name="H1G1" h3="Whether any untied fund is available at your hospital?" CheckbobItems={["Yes","No"]} />

<Radio byDefault={formG.H1G2} onClick={handleChange(setFormG)} name="H1G2" h3="If yes, whether this fund is utilized for providing emergency care services?" CheckbobItems={["Yes","No"]} />

<Radio byDefault={formG.H1G3} onClick={handleChange(setFormG)} name="H1G3" h3="Whether any fund is available for emergency care?" CheckbobItems={["Yes","No"]} />

<InputField value={formG.H1G4} onChange={handleChange(setFormG)} name="H1G4" h3="If yes, which health schemes are covering your emergency care system?" placeholder="Type here" />

<InputField value={formG.H1G5} onChange={handleChange(setFormG)} name="H1G5" h3="Out of total patients being provided emergency care, how many were provided services under PMJAY scheme/ any other insurance scheme." placeholder="Type here" />

      <Buttons formName="formg" formData={formG} prev="/informationsystem" next="/leadershipandgovernance" />
      </div>
    </div>
  </section>
  )
}

export default FormG