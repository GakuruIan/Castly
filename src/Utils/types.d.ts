declare module "../Utils/yup" {
  import { Schema } from "yup";
  const schema: Schema<unknown>; // Adjust the type if you know the specific Yup schema type
  export default schema;
}