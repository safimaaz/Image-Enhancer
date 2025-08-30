import axios from "axios";

const API_KEY = '';
const BASE_URL = 'https://techhk.aoscdn.com';
const MAX_LIMIT = 20;

export const enhancedImageApi = async (file) => {
    try {        
        const taskId = await uploadImage(file);
        const enhancedImageData = await pollingForEnhancedImage(taskId);        
        return enhancedImageData;
    } catch (err) {
        console.log("Error in image enhancing : ", err.message)
        return err
    }
}

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image_file', file);
    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            "X-API-KEY" : API_KEY,
        }
    });
    
    if(!data?.data?.task_id) {
        throw new Error("Failed to upload image! Task id not found")
    }
    return data?.data?.task_id;
}

const fetchEnhancedImage = async (taskId) => {
    const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
        headers: {
            "X-API-KEY" : API_KEY,
        }
    })
    
    if(!data?.data?.image){
        throw new Error("Failed to fetch enhanced image.");
    }

    return data?.data?.image;
}

const pollingForEnhancedImage = async (taskId, tries = 0) => {
    const data = await fetchEnhancedImage(taskId);
    
    if(data?.state === 4){
        if(tries >= MAX_LIMIT){
            throw new Error("Max limit reached to fetch images");
        }

        return pollingForEnhancedImage(taskId, tries + 1)
    }

    return data;
}