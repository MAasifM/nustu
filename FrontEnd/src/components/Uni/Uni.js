import classes from "./Uni.module.css";

const Uni = () => {
  return (
    <div className={classes.uniDetail}>
      <section className="container-fluid p-0 m-0">
        <div className="d-flex flex-row">
          <img
            className={classes.uniLogo}
            src="/images/NUST-U Logo.png"
            alt="NUSTU Logo"
          ></img>
          <div>
            <div className={classes.uniName}>NUSTU</div>
            <div className={classes.uniTagLine}>Defining Future</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Uni;
