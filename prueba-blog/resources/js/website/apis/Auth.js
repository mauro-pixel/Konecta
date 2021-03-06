import axios from "axios";

const Auth = {
    login: (data, successCb, failCb) => {
        console.log(data);
        axios
            .post("/login", data)
            .then(response => {
                console.log(respnse);
                successCb(response);
            })
            .catch(err => {
                failCb(err);
            });
    },
    logout: (successCb, failCb) => {
        axios
            .get("/logout", {
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("user.api_token")
                }
            })
            .then(response => {
                console.log(response);
                localStorage.clear();

                successCb(response);
            })
            .catch(err => {
                failCb(err);
                alert(err.response.data.message);
            });
    },
    register: (data, successCb, failCb) => {
        console.log(data);
        axios
            .post("/register", data)
            .then(response => {
                console.log(response);

                successCb(response);
            })
            .catch(err => {
                failCb(err);
            });
    }
};

export default Auth;
