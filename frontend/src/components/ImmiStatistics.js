import { CanadaCovidCasesByDateRangeLineGraph } from './CanadaCovidCasesByDateRangeLineGraph';

const ImmiStatistics = ({ setSubPage, patients }) => {
  return (
    <div id="dd-main-container">
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex flex-wrap justify-content-around mt-5 text-center">
          <div className="dd-card pastel-blue">
            <h3 data-testid='immi-stats-count-cases'>1234</h3> /** may need to tweak */
            <p>Total Confirmed Cases</p>
          </div>
          <div className="dd-card pastel-green">
            <a onClick={() => setSubPage("My Patients")}>
              <h3 data-testid='immi-stats-count-patients'>{patients ? patients.length : 0}</h3>
              <p>Patients </p>
            </a>
          </div>
          <div className="dd-card pastel-orange">
            <a href="" onClick={() => setSubPage("Messages")}>
              <h3 data-testid='immi-stats-count-messages'>12</h3>
              <p>New Messages</p>
            </a>
          </div>
          <div className="dd-card pastel-red">
            <a href="" onClick={() => setSubPage("Appointments")}>
              <h3 data-testid='immi-stats-count-appointments'>6</h3>
              <p>Appointments</p>
            </a>
          </div>
        </div>

        <div
          id="dd-data-visuals"
          className="d-flex justify-content-around align-items-center"
        >
          <div id="dd-pie" className="pastel-blue">
            <h5 className="text-center">Pie Chart Title</h5>
            <img src="/img/piechart.png" alt="pie-chart" />
          </div>
          <div id="dd-chart" className="pastel-orange dd-card-link">
            <h4 data-testid='immi-stats-count-covid-cases'>Canadian Covid Cases</h4>
            <CanadaCovidCasesByDateRangeLineGraph />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ImmiStatistics };