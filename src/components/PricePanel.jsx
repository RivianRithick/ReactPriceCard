import React from "react";

const PricePanel = ({ data }) => {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {data.map((item, index) => {
            return (
              <>
                <div key={index}>
                  <div className="col">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title text-muted text-uppercase text-center">
                          {item.title}
                        </h5>
                        <h6 className="card-price text-center">
                          {item.price}
                          <span className="period">/month</span>
                        </h6>
                        <hr />
                        <ul className="icon">
                          <li>
                            <i className="bi bi-check"></i>
                            {item.user}
                          </li>
                          <li>
                            <i className="bi bi-check"></i>
                            {item.storage}
                          </li>
                          <li>
                            <i className="bi bi-check"></i>
                            Unlimited Public Projects
                          </li>
                          <li>
                            <i className="bi bi-check"></i>
                            Community Access
                          </li>
                          <li className={item.project}>
                            <i className={item.projectIcon}></i>
                            Unlimited Private Projects
                          </li>
                          <li className={item.phone}>
                            <i className={item.phoneIcon}></i>
                            Dedicated Phone Support
                          </li>
                          <li className={item.subDomain}>
                            <i className={item.subDomainIcon}></i>

                            {item.domain}
                          </li>
                          <li className={item.monthly}>
                            <i className={item.monthlyIcon}></i>
                            Monthly Status Reports
                          </li>
                        </ul>
                        <div className="d-grid">
                          <a
                            href="#"
                            className="btn btn-primary text-uppercase"
                          >
                            Button
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricePanel;
