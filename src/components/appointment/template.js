/* eslint-disable linebreak-style */
/* eslint-disable no-multi-spaces */
/* eslint-disable switch-colon-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const template = (context) => {
  return new Promise((resolve) => {
    let res;
    switch (context.patient.triage) {
      case 'emergency_ambulance' :  
      res = `The reported symptoms are very serious and the 
      patient may require emergency care. The patient should call an ambulance right now.`;
      break;
      case 'emergency' : 
      res = `The reported evidence appears serious and the patient should go to an emergency 
      department. If the patient can't get to the nearest emergency department, 
      he/she should call an ambulance.`;
      break;
      case 'consultation_24': 
      res = `The patient should see a doctor within 24 hours. 
      If the symptoms suddenly get worse, the patient should go to 
      the nearest emergency department .`;
      break;
      case 'consultation' : 
      res = `The patient may require medical evaluation and may need to 
      schedule an appointment with a doctor. If symptoms get worse, the 
      patient should see a doctor immediately.`;
      break;
      case 'self_care': 
      res =  `A medical consultation is advised but not strictly required; 
      the patient should observe their symptoms and consult a doctor if 
      symptoms worsen within 24 hours.`;
      break;
      default : res = '';
    }
    resolve(`
    <br/>
      <h5 class="card-title text-center">${context.patient.name}, your data has been 
      successfully sent to the affiliated hospital.</h5>
      <br/>
      <div class="card-text">
        <p>
        The hospital will contact you according to the emergency level.
        <br/>
        Your Details:
        <br/>
        Age: ${context.patient.age}
        <br/>
        Sex: ${context.patient.sex}
        <br/>
        Disease detected: ${context.patient.displayData}
        <br/>
        <br/>
        ${res}
        <br/>
        <br/>
        Click on Next to exit...
        
      </div>
      
    `);
  });
};

export default template;
