import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';


function Form3H() {
  turnOffbutton();

  var form3h = setLocalStorage("form3h",
    { H3H1: "", H3H2: "", H3H3: "", H3H4: "", H3H5: "", H3H6: "", H3H7: "", H3H8: [], H3H9: "" })

  const [form3H, setForm3H] = useState(JSON.parse(form3h));

  return (
    <section>
      <SidePanel id={"8"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              Leadership and Governance
            </h3>
          </div>
        </div>

        <div className="formcontent">

          <h3 style={{ color: "#3177FF" }}>Disaster management plan :</h3>

          <Radio byDefault={Form3H.H3H1} onClick={handleChange(setForm3H)} name="H3H1" h3="Do you have any disaster management plan?" CheckbobItems={["Yes", "No"]} />

          <Radio byDefault={Form3H.H3H2} onClick={handleChange(setForm3H)} name="H3H2" h3="Do you have a redistribution plan?" CheckbobItems={["Yes", "No"]} />

          <Radio byDefault={Form3H.H3H3} onClick={handleChange(setForm3H)} name="H3H3" h3="Do you have any evacuation plan?" CheckbobItems={["Yes", "No"]} />

          <h3 style={{ color: "#3177FF" }}>Quality Improvement Plan :</h3>


          <Radio byDefault={Form3H.H3H4} onClick={handleChange(setForm3H)} name="H3H4" h3="Do you have a Quality Improvement Committee? (if yes, collect detail of Committee)" CheckbobItems={["Yes", "No"]} />

          <InputField value={form3H.H3H5} onChange={handleChange(setForm3H)} name="H3H5" h3="How frequently does this committee meet in a year?" placeholder="Type here" />


          <Radio byDefault={Form3H.H3H6} onClick={handleChange(setForm3H)} name="H3H6" h3="Do you have regular audits related to emergency care in hospital?" CheckbobItems={["Yes", "No"]} />

          <InputField value={form3H.H3H7} onChange={handleChange(setForm3H)} name="H3H7" h3="How frequently audits are conducted in a year?" placeholder="Type here" />


          <Checkbox setFunction={setForm3H} StateValue={form3H} array={form3H.H3H8} name="H3H8" h3="Types of audits conducted?" CheckbobItems={["Mortality audit", "Morbidity Audit"]} other={true} />


          <InputField value={setForm3H} onChange={handleChange(setForm3H)} name="H3H9" h3="Any action being taken on Audit report in the last one year?" placeholder="Type here" />

          <Buttons formData={form3H} formName="form3h" prev="/finance-3" next="/processpoliciessops-3" />
        </div>
      </div>
    </section>
  )
}

export default Form3H