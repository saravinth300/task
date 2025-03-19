import { badRequestResponse } from "../app/helpers/apiResponse.js";
const validateResource = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (e) {
    return badRequestResponse(res, e.errors);
  }
};

export default validateResource;
