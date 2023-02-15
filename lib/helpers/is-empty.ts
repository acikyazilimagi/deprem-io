const isEmpty = (value: unknown) => {
  // undefined or null check
  if (value == null) {
    return true;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === 'object' && JSON.stringify(value) === '{}') {
    return true;
  }

  if (typeof value === 'string' && value.trim().length === 0) {
    return true;
  }

  return false;
};

export default isEmpty;
