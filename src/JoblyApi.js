import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {

    static async request(endpoint, paramsOrData = {}, verb = "get") {
    //   paramsOrData._token = ( // for now, hardcode token for "testing"
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
    //   "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
    //   "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U");

      paramsOrData._token = localStorage.getItem("_token");
  
      console.debug("API Call:", endpoint, paramsOrData, verb);
  
      try {
        return (await axios({
          method: verb,
          url: `http://localhost:3001/${endpoint}`,
          [verb === "get" ? "params" : "data"]: paramsOrData})).data;
          // axios sends query string data via the "params" key,
          // and request body data via the "data" key,
          // so the key we need depends on the HTTP verb
      }
  
      catch(err) {
        console.error("API Error:", err.response);
        let message = err.response.data.message;
        throw Array.isArray(message) ? message : [message];
      }
    }
  
    static async getCompany(handle) {
      let res = await this.request(`companies/${handle}`);
      return res.company;
    }

    static async getCompanies() {
        let res = await this.request('companies');
        return res.companies;
    }

    static async getJobs() {
        let res = await this.request('jobs');
        return res.jobs;
    }

    static async getJobByID(id) {
        let res = await this.request(`jobs/${id}`);
        return res.job;
    }
    
    static async authenticateUser(credentials) {
        let res = await this.request('login', credentials, 'post');
        return res.token;
    }

    static async registerUser(userData) {
        let res = await this.request('users', userData, 'post');
        return res.token;
    }

    static async updateUser(userData) {
        const username = userData.username;
        delete userData.username;
        delete userData.is_admin;
        let res = await this.request(`users/${username}`, userData, 'patch');
        return res.user;
    }

    static async getUser(username) {
        let res = await this.request(`users/${username}`);
        return res.user;
    }

    static async applyJob(username, jobId) {
        let res = await this.request(`jobs/${jobId}/apply`, {username, state: "applied"}, 'post');
        return res.message;
    }
  }

  export default JoblyApi;