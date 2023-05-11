
const jsonDate = new Date().toJSON().slice(0,10);
const stringDate = new Date().toString().split(" ")[4];

const formattedDateTime = () => {
    return jsonDate + " " + stringDate;
};
export {formattedDateTime};