import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    return (
        axiosWithAuth().get("/colors")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
    )
}

export default fetchColorService;