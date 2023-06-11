import React from "react";
import images from "../../assets/images";

const AboutAppleScabDisease = () => {
  return (
    <div id="aboutAppleScabDisease" className="d-flex flex-column">
      <h1 className="fs-5 pt-4 fs-bold text-primary">
        About Apple Scab Disease
      </h1>
      <h2
        role="title"
        className="main-header d-block fw-bolder fst-italic text-uppercase display-6 mb-4"
      >
        know more about apple scab disease
      </h2>
      <div className="mb-4">
        <h3 className="fs-5 fw-bold">How to identify apple scab</h3>
        <ul className="col-12 fs-6">
          <li className="">
            Leaf spots are round, olive-green in color and up to ½-inch across.
          </li>
          <li className="">Spots are velvet-like with fringed borders.</li>
          <li className="">
            As they age, leaf spots turn dark brown to black, get bigger and
            grow together.
          </li>
          <li className="">Leaf spots often form along the leaf veins.</li>
          <li className="">
            Leaves with many leaf spots turn yellow and drop by mid-summer.
          </li>
          <li className="">
            Infected fruit have olive-green spots that turn brown and corky with
            time.
          </li>
          <li className="">
            Fruit that are infected when very young become deformed and cracked
            as the fruit grows.
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <div className="col-4 p-1 p-md-2">
            <img
              src={images.main.unhealth_apple_1}
              alt="..."
              className="w-100 h-100 rounded-1"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-4 p-1 p-md-2">
            <img
              src={images.main.unhealth_leave_1}
              alt="..."
              className="w-100 h-100 rounded-1"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-4 p-1 p-md-2">
            <img
              src={images.main.unhealth_leave_2}
              alt="..."
              className="w-100 h-100 rounded-1"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column mb-4">
        <h3 className="fs-5 fw-bold">
          How does apple scab survive and spread?
        </h3>
        <p className="fs-6">
          Apple scab is caused by the fungus Venturia inaequalis. It infects
          crabapples and apples (Malus spp.), mountain ash (Sorbus spp.), pear
          (Pyrus communis) and Cotoneaster (Cotoneaster spp.).
        </p>
        <p className="fs-6">
          The apple scab fungus has several host-specific strains that can cause
          disease on one type of plant but not any other. For example, the
          strain of V. inaequalis that infects mountain ash will only infect
          other mountain ash trees and will not infect crabapple trees. Apple
          and crabapple trees are infected by the same strain of the apple scab
          fungus because the trees are in the same genus.
        </p>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h4 className="accordion-header" id="headingOne">
              <button
                className="accordion-button fw-bold fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Life cycle of apple scab
              </button>
            </h4>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul className="col-12 fs-6">
                  <li className="">
                    Apple scab is caused by the fungus Venturia inaequalis.
                  </li>
                  <li className="">
                    In spring, these fungi shoot spores into the air.
                  </li>
                  <li className="">
                    Spores are carried by wind to newly developing leaves,
                    flowers, fruit or green twigs.
                  </li>
                  <li className="">
                    Spores need several hours of moisture on the plant surface
                    in order to start new infections.
                  </li>
                  <li className="">
                    These infections grow into spots that can produce more
                  </li>
                  <li className="">
                    Spores are spread by wind, splashing rain or irrigation
                    throughout the tree canopy or to neighboring trees, starting
                    new infections.
                  </li>
                  <li className="">
                    The infection cycle can repeat many times throughout the
                    growing season whenever leaves remain wet long enough.
                  </li>
                  <li className="">
                    Warm, rainy weather in the spring and summer creates ideal
                    conditions for apple scab.
                  </li>
                  <li className="">
                    Leaves with many leaf spots turn yellow and fall off early.
                    This weakens the tree.
                  </li>
                  <li className="">
                    Many ornamental crabapple trees are susceptible to apple
                    scab, so the disease can be spread to your fruit trees from
                    nearby flowering crabs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column mb-4">
        <h3 className="fs-5 fw-bold">
          How to manage apple scab in apples and crabapples
        </h3>
        <p className="fs-6">
          Planting disease resistant varieties is the best way to prevent apple
          scab. Many varieties of apple and crabapple trees are resistant or
          completely immune to apple scab.
        </p>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h4 className="accordion-header" id="headingOne">
              <button
                className="accordion-button fw-bold fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Cultural practices
              </button>
            </h4>
            <div
              id="collapse1"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h5 className="fw-bold">Clean up leaves in fall</h5>
                <p className="fs-5">
                  Remove fallen leaves in fall to get rid of places where the
                  fungus can survive the winter to re-infect trees the next
                  year. Even with good fall clean up of fallen leaves, spores
                  from nearby apple trees could travel to your property,
                  starting the infection cycle again.
                </p>
                <ul className="col-12 fs-6">
                  <li className="">
                    Rake up and destroy fallen leaves before the first snowfall.
                  </li>
                  <li className="">
                    Infected leaves can be burned, buried or composted.
                  </li>
                  <li className="">
                    Instead of raking, leaves can be chopped with a mulching
                    lawn mower.
                  </li>
                  <li className="">
                    Fall lawn fertilizer applications will help breakdown leaves
                    that have been chopped with a mulching lawn mower.
                  </li>
                  <li className="">
                    In mulched areas, urea can be applied to chopped leaf litter
                    to help with decomposition.
                  </li>
                </ul>
                <h5 className="fw-bold">Plant and prune correctly</h5>
                <p className="fs-5">
                  The apple scab fungus needs moisture on the leaves to start a
                  new infection. A well pruned tree with an open canopy allows
                  air to move through the tree and dry the leaves quickly. This
                  can help reduce the severity of apple scab in a tree. For
                  proper pruning of apples, see Growing apples in the home
                  garden.
                </p>
                <ul className="col-12 fs-6">
                  <li className="">
                    Do not overcrowd plants. Use the mature size of the tree as
                    a spacing guide.
                  </li>
                  <li className="">
                    Prune trees so that the branches are spaced far enough apart
                    to let air move through the branches and dry the leaves
                    quickly.
                  </li>
                  <li className="">
                    Remove upright suckers and water sprouts that have formed
                    along the main trunk or within the canopy.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAppleScabDisease;
