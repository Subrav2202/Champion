import Axios from "axios";
Axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
Axios.defaults.headers.common["Authorization"] = "";
Axios.defaults.headers.post["Content-Type"] = "application/json";

export default class useAxios {
    static async api(config) {
        return await Axios(config);
    }
    static get() {
        return this.api({ url: "/users", method: "get" });
    }
    static post(datas) {
        return this.api({ url: "/users", method: "post", data: datas });
    }
    static fileuploadservice(formData, onUploadProgress) {
        return this.api({
            url: "/users",
            method: "post",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    }
    static put(id) {
        return this.api({
            url: "/users",
            method: "put",
            params: {
                ID: id,
            },
        });
    }
    static patch(id){
        return this.api({
            url: "/users",
            method: "patch",
            params: {
                ID: id,
            },
        });
    }
    static delete(id){
        return this.api({
            url: "/users",
            method: "delete",
            params: {
                ID: id,
            },
        });
    }
}
