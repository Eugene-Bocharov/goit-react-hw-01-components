import React from "react";
import PropTypes from "prop-types";
import "./Statistics.css";

function Statistic({ title, stats }) {
  return (
    <React.Fragment>
      <h1 className="ProfileTitle">
        {title ? "Statistics" : "Statistic Without Title"}
      </h1>

      <section className="statistics">

        {title && <h2 className='ProfileTitle_stat' >{title}</h2>}

        <ul className="stat-list">
          {stats.map((info) => {
            return (
              <li className="item_data" key={info.id}>
                <span className="label">{info.label}</span>
                <span className="percentage">{info.percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </React.Fragment>
  );
}

Statistic.defaultProrps = {
  title: "",
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistic;
