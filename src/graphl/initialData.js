import { formData } from "./form";
import { counterData } from "./counter";

const initialData = {
  data: {
    ...formData,
    ...counterData,
  },
};

export default initialData;
