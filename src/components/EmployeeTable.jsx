import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./Loading";

const EmployeeTable = () => {
  const [empData, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataFromApi();
  }, []);
  const apilink = "https://jsonplaceholder.typicode.com/users";
  const fetchDataFromApi = () => {
    axios
      .get(apilink)
      .then((response) => {
        console.log(response);
        setData(response.data);
        setLoading(false);
      })
      .catch();
  };
  return (
    <>
      <div className="container mt-4 bg-secondaryp-3">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <Loading />
            ) : (
              empData.map((emp) => (
                <tr>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeTable;
