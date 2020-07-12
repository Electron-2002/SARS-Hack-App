/* eslint-disable linebreak-style */
const template = (context) => {
  return new Promise((resolve) => {
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
        Click on Next to continue...
        
        <br/>
        <br/>
        <a role="button" href="http://sarscovid.herokuapp.com/" class="btn btn-primary">COVID X-Ray</a>
      </div>
      
    `);
  });
};

export default template;
