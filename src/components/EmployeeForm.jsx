import Footer from "./Footer";
import Navbar from "./Navbar";

const Form = () => {
  return (
    <>
      <Navbar />
      <div className="container col-lg-4 mt-5  bg-light  p-5 rounded-5">
        <h3 className="mb-3 text-dark d-flex justify-content-center ">ADD EMPLOYEE</h3>
      <form>
        <div class="mb-3 ">
          <input
            type="text"
            class="form-control"
            placeholder="Name"
          />
        </div>
        <div class="mb-3 ">
          <input
            type="text"
            class="form-control"
            placeholder="Designation"
          />
        </div>
        <div class="mb-3 ">
          <input
            type="text"
            class="form-control"
            placeholder="Location"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Salary"
          />
        </div>
        <div class="d-grid gap-2">

        <button type="submit" className="btn btn-primary text-white mt-3">
          Submit
        </button></div>
      </form>
      </div>
    <Footer/>  
    </>
  );
};

export default Form;
