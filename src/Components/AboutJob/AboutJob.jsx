import React from "react";
import classes from "./AboutJob.module.css";
import Ready from "../../Assests/aboutLady.png";
import Down from "../../Assests/abt.png";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const AboutJob = () => {
  return (
    <div className={classes.container}>
      <div className={classes.jobWrap}>
        <div className={classes.jobImage}>
          <div className={classes.image1}>
            <img src={Ready} alt="Job Ready" />
          </div>
          <div className={classes.image2}>
            <img src={Down} alt="Job Ready" />
          </div>
        </div>
        <div className={classes.jobText}>
          <p>
            NIIT is a leading Skills and Talent Development Corporation that is
            building a manpower pool for global industry requirements. The
            company, which was set up in 1981 to help the nascent IT industry
            overcome its human resource challenges, today ranks among the
            world's leading training companies owing to its vast and
            comprehensive array of talent development programs. With a footprint
            in over 30 countries, NIIT offers training and development solutions
            to Individuals, Enterprises and Institutions.
          </p>
          <p>
            With a strong focus on assuming leadership role in the Digital
            Learning World and to further accelerate NIIT's growth and
            profitability, the company has charted a focused business strategy
            to address the Digital Transformation needs for individuals and
            corporate customers by offering training and consulting to help them
            re-invent themselves & their organisations.
          </p>
          <p>
            Through NIIT Digital, learners are able to access their learning
            plans and all associated content and services through an intuitive
            dashboard on connected Desktops/ Tabs/ Smartphones. They are also
            able to attend LIVE Instructor-led classes by some of the best NIIT
            instructors, view recorded sessions, take quizzes, and interact with
            their instructors & peers, in addition to a host of other features.
          </p>
        </div>
      </div>
      <div className={classes.business}>
        <h3>
          NIIT has two main lines of business across the globe – Corporate
          Learning Group and Skills & Careers Business.
        </h3>
        <div className={classes.cardWrap}>
          <div className={classes.card}>
            <p>
              IIT's Corporate Learning Group (CLG) offers Managed Training
              Services (MTS) to market-leading companies in North America,
              Europe, Asia, and Oceania. The Skills & Careers Business (SNC)
              delivers a diverse range of learning and talent development
              programs to millions of individual and corporate learners in areas
              including Digital Transformation, Banking, Finance & Insurance,
              Soft Skills, Business Process Excellence, Retail Sales Enablement,
              Management Education, Multi-Sectoral Vocational Skills, Digital
              Media Marketing, and new-age IT. NIIT has incubated, StackRoute,
              as a digital transformation partner for corporates to build
              multi-skilled full stack developers at scale.
            </p>
          </div>
          <div className={classes.card}>
            <p>
              As the Most Trusted Training Brand in India for 5th year in a row
              (Brand Trust Report, 2017), NIIT's learning and talent development
              solutions, continue to receive widespread recognition globally.
              NIIT has been named among the Top 20 Training Outsourcing
              Companies for the past twelve consecutive years by Training
              Industry, Inc. USA. Further, leading Indian ICT journal Dataquest
              has conferred upon NIIT the 'Top Training Company' award
              successively for the past 20 years, since the inception of this
              category. NIIT has also been featured as the 'Most Respected
              Education Company'- 2016 by leading financial magazine, Business
              World.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.award}>
        <h3>Recent Awards and Acknowledgments</h3>
        <ul className={classes.awardList}>
          <li>
            NIIT recognised as ‘Best Education Company to work with” at Indian
            Education Congress & Awards 2020
          </li>
          <li>
            NIIT earned 37 coveted Brandon Hall Group HCM Excellence awards
            jointly with customers. The company was named a top winner for 2019
          </li>
          <li>
            NIIT bagged seven 2019 Brandon Hall Excellence in Technology Gold
            awards jointly with MetLife for MetLife Distribution Academy
          </li>
          <li>
            NIIT bagged Gold Learning Technologies Award 2019 jointly with
            MetLife for MetLife Distribution Academy
          </li>
          <li>
            NIIT ranked among the Top 20 Training Outsourcing Companies by
            TrainingIndustry.com 2019 for the twelfth consecutive year.{" "}
          </li>
          <li>
            NIIT named to the TrainingIndustry.com Top 20 List in Content
            Development 2019 for the ninth consecutive year.
          </li>
          <li>
            NIIT was selected as a 2019 Top 20 Gamification Company for the
            sixth consecutive year by TrainingIndustry.com.
          </li>
          <li>
            NIIT has been listed among the Top 20 Highest-Performing Learning
            Providers 2019 by the Learning and Performance Institute, UK.
          </li>
          <li>
            NIIT was accredited by the Learning & Performance Institute, UK
          </li>
          <li>
            NIIT named a Fosway 9-Grid Digital Learning Strategic Challenger
            2019
          </li>
          <li>
            NIIT named a leader in the Nelson Hall Learning Bps Neat Evaluation
            2019
          </li>
          <li>
            NIIT’s Corporate Learning Group earned a record 50 industry awards
            in 2019 including 44 Brandon Hall awards jointly with customers.
          </li>
          <li>
            NIIT Bagged the IDA Education Awards 2019 as the
            ‘Product/solution/service of the Year for K-12 education’ for its
            product Practice Plus, in the Education sector
          </li>
        </ul>
      </div>
      <div className={classes.talent}>
        <p>
          NIIT is a leading Skills and Talent Development Corporation that is
          building a manpower pool for global industry requirements. The
          company, which was set up in 1981 to help the nascent IT industry
          overcome its human resource challenges, today ranks among the world’s
          leading training companies owing to its vast, yet comprehensive array
          of talent development programs. With a footprint across 30 nations,
          NIIT offers training and development solutions to Individuals,
          Enterprises and Institutions.
        </p>
      </div>
    </div>
  );
};

export default AboutJob;
