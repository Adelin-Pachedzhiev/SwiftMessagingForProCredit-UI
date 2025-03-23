import axios from "axios";

const swiftService = {
  getAllMessages: () => axios.get("/Swift/SWIFTMessage"),
  
  insertMessage: (file) => {
    const formData = new FormData();
    formData.append("swiftInput", file);
    axios.post("/Swift/SWIFTMessageInserting", formData);
  },

  updateMessage: (id, file) => {
    const formData = new FormData();
    formData.append("swiftInput", file);

    axios.put(`/Swift/SWIFTMessage?messageId=${id}`, formData);
  },

  deleteMessage: (id) => axios.delete(`/Swift/SWIFTMessage?messageId=${id}`),

  parseFile: (file) => {
    const formData = new FormData();
    formData.append('swiftInput', file);

    return axios.post(`/Swift/GetSwiftMessage`, formData);
  }
};

export default swiftService;
