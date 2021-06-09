export const actionTypes = prefix => {
    return {
      REQUEST: `${prefix}_REQUEST`,
      SUCCESS: `${prefix}_SUCCESS`,
      FAILURE: `${prefix}_FAILURE`,
      prefix,
    };
};