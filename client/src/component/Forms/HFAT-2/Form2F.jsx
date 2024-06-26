import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';

function Form2F() {
  turnOffbutton();
  var form2f = setLocalStorage("form2f",
  {
    H2F1: "", H2F2: "", H2F3: "", H2F4: "", H2F5: "", H2F6: "", H2F7: "", H2F8: "", H2F9: ""
  })

 const [form2F, setForm2F] = useState(JSON.parse(form2f));
  return (
    <section>
      <SidePanel id={"6"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              Information System
            </h3>
          </div>
        </div>

        <div className="formcontent">
        <Radio 
        h3="Does the facility have a Hospital Management Information System (HMIS)" 
        CheckbobItems={["Yes", "No"]} 
        name="H2F1" 
        byDefault={form2F.H2F1} 
        onClick={handleChange(setForm2F)} 
      />

      <Radio 
        h3="Does this facility do complete reporting of indicators on emergency care in HMIS?" 
        CheckbobItems={["Yes", "No"]} 
        name="H2F2" 
        byDefault={form2F.H2F2} 
        onClick={handleChange(setForm2F)} 
      />

      <InputField 
        h3="How many personnel are available for managing information system?" 
        placeholder="Type here" 
        name="H2F3" 
        value={form2F.H2F3} 
        onChange={handleChange(setForm2F)} 
      />

      <Radio 
        h3="What key indicators are generated from the emergency management information system?" 
        CheckbobItems={[
          "Numbers by type of emergencies", 
          "Length of hospital stay", 
          "Turnaround time", 
          "Disposal time", 
          "Number of deaths", 
          "Number of Referrals"
        ]} 
        name="H2F4" 
        byDefault={form2F.H2F4} 
        onClick={handleChange(setForm2F)} 
      />

      <Radio 
        h3="Whether time bound management of common emergencies is captured in MIS." 
        CheckbobItems={["Yes", "No"]} 
        name="H2F5" 
        byDefault={form2F.H2F5} 
        onClick={handleChange(setForm2F)} 
      />

      <Radio 
        h3="Which of the following alert systems does your facility have?" 
        CheckbobItems={[
          "Code blue alert system.", 
          "NSTEMI alert system", 
          "Stroke alert system.", 
          "Trauma alert system"
        ]} 
        name="H2F6" 
        byDefault={form2F.H2F6} 
        onClick={handleChange(setForm2F)} 
      />

      <Radio 
        h3="Whether Medical Officer In charge (MO/IC) uses or reviews the data for quality improvement" 
        CheckbobItems={["Yes", "No"]} 
        name="H2F7" 
        byDefault={form2F.H2F7} 
        onClick={handleChange(setForm2F)} 
      />

      <Radio 
        h3="Do you get Pre-Hospital Notification during an emergency?" 
        CheckbobItems={["Yes ___________ (How often per week)", "No"]} 
        name="H2F8" 
        byDefault={form2F.H2F8} 
        onClick={handleChange(setForm2F)} 
      />
      {/* if yes show textbox */}

      <Radio 
        h3="Infrastructure for receiving internal communication?" 
        CheckbobItems={["Yes", "No"]} 
        name="H2F9" 
        byDefault={form2F.H2F9} 
        onClick={handleChange(setForm2F)} 
      />

          <Buttons formName="form2f" formData={form2F} prev="/emergencycareservices-2" next="/finance-2" />
        </div>
      </div>
    </section>
  )
}

export default Form2F